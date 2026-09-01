"use client";

import { useState } from "react";
import { Math as KaTeX } from "@/components/math/Math";

interface VennDiagramProps {
  mode?: "shade" | "items";
  label?: string;
  aLabel?: string;
  bLabel?: string;
  /** shade mode: counts shown beside each region [A only, B only, both, neither]. */
  counts?: [number, number, number, number];
  /** items mode: items that cycle between zones when tapped. */
  items?: { label: string; zone?: "A" | "B" | "both" | "out" }[];
}

type Zone = "A" | "B" | "both" | "out";

const AX = 115;
const BX = 185;
const CY = 100;
const R = 62;
const TX = 150;
const DY = Math.sqrt(R * R - 35 * 35);
const TY = CY - DY;
const BY = CY + DY;

const PATHS: Record<"A" | "B" | "both", string> = {
  A: `M ${TX} ${TY} A ${R} ${R} 0 1 0 ${TX} ${BY} A ${R} ${R} 0 0 1 ${TX} ${TY} Z`,
  B: `M ${TX} ${TY} A ${R} ${R} 0 1 1 ${TX} ${BY} A ${R} ${R} 0 0 0 ${TX} ${TY} Z`,
  // Lens A∩B: down A's right arc, back up B's LEFT (minor) arc. The old `0 1 0`
  // flags traced B's major arc, which shaded B∖A instead of the overlap.
  both: `M ${TX} ${TY} A ${R} ${R} 0 0 1 ${TX} ${BY} A ${R} ${R} 0 0 1 ${TX} ${TY} Z`,
};

const ZONE_FILL: Record<Zone, string> = { A: "var(--primary)", B: "var(--warn)", both: "var(--success)", out: "var(--border)" };

function setNotation(on: Record<Zone, boolean>): string | null {
  const { A, B, both, out } = on;
  if (!A && !B && !both && !out) return "\\varnothing";
  if (A && both && !B && !out) return "A";
  if (B && both && !A && !out) return "B";
  if (A && B && both && !out) return "A \\cup B";
  if (both && !A && !B && !out) return "A \\cap B";
  if (out && !A && !B && !both) return "(A \\cup B)'";
  if (A && B && both && out) return "\\xi";
  if (A && !both && !B && !out) return "A \\setminus B";
  if (B && !both && !A && !out) return "B \\setminus A";
  return null;
}

/** Interactive Venn diagram with shaded-set and item-placing modes. */
export function VennDiagram({
  mode = "shade",
  label = "Click the regions to shade them.",
  aLabel = "A",
  bLabel = "B",
  counts = [4, 3, 2, 1],
  items = [
    { label: "2", zone: "both" },
    { label: "3", zone: "B" },
    { label: "4", zone: "A" },
    { label: "5", zone: "B" },
    { label: "6", zone: "both" },
    { label: "7", zone: "out" },
  ],
}: VennDiagramProps) {
  if (mode === "items") return <ItemsMode aLabel={aLabel} bLabel={bLabel} items={items} label={label} />;
  return <ShadeMode aLabel={aLabel} bLabel={bLabel} counts={counts} label={label} />;
}

function ShadeMode({ aLabel, bLabel, counts, label }: { aLabel: string; bLabel: string; counts: [number, number, number, number]; label: string }) {
  const [on, setOn] = useState<Record<Zone, boolean>>({ A: true, B: false, both: true, out: false });
  const toggle = (z: Zone) => setOn((o) => ({ ...o, [z]: !o[z] }));
  const notation = setNotation(on);
  const regions: { z: Zone; name: string; count: number }[] = [
    { z: "A", name: `${aLabel} only`, count: counts[0] },
    { z: "B", name: `${bLabel} only`, count: counts[1] },
    { z: "both", name: "in both", count: counts[2] },
    { z: "out", name: "neither", count: counts[3] },
  ];

  return (
    <div className="widget-surface" aria-label={`Venn diagram with shaded regions: ${regions.filter((r) => on[r.z]).map((r) => r.name).join(", ") || "none"}`}>
      <p className="mb-3 text-muted">{label}</p>
      <svg viewBox="0 0 300 200" className="mx-auto w-full max-w-sm" role="img" aria-label={`Two overlapping circles labelled ${aLabel} and ${bLabel}; click the regions to shade them`}>
        <rect x="0" y="0" width="300" height="200" fill={on.out ? ZONE_FILL.out : "transparent"} fillOpacity={on.out ? 0.18 : 0} className="cursor-pointer" onClick={() => toggle("out")} aria-label="Outside both circles — click to shade the neither region" />
        {(["A", "B", "both"] as const).map((z) => (
          <path
            key={z}
            d={PATHS[z]}
            fill={on[z] ? ZONE_FILL[z] : "transparent"}
            fillOpacity={on[z] ? 0.3 : 0}
            className="cursor-pointer"
            onClick={() => toggle(z)}
            aria-label={`${z === "both" ? "Region in both circles" : `Region ${z} only`} — click to toggle shading`}
          />
        ))}
        <circle cx={AX} cy={CY} r={R} fill="none" stroke="var(--border)" strokeWidth="2" pointerEvents="none" />
        <circle cx={BX} cy={CY} r={R} fill="none" stroke="var(--border)" strokeWidth="2" pointerEvents="none" />
        <text x="58" y="28" fontSize="12" fill="var(--fg)" fontWeight="600">{aLabel}</text>
        <text x="222" y="28" fontSize="12" fill="var(--fg)" fontWeight="600">{bLabel}</text>
      </svg>
      <div className="mt-3 flex flex-wrap justify-center gap-2 text-xs">
        {regions.map((r) => (
          <button key={r.z} type="button" onClick={() => toggle(r.z)} aria-pressed={on[r.z]} aria-label={`${r.name}: ${r.count} — toggle shading`} className={`rounded-[8px] border px-2 py-1 ${on[r.z] ? "border-[var(--primary)] text-[var(--primary)]" : "border-token text-muted"}`}>
            {r.name}: {r.count}
          </button>
        ))}
      </div>
      <p className="mt-3 text-center text-sm" data-testid="venn-notation">
        {notation ? (
          <>
            <KaTeX tex={notation} /> <span className="text-muted">— that is exactly the shaded set</span>
          </>
        ) : (
          <span className="text-muted">Custom shading — name it yourself, or toggle regions to match a set.</span>
        )}
      </p>
    </div>
  );
}

function ItemsMode({ aLabel, bLabel, items, label }: { aLabel: string; bLabel: string; items: { label: string; zone?: Zone }[]; label: string }) {
  const [zones, setZones] = useState<Zone[]>(items.map((it) => it.zone ?? "out"));
  const cycle: Record<Zone, Zone> = { A: "both", both: "B", B: "out", out: "A" };
  const counts = (z: Zone) => zones.filter((v) => v === z).length;
  const slot = (zi: number, zone: Zone): { x: number; y: number } => {
    const i = zones.slice(0, zi).filter((v) => v === zone).length;
    if (zone === "A") return { x: 68 + (i % 3) * 24, y: 78 + Math.floor(i / 3) * 26 };
    if (zone === "B") return { x: 188 + (i % 3) * 24, y: 78 + Math.floor(i / 3) * 26 };
    if (zone === "both") return { x: 138 + (i % 2) * 24, y: 84 + Math.floor(i / 2) * 26 };
    return { x: 26 + i * 38, y: 188 };
  };
  const zoneColor: Record<Zone, string> = { A: "var(--primary)", B: "var(--warn)", both: "var(--success)", out: "var(--muted)" };

  return (
    <div className="widget-surface" aria-label={`Venn diagram items: ${counts("A")} ${aLabel} only, ${counts("both")} in both, ${counts("B")} ${bLabel} only, ${counts("out")} outside`}>
      <p className="mb-3 text-muted">{label}</p>
      <svg viewBox="0 0 300 200" className="mx-auto w-full max-w-sm" role="img" aria-label={`Items placed in a Venn diagram of ${aLabel} and ${bLabel}; tap an item to move it one zone along`}>
        <circle cx={AX} cy={CY} r={R} fill="var(--bg-panel)" stroke="var(--border)" strokeWidth="2" />
        <circle cx={BX} cy={CY} r={R} fill="transparent" stroke="var(--border)" strokeWidth="2" />
        <text x="58" y="28" fontSize="12" fill="var(--fg)" fontWeight="600">{aLabel}</text>
        <text x="222" y="28" fontSize="12" fill="var(--fg)" fontWeight="600">{bLabel}</text>
        {items.map((it, i) => {
          const s = slot(i, zones[i]);
          return (
            <g
              key={`${it.label}-${i}`}
              onClick={() => setZones((zs) => zs.map((z, j) => (j === i ? cycle[z] : z)))}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setZones((zs) => zs.map((z, j) => (j === i ? cycle[z] : z))); } }}
              className="cursor-pointer"
              role="button"
              tabIndex={0}
              aria-label={`Item ${it.label}, currently ${zones[i] === "both" ? "in both circles" : zones[i] === "out" ? "outside" : `${zones[i]} only`} — tap to move it`}
            >
              <circle cx={s.x} cy={s.y} r="11" fill={zoneColor[zones[i]]} fillOpacity="0.85" stroke="var(--bg)" strokeWidth="1.5" />
              <text x={s.x} y={s.y + 4} textAnchor="middle" fontSize="10" fill="var(--bg)" fontWeight="700">{it.label}</text>
            </g>
          );
        })}
      </svg>
      <p className="mt-3 text-center text-sm" data-testid="venn-counts">
        <span className="font-semibold">{aLabel} only: {counts("A")}</span> · in both: {counts("both")} · <span className="font-semibold">{bLabel} only: {counts("B")}</span> · neither: {counts("out")}
      </p>
      <p className="meta mt-2">Tap an item to move it: {aLabel} → both → {bLabel} → neither → back. The "in both" circle is where the sets overlap.</p>
    </div>
  );
}


