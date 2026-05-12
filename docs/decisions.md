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
