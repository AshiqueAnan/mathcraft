import { test, expect } from "@playwright/test";
import { answerMap, answerCurrentQuestion, seedProgress } from "./quiz-helpers";
import { getLesson } from "../src/content/lessons";

// Phase C gate: happy paths for U1, U5, U7.
// Answers derive from authored content via the shared helpers.

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

for (const lessonId of ["T1-U1-L1", "T1-U5-L1", "T1-U7-L1"]) {
  test(`fresh user masters ${lessonId}`, async ({ page }) => {
    const lesson = getLesson(lessonId);
    if (!lesson) throw new Error(`Lesson ${lessonId} missing`);
    const answers = answerMap(lessonId);

    // Lesson routes are statically generated from BUILT_LESSONS. Direct
    // navigation keeps this spec deterministic in a shared worker whose
    // localStorage has masteries from earlier tests (the landing CTA's
    // "one clear next step" would skip already-mastered U1-L1).
    await seedProgress(page, lessonId);
    await page.goto(`/mathcraft/lesson/${lessonId}`);

    await expect(page.getByRole("heading", { name: lesson.title })).toBeVisible();
    const surface = page.locator(".widget-surface");
    await expect(surface).toBeVisible();

    const slider = surface.locator('[role="slider"]');
    if ((await slider.count()) > 0) {
      await slider.first().press("ArrowRight");
    } else {
      const cell = surface.locator("button");
      if ((await cell.count()) > 0) await cell.first().click();
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