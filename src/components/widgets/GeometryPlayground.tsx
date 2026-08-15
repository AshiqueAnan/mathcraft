"use client";

import { useState } from "react";

interface Pt { x: number; y: number; }

/** GeometryPlayground — draggable triangle vertices with live angle/length readouts. */
export function GeometryPlayground() {
  const [pts, setPts] = useState<Pt[]>([{ x: 80, y: 220 }, { x: 40, y: 80 }, { x: 260, y: 120 }]);
  const drag = (i: number, nx: number, ny: number) => {
    setPts((p) => p.map((q, idx) => (idx === i ? { x: Math.max(10, Math.min(290, nx)), y: Math.max(10, Math.min(290, ny)) } : q)));
  };

  const [[A, B, C]] = [pts];
  const d = (a: Pt, b: Pt) => Math.hypot(a.x - b.x, a.y - b.y);
  const ab = d(A, B), bc = d(B, C), ca = d(C, A);
  // angle at B via law of cosines
  const angleB = Math.acos(Math.max(-1, Math.min(1, (ab * ab + bc * bc - ca * ca) / (2 * ab * bc)))) * 180 / Math.PI;
  const angleA = Math.acos(Math.max(-1, Math.min(1, (ab * ab + ca * ca - bc * bc) / (2 * ab * ca)))) * 180 / Math.PI;
  const angleC = 180 - angleA - angleB;
  const sum = angleA + angleB + angleC;

  return (
    <div className="widget-surface" aria-label="Geometry playground — drag the vertices">
      <svg viewBox="0 0 300 300" className="mx-auto w-full max-w-xs" role="img" aria-label={`Triangle with angles ${angleA.toFixed(0)}, ${angleB.toFixed(0)}, ${angleC.toFixed(0)}`}>
        <polygon points={`${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y}`} fill="rgba(79,124,255,0.08)" stroke="var(--primary)" strokeWidth="2" />
        {pts.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r={10} fill="var(--primary)" stroke="var(--bg)" strokeWidth="2"
            onPointerDown={(e) => {
              const el = e.currentTarget;
              const rect = el.ownerSVGElement!.getBoundingClientRect();
              const handler = (ev: PointerEvent) => drag(
                i,
                ((ev.clientX - rect.left) / rect.width) * 300,
                ((ev.clientY - rect.top) / rect.height) * 300
              );
              const up = () => { window.removeEventListener("pointermove", handler); window.removeEventListener("pointerup", up); };
              window.addEventListener("pointermove", handler);
              window.addEventListener("pointerup", up);
              e.preventDefault();
            }}
            className="cursor-grab touch-none"
            tabIndex={0}
            onKeyDown={(e) => {
              const step = 4;
              const k = e.key;
              if (k === "ArrowUp") drag(i, p.x, p.y - step);
              if (k === "ArrowDown") drag(i, p.x, p.y + step);
              if (k === "ArrowLeft") drag(i, p.x - step, p.y);
              if (k === "ArrowRight") drag(i, p.x + step, p.y);
            }}
          />
        ))}
      </svg>
      <div className="mt-3 grid grid-cols-3 gap-2 text-center text-sm">
        <span className="text-muted">A: {angleA.toFixed(0)}°</span>
        <span className="text-muted">B: {angleB.toFixed(0)}°</span>
        <span className="text-muted">C: {angleC.toFixed(0)}°</span>
      </div>
      <p className="meta mt-2">Sum of angles: <strong>{sum.toFixed(0)}°</strong> — no matter how you drag.</p>
    </div>
  );
}