"use client";

import { useState } from "react";
import { Math as KaTeX } from "@/components/math/Math";

interface FractionBarsProps {
  initialParts?: number;
  initialShaded?: number;
  maxParts?: number;
  /** When true, user can pick numerator separately (for generating equivalents). */
  allowNumerator?: boolean;
  label?: string;
}

/**
 * Interactive fraction-bar widget.
 * - Slider for the number of equal parts (denominator).
 * - Click cells to toggle shading (numerator).
 * Shows the live fraction label.
 */
export function FractionBars({
  initialParts = 4,
  initialShaded = 1,
  maxParts = 12,
  allowNumerator = true,
  label = "Drag to split the bar.",
}: FractionBarsProps) {
  const [parts, setParts] = useState(Math.min(initialParts, maxParts));
  const [shaded, setShaded] = useState(() => Math.min(initialShaded, initialParts));

  function toggleCell(i: number) {
    setShaded((s) => (s === i + 1 ? i : i + 1));
  }

  const num = Math.min(shaded, parts);
  const fractionTex = `\\frac{${num}}{${parts}}`;
  const decimal = Number((num / parts).toFixed(3));
  const percent = Number(((num / parts) * 100).toFixed(1));

  return (
    <div
      className="widget-surface"
      aria-label={`Fraction bar widget: ${num} of ${parts} parts shaded, equal to ${percent}%`}
    >
      <p className="mb-3 text-muted">{label}</p>

      <div className="flex overflow-hidden rounded-lg border border-token" role="img" aria-label={`Bar split into ${parts} equal parts with ${shaded} shaded`}>
        {Array.from({ length: parts }, (_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => toggleCell(i)}
            aria-label={`Toggle shading of part ${i + 1} of ${parts} (currently ${i < shaded ? "shaded" : "not shaded"})`}
            className="h-14 flex-1 transition-colors hover:brightness-125 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            style={{
              backgroundColor: i < shaded ? "var(--primary)" : "var(--bg-panel)",
              borderRight: i < parts - 1 ? "1px solid var(--border)" : "none",
            }}
          />
        ))}
      </div>

      <div className="mt-3 flex items-center gap-4">
        <label className="flex items-center gap-2 text-sm text-muted">
          Parts: {parts}
          <input
            type="range"
            min={1}
            max={maxParts}
            value={parts}
            onChange={(e) => {
              const p = Number(e.target.value);
              setParts(p);
              setShaded((s) => Math.min(s, p));
            }}
            className="w-32 accent-[var(--primary)]"
            aria-label="Number of equal parts"
          />
        </label>
        <span className="ml-auto text-lg font-semibold">
        <KaTeX tex={fractionTex} />
        </span>
      </div>

      {/* Linked representations — fraction, decimal, percentage stay in sync */}
      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm" data-testid="fraction-readout">
        <span>
          <KaTeX tex={`\\frac{${num}}{${parts}}`} />
        </span>
        <span aria-hidden="true">=</span>
        <span className="font-mono">{decimal}</span>
        <span aria-hidden="true">=</span>
        <span className="font-mono">{percent}%</span>
      </div>

      {allowNumerator && (
        <p className="mt-3 text-sm text-muted">
          Tip: click the shaded cells to change the numerator. Split into more parts to see equivalent
          fractions — <KaTeX tex="\frac{1}{2} = \frac{2}{4} = \frac{3}{6}" />
        </p>
      )}
    </div>
  );
}