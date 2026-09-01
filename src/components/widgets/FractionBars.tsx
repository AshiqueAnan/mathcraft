"use client";

import { useState } from "react";
import { Math as KaTeX } from "@/components/math/Math";

type Region = { label: string; count: number; leftover?: boolean };

interface FractionBarsProps {
  mode?: "single" | "compare" | "split" | "regions" | "howmany";
  initialParts?: number;
  initialShaded?: number;
  maxParts?: number;
  allowNumerator?: boolean;
  label?: string;
  /** compare mode: [numerator, denominator] for each of the two bars. */
  fractions?: [number, number][];
  /** regions mode: labelled regions; the last one may be auto-computed. */
  regions?: Region[];
  total?: number;
  /** howmany mode: dividend and divisor fractions, e.g. [1,2] ÷ [1,4]. */
  dividend?: [number, number];
  divisor?: [number, number];
}

const BAR_H = "h-14";

function ShadeBar({
  parts,
  shaded,
  onCell,
  ariaLabel,
  testId,
}: {
  parts: number;
  shaded: number;
  onCell: (i: number) => void;
  ariaLabel: string;
  testId?: string;
}) {
  return (
    <div
      className={`flex overflow-hidden rounded-lg border border-token ${BAR_H}`}
      role="img"
      aria-label={ariaLabel}
      data-testid={testId}
    >
      {Array.from({ length: parts }, (_, i) => (
        <button
          key={i}
          type="button"
          onClick={() => onCell(i)}
          aria-label={`Toggle shading of part ${i + 1} of ${parts} (currently ${i < shaded ? "shaded" : "not shaded"})`}
          className="flex-1 transition-colors hover:brightness-125 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          style={{
            backgroundColor: i < shaded ? "var(--primary)" : "var(--bg-panel)",
            borderRight: i < parts - 1 ? "1px solid var(--border)" : "none",
          }}
        />
      ))}
    </div>
  );
}

function PartsSlider({
  parts,
  maxParts,
  onChange,
  id,
}: {
  parts: number;
  maxParts: number;
  onChange: (p: number) => void;
  id: string;
}) {
  return (
    <label className="flex items-center gap-2 text-sm text-muted">
      Parts: {parts}
      <input
        type="range"
        min={1}
        max={maxParts}
        value={parts}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-32 accent-[var(--primary)]"
        aria-label={`Number of equal parts (${id})`}
      />
    </label>
  );
}

function LinkedReadout({ num, den }: { num: number; den: number }) {
  const decimal = Number((num / den).toFixed(3));
  const percent = Number(((num / den) * 100).toFixed(1));
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm" data-testid="fraction-readout">
      <span>
        <KaTeX tex={`\\frac{${num}}{${den}}`} />
      </span>
      <span aria-hidden="true">=</span>
      <span className="font-mono">{decimal}</span>
      <span aria-hidden="true">=</span>
      <span className="font-mono">{percent}%</span>
    </div>
  );
}

/** Interactive fraction-bar widget with five lesson modes. */
export function FractionBars({
  mode = "single",
  initialParts = 4,
  initialShaded = 1,
  maxParts = 12,
  allowNumerator = true,
  label = "Drag to split the bar.",
  fractions = [
    [1, 2],
    [1, 3],
  ],
  regions = [
    { label: "Tea only", count: 7 },
    { label: "Coffee only", count: 3 },
    { label: "Both", count: 5 },
    { label: "Neither", count: 5, leftover: true },
  ],
  total = 20,
  dividend = [1, 2],
  divisor = [1, 4],
}: FractionBarsProps) {
  if (mode === "compare") return <CompareMode fractions={fractions} maxParts={maxParts} label={label} />;
  if (mode === "regions") return <RegionsMode regions={regions} total={total} label={label} />;
  if (mode === "split") return <SplitMode initialParts={initialParts} initialShaded={initialShaded} maxParts={maxParts} label={label} />;
  if (mode === "howmany") return <HowManyMode dividend={dividend} divisor={divisor} label={label} />;
  return <SingleMode initialParts={initialParts} initialShaded={initialShaded} maxParts={maxParts} allowNumerator={allowNumerator} label={label} />;
}

function SingleMode({ initialParts, initialShaded, maxParts, allowNumerator, label }: Required<Pick<FractionBarsProps, "initialParts" | "initialShaded" | "maxParts" | "allowNumerator" | "label">>) {
  const [parts, setParts] = useState(Math.min(initialParts, maxParts));
  const [shaded, setShaded] = useState(() => Math.min(initialShaded, initialParts));
  const num = Math.min(shaded, parts);

  return (
    <div
      className="widget-surface"
      aria-label={`Fraction bar widget: ${num} of ${parts} parts shaded, equal to ${Number(((num / parts) * 100).toFixed(1))}%`}
    >
      <p className="mb-3 text-muted">{label}</p>
      <ShadeBar
        parts={parts}
        shaded={num}
        onCell={(i) => setShaded(i + 1 === shaded ? i : i + 1)}
        ariaLabel={`Bar split into ${parts} equal parts with ${num} shaded`}
      />
      <div className="mt-3 flex items-center gap-4">
        <PartsSlider id="single" parts={parts} maxParts={maxParts} onChange={(p) => { setParts(p); setShaded((s) => Math.min(s, p)); }} />
        <span className="ml-auto text-lg font-semibold">
          <KaTeX tex={`\\frac{${num}}{${parts}}`} />
        </span>
      </div>
      <div className="mt-3">
        <LinkedReadout num={num} den={parts} />
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

function CompareMode({ fractions, maxParts, label }: { fractions: [number, number][]; maxParts: number; label: string }) {
  const [a, setA] = useState({ parts: fractions[0][1], shaded: fractions[0][0] });
  const [b, setB] = useState({ parts: fractions[1][1], shaded: fractions[1][0] });
  const va = a.shaded / a.parts;
  const vb = b.shaded / b.parts;
  const eps = 1e-9;
  const verdict = Math.abs(va - vb) < eps ? "equal!" : va > vb ? "the left one is bigger" : "the right one is bigger";

  return (
    <div className="widget-surface" aria-label={`Comparing ${a.shaded}/${a.parts} with ${b.shaded}/${b.parts}`}>
      <p className="mb-3 text-muted">{label}</p>
      <div className="space-y-4">
        {([{ f: a, set: setA, name: "top" }, { f: b, set: setB, name: "bottom" }] as const).map(({ f, set, name }) => (
          <div key={name}>
            <ShadeBar
              parts={f.parts}
              shaded={f.shaded}
              onCell={(i) => set((s) => ({ ...s, shaded: i + 1 === s.shaded ? i : i + 1 }))}
              ariaLabel={`${name} bar split into ${f.parts} equal parts with ${f.shaded} shaded`}
            />
            <div className="mt-2">
              <PartsSlider id={name} parts={f.parts} maxParts={maxParts} onChange={(p) => set((s) => ({ parts: p, shaded: Math.min(s.shaded, p) }))} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
        <KaTeX tex={`\\frac{${a.shaded}}{${a.parts}} \\; ${Math.abs(va - vb) < eps ? "=" : va > vb ? ">" : "<"} \\; \\frac{${b.shaded}}{${b.parts}}`} />
        <span className="text-muted">— {verdict}</span>
      </div>
      <p className="meta mt-2">Same shaded fraction, different-sized pieces — the pieces only match when the parts match.</p>
    </div>
  );
}

function SplitMode({ initialParts, initialShaded, maxParts, label }: { initialParts: number; initialShaded: number; maxParts: number; label: string }) {
  const [parts, setParts] = useState(initialParts);
  const [shaded, setShaded] = useState(initialShaded);

  const split = () => {
    if (parts * 2 > maxParts) return;
    setParts((p) => p * 2);
    setShaded((s) => s * 2);
  };
  const join = () => {
    if (parts % 2 !== 0) return;
    setParts((p) => p / 2);
    setShaded((s) => s / 2);
  };

  return (
    <div className="widget-surface" aria-label={`Equivalent fractions: ${shaded}/${parts}`}>
      <p className="mb-3 text-muted">{label}</p>
      <ShadeBar
        parts={parts}
        shaded={shaded}
        onCell={(i) => setShaded(i + 1 === shaded ? i : i + 1)}
        ariaLabel={`Bar split into ${parts} equal parts with ${shaded} shaded`}
      />
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <button type="button" onClick={split} disabled={parts * 2 > maxParts} className="btn btn-ghost text-xs" aria-label="Split every part in two">
          Split every part in 2
        </button>
        <button type="button" onClick={join} disabled={parts % 2 !== 0} className="btn btn-ghost text-xs" aria-label="Join parts back in pairs">
          Join pairs
        </button>
        <span className="ml-auto text-lg font-semibold">
          <KaTeX tex={`\\frac{${shaded}}{${parts}}`} />
        </span>
      </div>
      <div className="mt-3">
        <LinkedReadout num={shaded} den={parts} />
      </div>
      <p className="meta mt-2">
        Splitting multiplies <em>both</em> numbers by 2, so the shaded amount never changes — only the piece size does.
      </p>
    </div>
  );
}

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

function HowManyMode({ dividend, divisor, label }: { dividend: [number, number]; divisor: [number, number]; label: string }) {
  const [dn, dd] = dividend;
  const [sn, sd] = divisor;
  // The row below spans ONE WHOLE, so each sn/sd unit bar is (sn/sd)·100% of the
  // row's width — a true quarter of the width for a 1/4 bar, aligned with the
  // shaded amount bar above. (Equal-width cells made a 1/4 bar look like 1/2.)
  const unitPct = (sn / sd) * 100;
  const exact = (dn / dd) / (sn / sd);
  const fits = Math.floor(exact + 1e-9);
  const leftover = exact - fits;
  const hasLeftover = leftover > 1e-9;
  const slots = fits + (hasLeftover ? 1 : 0);
  const [used, setUsed] = useState(0);
  const loN = dn * sd - fits * dd * sn;
  const loD = dd * sn;
  const loG = gcd(Math.abs(loN), Math.abs(loD)) || 1;

  return (
    <div className="widget-surface" aria-label={`How many ${sn}/${sd} bars fit into ${dn}/${dd}`}>
      <p className="mb-3 text-muted">{label}</p>
      <p className="mb-1 text-xs uppercase tracking-wide text-muted">The whole amount: {dn}/{dd} (the whole row below is 1)</p>
      <ShadeBar parts={dd} shaded={dn} onCell={() => {}} ariaLabel={`Amount bar: ${dn} of ${dd} parts shaded`} />
      <p className="mb-1 mt-4 text-xs uppercase tracking-wide text-muted">Unit bars of {sn}/{sd} stacked along it — each is {sn}/{sd} of the whole</p>
      <div className="flex h-10 overflow-hidden rounded-lg border border-token" role="img" aria-label={`${used} of ${slots} unit bars of ${sn}/${sd} placed along the whole`}>
        {Array.from({ length: slots }, (_, i) => (
          <div
            key={i}
            className="h-full transition-colors"
            style={{
              width: `${hasLeftover && i === slots - 1 ? leftover * unitPct : unitPct}%`,
              backgroundColor: i < used ? "var(--warn)" : "var(--bg-panel)",
              borderRight: "1px dashed var(--border)",
            }}
          />
        ))}
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <button type="button" onClick={() => setUsed((u) => Math.max(0, u - 1))} className="btn btn-ghost text-xs" aria-label="Remove one unit bar">− one {sn}/{sd} bar</button>
        <button type="button" onClick={() => setUsed((u) => Math.min(slots, u + 1))} className="btn btn-ghost text-xs" aria-label="Add one unit bar">+ one {sn}/{sd} bar</button>
        <span className="ml-auto font-mono text-sm" data-testid="howmany-count">
          {dn}/{dd} ÷ {sn}/{sd} = <strong>{used}</strong>{" "}
          {used === slots
            ? hasLeftover
              ? `— ${fits} fit, plus a ${loN / loG}/${loD / loG} piece`
              : "— full! ✓"
            : fits === 0
              ? "— not one whole bar fits yet"
              : `— ${fits} fit exactly`}
        </span>
      </div>
      <p className="meta mt-2">Dividing by a fraction asks: how many of <em>these</em> pieces fit in <em>that</em> amount?</p>
    </div>
  );
}

function RegionsMode({ regions, total, label }: { regions: Region[]; total: number; label: string }) {
  const known = regions.filter((r) => !r.leftover);
  const leftoverCount = Math.max(0, total - known.reduce((s, r) => s + r.count, 0));
  const counts = regions.map((r) => (r.leftover ? leftoverCount : r.count));
  const [sel, setSel] = useState<number | null>(null);
  const selCount = sel !== null ? counts[sel] : 0;

  return (
    <div className="widget-surface" aria-label={`Region bar of ${total} items split into ${regions.length} labelled regions`}>
      <p className="mb-3 text-muted">{label}</p>
      <div className={`flex overflow-hidden rounded-lg border border-token ${BAR_H}`} role="img" aria-label={`Bar of ${total} items: ${regions.map((r, i) => `${r.label} ${counts[i]}`).join(", ")}`}>
        {regions.map((r, i) => (
          <button
            key={r.label}
            type="button"
            onClick={() => setSel((s) => (s === i ? null : i))}
            aria-label={`${r.label}: ${counts[i]} of ${total} items${sel === i ? " (selected)" : ""}`}
            aria-pressed={sel === i}
            className="relative flex items-center justify-center overflow-hidden text-xs font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            style={{
              width: `${(counts[i] / Math.max(1, total)) * 100}%`,
              backgroundColor: sel === i ? "var(--warn)" : i % 2 === 0 ? "var(--primary)" : "var(--success)",
              fillOpacity: 1,
              opacity: sel === null || sel === i ? 1 : 0.45,
              borderRight: i < regions.length - 1 ? "1px solid var(--border)" : "none",
              color: "var(--fg)",
            }}
          >
            {counts[i]}
          </button>
        ))}
      </div>
      <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted">
        {regions.map((r, i) => (
          <span key={r.label} className={sel === i ? "font-semibold text-[var(--fg)]" : ""}>
            {r.label}: {counts[i]}
            {r.leftover && counts[i] === 0 ? " (none left)" : ""}
          </span>
        ))}
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-3">
        {sel !== null ? (
          <LinkedReadout num={selCount} den={total} />
        ) : (
          <p className="text-sm text-muted" data-testid="regions-readout">Tap a region to see it as a fraction of {total}.</p>
        )}
      </div>
      <p className="meta mt-2">The regions tile the whole: their counts add up to {total}. A region over the total is a probability or a share.</p>
    </div>
  );
}



