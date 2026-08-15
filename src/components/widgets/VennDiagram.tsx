"use client";
import { useState } from "react";

type Region = "A" | "B" | "both" | "neither";

interface Props {
  aLabel?: string;
  bLabel?: string;
  counts?: [number, number, number, number];
}

/** VennDiagram — two sets, clickable regions, live set-notation readout, count mode. */
export function VennDiagram({ aLabel = "A", bLabel = "B", counts = [12, 8, 5, 10] }: Props) {
  const [shaded, setShaded] = useState<Region[]>(["both"]);
  const toggle = (r: Region) => setShaded((s) => (s.includes(r) ? s.filter((x) => x !== r) : [...s, r]));
  const chip = (r: Region) => (
    <button key={r} type="button" onClick={() => toggle(r)} aria-pressed={shaded.includes(r)}
      className={`rounded-full border px-3 py-1 text-xs ${shaded.includes(r) ? "border-[var(--primary)] bg-[var(--primary)]/15" : "border-token"}`}>
      {r}
    </button>
  );
  const labels: Record<Region, string> = { A: `A only (${counts[0]})`, B: `B only (${counts[1]})`, both: `A\u2229B (${counts[2]})`, neither: `outside (${counts[3]})` };

  return (
    <div className="widget-surface" aria-label="Venn diagram - two sets">
      <svg viewBox="0 0 300 200" className="mx-auto w-full max-w-sm" role="img" aria-label="Two overlapping circles A and B">
        <rect x="10" y="10" width="280" height="180" rx="12" fill={shaded.includes("neither") ? "var(--primary)" : "var(--bg-panel-raised)"} stroke="var(--border)" opacity={shaded.includes("neither") ? 0.25 : 1} />
        <path d="M 105 100 A 60 60 0 0 1 135 50 A 60 60 0 0 1 60 60 A 60 60 0 0 1 80 148 Z" fill={shaded.includes("A") ? "var(--primary)" : "transparent"} stroke="var(--primary)" strokeWidth="2" opacity={shaded.includes("A") ? 0.4 : 1} />
        <path d="M 195 100 A 60 60 0 0 1 165 50 A 60 60 0 0 0 240 60 A 60 60 0 0 0 220 148 Z" fill={shaded.includes("B") ? "var(--success)" : "transparent"} stroke="var(--success)" strokeWidth="2" opacity={shaded.includes("B") ? 0.4 : 1} />
        <ellipse cx="150" cy="100" rx="30" ry="58" fill={shaded.includes("both") ? "var(--warn)" : "transparent"} opacity={shaded.includes("both") ? 0.5 : 1} />
        <text x="60" y="105" textAnchor="middle" fontSize="14" fill="var(--text)">{aLabel}</text>
        <text x="240" y="105" textAnchor="middle" fontSize="14" fill="var(--text)">{bLabel}</text>
      </svg>
      <div className="mt-3 flex flex-wrap justify-center gap-2">{chip("A")}{chip("B")}{chip("both")}{chip("neither")}</div>
      <p className="meta mt-2 text-center">Shaded: {shaded.length ? shaded.map((r) => labels[r]).join(" · ") : "nothing"}</p>
    </div>
  );
}