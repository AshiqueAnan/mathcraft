"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BUILT_LESSON_IDS, BUILT_LESSONS } from "@/content/lessons";
import { useProgressStore } from "@/lib/progress-store";
import { CERTIFICATE_ISSUER, SITE_NAME } from "@/config/site";

const NAME_KEY = "mathcraft-student-name";

export default function CertificatePage() {
  const lessons = useProgressStore((s) => s.lessons);
  const [studentName, setStudentName] = useState("");
  const [savedName, setSavedName] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(NAME_KEY);
    if (stored) {
      setStudentName(stored);
      setSavedName(stored);
    }
  }, []);

  const masteredCount = BUILT_LESSON_IDS.filter((id) => lessons[id]?.state === "mastered").length;
  const total = BUILT_LESSON_IDS.length;
  const complete = masteredCount === total && total > 0;

  function saveName() {
    const name = studentName.trim();
    if (name.length < 2) return;
    localStorage.setItem(NAME_KEY, name);
    setSavedName(name);
  }

  const today = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <main className="mx-auto max-w-3xl px-4 pb-24 pt-12">
      <header className="text-center">
        <h1 className="text-3xl font-bold">Your certificate</h1>
        <p className="mt-2 text-muted">
          Complete every published lesson to earn your certificate from {CERTIFICATE_ISSUER}.
        </p>
      </header>

      {/* Progress */}
      <section className="panel mt-10">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Your progress</h2>
          <span className="chip">
            {masteredCount}/{total} lessons mastered
          </span>
        </div>
        <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-[var(--bg-panel-raised)]">
          <div
            className="h-full rounded-full bg-success transition-all"
            style={{ width: `${total ? (masteredCount / total) * 100 : 0}%` }}
          />
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {BUILT_LESSONS.map((l) => {
            const done = lessons[l.id]?.state === "mastered";
            return (
              <Link
                key={l.id}
                href={done ? "#" : `/lesson/${l.id}`}
                className={`inline-flex h-10 min-w-10 items-center justify-center rounded-xl px-2 text-sm ${
                  done
                    ? "border border-success bg-[rgba(34,197,94,0.12)] text-success"
                    : "border border-token hover:border-primary"
                }`}
                title={l.title}
              >
                {done ? "✓" : l.id.split("-").pop()}
              </Link>
            );
          })}
        </div>
      </section>

      {!complete ? (
        <section className="panel mt-8 text-center">
          <div className="text-4xl">🚧</div>
          <p className="mt-3 text-lg">
            You still have <strong>{total - masteredCount}</strong> lesson
            {total - masteredCount === 1 ? "" : "s"} to master.
          </p>
          <p className="mt-2 text-muted">
            Once every published lesson is mastered, your certificate will be ready here.
          </p>
          <Link href="/map" className="btn btn-primary mt-6">
            Continue learning
          </Link>
        </section>
      ) : (
        <>
          {!savedName ? (
            <section className="panel mt-8 text-center">
              <h2 className="text-xl font-bold">Congratulations! 🎉</h2>
              <p className="mt-2 text-muted">
                You did it — every published lesson is mastered! Before we print your
                certificate, what's the name you'd like on it?
              </p>
              <div className="mx-auto mt-5 flex max-w-md gap-3">
                <input
                  type="text"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && saveName()}
                  placeholder="Your full name"
                  className="w-full rounded-xl border-2 border-token bg-[var(--bg-panel)] p-3 text-lg focus:border-primary focus:outline-none"
                  aria-label="Your name for the certificate"
                />
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={saveName}
                  disabled={studentName.trim().length < 2}
                >
                  Issue my certificate
                </button>
              </div>
            </section>
          ) : (
            <section className="mt-8">
              {/* Certificate */}
              <div
                id="certificate"
                className="rounded-2xl border-4 border-primary/50 bg-[var(--bg-panel-raised)] p-10 text-center"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                  Certificate of Completion
                </p>
                <p className="mt-2 text-muted">{CERTIFICATE_ISSUER}</p>

                <div className="mx-auto mt-8 max-w-md border-y border-token py-8">
                  <p className="text-muted">This certifies that</p>
                  <p className="mt-3 text-3xl font-bold">{savedName}</p>
                  <p className="mt-4 text-muted">
                    has successfully completed the{" "}
                    <strong className="text-[var(--text)]">{SITE_NAME}</strong> curriculum —
                    mastering every published lesson, one solid step at a time.
                  </p>
                </div>

                <p className="mt-6 text-lg">🎉 Congratulations! 🎉</p>
                <p className="mt-1 text-sm text-muted">
                  Keep going — the maths journey doesn't end here.
                </p>
                <p className="mt-8 text-xs text-muted">Issued on {today}</p>
              </div>

              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => window.print()}
                >
                  🖨 Save as PDF
                </button>
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={() => {
                    localStorage.removeItem(NAME_KEY);
                    setStudentName("");
                    setSavedName(null);
                  }}
                >
                  Change name
                </button>
              </div>
            </section>
          )}
        </>
      )}

      <p className="mt-10 text-center text-xs text-muted">
        Certification is honestly earned — it reflects that you completed every lesson and
        passed every quiz on this site. Free, like everything here.
      </p>
    </main>
  );
}