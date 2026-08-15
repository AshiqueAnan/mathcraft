"use client";

import Link from "next/link";
import { CURRICULUM } from "@/content/curriculum";
import { getLesson } from "@/content/lessons";
import { useProgressStore } from "@/lib/progress-store";

/** Small geometric marks for mastery state — no emoji, typographic dots. */
function StateDot({ state }: { state: string }) {
  switch (state) {
    case "mastered":
      return <span className="text-success">●</span>;
    case "in-progress":
      return <span className="text-warn">◐</span>;
    case "available":
      return <span className="text-primary">○</span>;
    default:
      return <span className="text-muted">·</span>;
  }
}

export function SkillMapClient() {
  const lessons = useProgressStore((s) => s.lessons);

  return (
    <main className="mx-auto max-w-2xl px-4 pb-24 pt-10">
      <header className="mb-10">
        <h1 className="display">Learning path</h1>
        <p className="meta mt-2">
          Work through the curriculum in order — master a lesson to unlock the next.
          Finish every published lesson to earn your certificate.
        </p>
      </header>

      <div className="space-y-12">
        {CURRICULUM.map((tier) => (
          <section key={tier.id} aria-label={`Tier ${tier.id}: ${tier.name}`}>
            <h2 className="heading mb-6 text-[var(--text-muted)]">{`TIER ${tier.id} · ${tier.name.toUpperCase()}`}</h2>
            <div className="space-y-8">
              {tier.modules.map((mod) => (
                <div key={mod.id}>
                  {mod.units.map((unit) => {
                    const unitProgress = unit.lessonIds.map((id) => lessons[id]?.state ?? "locked");
                    const masteredCount = unitProgress.filter((s) => s === "mastered").length;
                    return (
                      <div key={unit.id} className="grid grid-cols-[auto_1fr] gap-4">
                        {/* Thin progress rail */}
                        <div className="relative w-px bg-[var(--border)]">
                          <div
                            className="absolute left-0 top-0 w-px bg-success"
                            style={{ height: `${unitProgress.length ? (masteredCount / unitProgress.length) * 100 : 0}%` }}
                          />
                        </div>
                        <div className="pb-6">
                          <div className="flex items-baseline justify-between gap-2">
                            <h3 className="heading">{unit.name}</h3>
                            <span className="meta">
                              {masteredCount}/{unit.lessonIds.length} mastered
                            </span>
                          </div>
                          <p className="meta mt-1">{unit.description}</p>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {unit.lessonIds.map((id) => {
                              const state = lessons[id]?.state ?? "locked";
                              const lesson = getLesson(id);
                              const isBuilt = Boolean(lesson);
                              const dot = <StateDot state={state} />;
                              return isBuilt ? (
                                <Link
                                  key={id}
                                  href={`/lesson/${id}`}
                                  className="inline-flex items-center gap-2 rounded-[12px] px-3 py-2 text-sm outline-offset-2 hover:bg-[var(--bg-panel-raised)] focus-visible:outline-2 focus-visible:outline-[var(--primary)]"
                                  title={lesson?.title}
                                >
                                  <span className="flex h-3 w-3 items-center justify-center">{dot}</span>
                                  {lesson?.title}
                                </Link>
                              ) : (
                                <span
                                  key={id}
                                  className="inline-flex items-center gap-2 rounded-[12px] px-3 py-2 text-sm text-muted"
                                  aria-disabled
                                >
                                  <span className="flex h-3 w-3 items-center justify-center">{dot}</span>
                                  {`Lesson ${id.split("-").pop()}`}
                                </span>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}