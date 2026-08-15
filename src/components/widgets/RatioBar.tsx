"use client";

import { useState } from "react";

interface Props {
  parts?: [number, number];
  initialPart?: 0 | 1;
}

/** RatioBar — two-part bar that repartitions as a ratio slider moves. */
export function RatioBar({ parts = [1, 2], initialPart = 0 }: Props) {
  const [a, setA] = useState(parts[0]);
  const [b, setB] = useState(parts[1]);
  const total = a + b || 1;
  const aPct = (a / total) * 100;

  return (
    <div className="widget-surface" aria-label={`Ratio bar: ${a} : ${b}`}>
      <div className="flex h-12 overflow-hidden rounded-[12px] border border-token">
        <button
          type="button"
          className="h-full transition-colors hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]"
          style={{ width: `${aPct}%`, backgroundColor: "var(--primary)" }}
          aria-label={`Part A: ${a}`}
          onClick={() => setA((v) => v + 1)}
        />
        <button
          type="button"
          className="h-full transition-colors hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]"
          style={{ width: `${100 - aPct}%`, backgroundColor: "var(--bg-panel-raised)" }}
          aria-label={`Part B: ${b}`}
          onClick={() => setB((v) => v + 1)}
        />
      </div>

      <div className="mt-3 flex items-center justify-between text-sm">
        <span className="text-muted">Ratio: {a} : {b}</span>
        <span className="text-muted">A = {Math.round(aPct)}%</span>
      </div>

      <div className="mt-2 flex gap-2">
        <label className="flex flex-1 items-center gap-2 text-xs text-muted">
          A
          <input type="range" min={0} max={10} step={1} value={a} onChange={(e) => setA(Number(e.target.value))} className="flex-1 accent-[var(--primary)]" aria-label="Part A value" />
        </label>
        <label className="flex flex-1 items-center gap-2 text-xs text-muted">
          B
          <input type="range" min={0} max={10} step={1} value={b} onChange={(e) => setB(Number(e.target.value))} className="flex-1 accent-[var(--primary)]" aria-label="Part B value" />
        </label>
      </div>
    </div>
  );
}