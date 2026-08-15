import { test, expect } from "@playwright/test";
import { answerMap, answerCurrentQuestion, seedProgress } from "./quiz-helpers";
import { getLesson } from "../src/content/lessons";

// Phase F gate: happy paths for T5-U31-L1 (AnimatedProof 2nd flagship —
// completing the square) and T5-U33-L2 (sine/cosine rules beyond right
// triangles). Answers derive from authored content via the shared helpers.

const consoleErrors: string[] = [];

test.beforeEach(async ({ page }) => {
  consoleErrors.length = 0;
  page.on("console", (msg) => { if (msg.type() === "error") consoleErrors.push(msg.text()); });
  page.on("pageerror", (err) => consoleErrors.push(err.message));
  page.on("response", (res) => { if (res.status() >= 400) consoleErrors.push(`HTTP ${res.status()} ${res.url()}`); });
  await page.route(/googletagmanager\.com|google-analytics\.com/, (route) =>
    route.fulfill({ status: 200, contentType: "text/javascript", body: "window.dataLayer=[];" }).catch(() => {})
  );
});

for (const lessonId of ["T5-U31-L1", "T5-U33-L2"]) {
  test(`fresh user masters ${lessonId}`, async ({ page }) => {
    const lesson = getLesson(lessonId);
    if (!lesson) throw new Error(`Lesson ${lessonId} missing`);
    const answers = answerMap(lessonId);

    // Direct navigation keeps this spec deterministic (see tier1-units.spec.ts).
    await seedProgress(page, lessonId);
    await page.goto(`/mathcraft/lesson/${lessonId}`);

    await expect(page.getByRole("heading", { name: lesson.title })).toBeVisible();
    const surface = page.locator(".widget-surface");
    await expect(surface).toBeVisible();

    // Widget-specific interaction: step the flagship proof / drag the triangle.
    if (lessonId === "T5-U31-L1") {
      const nextStep = surface.getByRole("button", { name: /Next|Step/ });
      if ((await nextStep.count()) > 0) await nextStep.first().click();
    } else {
      const vertex = surface.locator("button, [role='slider'], circle");
      if ((await vertex.count()) > 0) await vertex.first().press("ArrowRight");
    }

    for (let q = 0; q < 5; q++) {
      await expect(page.getByTestId("quiz-prompt")).toBeVisible();
      await answerCurrentQuestion(page, lessonId, answers);
      const nextBtn = page.getByRole("button", { name: /Next question|See results/ });
      await expect(nextBtn).toBeVisible();
      await nextBtn.click();
    }

    await expect(page.getByTestId("quiz-results")).toBeVisible();
    await expect(page.getByText("Lesson mastered!")).toBeVisible();
    await page.reload();
    await expect(page.getByText("✓ Mastered")).toBeVisible();
    expect(consoleErrors).toEqual([]);
  });
}