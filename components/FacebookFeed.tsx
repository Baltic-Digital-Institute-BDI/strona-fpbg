import { FacebookFeedClient } from "@/components/FacebookFeedClient";
import { SectionHeading } from "@/components/SectionHeading";
import { getFacebookPosts } from "@/lib/facebook";

type FacebookFeedProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  linkText?: string;
};

/**
 * Sekcja "Co u nas?" z osadzonymi postami z Facebooka Fundacji.
 * Server component pobiera dane (Graph API lub JSON fallback),
 * client renderuje plugin XFBML z lazy-loadem SDK.
 */
export async function FacebookFeed({
  eyebrow = "Społeczność",
  title = "Co u nas? Najnowsze posty na Facebooku",
  description = "Śledź bieżące działania Fundacji na naszej tablicy. Przewiń, aby zobaczyć starsze wpisy.",
  linkText = "Otwórz pełny profil na Facebooku",
}: FacebookFeedProps = {}) {
  const config = await getFacebookPosts();

  return (
    <section
      className="mx-auto max-w-6xl space-y-6 px-4 md:px-6"
      aria-label="Najnowsze posty z Facebooka Fundacji"
    >
      <SectionHeading
        eyebrow={eyebrow}
        title={title}
        description={description}
      />

      <FacebookFeedClient
        postUrls={config.posts.map((p) => p.url)}
        pageUrl={config.pageUrl}
        fallbackLabel={linkText}
        emptyStateLabel={linkText}
      />

      <p className="text-center text-sm text-primary/80">
        <a
          href={config.pageUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-accent underline underline-offset-4 hover:text-accent-hover"
        >
          {linkText}
        </a>
      </p>
    </section>
  );
}
