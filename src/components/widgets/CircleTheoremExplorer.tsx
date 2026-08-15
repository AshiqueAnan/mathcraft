"use client";

import { useState } from "react";

interface Pt { x: number; y: number; }

/** CircleTheoremExplorer — draggable circumference points, live inscribed/central angles. */
export function CircleTheoremExplorer() {
  const cx = 150, cy = 150, r = 110;
  const angleAt = (p: Pt, q: Pt, c: Pt): number => {
    const a = Math.atan2(p.y - c.y, p.x - c.x);
    const b = Math.atan2(q.y - c.y, q.x - c.x);
    let diff = Math.abs(a - b);
    if (diff > Math.PI) diff = 2 * Math.PI - diff;
    return diff * 180 / Math.PI;
  };
  const onCircle = (a: number): Pt => ({ x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) });

  const [pa0, setPa0] = useState(-0.5);
  const [pb0, setPb0] = useState(0.8);
  const [pc0, setPc0] = useState(2.4);

  const A = onCircle(pa0), B = onCircle(pb0), C = onCircle(pc0);
  const inscribed = angleAt(A, B, C);
  const central = angleAt(A, B, { x: cx, y: cy });

  return (
    <div className="widget-surface" aria-label="Circle theorem explorer">
      <svg viewBox="0 0 300 300" className="mx-auto w-full max-w-xs" role="img" aria-label={`Inscribed ${inscribed.toFixed(0)}°, central ${central.toFixed(0)}°`}>
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="var(--border)" strokeWidth="2" />
        <path d={`M ${A.x} ${A.y} A ${r} ${r} 0 0 1 ${B.x} ${B.y}`} fill="none" stroke="var(--warn)" strokeWidth="2" />
        <line x1={cx} y1={cy} x2={A.x} y2={A.y} stroke="var(--warn)" strokeWidth="1" />
        <line x1={cx} y1={cy} x2={B.x} y2={B.y} stroke="var(--warn)" strokeWidth="1" />
        <polygon points={`${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y}`} fill="rgba(79,124,255,0.08)" stroke="var(--primary)" strokeWidth="2" />
        {([ [A, setPa0], [B, setPb0], [C, setPc0] ] as const).map(([p, setter], i) => (
          <circle key={i} cx={p.x} cy={p.y} r={10} fill="var(--primary)" stroke="var(--bg)" strokeWidth="2"
            onPointerDown={(e) => {
              const hand = (ev: PointerEvent) => {
                const rect = (e.currentTarget as unknown as SVGElement).ownerSVGElement!.getBoundingClientRect();
                setter(Math.atan2(((ev.clientY - rect.top) / rect.height) * 300 - cy, ((ev.clientX - rect.left) / rect.width) * 300 - cx));
              };
              const up = () => { window.removeEventListener("pointermove", hand); window.removeEventListener("pointerup", up); };
              window.addEventListener("pointermove", hand);
              window.addEventListener("pointerup", up);
              e.preventDefault();
            }}
            className="cursor-grab touch-none"
          />
        ))}
      </svg>
      <div className="mt-3 flex justify-center gap-4 text-sm">
        <span className="text-muted">Inscribed: <strong>{inscribed.toFixed(0)}°</strong></span>
        <span className="text-muted">Central: <strong>{central.toFixed(0)}°</strong></span>
      </div>
      <p className="meta mt-2">Drag the points — the inscribed angle stays half the central one.</p>
    </div>
  );
}