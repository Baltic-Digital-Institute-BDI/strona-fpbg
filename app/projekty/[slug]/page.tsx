import { notFound } from "next/navigation";
import { StatusBadge } from "@/components/StatusBadge";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/content/data";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects
    .filter((project) => project.slug !== "rozwoj-umiejetnosci")
    .map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return notFound();

  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4 py-12 md:px-6 md:py-16">
      <SectionHeading
        eyebrow="Karta projektu"
        title={project.title}
        as="h1"
        description={project.summary}
      />

      <div className="flex flex-wrap items-center gap-3">
        <StatusBadge
          label={project.status}
          tone={project.status === "Zrealizowany" ? "success" : "info"}
        />
        <div className="rounded-full bg-sand px-4 py-2 text-sm font-semibold text-primary">
          Okres: {project.period}
        </div>
        <div className="rounded-full bg-sand px-4 py-2 text-sm font-semibold text-primary">
          {project.strategicPillar}
        </div>
      </div>

      <section className="grid gap-4 md:grid-cols-3">
        {project.metrics.map((metric) => (
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

      <section className="grid gap-6 md:grid-cols-2">
        <article className="rounded-3xl border border-primary/10 bg-white p-6 shadow-sm shadow-primary/5">
          <h2 className="text-lg font-semibold text-primary">Kontekst</h2>
          <p className="mt-2 text-sm text-primary/80">{project.context}</p>
        </article>
        <article className="rounded-3xl border border-primary/10 bg-white p-6 shadow-sm shadow-primary/5">
          <h2 className="text-lg font-semibold text-primary">Działania</h2>
          <p className="mt-2 text-sm text-primary/80">{project.action}</p>
        </article>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl border border-primary/10 bg-sand p-6 shadow-sm shadow-primary/5">
          <h2 className="text-lg font-semibold text-primary">Beneficjenci</h2>
          <p className="mt-2 text-sm text-primary/80">{project.beneficiaries}</p>
        </div>
        <div className="rounded-3xl border border-primary/10 bg-sand p-6 shadow-sm shadow-primary/5">
          <h2 className="text-lg font-semibold text-primary">Partnerzy</h2>
          <ul className="mt-2 space-y-1 text-sm text-primary/80">
            {project.partners.map((partner) => (
              <li key={partner}>- {partner}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-primary/10 bg-sand p-6 shadow-sm shadow-primary/5">
          <h2 className="text-lg font-semibold text-primary">Źródła finansowania</h2>
          <ul className="mt-2 space-y-1 text-sm text-primary/80">
            {project.fundingSources.map((source) => (
              <li key={source}>- {source}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rounded-3xl border border-primary/10 bg-white p-6 shadow-sm shadow-primary/5">
        <h2 className="text-lg font-semibold text-primary">Dowody i odnośniki</h2>
        <p className="mt-2 text-sm text-primary/80">
          Linki zewnętrzne stanowią cyfrowe dowody rzeczowe zgodnie ze Standardem Karty Projektu FPbG.
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {project.auditLinks.map((link) => (
            <a
              key={link.url}
              href={link.url}
              className="group rounded-2xl border border-primary/10 bg-white shadow-sm shadow-primary/5 transition hover:-translate-y-1 hover:shadow-primary/20"
              rel="noreferrer"
              target="_blank"
            >
              <div className="h-48 w-full overflow-hidden rounded-t-2xl bg-sand">
                <img
                  src={link.thumbnail || "/exampleLinks.png"}
                  alt={`Miniatura artykułu ${link.label}`}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="px-4 py-3 text-sm font-semibold text-primary group-hover:text-accent">
                {link.label}
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
