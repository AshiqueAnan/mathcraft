import { test, expect } from "@playwright/test";
import { PREREQUISITES } from "../src/content/lesson-lite";
import { getLesson, lessonTitle } from "../src/content/lessons";
import { seedProgress, answerMap } from "./quiz-helpers";

const STORE_KEY = "math-foundations-progress-v1";

test("a failing quiz offers a remediation link to the weakest prerequisite", async ({ page }) => {
  const lessonId = "T1-U1-L2";
  const answers = answerMap(lessonId);
  await seedProgress(page, lessonId);

  const consoleErrors: string[] = [];
  page.on("console", (msg) => { if (msg.type() === "error") consoleErrors.push(msg.text()); });
  page.on("pageerror", (err) => consoleErrors.push(err.message));
  page.on("response", (res) => { if (res.status() >= 400) consoleErrors.push(`HTTP ${res.status()} ${res.url()}`); });

  await page.goto(`/mathcraft/lesson/${lessonId}`);

  // Fail EVERY question in the deterministic first sitting (<80%).
  const lesson = getLesson(lessonId)!;
  const total = lesson.quiz.selection.procedural + lesson.quiz.selection.conceptual + lesson.quiz.selection.word;
  for (let i = 0; i < total; i++) {
    const qid = await page.getByTestId("quiz-prompt").getAttribute("data-question-id");
    const q = lesson.quiz.pool.find((qq) => qq.id === qid)!;
    if (q.type === "mcq") {
      const wrong = q.options.find((o) => o.id !== answers[qid!]) ?? q.options[0];
      await page.locator(`[data-option-id="${wrong.id}"]`).click();
    } else if (q.type === "true-false-justify") {
      await page.locator(`[data-option-id="${q.isTrue ? "false" : "true"}"]`).click();
    } else if (q.type === "numeric-input" || q.type === "fraction-input") {
      await page.getByLabel("Your answer").fill("0");
    } else if (q.type === "drag-match") {
      const mapping = JSON.parse(answers[qid!]) as Record<string, string>;
      const vals = Object.values(mapping);
      const keys = Object.keys(mapping);
      for (let k = 0; k < keys.length; k++) {
        await page.locator(`[data-source="${keys[k]}"]`).click();
        await page.locator(`[data-target="${vals[(k + 1) % vals.length]}"]`).click();
      }
    } else if (q.type === "order-steps") {
      const seq = JSON.parse(answers[qid!]) as string[];
      for (const step of [...seq].reverse()) {
        await page.locator(`[data-step="${step}"]`).click();
      }
    } else if (q.type === "graph-interact") {
      for (const key of Object.keys(q.validate)) {
        await page.locator(`input[aria-label="${key}"]`).fill("0");
      }
    }
    await page.getByRole("button", { name: "Check answer" }).click();
    if (i < total - 1) await page.getByRole("button", { name: "Next question" }).click();
  }
  await page.getByRole("button", { name: "See results" }).click();

  const weakest = PREREQUISITES[lessonId][0];
  const link = page.getByTestId("remediation-link");
  await expect(link).toBeVisible();
  await expect(link).toContainText(lessonTitle(weakest));

  await link.click();
  await expect(page).toHaveURL(/\/mathcraft\/lesson\//);
  await expect(page.getByTestId("remediation-welcome-back")).toBeVisible();

  const persisted = await page.evaluate((key) => localStorage.getItem(key), STORE_KEY);
  const parsed = JSON.parse(persisted!) as { state: { remediationFrom: string | null } };
  expect(parsed.state.remediationFrom).toBeNull();

  expect(consoleErrors).toEqual([]);
});