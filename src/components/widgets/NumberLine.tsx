"use client";

import { useState, type ReactNode } from "react";
import { Math as KaTeX } from "@/components/math/Math";

interface NumberLineProps {
  mode?: "point" | "inequality" | "hops" | "markers" | "dots";
  min?: number;
  max?: number;
  /** point mode */
  initial?: number;
  label?: string;
  /** inequality mode */
  initialInclusive?: boolean;
  initialDirection?: "right" | "left";
  /** hops mode: start position, then ops like "+4", "×2", "−1" */
  start?: number;
  ops?: string[];
  /** markers mode: fixed labelled ticks */
  markers?: { value: number; label: string }[];
  /** markers mode: toggled every-n tick sets */
  markerSets?: { step: number; label: string }[];
  /** markers mode: show "nearest power of base" readout */
  powerBase?: number;
  /** dots mode: draggable data points */
  dots?: number[];
  /** dots mode: offer a "negate all" button */
  negate?: boolean;
}

function fmtNum(v: number): string {
  if (Math.abs(v - Math.round(v)) < 1e-9) return String(Math.round(v));
  return String(Number(v.toFixed(4)));
}

function niceStep(raw: number): number {
  const p = Math.pow(10, Math.floor(Math.log10(Math.max(1e-9, raw))));
  for (const c of [p, 2 * p, 5 * p, 10 * p]) if (c >= raw - 1e-12) return c;
  return 10 * p;
}

function useWindow(min: number, max: number) {
  const [win, setWin] = useState<[number, number]>([min, max]);
  const span = win[1] - win[0];
  const zoom = (f: number, anchor: number) =>
    setWin(([lo, hi]) => [anchor - ((hi - lo) * f) / 2, anchor + ((hi - lo) * f) / 2]);
  const reset = () => setWin([min, max]);
  return { win, span, zoom, reset };
}

const AXIS_TOP = 46;

/** Interactive number line with five lesson modes. */
export function NumberLine({
  mode = "point",
  min = -5,
  max = 5,
  initial = 3.2,
  label = "Drag the dot. Zoom to see finer values.",
  initialInclusive = false,
  initialDirection = "right",
  start = 0,
  ops = ["+3", "+3", "+3"],
  markers = [],
  markerSets = [],
  powerBase,
  dots = [2, 4, 4, 7, 9],
  negate = false,
}: NumberLineProps) {
  if (mode === "inequality") return <InequalityMode min={min} max={max} initialInclusive={initialInclusive} initialDirection={initialDirection} label={label} />;
  if (mode === "hops") return <HopsMode min={min} max={max} start={start} ops={ops} label={label} />;
  if (mode === "markers") return <MarkersMode min={min} max={max} markers={markers} markerSets={markerSets} powerBase={powerBase} label={label} />;
  if (mode === "dots") return <DotsMode dots={dots} negate={negate} label={label} />;
  return <PointMode min={min} max={max} initial={initial} label={label} />;
}

function Track({ win, step, aria, children }: { win: [number, number]; step: number; aria: string; children?: ReactNode }) {
  const [lo, hi] = win;
  const span = hi - lo;
  const pct = (v: number) => ((v - lo) / span) * 100;
  const start = Math.ceil((lo - 1e-9) / step) * step;
  const ticks: number[] = [];
  for (let v = start, guard = 0; v <= hi + 1e-9 && guard < 40; v += step, guard++) ticks.push(Number(v.toFixed(10)));
  const dec = Math.max(0, -Math.floor(Math.log10(step)));
  return (
    <div className="relative h-28 select-none" role="img" aria-label={aria}>
      <div className="absolute inset-x-0" style={{ top: AXIS_TOP }}>
        <div className="h-0.5 w-full rounded bg-[var(--border)]" />
        {ticks.map((t) => (
          <div key={t} className="absolute top-0 flex flex-col items-center" style={{ left: `${pct(t)}%`, transform: "translateX(-50%)" }}>
            <div className="h-3 w-px bg-[var(--border)]" />
            <span className="mt-1 whitespace-nowrap font-mono text-[10px] text-muted">{fmtNum(Number(t.toFixed(dec)))}</span>
          </div>
        ))}
      </div>
      {children}
    </div>
  );
}

function PointMode({ min, max, initial, label }: { min: number; max: number; initial: number; label: string }) {
  const [value, setValue] = useState(initial);
  const { win, span, zoom, reset } = useWindow(min, max);
  const [lo, hi] = win;
  const pct = (v: number) => ((v - lo) / span) * 100;
  const step = niceStep(span / 10);
  const keyStep = span >= 40 ? 1 : span >= 0.4 ? 0.1 : span >= 0.04 ? 0.01 : 0.001;

  return (
    <div className="widget-surface" aria-label={`Number line from ${fmtNum(lo)} to ${fmtNum(hi)}, marker at ${fmtNum(value)}`}>
      <p className="mb-3 text-muted">{label}</p>
      <Track win={win} step={step} aria={`Number line with ticks every ${fmtNum(step)}, marker at ${fmtNum(value)}`}>
        <div
          className="absolute inset-x-0 cursor-ew-resize touch-none"
          style={{ top: AXIS_TOP - 18, height: 36 }}
          aria-hidden="true"
          onPointerDown={(e) => {
            const el = e.currentTarget;
            const hand = (ev: PointerEvent) => {
              const rect = el.getBoundingClientRect();
              const t = Math.min(1, Math.max(0, (ev.clientX - rect.left) / rect.width));
              setValue(lo + t * span);
            };
            const up = () => { window.removeEventListener("pointermove", hand); window.removeEventListener("pointerup", up); };
            window.addEventListener("pointermove", hand);
            window.addEventListener("pointerup", up);
            e.preventDefault();
          }}
        />
        <button
          type="button"
          className="absolute z-10 h-5 w-5 -translate-x-1/2 rounded-full border-2 border-[var(--bg)] shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          style={{ left: `${pct(value)}%`, top: AXIS_TOP - 8, backgroundColor: "var(--primary)" }}
          aria-label={`Marker at ${fmtNum(value)} — arrow keys nudge by ${fmtNum(keyStep)}`}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") { setValue((v) => Math.max(lo, v - keyStep)); e.preventDefault(); }
            if (e.key === "ArrowRight") { setValue((v) => Math.min(hi, v + keyStep)); e.preventDefault(); }
          }}
        />
      </Track>
      <div className="mt-2 flex flex-wrap items-center gap-2">
        <button type="button" className="btn btn-ghost text-xs" onClick={() => zoom(10, value)} aria-label="Zoom out ten times, centred on the point">Zoom out ×10</button>
        <button type="button" className="btn btn-ghost text-xs" onClick={() => zoom(0.1, value)} aria-label="Zoom in ten times, centred on the point">Zoom in ×10</button>
        <button type="button" className="btn btn-ghost text-xs" onClick={reset} aria-label="Reset the window">↺ Reset</button>
        <span className="ml-auto text-2xl font-bold" data-testid="nl-value">{fmtNum(value)}</span>
      </div>
      <p className="meta mt-2">Window [{fmtNum(lo)}, {fmtNum(hi)}] — ticks adapt to every {fmtNum(step)}. Zoom in around the dot to chase decimals: 3.2 → 3.17 → 3.162.</p>
    </div>
  );
}

function InequalityMode({ min, max, initialInclusive, initialDirection, label }: { min: number; max: number; initialInclusive: boolean; initialDirection: "right" | "left"; label: string }) {
  const [boundary, setBoundary] = useState((min + max) / 2);
  const [incl, setIncl] = useState(initialInclusive);
  const [dir, setDir] = useState<"right" | "left">(initialDirection);
  const { win, span, zoom, reset } = useWindow(min, max);
  const [lo, hi] = win;
  const pct = (v: number) => ((v - lo) / span) * 100;
  const step = niceStep(span / 10);
  const sym = dir === "right" ? (incl ? "≥" : ">") : incl ? "≤" : "<";
  const tex = dir === "right" ? (incl ? "\\geq" : ">") : incl ? "\\leq" : "<";
  const nudge = span >= 40 ? 1 : span >= 0.4 ? 0.1 : 0.01;

  return (
    <div className="widget-surface" aria-label={`Inequality mode: x ${sym} ${fmtNum(boundary)} shown on a number line`}>
      <p className="mb-3 text-muted">{label}</p>
      <Track win={win} step={step} aria={`Number line shaded ${dir === "right" ? "to the right" : "to the left"} of ${fmtNum(boundary)}`}>
        <div
          className="absolute h-1"
          style={{
            top: AXIS_TOP - 1,
            left: dir === "right" ? `${pct(boundary)}%` : "0%",
            width: dir === "right" ? `${100 - pct(boundary)}%` : `${pct(boundary)}%`,
            backgroundColor: "var(--primary)",
            opacity: 0.35,
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 cursor-ew-resize touch-none"
          style={{ top: AXIS_TOP - 18, height: 36 }}
          aria-hidden="true"
          onPointerDown={(e) => {
            const el = e.currentTarget;
            const hand = (ev: PointerEvent) => {
              const rect = el.getBoundingClientRect();
              setBoundary(lo + Math.min(1, Math.max(0, (ev.clientX - rect.left) / rect.width)) * span);
            };
            const up = () => { window.removeEventListener("pointermove", hand); window.removeEventListener("pointerup", up); };
            window.addEventListener("pointermove", hand);
            window.addEventListener("pointerup", up);
            e.preventDefault();
          }}
        />
        <button
          type="button"
          className="absolute z-10 h-5 w-5 -translate-x-1/2 rounded-full border-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          style={{ left: `${pct(boundary)}%`, top: AXIS_TOP - 8, backgroundColor: incl ? "var(--primary)" : "var(--bg-panel)", borderColor: "var(--primary)" }}
          aria-label={`Boundary at ${fmtNum(boundary)} — arrow keys nudge by ${fmtNum(nudge)}`}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") { setBoundary((v) => Math.max(lo, v - nudge)); e.preventDefault(); }
            if (e.key === "ArrowRight") { setBoundary((v) => Math.min(hi, v + nudge)); e.preventDefault(); }
          }}
        />
      </Track>
      <div className="mt-2 flex flex-wrap items-center gap-2">
        <button type="button" onClick={() => setIncl((v) => !v)} className="btn btn-ghost text-xs" aria-label="Toggle whether the boundary is included">{incl ? "include ○→●" : "exclude ●→○"}</button>
        <button type="button" onClick={() => setDir((d) => (d === "right" ? "left" : "right"))} className="btn btn-ghost text-xs" aria-label="Flip the shading direction">Flip direction</button>
        <button type="button" onClick={() => zoom(10, boundary)} className="btn btn-ghost text-xs" aria-label="Zoom out ten times">Zoom out ×10</button>
        <button type="button" onClick={reset} className="btn btn-ghost text-xs" aria-label="Reset the window">↺ Reset</button>
        <span className="ml-auto text-xl font-bold"><KaTeX tex={`x ${tex} ${fmtNum(boundary)}`} /></span>
      </div>
      <p className="meta mt-2">Solid dot = the boundary is allowed (≥, ≤). Hollow dot = not allowed (&gt;, &lt;). The shading is every value that works.</p>
    </div>
  );
}

function parseOp(op: string): { kind: "+" | "-" | "×" | "÷"; n: number } {
  const m = op.replace(/\s/g, "").match(/^([+\-×x÷/])(-?\d+(?:\.\d+)?)$/);
  if (!m) return { kind: "+", n: 0 };
  const n = Number(m[2]);
  const kind = m[1] === "+" ? "+" : m[1] === "-" ? "-" : m[1] === "÷" || m[1] === "/" ? "÷" : "×";
  return { kind, n };
}

function HopsMode({ min, max, start, ops, label }: { min: number; max: number; start: number; ops: string[]; label: string }) {
  const [idx, setIdx] = useState(0);
  const [win, setWin] = useState<[number, number]>([min, max]);
  const positions = [start];
  for (let i = 0; i < ops.length; i++) {
    const { kind, n } = parseOp(ops[i]);
    const v = positions[positions.length - 1];
    positions.push(kind === "+" ? v + n : kind === "-" ? v - n : kind === "×" ? v * n : v / n);
  }
  const shown = positions.slice(0, idx + 1);
  const lo = win[0];
  const hi = win[1];
  const span = hi - lo;
  const pct = (v: number) => ((v - lo) / span) * 100;
  const step = niceStep(span / 10);
  const done = idx >= ops.length;

  const next = () => {
    if (done) return;
    const target = positions[idx + 1];
    setIdx((i) => i + 1);
    if (target < lo + span * 0.05 || target > hi - span * 0.05) {
      const pad = Math.max(2, Math.abs(target) * 0.2, span * 0.1);
      setWin([Math.min(lo, target - pad), Math.max(hi, target + pad)]);
    }
  };

  return (
    <div className="widget-surface" aria-label={`Hops mode: ${shown.map(fmtNum).join(" then ")}`}>
      <p className="mb-3 text-muted">{label}</p>
      <Track win={win} step={step} aria={`Number line with hops from ${fmtNum(start)}${idx > 0 ? " applying " + ops.slice(0, idx).join(", ") : ""}`}>
        {Array.from({ length: idx }, (_, i) => {
          const a = pct(positions[i]);
          const b = pct(positions[i + 1]);
          const left = Math.min(a, b);
          const width = Math.abs(b - a);
          const color = i % 2 === 0 ? "var(--primary)" : "var(--warn)";
          return (
            <div
              key={i}
              className="absolute border-t-2 border-x-2"
              style={{ left: `${left}%`, width: `${width}%`, top: AXIS_TOP - 16, height: 16, borderColor: color, borderTopLeftRadius: "16px", borderTopRightRadius: "16px", borderBottom: "none" }}
              aria-hidden="true"
            >
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[10px]" style={{ color }}>
                {ops[i]}
              </span>
            </div>
          );
        })}
        {shown.map((p, i) => (
          <div
            key={i}
            className={`absolute -translate-x-1/2 rounded-full ${i === shown.length - 1 && !done ? "h-4 w-4" : "h-2.5 w-2.5"}`}
            style={{ left: `${pct(p)}%`, top: AXIS_TOP - (i === shown.length - 1 && !done ? 6 : 4), backgroundColor: "var(--primary)" }}
            aria-hidden="true"
          />
        ))}
      </Track>
      <div className="mt-2 flex flex-wrap items-center gap-2">
        <button type="button" onClick={next} disabled={done} className="btn btn-ghost text-xs" aria-label="Take the next hop">Next hop ▶</button>
        <button type="button" onClick={() => { setIdx(0); setWin([min, max]); }} className="btn btn-ghost text-xs" aria-label="Reset the journey">↺ Reset</button>
        <span className="ml-auto font-mono text-sm" data-testid="hops-readout">
          {shown.map(fmtNum).join(" → ")} {done && <strong className="text-success">— landed!</strong>}
        </span>
      </div>
      <p className="meta mt-2">{ops.length} hops in the journey — each arc is one operation. {done ? "The rule behind the hops predicts every landing spot." : `Hop ${idx + 1} of ${ops.length} queued.`}</p>
    </div>
  );
}

function MarkersMode({ min, max, markers, markerSets, powerBase, label }: { min: number; max: number; markers: { value: number; label: string }[]; markerSets: { step: number; label: string }[]; powerBase?: number; label: string }) {
  const [sets, setSets] = useState<boolean[]>(markerSets.map(() => false));
  const { win, span, zoom, reset } = useWindow(min, max);
  const [lo, hi] = win;
  const pct = (v: number) => ((v - lo) / span) * 100;
  const step = niceStep(span / 10);
  const active = markerSets.filter((_, i) => sets[i]);
  const lg = (a: number, b: number): number => (b === 0 ? a : lg(b, a % b));
  const common = active.length >= 2 ? active.map((s) => s.step).reduce((a, b) => (a * b) / lg(a, b)) : null;
  const center = lo + span / 2;
  const powerK = powerBase && powerBase > 1 ? Math.round(Math.log(Math.max(1e-9, Math.abs(center))) / Math.log(powerBase)) : null;

  return (
    <div className="widget-surface" aria-label={`Markers mode with ${markers.length} labelled markers and ${active.length} active multiple sets`}>
      <p className="mb-3 text-muted">{label}</p>
      <Track win={win} step={step} aria={`Number line with ${markers.length} markers and ${active.length} sets of multiples shown`}>
        {markers.map((m) => (
          <div key={m.value} className="absolute" style={{ left: `${pct(m.value)}%`, top: AXIS_TOP - 30, transform: "translateX(-50%)" }}>
            <div className="mx-auto h-4 w-px bg-[var(--success)]" />
            <span className="whitespace-nowrap text-[10px] font-semibold text-[var(--success)]">{m.label}</span>
          </div>
        ))}
        {markerSets.map((s, si) =>
          sets[si]
            ? Array.from({ length: Math.min(60, Math.ceil(span / s.step) + 1) }, (_, k) => {
                const v = Number((Math.ceil((lo - 1e-9) / s.step) * s.step + k * s.step).toFixed(10));
                if (v > hi + 1e-9) return null;
                return <div key={`${si}-${v}`} className="absolute" style={{ left: `${pct(v)}%`, top: AXIS_TOP - 6, height: 12, width: 2, backgroundColor: si % 2 === 0 ? "var(--primary)" : "var(--warn)", transform: "translateX(-1px)" }} aria-hidden="true" />;
              })
            : null
        )}
      </Track>
      <div className="mt-2 flex flex-wrap items-center gap-2">
        {markerSets.map((s, si) => (
          <button key={s.label} type="button" onClick={() => setSets((ss) => ss.map((v, i) => (i === si ? !v : v)))} aria-pressed={sets[si]} aria-label={`Toggle ticks for ${s.label}`} className={`rounded-[8px] border px-2 py-1 text-xs ${sets[si] ? "border-[var(--primary)] text-[var(--primary)]" : "border-token text-muted"}`}>
            {s.label}
          </button>
        ))}
        <button type="button" onClick={() => zoom(10, center)} className="btn btn-ghost text-xs" aria-label="Zoom out ten times">Zoom out ×10</button>
        <button type="button" onClick={reset} className="btn btn-ghost text-xs" aria-label="Reset the window">↺ Reset</button>
      </div>
      {active.length > 0 && (
        <p className="mt-3 text-sm" data-testid="markers-readout">
          Showing {active.map((s) => `every ${s.step} (${s.label})`).join(" and ")}
          {common !== null && <strong> — first shared multiple: {common} ✓</strong>}
        </p>
      )}
      {powerBase && powerBase > 1 && powerK !== null && (
        <p className="mt-1 text-sm text-muted">
          Window centre ≈ <KaTeX tex={`${powerBase}^{${powerK}} = ${fmtNum(Number(Math.pow(powerBase, powerK).toFixed(6)))}`} />
        </p>
      )}
      <p className="meta mt-2">Layer different multiples on one line — shared ticks light up where the sets first agree.</p>
    </div>
  );
}

function DotsMode({ dots, negate, label }: { dots: number[]; negate: boolean; label: string }) {
  const [vals, setVals] = useState<number[]>(dots);
  const [flipped, setFlipped] = useState(false);
  const view = flipped ? vals.map((v) => -v) : vals;
  const sorted = [...view].sort((a, b) => a - b);
  const n = sorted.length;
  const mean = view.reduce((s, v) => s + v, 0) / Math.max(1, n);
  const median = n === 0 ? 0 : n % 2 ? sorted[(n - 1) / 2] : (sorted[n / 2 - 1] + sorted[n / 2]) / 2;
  const range = n ? sorted[n - 1] - sorted[0] : 0;
  const lo0 = Math.min(...view, 0) - 1;
  const hi0 = Math.max(...view, 0) + 1;
  const { win, span } = useWindow(lo0, hi0);
  const [lo, hi] = win;
  const pct = (v: number) => ((v - lo) / span) * 100;
  const step = niceStep(span / 10);
  const nudge = span >= 40 ? 1 : span >= 0.4 ? 0.1 : 0.01;

  return (
    <div className="widget-surface" aria-label={`Data points on a number line: mean ${fmtNum(Number(mean.toFixed(3)))}, median ${fmtNum(Number(median.toFixed(3)))}, range ${fmtNum(range)}`}>
      <p className="mb-3 text-muted">{label}</p>
      <Track win={win} step={step} aria={`Number line holding ${n} draggable data points`}>
        {view.map((v, i) => {
          const dup = view.slice(0, i).filter((u) => Math.abs(u - v) < 1e-9).length;
          return (
            <button
              key={i}
              type="button"
              className="absolute z-10 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-[var(--bg)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              style={{ left: `${pct(v)}%`, top: AXIS_TOP - 6 - dup * 8, backgroundColor: "var(--warn)" }}
              aria-label={`Data point ${i + 1} at ${fmtNum(v)} — drag or use arrow keys to nudge by ${fmtNum(nudge)}`}
              onKeyDown={(e) => {
                if (e.key === "ArrowLeft") { setVals((vs) => vs.map((u, j) => (j === i ? (flipped ? u + nudge : u - nudge) : u))); e.preventDefault(); }
                if (e.key === "ArrowRight") { setVals((vs) => vs.map((u, j) => (j === i ? (flipped ? u - nudge : u + nudge) : u))); e.preventDefault(); }
              }}
              onPointerDown={(e) => {
                const el = e.currentTarget.parentElement;
                if (!el) return;
                const hand = (ev: PointerEvent) => {
                  const rect = el.getBoundingClientRect();
                  const t = Math.min(1, Math.max(0, (ev.clientX - rect.left) / rect.width));
                  setVals((vs) => vs.map((u, j) => (j === i ? (flipped ? -(lo + t * span) : lo + t * span) : u)));
                };
                const up = () => { window.removeEventListener("pointermove", hand); window.removeEventListener("pointerup", up); };
                window.addEventListener("pointermove", hand);
                window.addEventListener("pointerup", up);
                e.preventDefault();
              }}
            />
          );
        })}
      </Track>
      <div className="mt-2 flex flex-wrap items-center gap-2">
        {negate && (
          <button type="button" onClick={() => setFlipped((f) => !f)} className="btn btn-ghost text-xs" aria-label="Flip the sign of every data point">
            {flipped ? "Show positives" : "Negate all"}
          </button>
        )}
        <span className="ml-auto font-mono text-sm" data-testid="dots-readout">
          mean {fmtNum(Number(mean.toFixed(3)))} · median {fmtNum(Number(median.toFixed(3)))} · range {fmtNum(range)}
        </span>
      </div>
      <p className="meta mt-2">{flipped ? "Every sign flipped — the mean and median flip with it, but the range survives." : "Drag any dot: the mean chases it, the median barely budges."}</p>
    </div>
  );
}





