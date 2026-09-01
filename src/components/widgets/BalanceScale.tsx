"use client";

import { useState } from "react";
import { Math as KaTeX } from "@/components/math/Math";

interface Chip {
  id: string;
  /** Numeric weight on the pan. Variable chips weigh coef × x. */
  value: number;
  side: "left" | "right";
  variable?: boolean;
}

interface BalanceScaleProps {
  label?: string;
  /** Starting chips pinned to each pan. */
  chips?: Chip[];
  /** Buttons that apply the same operation to both pans. */
  actions?: { label: string; op: "+" | "−" | "×" | "÷"; n: number }[];
  /** The hidden variable's true value. */
  substitute?: { variable: string; value: number; buttonLabel: string };
}

const PAN_Y = 140;

const fmt = (v: number) => String(Number(v.toFixed(2)));

function chipLabel(c: Chip, varName: string): string {
  if (c.variable) return c.value === 1 ? varName : `${Number(c.value.toFixed(2))}${varName}`;
  return c.value < 0 ? `−${Number((-c.value).toFixed(2))}` : `${Number(c.value.toFixed(2))}`;
}

function panExpression(side: "left" | "right", chips: Chip[], varName: string): string {
  const cs = chips.filter((c) => c.side === side);
  if (cs.length === 0) return "0";
  return cs.map((c, i) => {
    const l = chipLabel(c, varName);
    if (i === 0) return l.startsWith("−") ? l : l;
    return l.startsWith("−") ? ` − ${l.slice(1)}` : ` + ${l}`;
  }).join("");
}

/** BalanceScale — a two-pan scale for "do to both sides" equation reasoning. */
export function BalanceScale({
  label = "Move chips and act on both sides — keep the scale level.",
  chips = [
    { id: "x", value: 1, side: "left", variable: true },
    { id: "c1", value: 5, side: "left" },
    { id: "n1", value: 17, side: "right" },
  ],
  actions = [
    { label: "− 5 both sides", op: "−", n: 5 },
    { label: "+ 5 both sides", op: "+", n: 5 },
  ],
  substitute = { variable: "x", value: 12, buttonLabel: "Reveal x" },
}: BalanceScaleProps) {
  const [base, setBase] = useState<Chip[]>(chips);
  const [extra, setExtra] = useState<Chip[]>([]);
  const [revealed, setRevealed] = useState(false);
  const all = [...base, ...extra];
  const xVal = substitute?.value ?? 0;
  const varName = substitute?.variable ?? "x";
  const weight = (c: Chip) => (c.variable ? c.value * xVal : c.value);
  const left = all.filter((c) => c.side === "left").reduce((s, c) => s + weight(c), 0);
  const right = all.filter((c) => c.side === "right").reduce((s, c) => s + weight(c), 0);
  const diff = left - right;
  const tilt = Math.max(-7, Math.min(7, diff * 1.2));
  const balanced = Math.abs(diff) < 1e-9;

  const moveChip = (id: string) => {
    setBase((bs) => bs.map((c) => (c.id === id ? { ...c, side: c.side === "left" ? "right" : "left" } : c)));
    setExtra((ex) => ex.map((c) => (c.id === id ? { ...c, side: c.side === "left" ? "right" : "left" } : c)));
  };
  const reset = () => { setBase(chips); setExtra([]); setRevealed(false); };

  const applyAction = (op: "+" | "−" | "×" | "÷", n: number) => {
    if (op === "×" || op === "÷") {
      const k = op === "×" ? n : 1 / n;
      setBase((bs) => bs.map((c) => ({ ...c, value: Number((c.value * k).toFixed(6)) })));
      setExtra((ex) => ex.map((c) => ({ ...c, value: Number((c.value * k).toFixed(6)) })));
      return;
    }
    // "+" or "−": add or remove one plain-number chip on each side, pans in sync.
    const adjust = (side: "left" | "right") => {
      if (op === "+") {
        setExtra((ex) => [...ex, { id: `p${side}-${Date.now()}-${ex.length}`, value: n, side }]);
        return;
      }
      const exIdx = extra.findIndex((c) => c.side === side && !c.variable && c.value === n);
      if (exIdx >= 0) {
        setExtra((ex) => ex.filter((_, i) => i !== exIdx));
        return;
      }
      const bChip = base.find((c) => c.side === side && !c.variable && c.value === n);
      if (bChip) {
        setBase((bs) => bs.filter((c) => c.id !== bChip.id));
        return;
      }
      setExtra((ex) => [...ex, { id: `x${side}-${Date.now()}-${ex.length}`, value: -n, side }]);
    };
    adjust("left");
    adjust("right");
  };

  const leftChips = all.filter((c) => c.side === "left");
  const rightChips = all.filter((c) => c.side === "right");
  const texOf = (s: string) => s.replace(/−/g, "-");

  const Token = ({ c, x, y }: { c: Chip; x: number; y: number }) => (
    <g>
      {/* Solid high-contrast chips: numbers white-on-blue, the variable dark-on-amber. */}
      <rect x={x - 16} y={y - 9} width="32" height="18" rx="5" fill={c.variable ? "var(--warn)" : "var(--primary)"} stroke="var(--bg-panel-raised)" strokeWidth="1.5" />
      <text x={x} y={y + 4} textAnchor="middle" fontSize="10" fontWeight="700" fill={c.variable ? "#0b0f14" : "#ffffff"}>{chipLabel(c, varName)}</text>
    </g>
  );
  const tokenRow = (chips: Chip[], cx: number, y: number, startIdx: number) =>
    chips.slice(startIdx, startIdx + 3).map((c, i, arr) => <Token key={c.id} c={c} x={cx + (i - (arr.length - 1) / 2) * 22} y={y} />);

  return (
    <div className="widget-surface" aria-label={`Balance scale showing ${panExpression("left", all, varName)} on the left and ${panExpression("right", all, varName)} on the right; ${balanced ? "perfectly balanced" : diff > 0 ? "left side heavier" : "right side heavier"}`}>
      <p className="mb-3 text-muted">{label}</p>
      <svg viewBox="0 0 300 175" className="mx-auto w-full max-w-sm" role="img" aria-label={`Balance scale: left pan ${panExpression("left", all, varName)}, right pan ${panExpression("right", all, varName)}`}>
        <rect x="135" y="121" width="30" height="8" fill="var(--border)" />
        <polygon points="150,128 140,158 160,158" fill="var(--border)" />
        <line x1="120" y1="158" x2="180" y2="158" stroke="var(--border)" strokeWidth="2" />
        <g transform={`rotate(${tilt} 150 118)`} style={{ transition: "transform 0.45s ease" }}>
          <rect x="55" y="115" width="190" height="6" rx="3" fill="var(--primary)" />
          <line x1="55" y1="121" x2="30" y2={PAN_Y} stroke="var(--border)" strokeWidth="1" />
          <line x1="55" y1="121" x2="80" y2={PAN_Y} stroke="var(--border)" strokeWidth="1" />
          <line x1="245" y1="121" x2="220" y2={PAN_Y} stroke="var(--border)" strokeWidth="1" />
          <line x1="245" y1="121" x2="270" y2={PAN_Y} stroke="var(--border)" strokeWidth="1" />
          <path d={`M 30 ${PAN_Y} Q 55 ${PAN_Y + 24} 80 ${PAN_Y} Z`} fill="var(--bg-panel)" stroke="var(--border)" strokeWidth="1.5" />
          <path d={`M 220 ${PAN_Y} Q 245 ${PAN_Y + 24} 270 ${PAN_Y} Z`} fill="var(--bg-panel)" stroke="var(--border)" strokeWidth="1.5" />
          {tokenRow(leftChips, 55, PAN_Y - 9, 0)}
          {tokenRow(leftChips, 55, PAN_Y - 25, 3)}
          {tokenRow(rightChips, 245, PAN_Y - 9, 0)}
          {tokenRow(rightChips, 245, PAN_Y - 25, 3)}
        </g>
      </svg>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <p className="mb-2 text-xs uppercase tracking-wide text-muted">Chips — tap to move across</p>
          <div className="flex flex-wrap gap-2">
            {all.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => moveChip(c.id)}
                aria-label={`Chip ${chipLabel(c, varName)} is on the ${c.side} pan — move it to the ${c.side === "left" ? "right" : "left"} pan`}
                className={`rounded-[8px] border px-2 py-1 text-xs ${c.variable ? "border-[var(--warn)] text-[var(--warn)]" : "border-token"}`}
              >
                {chipLabel(c, varName)} <span aria-hidden="true">⇄</span>
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-2 text-xs uppercase tracking-wide text-muted">Do the same to both sides</p>
          <div className="flex flex-wrap gap-2">
            {actions.map((a) => (
              <button key={a.label} type="button" onClick={() => applyAction(a.op, a.n)} className="btn btn-ghost text-xs" aria-label={`${a.label} on both pans`}>
                {a.label}
              </button>
            ))}
            {substitute && !revealed && (
              <button type="button" onClick={() => setRevealed(true)} className="btn btn-ghost text-xs" aria-label={substitute.buttonLabel}>
                {substitute.buttonLabel}
              </button>
            )}
            <button type="button" onClick={reset} className="btn btn-ghost text-xs" aria-label="Reset the scale">↺ Reset</button>
          </div>
        </div>
      </div>
      <p className="mt-4 text-center text-sm" data-testid="balance-status">
        {balanced ? (
          <span className="text-success">Balanced ✓ — both pans weigh the same</span>
        ) : diff > 0 ? (
          <span>Left pan is heavier by {fmt(diff)}</span>
        ) : (
          <span>Right pan is heavier by {fmt(-diff)}</span>
        )}
      </p>
      <p className="mt-2 text-center text-sm">
        <KaTeX tex={`${texOf(panExpression("left", all, varName))} = ${texOf(panExpression("right", all, varName))}`} />
      </p>
      <p className="meta mt-2">
        {revealed
          ? `${varName} = ${substitute?.value ?? "?"} — every ${varName} chip now weighs ${substitute?.value ?? "?"}.`
          : `${varName} hides its value, but the scale still feels its weight. Whatever you do to one pan, do to the other.`}
      </p>

    </div>
  );
}
