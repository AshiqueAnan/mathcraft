"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Lesson } from "@/content/schema";
import { RichText } from "@/components/math/Math";
import { WidgetRenderer } from "@/components/widgets/WidgetRenderer";
import { Quiz } from "@/components/quiz/Quiz";
import { ExplainDifferently } from "@/components/tutor/ExplainDifferently";
import { useProgressStore } from "@/lib/progress-store";
import { unitForLesson, tierForUnit } from "@/content/curriculum";
import { lessonTitle } from "@/content/lessons";
import { CONTACT_EMAIL } from "@/config/site";

export function LessonClient({ lesson }: { lesson: Lesson }) {
  const state = useProgressStore((s) => s.lessons[lesson.id]?.state ?? "locked");
  const remediationFrom = useProgressStore((s) => s.remediationFrom);
  const clearRemediation = useProgressStore((s) => s.clearRemediation);
  const [mounted, setMounted] = useState(false);
  const [showWelcomeBack, setShowWelcomeBack] = useState(false);
  const [prediction, setPrediction] = useState<string | number | null>(null);
  const [sayPick, setSayPick] = useState<string | null>(null);

  // A learner routed here from a failed quiz on a later lesson gets a friendly
  // "welcome back". Capture it in local state BEFORE clearing the store pointer
  // (otherwise the banner would flash for a single render then vanish).
  // Only the DESTINATION lesson may consume the pointer: the source page is
  // still mounted during the client-side navigation and would otherwise clear
  // the value before the destination ever reads it.
  useEffect(() => {
    if (remediationFrom !== null && remediationFrom !== lesson.id) {
      setShowWelcomeBack(true);
      clearRemediation();
    }
  }, [remediationFrom, clearRemediation, lesson.id]);
  const isRemediationTarget = showWelcomeBack && mounted;

  // Gate the lesson client-side (SSR/static HTML stays intact for SEO; the
  // lock is enforced once React mounts on the client).
  useEffect(() => {
    setMounted(true);
  }, []);
  const locked = mounted && state === "locked";

  if (locked) {
    return (
      <article className="mx-auto max-w-[640px] px-4 pb-24 pt-16 text-center">
        <h1 className="display">This lesson is locked</h1>
        <p className="body mt-4 text-muted">
          Complete the earlier lessons in the curriculum first — each lesson unlocks the next.
        </p>
        <Link href="/map" className="btn btn-primary mt-8">
          View the learning path
        </Link>
      </article>
    );
  }

  const unit = unitForLesson(lesson.id);
  const idx = unit ? unit.lessonIds.indexOf(lesson.id) : -1;
  const nextId = unit && idx >= 0 && idx < unit.lessonIds.length - 1 ? unit.lessonIds[idx + 1] : null;
  const prevId = unit && idx > 0 ? unit.lessonIds[idx - 1] : null;
  const tier = tierForUnit(unit?.id ?? "");

  const say = lesson.discovery.sayItYourWay;
  const sayPicked = say ? say.phrasings.find((p) => p.id === sayPick) : undefined;
  const predictionMade = prediction !== null;

  return (
    <article className="mx-auto max-w-[640px] px-4 pb-24 pt-8">
      {/* Beat 1 — SCENARIO */}
      <header className="mb-12">
        {isRemediationTarget && (
          <div
            className="mb-6 rounded-xl border border-[var(--primary)] bg-[var(--bg-panel-raised)] p-4"
            data-testid="remediation-welcome-back"
          >
            <p className="body font-semibold text-[var(--primary)]">Welcome back</p>
            <p className="meta mt-1">
              A later lesson needs this foundation. Refresh it here, then try that quiz again.
            </p>
          </div>
        )}
        <p className="meta">{tier ? `Tier ${tier.id} · ${unit?.name}` : lesson.id}</p>
        <h1 className="display mt-2">{lesson.title}</h1>
        {state === "mastered" && (
          <p className="meta mt-2 text-success">✓ Mastered</p>
        )}
        {state === "in-progress" && (
          <p className="meta mt-2 text-warn">In progress</p>
        )}
        <div className="mt-8 border-t border-token pt-4">
          <p className="body">{lesson.hook.question}</p>
        </div>
      </header>

      {/* Prerequisite suggestions — recommended, not gates */}
      {lesson.prerequisites.length > 0 && (
        <div className="accent-line-warn mb-10">
          <p className="meta mb-2">Nice to know first — recommended, not required</p>
          <div className="flex flex-wrap gap-2">
            {lesson.prerequisites.map((pre) => (
              <Link
                key={pre}
                href={`/lesson/${pre}`}
                className="rounded-[12px] border border-token px-3 py-2 text-sm hover:border-[var(--primary)] hover:text-[var(--primary)]"
              >
                {lessonTitle(pre)}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Beat 2 — EXPLORE */}
      <section className="mb-14 space-y-10">
        <h2 className="heading">Explore</h2>
        {lesson.discovery.challenges.map((c, i) => (
          <div key={i} className="space-y-2">
            <p className="body">
              <span className="font-semibold text-[var(--primary)]">{i + 1}.</span> {c.instruction}
            </p>
            <p className="meta">Watch for: {c.observe}</p>
          </div>
        ))}
        {lesson.intuitionBlocks.map((block, i) => (
          <div key={i} className="space-y-3">
            <p className="body">
              <RichText text={block.narrative} />
            </p>
            <WidgetRenderer widget={block.widget} props={block.props} />
          </div>
        ))}
      </section>

      {/* Beat 3 — PREDICT (commit before reveal) */}
      <section className="mb-14">
        <h2 className="heading">Before you see the rule — predict</h2>
        <p className="body mt-3">{lesson.discovery.predict.prompt}</p>
        {!predictionMade && lesson.discovery.predict.options && (
          <div className="mt-4 flex flex-wrap gap-2">
            {lesson.discovery.predict.options.map((o) => (
              <button
                key={o.id}
                type="button"
                onClick={() => setPrediction(o.id)}
                className="btn btn-ghost"
              >
                <RichText text={o.text} />
              </button>
            ))}
          </div>
        )}
        {predictionMade && (
          <div className="accent-line mt-4">
            <p className="body">{lesson.discovery.predict.reveal}</p>
            <p className="meta mt-2">
              You committed before the reveal — that's the learning. Here's what actually happens.
            </p>
          </div>
        )}
      </section>

      {/* Beat 4 — DISCOVER → NAME IT */}
      <section className="mb-14">
        <h2 className="heading">Say it your way</h2>
        <p className="body mt-3">{say.prompt}</p>
        <div className="mt-4 space-y-2">
          {say.phrasings.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setSayPick(p.id)}
              className={`block w-full rounded-[12px] border px-4 py-3 text-left body ${
                sayPick === p.id
                  ? p.correct
                    ? "border-[var(--success)] text-[var(--success)]"
                    : "border-[var(--error)] text-[var(--error)]"
                  : "border-token hover:border-[var(--primary)]"
              }`}
            >
              <RichText text={p.text} />
            </button>
          ))}
        </div>
        {sayPicked && (
          <div className="accent-line mt-4">
            <p className="meta">{sayPicked.why}</p>
            {sayPicked.correct && (
              <p className="body mt-2">
                Mathematicians call this the <strong>{say.formalName}</strong>.
              </p>
            )}
          </div>
        )}

        {lesson.formalBlocks.map((block, i) => (
          <div key={i} className="mt-10 space-y-4">
            <p className="body">
              <RichText text={block.definition} />
            </p>
            {block.examples.map((ex, j) => (
              <p key={j} className="body border-l border-token pl-4">
                <RichText text={ex} />
              </p>
            ))}
            <p className="accent-line-error meta">
              <RichText text={block.pitfall} />
            </p>
            <ExplainDifferently lesson={lesson} blockIndex={i} />
          </div>
        ))}
      </section>

      {/* Beat 5 — PRACTICE & RETRIEVE + STRETCH */}
      <section className="mb-14">
        <h2 className="heading">Check your understanding</h2>
        <div className="mt-4">
          <Quiz lesson={lesson} />
        </div>
      </section>

      <section className="accent-line mb-14">
        <p className="meta mb-1">Stretch — curious? Think about it, no grading.</p>
        <p className="body">
          <RichText text={lesson.discovery.stretch} />
        </p>
      </section>

      {/* One clear next step */}
      <nav className="flex items-center justify-between gap-4">
        {prevId ? (
          <Link href={`/lesson/${prevId}`} className="btn btn-ghost">← Previous</Link>
        ) : (
          <span />
        )}
        {nextId ? (
          <Link href={`/lesson/${nextId}`} className="btn btn-primary">Next lesson →</Link>
        ) : (
          <Link href="/map" className="btn btn-primary">Back to the map</Link>
        )}
      </nav>

      <p className="meta mt-10 text-center">
        Found an error or a confusing explanation?{" "}
        <a href={`mailto:${CONTACT_EMAIL}?subject=Feedback: ${lesson.id}`} className="text-primary hover:underline">
          Tell me
        </a>
      </p>
    </article>
  );
}
