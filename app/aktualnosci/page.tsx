import Link from "next/link";
import { FacebookFeed } from "@/components/FacebookFeed";
import { SectionHeading } from "@/components/SectionHeading";
import { newsPosts } from "@/content/data";

export default function NewsPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-4 py-12 md:px-6 md:py-16">
      <SectionHeading
        eyebrow="Aktualności"
        title="Transparentna komunikacja FPbG"
        description="Publikujemy komunikaty o działaniach fundacji, aby partnerzy i grantodawcy mieli stały wgląd w postępy."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {newsPosts.map((post) => (
          <article
            key={post.slug}
            className="flex h-full flex-col rounded-3xl border border-primary/10 bg-white p-6 shadow-sm shadow-primary/5"
          >
            <div className="flex items-center justify-between text-xs font-semibold text-primary/70">
              <span className="rounded-full bg-sand px-3 py-1">{post.category}</span>
              <span>{post.date}</span>
            </div>
            <h3 className="mt-3 text-xl font-semibold text-primary">{post.title}</h3>
            <p className="mt-2 text-sm text-primary/80">{post.excerpt}</p>
            <div className="mt-auto pt-4">
              <Link
                href={`/aktualnosci/${post.slug}`}
                className="text-sm font-semibold text-accent hover:text-accent-hover"
              >
                Czytaj więcej →
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Sekcja FB Feed - dynamiczny zrzut tablicy Facebooka, uzupełnia statyczne newsy. */}
      <FacebookFeed />
    </div>
  );
}
