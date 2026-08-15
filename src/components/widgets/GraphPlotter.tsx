"use client";

import { useState } from "react";

type Family = "line" | "parabola" | "cubic" | "reciprocal" | "exponential";

interface Props {
  family?: Family;
  initialParams?: Record<string, number>;
}

const FAMILY_LABELS: Record<Family, string> = {
  line: "y = mx + c",
  parabola: "y = a(x−h)² + k",
  cubic: "y = a(x−h)³ + k",
  reciprocal: "y = a/(x−h) + k",
  exponential: "y = a·2ˣ + k",
};

function eq(family: Family, p: Record<string, number>): (x: number) => number {
  switch (family) {
    case "line": return (x) => p.m * x + p.c;
    case "parabola": return (x) => p.a * Math.pow(x - p.h, 2) + p.k;
    case "cubic": return (x) => p.a * Math.pow(x - p.h, 3) + p.k;
    case "reciprocal": return (x) => (Math.abs(x - p.h) < 1e-4 ? NaN : p.a / (x - p.h) + p.k);
    case "exponential": return (x) => p.a * Math.pow(2, x) + p.k;
  }
}

/** GraphPlotter — coordinate plane with live equation from sliders (m,c,a,h,k). */
export function GraphPlotter({ family = "line", initialParams }: Props) {
  const defaults: Record<string, number> = { m: 1, c: 0, a: 1, h: 0, k: 0 };
  const [params, setParams] = useState<Record<string, number>>({ ...defaults, ...initialParams });
  const f = eq(family, params);
  const keys = family === "line" ? ["m", "c"] : ["a", "h", "k"];

  const W = 100, H = 100;
  const points: string[] = [];
  for (let px = 0; px <= W; px += 1) {
    const x = (px / W) * 20 - 10;
    const y = f(x);
    if (!Number.isFinite(y)) continue;
    const py = H - ((y + 10) / 20) * H;
    points.push(`${(px / W) * 300},${py * 3}`);
  }

  return (
    <div className="widget-surface" aria-label={`Graph plotter: ${FAMILY_LABELS[family]}`}>
      <svg viewBox="0 0 300 300" className="mx-auto w-full max-w-xs" role="img" aria-label="Coordinate plane with live graph">
        <rect width="300" height="300" fill="var(--bg-panel-raised)" />
        <line x1="0" y1="150" x2="300" y2="150" stroke="var(--border)" strokeWidth="1" />
        <line x1="150" y1="0" x2="150" y2="300" stroke="var(--border)" strokeWidth="1" />
        <polyline points={points.join(" ")} fill="none" stroke="var(--primary)" strokeWidth="2.5" />
      </svg>

      <div className="mt-3 text-center text-sm">
        <span className="font-mono text-[var(--text)]">
          y = {family === "line" ? `${params.m}x + ${params.c}` : family === "exponential" ? `${params.a}·2ˣ + ${params.k}` : `${params.a}(x − ${params.h})² + ${params.k}`}
        </span>
      </div>

      <div className="mt-3 space-y-2">
        {keys.map((key) => (
          <label key={key} className="flex items-center gap-3 text-sm">
            <span className="w-4 font-mono">{key}</span>
            <input type="range" min={-5} max={5} step={0.1} value={params[key] ?? 0}
              onChange={(e) => setParams((p) => ({ ...p, [key]: Number(e.target.value) }))}
              className="flex-1 accent-[var(--primary)]" aria-label={key} />
            <span className="w-10 text-right font-mono">{(params[key] ?? 0).toFixed(1)}</span>
          </label>
        ))}
      </div>
    </div>
  );
}