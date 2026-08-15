"use client";

/**
 * LiveGraphPlot — read-only mini coordinate plane for graph-interact quiz
 * questions. Plots the function implied by the slider keys in real time so the
 * learner SEES the effect of each change (no more blind slider adjusting).
 * Supports the families used by authored questions:
 *   m,c          → y = m·x + c            (line)
 *   a,b,c        → y = a·x² + b·x + c     (parabola)
 *   a,h,k        → y = a·(x−h)² + k       (vertex parabola)
 *   a,b          → y = a·2^(x) + b        (exponential)
 * Anything else defaults to y = Σ(value·x^degree) using key order.
 */

interface Props {
  params: Record<string, number>;
  keys: string[];
}

function buildFn(params: Record<string, number>, keys: string[]): (x: number) => number {
  const has = (k: string) => k in params;
  if (has("m") && has("c")) {
    return (x) => params.m * x + params.c;
  }
  if (has("a") && has("b") && has("c")) {
    return (x) => params.a * x * x + params.b * x + params.c;
  }
  if (has("a") && has("h") && has("k")) {
    return (x) => params.a * Math.pow(x - params.h, 2) + params.k;
  }
  if (has("a") && has("b")) {
    return (x) => params.a * Math.pow(2, x) + params.b;
  }
  // Generic fallback: polynomial from the key list (key "x2", "x3"… supported).
  return (x) =>
    keys.reduce((sum, key, i) => {
      const degree = key.startsWith("x") ? Number(key.slice(1)) || i : i;
      return sum + (params[key] ?? 0) * Math.pow(x, degree);
    }, 0);
}

export function LiveGraphPlot({ params, keys }: Props) {
  const f = buildFn(params, keys);
  const W = 100;
  const H = 100;
  const points: string[] = [];
  for (let px = 0; px <= W; px += 1) {
    const x = (px / W) * 20 - 10; // x in [-10, 10]
    const y = f(x);
    if (!Number.isFinite(y) || Math.abs(y) > 50) continue;
    const py = H - ((y + 10) / 20) * H;
    points.push(`${(px / W) * 300},${py * 3}`);
  }

  return (
    <svg
      viewBox="0 0 300 300"
      className="mx-auto w-full max-w-xs rounded-[12px]"
      role="img"
      aria-label="Live plot of your current values"
      data-testid="graph-interact-plot"
    >
      <rect width="300" height="300" fill="var(--bg-panel-raised)" rx="12" />
      <line x1="0" y1="150" x2="300" y2="150" stroke="var(--border)" strokeWidth="1" />
      <line x1="150" y1="0" x2="150" y2="300" stroke="var(--border)" strokeWidth="1" />
      <polyline points={points.join(" ")} fill="none" stroke="var(--primary)" strokeWidth="2.5" />
    </svg>
  );
}