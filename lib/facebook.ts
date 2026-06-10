/**
 * Pobiera publiczne posty z FB Page przez Graph API z 15-minutowym cache.
 * Fallback do public/data/facebook-posts.json gdy brak tokenu.
 *
 * Konfiguracja (opcjonalna, włącz dla auto-update):
 *   FB_PAGE_ACCESS_TOKEN - Page Access Token (long-lived)
 *   FB_PAGE_ID           - ID strony (domyślnie nazwa profilu Fundacji)
 */

import { promises as fs } from "fs";
import path from "path";

export type FacebookPost = {
  url: string;
  message?: string;
  createdTime?: string;
};

export type FacebookFeedConfig = {
  posts: FacebookPost[];
  pageUrl: string;
  source: "api" | "json" | "empty";
};

const DEFAULT_PAGE_URL = "https://www.facebook.com/friendshipwithoutborders0";
const DEFAULT_PAGE_ID = "friendshipwithoutborders0";
const CACHE_REVALIDATE_SECONDS = 900;
const POST_LIMIT = 25;

type GraphApiPost = {
  id: string;
  message?: string;
  permalink_url?: string;
  created_time?: string;
};

type GraphApiResponse = {
  data?: GraphApiPost[];
  error?: { message: string; code: number; type: string };
};

// Główny entry point: zwraca posty z Graph API (jeśli token), JSON fallback lub stan pusty.
export async function getFacebookPosts(): Promise<FacebookFeedConfig> {
  const token = process.env.FB_PAGE_ACCESS_TOKEN;
  const pageId = process.env.FB_PAGE_ID || DEFAULT_PAGE_ID;

  if (token) {
    const apiResult = await fetchFromGraphApi(pageId, token);
    if (apiResult) return apiResult;
  }

  const jsonResult = await readJsonFallback();
  if (jsonResult) return jsonResult;

  return { posts: [], pageUrl: DEFAULT_PAGE_URL, source: "empty" };
}

async function fetchFromGraphApi(
  pageId: string,
  token: string
): Promise<FacebookFeedConfig | null> {
  const url =
    `https://graph.facebook.com/v19.0/${encodeURIComponent(pageId)}/posts` +
    `?fields=id,message,permalink_url,created_time` +
    `&limit=${POST_LIMIT}` +
    `&access_token=${encodeURIComponent(token)}`;

  try {
    const res = await fetch(url, {
      next: { revalidate: CACHE_REVALIDATE_SECONDS, tags: ["fb-posts"] },
    });
    if (!res.ok) return null;
    const data = (await res.json()) as GraphApiResponse;
    if (data.error || !Array.isArray(data.data) || data.data.length === 0) {
      return null;
    }

    const posts: FacebookPost[] = data.data
      .filter((p) => !!p.permalink_url)
      .map((p) => ({
        url: p.permalink_url as string,
        message: p.message,
        createdTime: p.created_time,
      }));

    if (posts.length === 0) return null;
    return { posts, pageUrl: DEFAULT_PAGE_URL, source: "api" };
  } catch {
    return null;
  }
}

async function readJsonFallback(): Promise<FacebookFeedConfig | null> {
  try {
    const jsonPath = path.join(
      process.cwd(),
      "public",
      "data",
      "facebook-posts.json"
    );
    const raw = await fs.readFile(jsonPath, "utf-8");
    const parsed = JSON.parse(raw) as { posts?: unknown; pageUrl?: unknown };
    if (
      !Array.isArray(parsed.posts) ||
      parsed.posts.length === 0 ||
      !parsed.posts.every((p) => typeof p === "string")
    ) {
      return null;
    }
    return {
      posts: (parsed.posts as string[]).map((url) => ({ url })),
      pageUrl:
        typeof parsed.pageUrl === "string" ? parsed.pageUrl : DEFAULT_PAGE_URL,
      source: "json",
    };
  } catch {
    return null;
  }
}
