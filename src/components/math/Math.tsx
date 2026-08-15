"use client";

import katex from "katex";
import { useMemo } from "react";

interface MathComponentProps {
  /** KaTeX source WITHOUT the $ delimiters. */
  tex: string;
  display?: boolean;
}

/** Render a single KaTeX expression. */
export function Math({ tex, display = false }: MathComponentProps) {
  const html = useMemo(() => {
    try {
      return katex.renderToString(tex, { displayMode: display, throwOnError: false });
    } catch {
      return tex;
    }
  }, [tex, display]);

  if (display) {
    return <div className="my-3 overflow-x-auto" dangerouslySetInnerHTML={{ __html: html }} />;
  }
  return <span className="whitespace-nowrap" dangerouslySetInnerHTML={{ __html: html }} />;
}

/**
 * Render a text block that may contain display $$...$$ math (split FIRST so
 * block segments are never swallowed by the inline regex) and inline $...$ math.
 * Unbalanced delimiters render verbatim (no silent garbling).
 */
type RichPart = { kind: "display"; tex: string } | { kind: "inline"; tex: string } | { kind: "text"; tex: string };

export function RichText({ text }: { text: string }) {
  const parts = useMemo<RichPart[]>(() => {
    const out: RichPart[] = [];
    for (const seg of text.split(/(\$\$[^$]+?\$\$)/g).filter(Boolean)) {
      if (seg.startsWith("$$") && seg.endsWith("$$")) {
        out.push({ kind: "display", tex: seg.slice(2, -2) });
        continue;
      }
      for (const p of seg.split(/(\$[^$]+\$)/g).filter(Boolean)) {
        if (p.startsWith("$") && p.endsWith("$")) {
          out.push({ kind: "inline", tex: p.slice(1, -1) });
        } else {
          out.push({ kind: "text", tex: p });
        }
      }
    }
    return out;
  }, [text]);

  return (
    <>
      {parts.map((part, i) => {
        if (part.kind === "display") return <Math key={i} display tex={part.tex} />;
        if (part.kind === "inline") return <Math key={i} tex={part.tex} />;
        return <span key={i}>{part.tex}</span>;
      })}
    </>
  );
}