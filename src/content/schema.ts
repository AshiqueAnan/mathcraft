/**
 * Lesson Blueprint — Section 4 of the product spec.
 * Every lesson in "Mathcraft" conforms to this exact schema.
 */

export type QuestionCategory = "procedural" | "conceptual" | "word";

export type HintTree = [level1: string, level2: string, level3: string];

interface QuestionBase {
  id: string;
  category: QuestionCategory;
  /** Prompt may contain KaTeX delimited with $...$ */
  prompt: string;
  /** Shown after answering (correct or wrong) — teaches the "why". */
  explanation: string;
  /** 3-level curated hint tree — offline "Ask Why" fallback. */
  hints: HintTree;
}

export interface MCQOption {
  id: string;
  text: string;
}

export interface MCQQuestion extends QuestionBase {
  type: "mcq";
  options: MCQOption[];
  correctOptionId: string;
  /** Diagnosis for each option except the correct one (keyed by option id). */
  diagnoses: Record<string, string>;
}

export interface NumericInputQuestion extends QuestionBase {
  type: "numeric-input";
  answer: number;
  tolerance?: number;
  unit?: string;
  acceptFractions?: boolean;
}

export interface FractionInputQuestion extends QuestionBase {
  type: "fraction-input";
  numerator: number;
  denominator: number;
  /** Accept any equivalent fraction (e.g. 2/4 for 1/2). */
  acceptEquivalent?: boolean;
}

export interface TrueFalseJustifyQuestion extends QuestionBase {
  type: "true-false-justify";
  isTrue: boolean;
}

export interface DragMatchQuestion extends QuestionBase {
  type: "drag-match";
  pairs: { source: string; target: string }[];
  diagnoses: Record<string, string>;
}

export interface OrderStepsQuestion extends QuestionBase {
  type: "order-steps";
  sequence: string[];
  diagnoses: Record<string, string>;
}

export interface GraphInteractQuestion extends QuestionBase {
  type: "graph-interact";
  challenge: string;
  validate: Record<string, number>;
  tolerance?: number;
}

export type Question =
  | MCQQuestion
  | NumericInputQuestion
  | FractionInputQuestion
  | TrueFalseJustifyQuestion
  | DragMatchQuestion
  | OrderStepsQuestion
  | GraphInteractQuestion;

export interface QuizSpec {
  /** Pool must be ≥ 3× the quiz size so retakes differ. */
  pool: Question[];
  /** Fixed composition: 2 procedural + 2 conceptual + 1 word problem. */
  selection: { procedural: number; conceptual: number; word: number };
  /** Pass threshold: ≥80%. */
  passThreshold: number;
}

export type HookType = "puzzle" | "paradox" | "real-world";

export interface Hook {
  question: string;
  type: HookType;
}

export type WidgetType =
  | "fraction-bars"
  | "fraction-circles"
  | "number-line"
  | "balance-scale"
  | "graph-plotter"
  | "geometry-playground"
  | "circle-theorem-explorer"
  | "tree-diagram-builder"
  | "venn-diagram"
  | "animated-proof"
  | "ratio-bar";

export interface IntuitionBlock {
  widget: WidgetType;
  /** Narrative gives the learner a task or question while playing. */
  narrative: string;
  /** A prediction prompt before interacting — "Mistakes are data". */
  prediction?: string;
  /**
   * Optional per-lesson configuration for the widget. Must be JSON-serializable
   * (no functions or class instances). Each widget declares its own expected
   * keys and falls back to sensible defaults when this is omitted.
   */
  props?: Record<string, unknown>;
}

export interface FormalBlock {
  /** May contain KaTeX delimited with $...$ */
  definition: string;
  /** Worked examples, 2 per block. May contain KaTeX. */
  examples: string[];
  /** "Watch out" — the classic slip for this idea. */
  pitfall: string;
  /** Exactly 2 analogy variants re-serving the same idea in different contexts (money, food, sport, games, distance/time). */
  altExplanations: [string, string];
}

export interface GutCheck {
  prompt: string;
  answer: string;
}

/** Beat 2 micro-challenge inside a widget. */
export interface DiscoveryChallenge {
  instruction: string;
  observe: string;
}

/** Beat 3 — commit before reveal. */
export interface PredictionCommit {
  prompt: string;
  options?: { id: string; text: string }[];
  numeric?: { answer: number; tolerance: number };
  reveal: string;
}

/** Beat 4 — "Say it your way" then name it. */
export interface SayItYourWay {
  prompt: string;
  phrasings: { id: string; text: string; correct: boolean; why: string }[];
  formalName: string;
}

/** The MathCraft Way — five-beat discovery flow. */
export interface Discovery {
  challenges: DiscoveryChallenge[];
  predict: PredictionCommit;
  sayItYourWay: SayItYourWay;
  /** Ungraded teaser previewing the next lesson's idea. */
  stretch: string;
}

export interface CommonMistake {
  /** Machine-readable key matched by the feedback engine. */
  wrongPattern: string;
  diagnosis: string;
  hint: string;
}

export interface Lesson {
  id: string; // e.g. "T1-U4-L3"
  tier: 1 | 2 | 3 | 4 | 5;
  unit: string;
  title: string;
  prerequisites: string[];
  estimatedMinutes: number;
  hook: Hook;
  intuitionBlocks: IntuitionBlock[];
  formalBlocks: FormalBlock[];
  gutChecks: GutCheck[];
  quiz: QuizSpec;
  commonMistakes: CommonMistake[];
  recallTags: string[];
  /** The MathCraft Way — five-beat discovery flow. */
  discovery: Discovery;
}
