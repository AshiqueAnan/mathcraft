import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ALL_LESSON_IDS } from "@/content/curriculum";
import { PREREQUISITES } from "@/content/lesson-lite";

export type MasteryState = "locked" | "available" | "in-progress" | "mastered";

export interface LessonProgress {
  state: MasteryState;
  bestScore: number;
  attempts: number;
  lastSeen: number | null;
  recallDueAt: number | null;
  spacedRecallPassed: boolean;
  accuracy: number;
  recentMistakes: string[];
}

export interface ProgressState {
  lessons: Record<string, LessonProgress>;
  lastSessionAt: number | null;
  recheckQueue: string[];
  /** Which lesson the learner was sent BACK to (remediation routing). */
  remediationFrom: string | null;
  setLessonState: (id: string, state: MasteryState) => void;
  recordQuiz: (lessonId: string, score: number, mistakes: string[]) => void;
  recordRecall: (lessonId: string, passed: boolean) => void;
  selectWarmUps: (count?: number) => string[];
  weakestPrerequisite: (lessonId: string) => string | null;
  /** Record "a session started now" — gates the once-per-day warm-up card. */
  touchSession: () => void;
  /** Remember which prerequisite lesson the learner should revisit. */
  sendToRemediation: (lessonId: string) => void;
  /** Clear the remediation pointer once the learner arrives on the target. */
  clearRemediation: () => void;
}

const DAY_MS = 24 * 60 * 60 * 1000;
const RECALL_GAP_DAYS = 3;

function blankProgress(): LessonProgress {
  return {
    state: "locked",
    bestScore: 0,
    attempts: 0,
    lastSeen: null,
    recallDueAt: null,
    spacedRecallPassed: false,
    accuracy: 0,
    recentMistakes: [],
  };
}

/** Recompute every lesson's derived gate from the mastered set + prerequisite chain. */
export function deriveStates(lessons: Record<string, LessonProgress>): Record<string, LessonProgress> {
  const next: Record<string, LessonProgress> = {};
  for (const id of ALL_LESSON_IDS) {
    const p = lessons[id] ?? blankProgress();
    const prereqs = PREREQUISITES[id] ?? [];
    const prereqsMastered = prereqs.every((pre) => lessons[pre]?.state === "mastered");
    let state: MasteryState = p.state;
    if (state !== "mastered" && state !== "in-progress") {
      state = prereqsMastered ? "available" : "locked";
    }
    next[id] = { ...p, state };
  }
  return next;
}

function defaultProgress(): Record<string, LessonProgress> {
  const map: Record<string, LessonProgress> = {};
  for (const id of ALL_LESSON_IDS) {
    map[id] = { ...blankProgress() };
  }
  // The very first lesson of the whole curriculum is the only one a brand-new
  // learner can open; everything else unlocks via the prerequisite chain
  // (strict linear within a unit + previous-unit completion between units).
  const first = ALL_LESSON_IDS[0];
  if (first) map[first].state = "available";
  return map;
}

/**
 * Migration: older persisted stores used `T1-U{unit}-L{lesson}` for ALL tiers
 * (e.g. `T1-U11-L1` for what is actually Tier 2). Rename any `T1-U{n>10}-…` key
 * to its correct tier prefix so existing progress is preserved after the
 * curriculum registry fix.
 */
export function migrateLessonKeys(lessons: Record<string, LessonProgress>): Record<string, LessonProgress> {
  const tierByUnit: Record<string, number> = {
    U11: 2, U12: 2, U13: 2, U14: 2, U15: 2, U16: 2, U17: 2, U18: 2, U19: 2,
    U20: 3, U21: 3, U22: 3, U23: 3, U24: 3, U25: 3, U26: 3, U27: 3,
    U28: 4, U29: 4,
    U30: 5, U31: 5, U32: 5, U33: 5,
  };
  const out: Record<string, LessonProgress> = {};
  for (const [key, value] of Object.entries(lessons)) {
    const m = /^T1-(U\d+)-L(\d+)$/.exec(key);
    if (m) {
      const unit = m[1];
      const lessonNum = m[2];
      const tier = tierByUnit[unit];
      const corrected = tier ? `T${tier}-${unit}-L${lessonNum}` : key;
      out[corrected] = value;
    } else {
      out[key] = value;
    }
  }
  return out;
}

export function computeStates(lessons: Record<string, LessonProgress>): Record<string, LessonProgress> {
  const next: Record<string, LessonProgress> = {};
  for (const id of ALL_LESSON_IDS) {
    const p = lessons[id] ?? defaultProgress()[id];
    const prereqs = PREREQUISITES[id] ?? [];
    const prereqsMastered = prereqs.every((pre) => lessons[pre]?.state === "mastered");
    let state: MasteryState = p.state;
    if (state !== "mastered" && state !== "in-progress") {
      state = prereqsMastered ? "available" : "locked";
    }
    next[id] = { ...p, state };
  }
  return next;
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      lessons: defaultProgress(),
      lastSessionAt: null,
      recheckQueue: [],
      remediationFrom: null,

      setLessonState: (id, state) =>
        set((s) => ({ lessons: { ...s.lessons, [id]: { ...s.lessons[id], state } } })),

      recordQuiz: (lessonId, score, mistakes) =>
        set((s) => {
          const prev = s.lessons[lessonId] ?? defaultProgress()[lessonId];
          const attempts = prev.attempts + 1;
          const accuracy = attempts === 1 ? score : prev.accuracy * 0.6 + score * 0.4;
          const passed = score >= 0.8;
          let state: MasteryState = prev.state;
          if (passed) state = "mastered";
          else if (prev.state === "available") state = "in-progress";
          const updated = {
            lessons: {
              ...s.lessons,
              [lessonId]: {
                ...prev,
                state,
                bestScore: Math.max(prev.bestScore, score),
                attempts,
                accuracy,
                lastSeen: Date.now(),
                recallDueAt: passed && !prev.recallDueAt ? Date.now() + RECALL_GAP_DAYS * DAY_MS : prev.recallDueAt,
                recentMistakes: mistakes.slice(-3),
              },
            },
          };
          // Immediately cascade the unlock: a pass may open the next lesson.
          return { lessons: deriveStates(updated.lessons) };
        }),

      recordRecall: (lessonId, passed) =>
        set((s) => {
          const prev = s.lessons[lessonId];
          if (!prev) return s;
          const spacedRecallPassed = passed ? true : prev.spacedRecallPassed;
          const state: MasteryState = passed ? "mastered" : "in-progress";
          const recheckQueue = passed ? s.recheckQueue : [...s.recheckQueue, lessonId];
          const updated = {
            lessons: { ...s.lessons, [lessonId]: { ...prev, state, spacedRecallPassed, recallDueAt: null, lastSeen: Date.now() } },
            recheckQueue,
          };
          return { lessons: deriveStates(updated.lessons), recheckQueue: updated.recheckQueue };
        }),

      selectWarmUps: (count = 3) => {
        const s = get();
        const mastered = Object.entries(s.lessons)
          .filter(([, p]) => p.state === "mastered" && p.lastSeen !== null)
          .map(([id, p]) => ({
            id,
            priority: (Date.now() - (p.lastSeen ?? 0)) / DAY_MS + (1 - p.accuracy) * 5,
          }))
          .sort((a, b) => a.priority - b.priority)
          .slice(0, count)
          .map((x) => x.id);
        return mastered;
      },

      weakestPrerequisite: (lessonId) => {
        const prereqs = PREREQUISITES[lessonId] ?? [];
        if (prereqs.length === 0) return null;
        const ps = get().lessons;
        const weakest = prereqs
          .map((pre) => ({ pre, acc: ps[pre]?.accuracy ?? 0 }))
          .sort((a, b) => a.acc - b.acc)[0];
        return weakest ? weakest.pre : null;
      },

      touchSession: () => set({ lastSessionAt: Date.now() }),

      sendToRemediation: (lessonId) => set({ remediationFrom: lessonId }),

      clearRemediation: () => set({ remediationFrom: null }),
    }),
    {
      name: "math-foundations-progress-v1",
      version: 2,
      // Migrate any persisted `T1-U{n>10}-…` keys to their correct tier prefix.
      migrate: (persisted, version) => {
        const stored = (persisted ?? {}) as { state?: Partial<ProgressState> };
        if (version < 2 && stored.state?.lessons) {
          stored.state.lessons = migrateLessonKeys(stored.state.lessons);
        }
        return stored as unknown as ProgressState;
      },
      partialize: (state) => ({
        lessons: state.lessons,
        lastSessionAt: state.lastSessionAt,
        recheckQueue: state.recheckQueue,
        remediationFrom: state.remediationFrom,
      }),
    }
  )
);

export function hydrateAndCompute(): void {
  // Recompute lock states only — do NOT overwrite lastSessionAt: the persisted
  // value drives the once-per-day warm-up card on the landing page.
  useProgressStore.setState((s) => ({ lessons: computeStates(s.lessons) }));
}
