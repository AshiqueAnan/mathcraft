import type { Lesson } from "../schema";

export const T5U32L1: Lesson = {
  // @meta
  id: "T5-U32-L1",
  tier: 5,
  unit: "Exponentials & logarithms",
  title: "Growth That Eats the World",
  prerequisites: ["T1-U7-L1","T2-U17-L3","T5-U31-L3"],
  estimatedMinutes: 14,
  hook: { question: "Start with one bacterium that doubles every hour. After 10 hours: 1024. After 20 hours: over a million. A straight line would add a constant each step — exponential multiplies, and multiplying compounds until the line is left in the dust. Same story in reverse: radioactivity halves, never quite reaching zero. This is the shape that rules population, savings, and decay.", type: "real-world" },
  intuitionBlocks: [{ widget: "graph-plotter", narrative: "Plot y = 2ˣ and a line y = 10x on the same axes. Dragging the slider forward, watch the exponential start slow, then rocket past the line forever. Then flip to y = (1/2)ˣ and watch half-life decay: each step halves, approaching zero but never landing on it." }],

  // @discovery
  formalBlocks: [{ definition: "AN EXPONENTIAL FUNCTION has the form $y = a \\cdot b^x$: the variable x is the EXPONENT. When $b > 1$ it GROWS (multiplies by b each step); when $0 < b < 1$ it DECAYS (half-lives). For doubling, $y = a \\cdot 2^x$; for half-life, $y = a \\cdot (1/2)^x$.", examples: ["One cell doubling: y = 2ˣ. After 10 hours, 2¹⁰ = 1024.", "100 mg with 1-day half-life: y = 100·(1/2)ˣ. After 3 days, 100·(1/8) = 12.5 mg."], pitfall: "Exponential growth is NOT multiplying by the same amount each step — it multiplies by the same FACTOR. Adding constant 100 each step is linear; doubling (×2) each step is exponential.", altExplanations: ["FOOD: a culture doubling in a yoghurt pot — 1 cell becomes 2, then 4, then 8: y = 2ˣ multiplies by the same FACTOR each step, never by the same amount. Adding 100 cells per hour is linear; doubling every hour is exponential and eventually annihilates any line.", "MONEY: compound interest vs simple — simple adds the same interest each year (linear, y = 100x), compound multiplies by the same factor (exponential, y = 2ˣ). Plot both: the exponential curve starts lower but always rockets past and keeps pulling away."] }],
  gutChecks: [{ prompt: "Which grows faster eventually: y = 100x or y = 2ˣ?", answer: "y = 2ˣ — the exponential always overtakes any line and keeps pulling away." }],
  quiz: {
    pool: [
      // @q01
      { id: "U32L1-mcq-1", type: "mcq", category: "procedural", prompt: "2⁵ = …", options: [ { id: "a", text: "32" }, { id: "b", text: "10" }, { id: "c", text: "25" }, { id: "d", text: "16" } ], correctOptionId: "a", diagnoses: { b: "10 is 2×5 — that's multiplication, not a power.", c: "25 is 5² — swapped.", d: "16 is 2⁴." }, explanation: "2×2×2×2×2 = 32.", hints: ["Doubling 5 times.", "2,4,8,16,32.", "32."] },
      // @q02
      { id: "U32L1-mcq-2", type: "mcq", category: "conceptual", prompt: "y = 3ˣ compared to y = 3x: which eventually dominates?", options: [ { id: "a", text: "3ˣ — the exponential always wins eventually" }, { id: "b", text: "3x — lines are faster" }, { id: "c", text: "they're equal" }, { id: "d", text: "3x, once x is big" } ], correctOptionId: "a", diagnoses: { b: "Lines add a fixed amount; exponentials multiply.", c: "3ˣ soon dwarfs 3x.", d: "At big x, 3ˣ is far larger." }, explanation: "Exponentials multiply per step and overtake any line.", hints: ["Multiplying beats adding.", "Eventually.", "3ˣ."] },
      // @q03
      { id: "U32L1-mcq-3", type: "mcq", category: "word", prompt: "A population of 500 doubles yearly. After 3 years it's…", options: [ { id: "a", text: "4000" }, { id: "b", text: "1500" }, { id: "c", text: "3000" }, { id: "d", text: "8000" } ], correctOptionId: "a", diagnoses: { b: "1500 adds 500×3 — linear.", c: "3000 is ×6 — wrong factor.", d: "8000 is 500×16 — too many doublings." }, explanation: "500 × 2³ = 500 × 8 = 4000.", hints: ["2³ = 8.", "500 × 8.", "4000."] },
      // @q04
      { id: "U32L1-mcq-4", type: "mcq", category: "procedural", prompt: "y = (1/2)ˣ at x = 3: y = …", options: [ { id: "a", text: "1/8" }, { id: "b", text: "1/6" }, { id: "c", text: "3/2" }, { id: "d", text: "8" } ], correctOptionId: "a", diagnoses: { b: "1/6 comes from 1/(2×3) — that's not (1/2)³.", c: "3/2 is (1/2)×3.", d: "8 is 2³ — that's growth, not decay." }, explanation: "(1/2)³ = 1/8 — halves three times.", hints: ["Halve thrice.", "1/8.", "1/8."] },
      // @q05
      { id: "U32L1-mcq-5", type: "mcq", category: "conceptual", prompt: "What distinguishes exponential from linear growth?", options: [ { id: "a", text: "multiplies by a fixed factor vs adds a fixed amount" }, { id: "b", text: "exponential always uses base 10" }, { id: "c", text: "linear multiplies, exponential adds" }, { id: "d", text: "they're the same" } ], correctOptionId: "a", diagnoses: { b: "Base can be any b.", c: "Swapped — exponential multiplies.", d: "Very different shapes." }, explanation: "Linear: +c each step. Exponential: ×b each step.", hints: ["Add vs multiply.", "Fixed factor.", "× vs +."] },
      // @q06
      { id: "U32L1-mcq-6", type: "mcq", category: "word", prompt: "A 200 mg dose of medicine decays with a 1-day half-life. After 2 days, remaining = …", options: [ { id: "a", text: "50 mg" }, { id: "b", text: "100 mg" }, { id: "c", text: "25 mg" }, { id: "d", text: "0 mg" } ], correctOptionId: "a", diagnoses: { b: "100 mg is after only 1 half-life.", c: "25 mg is after 3 half-lives.", d: "It halves, never hitting zero." }, explanation: "200 × (1/2)² = 200 × 1/4 = 50 mg.", hints: ["Halve twice.", "200 → 100 → 50.", "50 mg."] },
      // @q07
      { id: "U32L1-num-1", type: "numeric-input", category: "procedural", prompt: "2⁶ = …", answer: 64, tolerance: 0, explanation: "Doubling six times: 2,4,8,16,32,64.", hints: ["2⁵ = 32.", "×2.", "64."] },
      // @q08
      { id: "U32L1-num-2", type: "numeric-input", category: "procedural", prompt: "3³ = …", answer: 27, tolerance: 0, explanation: "3×3×3 = 27.", hints: ["3² = 9.", "×3.", "27."] },
      // @q09
      { id: "U32L1-num-3", type: "numeric-input", category: "conceptual", prompt: "Start with 10 cells, doubling hourly. After 4 hours, how many?", answer: 160, tolerance: 0, explanation: "10 × 2⁴ = 10 × 16 = 160.", hints: ["2⁴ = 16.", "10 × 16.", "160."] },
      // @q10
      { id: "U32L1-frac-1", type: "fraction-input", category: "conceptual", prompt: "y = (1/2)ˣ at x = 1. Express y as a fraction.", numerator: 1, denominator: 2, acceptEquivalent: true, explanation: "(1/2)¹ = 1/2.", hints: ["One half.", "1/2.", "1/2."] },
      // @q11
      { id: "U32L1-tf-1", type: "true-false-justify", category: "conceptual", prompt: "Eventually, 2ˣ overtakes 1000x forever.", isTrue: true, explanation: "Exponentials multiply while lines add — 2ˣ wins eventually.", hints: ["Multiplying beats adding.", "Eventually.", "True."] },
      // @q12
      { id: "U32L1-tf-2", type: "true-false-justify", category: "conceptual", prompt: "Half-life decay reaches exactly zero after enough steps.", isTrue: false, explanation: "Halving never lands on zero — it approaches it forever.", hints: ["1/2, 1/4, 1/8…", "Never zero.", "False."] },
      // @q13
      { id: "U32L1-order-1", type: "order-steps", category: "word", prompt: "Order the steps to find bacteria after 5 hours from 3 cells doubling hourly.", sequence: ["Write 3 × 2⁵", "Compute 2⁵ = 32", "Multiply: 3 × 32 = 96"], diagnoses: { "Write 3 × 2⁵@1": "Set up first.", "Compute 2⁵ = 32@0": "Then the power.", "Multiply: 3 × 32 = 96@0": "Multiply last." }, explanation: "Formula, power, then product.", hints: ["3 × 2⁵.", "32.", "96."] },
      // @q14
      { id: "U32L1-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each base to its behavior.", pairs: [ { source: "y = 2ˣ", target: "growth (doubling)" }, { source: "y = (1/2)ˣ", target: "decay (half-life)" }, { source: "y = 3x", target: "linear (adding)" } ], diagnoses: { "y = 2ˣ->linear (adding)": "2ˣ multiplies.", "y = (1/2)ˣ->growth (doubling)": "Base < 1 decays.", "y = 3x->decay (half-life)": "3x adds 3 each step." }, explanation: "b > 1 grows, 0 < b < 1 decays, x in the base means linear.", hints: ["Base 2.", "Base ½.", "3x line."] },
      // @q15
      { id: "U32L1-graph-1", type: "graph-interact", category: "word", prompt: "y = 2ˣ at x = 4. Set the slider to y (key: value).", challenge: "Set the slider to 16.", validate: { value: 16 }, tolerance: 0.01, explanation: "2⁴ = 16.", hints: ["2,4,8,16.", "16.", "16."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "treats exponential as linear addition", diagnosis: "2ˣ multiplies per step; adding a constant is the line.", hint: "× factor, not + amount." },
    { wrongPattern: "multiplies the base by x", diagnosis: "3ˣ is 3×3×…, not 3×x.", hint: "Exponent, not factor." },
    { wrongPattern: "thinks half-life reaches zero", diagnosis: "Halving forever approaches zero but never arrives.", hint: "Halves, never zero." },
  ],
  recallTags: ["exponential", "doubling", "half-life", "growth", "decay", "2ˣ", "(1/2)ˣ"],
  discovery: {
    challenges: [
      { instruction: "Compare y = 2ˣ with y = 10x. Trace them side by side.", observe: "The line starts higher, but the exponential eventually crosses it and never looks back." },
      { instruction: "Flip to y = (1/2)ˣ and step x up.", observe: "Each step halves the value — it approaches zero but never quite arrives. That's half-life decay." },
    ],
    predict: { prompt: "Start with 1 cell that doubles hourly. After 10 hours, how many?", options: [{ id: "a", text: "1024" }, { id: "b", text: "10" }, { id: "c", text: "512" }], reveal: "1024 — doubling 10 times: 2¹⁰ = 1024. Exponential multiplies each step." },
    sayItYourWay: { prompt: "What makes exponential growth so fast?", phrasings: [{ id: "a", text: "It multiplies by a fixed factor each step", correct: true, why: "Doubling compounds — the growth grows." }, { id: "b", text: "It adds the same amount each step", correct: false, why: "That's linear growth." }, { id: "c", text: "It grows slowly forever", correct: false, why: "It starts slow then rockets — the opposite of slow." }], formalName: "exponential functions — y = a·bˣ multiply by b per step; decay uses 0 < b < 1" },
    stretch: "If 2ˣ = 1024, what is x? You know the answer is 10 by counting doublings — but what if the target isn't a neat power? Logs name that question.", 
  },
};
