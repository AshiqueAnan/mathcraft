"use client";

import Link from "next/link";
import {
  SITE_NAME,
  CREATOR_NAME,
  CREATOR_ROLE,
  CREATOR_PORTFOLIO,
  DEDICATION_NAME,
} from "@/config/site";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 pb-24 pt-12">
      <header className="text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">About this project</p>
        <h1 className="mt-3 text-4xl font-bold">Why {SITE_NAME} exists</h1>
      </header>

      {/* Dedication */}
      <section className="mt-10 rounded-2xl border border-token bg-[var(--bg-panel-raised)] p-6">
        <p className="text-3xl">💙</p>
        <h2 className="mt-2 text-2xl font-bold">Made for {DEDICATION_NAME}</h2>
        <p className="mt-3 leading-relaxed">
          This website started with one very personal goal: to help my cousin,{" "}
          <strong>{DEDICATION_NAME}</strong>, who was struggling with maths. I wanted him to
          actually <em>understand</em> the ideas behind the numbers — not just memorize
          formulas — and to feel that maths is something he could master, one small step at a
          time.
        </p>
        <p className="mt-3 leading-relaxed">
          Every lesson here was written with him in mind: simple language, a real "why" behind
          every rule, interactive visuals to play with, and gentle quizzes that treat mistakes
          as part of learning. If it works for him, it can work for anyone.
        </p>
      </section>

      {/* Community service */}
      <section className="mt-8 rounded-2xl border border-token p-6">
        <h2 className="text-2xl font-bold">For every child who wants to do better</h2>
        <p className="mt-3 leading-relaxed">
          Although it began for {DEDICATION_NAME}, I believe every child who is willing to learn
          deserves the same chance. So this site is a <strong>free community service</strong> —
          open to any student, anywhere, with no paywalls and no hidden costs. Just honest,
          patient, foundation-first teaching.
        </p>
        <p className="mt-3 leading-relaxed">
          And if this small project helps even one more student feel confident walking into a
          maths classroom, it was worth every minute of building it.
        </p>
      </section>

      {/* The evolution */}
      <section className="mt-8 rounded-2xl border border-token p-6">
        <h2 className="text-2xl font-bold">This site will keep evolving</h2>
        <p className="mt-3 leading-relaxed">
          {SITE_NAME} is not a finished product — it is a living project. It will go through
          several evolutions, each one shaped by the learners who use it, the feedback they
          share, and the way my vision for it grows.
        </p>
        <p className="mt-3 leading-relaxed">
          I want it to be <strong>adaptive</strong> in the truest sense: to students who need a
          different path, to subjects beyond maths if this foundation works, and to the lessons
          this community tells me are missing. Every wrong answer, every suggestion, every
          "this could be explained better" is a signal — and this site will keep changing to act
          on them.
        </p>
        <p className="mt-3 leading-relaxed">
          If something feels unfinished, that's not a mistake — it's an open door to make it
          better.{" "}
          <Link href="/feedback" className="text-primary hover:underline">
            Tell me how
          </Link>
          .
        </p>
      </section>

      {/* Creator */}
      <section className="mt-10 border-t border-token pt-8 text-center">
        <p className="text-muted">Created & developed with ❤️ by</p>
        <h2 className="mt-2 text-2xl font-bold">{CREATOR_NAME}</h2>
        <p className="mt-1 text-sm text-muted">{CREATOR_ROLE}</p>
        <a
          href={CREATOR_PORTFOLIO}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary mt-5"
        >
          View my portfolio
        </a>
      </section>
    </main>
  );
}