"use client";

import { useState } from "react";
import { CONTACT_EMAIL, SITE_NAME } from "@/config/site";

const CATEGORIES = [
  { id: "suggestion", label: "💡 Suggestion" },
  { id: "error", label: "🐞 Found an error" },
  { id: "general", label: "💬 General feedback" },
] as const;

export default function FeedbackPage() {
  const [category, setCategory] = useState<string>("suggestion");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function openEmail() {
    const body = encodeURIComponent(`[${category}]\n\n${message}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${SITE_NAME} Feedback&body=${body}`;
    setSubmitted(true);
  }

  return (
    <main className="mx-auto max-w-2xl px-4 pb-24 pt-12">
      <header>
        <h1 className="text-3xl font-bold">Your feedback helps</h1>
        <p className="mt-2 text-muted">
          Found an error, have a suggestion, or just want to share your thoughts? This project
          is built to serve willing learners — every word of feedback makes it better.
        </p>
      </header>

      {submitted ? (
        <div className="panel mt-10 text-center">
          <div className="text-4xl">💌</div>
          <h2 className="mt-3 text-2xl font-bold">Thanks for sharing!</h2>
          <p className="mt-2 text-muted">
            Your email app should have opened with your message ready to send.
            If it didn't, you can write to me directly at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </div>
      ) : (
        <div className="panel mt-10">
          <div className="space-y-2">
            {CATEGORIES.map((c) => (
              <label
                key={c.id}
                className={`block cursor-pointer rounded-xl border-2 p-4 transition-colors ${
                  category === c.id
                    ? "border-primary bg-[var(--bg-panel-raised)]"
                    : "border-token hover:border-primary"
                }`}
              >
                <input
                  type="radio"
                  name="category"
                  value={c.id}
                  checked={category === c.id}
                  onChange={() => setCategory(c.id)}
                  className="sr-only"
                />
                {c.label}
              </label>
            ))}
          </div>

          <label className="mt-6 block">
            <span className="text-sm font-semibold text-muted">Your message</span>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={6}
              placeholder="Tell me what you noticed…"
              className="mt-2 w-full rounded-xl border-2 border-token bg-[var(--bg-panel)] p-4 focus:border-primary focus:outline-none"
            />
          </label>

          <button
            type="button"
            onClick={openEmail}
            disabled={message.trim().length < 5}
            className="btn btn-primary mt-6 w-full disabled:opacity-40"
          >
            Send feedback
          </button>
          <p className="mt-3 text-center text-xs text-muted">
            This opens your email app with the message pre-filled — nothing is sent without you.
          </p>
        </div>
      )}
    </main>
  );
}