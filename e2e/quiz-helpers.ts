import { expect, type Page } from "@playwright/test";
import { getLesson } from "../src/content/lessons";
import { PREREQUISITES } from "../src/content/lesson-lite";
import type { Lesson, Question } from "../src/content/schema";

/**
 * Shared e2e quiz helpers.
 *
 * `answerMap` derives the correct answer for every question in a lesson's pool
 * (all 7 question types) directly from the authored content, so specs never
 * hardcode curriculum data. `answerCurrentQuestion` reads the live question id
 * from the DOM and answers it on the learner's behalf — deterministic and
 * truthful to the authored curriculum.
 *
 * Pass either a lesson ID (looked up from the curriculum) or a Lesson object
 * (e.g. a synthetic throwaway demo lesson used in test routes).
 */

type LessonOrId = string | Lesson;

function resolveLesson(lessonOrId: LessonOrId): Lesson {
  if (typeof lessonOrId === "string") {
    const lesson = getLesson(lessonOrId);
    if (!lesson) throw new Error(`Lesson ${lessonOrId} missing`);
    return lesson;
  }
  return lessonOrId;
}

/**
 * Seed the persisted progress store so a lesson (and every transitive
 * prerequisite) reads as MASTERED. The lesson route is now gated client-side
 * by the prerequisite chain, so direct-navigation specs must unlock the chain
 * first. Must run BEFORE page.goto (the store rehydrates from localStorage).
 */
export async function seedProgress(page: Page, lessonId: string) {
  const toMaster = new Set<string>();
  const visit = (id: string) => {
    if (toMaster.has(id)) return;
    toMaster.add(id);
    for (const pre of PREREQUISITES[id] ?? []) visit(pre);
  };
  visit(lessonId);

  const lessons: Record<string, { state: string }> = {};
  for (const id of toMaster) {
    lessons[id] = { state: "mastered" };
  }
  const payload = {
    state: {
      lessons,
      lastSessionAt: null,
      recheckQueue: [],
    },
    version: 2,
  };
  await page.addInitScript(
    ([key, value]) => {
      window.localStorage.setItem(key, JSON.stringify(value));
    },
    ["math-foundations-progress-v1", payload] as const
  );
}

/** Serialized answer fixtures keyed by question id. */
export function answerMap(lessonOrId: LessonOrId): Record<string, string> {
  const lesson = resolveLesson(lessonOrId);
  const map: Record<string, string> = {};
  for (const q of lesson.quiz.pool) {
    switch (q.type) {
      case "mcq":
        map[q.id] = q.correctOptionId;
        break;
      case "true-false-justify":
        map[q.id] = q.isTrue ? "true" : "false";
        break;
      case "numeric-input":
        map[q.id] = String(q.answer);
        break;
      case "fraction-input":
        map[q.id] = `${q.numerator}/${q.denominator}`;
        break;
      case "drag-match":
        map[q.id] = JSON.stringify(Object.fromEntries(q.pairs.map((p) => [p.source, p.target])));
        break;
      case "order-steps":
        map[q.id] = JSON.stringify(q.sequence);
        break;
      case "graph-interact":
        map[q.id] = JSON.stringify(q.validate);
        break;
    }
  }
  return map;
}

function getQuestion(lessonOrId: LessonOrId, qid: string): Question {
  const lesson = resolveLesson(lessonOrId);
  const q = lesson.quiz.pool.find((p) => p.id === qid);
  if (!q) throw new Error(`No question ${qid} in lesson ${lesson.id}`);
  return q;
}

/** Answer the current question on screen correctly, using the derived fixture. */
export async function answerCurrentQuestion(page: Page, lessonOrId: LessonOrId, answers: Record<string, string>) {
  const prompt = page.getByTestId("quiz-prompt");
  const qid = await prompt.getAttribute("data-question-id");
  if (!qid || !answers[qid]) throw new Error(`No answer fixture for ${qid}`);

  const question = getQuestion(lessonOrId, qid);
  const answer = answers[qid];

  switch (question.type) {
    case "mcq":
    case "true-false-justify":
      await page.locator(`[data-option-id="${answer}"]`).click();
      break;

    case "numeric-input":
    case "fraction-input":
      await page.getByLabel("Your answer").fill(answer);
      break;

    case "drag-match": {
      const mapping = JSON.parse(answer) as Record<string, string>;
      for (const [source, target] of Object.entries(mapping)) {
        await page.locator(`[data-source="${source}"]`).click();
        await page.locator(`[data-target="${target}"]`).click();
      }
      break;
    }

    case "order-steps": {
      const sequence = JSON.parse(answer) as string[];
      for (const step of sequence) {
        await page.locator(`[data-step="${step}"]`).click();
      }
      break;
    }

    case "graph-interact": {
      const state = JSON.parse(answer) as Record<string, number>;
      for (const [key, value] of Object.entries(state)) {
        await page.locator(`input[aria-label="${key}"]`).fill(String(value));
      }
      break;
    }
  }

  await page.getByRole("button", { name: "Check answer" }).click();
  await expect(page.getByTestId("quiz-feedback")).toContainText("Correct");
}