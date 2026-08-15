"use client";
import { useState } from "react";

const STEPS = [
  "Place four identical right triangles in a square of side a+b.",
  "The empty space is a square with area c².",
  "Reposition the triangles so the empty space splits into two squares: a² and b².",
  "Same outer square, same triangles, so c² = a² + b². That's Pythagoras.",
];

/** AnimatedProof — step-through (prev/next) Pythagorean rearrangement with captions. */
export function AnimatedProof() {
  const [step, setStep] = useState(0);
  const s = STEPS[step];
  const side = 90;

  return (
    <div className="widget-surface" aria-label="Animated proof of Pythagoras">
      <svg viewBox="0 0 200 110" className="mx-auto w-full max-w-xs" role="img" aria-label={s}>
        {/* Step 1–2: four triangles + c² hole */}
        {step >= 0 && (
          <g>
            <polygon points={`${side},10 ${side + 40},50 ${side},50`} fill="var(--primary)" opacity="0.5" />
            <polygon points={`${side},50 ${side + 40},50 ${side},90`} fill="var(--primary)" opacity="0.5" />
            <polygon points={`${side},50 ${side - 40},50 ${side},90`} fill="var(--primary)" opacity="0.5" />
            <polygon points={`${side},50 ${side - 40},50 ${side},10`} fill="var(--primary)" opacity="0.5" />
          </g>
        )}
        {(step === 1 || step === 3) && (
          <text x="100" y="103" textAnchor="middle" fontSize="12" fill="var(--warn)">c²</text>
        )}
        {/* Step 3–4: a² + b² split */}
        {step >= 2 && (
          <g opacity={step >= 2 ? 1 : 0}>
            <rect x="20" y="10" width="45" height="45" fill="rgba(34,197,94,0.25)" stroke="var(--success)" />
            <rect x="70" y="10" width="110" height="80" fill="rgba(79,124,255,0.15)" stroke="var(--primary)" />
            <text x="42" y="72" textAnchor="middle" fontSize="11" fill="var(--success)">a²</text>
            <text x="125" y="72" textAnchor="middle" fontSize="11" fill="var(--primary)">b²</text>
          </g>
        )}
      </svg>
      <p className="meta mt-2 text-center">{step + 1}. {s}</p>
      <div className="mt-3 flex justify-center gap-3">
        <button type="button" className="btn btn-ghost" disabled={step === 0} onClick={() => setStep((v) => Math.max(0, v - 1))}>← Prev</button>
        <span className="meta self-center">Step {step + 1}/{STEPS.length}</span>
        <button type="button" className="btn btn-ghost" disabled={step === STEPS.length - 1} onClick={() => setStep((v) => Math.min(STEPS.length - 1, v + 1))}>Next →</button>
      </div>
    </div>
  );
}