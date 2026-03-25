import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { StatusBadge } from "@/components/StatusBadge";

const externalProjectUrl =
  "https://www.baltic-digital.org/projekty/rozwoj-umiejetnosci";

const tags = [
  "Fundusze Europejskie dla Pomorza",
  "Projekt partnerski",
  "Kompetencje podstawowe",
];

const heroCards = [
  {
    title: "Rekrutacja",
    value: "65 miejsc",
    description: "Program dla mieszkańców Pomorza 18+, z priorytetem dla osób 50+.",
  },
  {
    title: "Wsparcie",
    value: "Sprzęt i catering",
    description: "Zapewnione materiały, wyposażona sala i opieka trenerska.",
  },
  {
    title: "Efekt",
    value: "Certyfikat",
    description: "Formalne potwierdzenie nowych kompetencji po zakończeniu ścieżki.",
  },
];

const eligibility = [
  "Masz ukończone 18 lat, a szczególnie zapraszamy osoby 50+.",
  "Mieszkasz w Trójmieście lub w powiecie gdańskim, kartuskim, wejherowskim albo puckim.",
  "Chcesz rozwinąć umiejętności komputerowe od podstaw lub je uporządkować.",
  "Jesteś osobą pracującą, bezrobotną, bierną zawodowo albo emerytem.",
  "Do projektu mogą dołączyć również obywatele Ukrainy z zapewnionym wsparciem językowym.",
];

const benefits = [
  {
    title: "Indywidualna diagnoza",
    description:
      "Spotkanie z doradcą pomaga dobrać właściwy kurs i zaplanować dalsze kroki rozwojowe.",
  },
  {
    title: "Kurs Cyfrowy Lider",
    description:
      "24 godziny warsztatów w małych grupach oraz 5 godzin konsultacji indywidualnych z trenerem.",
  },
  {
    title: "Warsztaty tematyczne",
    description:
      "Ścieżki dotyczące bezpiecznego Internetu, ekologii, oszczędzania i praktycznych zastosowań narzędzi cyfrowych.",
  },
  {
    title: "Wsparcie ekspertów",
    description:
      "Doradztwo zawodowe, mentoring biznesowy i praktyczne wskazówki przydatne po zakończeniu szkolenia.",
  },
  {
    title: "Komfort uczestnictwa",
    description:
      "Na miejscu dostępne są sprzęt, materiały, catering i przygotowana sala szkoleniowa.",
  },
  {
    title: "Partnerstwo integracyjne",
    description:
      "FPBG wspiera uczestników z doświadczeniem migracyjnym i pomaga obniżyć bariery wejścia do programu.",
  },
];

const accessibilityPoints = [
  "Pełna dostępność dla osób z niepełnosprawnością ruchową.",
  "Materiały w dużym, kontrastowym kroju dla osób słabowidzących.",
  "Możliwość wsparcia asystenta lub tłumacza podczas zajęć.",
  "Przejrzysta, mobilna prezentacja informacji i nacisk na bezpieczne środowisko nauki.",
];

const partners = [
  {
    role: "Lider",
    name: "Baltic Digital Institute",
    description:
      "Odpowiada za rekrutację, organizację szkoleń i całą ścieżkę edukacyjną uczestników.",
  },
  {
    role: "Partner",
    name: "Fundacja Przyjaźń bez Granic",
    description:
      "Wnosi doświadczenie integracyjne i wspiera uczestników z Ukrainy oraz osoby potrzebujące wsparcia językowego.",
  },
  {
    role: "Partner",
    name: "Kaszubski Związek Pracodawców",
    description:
      "Rozszerza zasięg projektu o środowiska pracodawców i współtworzy praktyczny wymiar warsztatów.",
  },
];

const formalInfo = [
  { label: "Status", value: "W toku" },
  { label: "Nr projektu", value: "FEPM.05.09-IZ.00-0056/25" },
  {
    label: "Cel projektu",
    value:
      "Podniesienie kompetencji cyfrowych, matematycznych i informacyjnych u 65 osób dorosłych.",
  },
  {
    label: "Grupa docelowa",
    value: "Osoby dorosłe, w tym seniorzy, osoby bezrobotne i uchodźcy.",
  },
  { label: "Wartość projektu", value: "708 250,00 PLN" },
  { label: "Wkład Funduszy Europejskich", value: "672 837,50 PLN" },
];

const projectInfoExpanded = [
  {
    label: "Tytuł",
    value:
      "Rozwój umiejętności podstawowych mieszkańców Trójmiasta i powiatów sąsiadujących",
  },
  { label: "Nr umowy", value: "FEPM.05.09-IZ.00-0056/25" },
  {
    label: "Beneficjent",
    value:
      "Baltic Digital Institute w partnerstwie z Fundacją Przyjaźń bez Granic oraz Kaszubskim Związkiem Pracodawców.",
  },
  {
    label: "Cel",
    value:
      "Podniesienie kompetencji cyfrowych, matematycznych i rozumienia informacji u 65 osób dorosłych, które chcą rozwijać swoje umiejętności z własnej inicjatywy.",
  },
  {
    label: "Grupa docelowa",
    value:
      "Mieszkańcy województwa pomorskiego, ze szczególnym uwzględnieniem osób 50+, osób o niskich kwalifikacjach oraz uchodźców.",
  },
];

const faqItems = [
  {
    question: "Czy trzeba mieć własny laptop?",
    answer: "Nie. Organizator zapewnia sprzęt i materiały potrzebne do udziału w zajęciach.",
  },
  {
    question: "Czy projekt da się pogodzić z pracą?",
    answer:
      "Tak. Harmonogram jest publikowany na bieżąco, a część grup odbywa się w dogodnych terminach popołudniowych lub weekendowych.",
  },
  {
    question: "Czy udział w projekcie jest bezpłatny?",
    answer:
      "Tak. Udział uczestników jest finansowany ze środków europejskich oraz wkładu partnerów projektu.",
  },
  {
    question: "Czy po ukończeniu programu otrzymuje się certyfikat?",
    answer:
      "Tak. Zakończenie ścieżki wiąże się z otrzymaniem formalnego potwierdzenia nabytych kompetencji.",
  },
  {
    question: "Gdzie odbywają się zajęcia?",
    answer:
      "Główna lokalizacja to Gdańsk, ul. Hołdu Pruskiego 6, w przestrzeni dostosowanej do potrzeb uczestników.",
  },
];

export const metadata: Metadata = {
  title: "Rozwój umiejętności podstawowych | FPBG",
  description:
    "Projekt partnerski FPBG, Baltic Digital Institute i Kaszubskiego Związku Pracodawców wspierający rozwój kompetencji cyfrowych mieszkańców Pomorza.",
};

export default function RozwojUmiejetnosciPage() {
  return (
    <div className="pb-16">
      <section className="overflow-hidden border-b border-primary/10 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-3 md:px-6">
          <Image
            src="/assets/projects/rozwoj-umiejetnosci-eu.svg"
            alt="Pasek informacyjny Funduszy Europejskich"
            width={1900}
            height={280}
            className="h-auto w-full"
            priority
          />
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-accent text-white">
        <div className="absolute -left-12 top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-sand/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-48 w-48 rounded-full bg-white/5 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <StatusBadge label="W toku" />
                <span className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
                  Projekt partnerski FPBG x BDI
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="max-w-3xl font-serif text-4xl leading-tight md:text-5xl">
                Bezpłatne szkolenia cyfrowe i wsparcie zawodowe dla mieszkańców Pomorza
              </h1>
              <p className="max-w-2xl text-lg text-white/85">
                Projekt rozwija kompetencje podstawowe osób dorosłych z Pomorza. FPBG
                współrealizuje go jako partner odpowiedzialny za wsparcie integracyjne i
                obniżanie barier wejścia dla uczestników.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#rekrutacja"
                  className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-primary transition hover:bg-sand"
                >
                  Zobacz rekrutację
                </a>
                <a
                  href="#kryteria"
                  className="rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Sprawdź kryteria
                </a>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {heroCards.map((card) => (
                  <div
                    key={card.title}
                    className="rounded-3xl border border-white/10 bg-white/10 p-4 shadow-lg shadow-black/10 backdrop-blur-sm"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sand">
                      {card.title}
                    </p>
                    <p className="mt-2 text-xl font-semibold text-white">{card.value}</p>
                    <p className="mt-1 text-sm text-white/75">{card.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-white shadow-2xl shadow-black/15">
              <Image
                src="/assets/projects/rozwoj-umiejetnosci-hero.svg"
                alt="Grafika promująca szkolenia cyfrowe"
                width={1200}
                height={900}
                className="h-auto w-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-primary/10 bg-white p-8 shadow-sm shadow-primary/5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Dlaczego to ważne
            </p>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-primary">
              Kompetencje cyfrowe jako narzędzie samodzielności
            </h2>
            <p className="mt-4 text-primary/80">
              Program łączy cele edukacyjne z realnym wsparciem społecznym. Jest
              skierowany do seniorów, osób wracających na rynek pracy i uczestników z
              doświadczeniem migracyjnym, którzy potrzebują bezpiecznego miejsca do nauki
              i praktycznych kompetencji.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-primary/80">
              <li className="flex gap-3">
                <span className="mt-1 text-accent">01</span>
                <span>Małe grupy i indywidualne konsultacje zwiększają skuteczność nauki.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 text-accent">02</span>
                <span>Projekt jest zaprojektowany z myślą o dostępności i czytelności.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 text-accent">03</span>
                <span>Wsparcie doradców pomaga przełożyć naukę na kolejne decyzje zawodowe.</span>
              </li>
            </ul>
          </div>

          <div className="rounded-[2rem] border border-primary/10 bg-sand p-8 shadow-sm shadow-primary/5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Rola FPBG
            </p>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-primary">
              Wspieramy uczestników, którzy potrzebują dodatkowego wejścia w projekt
            </h2>
            <p className="mt-4 text-primary/80">
              Fundacja Przyjaźń bez Granic odpowiada w partnerstwie za element
              integracyjny i językowy. Dzięki temu projekt jest bardziej dostępny dla
              osób z Ukrainy i uczestników, którzy potrzebują dodatkowego wsparcia
              organizacyjnego.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  Adres zajęć
                </p>
                <p className="mt-2 text-lg font-semibold text-primary">
                  ul. Hołdu Pruskiego 6, Gdańsk
                </p>
                <p className="mt-1 text-sm text-primary/70">
                  Willa „Rekin”, zasięg: Trójmiasto i powiaty ościenne.
                </p>
              </div>
              <div className="rounded-3xl bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  Obecny etap
                </p>
                <p className="mt-2 text-lg font-semibold text-primary">Rekrutacja i realizacja</p>
                <p className="mt-1 text-sm text-primary/70">
                  Nabór uczestników trwa, a harmonogram zajęć jest publikowany na bieżąco.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="kryteria" className="mx-auto max-w-6xl scroll-mt-28 px-4 py-4 md:px-6">
        <SectionHeading
          eyebrow="Dla kogo"
          title="Proste kryteria uczestnictwa"
          description="Jeżeli spełniasz poniższe warunki, możesz dołączyć do projektu bez opłat."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {eligibility.map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-primary/10 bg-white p-5 shadow-sm shadow-primary/5"
            >
              <div className="flex gap-3">
                <span className="mt-1 text-accent">•</span>
                <p className="text-sm text-primary/80">{item}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <SectionHeading
          eyebrow="Co zyskasz"
          title="Pakiet korzyści uczestnika"
          description="Program łączy szkolenie, konsultacje i wsparcie wdrożeniowe zamiast jednorazowego kursu."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((benefit, index) => (
            <article
              key={benefit.title}
              className="rounded-3xl border border-primary/10 bg-white p-6 shadow-sm shadow-primary/5"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 text-sm font-semibold text-accent">
                  {index + 1}
                </span>
                <h3 className="text-lg font-semibold text-primary">{benefit.title}</h3>
              </div>
              <p className="mt-4 text-sm text-primary/80">{benefit.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-primary/10 bg-primary p-8 text-white shadow-lg shadow-primary/10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sand">
              Dostępność i bezpieczeństwo
            </p>
            <h2 className="mt-3 font-serif text-3xl leading-tight">
              Projekt zaprojektowany tak, żeby nie wykluczać
            </h2>
            <ul className="mt-6 space-y-3 text-sm text-white/85">
              {accessibilityPoints.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="text-sand">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border border-primary/10 bg-white p-8 shadow-sm shadow-primary/5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Partnerstwo
            </p>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-primary">
              Trzy organizacje, jeden wspólny rezultat
            </h2>
            <div className="mt-6 grid gap-4">
              {partners.map((partner) => (
                <div key={partner.name} className="rounded-3xl bg-sand p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                    {partner.role}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-primary">{partner.name}</h3>
                  <p className="mt-2 text-sm text-primary/75">{partner.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="overflow-hidden rounded-[2rem] border border-primary/10 bg-white shadow-sm shadow-primary/5">
          <Image
            src="/assets/projects/rozwoj-umiejetnosci-dostepnosc.svg"
            alt="Grafika o dostępności i bezpieczeństwie projektu"
            width={1400}
            height={800}
            className="h-auto w-full"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-4 md:px-6">
        <SectionHeading
          eyebrow="Szczegóły projektu"
          title="Informacje formalne"
          description="Najważniejsze dane projektowe zebrane w skróconej, partnerskiej karcie."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {formalInfo.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-primary/10 bg-white p-5 shadow-sm shadow-primary/5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                {item.label}
              </p>
              <p className="mt-3 text-sm font-semibold text-primary">{item.value}</p>
            </div>
          ))}
        </div>

        <details className="mt-6 rounded-[2rem] border border-primary/10 bg-sand p-6 shadow-sm shadow-primary/5">
          <summary className="cursor-pointer list-none text-lg font-semibold text-primary">
            Rozszerzone informacje o projekcie
          </summary>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {projectInfoExpanded.map((item) => (
              <div key={item.label} className="rounded-3xl bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  {item.label}
                </p>
                <p className="mt-2 text-sm text-primary/80">{item.value}</p>
              </div>
            ))}
            <div className="rounded-3xl border border-primary/10 bg-white p-5 md:col-span-2">
              <p className="text-sm text-primary/80">
                Projekt jest współfinansowany ze środków Europejskiego Funduszu
                Społecznego Plus w ramach programu Fundusze Europejskie dla Pomorza
                2021-2027.
              </p>
            </div>
          </div>
        </details>
      </section>

      <section id="rekrutacja" className="mx-auto max-w-6xl scroll-mt-28 px-4 py-12 md:px-6">
        <SectionHeading
          eyebrow="Kontakt i rekrutacja"
          title="Rekrutację prowadzi Baltic Digital Institute"
          description="Na stronie FPBG pokazujemy kontekst partnerstwa. Zgłoszenie do projektu odbywa się przez stronę lidera projektu."
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-primary/10 bg-white p-8 shadow-sm shadow-primary/5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Dane kontaktowe projektu
            </p>
            <div className="mt-6 space-y-5 text-sm text-primary/80">
              <div>
                <p className="font-semibold text-primary">Telefon</p>
                <a href="tel:+48663003155" className="text-base text-accent hover:text-accent-hover">
                  +48 663 003 155
                </a>
                <p>Dyżur projektu, odpowiedź w ciągu 24 godzin roboczych.</p>
              </div>
              <div>
                <p className="font-semibold text-primary">E-mail</p>
                <a
                  href="mailto:kontakt@baltic-digital.org"
                  className="text-base text-accent hover:text-accent-hover"
                >
                  kontakt@baltic-digital.org
                </a>
                <p>Pod tym adresem lider projektu przyjmuje pytania i dokumenty rekrutacyjne.</p>
              </div>
              <div>
                <p className="font-semibold text-primary">Adres biura</p>
                <p>ul. Hołdu Pruskiego 6, Gdańsk</p>
                <p>Willa „Rekin” - miejsce dostępne architektonicznie.</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-primary/10 bg-primary p-8 text-white shadow-lg shadow-primary/10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sand">
              Zgłoszenia do projektu
            </p>
            <h2 className="mt-3 max-w-xl font-serif text-3xl leading-tight">
              Przejdź do pełnej strony projektu i formularza zgłoszeniowego w BDI
            </h2>
            <p className="mt-4 max-w-2xl text-sm text-white/80">
              Ta podstrona w FPBG opisuje projekt i rolę partnerstwa. Aby zgłosić udział,
              przejdź do oryginalnej strony rekrutacyjnej prowadzonej przez Baltic Digital
              Institute.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={externalProjectUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition hover:bg-sand"
              >
                Przejdź do strony rekrutacji
              </a>
              <Link
                href="/kontakt"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Skontaktuj się z FPBG
              </Link>
            </div>
            <div className="mt-8 rounded-3xl border border-white/10 bg-white/10 p-5 text-sm text-white/80">
              <p className="font-semibold text-white">Dokumenty rekrutacyjne</p>
              <ul className="mt-3 space-y-2">
                <li>
                  <a
                    href="https://drive.google.com/file/d/1tHVxybecczaYGqLGY9q1gaiRPaLS3ei_/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-white/30 underline-offset-4 hover:text-white"
                  >
                    Regulamin rekrutacji
                  </a>
                </li>
                <li>
                  <a
                    href="https://drive.google.com/file/d/1cU1iZydmsBcALEjGMmZyz8AAaYqfTdy2/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-white/30 underline-offset-4 hover:text-white"
                  >
                    Formularz zgłoszeniowy PDF
                  </a>
                </li>
                <li>
                  <a
                    href="https://forms.gle/8s6fgPqPWx2ob4X67"
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-white/30 underline-offset-4 hover:text-white"
                  >
                    Formularz zgłoszeniowy online
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-4 md:px-6">
        <SectionHeading
          eyebrow="Harmonogram"
          title='Terminy kursu "Cyfrowy Lider z AI"'
          description="Aktualny harmonogram jest publikowany przez lidera projektu w osadzonym arkuszu."
        />
        <div className="mt-8 overflow-hidden rounded-[2rem] border border-primary/10 bg-white shadow-sm shadow-primary/5">
          <iframe
            title='Podgląd harmonogramu kursu "Cyfrowy Lider z AI"'
            src="https://docs.google.com/spreadsheets/d/1dnEZWcqi6csUB8YbTOncfoIqEZ72mDYUov1nvLjKho8/htmlembed?gid=1952541987&widget=false&chrome=false"
            className="h-[80vh] min-h-[900px] w-full border-0"
            loading="lazy"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <SectionHeading
          eyebrow="FAQ"
          title="Najczęstsze pytania"
          description="Najważniejsze odpowiedzi dla osób zainteresowanych udziałem w projekcie."
        />
        <div className="mt-8 space-y-4">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="rounded-3xl border border-primary/10 bg-white p-5 shadow-sm shadow-primary/5"
            >
              <summary className="cursor-pointer list-none text-lg font-semibold text-primary">
                {item.question}
              </summary>
              <p className="mt-3 text-sm text-primary/80">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
