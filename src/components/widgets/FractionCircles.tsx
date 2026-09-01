"use client";

import { useRef, useState } from "react";
import { Math as KaTeX } from "@/components/math/Math";

interface FractionCirclesProps {
  mode?: "single" | "sweep" | "mislead";
  initialParts?: number;
  initialShaded?: number;
  maxParts?: number;
  label?: string;
  /** mislead mode: the fraction (0..1) both pies show. */
  fraction?: number;
}

const R = 60;
const C = 70;

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

function sectorPath(cx: number, cy: number, r: number, i: number, parts: number): string {
  if (parts === 1) {
    return `M ${cx - r} ${cy} A ${r} ${r} 0 1 1 ${cx + r} ${cy} A ${r} ${r} 0 1 1 ${cx - r} ${cy} Z`;
  }
  const a0 = -Math.PI / 2 + (i / parts) * 2 * Math.PI;
  const a1 = -Math.PI / 2 + ((i + 1) / parts) * 2 * Math.PI;
  const large = a1 - a0 > Math.PI ? 1 : 0;
  return `M ${cx} ${cy} L ${cx + r * Math.cos(a0)} ${cy + r * Math.sin(a0)} A ${r} ${r} 0 ${large} 1 ${cx + r * Math.cos(a1)} ${cy + r * Math.sin(a1)} Z`;
}

/** Sector from 12 o'clock sweeping ANTICLOCKWISE — maths convention: degrees grow anticlockwise. */
function fracSectorPath(cx: number, cy: number, r: number, frac: number): string {
  const th = frac * 2 * Math.PI;
  const ex = cx - r * Math.sin(th);
  const ey = cy - r * Math.cos(th);
  const large = frac > 0.5 ? 1 : 0;
  return `M ${cx} ${cy} L ${cx} ${cy - r} A ${r} ${r} 0 ${large} 0 ${ex} ${ey} Z`;
}

/** Interactive fraction-circle ("pizza") widget with three lesson modes. */
export function FractionCircles({
  mode = "single",
  initialParts = 4,
  initialShaded = 1,
  maxParts = 12,
  label = "Click slices to shade them.",
  fraction = 0.5,
}: FractionCirclesProps) {
  if (mode === "sweep") return <SweepMode label={label} />;
  if (mode === "mislead") return <MisleadMode fraction={fraction} label={label} />;
  return <SingleMode initialParts={initialParts} initialShaded={initialShaded} maxParts={maxParts} label={label} />;
}

function LinkedReadout({ num, den }: { num: number; den: number }) {
  const g = gcd(num, den) || 1;
  const decimal = Number((num / den).toFixed(3));
  const percent = Number(((num / den) * 100).toFixed(1));
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm" data-testid="circle-readout">
      <span className="text-lg font-semibold">
        <KaTeX tex={`\\frac{${num}}{${den}}`} />
      </span>
      <span aria-hidden="true">=</span>
      <span className="font-mono">{decimal}</span>
      <span aria-hidden="true">=</span>
      <span className="font-mono">{percent}%</span>
      {g > 1 && (
        <span className="text-muted">
          = <KaTeX tex={`\\frac{${num / g}}{${den / g}}`} /> simplified
        </span>
      )}
    </div>
  );
}

function SingleMode({ initialParts, initialShaded, maxParts, label }: { initialParts: number; initialShaded: number; maxParts: number; label: string }) {
  const [parts, setParts] = useState(Math.min(initialParts, maxParts));
  const [shaded, setShaded] = useState(() => Math.min(initialShaded, initialParts));
  const num = Math.min(shaded, parts);
  const click = (i: number) => setShaded(i + 1 === shaded ? i : i + 1);

  return (
    <div className="widget-surface" aria-label={`Fraction circle widget: ${num} of ${parts} slices shaded, equal to ${Number(((num / Math.max(1, parts)) * 100).toFixed(1))}%`}>
      <p className="mb-3 text-muted">{label}</p>
      <div className="flex items-start gap-4">
        <svg viewBox="0 0 140 140" className="w-36 shrink-0" role="img" aria-label={`Pizza cut into ${parts} equal slice${parts === 1 ? "" : "s"} with ${num} shaded`}>
          {Array.from({ length: parts }, (_, i) => (
            <path
              key={i}
              d={sectorPath(C, C, R, i, parts)}
              fill={i < num ? "var(--primary)" : "var(--bg-panel)"}
              stroke="var(--border)"
              strokeWidth="1.5"
              className="cursor-pointer transition-[filter] hover:brightness-125 focus:outline-none focus-visible:stroke-[var(--primary)]"
              role="button"
              tabIndex={0}
              aria-label={`Slice ${i + 1} of ${parts} (currently ${i < num ? "shaded" : "empty"})`}
              onClick={() => click(i)}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); click(i); } }}
            />
          ))}
        </svg>
        <div className="min-w-0 flex-1">
          <label className="flex items-center gap-2 text-sm text-muted">
            Slices: {parts}
            <input
              type="range"
              min={1}
              max={maxParts}
              value={parts}
              onChange={(e) => { const p = Number(e.target.value); setParts(p); setShaded((s) => Math.min(s, p)); }}
              className="w-32 accent-[var(--primary)]"
              aria-label="Number of equal slices"
            />
          </label>
          <div className="mt-3">
            <LinkedReadout num={num} den={parts} />
          </div>
        </div>
      </div>
      <p className="meta mt-2">The whole circle is 1 — cut it finer and each slice shrinks: <KaTeX tex="\frac{1}{1} = \frac{2}{2}" />. One slice of a 2-cut pizza is bigger than one slice of a 6-cut pizza.</p>
    </div>
  );
}

function SweepMode({ label }: { label: string }) {
  const [frac, setFrac] = useState(0.25);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const deg = Math.round(frac * 360);
  const g = gcd(deg, 360) || 1;
  const num = deg / g;
  const den = 360 / g;
  // Anticlockwise from 12 o'clock: at 90° the handle sits at 9 o'clock (west).
  const hx = C - R * Math.sin(frac * 2 * Math.PI);
  const hy = C - R * Math.cos(frac * 2 * Math.PI);

  return (
    <div className="widget-surface" aria-label={`Sweep widget: ${deg} degrees of the circle shaded — ${num}/${den} of the whole`}>
      <p className="mb-3 text-muted">{label}</p>
      <div className="flex items-start gap-4">
        <svg ref={svgRef} viewBox="0 0 140 140" className="w-36 shrink-0 touch-none" role="img" aria-label={`Circle with a handle sweeping ${deg} degrees`}>
          <circle cx={C} cy={C} r={R} fill="var(--bg-panel)" stroke="var(--border)" strokeWidth="1.5" />
          {frac > 0.001 && <path d={fracSectorPath(C, C, R, Math.min(frac, 0.99999))} fill="var(--primary)" opacity="0.85" />}
          <line x1={C} y1={C} x2={C} y2={C - R} stroke="var(--border)" strokeWidth="1" />
          <line x1={C} y1={C} x2={hx} y2={hy} stroke="var(--primary)" strokeWidth="2" />
          <circle
            cx={hx}
            cy={hy}
            r={8}
            fill="var(--primary)"
            stroke="var(--bg)"
            strokeWidth="2"
            className="cursor-grab"
            aria-label="Sweep handle — drag around the circumference"
            onPointerDown={(e) => {
              const hand = (ev: PointerEvent) => {
                const rect = svgRef.current?.getBoundingClientRect();
                if (!rect) return;
                const dx = ((ev.clientX - rect.left) / rect.width) * 140 - C;
                const dy = ((ev.clientY - rect.top) / rect.height) * 140 - C;
                // Anticlockwise angle from 12 o'clock (flip y so maths-up is positive).
                let a = Math.atan2(-dy, dx) - Math.PI / 2;
                if (a < 0) a += 2 * Math.PI;
                setFrac(a / (2 * Math.PI));
              };
              const up = () => { window.removeEventListener("pointermove", hand); window.removeEventListener("pointerup", up); };
              window.addEventListener("pointermove", hand);
              window.addEventListener("pointerup", up);
              e.preventDefault();
            }}
          />
        </svg>
        <div className="min-w-0 flex-1">
          <label className="flex items-center gap-2 text-sm text-muted">
            Sweep: <strong className="font-mono">{deg}°</strong>
            <input type="range" min={0} max={360} value={deg} onChange={(e) => setFrac(Number(e.target.value) / 360)} className="w-28 accent-[var(--primary)]" aria-label="Sweep angle in degrees" />
          </label>
          <p className="mt-3 text-sm" data-testid="sweep-readout">
            <KaTeX tex={`\\frac{${deg}^{\\circ}}{360^{\\circ}} = \\frac{${num}}{${den}} = ${Number((frac * 100).toFixed(1))}\\%`} />
          </p>
          <p className="meta mt-2">Fractions of a circle are angles in disguise: 90° is a quarter, 180° a half, 270° three quarters.</p>
        </div>
      </div>
    </div>
  );
}

function MisleadMode({ fraction, label }: { fraction: number; label: string }) {
  const [zoomR, setZoomR] = useState(88);
  const pct = Number((fraction * 100).toFixed(1));
  return (
    <div className="widget-surface" aria-label={`Two pies both showing ${pct} percent at different radii`}>
      <p className="mb-3 text-muted">{label}</p>
      <div className="flex items-center justify-center gap-8">
        <figure className="text-center">
          <svg viewBox="0 0 120 120" className="w-28" role="img" aria-label={`True-scale pie shading ${pct} percent`}>
            <circle cx="60" cy="60" r="52" fill="var(--bg-panel)" stroke="var(--border)" strokeWidth="1.5" />
            <path d={fracSectorPath(60, 60, 52, Math.min(fraction, 0.99999))} fill="var(--primary)" opacity="0.85" />
          </svg>
          <figcaption className="mt-1 text-xs text-muted">true scale</figcaption>
        </figure>
        <figure className="text-center">
          <svg viewBox="0 0 200 200" className="w-40" role="img" aria-label={`Zoomed pie shading the same ${pct} percent`}>
            <circle cx="100" cy="100" r={zoomR} fill="var(--bg-panel)" stroke="var(--border)" strokeWidth="1.5" />
            <path d={fracSectorPath(100, 100, zoomR, Math.min(fraction, 0.99999))} fill="var(--warn)" opacity="0.85" />
          </svg>
          <figcaption className="mt-1 text-xs text-muted">zoomed</figcaption>
        </figure>
      </div>
      <label className="mt-3 flex items-center justify-center gap-2 text-sm text-muted">
        Zoom: <strong className="font-mono">{zoomR}px</strong>
        <input type="range" min={30} max={96} value={zoomR} onChange={(e) => setZoomR(Number(e.target.value))} className="w-40 accent-[var(--warn)]" aria-label="Zoom radius" />
      </label>
      <p className="meta mt-2">Both slices are exactly {pct}% of their own pie — resizing a pie never changes the fraction, only the drama.</p>
    </div>
  );
}


