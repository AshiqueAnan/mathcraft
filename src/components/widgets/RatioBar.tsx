"use client";

import { useState } from "react";
import { Math as KaTeX } from "@/components/math/Math";

interface RatioBarProps {
  mode?: "ratio" | "percent" | "change" | "precision" | "terms" | "factorout";
  label?: string;
  a?: number;
  b?: number;
  labelA?: string;
  labelB?: string;
  /** percent mode */
  total?: number;
  percent?: number;
  /** change mode */
  valueA?: number;
  valueB?: number;
  /** precision mode: measured vs true [goldPart, silverPart] style pairs */
  measured?: [number, number];
  truth?: [number, number];
  /** terms mode: the starting pair to simplify step by step */
  pair?: [number, number];
  /** factorout mode: the common factor to pull out */
  factor?: number;
}

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

function fmt(n: number, d = 2): string {
  return String(Number(n.toFixed(d)));
}

/** Interactive ratio bar with six lesson modes. */
export function RatioBar({
  mode = "ratio",
  label = "Drag the counters.",
  a = 3,
  b = 2,
  labelA = "Red",
  labelB = "Blue",
  total = 420,
  percent = 10,
  valueA = 80,
  valueB = 100,
  measured = [6.26, 1],
  truth = [5.18, 0.82],
  pair = [420, 120],
  factor = 5,
}: RatioBarProps) {
  if (mode === "percent") return <PercentMode total={total} percent={percent} label={label} />;
  if (mode === "change") return <ChangeMode valueA={valueA} valueB={valueB} label={label} />;
  if (mode === "precision") return <PrecisionMode measured={measured} truth={truth} label={label} />;
  if (mode === "terms") return <TermsMode pair={pair} label={label} />;
  if (mode === "factorout") return <FactorOutMode a={a} b={b} factor={factor} label={label} />;
  return <RatioMode a={a} b={b} labelA={labelA} labelB={labelB} label={label} />;
}

function RatioMode({ a, b, labelA, labelB, label }: Required<Pick<RatioBarProps, "a" | "b" | "labelA" | "labelB" | "label">>) {
  const [na, setNa] = useState(a);
  const [nb, setNb] = useState(b);
  const total = na + nb;
  const g = gcd(na, nb) || 1;
  const ratio = nb === 0 ? Infinity : na / nb;

  return (
    <div className="widget-surface" aria-label={`Ratio bar: ${na} ${labelA} to ${nb} ${labelB}, simplified ${na / g} to ${nb / g}`}>
      <p className="mb-3 text-muted">{label}</p>
      <div className="flex h-14 overflow-hidden rounded-lg border border-token" role="img" aria-label={`${labelA} segment and ${labelB} segment sized in proportion`}>
        <div className="flex items-center justify-center text-sm font-semibold text-[var(--bg)]" style={{ width: `${(na / Math.max(1, total)) * 100}%`, backgroundColor: "var(--primary)" }}>
          {na > 1 && na}
        </div>
        <div className="flex items-center justify-center text-sm font-semibold text-[var(--bg)]" style={{ width: `${(nb / Math.max(1, total)) * 100}%`, backgroundColor: "var(--warn)" }}>
          {nb > 1 && nb}
        </div>
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-muted">
        <label className="flex items-center gap-2">
          {labelA}: <strong className="font-mono">{na}</strong>
          <input type="range" min={0} max={30} value={na} onChange={(e) => setNa(Number(e.target.value))} className="w-24 accent-[var(--primary)]" aria-label={`Number of ${labelA}`} />
        </label>
        <label className="flex items-center gap-2">
          {labelB}: <strong className="font-mono">{nb}</strong>
          <input type="range" min={0} max={30} value={nb} onChange={(e) => setNb(Number(e.target.value))} className="w-24 accent-[var(--warn)]" aria-label={`Number of ${labelB}`} />
        </label>
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm" data-testid="ratio-readout">
        <span className="text-lg font-semibold">
          <KaTeX tex={`${na} : ${nb}`} />
        </span>
        {g > 1 && (
          <span>
            = <KaTeX tex={`${na / g} : ${nb / g}`} /> <span className="text-muted">(÷{g})</span>
          </span>
        )}
        {nb > 0 && <span className="text-muted">— for every 1 {labelB.toLowerCase()}, there are {fmt(ratio)} {labelA.toLowerCase()}</span>}
      </div>
      <p className="meta mt-2">Ratios compare parts to parts; the bar's total is only {total === 0 ? "empty" : `${total}`} — double both counts and the bar's shape never changes.</p>
    </div>
  );
}

function PercentMode({ total, percent, label }: Required<Pick<RatioBarProps, "total" | "percent" | "label">>) {
  const [n, setN] = useState(total);
  const [p, setP] = useState(percent);
  const value = Number(((p / 100) * n).toFixed(2));

  return (
    <div className="widget-surface" aria-label={`Percent bar: ${p}% of ${n} is ${value}`}>
      <p className="mb-3 text-muted">{label}</p>
      <div className="relative h-14 overflow-hidden rounded-lg border border-token">
        <div className="h-full transition-[width]" style={{ width: `${p}%`, backgroundColor: "var(--primary)" }} />
        <div className="absolute top-0 h-full w-px bg-[var(--warn)]" style={{ left: "10%" }} aria-hidden="true" />
        <span className="absolute right-2 top-1/2 -translate-y-1/2 text-sm font-semibold">{value}</span>
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-muted">
        <label className="flex items-center gap-2">
          Of: <strong className="font-mono">{n}</strong>
          <input type="range" min={10} max={500} step={10} value={n} onChange={(e) => setN(Number(e.target.value))} className="w-28 accent-[var(--primary)]" aria-label="Total amount" />
        </label>
        <label className="flex items-center gap-2">
          Percent: <strong className="font-mono">{p}%</strong>
          <input type="range" min={0} max={100} value={p} onChange={(e) => setP(Number(e.target.value))} className="w-28 accent-[var(--primary)]" aria-label="Percent" />
        </label>
        <span className="flex gap-1">
          {[10, 5, 1].map((bm) => (
            <button key={bm} type="button" onClick={() => setP(bm)} className="rounded-[8px] border border-token px-2 py-0.5 text-xs hover:border-[var(--primary)]" aria-label={`Set percent to ${bm}%`}>{bm}%</button>
          ))}
        </span>
      </div>
      <p className="mt-3 text-sm" data-testid="percent-readout">
        <KaTeX tex={`${p}\\% \\times ${n} = ${value}`} /> <span className="text-muted">— the orange tick marks 10%: find that first, then scale.</span>
      </p>
      <p className="meta mt-2">10% of {n} = {Number((n / 10).toFixed(2))}, 5% is half of that = {Number((n / 20).toFixed(2))}, 1% = {Number((n / 100).toFixed(2))}. Build any percent from those bricks.</p>
    </div>
  );
}

function ChangeMode({ valueA, valueB, label }: Required<Pick<RatioBarProps, "valueA" | "valueB" | "label">>) {
  const [a, setA] = useState(valueA);
  const [b, setB] = useState(valueB);
  const [baseNew, setBaseNew] = useState(false);
  const change = b - a;
  const base = baseNew ? b : a;
  const pctChange = base === 0 ? 0 : (change / Math.abs(base)) * 100;
  const up = change >= 0;

  return (
    <div className="widget-surface" aria-label={`Change bar: from ${a} to ${b} is ${up ? "up" : "down"} ${Number(Math.abs(pctChange).toFixed(1))}% measured from the ${baseNew ? "new" : "starting"} value`}>
      <p className="mb-3 text-muted">{label}</p>
      <div className="flex flex-wrap items-end gap-6">
        <figure className="text-center">
          <div className="mx-auto flex h-24 w-16 items-end rounded-t-lg bg-[var(--bg-panel)]">
            <div className="w-full rounded-t-lg" style={{ height: `${Math.min(100, (a / Math.max(a, b, 1)) * 100)}%`, backgroundColor: "var(--border)" }} />
          </div>
          <figcaption className="mt-1 text-xs text-muted">before: {a}</figcaption>
        </figure>
        <figure className="text-center">
          <div className="mx-auto flex h-24 w-16 items-end rounded-t-lg bg-[var(--bg-panel)]">
            <div className="w-full rounded-t-lg" style={{ height: `${Math.min(100, (b / Math.max(a, b, 1)) * 100)}%`, backgroundColor: up ? "var(--success)" : "var(--warn)" }} />
          </div>
          <figcaption className="mt-1 text-xs text-muted">after: {b}</figcaption>
        </figure>
        <div className="flex flex-col gap-2">
          <label className="text-sm text-muted">
            Before:{" "}
            <input type="number" value={a} min={0} max={999} onChange={(e) => setA(Math.max(0, Number(e.target.value) || 0))} className="w-20 rounded-[8px] border border-token bg-transparent px-2 py-1 font-mono" aria-label="Value before" />
          </label>
          <label className="text-sm text-muted">
            After:{" "}
            <input type="number" value={b} min={0} max={999} onChange={(e) => setB(Math.max(0, Number(e.target.value) || 0))} className="w-20 rounded-[8px] border border-token bg-transparent px-2 py-1 font-mono" aria-label="Value after" />
          </label>
          <button type="button" onClick={() => setBaseNew((v) => !v)} className="btn btn-ghost w-fit text-xs" aria-label="Toggle which value the percentage change is measured from">
            {baseNew ? "measuring from new ✗" : "measuring from start ✓"}
          </button>
        </div>
      </div>
      <p className="mt-3 text-sm" data-testid="change-readout">
        Change {a} → {b}: {up ? "▲" : "▼"} <strong>{Number(Math.abs(pctChange).toFixed(1))}%</strong>
        {baseNew && <span className="ml-2 text-[var(--warn)]">— wrong base! {up ? "Gains" : "Drops"} are always measured from where you started.</span>}
      </p>
      <p className="meta mt-2">Percentage change is the change divided by the <em>original</em>: <KaTeX tex={`\\frac{${Math.abs(change)}}{${baseNew ? b : a}} \\times 100\\%`} />.</p>
    </div>
  );
}

function PrecisionMode({ measured, truth, label }: { measured: [number, number]; truth: [number, number]; label: string }) {
  const [showTruth, setShowTruth] = useState(false);
  const [gm, gs] = measured;
  const [tm, ts] = truth;
  const rMeas = gm / gs;
  const rTrue = tm / ts;
  const off = rTrue === 0 ? 0 : ((rMeas - rTrue) / rTrue) * 100;
  const seg = (v: number, total: number) => `${(v / Math.max(1e-9, total)) * 100}%`;

  return (
    <div className="widget-surface" aria-label={`Precision mode: measured ratio ${fmt(rMeas)} versus true ratio ${fmt(rTrue)}, off by ${fmt(Math.abs(off), 1)} percent`}>
      <p className="mb-3 text-muted">{label}</p>
      <div className="space-y-3">
        <div>
          <p className="mb-1 text-xs uppercase tracking-wide text-muted">Your measurement: {fmt(gm)} : {fmt(gs)}</p>
          <div className="flex h-10 overflow-hidden rounded-lg border border-token" role="img" aria-label={`Measured bar split ${fmt(gm)} to ${fmt(gs)}`}>
            <div style={{ width: seg(gm, gm + gs), backgroundColor: "var(--warn)" }} />
            <div style={{ width: seg(gs, gm + gs), backgroundColor: "var(--bg-panel)" }} />
          </div>
        </div>
        {showTruth && (
          <div>
            <p className="mb-1 text-xs uppercase tracking-wide text-muted">The true mix: {fmt(tm)} : {fmt(ts)}</p>
            <div className="flex h-10 overflow-hidden rounded-lg border border-token" role="img" aria-label={`True bar split ${fmt(tm)} to ${fmt(ts)}`}>
              <div style={{ width: seg(tm, tm + ts), backgroundColor: "var(--success)" }} />
              <div style={{ width: seg(ts, tm + ts), backgroundColor: "var(--bg-panel)" }} />
            </div>
          </div>
        )}
      </div>
      <button type="button" onClick={() => setShowTruth((v) => !v)} className="btn btn-ghost mt-3 text-xs" aria-label="Toggle the true values">
        {showTruth ? "Hide the true mix" : "Reveal the true mix"}
      </button>
      <p className="mt-3 text-sm" data-testid="precision-readout">
        Measured <KaTeX tex={`${fmt(gm)} : ${fmt(gs)}`} /> → {fmt(rMeas)}× · True <KaTeX tex={`${fmt(tm)} : ${fmt(ts)}`} /> → {fmt(rTrue)}× · off by {fmt(Math.abs(off), 1)}%
      </p>
      <p className="meta mt-2">Real measurements wobble. Quote the ratio with the precision you can defend — {fmt(rMeas, 1)}×, not {fmt(rMeas, 3)}×, when your error bar is a percent wide.</p>
    </div>
  );
}

function TermsMode({ pair, label }: { pair: [number, number]; label: string }) {
  const [history, setHistory] = useState<[number, number][]>([pair]);
  const [a, b] = history[history.length - 1];
  const g = gcd(a, b) || 1;
  const done = g === 1;
  const divisors = a === 0 || b === 0 ? [] : Array.from({ length: g }, (_, i) => i + 1).filter((k) => a % k === 0 && b % k === 0 && k > 1);

  return (
    <div className="widget-surface" aria-label={`Simplification chain: ${history.map(([x, y]) => `${x} to ${y}`).join(" then ")}`}>
      <p className="mb-3 text-muted">{label}</p>
      <div className="flex flex-wrap items-center gap-2 font-mono text-sm">
        {history.map(([x, y], i) => (
          <span key={i} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true">→</span>}
            <span className={`rounded-[8px] border px-2 py-1 ${i === history.length - 1 ? "border-[var(--primary)] text-[var(--primary)]" : "border-token text-muted"}`}>{x} : {y}</span>
          </span>
        ))}
        {done && <span className="text-success">— simplest form ✓</span>}
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        {!done && divisors.map((k) => (
          <button
            key={k}
            type="button"
            onClick={() => setHistory((h) => [...h, [a / k, b / k]])}
            className="rounded-[8px] border border-token px-2 py-1 text-xs hover:border-[var(--primary)]"
            aria-label={`Divide both terms by ${k}`}
          >
            ÷{k}
          </button>
        ))}
        {!done && (
          <button type="button" onClick={() => setHistory((h) => [...h, [a / g, b / g]])} className="btn btn-ghost text-xs" aria-label={`Divide both terms by the biggest common factor, ${g}`}>
            ÷{g} (all at once)
          </button>
        )}
        <button type="button" onClick={() => setHistory([pair])} className="btn btn-ghost text-xs" aria-label="Reset the chain">↺ Reset</button>
      </div>
      <p className="meta mt-2">A ratio survives division: treat both sides the same and {pair[0]} : {pair[1]} and {a} : {b} name the very same relationship.</p>
    </div>
  );
}

function FactorOutMode({ a, b, factor, label }: { a: number; b: number; factor: number; label: string }) {
  const [k, setK] = useState(factor);
  const okA = a % k === 0;
  const okB = b % k === 0;
  const g = gcd(a, b) || 1;
  const maxK = Math.max(12, g);
  const perfect = okA && okB && k === g;

  return (
    <div className="widget-surface" aria-label={`Factor-out mode: dividing ${a} and ${b} by ${k}, ${okA && okB ? "both divide exactly" : "not both divide exactly"}`}>
      <p className="mb-3 text-muted">{label}</p>
      <p className="mb-2 font-mono text-lg" data-testid="factorout-readout">
        {a} : {b}{" "}
        {okA && okB ? (
          <span className="text-success">→ ÷{k} → {a / k} : {b / k}{perfect && " ✓ simplest"}</span>
        ) : (
          <span className="text-[var(--warn)]">→ ÷{k} → {fmt(a / k)} : {fmt(b / k)} ✗ not whole</span>
        )}
      </p>
      <label className="flex items-center gap-2 text-sm text-muted">
        Try a common factor: <strong className="font-mono">{k}</strong>
        <input type="range" min={2} max={maxK} value={Math.min(k, maxK)} onChange={(e) => setK(Number(e.target.value))} className="w-40 accent-[var(--primary)]" aria-label="Common factor to try" />
      </label>
      <p className="meta mt-2">{perfect ? `${k} was the biggest common factor — the ratio is now in simplest form.` : `Only factors of BOTH terms keep whole numbers. The biggest one here is ${g}.`}</p>
    </div>
  );
}



