"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    FB?: {
      XFBML: { parse: (element?: HTMLElement) => void };
    };
  }
}

type FacebookFeedClientProps = {
  postUrls: string[];
  pageUrl: string;
  fallbackLabel: string;
  emptyStateLabel: string;
  fbLocale?: string;
};

/**
 * Client component renderujący FB Embedded Posts (XFBML).
 * Lazy-load SDK przez IntersectionObserver — SDK ładujemy dopiero gdy
 * sekcja zbliża się do viewportu, aby nie obciążać LCP strony.
 */
export function FacebookFeedClient({
  postUrls,
  pageUrl,
  fallbackLabel,
  emptyStateLabel,
  fbLocale = "pl_PL",
}: FacebookFeedClientProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const widgetContainerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [state, setState] = useState<
    "idle" | "loading" | "rendered" | "failed"
  >("idle");

  // Krok 1: czekaj aż sekcja pojawi się w viewporcie (200px zapas), wtedy aktywuj ładowanie.
  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current || shouldLoad) {
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShouldLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    io.observe(sectionRef.current);
    return () => io.disconnect();
  }, [shouldLoad]);

  // Krok 2: wstrzyknij SDK Facebooka jednorazowo (chroniony id-em scriptu).
  useEffect(() => {
    if (!shouldLoad || typeof window === "undefined") return;
    if (document.getElementById("facebook-jssdk")) return;
    const script = document.createElement("script");
    script.id = "facebook-jssdk";
    script.async = true;
    script.defer = true;
    script.crossOrigin = "anonymous";
    script.src = `https://connect.facebook.net/${fbLocale}/sdk.js#xfbml=1&version=v19.0`;
    document.body.appendChild(script);
  }, [shouldLoad, fbLocale]);

  // Krok 3: gdy SDK gotowe — parse XFBML, wykryj sukces/porażkę, ustaw stan UI.
  useEffect(() => {
    if (
      !shouldLoad ||
      typeof window === "undefined" ||
      postUrls.length === 0 ||
      state === "rendered"
    ) {
      return;
    }
    setState("loading");

    const tryParse = () => {
      if (!window.FB || !widgetContainerRef.current) return false;
      window.FB.XFBML.parse(widgetContainerRef.current);
      return true;
    };

    let attempts = 0;
    const parseTimer = window.setInterval(() => {
      attempts++;
      if (tryParse() || attempts > 40) window.clearInterval(parseTimer);
    }, 250);

    const successPoll = window.setInterval(() => {
      const posts = widgetContainerRef.current?.querySelectorAll(".fb-post");
      if (!posts || posts.length === 0) return;
      const rendered = Array.from(posts).some(
        (p) =>
          p.getAttribute("fb-xfbml-state") === "rendered" &&
          !!p.querySelector("iframe")
      );
      if (rendered) {
        setState("rendered");
        window.clearInterval(successPoll);
      }
    }, 500);

    const failTimer = window.setTimeout(() => {
      const posts = widgetContainerRef.current?.querySelectorAll(".fb-post");
      const rendered =
        posts &&
        Array.from(posts).some(
          (p) =>
            p.getAttribute("fb-xfbml-state") === "rendered" &&
            !!p.querySelector("iframe")
        );
      setState(rendered ? "rendered" : "failed");
    }, 12000);

    return () => {
      window.clearInterval(parseTimer);
      window.clearInterval(successPoll);
      window.clearTimeout(failTimer);
    };
  }, [shouldLoad, postUrls, state]);

  // Stan pusty — brak skonfigurowanych postów. Pokazujemy CTA do profilu.
  if (postUrls.length === 0) {
    return (
      <div className="mx-auto w-full max-w-[560px] rounded-3xl border border-primary/10 bg-white p-8 text-center shadow-sm shadow-primary/5">
        <p className="mb-4 text-sm text-primary/80">
          Aktualnie brak postów do wyświetlenia.
        </p>
        <a
          href={pageUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white shadow-md shadow-accent/30 transition hover:bg-accent-hover"
        >
          {emptyStateLabel}
        </a>
      </div>
    );
  }

  return (
    <div
      ref={sectionRef}
      className="mx-auto w-full max-w-[560px] overflow-hidden rounded-3xl border border-primary/10 bg-white shadow-sm shadow-primary/5"
    >
      <div id="fb-root" />
      <div
        ref={widgetContainerRef}
        className="fb-feed-scroll relative max-h-[760px] overflow-y-auto"
        role="region"
        aria-label="Lista postów z Facebooka Fundacji"
        tabIndex={0}
        style={{
          scrollbarGutter: "stable both-edges",
          scrollbarWidth: "thin",
          scrollbarColor: "#cbd5e1 transparent",
        }}
      >
        {state !== "rendered" && state !== "failed" && (
          <div
            className="sticky top-0 z-10 flex h-[760px] items-center justify-center bg-white text-sm text-primary/70"
            aria-live="polite"
          >
            <div className="flex flex-col items-center gap-2">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary/20 border-t-accent" />
              <span>Ładuję posty Facebooka…</span>
            </div>
          </div>
        )}

        {state === "failed" && (
          <div className="flex h-[760px] items-center justify-center p-6 text-center">
            <div className="space-y-3">
              <p className="text-sm text-primary/80">
                Przeglądarka blokuje osadzone widżety Facebooka. Możesz otworzyć
                nasz profil bezpośrednio:
              </p>
              <a
                href={pageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white shadow-md shadow-accent/30 transition hover:bg-accent-hover"
              >
                {fallbackLabel}
              </a>
            </div>
          </div>
        )}

        <div className="flex flex-col items-center gap-4 p-3">
          {postUrls.map((url) => (
            <div
              key={url}
              className="fb-post"
              data-href={url}
              data-width="500"
              data-show-text="true"
            >
              <blockquote cite={url} className="fb-xfbml-parse-ignore">
                <a href={url} target="_blank" rel="noopener noreferrer">
                  Post na Facebooku
                </a>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
