"use client";

import dynamic from "next/dynamic";
import type { WidgetType } from "@/content/schema";

// Route-level code splitting: each widget is fetched only when that lesson
// actually uses it. This keeps the landing page and lesson shell lean.
const FractionBars = dynamic(() => import("./FractionBars").then((m) => m.FractionBars), { ssr: false });
const FractionCircles = dynamic(() => import("./FractionCircles").then((m) => m.FractionCircles), { ssr: false });
const NumberLine = dynamic(() => import("./NumberLine").then((m) => m.NumberLine), { ssr: false });
const BalanceScale = dynamic(() => import("./BalanceScale").then((m) => m.BalanceScale), { ssr: false });
const GraphPlotter = dynamic(() => import("./GraphPlotter").then((m) => m.GraphPlotter), { ssr: false });
const GeometryPlayground = dynamic(() => import("./GeometryPlayground").then((m) => m.GeometryPlayground), { ssr: false });
const CircleTheoremExplorer = dynamic(() => import("./CircleTheoremExplorer").then((m) => m.CircleTheoremExplorer), { ssr: false });
const VennDiagram = dynamic(() => import("./VennDiagram").then((m) => m.VennDiagram), { ssr: false });
const TreeDiagramBuilder = dynamic(() => import("./TreeDiagramBuilder").then((m) => m.TreeDiagramBuilder), { ssr: false });
const AnimatedProof = dynamic(() => import("./AnimatedProof").then((m) => m.AnimatedProof), { ssr: false });
const RatioBar = dynamic(() => import("./RatioBar").then((m) => m.RatioBar), { ssr: false });

const LOADERS = {
  "fraction-bars": FractionBars,
  "fraction-circles": FractionCircles,
  "number-line": NumberLine,
  "balance-scale": BalanceScale,
  "graph-plotter": GraphPlotter,
  "geometry-playground": GeometryPlayground,
  "circle-theorem-explorer": CircleTheoremExplorer,
  "venn-diagram": VennDiagram,
  "tree-diagram-builder": TreeDiagramBuilder,
  "animated-proof": AnimatedProof,
  "ratio-bar": RatioBar,
} satisfies Record<WidgetType, React.ComponentType>;

/** Map a lesson's widget type to its lazy-loaded interactive component. */
export function WidgetRenderer({ widget }: { widget: WidgetType }) {
  const Widget = LOADERS[widget];
  if (!Widget) {
    return (
      <div className="widget-surface text-muted">
        This interactive is coming soon. For now, try it with paper and pencil!
      </div>
    );
  }
  return <Widget />;
}