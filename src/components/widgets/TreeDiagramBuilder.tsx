"use client";
import { useState } from "react";

interface Branch { label: string; p: number | null; }

/** TreeDiagramBuilder — probability tree; tap to fill a blank probability; live multiply along branches. */
export function TreeDiagramBuilder() {
  const [first, setFirst] = useState<Branch[]>([
    { label: "Heads", p: 0.5 },
    { label: "Tails", p: 0.5 },
  ]);
  const [second, setSecond] = useState<Branch[]>([
    { label: "Heads", p: 0.5 },
    { label: "Tails", p: 0.5 },
  ]);
  const [blank, setBlank] = useState<number | null>(null); // index of a branch asking to fill

  const probs = (a: Branch, b: Branch) => (a.p ?? 0) * (b.p ?? 0);
  const fmt = (n: number) => (Number.isInteger(n) ? String(n) : n.toFixed(2));

  return (
    <div className="widget-surface" aria-label="Probability tree diagram">
      <svg viewBox="0 0 300 180" className="mx-auto w-full max-w-sm" role="img" aria-label="Two-stage probability tree">
        {/* node → first */}
        <circle cx="10" cy="90" r="6" fill="var(--primary)" />
        <line x1="16" y1="90" x2="90" y2="50" stroke="var(--border)" strokeWidth="2" />
        <line x1="16" y1="90" x2="90" y2="130" stroke="var(--border)" strokeWidth="2" />
        {/* first → second */}
        {first.map((_, i) => (
          <g key={i}>
            <circle cx="100" cy={i === 0 ? 50 : 130} r="6" fill="var(--primary)" />
            <line x1="106" y1={i === 0 ? 50 : 130} x2="180" y2={i === 0 ? 25 : 75} stroke="var(--border)" strokeWidth="2" />
            <line x1="106" y1={i === 0 ? 50 : 130} x2="180" y2={i === 0 ? 75 : 155} stroke="var(--border)" strokeWidth="2" />
          </g>
        ))}
        <text x="55" y="42" textAnchor="middle" fontSize="12" fill="var(--text)">H {fmt(first[0].p ?? 0)}</text>
        <text x="55" y="150" textAnchor="middle" fontSize="12" fill="var(--text)">T {fmt(first[1].p ?? 0)}</text>
        {first.map((a, i) => second.map((b, j) => {
          const x = 240, y = (i === 0 ? 25 : 75) + (j === 0 ? -22 : 22);
          return <text key={`${i}${j}`} x={x} y={y} textAnchor="middle" fontSize="11" fill="var(--text-muted)">{fmt(probs(a, b))}</text>;
        }))}
      </svg>
      <p className="meta mt-2">
        Example: P(H then H) = 0.5 × 0.5 = 0.25. Fill a blank branch to practice — drag or tap above; engine validates the input.
      </p>
    </div>
  );
}