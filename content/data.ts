export type Value = {
  title: string;
  description: string;
  accent: string;
};

export type StrategyPillar = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  kpis: string[];
  initiatives: string[];
};

export type Metric = {
  label: string;
  value: string;
};

export type Project = {
  slug: string;
  title: string;
  status: "Zrealizowany" | "W toku";
  period: string;
  strategicPillar: string;
  summary: string;
  metrics: Metric[];
  beneficiaries: string;
  context: string;
  action: string;
  partners: string[];
  fundingSources: string[];
  auditLinks: { label: string; url: string; thumbnail?: string }[];
};

export type NewsSource = {
  label: string;
  url: string;
};

export type NewsSection = {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type NewsPost = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  body: string;
  lead?: string;
  highlights?: Metric[];
  sections?: NewsSection[];
  partners?: string[];
  fundingSources?: string[];
  sources?: NewsSource[];
  relatedProjectSlug?: string;
  note?: string;
};

export type Partner = {
  name: string;
  url?: string;
};

export const foundationInfo = {
  name: "Fundacja Przyjaźń bez Granic",
  tagline:
    "Pomorski Hub współpracy międzynarodowej i działań humanitarnych.",
  address: "ul. Hołdu Pruskiego 6, 80-321 Gdańsk",
  email: "kontakt@fundacja-przyjazn.pl",
  phone: "",
  motto: "Empatyczni, sprawczy, zorganizowani.",
};

export const values: Value[] = [
  {
    title: "Solidarność",
    description:
      "Odpowiadamy na potrzeby osób w kryzysie, łącząc empatię z realnym działaniem.",
    accent: "SOLIDARNOŚĆ",
  },
  {
    title: "Partnerstwo",
    description:
      "Budujemy trwałe relacje i mosty pomiędzy Pomorzem a światem, aby zwielokrotniać wpływ.",
    accent: "PARTNERSTWO",
  },
  {
    title: "Odwaga",
    description:
      "Podejmujemy interwencje tam, gdzie inni się wahają, opierając się na doświadczeniu terenowym.",
    accent: "ODWAGA",
  },
  {
    title: "Skuteczność",
    description:
      "Łączymy humanistyczne podejście z mierzalnymi rezultatami i audytowalnym raportowaniem.",
    accent: "SKUTECZNOŚĆ",
  },
];

export const strategyPillars: StrategyPillar[] = [
  {
    id: "filar-i",
    title: "Spójność Społeczna na Pomorzu",
    subtitle: "„Witaj w domu” - Integracja i nowe kompetencje",
    description:
      "Budujemy mosty międzykulturowe w regionie, korzystając z ugruntowanego modelu działania.",
    kpis: [
      "65 osób objętych kompleksowym wsparciem do 2027 r.",
      "100% wskaźnik kwalifikacji w projekcie FEP",
    ],
    initiatives: [
      "Centrum Usług Integracyjnych (FEP 2026-2027)",
      "Poradnictwo w Centrach Wsparcia: prawne, psychologiczne, zawodowe",
    ],
  },
  {
    id: "filar-ii",
    title: "Pomorska Brama na Świat",
    subtitle: "„Mosty” - partnerstwa i mobilność międzynarodowa",
    description:
      "Pozycjonujemy FPbG jako międzynarodowe ramię dla lokalnych partnerów strategicznych.",
    kpis: [
      "Akredytacja Erasmus+ i EKS do 2026 r.",
      "3 misje gospodarcze i 5 nowych partnerstw do 2028 r.",
    ],
    initiatives: [
      "Programy wymiany (Erasmus+, EKS)",
      "Misje gospodarcze i kulturalne dla regionu",
    ],
  },
  {
    id: "filar-iii",
    title: "Solidarność bez Granic",
    subtitle: "„Pomocna Dłoń” - interwencje humanitarne",
    description:
      "Reaktywujemy i profesjonalizujemy działania pomocowe oraz rozwijamy partnerstwa humanitarne.",
    kpis: [
      "2 konwoje humanitarne do Ukrainy do końca 2026 r.",
      "Partnerstwo z dużą organizacją humanitarną do 2027 r.",
    ],
    initiatives: [
      "Kryzysowe interwencje humanitarne",
      "Partnerstwa międzynarodowe i konwoje pomocy",
    ],
  },
];

export const projects: Project[] = [
  {
    slug: "rozwoj-umiejetnosci",
    title:
      "Rozwój umiejętności podstawowych mieszkańców Trójmiasta i powiatów sąsiadujących",
    status: "W toku",
    period: "2026-2027",
    strategicPillar: "Filar I: Spójność Społeczna na Pomorzu",
    summary:
      "Partnerski projekt FPBG, Baltic Digital Institute i Kaszubskiego Związku Pracodawców rozwija kompetencje cyfrowe mieszkańców Pomorza oraz wspiera uczestników wymagających wsparcia integracyjnego.",
    metrics: [
      { label: "Uczestnicy", value: "65" },
      { label: "Wartość projektu", value: "708 250 PLN" },
      { label: "Status", value: "Rekrutacja i realizacja" },
    ],
    beneficiaries:
      "Osoby dorosłe z Pomorza, w tym osoby 50+, osoby o niskich kwalifikacjach, osoby bezrobotne i uchodźcy",
    context:
      "Projekt odpowiada na potrzebę wzmocnienia podstawowych kompetencji cyfrowych, matematycznych i informacyjnych mieszkańców Pomorza. FPBG uczestniczy w nim jako partner wspierający dostępność i komponent integracyjny.",
    action:
      "Współtworzymy ścieżkę wsparcia uczestników, pomagamy w obniżaniu barier wejścia do projektu oraz wspieramy osoby z doświadczeniem migracyjnym i potrzebami językowymi.",
    partners: [
      "Baltic Digital Institute",
      "Fundacja Przyjaźń bez Granic",
      "Kaszubski Związek Pracodawców",
    ],
    fundingSources: [
      "Fundusze Europejskie dla Pomorza 2021-2027",
      "Europejski Fundusz Społeczny Plus (EFS+)",
      "wkład własny partnerów projektu",
    ],
    auditLinks: [
      {
        label: "Strona projektu w BDI",
        url: "https://www.baltic-digital.org/projekty/rozwoj-umiejetnosci",
      },
      {
        label: "Regulamin rekrutacji",
        url: "https://drive.google.com/file/d/1tHVxybecczaYGqLGY9q1gaiRPaLS3ei_/view?usp=sharing",
      },
      {
        label: "Formularz zgłoszeniowy online",
        url: "https://forms.gle/8s6fgPqPWx2ob4X67",
      },
    ],
  },
  {
    slug: "wozki-rehabilitacyjne-2024",
    title: "30 wózków rehabilitacyjnych dla szpitala w Dzierżążnie",
    status: "Zrealizowany",
    period: "2023",
    strategicPillar: "Filar III: Solidarność bez Granic",
    summary:
      "Dwukierunkowa solidarność – 30 wózków rehabilitacyjnych o wartości 120 000 PLN trafiło do szpitala w Dzierżążnie jako gest wdzięczności partnerów z Ukrainy.",
    metrics: [
      { label: "Wózki", value: "30" },
      { label: "Wartość darowizny", value: "120 000 PLN" },
      { label: "Rok realizacji", value: "2023" },
    ],
    beneficiaries:
      "Pacjenci i zespół szpitala w Dzierżążnie oraz lokalna społeczność Pomorza",
    context:
      "Akcja Wózki dla Szpitala pokazała, że wsparcie otrzymane przez naszych partnerów z Ukrainy wraca do Pomorza. Sprzęt medyczny jest dowodem wdzięczności i realnej współpracy transgranicznej.",
    action:
      "Zorganizowaliśmy transport i przekazanie 30 wózków rehabilitacyjnych wraz z Fundacją Viktoriia i Stowarzyszeniem Otwarte Kaszuby, koordynując logistykę i komunikację ze szpitalem.",
    partners: [
      "Fundacja Viktoriia",
      "Stowarzyszenie Otwarte Kaszuby",
      "Szpital w Dzierżążnie",
    ],
    fundingSources: ["Fundacja Viktoriia (darowizna)", "wkład FPbG"],
    auditLinks: [
      {
        label: "Express Kaszubski",
        url: "https://expresskaszubski.pl/pl/11_wiadomosci/49157_dzierzazno-dzieki-polsko-ukrainskiej-wspolpracy-do-szpitala-trafilo-30-wozkow.html",
        thumbnail: "https://expresskaszubski.pl/news_foto//2023/1124/203405.jpg?20231124131446",
      },
      {
        label: "Nasze Miasto Żukowo",
        url: "https://zukowo.naszemiasto.pl/spolecznicy-z-ukrainy-przekazali-wozki-inwalidzkie/ar/c14-9534271",
        thumbnail: "https://d-art.ppstatic.pl/kadry/k/r/69/75/65630f04c74df_o_xlarge.jpg",
      },
      {
        label: "Radio Kaszëbë",
        url: "https://radiokaszebe.pl/30-nowych-wozkow-rehabilitacyjnych-w-dzierzaznie/",
        thumbnail: "https://radiokaszebe.pl/wp-content/uploads/2023/11/IMG_3445-1024x748.jpg",
      },
      {
        label: "Dziennik Bałtycki",
        url: "https://dziennikbaltycki.pl/spolecznicy-z-ukrainy-przekazali-wozki-inwalidzkie-szpitalowi-w-dzierzaznie/gh/c14-18106465",
        thumbnail: "https://d-art.ppstatic.pl/kadry/k/r/1/16/94/65630f011f62c_o_xlarge.jpg",
      },
    ],
  },
];

export const newsPosts: NewsPost[] = [
  {
    slug: "mosty-solidarnosci-dzierzazno",
    title:
      "Mosty solidarności: 30 wózków rehabilitacyjnych dla szpitala w Dzierżążnie",
    date: "2023-11-24",
    category: "Humanitarny",
    excerpt:
      "Transgraniczna akcja FPbG i Fundacji Viktoriia wzmocniła oddział rehabilitacji w Dzierżążnie - 30 wielofunkcyjnych wózków o wartości ok. 120 tys. zł jako gest wdzięczności strony ukraińskiej.",
    body: `Fundacja Przyjaźń bez Granic koordynowała przekazanie 30 wózków rehabilitacyjnych o wartości ok. 120 tys. zł dla szpitala w Dzierżążnie. Darowizna była formą wdzięczności strony ukraińskiej za wcześniejsze wsparcie humanitarne.

To dowód na naszą zdolność do działania dwukierunkowego - pozyskujemy zasoby z zagranicy i kierujemy je na wzmocnienie pomorskich instytucji.`,
    lead:
      "Solidarność nie jest jednokierunkową ulicą. Akcja przekazania 30 wózków rehabilitacyjnych dla szpitala w Dzierżążnie to dowód dwukierunkowej solidarności - tym razem to nasi partnerzy ze strony ukraińskiej podziękowali Pomorzu za wcześniejsze wsparcie humanitarne.",
    highlights: [
      { label: "Wózki", value: "30" },
      { label: "Szacunkowa wartość", value: "120 000 PLN" },
      { label: "Data przekazania", value: "Listopad 2023" },
    ],
    sections: [
      {
        heading: "Dwukierunkowa solidarność",
        paragraphs: [
          "W sercu misji Fundacji Przyjaźń bez Granic leży przekonanie, że solidarność jest relacją wzajemną, opartą na szacunku i wdzięczności. Zazwyczaj to my ruszamy z pomocą do potrzebujących - tym razem to strona ukraińska postanowiła podziękować Polsce, a w szczególności Pomorzu, za otrzymane wsparcie.",
          "Akcja przekazania wózków rehabilitacyjnych była symbolicznym gestem i aktem dwukierunkowej solidarności, który umocnił zasoby lokalnej placówki medycznej.",
        ],
      },
      {
        heading: "Przebieg przekazania",
        paragraphs: [
          "Przedstawicielki Fundacji Przyjaźń bez Granic - Liliia Plivak (wiceprezes) oraz Tatjana Pavlytska (koordynatorka pomocy humanitarnej) - wraz z Barbarą Kramp ze Stowarzyszenia Otwarte Kaszuby odwiedziły Zamiejscową Placówkę w Dzierżążnie (Oddział Rehabilitacji dla Dorosłych oraz Zakłady Opiekuńczo-Lecznicze). Spotkanie było emocjonalnym przeżyciem, pełnym empatii i wdzięczności.",
          "Przekazane wielofunkcyjne, bezdętkowe wózki inwalidzkie podniosły komfort i mobilność pacjentów oraz możliwości rehabilitacyjne placówki. Po przekazaniu wsparcia przedstawicielki Fundacji udały się z pomocą humanitarną na tereny objęte działaniami wojennymi.",
        ],
      },
      {
        heading: "Mierzalny wpływ",
        bullets: [
          "30 nowoczesnych, wielofunkcyjnych wózków rehabilitacyjnych.",
          "Łączna szacunkowa wartość darowizny: ok. 120 000 złotych.",
          "Sprzęt trafił do szpitala w Dzierżążnie (okolice Kartuz), służąc lokalnej społeczności.",
        ],
      },
      {
        heading: "Architekci współpracy: nasz model HUB-u",
        paragraphs: [
          "Fundacja Przyjaźń bez Granic pełniła rolę HUB-u - organizatora i koordynatora, który łączy kapitał zagraniczny z potrzebami lokalnymi.",
        ],
        bullets: [
          "Fundacja Viktoriia - międzynarodowy partner, który zainicjował i dostarczył darowiznę jako wyraz wdzięczności.",
          "Stowarzyszenie Otwarte Kaszuby - partner lokalny, który zapewnił logistykę i znajomość regionu.",
          "Szpital Specjalistyczny w Kościerzynie (Placówka w Dzierżążnie) - odbiorca i beneficjent sprzętu.",
        ],
      },
      {
        heading: "Dlaczego to jest ważne?",
        paragraphs: [
          "Akcja stanowi bezcenny kapitał wiarygodności i autentyczności Fundacji. Udowodniła naszą skuteczność w zarządzaniu projektami o wysokiej wartości oraz umocniła misję budowania długotrwałych, wzajemnych relacji wykraczających poza jednorazową pomoc charytatywną.",
          "To na tym fundamencie - realizowanym w ramach Filaru III: Solidarność bez Granic - budujemy naszą strategię rozwoju i przyszłe inicjatywy na Pomorzu i poza nim.",
        ],
      },
    ],
    partners: [
      "Fundacja Viktoriia",
      "Stowarzyszenie Otwarte Kaszuby",
      "Szpital Specjalistyczny w Kościerzynie (Placówka w Dzierżążnie)",
    ],
    sources: [
      {
        label: "Express Kaszubski",
        url: "https://expresskaszubski.pl/pl/11_wiadomosci/49157_dzierzazno-dzieki-polsko-ukrainskiej-wspolpracy-do-szpitala-trafilo-30-wozkow.html",
      },
      {
        label: "Dziennik Bałtycki",
        url: "https://dziennikbaltycki.pl/spolecznicy-z-ukrainy-przekazali-wozki-inwalidzkie-szpitalowi-w-dzierzaznie/gh/c14-18106465",
      },
      {
        label: "Nasze Miasto Żukowo",
        url: "https://zukowo.naszemiasto.pl/spolecznicy-z-ukrainy-przekazali-wozki-inwalidzkie/ar/c14-9534271",
      },
      {
        label: "Radio Kaszëbë",
        url: "https://radiokaszebe.pl/30-nowych-wozkow-rehabilitacyjnych-w-dzierzaznie/",
      },
    ],
    relatedProjectSlug: "wozki-rehabilitacyjne-2024",
  },
  {
    slug: "fep-centrum-integracji-start",
    title: "Start Centrum Usług Integracyjnych - projekt FEP 2026-2027",
    date: "2026-03-01",
    category: "FEP",
    excerpt:
      "Rozpoczynamy kompleksowe wsparcie kompetencji podstawowych i poradnictwo dla 65 mieszkańców Pomorza. FPbG odpowiada za komponent integracyjny i językowy w partnerskim projekcie FEP 2026-2027.",
    body: `Centrum Usług Integracyjnych zapewnia kompleksowe wsparcie dla 65 osób, w tym poradnictwo prawne, psychologiczne oraz ścieżkę rozwoju kompetencji podstawowych. Program realizujemy jako partner projektu Fundusze Europejskie dla Pomorza, z transparentnym raportowaniem efektów.`,
    lead:
      "Ruszamy z Centrum Usług Integracyjnych - w ramach partnerskiego projektu Fundusze Europejskie dla Pomorza (FEP 2026-2027) zapewniamy mieszkańcom Pomorza kompleksowe wsparcie kompetencji podstawowych oraz poradnictwo. Rolą Fundacji Przyjaźń bez Granic jest komponent integracyjny i językowy.",
    highlights: [
      { label: "Uczestnicy", value: "65 osób" },
      { label: "Wartość projektu", value: "708 250 PLN" },
      { label: "Okres", value: "2026-2027" },
    ],
    sections: [
      {
        heading: "Czym jest Centrum Usług Integracyjnych",
        paragraphs: [
          "Centrum to praktyczne wdrożenie Filaru I naszej strategii - „Witaj w domu: integracja i nowe kompetencje”. W ramach projektu „Rozwój umiejętności podstawowych mieszkańców Trójmiasta i powiatów sąsiadujących” zapewniamy podnoszenie kompetencji cyfrowych, matematycznych oraz rozumienia i tworzenia informacji u 65 osób dorosłych.",
          "Projekt realizujemy w partnerstwie, w oparciu o sprawdzony model działania i stabilne finansowanie ze środków europejskich.",
        ],
      },
      {
        heading: "Rola Fundacji Przyjaźń bez Granic",
        paragraphs: [
          "Fundacja odpowiada za komponent integracyjny i językowy - jesteśmy „ludzkim interfejsem” dla uczestników z doświadczeniem migracyjnym, w tym obywateli Ukrainy.",
        ],
        bullets: [
          "Poradnictwo w Centrach Wsparcia: prawne, psychologiczne i zawodowe.",
          "Wsparcie językowe i obniżanie barier wejścia do projektu.",
          "Asysta logistyczna i integracyjna dla grup wrażliwych.",
        ],
      },
      {
        heading: "Dla kogo",
        paragraphs: [
          "Projekt skierowany jest do osób dorosłych (18+) z województwa pomorskiego - z Trójmiasta oraz powiatów gdańskiego, kartuskiego, wejherowskiego i puckiego - ze szczególnym uwzględnieniem osób 50+, osób o niskich kwalifikacjach oraz uchodźców. Udział jest bezpłatny.",
        ],
      },
      {
        heading: "Co zyskują uczestnicy",
        bullets: [
          "Indywidualna diagnoza potrzeb ze wsparciem doradcy.",
          "Kurs „Cyfrowy Lider” (24 h) w małych grupach + konsultacje indywidualne.",
          "Warsztaty tematyczne: „Oszczędnie i ekologicznie” oraz „Bezpiecznie w sieci”.",
          "Doradztwo zawodowe i mentoring z praktykami.",
          "Certyfikat potwierdzający zdobyte kompetencje oraz catering i wyposażona sala.",
        ],
      },
      {
        heading: "Dane formalne (wsad grantowy)",
        bullets: [
          "Nr umowy: FEPM.05.09-IZ.00-0056/25.",
          "Wartość projektu: 708 250,00 PLN.",
          "Wkład Funduszy Europejskich: 672 837,50 PLN.",
          "Program: Fundusze Europejskie dla Pomorza 2021-2027, Europejski Fundusz Społeczny Plus (EFS+).",
        ],
      },
    ],
    partners: [
      "Baltic Digital Institute (Lider)",
      "Fundacja Przyjaźń bez Granic",
      "Kaszubski Związek Pracodawców",
    ],
    fundingSources: [
      "Fundusze Europejskie dla Pomorza 2021-2027",
      "Europejski Fundusz Społeczny Plus (EFS+)",
      "wkład własny partnerów projektu",
    ],
    sources: [
      {
        label: "Strona projektu (Baltic Digital Institute)",
        url: "https://www.baltic-digital.org/projekty/rozwoj-umiejetnosci",
      },
      {
        label: "Regulamin rekrutacji (PDF)",
        url: "https://drive.google.com/file/d/1tHVxybecczaYGqLGY9q1gaiRPaLS3ei_/view?usp=sharing",
      },
      {
        label: "Formularz zgłoszeniowy (online)",
        url: "https://forms.gle/8s6fgPqPWx2ob4X67",
      },
    ],
    relatedProjectSlug: "rozwoj-umiejetnosci",
  },
];

export const partners: Partner[] = [
  { name: "Baltic Digital Institute (BDI)", url: "https://www.baltic-digital.org/" },
  { name: "Stowarzyszenie Otwarte Kaszuby", url: "https://otwartekaszuby.pl/" },
  { name: "Fundacja Pomorska" },
  { name: "Gmina Zdołbica" },
  { name: "Fundacja Viktoriia" },
];

export const governance = {
  register: {
    krs: "0001035724",
    nip: "5842835506",
    regon: "525383411",
    address: "ul. Hołdu Pruskiego 6, 80-321 Gdańsk",
  },
  documents: [
    {
      label: "Statut Fundacji (PDF)",
      url: "https://drive.google.com/file/d/13KaPOJZH3ThClfRdFWsrskPhw-4ImdSi/view?usp=sharing",
    },
  ],
  board: [
    "Krzysztof Lizak - Prezes Zarządu",
    "Oksana Antsyferova - Członkini Zarządu",
  ],
};

export const contactInfo = {
  address: foundationInfo.address,
  email: foundationInfo.email,
  phone: foundationInfo.phone,
  hours: "Poniedziałek 9:00-14:00, Środa 9:00-14:00, Czwartek 9:00-14:00, Piątek 9:00-14:00",
  mapNote: "Spotkania po wcześniejszym umówieniu; preferujemy kontakt mailowy.",
};
