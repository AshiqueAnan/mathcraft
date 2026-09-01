"use client";

import { useState } from "react";
import { Math as KaTeX } from "@/components/math/Math";

interface TreeDiagramBuilderProps {
  variant?: "probability" | "factor";
  label?: string;
  /** probability variant: branch labels and outcome labels. */
  stage1Labels?: [string, string];
  stage2Labels?: [string, string];
  outcomes?: [string, string, string, string];
  /** factor variant: the number to factorise, with optional special readouts. */
  target?: number;
  squarePair?: boolean;
  sumTarget?: number;
}

const P1X = 24;
const S1X = 120;
const S2X = 216;
const OUTX = 322;
const Y_ROOT = 115;
const Y1 = [60, 170];
const Y2 = [34, 86, 144, 196];

function ptext(p: number): string {
  if (Math.abs(p - 0.5) < 1e-9) return "½";
  if (Math.abs(p - 0.25) < 1e-9) return "¼";
  if (Math.abs(p - 0.75) < 1e-9) return "¾";
  if (Math.abs(p - 1) < 1e-9) return "1";
  if (Math.abs(p) < 1e-9) return "0";
  return p.toFixed(2);
}

function ptex(p: number): string {
  if (Math.abs(p - 0.5) < 1e-9) return "\\frac{1}{2}";
  if (Math.abs(p - 0.25) < 1e-9) return "\\frac{1}{4}";
  if (Math.abs(p - 0.75) < 1e-9) return "\\frac{3}{4}";
  return p.toFixed(2);
}

function isPrime(n: number): boolean {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) if (n % i === 0) return false;
  return true;
}

/** Interactive probability-tree / factor-tree builder. */
export function TreeDiagramBuilder({
  variant = "probability",
  label = "Tap a leaf to trace its path.",
  stage1Labels = ["H", "T"],
  stage2Labels = ["H", "T"],
  outcomes = ["HH", "HT", "TH", "TT"],
  target = 60,
  squarePair = false,
  sumTarget,
}: TreeDiagramBuilderProps) {
  if (variant === "factor") return <FactorTree target={target} squarePair={squarePair} sumTarget={sumTarget} label={label} />;
  return <ProbabilityTree stage1Labels={stage1Labels} stage2Labels={stage2Labels} outcomes={outcomes} label={label} />;
}

function ProbabilityTree({ stage1Labels, stage2Labels, outcomes, label }: { stage1Labels: [string, string]; stage2Labels: [string, string]; outcomes: [string, string, string, string]; label: string }) {
  const [p1, setP1] = useState(0.5);
  const [p2, setP2] = useState(0.5);
  const [sel, setSel] = useState<number | null>(null);
  const probs = [p1 * p2, p1 * (1 - p2), (1 - p1) * p2, (1 - p1) * (1 - p2)];
  const seg1 = [p1, 1 - p1];
  const seg2 = [p2, 1 - p2];
  const on = (first: number, second: number) =>
    sel !== null && Math.floor(sel / 2) === first && sel % 2 === second;
  const lineStyle = (active: boolean) => ({ stroke: active ? "var(--primary)" : "var(--border)", strokeWidth: active ? 3 : 1.5 });

  return (
    <div className="widget-surface" aria-label={`Probability tree: first branch ${Math.round(p1 * 100)} percent, second branch ${Math.round(p2 * 100)} percent, four outcomes`}>
      <p className="mb-3 text-muted">{label}</p>
      <svg viewBox="0 0 350 220" className="mx-auto w-full max-w-md" role="img" aria-label="Two-stage probability tree with four leaves; tap a leaf to trace its path">
        {Y1.map((y, i) => (
          <line key={`s1${i}`} x1={P1X} y1={Y_ROOT} x2={S1X} y2={y} style={lineStyle(sel !== null && Math.floor(sel / 2) === i)} />
        ))}
        {Y1.map((y1, i) =>
          Y2.slice(i * 2, i * 2 + 2).map((y2, jj) => (
            <line key={`s2${i}${jj}`} x1={S1X} y1={y1} x2={S2X} y2={y2} style={lineStyle(on(i, jj))} />
          ))
        )}
        {[[P1X, Y_ROOT], [S1X, Y1[0]], [S1X, Y1[1]], [S2X, Y2[0]], [S2X, Y2[1]], [S2X, Y2[2]], [S2X, Y2[3]]].map(([x, y], i) => (
          <circle key={`n${i}`} cx={x} cy={y} r="4" fill="var(--primary)" />
        ))}
        {Y1.map((y, i) => (
          <text key={`l1${i}`} x={(P1X + S1X) / 2} y={(Y_ROOT + y) / 2 - 4} textAnchor="middle" fontSize="10" fill="var(--muted)">{ptext(seg1[i])}</text>
        ))}
        {Y1.map((y1, i) =>
          Y2.slice(i * 2, i * 2 + 2).map((y2, jj) => (
            <text key={`l2${i}${jj}`} x={(S1X + S2X) / 2} y={(y1 + y2) / 2 - 4} textAnchor="middle" fontSize="10" fill="var(--muted)">{ptext(seg2[jj])}</text>
          ))
        )}
        {outcomes.map((o, i) => (
          <g
            key={o}
            onClick={() => setSel(i)}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setSel(i); } }}
            className="cursor-pointer"
            role="button"
            tabIndex={0}
            aria-label={`Outcome ${o} with probability ${Math.round(probs[i] * 100)} percent — tap to trace its path`}
          >
            <circle cx={S2X} cy={Y2[i]} r="10" fill={sel === i ? "var(--primary)" : "var(--bg-panel)"} stroke="var(--border)" />
            <text x={OUTX} y={Y2[i] + 4} fontSize="11" fill={sel === i ? "var(--primary)" : "var(--fg)"} fontWeight={sel === i ? 700 : 400}>{o}</text>
          </g>
        ))}
      </svg>
      <div className="mt-3 flex flex-wrap gap-4 text-sm text-muted">
        <label className="flex items-center gap-2">
          P(first = {stage1Labels[0]}): <strong className="font-mono">{Math.round(p1 * 100)}%</strong>
          <input type="range" min={0} max={1} step={0.05} value={p1} onChange={(e) => setP1(Number(e.target.value))} className="w-28 accent-[var(--primary)]" aria-label="Probability of the first stage top branch" />
        </label>
        <label className="flex items-center gap-2">
          P(second = {stage2Labels[0]}): <strong className="font-mono">{Math.round(p2 * 100)}%</strong>
          <input type="range" min={0} max={1} step={0.05} value={p2} onChange={(e) => setP2(Number(e.target.value))} className="w-28 accent-[var(--primary)]" aria-label="Probability of the second stage top branch" />
        </label>
      </div>
      {sel !== null && (
        <p className="mt-3 text-sm" data-testid="tree-leaf">
          <KaTeX tex={`P(${outcomes[sel]}) = ${ptex(seg1[Math.floor(sel / 2)])} \\times ${ptex(seg2[sel % 2])} = ${ptex(probs[sel])} = ${Math.round(probs[sel] * 100)}\\%`} />
        </p>
      )}
      <p className="meta mt-2">Multiply along the branches — all four leaves always add to 1 ({Math.round((probs[0] + probs[1] + probs[2] + probs[3]) * 100)}% ✓) because every path is covered.</p>
    </div>
  );
}

interface FNode {
  v: number;
  l?: FNode;
  r?: FNode;
}

function leavesOf(n: FNode): FNode[] {
  return n.l ? [...leavesOf(n.l), ...leavesOf(n.r!)] : [n];
}

function leafPaths(n: FNode, acc: number[] = [], out: number[][] = []): number[][] {
  if (!n.l) {
    out.push(acc);
    return out;
  }
  leafPaths(n.l, [...acc, 0], out);
  leafPaths(n.r!, [...acc, 1], out);
  return out;
}

function splitLeaf(n: FNode, path: number[], a: number, b: number): FNode {
  if (path.length === 0) return { v: n.v, l: { v: a }, r: { v: b } };
  if (path[0] === 0) return n.l ? { ...n, l: splitLeaf(n.l, path.slice(1), a, b) } : n;
  return n.r ? { ...n, r: splitLeaf(n.r, path.slice(1), a, b) } : n;
}

function factorPairs(v: number): [number, number][] {
  const out: [number, number][] = [];
  for (let d = 2; d * d <= v; d++) if (v % d === 0) out.push([d, v / d]);
  return out;
}

function FactorTree({ target, squarePair, sumTarget, label }: { target: number; squarePair?: boolean; sumTarget?: number; label: string }) {
  const [root, setRoot] = useState<FNode>({ v: target });
  const [sel, setSel] = useState<number | null>(null);
  const ls = leavesOf(root);
  const paths = leafPaths(root);
  const primeList = ls.map((n) => n.v).sort((a, b) => a - b);
  const squared = primeList.filter((v, i) => squarePair && primeList[i + 1] === v);
  const luckyPair = sumTarget ? primeList.flatMap((a, i) => primeList.slice(i + 1).filter((b) => a + b === sumTarget).map((b) => [a, b] as const)) : [];

  const pos = new Map<string, { x: number; y: number }>();
  const leafY = (i: number) => 24 + ((i + 0.5) * 182) / ls.length;
  const layout = (n: FNode, path: number[], state: { li: number }): { x: number; y: number } => {
    const x = 34 + path.length * 62;
    if (!n.l) {
      const y = leafY(state.li++);
      pos.set(path.join(","), { x, y });
      return { x, y };
    }
    const l = layout(n.l, [...path, 0], state);
    const r = layout(n.r!, [...path, 1], state);
    const p = { x, y: (l.y + r.y) / 2 };
    pos.set(path.join(","), p);
    return p;
  };
  layout(root, [], { li: 0 });
  const selPath = sel !== null ? paths[sel] : null;
  const selNode = sel !== null && selPath ? leavesOf(root)[sel] : null;

  return (
    <div className="widget-surface" aria-label={`Factor tree breaking ${target} into prime factors: ${primeList.join(" times ")}`}>
      <p className="mb-3 text-muted">{label}</p>
      <svg viewBox="0 0 330 230" className="mx-auto w-full max-w-md" role="img" aria-label={`Factor tree for ${target}; composite leaves can be split further`}>
        {[...pos.keys()].map((key) => {
          const p = key === "" ? [] : key.split(",").map(Number);
          const here = pos.get(key)!;
          return p.length > 0 && (
            <g key={`e${key}`}>
              <line x1={pos.get(p.slice(0, -1).join(","))!.x} y1={pos.get(p.slice(0, -1).join(","))!.y} x2={here.x} y2={here.y} stroke="var(--border)" strokeWidth="1.5" />
            </g>
          );
        })}
        {[...pos.entries()].map(([key, p]) => {
          const path = key === "" ? [] : key.split(",").map(Number);
          const node = path.reduce<FNode | undefined>((n, d) => (d === 0 ? n?.l : n?.r), root);
          if (!node) return null;
          const leafIdx = node.l ? -1 : paths.findIndex((q) => q.join(",") === key);
          const isSel = selPath && selPath.join(",") === key;
          const prime = !node.l && isPrime(node.v);
          return (
            <g
              key={`n${key}`}
              onClick={() => !node.l && !prime && setSel(leafIdx)}
              className={node.l || prime ? "" : "cursor-pointer"}
              role={node.l || prime ? undefined : "button"}
              tabIndex={node.l || prime ? undefined : 0}
              aria-label={node.l ? `Node ${node.v}` : prime ? `Prime leaf ${node.v}` : `Composite leaf ${node.v} — tap to choose a factor pair`}
              onKeyDown={(e) => { if (!node.l && !prime && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); setSel(leafIdx); } }}
            >
              <circle cx={p.x} cy={p.y} r="15" fill={isSel ? "var(--warn)" : prime ? "var(--bg-panel)" : "var(--bg-panel)"} stroke={prime ? "var(--success)" : isSel ? "var(--warn)" : "var(--border)"} strokeWidth="1.5" />
              <text x={p.x} y={p.y + 4} textAnchor="middle" fontSize="10" fill="var(--fg)">{node.v}</text>
            </g>
          );
        })}
      </svg>
      {selNode && !isPrime(selNode.v) && (
        <div className="mt-2 flex flex-wrap items-center justify-center gap-2 text-xs">
          <span className="text-muted">Split {selNode.v} into:</span>
          {factorPairs(selNode.v).map(([a, b]) => (
            <button key={`${a}x${b}`} type="button" onClick={() => { setRoot((r) => splitLeaf(r, paths[sel!], a, b)); setSel(null); }} className="rounded-[8px] border border-token px-2 py-1 hover:border-[var(--primary)]" aria-label={`Split ${selNode.v} into ${a} and ${b}`}>
              {a} × {b}
            </button>
          ))}
        </div>
      )}
      <p className="mt-3 text-center text-sm" data-testid="tree-primes">
        <KaTeX tex={`${target} = ${primeList.join(" \\times ")}`} />
        {squared.length > 0 && <span> — a pair of {squared[0]}s: <KaTeX tex={`${squared[0]}^2`} /> ✓</span>}
        {luckyPair.length > 0 && <span> — {luckyPair[0][0]} and {luckyPair[0][1]} add to {sumTarget} ✓</span>}
      </p>
      <p className="meta mt-2">Keep splitting until every leaf is prime (green ring). A number has only one prime factorisation — the tree shape is your choice, the leaves are not.</p>
    </div>
  );
}


