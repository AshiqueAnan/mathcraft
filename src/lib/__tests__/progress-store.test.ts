import { describe, it, expect, beforeEach } from "vitest";
import { useProgressStore, computeStates, hydrateAndCompute, migrateLessonKeys, type LessonProgress } from "../progress-store";

function blankLesson(state: "locked" | "available" | "in-progress" | "mastered" = "available"): LessonProgress {
  return {
    state,
    bestScore: 0,
    attempts: 0,
    lastSeen: null,
    recallDueAt: null,
    spacedRecallPassed: false,
    accuracy: 0,
    recentMistakes: [],
  };
}

describe("progress store", () => {
  beforeEach(() => {
    useProgressStore.setState({
      lessons: {
        "T1-U4-L1": blankLesson(),
        "T1-U4-L2": blankLesson("locked"),
        "T1-U4-L3": blankLesson("locked"),
      },
      lastSessionAt: null,
      recheckQueue: [],
    });
  });

  it("records a quiz pass → mastered, schedules recall 3 days later", () => {
    useProgressStore.getState().recordQuiz("T1-U4-L1", 1, []);
    const p = useProgressStore.getState().lessons["T1-U4-L1"];
    expect(p.state).toBe("mastered");
    expect(p.bestScore).toBe(1);
    expect(p.attempts).toBe(1);
    expect(p.recallDueAt).not.toBeNull();
    // ~3 days (with a little slack for test execution time)
    const delta = (p.recallDueAt! - Date.now()) / (24 * 60 * 60 * 1000);
    expect(delta).toBeCloseTo(3, 1);
  });

  it("a quiz pass immediately unlocks the next lesson in the chain", () => {
    useProgressStore.setState({
      lessons: {
        // Fresh-profile shape: U1-L1 available, U1-L2 locked.
        "T1-U1-L1": blankLesson("available"),
        "T1-U1-L2": blankLesson("locked"),
      },
      lastSessionAt: null,
      recheckQueue: [],
    });
    useProgressStore.getState().recordQuiz("T1-U1-L1", 1, []);
    const s = useProgressStore.getState().lessons;
    expect(s["T1-U1-L1"].state).toBe("mastered");
    // U1-L2 depends only on U1-L1 → unlocks in the same update.
    expect(s["T1-U1-L2"].state).toBe("available");
  });

  it("a failing quiz moves available → in-progress and keeps no recall", () => {
    useProgressStore.getState().recordQuiz("T1-U4-L1", 0.6, ["adds denominators"]);
    const p = useProgressStore.getState().lessons["T1-U4-L1"];
    expect(p.state).toBe("in-progress");
    expect(p.recentMistakes).toContain("adds denominators");
    expect(p.recallDueAt).toBeNull();
  });

  it("mastery survives reload via persisted state (localStorage abstraction)", () => {
    // The store persists to localStorage; simulate reload by re-reading storage key.
    useProgressStore.getState().recordQuiz("T1-U4-L1", 0.9, []);
    const key = "math-foundations-progress-v1";
    const persisted = localStorage.getItem(key);
    expect(persisted).toBeTruthy();
    const parsed = JSON.parse(persisted!) as { state: { lessons: Record<string, LessonProgress> } };
    expect(parsed.state.lessons["T1-U4-L1"].state).toBe("mastered");
  });

  it("a failed spaced recall demotes to in-progress and queues a recheck", () => {
    useProgressStore.getState().recordQuiz("T1-U4-L1", 1, []);
    useProgressStore.getState().recordRecall("T1-U4-L1", false);
    const p = useProgressStore.getState().lessons["T1-U4-L1"];
    expect(p.state).toBe("in-progress");
    expect(useProgressStore.getState().recheckQueue).toContain("T1-U4-L1");
  });

  it("selectWarmUps weights oldest last-seen + lowest accuracy", () => {
    useProgressStore.getState().recordQuiz("T1-U4-L1", 1, []);
    // Make a second mastered lesson with older lastSeen to force ordering.
    useProgressStore.setState((s) => ({
      lessons: {
        ...s.lessons,
        "T1-U4-L2": { ...blankLesson("mastered"), state: "mastered", lastSeen: Date.now() - 10 * 24 * 3600 * 1000, accuracy: 0.5 },
      },
    }));
    const warmUps = useProgressStore.getState().selectWarmUps(2);
    expect(warmUps).toContain("T1-U4-L2");
  });

  it("computeStates unlocks a lesson when its prerequisites are mastered", () => {
    const states = computeStates({
      "T1-U1-L1": blankLesson("mastered"),
      "T1-U1-L2": blankLesson("locked"),
    });
    // T1-U1-L2 depends only on T1-U1-L1 → becomes available.
    expect(states["T1-U1-L2"].state).toBe("available");
  });

  it("weakestPrerequisite returns the prerequisite with lowest accuracy", () => {
    useProgressStore.setState({
      lessons: {
        "T1-U1-L2": { ...blankLesson(), state: "available" },
        "T1-U1-L1": { ...blankLesson(), state: "in-progress", accuracy: 0.4 },
      },
    });
    const weak = useProgressStore.getState().weakestPrerequisite("T1-U1-L2");
    expect(weak).toBe("T1-U1-L1");
  });

  it("touchSession records the session timestamp", () => {
    useProgressStore.getState().touchSession();
    expect(useProgressStore.getState().lastSessionAt).not.toBeNull();
    const delta = Math.abs(useProgressStore.getState().lastSessionAt! - Date.now());
    expect(delta).toBeLessThan(5_000);
  });

  it("hydrateAndCompute preserves lastSessionAt (warm-up daily gate)", () => {
    useProgressStore.setState({ lastSessionAt: 12345 });
    hydrateAndCompute();
    expect(useProgressStore.getState().lastSessionAt).toBe(12345);
  });

  it("migrateLessonKeys renames old-tier keys to correct tier prefixes", () => {
    const old = {
      "T1-U4-L1": blankLesson("mastered"), // Tier 1 — stays
      "T1-U11-L1": blankLesson("mastered"), // actually Tier 2
      "T1-U20-L2": blankLesson("available"), // actually Tier 3
      "T1-U28-L3": blankLesson("in-progress"), // actually Tier 4
      "T1-U30-L1": blankLesson("mastered"), // actually Tier 5
    };
    const migrated = migrateLessonKeys(old);
    expect(migrated["T1-U4-L1"]?.state).toBe("mastered"); // unchanged
    expect(migrated["T2-U11-L1"]?.state).toBe("mastered");
    expect(migrated["T3-U20-L2"]?.state).toBe("available");
    expect(migrated["T4-U28-L3"]?.state).toBe("in-progress");
    expect(migrated["T5-U30-L1"]?.state).toBe("mastered");
    // Old keys gone
    expect(migrated["T1-U11-L1"]).toBeUndefined();
    expect(migrated["T1-U20-L2"]).toBeUndefined();
    expect(migrated["T1-U28-L3"]).toBeUndefined();
    expect(migrated["T1-U30-L1"]).toBeUndefined();
  });
});
