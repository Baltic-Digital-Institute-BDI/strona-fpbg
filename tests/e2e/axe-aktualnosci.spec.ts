import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import fs from "node:fs";
import path from "node:path";

/**
 * Audyt axe dla /aktualnosci (z osadzoną sekcją FB feed).
 * Zapisuje pełny wynik do reports/axe/.
 *
 * UWAGA: violations wewnątrz iframes FB (cross-origin embed) są wyłączone
 * z asercji — to treść kontrolowana przez Facebook SDK, poza zasięgiem
 * projektu FPbG. Decyzja udokumentowana w docs/decisions.md (D-WWW-fpbg-19).
 */
test("axe na /aktualnosci - brak krytycznych naruszeń w naszym kodzie", async ({
  page,
}) => {
  await page.goto("/aktualnosci");
  await page.waitForLoadState("networkidle");

  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();

  // Filtruj violations: zostaw tylko te NIE pochodzące z iframe FB.
  const ourViolations = results.violations
    .map((v) => ({
      ...v,
      nodes: v.nodes.filter(
        (n) => !n.target.some((t) => String(t).startsWith("iframe["))
      ),
    }))
    .filter((v) => v.nodes.length > 0);

  const reportPath = path.join(
    process.cwd(),
    "reports",
    "axe",
    "2026-05-11__aktualnosci__axe__task-19-fb-feed.json"
  );
  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(
    reportPath,
    JSON.stringify(
      {
        url: page.url(),
        timestamp: new Date().toISOString(),
        allViolations: results.violations,
        ourViolations,
        passesCount: results.passes.length,
        incompleteCount: results.incomplete.length,
        note: "Violations w iframe[...] = FB SDK cross-origin embeds (poza zasięgiem). Asercja sprawdza tylko ourViolations.",
      },
      null,
      2
    )
  );

  const critical = ourViolations.filter(
    (v) => v.impact === "critical" || v.impact === "serious"
  );
  expect(critical, JSON.stringify(critical, null, 2)).toEqual([]);
});
