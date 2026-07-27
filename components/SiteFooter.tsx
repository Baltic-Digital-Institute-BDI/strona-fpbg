import Link from "next/link";
import { contactInfo, foundationInfo, partners } from "@/content/data";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-primary/10 bg-primary text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3 md:px-6">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
            {foundationInfo.name}
          </p>
          <p className="text-lg font-serif leading-relaxed">{foundationInfo.tagline}</p>
          <p className="text-sm text-white/80">{foundationInfo.motto}</p>
        </div>
        <div className="space-y-2 text-sm">
          <p className="font-semibold text-white">Kontakt</p>
          <p className="text-white/80">{contactInfo.address}</p>
          <p className="text-white/80">{contactInfo.email}</p>
          {contactInfo.phone ? <p className="text-white/80">{contactInfo.phone}</p> : null}
          <p className="text-white/80">{contactInfo.hours}</p>
        </div>
        <div className="space-y-2 text-sm">
          <p className="font-semibold text-white">Partnerzy systemowi</p>
          <ul className="space-y-1 text-white/80">
            {partners.map((partner) => (
              <li key={partner.name}>
                {partner.url ? (
                  <a href={partner.url} className="hover:text-white" rel="noreferrer" target="_blank">
                    {partner.name}
                  </a>
                ) : (
                  partner.name
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 bg-primary/90">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 text-xs text-white/70 md:px-6">
          <p>© {new Date().getFullYear()} {foundationInfo.name}</p>
          <div className="flex items-center gap-3">
            <Link href="/polityka-prywatnosci" className="hover:text-white">
              Polityka prywatności
            </Link>
            <span aria-hidden="true">·</span>
            <Link href="/deklaracja-dostepnosci" className="hover:text-white">
              Deklaracja dostępności
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
