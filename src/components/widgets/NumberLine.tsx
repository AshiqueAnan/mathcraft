"use client";

import { useRef, useState } from "react";

interface Props {
  min?: number;
  max?: number;
  markers?: number[];
  mode?: "point" | "inequality" | "hops";
  initialValue?: number;
}

/**
 * NumberLine — draggable point, inequality shading, jumps, and ×10 zoom.
 * Keyboard: arrows move the point. The zoom toolbar expands/shrinks the
 * visible window by powers of ten (the value itself never rewrites — only
 * the window changes), which is exactly the place-value idea in U1-L1.
 */
export function NumberLine({ min = -5, max = 5, markers = [], mode = "point", initialValue = 0 }: Props) {
  const [value, setValue] = useState(() => Math.max(min, Math.min(max, initialValue)));
  const [zoom, setZoom] = useState(0); // 0 = ×1, 1 = ×10, 2 = ×100, -1 = ×0.1 …
  const [dragging, setDragging] = useState(false);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const scale = Math.pow(10, zoom);
  const lo = min * scale;
  const hi = max * scale;
  const span = Math.max(1e-6, hi - lo);
  const px = (v: number) => ((v - lo) / span) * 100;
  const clamped = (v: number) => Math.max(lo, Math.min(hi, v));
  const pos = px(value);

  // Change the zoom window, keeping the point visible (clamp to the new range).
  const changeZoom = (next: number) => {
    setZoom(next);
    const s = Math.pow(10, next);
    const nlo = min * s;
    const nhi = max * s;
    setValue((v) => Math.max(nlo, Math.min(nhi, v)));
  };

  // Map a pointer's clientX over the track to a number value.
  const valueFromPointer = (clientX: number) => {
    const el = trackRef.current;
    if (!el) return value;
    const rect = el.getBoundingClientRect();
    if (rect.width === 0) return value;
    const ratio = (clientX - rect.left) / rect.width;
    return clamped(lo + ratio * span);
  };

  const onPointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    setDragging(true);
    (e.target as Element).setPointerCapture?.(e.pointerId);
    setValue(valueFromPointer(e.clientX));
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging) return;
    setValue(valueFromPointer(e.clientX));
  };
  const stopDrag = () => setDragging(false);

  return (
    <div className="widget-surface" aria-label={`Number line from ${lo} to ${hi}`}>
      <div
        ref={trackRef}
        className="relative h-16 cursor-pointer touch-none select-none"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={stopDrag}
        onPointerCancel={stopDrag}
      >
        <div className="absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 bg-[var(--border)]" />
        <div className="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 justify-between">
          {Array.from({ length: 11 }, (_, i) => {
            const v = lo + (i / 10) * span;
            return (
              <span key={i} className="flex flex-col items-center text-[10px] text-muted" style={{ transform: "translateX(-50%)" }}>
                <span className="h-2 w-px bg-[var(--border)]" />
                <span className="mt-1">{Math.abs(v % 1) < 1e-9 ? Math.round(v) : v.toFixed(1)}</span>
              </span>
            );
          })}
        </div>

        {mode === "inequality" && (
          <div className="absolute top-1/2 h-4 -translate-y-1/2 bg-[var(--primary)]/30" style={{ left: `${px(value)}%`, right: 0 }} />
        )}

        <button
          type="button"
          role="slider"
          aria-label={`Number line value: ${value}`}
          aria-valuenow={value}
          aria-valuemin={lo}
          aria-valuemax={hi}
          onKeyDown={(e) => {
            const s = e.key === "ArrowRight" || e.key === "ArrowUp" ? 1 : e.key === "ArrowLeft" || e.key === "ArrowDown" ? -1 : 0;
            if (s) { e.preventDefault(); setValue(clamped(value + s)); }
          }}
          className="absolute top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full border-2 border-[var(--primary)] bg-[var(--bg)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]"
          style={{ left: `${pos}%` }}
        />

        {markers.map((m) => (
          <span key={m} className="absolute top-1/2 h-3 w-0.5 -translate-y-1/2 bg-[var(--text-muted)]" style={{ left: `${px(m)}%` }} aria-hidden />
        ))}
      </div>

      <div className="mt-3 flex items-center justify-between gap-3 text-sm">
        <span className="text-muted">Value: {value}</span>
        {mode === "hops" && <span className="text-muted">{value - 1} + 1 = {value}</span>}
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => changeZoom(zoom + 1)}
            className="rounded-[8px] border border-token px-2 py-1 text-xs hover:border-[var(--primary)] hover:text-[var(--primary)]"
            aria-label="Zoom out by ten"
          >
            Zoom out ×10
          </button>
          <button
            type="button"
            onClick={() => changeZoom(zoom - 1)}
            className="rounded-[8px] border border-token px-2 py-1 text-xs hover:border-[var(--primary)] hover:text-[var(--primary)]"
            aria-label="Zoom in by ten"
          >
            Zoom in ×10
          </button>
          <button
            type="button"
            onClick={() => changeZoom(0)}
            className="rounded-[8px] border border-token px-2 py-1 text-xs hover:border-[var(--primary)] hover:text-[var(--primary)]"
            aria-label="Reset zoom"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}