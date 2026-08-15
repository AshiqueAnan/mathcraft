"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useProgressStore } from "@/lib/progress-store";
import { ALL_LESSON_IDS } from "@/content/curriculum";
import { CREATOR_NAME, CREATOR_PORTFOLIO, SITE_NAME } from "@/config/site";

// Lazy-load the warm-up card (pulls the heavy lesson registry only when a
// returning learner actually triggers it — route-level code splitting keeps
// the landing page JS small).
const WarmUpCard = dynamic(
  () => import("@/components/warmup/WarmUpCard").then((m) => m.WarmUpCard),
  { ssr: false, loading: () => null }
);

export default function Home() {
  const lessons = useProgressStore((s) => s.lessons);

  // Find the first available/in-progress lesson in curriculum order as the
  // "one clear next step" — a brand-new student lands on the true Lesson 1.
  const nextLesson = ALL_LESSON_IDS.find((id) => {
    const st = lessons[id]?.state;
    return st === "available" || st === "in-progress";
  });
  // A brand-new learner (no attempts, nothing mastered) sees "Start", not "Continue".
  const hasHistory = Object.values(lessons).some(
    (p) => p.attempts > 0 || p.state === "mastered" || p.state === "in-progress"
  );
  const ctaLabel = hasHistory ? "Continue learning" : "Start learning";

  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col px-4 pb-20 pt-20">
      <header className="text-center">
        <h1 className="display">{SITE_NAME}</h1>
        <p className="body mx-auto mt-4 max-w-xl text-muted">
          The math concepts behind the O Level curriculum — taught intuition-first,
          with interactive visualizations and small adaptive quizzes. Built for students
          2–3 years from their O Levels, and for anyone who wants to actually
          <em> understand</em> the ideas, not just memorize formulas.
          No past papers, no tricks. Just a solid bedrock.
        </p>
      </header>

      <section className="mt-10 text-center">
        {hasHistory && <WarmUpCard />}

        <div className={hasHistory ? "mt-6" : ""}>
          <Link
            href={nextLesson ? `/lesson/${nextLesson}` : `/lesson/${ALL_LESSON_IDS[0]}`}
            className="btn btn-primary"
            data-testid="lesson-cta"
          >
            {ctaLabel}
          </Link>
          <p className="meta mt-3">
            or{" "}
            <Link href="/map" className="text-primary hover:underline">
              view the learning path
            </Link>
          </p>
        </div>
      </section>

      <section className="mt-16 space-y-3 border-t border-token pt-6">
        <p className="body">
          <span className="text-[var(--text)]">How it works</span>
        </p>
        <p className="meta">Explore a scenario · predict before you learn · name the idea yourself.</p>
        <p className="meta">Master a lesson to unlock the next — finish them all to earn a certificate.</p>
        <p className="meta">Free, forever — open to every willing learner.</p>
        <p className="meta mt-4 text-muted">
          In active development — {SITE_NAME} is growing with every learner's feedback. —{" "}
          <Link href="/about" className="text-primary hover:underline">
            See the vision
          </Link>
          {" · "}
          <Link href="/feedback" className="text-primary hover:underline">
            Share feedback
          </Link>
        </p>
      </section>

      <footer className="mt-auto pt-10 text-center meta">
        Built with care by{" "}
        <a href={CREATOR_PORTFOLIO} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
          {CREATOR_NAME}
        </a>
      </footer>
    </main>
  );
}