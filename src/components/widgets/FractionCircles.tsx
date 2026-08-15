"use client";

import { useState } from "react";
import { Math as KaTeX } from "@/components/math/Math";

interface FractionCirclesProps {
  initialParts?: number;
  initialShaded?: number;
  maxParts?: number;
  label?: string;
}

/** Interactive fraction-circle widget: slider for parts, click sectors to shade. */
export function FractionCircles({
  initialParts = 4,
  initialShaded = 1,
  maxParts = 8,
  label = "Tap slices to shade them.",
}: FractionCirclesProps) {
  const [parts, setParts] = useState(Math.min(initialParts, maxParts));
  const [shaded, setShaded] = useState(() => Math.min(initialShaded, initialParts));

  function sectorPath(index: number, total: number): string {
    const r = 70;
    const cx = 80;
    const cy = 80;
    const startAngle = (index / total) * 2 * Math.PI - Math.PI / 2;
    const endAngle = ((index + 1) / total) * 2 * Math.PI - Math.PI / 2;
    const x1 = cx + r * Math.cos(startAngle);
    const y1 = cy + r * Math.sin(startAngle);
    const x2 = cx + r * Math.cos(endAngle);
    const y2 = cy + r * Math.sin(endAngle);
    const largeArc = total > 2 ? (endAngle - startAngle > Math.PI ? 1 : 0) : 0;
    return `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2} Z`;
  }

  const num = Math.min(shaded, parts);
  const decimal = Number((num / parts).toFixed(3));
  const percent = Number(((num / parts) * 100).toFixed(1));

  return (
    <div
      className="widget-surface"
      aria-label={`Fraction circle: ${num} of ${parts} parts shaded, equal to ${percent}%`}
    >
      <p className="mb-3 text-muted">{label}</p>

      <svg viewBox="0 0 160 160" className="mx-auto h-44 w-44" role="img" aria-label={`Circle split into ${parts} equal sectors with ${shaded} shaded`}>
        {Array.from({ length: parts }, (_, i) => (
          <path
            key={i}
            d={sectorPath(i, parts)}
            fill={i < shaded ? "var(--primary)" : "var(--bg-panel)"}
            stroke="var(--border)"
            strokeWidth={1.5}
            onClick={() => setShaded(i + 1 === shaded ? i : i + 1)}
            className="cursor-pointer transition-colors hover:brightness-125"
          />
        ))}
        <circle cx={80} cy={80} r={70} fill="none" stroke="var(--border)" strokeWidth={2} />
      </svg>

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
            aria-label="Number of equal sectors"
          />
        </label>
        <span className="ml-auto text-lg font-semibold">
          <KaTeX tex={`\\frac{${Math.min(shaded, parts)}}{${parts}}`} />
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
    </div>
  );
}
