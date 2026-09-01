"use client";

import { useState } from "react";
import { Math as KaTeX } from "@/components/math/Math";

interface GeometryPlaygroundProps {
  mode?: "pythagoras" | "trig" | "enlargement" | "circle-rearrange";
  label?: string;
  /** pythagoras: initial legs */
  legA?: number;
  legB?: number;
  /** trig: fixed hypotenuse and initial angle in degrees */
  hyp?: number;
  angle?: number;
  /** enlargement: initial scale factor */
  scale?: number;
}

/** GeometryPlayground — draggable/slideable geometry mini-labs. */
export function GeometryPlayground({ mode = "pythagoras", label = "Drag and discover.", legA = 3, legB = 4, hyp = 5, angle = 35, scale = 2 }: GeometryPlaygroundProps) {
  if (mode === "trig") return <TrigMode hyp={hyp} angle={angle} label={label} />;
  if (mode === "enlargement") return <EnlargementMode scale={scale} label={label} />;
  if (mode === "circle-rearrange") return <CircleRearrange label={label} />;
  return <PythagorasMode legA={legA} legB={legB} label={label} />;
}

function PythagorasMode({ legA, legB, label }: { legA: number; legB: number; label: string }) {
  const [a, setA] = useState(legA);
  const [b, setB] = useState(legB);
  const S = 24;
  const c = Math.sqrt(a * a + b * b);
  const wpx = a * S;
  const hpx = b * S;
  const ox = 40;
  const oy = 190;
  const P1 = { x: ox + wpx, y: oy };
  const P2 = { x: ox, y: oy - hpx };
  const off = { x: hpx, y: -wpx };
  const P3 = { x: P2.x + off.x, y: P2.y + off.y };
  const P4 = { x: P1.x + off.x, y: P1.y + off.y };
  const midH = { x: (P1.x + P2.x) / 2, y: (P1.y + P2.y) / 2 };
  const cLen = Math.hypot(wpx, hpx);
  // The b-square sticks out left of the origin and the c-square up to the right —
  // size the window to the drawing so nothing is clipped at any leg length.
  const vx = Math.min(ox - hpx, ox) - 46;
  const vy = Math.min(P3.y, oy - hpx) - 16;
  const vw = Math.max(P4.x, ox + wpx, ox) - vx + 34;
  const vh = Math.max(oy + wpx, oy) - vy + 26;
  const fmtC = (v: number) => (Number.isInteger(v) ? String(v) : String(Number(v.toFixed(3))));

  return (
    <div className="widget-surface" aria-label={`Right triangle with legs ${a} and ${b}; squares of areas ${a * a}, ${b * b} and ${fmtC(Number(c.toFixed(3)))} squared`}>
      <p className="mb-3 text-muted">{label}</p>
      <svg viewBox={`${vx} ${vy} ${vw} ${vh}`} className="mx-auto w-full max-w-sm" role="img" aria-label={`Right triangle with legs ${a} and ${b}, plus a square built on each side`}>
        <polygon points={`${P1.x},${P1.y} ${P2.x},${P2.y} ${P3.x},${P3.y} ${P4.x},${P4.y}`} fill="var(--success)" fillOpacity="0.25" stroke="var(--success)" strokeWidth="1.5" />
        <rect x={ox} y={oy} width={wpx} height={wpx} fill="var(--primary)" fillOpacity="0.3" stroke="var(--primary)" />
        <rect x={ox - hpx} y={oy - hpx} width={hpx} height={hpx} fill="var(--warn)" fillOpacity="0.3" stroke="var(--warn)" />
        <polygon points={`${ox},${oy} ${P1.x},${P1.y} ${P2.x},${P2.y}`} fill="var(--bg-panel)" stroke="var(--fg)" strokeWidth="2" />
        <rect x={ox} y={oy - 6} width="12" height="12" fill="none" stroke="var(--fg)" strokeWidth="1" aria-hidden="true" />
        <text x={ox + wpx / 2} y={oy + wpx / 2} textAnchor="middle" fontSize="13" fill="var(--fg)">a² = {a * a}</text>
        <text x={ox - hpx / 2} y={oy - hpx / 2} textAnchor="middle" fontSize="13" fill="var(--fg)">b² = {b * b}</text>
        <text x={(P1.x + P3.x) / 2 + 14} y={(P1.y + P3.y) / 2} textAnchor="middle" fontSize="12" fill="var(--fg)">c² = {fmtC(Number((c * c).toFixed(3)))}</text>
        <text x={ox + wpx / 2} y={oy + wpx + 22} textAnchor="middle" fontSize="11" fill="var(--muted)">a = {a}</text>
        <text x={ox - hpx - 16} y={oy - hpx / 2} textAnchor="middle" fontSize="11" fill="var(--muted)">b = {b}</text>
        <text x={midH.x + (hpx / cLen) * 16} y={midH.y - (wpx / cLen) * 16 + 4} textAnchor="middle" fontSize="11" fill="var(--muted)">c = {fmtC(Number(c.toFixed(3)))}</text>
      </svg>
      <div className="mt-3 flex flex-wrap items-center justify-center gap-4 text-sm text-muted">
        <label className="flex items-center gap-2">
          a: <strong className="font-mono">{a}</strong>
          <input type="range" min={1} max={6} step={1} value={a} onChange={(e) => setA(Number(e.target.value))} className="w-24 accent-[var(--primary)]" aria-label="Leg a length" />
        </label>
        <label className="flex items-center gap-2">
          b: <strong className="font-mono">{b}</strong>
          <input type="range" min={1} max={6} step={1} value={b} onChange={(e) => setB(Number(e.target.value))} className="w-24 accent-[var(--warn)]" aria-label="Leg b length" />
        </label>
      </div>
      <p className="mt-3 text-center text-sm" data-testid="pythag-readout">
        <KaTeX tex={`${a}^2 + ${b}^2 = ${a * a + b * b} \\;\\Rightarrow\\; c^2 = ${a * a + b * b} \\;\\Rightarrow\\; c = \\sqrt{${a * a + b * b}} \\approx ${fmtC(Number(c.toFixed(3)))}`} />
      </p>
      <p className="meta mt-2">The tilted square on the hypotenuse balances exactly the two leg squares — that is the whole theorem, drawn rather than said.</p>
    </div>
  );
}

function TrigMode({ hyp, angle, label }: { hyp: number; angle: number; label: string }) {
  const [deg, setDeg] = useState(angle);
  const [H, setH] = useState(hyp);
  const rad = (deg * Math.PI) / 180;
  const opp = H * Math.sin(rad);
  const adj = H * Math.cos(rad);
  const S = 34;
  const ox = 50;
  const oy = 190;
  const wpx = adj * S;
  const hpx = opp * S;
  // Tall triangles (large H and θ) poke above the old fixed window — grow it upward.
  const vy = Math.min(oy - hpx - 14, 0);
  const fmtC = (v: number) => (Number.isInteger(v) ? String(v) : String(Number(v.toFixed(3))));

  return (
    <div className="widget-surface" aria-label={`Right triangle with angle ${deg} degrees and hypotenuse ${H}: opposite ${fmtC(opp)}, adjacent ${fmtC(adj)}`}>
      <p className="mb-3 text-muted">{label}</p>
      <svg viewBox={`0 ${vy} 340 ${230 - vy}`} className="mx-auto w-full max-w-sm" role="img" aria-label={`Right triangle labelled with opposite ${fmtC(opp)}, adjacent ${fmtC(adj)}, hypotenuse ${H}`}>
        <polygon points={`${ox},${oy} ${ox + wpx},${oy} ${ox},${oy - hpx}`} fill="var(--bg-panel)" stroke="var(--fg)" strokeWidth="2" />
        <rect x={ox} y={oy - 8} width="10" height="10" fill="none" stroke="var(--fg)" strokeWidth="1" aria-hidden="true" />
        <path d={`M ${ox + 30} ${oy} A 30 30 0 0 0 ${ox + 30 * Math.cos(rad)} ${oy - 30 * Math.sin(rad)}`} fill="none" stroke="var(--warn)" strokeWidth="1.5" />
        <text x={ox + 42} y={oy - 8} fontSize="12" fill="var(--warn)">θ = {deg}°</text>
        <text x={ox + wpx / 2} y={oy + 16} textAnchor="middle" fontSize="12" fill="var(--primary)">adjacent = {fmtC(adj)}</text>
        <text x={ox - 10} y={oy - hpx / 2} textAnchor="middle" fontSize="12" fill="var(--success)" transform={`rotate(-90 ${ox - 10} ${oy - hpx / 2})`}>opposite = {fmtC(opp)}</text>
        <text x={(ox + wpx) / 2 + 26} y={(oy - hpx) / 2 + 40} textAnchor="middle" fontSize="12" fill="var(--muted)">hypotenuse = {H}</text>
      </svg>
      <div className="mt-3 flex flex-wrap items-center justify-center gap-4 text-sm text-muted">
        <label className="flex items-center gap-2">
          θ: <strong className="font-mono">{deg}°</strong>
          <input type="range" min={10} max={80} step={1} value={deg} onChange={(e) => setDeg(Number(e.target.value))} className="w-28 accent-[var(--primary)]" aria-label="Angle theta in degrees" />
        </label>
        <label className="flex items-center gap-2">
          hypotenuse: <strong className="font-mono">{H}</strong>
          <input type="range" min={2} max={6} step={0.5} value={H} onChange={(e) => setH(Number(e.target.value))} className="w-20 accent-[var(--primary)]" aria-label="Hypotenuse length" />
        </label>
      </div>
      <p className="mt-3 text-center text-sm" data-testid="trig-readout">
        <KaTeX tex={`\\sin\\theta = \\frac{${fmtC(opp)}}{${H}} \\approx ${fmtC(Number(Math.sin(rad).toFixed(3)))} \\quad \\cos\\theta = \\frac{${fmtC(adj)}}{${H}} \\approx ${fmtC(Number(Math.cos(rad).toFixed(3)))} \\quad \\tan\\theta = \\frac{${fmtC(opp)}}{${fmtC(adj)}} \\approx ${fmtC(Number(Math.tan(rad).toFixed(3)))}`} />
      </p>
      <p className="meta mt-2">SOH CAH TOA: Sin = Opposite/Hypotenuse, Cos = Adjacent/Hypotenuse, Tan = Opposite/Adjacent. Slide θ and watch which ratio runs away.</p>
    </div>
  );
}

function EnlargementMode({ scale, label }: { scale: number; label: string }) {
  const [k, setK] = useState(scale);
  const obj = "M 40 170 L 40 110 L 70 80 L 100 110 L 100 170 Z"; // little house
  const ox = 40;
  const oy = 170;
  const img = `M ${ox} ${oy} L ${ox} ${oy - 60 * k} L ${ox + 30 * k} ${oy - 90 * k} L ${ox + 60 * k} ${oy - 60 * k} L ${ox + 60 * k} ${oy} Z`;
  // k ≥ 2 pushes the image above the old fixed window — fit the viewBox to the drawing.
  const vx = ox - 26;
  const vy = Math.min(80, oy - 90 * k) - 14;
  const vw = Math.max(ox + 60 * k, 100) - vx + 20;
  const vh = Math.max(oy, 170) + 26 - vy;
  const areaObj = 60 * 60 + (60 * 30) / 2;
  const fmtC = (v: number) => (Number.isInteger(v) ? String(v) : String(Number(v.toFixed(2))));

  return (
    <div className="widget-surface" aria-label={`Enlargement with scale factor ${k}: every length times ${k}, area times ${fmtC(k * k)}`}>
      <p className="mb-3 text-muted">{label}</p>
      <svg viewBox={`${vx} ${vy} ${vw} ${vh}`} className="mx-auto w-full max-w-sm" role="img" aria-label={`A small house shape with its enlarged image, scale factor ${k}, sharing centre point O`}>
        <circle cx={ox} cy={oy} r="4" fill="var(--fg)" />
        <text x={ox - 14} y={oy + 16} fontSize="11" fill="var(--muted)">O</text>
        <line x1={ox} y1={oy} x2={ox + 60 * k} y2={oy - 90 * k} stroke="var(--muted)" strokeDasharray="3 4" opacity="0.6" aria-hidden="true" />
        <path d={obj} fill="var(--primary)" fillOpacity="0.35" stroke="var(--primary)" strokeWidth="2" />
        <path d={img} fill="none" stroke="var(--warn)" strokeWidth="2" strokeDasharray="5 3" />
      </svg>
      <label className="mt-3 flex items-center justify-center gap-2 text-sm text-muted">
        Scale factor k: <strong className="font-mono">{fmtC(k)}</strong>
        <input type="range" min={0.5} max={3} step={0.5} value={k} onChange={(e) => setK(Number(e.target.value))} className="w-40 accent-[var(--warn)]" aria-label="Scale factor" />
      </label>
      <p className="mt-3 text-center text-sm" data-testid="enlarge-readout">
        lengths × {fmtC(k)} · area × <strong>{fmtC(k * k)}</strong> ({areaObj} → {fmtC(areaObj * k * k)})
      </p>
      <p className="meta mt-2">Enlarging from centre O shoots every vertex along a ray from O. Lengths scale by k, but area scales by k² — the trap that catches everyone.</p>
    </div>
  );
}

function CircleRearrange({ label }: { label: string }) {
  const [n, setN] = useState(12);
  const [t, setT] = useState(0);
  const R = 58;
  const cx = 96;
  const cy = 132;
  const yB = 196;
  const startX = 76;
  const alpha = (2 * Math.PI) / n;
  const base = 2 * R * Math.sin(alpha / 2);
  const polys: string[] = [];
  for (let i = 0; i < n; i++) {
    const a1 = -Math.PI / 2 + i * alpha;
    const a2 = -Math.PI / 2 + (i + 1) * alpha;
    const cV = { x: cx, y: cy };
    const p1 = { x: cx + R * Math.cos(a1), y: cy + R * Math.sin(a1) };
    const p2 = { x: cx + R * Math.cos(a2), y: cy + R * Math.sin(a2) };
    const even = i % 2 === 0;
    const xk = startX + i * (base / 2);
    const row: { x: number; y: number }[] = even
      ? [
          { x: xk + base / 2, y: yB - R },
          { x: xk, y: yB },
          { x: xk + base, y: yB },
        ]
      : [
          { x: xk + base / 2, y: yB },
          { x: xk, y: yB - R },
          { x: xk + base, y: yB - R },
        ];
    const src = [cV, p1, p2];
    polys.push(src.map((v, j) => `${v.x + (row[j].x - v.x) * t},${v.y + (row[j].y - v.y) * t}`).join(" "));
  }

  return (
    <div className="widget-surface" aria-label={`Circle rearranged into a parallelogram: ${n} slices, unroll ${Math.round(t * 100)} percent`}>
      <p className="mb-3 text-muted">{label}</p>
      <svg viewBox="0 0 340 230" className="mx-auto w-full max-w-sm" role="img" aria-label={`A circle of slices rearranging into a parallelogram of base ${Math.round(t * 100) < 100 ? "πr" : "πr"} and height r`}>
        {polys.map((p, i) => (
          <polygon key={i} points={p} fill={i % 2 === 0 ? "var(--primary)" : "var(--warn)"} fillOpacity="0.55" stroke="var(--border)" strokeWidth="0.75" style={{ transition: "none" }} />
        ))}
        {t > 0.75 && (
          <g aria-hidden="true">
            <line x1={startX} y1={yB + 14} x2={startX + (n * base) / 2} y2={yB + 14} stroke="var(--fg)" strokeWidth="1" />
            <text x={startX + (n * base) / 4} y={yB + 26} textAnchor="middle" fontSize="11" fill="var(--fg)">base ≈ πr (half the rim)</text>
            <line x1={startX - 12} y1={yB - R} x2={startX - 12} y2={yB} stroke="var(--fg)" strokeWidth="1" />
            <text x={startX - 16} y={yB - R / 2} textAnchor="end" fontSize="11" fill="var(--fg)">r</text>
          </g>
        )}
      </svg>
      <div className="mt-3 flex flex-wrap items-center justify-center gap-4 text-sm text-muted">
        <span className="flex gap-1">
          {[6, 12, 24].map((k) => (
            <button key={k} type="button" onClick={() => setN(k)} aria-pressed={n === k} aria-label={`Use ${k} slices`} className={`rounded-[8px] border px-2 py-1 text-xs ${n === k ? "border-[var(--primary)] text-[var(--primary)]" : "border-token"}`}>
              {k} slices
            </button>
          ))}
        </span>
        <label className="flex items-center gap-2">
          Unroll: <strong className="font-mono">{Math.round(t * 100)}%</strong>
          <input type="range" min={0} max={1} step={0.02} value={t} onChange={(e) => setT(Number(e.target.value))} className="w-40 accent-[var(--primary)]" aria-label="Unroll the circle" />
        </label>
      </div>
      <p className="mt-3 text-center text-sm" data-testid="circle-readout">
        <KaTeX tex={`\\text{area} = \\text{base} \\times \\text{height} = \\pi r \\times r = \\pi r^2`} />
      </p>
      <p className="meta mt-2">Slice finer and the wobbly parallelogram straightens: its base is half the rim (πr), its height is r. That is where πr² comes from.</p>
    </div>
  );
}



