# Decisions Log — strona-fpbg

Krótkie wpisy: problem → decyzja → powód. Per workflow.txt sec. "ZASADY DOT. SPECYFIKACJI".

---

## D-WWW-fpbg-19 (2026-05-11) — Wyjątek axe dla iframes FB SDK

**Problem.** Audyt axe na `/aktualnosci` (z osadzoną sekcją FB feed) zwraca 3 violations: `aria-required-children` (critical), `color-contrast` (serious), `link-name` (serious). Wszystkie target-ują wyłącznie elementy wewnątrz `iframe[name="<hash>"]` — czyli treść Facebook Embedded Posts SDK.

**Decyzja.** Akceptujemy wyjątek dla violations w iframes FB. Asercja w `tests/e2e/axe-aktualnosci.spec.ts` filtruje violations których target nie zawiera prefiksu `iframe[` i sprawdza tylko nasz kod (`ourViolations`).

**Powód.**
- iframes FB to **cross-origin embeds** kontrolowane przez Meta — nie mamy nad nimi władzy.
- A11y issues są **wewnątrz iframe DOM**, nie w naszym wrapping container — użytkownik korzystający z czytnika ekranu może w razie potrzeby przeskoczyć całą sekcję (mamy `aria-label` na `<section>` oraz `role="region"` + `aria-label` + `tabIndex={0}` na scrollable container).
- Audyt na **naszym kodzie** zwraca **0 violations** (po naprawie `scrollable-region-focusable` — patrz commit po 44f23cc).
- Alternatywa (rezygnacja z FB feed) byłaby nieproporcjonalna do problemu i wbrew biznesowemu celowi sekcji.

**Status.** Permanent — dopóki Facebook SDK Embedded Posts pozostaje w użyciu. Re-ocena gdy Meta wydaje nową wersję SDK (`v19.0` aktualnie).

**Raport.** `reports/axe/2026-05-11__aktualnosci__axe__task-19-fb-feed.json` — pole `allViolations` zachowuje wszystkie 3 violations dla audytu, `ourViolations` (asercja) = 0.

---

## D-WWW-fpbg-20 (2026-06-18) — Wzbogacenie podstron /aktualnosci/[slug] + nowy render

**Problem.** Wpisy `mosty-solidarnosci-dzierzazno` i `fep-centrum-integracji-start` istniały w `content/data.ts` jako ubogie zalążki (2-3 zdania), a komponent `app/aktualnosci/[slug]/page.tsx` renderował tylko `body` jako akapity (brak nagłówków/list/źródeł).

**Decyzja.** Rozszerzono typ `NewsPost` o pola opcjonalne (`lead`, `highlights`, `sections`, `partners`, `fundingSources`, `sources`, `relatedProjectSlug`, `note`) + nowe typy `NewsSection`, `NewsSource`. Komponent przepisano na strukturalny render (sekcje z nagłówkami, listy, metryki, partnerzy, źródła) w języku wizualnym kart projektów. Uspójniono też sygnaturę z Next 16 (`params: Promise`, `await params`) — wcześniej `/aktualnosci/[slug]` używał starego, synchronicznego wzorca.

**Powód.** Pełna treść oparta na zweryfikowanej wiedzy FPbG; spójność z `/projekty/[slug]`; poprawność dla Next 16.

## D-WWW-fpbg-21 (2026-06-18) — Daty wpisów (AIR GAP / weryfikacja źródeł)

**Wózki/Dzierżążno — data 2023-11-24.** Źródło prasowe (Express Kaszubski, artykuł nadesłany, oprac. M.Dz., 13:14 24.11.2023) jednoznacznie datuje przekazanie na listopad 2023 i wprost nazywa Fundację Przyjaźń Bez Granic (wiceprezes Liliia Plivak, koordynatorka Tatjana Pavlytska) oraz partnera Fundację Viktoriia i Stowarzyszenie Otwarte Kaszuby. Wewnętrzna „Karta projektu - wózki dla Dzierżążna” podaje „W 2024 roku”. **Przyjęto datę potwierdzoną w mediach (2023-11-24).** Rozbieżność do wyjaśnienia z zespołem FPbG.

**FEP — data 2025-09-01 (ZAŁOŻENIE).** Nr umowy `FEPM.05.09-IZ.00-0056/25` oraz okres „FEP 2025-2026” wskazują rok 2025. Dokładna data startu Centrum Usług Integracyjnych nie została zweryfikowana w dostępnych źródłach — przyjęto 1.09.2025 jako wartość roboczą. **Do potwierdzenia przez Adama / zespół projektu.**

**Status.** Open — oba ustalenia dat wymagają potwierdzenia źródłowego przez FPbG.
