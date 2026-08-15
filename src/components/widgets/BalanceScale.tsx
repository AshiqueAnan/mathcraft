"use client";

import { useState } from "react";

interface Props {
  left?: number;
  right?: number;
  chips?: { id: string; label: string; value: number }[];
}

/** BalanceScale — two pans, tilting beam; chips move between pans (U14 centerpiece). */
export function BalanceScale({ chips = [{ id: "3x", label: "3x", value: 3 }, { id: "5", label: "5", value: 5 }, { id: "x", label: "x", value: 1 }, { id: "2", label: "2", value: 2 }] }: Props) {
  const [leftChips, setLeftChips] = useState<string[]>(chips.map((c) => c.id));
  const [rightChips, setRightChips] = useState<string[]>([]);

  const total = (ids: string[]) => ids.reduce((s, id) => s + (chips.find((c) => c.id === id)?.value ?? 0), 0);
  const l = total(leftChips);
  const r = total(rightChips);
  const tilt = r > l ? 16 : l > r ? -16 : 0;

  const move = (id: string) => {
    if (leftChips.includes(id)) {
      setLeftChips((s) => s.filter((x) => x !== id));
      setRightChips((s) => [...s, id]);
    } else {
      setRightChips((s) => s.filter((x) => x !== id));
      setLeftChips((s) => [...s, id]);
    }
  };

  return (
    <div className="widget-surface" aria-label="Balance scale">
      <svg viewBox="0 0 320 160" className="mx-auto w-full max-w-sm" role="img" aria-label={`Left pan ${l}, right pan ${r}`}>
        <polygon points="150,120 170,120 160,140" fill="var(--border)" />
        <line x1="40" y1="80" x2="280" y2="80" stroke="var(--text)" strokeWidth="4" transform={`rotate(${tilt} 160 80)`} />
        <line x1="70" y1="80" x2="70" y2="106" stroke="var(--text)" strokeWidth="2" transform={`rotate(${tilt} 160 80)`} />
        <line x1="250" y1="80" x2="250" y2="106" stroke="var(--text)" strokeWidth="2" transform={`rotate(${tilt} 160 80)`} />
        <path d="M40 106 H100 V126 H40 Z" fill="var(--bg-panel-raised)" stroke="var(--border)" transform={`rotate(${tilt} 160 80)`} />
        <path d="M220 106 H280 V126 H220 Z" fill="var(--bg-panel-raised)" stroke="var(--border)" transform={`rotate(${tilt} 160 80)`} />
        <text x="70" y="146" textAnchor="middle" fontSize="14" fill="var(--text)">{l}</text>
        <text x="250" y="146" textAnchor="middle" fontSize="14" fill="var(--text)">{r}</text>
        <text x="160" y="20" textAnchor="middle" fontSize="13" fill="var(--text-muted)">{l === r ? "Balanced" : l > r ? "Left heavier" : "Right heavier"}</text>
      </svg>

      <div className="mt-3 grid grid-cols-2 gap-3">
        {(["left", "right"] as const).map((side) => (
          <div key={side} className="min-h-12 rounded-[12px] border border-token p-2">
            <p className="mb-1 text-[10px] uppercase tracking-wide text-muted">{side} pan</p>
            <div className="flex flex-wrap gap-1">
              {(side === "left" ? leftChips : rightChips).map((id) => {
                const c = chips.find((x) => x.id === id);
                return (
                  <button key={id} type="button" onClick={() => move(id)} className="rounded-full border border-token px-3 py-1 text-xs hover:border-[var(--primary)]">
                    {c?.label}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <p className="meta mt-2">Tap a term to move it to the other pan. What keeps it balanced?</p>
    </div>
  );
}