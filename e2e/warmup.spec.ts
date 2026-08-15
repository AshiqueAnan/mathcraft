import { test, expect } from "@playwright/test";
import { getLesson } from "../src/content/lessons";
import { answerMap } from "./quiz-helpers";

const STORE_KEY = "math-foundations-progress-v1";

/**
 * Warm-up card (spaced retrieval) — the retention engine's only UI.
 * A returning learner with ≥1 mastered lesson and a lastSessionAt from a
 * previous day sees a skippable 3-question recall card on the landing page.
 * A wrong answer demotes that lesson back to in-progress and queues a recheck.
 */
test("a returning learner sees the warm-up card and a wrong answer demotes the lesson", async ({ page }) => {
  // Seed: T1-U1-L1 mastered (lastSeen recent), lastSessionAt 2 days ago → new day.
  const lessonId = "T1-U1-L1";
  const lesson = getLesson(lessonId)!;
  const answers = answerMap(lessonId);
  const twoDaysAgo = Date.now() - 2 * 24 * 60 * 60 * 1000;

  const payload = {
    state: {
      lessons: {
        [lessonId]: {
          state: "mastered",
          bestScore: 1,
          attempts: 1,
          lastSeen: Date.now() - 1000,
          recallDueAt: null,
          spacedRecallPassed: true,
          accuracy: 1,
          recentMistakes: [],
        },
      },
      lastSessionAt: twoDaysAgo,
      recheckQueue: [],
    },
    version: 2,
  };
  await page.addInitScript(
    ([key, value]) => {
      window.localStorage.setItem(key, JSON.stringify(value));
    },
    [STORE_KEY, payload] as const
  );

  const consoleErrors: string[] = [];
  page.on("console", (msg) => { if (msg.type() === "error") consoleErrors.push(msg.text()); });
  page.on("pageerror", (err) => consoleErrors.push(err.message));
  page.on("response", (res) => { if (res.status() >= 400) consoleErrors.push(`HTTP ${res.status()} ${res.url()}`); });

  await page.goto("/mathcraft/");

  // Warm-up card appears above the continue CTA.
  await expect(page.getByTestId("warmup-card")).toBeVisible();
  await expect(page.getByTestId("lesson-cta")).toBeVisible();

  // Answer the FIRST warm-up question WRONG on purpose: pick the first option
  // that is NOT the correct one (for mcq/true-false), or type 0 for numeric.
  const qid = await page.getByTestId("warmup-question").getAttribute("data-question-id");
  expect(qid).toBeTruthy();
  const correct = answers[qid!];
  const question = lesson.quiz.pool.find((q) => q.id === qid)!;

  if (question.type === "mcq") {
    const wrongOption = question.options.find((o) => o.id !== correct) ?? question.options[0];
    await page.locator(`[data-option-id="${wrongOption.id}"]`).click();
  } else if (question.type === "true-false-justify") {
    // Tap the opposite of the truth value.
    const wrong = question.isTrue ? "false" : "true";
    await page.locator(`[data-option-id="${wrong}"]`).click();
  } else if (question.type === "numeric-input" || question.type === "fraction-input") {
    await page.getByLabel("Your answer").fill(correct === "0" ? "1" : "0");
  } else {
    // Unsupported warm-up type (drag/order/graph never appear in the card).
    throw new Error(`Unexpected warm-up question type: ${question.type}`);
  }
  await page.getByRole("button", { name: "Check answer" }).click();
  await expect(page.getByTestId("warmup-feedback")).toContainText("Not quite");

  // Demotion: the mastered lesson becomes in-progress and is queued for recheck.
  const persisted = await page.evaluate((key) => localStorage.getItem(key), STORE_KEY);
  const parsed = JSON.parse(persisted!) as {
    state: {
      lessons: Record<string, { state: string }>;
      recheckQueue: string[];
    };
  };
  expect(parsed.state.lessons[lessonId].state).toBe("in-progress");
  expect(parsed.state.recheckQueue).toContain(lessonId);

  expect(consoleErrors).toEqual([]);
});

test("a fresh profile sees no warm-up card", async ({ page }) => {
  await page.addInitScript(() => {
    window.localStorage.removeItem(STORE_KEY);
  });
  await page.goto("/mathcraft/");
  await expect(page.getByTestId("warmup-card")).toHaveCount(0);
  await expect(page.getByTestId("lesson-cta")).toBeVisible();
});

test("warm-up can be skipped without demoting anything", async ({ page }) => {
  const lessonId = "T1-U1-L1";
  const twoDaysAgo = Date.now() - 2 * 24 * 60 * 60 * 1000;
  const payload = {
    state: {
      lessons: {
        [lessonId]: {
          state: "mastered",
          bestScore: 1,
          attempts: 1,
          lastSeen: Date.now() - 1000,
          recallDueAt: null,
          spacedRecallPassed: true,
          accuracy: 1,
          recentMistakes: [],
        },
      },
      lastSessionAt: twoDaysAgo,
      recheckQueue: [],
    },
    version: 2,
  };
  await page.addInitScript(
    ([key, value]) => {
      window.localStorage.setItem(key, JSON.stringify(value));
    },
    [STORE_KEY, payload] as const
  );

  await page.goto("/mathcraft/");
  await expect(page.getByTestId("warmup-card")).toBeVisible();
  await page.getByRole("button", { name: "Skip to my lesson" }).click();
  await expect(page.getByTestId("warmup-card")).toHaveCount(0);

  // No demotion happened.
  const persisted = await page.evaluate((key) => localStorage.getItem(key), STORE_KEY);
  const parsed = JSON.parse(persisted!) as {
    state: {
      lessons: Record<string, { state: string }>;
    };
  };
  expect(parsed.state.lessons[lessonId].state).toBe("mastered");
});