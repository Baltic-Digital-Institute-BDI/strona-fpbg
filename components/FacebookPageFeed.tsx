import { FacebookPageIframe } from "@/components/FacebookPageIframe";
import { SectionHeading } from "@/components/SectionHeading";

const FB_PAGE_URL = "https://www.facebook.com/friendshipwithoutborders0"; // Fundacja Przyjaźń bez Granic

type FacebookPageFeedProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  linkText?: string;
};

/**
 * Sekcja "Co u nas?" z osadzonym Facebook Page Plugin (iframe) — parytet
 * z wzorcem bdi-www-3 (FacebookPageEmbedTest + FacebookPageIframe).
 *
 * Zastępuje sekcję FacebookFeed (Graph API/fb-post + statyczny JSON):
 * posty aktualizują się automatycznie po stronie Facebooka, bez tokenu
 * i bez ręcznej aktualizacji listy URL-i.
 */
export function FacebookPageFeed({
  eyebrow = "Społeczność",
  title = "Co u nas? Najnowsze posty na Facebooku",
  description = "Śledź bieżące działania Fundacji na naszej tablicy. Widżet pokazuje zawsze aktualne wpisy.",
  linkText = "Otwórz pełny profil na Facebooku",
}: FacebookPageFeedProps = {}) {
  return (
    <section
      className="mx-auto max-w-6xl space-y-6 px-4 md:px-6"
      aria-label="Najnowsze posty z Facebooka Fundacji"
    >
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />

      <FacebookPageIframe
        pageUrl={FB_PAGE_URL}
        width={500}
        height={760}
        showCover
        showFacepile
        fallbackLabel={linkText}
      />

      <p className="text-center text-sm text-primary/70">
        <a
          href={FB_PAGE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:text-accent"
        >
          {linkText}
        </a>
      </p>
    </section>
  );
}
