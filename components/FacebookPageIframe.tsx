"use client";

import { useEffect, useRef, useState } from "react";

type FacebookPageIframeProps = {
  /** ID lub URL strony Facebook (np. "https://www.facebook.com/friendshipwithoutborders0"). */
  pageUrl: string;
  /** Szerokość iframe — Facebook wspiera 180-500 px. Domyślnie 500. */
  width?: number;
  /** Wysokość iframe w pikselach — 70-1000 (FB ogranicza). Domyślnie 760. */
  height?: number;
  /** Czy pokazać banner (cover photo) strony. Domyślnie true. */
  showCover?: boolean;
  /** Czy pokazać twarze fanów (facepile). Domyślnie true. */
  showFacepile?: boolean;
  /** Czy zwęzić nagłówek. Domyślnie false (pełny nagłówek). */
  smallHeader?: boolean;
  /** Etykieta linku fallback (gdy iframe się nie załaduje). */
  fallbackLabel?: string;
};

/**
 * Facebook Page Plugin embed iframe — parytet z wzorcem bdi-www-3
 * (components/FacebookPageIframe.tsx, /projekty/rozwoj-umiejetnosci).
 *
 * Zastępuje FacebookFeedClient (fb-post embeds + Graph API/JSON) — używa
 * oficjalnego Page Plugin z facebook.com/plugins/page.php, który nie wymaga
 * Graph API tokenu ani SDK. Renderuje timeline strony z najnowszymi postami
 * automatycznie (Facebook sam aktualizuje).
 *
 * Zalety: bez tokenu/scope/admin; auto-aktualizacja postów; oficjalne wsparcie.
 * Wady: wymaga third-party cookies; stała wysokość; stylowanie ograniczone.
 */
export function FacebookPageIframe({
  pageUrl,
  width = 500,
  height = 760,
  showCover = true,
  showFacepile = true,
  smallHeader = false,
  fallbackLabel = "Otwórz profil Fundacji na Facebooku",
}: FacebookPageIframeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [, setIframeLoaded] = useState(false);

  /* Lazy load: ładuje iframe gdy sekcja staje się widoczna (200 px przed wejściem). */
  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;
    if (shouldLoad) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShouldLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    io.observe(containerRef.current);
    return () => io.disconnect();
  }, [shouldLoad]);

  /* Buduje URL Page Plugin zgodnie z dokumentacją Meta. */
  const params = new URLSearchParams({
    href: pageUrl,
    tabs: "timeline",
    width: String(width),
    height: String(height),
    small_header: String(smallHeader),
    adapt_container_width: "true",
    hide_cover: String(!showCover),
    show_facepile: String(showFacepile),
    locale: "pl_PL",
  });
  const iframeSrc = `https://www.facebook.com/plugins/page.php?${params.toString()}`;

  return (
    <div
      ref={containerRef}
      className="mx-auto w-full overflow-hidden rounded-3xl border border-primary/10 bg-white shadow-sm shadow-primary/5"
      style={{ maxWidth: width }}
    >
      {!shouldLoad && (
        <div
          className="flex items-center justify-center bg-white text-sm text-primary/70"
          style={{ height: `${height}px` }}
          aria-live="polite"
        >
          <div className="flex flex-col items-center gap-2">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary/20 border-t-accent" />
            <span>Ładuję widżet Facebook…</span>
          </div>
        </div>
      )}

      {shouldLoad && (
        <iframe
          src={iframeSrc}
          width={width}
          height={height}
          style={{ border: "none", overflow: "hidden", display: "block" }}
          scrolling="no"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          loading="lazy"
          title="Facebook — Fundacja Przyjaźń bez Granic"
          onLoad={() => setIframeLoaded(true)}
        />
      )}

      {/* Link fallback widoczny zawsze pod iframe — gwarantuje dostęp nawet jeśli
          iframe jest zablokowany przez ustawienia prywatności przeglądarki. */}
      <div className="border-t border-primary/10 bg-sand/40 p-3 text-center">
        <a
          href={pageUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-accent underline-offset-4 hover:underline"
        >
          {fallbackLabel}
        </a>
      </div>
    </div>
  );
}
