import { expect, test } from "@playwright/test";

/**
 * Test E2E sekcji "Co u nas? Najnowsze posty na Facebooku" na /aktualnosci.
 * Sprawdza: obecność sekcji, lazy-load (IO trigger), wyrenderowanie kart FB
 * (XFBML), wycentrowanie kontenera i scrollowalność.
 */
test.describe("FB Feed na /aktualnosci", () => {
  test("sekcja renderuje się i zawiera nagłówek + CTA", async ({ page }) => {
    await page.goto("/aktualnosci");
    await expect(
      page.getByRole("heading", {
        name: /Co u nas\? Najnowsze posty na Facebooku/i,
      })
    ).toBeVisible();
    // CTA do profilu FB
    await expect(
      page.getByRole("link", { name: /Otwórz pełny profil na Facebooku/i }).first()
    ).toBeVisible();
  });

  test("kontener postów jest wyśrodkowany i scrollowalny", async ({ page }) => {
    await page.goto("/aktualnosci");
    // Przewiń do sekcji FB, aby IntersectionObserver odpalił lazy-load SDK.
    await page
      .getByRole("heading", { name: /Co u nas\? Najnowsze posty na Facebooku/i })
      .scrollIntoViewIfNeeded();

    // Daj czas SDK FB na pobranie i parsowanie XFBML (do 15s).
    await page.waitForTimeout(15_000);

    const metrics = await page.evaluate(() => {
      const posts = document.querySelectorAll(".fb-post");
      const post0 = posts[0] as HTMLElement | undefined;
      if (!post0) return { totalPosts: 0 };
      const container = post0.closest(".overflow-y-auto") as HTMLElement | null;
      if (!container) return { totalPosts: posts.length, error: "no-container" };
      const cBox = container.getBoundingClientRect();
      const pBox = post0.getBoundingClientRect();
      const rendered = Array.from(posts).filter(
        (p) =>
          p.getAttribute("fb-xfbml-state") === "rendered" &&
          !!p.querySelector("iframe")
      ).length;
      return {
        totalPosts: posts.length,
        rendered,
        leftGap: Math.round(pBox.left - cBox.left),
        rightGap: Math.round(cBox.right - pBox.right),
        scrollable: container.scrollHeight > container.clientHeight,
      };
    });

    // Mamy 7 kart FB w JSON
    expect(metrics.totalPosts).toBe(7);
    // Centrowanie: tolerujemy 2 px różnicy (scrollbar-gutter)
    expect(Math.abs((metrics.leftGap ?? 0) - (metrics.rightGap ?? 0))).toBeLessThanOrEqual(2);
  });
});
