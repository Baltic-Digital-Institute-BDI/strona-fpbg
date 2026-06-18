import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionHeading } from "@/components/SectionHeading";
import { newsPosts } from "@/content/data";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return newsPosts.map((post) => ({ slug: post.slug }));
}

function formatDate(iso: string) {
  const parsed = new Date(iso);
  if (Number.isNaN(parsed.getTime())) return iso;
  return parsed.toLocaleDateString("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = newsPosts.find((item) => item.slug === slug);
  if (!post) return notFound();

  const hasStructuredBody = Boolean(post.sections && post.sections.length > 0);

  return (
    <div className="mx-auto max-w-4xl space-y-10 px-4 py-12 md:px-6 md:py-16">
      <SectionHeading
        eyebrow={post.category}
        title={post.title}
        as="h1"
        description={`Data publikacji: ${formatDate(post.date)}`}
      />

      {post.lead ? (
        <p className="text-lg font-medium leading-relaxed text-primary md:text-xl">
          {post.lead}
        </p>
      ) : null}

      {post.highlights && post.highlights.length > 0 ? (
        <section className="grid gap-4 sm:grid-cols-3">
          {post.highlights.map((metric) => (
            <div
              key={metric.label}
              className="rounded-3xl border border-primary/10 bg-white p-5 shadow-sm shadow-primary/5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                {metric.label}
              </p>
              <p className="mt-2 text-2xl font-semibold text-primary">
                {metric.value}
              </p>
            </div>
          ))}
        </section>
      ) : null}

      <article className="space-y-8 rounded-3xl border border-primary/10 bg-white p-6 shadow-sm shadow-primary/5 md:p-8">
        {hasStructuredBody ? (
          post.sections!.map((section, index) => (
            <section key={section.heading ?? `section-${index}`} className="space-y-3">
              {section.heading ? (
                <h2 className="font-serif text-2xl text-primary">
                  {section.heading}
                </h2>
              ) : null}
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="text-sm leading-relaxed text-primary/85">
                  {paragraph}
                </p>
              ))}
              {section.bullets && section.bullets.length > 0 ? (
                <ul className="space-y-2 pl-1">
                  {section.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-2 text-sm leading-relaxed text-primary/85"
                    >
                      <span aria-hidden className="mt-1 text-accent">
                        &bull;
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))
        ) : (
          post.body.split("\n").map((paragraph) => (
            <p key={paragraph} className="text-sm leading-relaxed text-primary/85">
              {paragraph}
            </p>
          ))
        )}
      </article>

      {(post.partners && post.partners.length > 0) ||
      (post.fundingSources && post.fundingSources.length > 0) ? (
        <section className="grid gap-6 md:grid-cols-2">
          {post.partners && post.partners.length > 0 ? (
            <div className="rounded-3xl border border-primary/10 bg-sand p-6 shadow-sm shadow-primary/5">
              <h2 className="text-lg font-semibold text-primary">Partnerzy</h2>
              <ul className="mt-2 space-y-1 text-sm text-primary/80">
                {post.partners.map((partner) => (
                  <li key={partner}>- {partner}</li>
                ))}
              </ul>
            </div>
          ) : null}
          {post.fundingSources && post.fundingSources.length > 0 ? (
            <div className="rounded-3xl border border-primary/10 bg-sand p-6 shadow-sm shadow-primary/5">
              <h2 className="text-lg font-semibold text-primary">
                Źródła finansowania
              </h2>
              <ul className="mt-2 space-y-1 text-sm text-primary/80">
                {post.fundingSources.map((source) => (
                  <li key={source}>- {source}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </section>
      ) : null}

      {post.sources && post.sources.length > 0 ? (
        <section className="rounded-3xl border border-primary/10 bg-white p-6 shadow-sm shadow-primary/5">
          <h2 className="text-lg font-semibold text-primary">Źródła i odnośniki</h2>
          <p className="mt-2 text-sm text-primary/80">
            Linki zewnętrzne stanowią cyfrowe dowody rzeczowe zgodnie ze standardem
            transparentnej komunikacji FPbG.
          </p>
          <ul className="mt-4 space-y-2">
            {post.sources.map((source) => (
              <li key={source.url}>
                <a
                  href={source.url}
                  className="text-sm font-semibold text-accent hover:text-accent-hover"
                  rel="noreferrer"
                  target="_blank"
                >
                  {source.label} &rarr;
                </a>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {post.note ? (
        <p className="text-xs italic text-primary/60">{post.note}</p>
      ) : null}

      <div className="pt-2">
        <Link
          href="/aktualnosci"
          className="text-sm font-semibold text-accent hover:text-accent-hover"
        >
          &larr; Wróć do aktualności
        </Link>
      </div>
    </div>
  );
}
