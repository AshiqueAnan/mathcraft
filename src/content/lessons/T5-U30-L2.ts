import type { Lesson } from "../schema";

export const T5U30L2: Lesson = {
  // @meta
  id: "T5-U30-L2",
  tier: 5,
  unit: "Functions",
  title: "Machines in Series (and Reverse)",
  prerequisites: ["T4-U29-L4","T5-U30-L1"],
  estimatedMinutes: 14,
  hook: { question: "Two machines in a row: first 'add 3', then 'double'. Feed 4 in and you get 14. But feed 4 into 'double, then add 3' and you get 11. Same two machines, different order, different answer. And if you want to undo the whole chain, you run the machines BACKWARDS — each one reversed.", type: "puzzle" },
  intuitionBlocks: [{ widget: "graph-plotter", narrative: "Watch the graph trace a chain: input x goes through machine f, then machine g. The composite fg(x) = g(f(x)) — apply f first, then g. Drag the input and see the two-step journey on the axes. Then flip the chain to run it backwards and undo everything." }],

  // @discovery
  formalBlocks: [{ definition: "A COMPOSITE function chains two machines: $fg(x) = g(f(x))$ means apply f first, then g. The INVERSE function $f^{-1}$ undoes f: if $f(x) = y$ then $f^{-1}(y) = x$. To invert a chain, undo each step in REVERSE order.", examples: ["f(x) = x + 3, g(x) = 2x: g(f(4)) = g(7) = 14.", "f(x) = 2x + 1: f⁻¹(y) = (y - 1)/2 — undo the +1, then the ×2."], pitfall: "Order matters in composites: g(f(x)) is NOT the same as f(g(x)). f(x) = x+3, g(x) = 2x: g(f(4)) = 14 but f(g(4)) = 11. Always apply the inner function first.", altExplanations: ["MACHINE: two machines in series — f stamps +3, then g doubles. g(f(4)) runs f first (4→7), then g (7→14); f(g(4)) runs g first (4→8), then f (11). Reversing the chain order changes the output. The inverse f⁻¹ is the same machine run backwards to undo every step in reverse.", "GAME: a quest line with two steps — apply the inner machine first, then the outer. Undoing f(x) = 2x + 1 means undoing the +1 first (subtract), then the ×2 (divide): inverse = (y−1)/2. Reverse order is the rule for un-building any chain."] }],
  gutChecks: [{ prompt: "To undo f(x) = 3x - 2, what do you do first?", answer: "Add 2, then divide by 3 — reverse the order of the original steps." }],
  quiz: {
    pool: [
      // @q01
      { id: "U30L2-mcq-1", type: "mcq", category: "procedural", prompt: "f(x) = x + 3, g(x) = 2x. g(f(4)) = …", options: [ { id: "a", text: "14" }, { id: "b", text: "11" }, { id: "c", text: "7" }, { id: "d", text: "24" } ], correctOptionId: "a", diagnoses: { b: "11 is f(g(4)) — wrong order.", c: "7 is just f(4).", d: "24 multiplies 4 by 6 — no." }, explanation: "f(4) = 7, then g(7) = 14.", hints: ["f(4) first.", "7 × 2.", "14."] },
      // @q02
      { id: "U30L2-mcq-2", type: "mcq", category: "conceptual", prompt: "Which is true about composites?", options: [ { id: "a", text: "fg(x) = g(f(x)) — apply f first" }, { id: "b", text: "fg(x) always equals fg(2x)" }, { id: "c", text: "fg(x) = f(x) × g(x)" }, { id: "d", text: "order never matters" } ], correctOptionId: "a", diagnoses: { b: "No — the input is replaced by the composite.", c: "Composite chains, it does not multiply.", d: "Order matters critically." }, explanation: "fg(x) means apply f then g to x.", hints: ["Inner first.", "f, then g.", "g(f(x))."] },
      // @q03
      { id: "U30L2-mcq-3", type: "mcq", category: "word", prompt: "A machine doubles, then a machine adds 5. Feed 3. Output = …", options: [ { id: "a", text: "11" }, { id: "b", text: "16" }, { id: "c", text: "13" }, { id: "d", text: "8" } ], correctOptionId: "a", diagnoses: { b: "16 is (3+5)×2 — wrong order.", c: "13 is 2×3+5 then +2 — no.", d: "8 is 3+5 — forgot the double." }, explanation: "Double 3 = 6, then add 5 = 11.", hints: ["3 × 2.", "+ 5.", "11."] },
      // @q04
      { id: "U30L2-mcq-4", type: "mcq", category: "procedural", prompt: "f(x) = 2x + 1. f⁻¹(7) = …", options: [ { id: "a", text: "3" }, { id: "b", text: "15" }, { id: "c", text: "4" }, { id: "d", text: "13" } ], correctOptionId: "a", diagnoses: { b: "15 is f(7) — that's forward, not inverse.", c: "4 is (7+1)/2 — wrong order.", d: "13 is 2×7-1 — wrong." }, explanation: "Undo +1 then ×2: (7-1)/2 = 3.", hints: ["7 - 1.", "÷ 2.", "3."] },
      // @q05
      { id: "U30L2-mcq-5", type: "mcq", category: "conceptual", prompt: "To invert f(x) = 3x - 2, you…", options: [ { id: "a", text: "add 2, then divide by 3" }, { id: "b", text: "divide by 3, then add 2" }, { id: "c", text: "subtract 2, then multiply by 3" }, { id: "d", text: "multiply by 3, then add 2" } ], correctOptionId: "a", diagnoses: { b: "Reverse order — undo the -2 first.", c: "Wrong operations entirely.", d: "That's the forward function." }, explanation: "Reverse the steps: undo -2 (add 2), then undo ×3 (divide by 3).", hints: ["Reverse order.", "Undo -2 first.", "Add 2, ÷ 3."] },
      // @q06
      { id: "U30L2-mcq-6", type: "mcq", category: "word", prompt: "A machine adds 4, then doubles. To undo it, you…", options: [ { id: "a", text: "halve, then subtract 4" }, { id: "b", text: "subtract 4, then halve" }, { id: "c", text: "double, then add 4" }, { id: "d", text: "add 4, then double" } ], correctOptionId: "a", diagnoses: { b: "Reverse order — undo the double first.", c: "That's the forward chain.", d: "That's the forward chain." }, explanation: "Reverse: undo double (halve), then undo +4 (subtract 4).", hints: ["Reverse order.", "Halve first.", "Halve, then -4."] },
      // @q07
      { id: "U30L2-num-1", type: "numeric-input", category: "procedural", prompt: "f(x) = 2x, g(x) = x + 5. g(f(3)) = …", answer: 11, tolerance: 0, explanation: "f(3) = 6, then g(6) = 11.", hints: ["f(3) first.", "6 + 5.", "11."] },
      // @q08
      { id: "U30L2-num-2", type: "numeric-input", category: "procedural", prompt: "f(x) = 3x. f⁻¹(12) = …", answer: 4, tolerance: 0, explanation: "Undo ×3: 12 ÷ 3 = 4.", hints: ["Reverse.", "12 ÷ 3.", "4."] },
      // @q09
      { id: "U30L2-num-3", type: "numeric-input", category: "conceptual", prompt: "f(x) = x + 2, g(x) = 5x. Evaluate f(g(1)).", answer: 7, tolerance: 0, explanation: "g(1) = 5, then f(5) = 7.", hints: ["g(1) = 5.", "f(5).", "7."] },
      // @q10
      { id: "U30L2-frac-1", type: "fraction-input", category: "conceptual", prompt: "f(x) = 1/x. In the chain f(f(x)), the final output of feeding 2 is 2. Express 2 as a fraction.", numerator: 2, denominator: 1, acceptEquivalent: true, explanation: "f(2) = 1/2, then f(1/2) = 2 — applying the reciprocal twice returns you to start.", hints: ["1/2 then 2.", "Reciprocal twice.", "2/1."] },
      // @q11
      { id: "U30L2-tf-1", type: "true-false-justify", category: "conceptual", prompt: "f(x) = x + 2, g(x) = 3x. Then g(f(x)) and f(g(x)) give the same result for all x.", isTrue: false, explanation: "g(f(x)) = 3(x+2) = 3x+6 but f(g(x)) = 3x+2 — different.", hints: ["3(x+2).", "3x + 2.", "False."] },
      // @q12
      { id: "U30L2-tf-2", type: "true-false-justify", category: "conceptual", prompt: "f⁻¹(f(5)) = 5 for any invertible function f.", isTrue: true, explanation: "The inverse undoes f exactly — f(5) goes to some y, and f⁻¹(y) returns 5.", hints: ["Undo.", "Back to start.", "True."] },
      // @q13
      { id: "U30L2-order-1", type: "order-steps", category: "word", prompt: "Order the steps to find f⁻¹ for f(x) = 2x + 1.", sequence: ["Write y = 2x + 1", "Subtract 1 from both sides", "Divide by 2"], diagnoses: { "Write y = 2x + 1@1": "Start with the equation.", "Subtract 1 from both sides@0": "Undo the +1.", "Divide by 2@0": "Undo the ×2 last." }, explanation: "Undo in reverse: subtract 1, then divide by 2.", hints: ["y = 2x + 1.", "-1.", "÷ 2."] },
      // @q14
      { id: "U30L2-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each notation to its meaning.", pairs: [ { source: "fg(x)", target: "apply f, then g" }, { source: "f⁻¹(y)", target: "input that produced y" }, { source: "f(x) = y", target: "machine f maps x to y" } ], diagnoses: { "fg(x)->input that produced y": "fg chains forward.", "f⁻¹(y)->apply f, then g": "Inverse undoes f.", "f(x) = y->apply f, then g": "It maps x to y." }, explanation: "fg chains, f⁻¹ undoes, f(x)=y is the mapping.", hints: ["Chain.", "Undo.", "Map."] },
      // @q15
      { id: "U30L2-graph-1", type: "graph-interact", category: "word", prompt: "f(x) = 2x, g(x) = x + 1. Set the slider to g(f(3)) (key: value).", challenge: "Set the slider to 7.", validate: { value: 7 }, tolerance: 0.01, explanation: "f(3) = 6, then g(6) = 7.", hints: ["f(3) = 6.", "6 + 1.", "7."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "applies composite in wrong order", diagnosis: "fg(x) means f first, then g — inner function goes through the outer.", hint: "Inner first." },
    { wrongPattern: "inverts without reversing order", diagnosis: "Undo the LAST operation first, then work backwards.", hint: "Reverse the steps." },
    { wrongPattern: "confuses f⁻¹ with 1/f", diagnosis: "f⁻¹ is the undo machine, not the reciprocal of the output.", hint: "Undo, not invert." },
  ],
  recallTags: ["composite", "inverse", "fg", "f⁻¹", "chain"],
  discovery: {
    challenges: [
      { instruction: "Chain f(x) = x + 3 then g(x) = 2x. Feed 4.", observe: "f(4) = 7, then g(7) = 14 — the composite g(f(4)) = 14." },
      { instruction: "Reverse the chain: undo g first, then f.", observe: "Start at 14, halve to 7, subtract 3 to get back to 4 — the inverse undoes each step in reverse order." },
    ],
    predict: { prompt: "f(x) = x + 3, g(x) = 2x. What is g(f(5))?", options: [{ id: "a", text: "16" }, { id: "b", text: "13" }, { id: "c", text: "10" }], reveal: "16 — f(5) = 8, then g(8) = 16. Apply f first, then g." },
    sayItYourWay: { prompt: "How do you undo a chain of machines?", phrasings: [{ id: "a", text: "Run them backwards, each reversed", correct: true, why: "Reverse order, reverse each step." }, { id: "b", text: "Run them forwards again", correct: false, why: "That repeats the chain, not undoes it." }, { id: "c", text: "Only reverse the first machine", correct: false, why: "Every machine needs undoing, in reverse order." }], formalName: "composite function fg(x) = g(f(x)) and inverse function f⁻¹ — undo each step in reverse" },
    stretch: "What does the graph of a function look like when you shift it up or sideways? That's next — moving graphs around.", 
  },
};
