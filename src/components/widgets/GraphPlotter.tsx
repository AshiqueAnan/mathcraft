"use client";

import { memo, useDeferredValue, useState } from "react";
import { Math as KaTeX } from "@/components/math/Math";

interface GraphPlotterProps {
  mode?: "linear" | "quadratic";
  label?: string;
  /** linear mode: y = mx + c */
  m?: number;
  c?: number;
  /** quadratic mode: y = a(x − h)² + k */
  a?: number;
  h?: number;
  k?: number;
}

const GW = 340;
const GH = 260;
const X0 = GW / 2;
const Y0 = GH / 2;
const SC = 20; // px per unit

function sx(x: number): number {
  return X0 + x * SC;
}
function sy(y: number): number {
  return Y0 - y * SC;
}

const Grid = memo(function Grid() {
  const xTicks = Array.from({ length: 17 }, (_, i) => i - 8);
  const yTicks = Array.from({ length: 13 }, (_, i) => i - 6);
  return (
    <g aria-hidden="true">
      {xTicks.map((t) => (
        <line key={`vx${t}`} x1={sx(t)} y1={0} x2={sx(t)} y2={GH} stroke="var(--border)" strokeWidth={t === 0 ? 1.5 : 0.5} opacity={t === 0 ? 1 : 0.4} />
      ))}
      {yTicks.map((t) => (
        <line key={`hy${t}`} x1={0} y1={sy(t)} x2={GW} y2={sy(t)} stroke="var(--border)" strokeWidth={t === 0 ? 1.5 : 0.5} opacity={t === 0 ? 1 : 0.4} />
      ))}
      {xTicks.filter((t) => t % 2 === 0 && t !== 0).map((t) => (
        <text key={`tx${t}`} x={sx(t)} y={Y0 + 12} textAnchor="middle" fontSize="8" fill="var(--text-muted)">{t}</text>
      ))}
      {yTicks.filter((t) => t % 2 === 0 && t !== 0).map((t) => (
        <text key={`ty${t}`} x={X0 + 5} y={sy(t) + 3} fontSize="8" fill="var(--text-muted)">{t}</text>
      ))}
    </g>
  );
});

/** Interactive graph plotter for straight lines and quadratics. */
export function GraphPlotter({ mode = "linear", label = "Drag the sliders — watch the graph answer.", m = 2, c = 1, a = 1, h = 0, k = 0 }: GraphPlotterProps) {
  if (mode === "quadratic") return <QuadraticMode a={a} h={h} k={k} label={label} />;
  return <LinearMode m={m} c={c} label={label} />;
}

function LinearMode({ m, c, label }: { m: number; c: number; label: string }) {
  const [slope, setSlope] = useState(m);
  const [intercept, setIntercept] = useState(c);
  const [showTri, setShowTri] = useState(true);
  // Readout trails the sliders by a frame so KaTeX typesetting never blocks a drag.
  const dSlope = useDeferredValue(slope);
  const dIntercept = useDeferredValue(intercept);
  const dRoot = dSlope === 0 ? null : -dIntercept / dSlope;
  const y = (x: number) => slope * x + intercept;
  const root = slope === 0 ? null : -intercept / slope;
  const pts: string[] = [];
  for (let x = -8; x <= 8.001; x += 0.2) {
    const yy = y(x);
    if (yy >= -6.2 && yy <= 6.2) pts.push(`${sx(x)},${sy(yy)}`);
  }
  const triX = 2;
  const triOk = showTri && y(triX) >= -6 && y(triX) <= 6 && y(triX + 1) >= -6 && y(triX + 1) <= 6;
  const fmtC = (v: number) => (Number.isInteger(v) ? String(v) : String(Number(v.toFixed(2))));

  return (
    <div className="widget-surface" aria-label={`Graph of y equals ${fmtC(slope)} x plus ${fmtC(intercept)} with y-intercept ${fmtC(intercept)}${root !== null ? ` and x-intercept ${fmtC(Number(root.toFixed(2)))}` : ""}`}>
      <p className="mb-3 text-muted">{label}</p>
      <svg viewBox={`0 0 ${GW} ${GH}`} className="mx-auto w-full max-w-md" role="img" aria-label="Coordinate grid with a plotted straight line">
        <Grid />
        {pts.length > 1 && <polyline points={pts.join(" ")} fill="none" stroke="var(--primary)" strokeWidth="2.5" />}
        {triOk && (
          <g aria-hidden="true">
            <path d={`M ${sx(triX)} ${sy(y(triX))} L ${sx(triX + 1)} ${sy(y(triX))} L ${sx(triX + 1)} ${sy(y(triX + 1))}`} fill="none" stroke="var(--warn)" strokeWidth="1.5" strokeDasharray="4 3" />
            <text x={sx(triX + 0.5)} y={sy(y(triX)) - 4} textAnchor="middle" fontSize="9" fill="var(--warn)">run 1</text>
            <text x={sx(triX + 1) + 6} y={sy(y(triX) + slope / 2)} fontSize="9" fill="var(--warn)">rise {fmtC(slope)}</text>
          </g>
        )}
        <circle cx={sx(0)} cy={sy(intercept)} r="4" fill="var(--success)" aria-hidden="true" />
        {root !== null && root >= -8 && root <= 8 && <circle cx={sx(root)} cy={sy(0)} r="4" fill="var(--warn)" aria-hidden="true" />}
      </svg>
      <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-muted">
        <label className="flex items-center gap-2">
          Slope m: <strong className="font-mono">{fmtC(slope)}</strong>
          <input type="range" min={-4} max={4} step={0.5} value={slope} onChange={(e) => setSlope(Number(e.target.value))} className="w-24 accent-[var(--primary)]" aria-label="Slope of the line" />
        </label>
        <label className="flex items-center gap-2">
          Intercept c: <strong className="font-mono">{fmtC(intercept)}</strong>
          <input type="range" min={-6} max={6} step={1} value={intercept} onChange={(e) => setIntercept(Number(e.target.value))} className="w-24 accent-[var(--primary)]" aria-label="y-intercept of the line" />
        </label>
        <button type="button" onClick={() => setShowTri((v) => !v)} className="btn btn-ghost text-xs" aria-label="Toggle the slope triangle">slope triangle</button>
      </div>
      <p className="mt-3 text-center text-sm" data-testid="graph-readout">
        <KaTeX tex={`y = ${fmtC(dSlope)}x ${dIntercept < 0 ? "-" : "+"} ${fmtC(Math.abs(dIntercept))}`} /> <span className="text-muted">— green dot: y-intercept (0, {fmtC(dIntercept)}){dRoot !== null ? `, orange dot: x-intercept (${fmtC(Number(dRoot.toFixed(2)))}, 0)` : ""}</span>
      </p>
      <p className="meta mt-2">m is the steepness (up m for every 1 across — see the triangle); c is where the line crosses the y-axis.</p>
    </div>
  );
}

function QuadraticMode({ a, h, k, label }: { a: number; h: number; k: number; label: string }) {
  const [A, setA] = useState(a);
  const [H, setH] = useState(h);
  const [K, setK] = useState(k);
  // Readout trails the sliders by a frame so KaTeX typesetting never blocks a drag.
  const dA = useDeferredValue(A);
  const dH = useDeferredValue(H);
  const dK = useDeferredValue(K);
  const dDisc = -dK / dA;
  const dRoots = dA !== 0 && dDisc >= 0 ? [dH - Math.sqrt(dDisc), dH + Math.sqrt(dDisc)] : [];
  const y = (x: number) => A * (x - H) * (x - H) + K;
  const pts: string[] = [];
  for (let x = -8; x <= 8.001; x += 0.1) {
    const yy = y(x);
    if (yy >= -6.2 && yy <= 6.2) pts.push(`${sx(x)},${sy(yy)}`);
  }
  const disc = -K / A;
  const roots = A !== 0 && disc >= 0 ? [H - Math.sqrt(disc), H + Math.sqrt(disc)] : [];
  const fmtC = (v: number) => (Number.isInteger(v) ? String(v) : String(Number(v.toFixed(2))));

  return (
    <div className="widget-surface" aria-label={`Graph of y equals ${fmtC(A)} times x minus ${fmtC(H)} squared plus ${fmtC(K)}, vertex at (${fmtC(H)}, ${fmtC(K)})`}>
      <p className="mb-3 text-muted">{label}</p>
      <svg viewBox={`0 0 ${GW} ${GH}`} className="mx-auto w-full max-w-md" role="img" aria-label="Coordinate grid with a plotted parabola">
        <Grid />
        {pts.length > 1 && <polyline points={pts.join(" ")} fill="none" stroke="var(--primary)" strokeWidth="2.5" />}
        {Math.abs(H) <= 8 && Math.abs(K) <= 6 && (
          <g aria-hidden="true">
            <line x1={sx(H)} y1={0} x2={sx(H)} y2={GH} stroke="var(--muted)" strokeDasharray="4 4" opacity="0.6" />
            <circle cx={sx(H)} cy={sy(K)} r="5" fill="var(--success)" />
          </g>
        )}
        {roots.map((r) => (
          <circle key={r} cx={sx(r)} cy={sy(0)} r="4" fill="var(--warn)" aria-hidden="true" />
        ))}
      </svg>
      <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-muted">
        <label className="flex items-center gap-2">
          a: <strong className="font-mono">{fmtC(A)}</strong>
          <input type="range" min={-2} max={2} step={0.25} value={A} onChange={(e) => setA(Number(e.target.value))} className="w-20 accent-[var(--primary)]" aria-label="Quadratic stretch a" />
        </label>
        <label className="flex items-center gap-2">
          h: <strong className="font-mono">{fmtC(H)}</strong>
          <input type="range" min={-4} max={4} step={0.5} value={H} onChange={(e) => setH(Number(e.target.value))} className="w-20 accent-[var(--primary)]" aria-label="Vertex x position h" />
        </label>
        <label className="flex items-center gap-2">
          k: <strong className="font-mono">{fmtC(K)}</strong>
          <input type="range" min={-5} max={5} step={0.5} value={K} onChange={(e) => setK(Number(e.target.value))} className="w-20 accent-[var(--primary)]" aria-label="Vertex y position k" />
        </label>
      </div>
      <p className="mt-3 text-center text-sm" data-testid="graph-readout">
        <KaTeX tex={dA === 0 ? `y = ${fmtC(dK)}` : `y = ${fmtC(dA)}(x - ${fmtC(dH)})^2 ${dK < 0 ? "-" : "+"} ${fmtC(Math.abs(dK))}`} />{" "}
        <span className="text-muted">
          {dA === 0
            ? "— a = 0 flattens the bowl into the horizontal line y = k"
            : `— vertex (${fmtC(dH)}, ${fmtC(dK)})${dRoots.length === 2 ? `, roots x = ${dRoots.map((r) => fmtC(Number(r.toFixed(2)))).join(" and ")}` : dRoots.length === 0 ? ", no real roots (never touches the x-axis)" : ""}`}
        </span>
      </p>
      <p className="meta mt-2">a flips the bowl and stretches it (a = 0 flattens it); h slides it across; k slides it up or down. The vertex is the turning point.</p>
    </div>
  );
}


