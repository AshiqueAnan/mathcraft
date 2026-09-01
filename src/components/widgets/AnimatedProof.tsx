"use client";

import { useState } from "react";
import { Math as KaTeX } from "@/components/math/Math";

interface AnimatedProofProps {
  /** Which visual proof to stage. */
  proof?: "completing-square" | "difference-squares" | "expansion";
  label?: string;
  /** completing-square: x² + bx = (x + b/2)² − (b/2)² */
  b?: number;
  /** difference-squares side / expansion constants. */
  a?: number;
}

const U = 26; // px per unit

/** AnimatedProof — step-through area-model proofs. */
export function AnimatedProof({ proof = "completing-square", label = "Step through the proof.", b = 6, a = 2 }: AnimatedProofProps) {
  if (proof === "difference-squares") return <DiffSquares a={a} b={b} label={label} />;
  if (proof === "expansion") return <Expansion a={a} b={b} label={label} />;
  return <CompletingSquare b={b} label={label} />;
}

function CompletingSquare({ b, label }: { b: number; label: string }) {
  const [step, setStep] = useState(0);
  const half = b / 2;
  const S = 22; // px per unit
  const sq = 4 * S; // visual side of the x² square
  const halfU = half * S;
  const ox = 20;
  const oy = 20;
  const steps = [
    `Here is ${"x\u00B2"} (blue square) and ${b}x (the tall strip beside it).`,
    `Cut the strip in half: ${b}x = ${half}x + ${half}x.`,
    `Move one ${half}x strip to the bottom — rotate it to fit.`,
    `A ${half}×${half} corner is missing. Fill it and the whole shape becomes (x + ${half})² — but the 9 you filled was never yours, so it must be subtracted back.`,
  ];
  const readouts = [
    `x^2 + ${b}x`,
    `x^2 + ${half}x + ${half}x`,
    `x^2 + ${half}x + ${half}x`,
    `x^2 + ${b}x = (x + ${half})^2 - ${half * half}`,
  ];

  return (
    <div className="widget-surface" aria-label={`Animated proof, completing the square: step ${step + 1} of 4`}>
      <p className="mb-3 text-muted">{label}</p>
      <svg viewBox="0 0 320 230" className="mx-auto w-full max-w-sm" role="img" aria-label={`Area model showing ${steps[step]}`}>
        <rect x={ox} y={oy} width={sq} height={sq} fill="var(--primary)" fillOpacity="0.75" stroke="var(--border)" />
        <text x={ox + sq / 2} y={oy + sq / 2 + 4} textAnchor="middle" fontSize="13" fill="var(--bg)" fontWeight="700">x²</text>
        {step === 0 && (
          <g>
            <rect x={ox + sq} y={oy} width={sq} height={b * S} fill="var(--warn)" fillOpacity="0.75" stroke="var(--border)" />
            <text x={ox + sq + sq / 2} y={oy + (b * S) / 2 + 4} textAnchor="middle" fontSize="12" fill="var(--bg)" fontWeight="700">{b}x</text>
          </g>
        )}
        {step >= 1 && (
          <g>
            <rect x={ox + sq} y={oy} width={sq} height={halfU} fill="var(--warn)" fillOpacity="0.75" stroke="var(--border)" />
            <text x={ox + sq + sq / 2} y={oy + halfU / 2 + 4} textAnchor="middle" fontSize="12" fill="var(--bg)" fontWeight="700">{half}x</text>
            {step === 1 && (
              <rect x={ox + sq} y={oy + halfU} width={sq} height={halfU} fill="var(--warn)" fillOpacity="0.75" stroke="var(--border)" />
            )}
            {step === 1 && (
              <text x={ox + sq + sq / 2} y={oy + halfU * 1.5 + 4} textAnchor="middle" fontSize="12" fill="var(--bg)" fontWeight="700">{half}x</text>
            )}
          </g>
        )}
        {step >= 2 && (
          <g>
            <rect x={ox} y={oy + sq} width={sq} height={halfU} fill="var(--warn)" fillOpacity="0.75" stroke="var(--border)" />
            <text x={ox + sq / 2} y={oy + sq + halfU / 2 + 4} textAnchor="middle" fontSize="12" fill="var(--bg)" fontWeight="700">{half}x</text>
          </g>
        )}
        {step >= 3 && (
          <g>
            <rect x={ox + sq} y={oy + sq} width={halfU} height={halfU} fill="var(--success)" fillOpacity="0.5" stroke="var(--success)" strokeDasharray="4 3" />
            <text x={ox + sq + halfU / 2} y={oy + sq + halfU / 2 + 4} textAnchor="middle" fontSize="12" fill="var(--fg)">{half}²</text>
          </g>
        )}
      </svg>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <button type="button" onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0} className="btn btn-ghost text-xs" aria-label="Previous step">◀ Back</button>
        <button type="button" onClick={() => setStep((s) => Math.min(3, s + 1))} disabled={step === 3} className="btn btn-ghost text-xs" aria-label="Next step">Next step ▶</button>
        <button type="button" onClick={() => setStep(0)} className="btn btn-ghost text-xs" aria-label="Restart the proof">↺ Restart</button>
        <span className="ml-auto flex gap-1" aria-hidden="true">
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className={`h-2 w-2 rounded-full ${i <= step ? "bg-[var(--primary)]" : "bg-[var(--border)]"}`} />
          ))}
        </span>
      </div>
      <p className="mt-3 text-sm">{steps[step]}</p>
      <p className="mt-1 text-center" data-testid="proof-readout">
        <KaTeX tex={readouts[step]} />
      </p>
    </div>
  );
}

function DiffSquares({ a, b, label }: { a: number; b: number; label: string }) {
  const [step, setStep] = useState(0);
  const S = 26;
  const A = a * S;
  const B = b * S;
  const ox = 20;
  const oy = 20;

  return (
    <div className="widget-surface" aria-label={`Animated proof, difference of squares: step ${step + 1} of 3`}>
      <p className="mb-3 text-muted">{label}</p>
      <svg viewBox="0 0 320 190" className="mx-auto w-full max-w-sm" role="img" aria-label={`Area model showing step ${step + 1} of the difference-of-squares proof`}>
        {step <= 1 && (
          <g>
            {step === 0 ? (
              <rect x={ox} y={oy} width={A} height={A} fill="var(--primary)" fillOpacity="0.6" stroke="var(--border)" />
            ) : (
              <g>
                <rect x={ox} y={oy + B} width={A} height={A - B} fill="var(--primary)" fillOpacity="0.6" stroke="var(--border)" />
                <rect x={ox} y={oy} width={A - B} height={B} fill="var(--primary)" fillOpacity="0.6" stroke="var(--border)" />
                <line x1={ox} y1={oy + B} x2={ox + A} y2={oy + B} stroke="var(--fg)" strokeDasharray="4 3" />
                <line x1={ox + A - B} y1={oy} x2={ox + A - B} y2={oy + B} stroke="var(--fg)" strokeDasharray="4 3" />
              </g>
            )}
            <rect x={ox + A - B} y={oy} width={B} height={B} fill="var(--warn)" fillOpacity="0.7" stroke="var(--border)" />
            <text x={ox + A - B / 2} y={oy + B / 2 + 4} textAnchor="middle" fontSize="12" fill="var(--fg)">b²</text>
            <text x={ox + (A - B) / 2} y={oy + B + (A - B) / 2} textAnchor="middle" fontSize="12" fill="var(--fg)">{step === 0 ? `a² = ${a * a}` : "(a−b)(a+b)"}</text>
          </g>
        )}
        {step === 2 && (
          <g>
            <rect x={ox} y={oy + 30} width={(a + b) * S} height={(a - b) * S} fill="var(--primary)" fillOpacity="0.6" stroke="var(--border)" />
            <text x={ox + ((a + b) * S) / 2} y={oy + 30 + ((a - b) * S) / 2 + 4} textAnchor="middle" fontSize="12" fill="var(--fg)">(a − b)(a + b) = {(a - b) * (a + b)}</text>
            <rect x={ox + (a + b) * S + 12} y={oy + 30} width={B} height={B} fill="var(--warn)" fillOpacity="0.7" stroke="var(--border)" />
            <text x={ox + (a + b) * S + 12 + B / 2} y={oy + 30 + B / 2 + 4} textAnchor="middle" fontSize="12" fill="var(--fg)">b²</text>
          </g>
        )}
      </svg>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <button type="button" onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0} className="btn btn-ghost text-xs" aria-label="Previous step">◀ Back</button>
        <button type="button" onClick={() => setStep((s) => Math.min(2, s + 1))} disabled={step === 2} className="btn btn-ghost text-xs" aria-label="Next step">Next step ▶</button>
        <button type="button" onClick={() => setStep(0)} className="btn btn-ghost text-xs" aria-label="Restart the proof">↺ Restart</button>
        <span className="ml-auto flex gap-1" aria-hidden="true">
          {[0, 1, 2].map((i) => (
            <span key={i} className={`h-2 w-2 rounded-full ${i <= step ? "bg-[var(--primary)]" : "bg-[var(--border)]"}`} />
          ))}
        </span>
      </div>
      <p className="mt-3 text-sm">
        {step === 0 && `${a}² − ${b}² is the big square with the b² corner removed (${a * a} − ${b * b} = ${a * a - b * b}).`}
        {step === 1 && "Cut the L-shape into two rectangles and swing the top one around — no area was harmed."}
        {step === 2 && `The pieces form one rectangle, ${a - b} by ${a + b}. So a² − b² = (a − b)(a + b).`}
      </p>
      <p className="mt-1 text-center" data-testid="proof-readout">
        <KaTeX tex="a^2 - b^2 = (a - b)(a + b)" />
      </p>
    </div>
  );
}

function Expansion({ a, b, label }: { a: number; b: number; label: string }) {
  const [step, setStep] = useState(0);
  const S = 26;
  const X = 3 * S;
  const AW = a * S;
  const BW = b * S;
  const ox = 90;
  const oy = 30;

  return (
    <div className="widget-surface" aria-label={`Animated proof, expanding two brackets: step ${step + 1} of 3`}>
      <p className="mb-3 text-muted">{label}</p>
      <svg viewBox="0 0 320 190" className="mx-auto w-full max-w-sm" role="img" aria-label={`Area grid for (x + ${a})(x + ${b})`}>
        <text x={ox + X / 2} y={oy - 6} textAnchor="middle" fontSize="12" fill="var(--muted)">x</text>
        <text x={ox + X + AW / 2} y={oy - 6} textAnchor="middle" fontSize="12" fill="var(--muted)">{a}</text>
        <text x={ox - 12} y={oy + X / 2} textAnchor="middle" fontSize="12" fill="var(--muted)">x</text>
        <text x={ox - 12} y={oy + X + BW / 2} textAnchor="middle" fontSize="12" fill="var(--muted)">{b}</text>
        <rect x={ox} y={oy} width={X} height={X} fill={step >= 1 ? "var(--primary)" : "var(--bg-panel)"} fillOpacity={step >= 1 ? 0.6 : 1} stroke="var(--border)" />
        <text x={ox + X / 2} y={oy + X / 2 + 4} textAnchor="middle" fontSize="12" fill="var(--fg)">x²</text>
        <rect x={ox} y={oy + X} width={X} height={BW} fill={step >= 1 ? "var(--primary)" : "var(--bg-panel)"} fillOpacity={step >= 1 ? 0.45 : 1} stroke="var(--border)" />
        <text x={ox + X / 2} y={oy + X + BW / 2 + 4} textAnchor="middle" fontSize="12" fill="var(--fg)">{b}x</text>
        <rect x={ox + X} y={oy} width={AW} height={X} fill={step >= 2 ? "var(--warn)" : "var(--bg-panel)"} fillOpacity={step >= 2 ? 0.6 : 1} stroke="var(--border)" />
        <text x={ox + X + AW / 2} y={oy + X / 2 + 4} textAnchor="middle" fontSize="12" fill="var(--fg)">{a}x</text>
        <rect x={ox + X} y={oy + X} width={AW} height={BW} fill={step >= 2 ? "var(--warn)" : "var(--bg-panel)"} fillOpacity={step >= 2 ? 0.45 : 1} stroke="var(--border)" />
        <text x={ox + X + AW / 2} y={oy + X + BW / 2 + 4} textAnchor="middle" fontSize="12" fill="var(--fg)">{a * b}</text>
      </svg>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <button type="button" onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0} className="btn btn-ghost text-xs" aria-label="Previous step">◀ Back</button>
        <button type="button" onClick={() => setStep((s) => Math.min(2, s + 1))} disabled={step === 2} className="btn btn-ghost text-xs" aria-label="Next step">Next step ▶</button>
        <button type="button" onClick={() => setStep(0)} className="btn btn-ghost text-xs" aria-label="Restart the proof">↺ Restart</button>
        <span className="ml-auto flex gap-1" aria-hidden="true">
          {[0, 1, 2].map((i) => (
            <span key={i} className={`h-2 w-2 rounded-full ${i <= step ? "bg-[var(--primary)]" : "bg-[var(--border)]"}`} />
          ))}
        </span>
      </div>
      <p className="mt-3 text-sm">
        {step === 0 && `(x + ${a})(x + ${b}) means: fill this rectangle. Its sides are x + ${a} and x + ${b}.`}
        {step === 1 && `The blue row gives x² + ${b}x — multiply the top edge by the left edge, cell by cell.`}
        {step === 2 && `The orange row adds ${a}x + ${a * b}. Collect the x-terms: ${a}x + ${b}x = ${a + b}x.`}
      </p>
      <p className="mt-1 text-center" data-testid="proof-readout">
        <KaTeX tex={`(x + ${a})(x + ${b}) = x^2 + ${a + b}x + ${a * b}`} />
      </p>
    </div>
  );
}


