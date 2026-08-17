import type { Lesson } from "../schema";

export const T2U11L3: Lesson = {
  // @meta
  id: "T2-U11-L3",
  tier: 2,
  unit: "Variables & expressions",
  title: "Reading and Writing Algebra",
  prerequisites: ["T1-U10-L3","T2-U11-L2"],
  estimatedMinutes: 12,
  hook: {
    question: "3x, x², and x/2 all look alike but mean very different things. And 3x + 2x collapses to 5x while 3x + 2y refuses to. Algebra has a reading grammar — once you see it, expressions stop being soup.",
    type: "paradox",
  },
  intuitionBlocks: [{ widget: "ratio-bar", narrative: "The bar shows like terms combining: 3x and 2x are the same 'kind' (x-pieces), so they merge into 5x — like 3 apples + 2 apples. But 3x + 2y stays two kinds, like 3 apples + 2 bananas: the bar can't merge them. Notation is the grammar: 3x means 3·x, x² means x·x, x/2 means 'half of x'." }],

  // @discovery
  formalBlocks: [
    { definition: "Algebra notation has rules: 3x means 3 × x (coefficient times variable); x² means x × x (a power); x/2 or ½x means x ÷ 2. Like terms have the same variable (and power): 3x + 2x = 5x, and 5x² − 2x² = 3x². Unlike terms, like 3x + 2y, cannot be combined and stay as a sum. Substitution evaluates: replace each letter with its value.", examples: ["Simplify 4a + a = 5a (both are a-terms).", "Simplify 3x² + 5x² − 2x = 8x² − 2x (x² and x are different kinds)."], pitfall: "Only like terms combine. 3x + 2y is NOT 5xy, and 3x + 2x² is NOT 5x — check both the letter AND its power before adding.", altExplanations: ["GAME: like terms are matching item types — 3 swords + 2 swords stack into 5 swords, but 3 swords + 2 shields stay separate because they're different gear. x and x² are different tiers, never merged.", "FOOD: 3x is shorthand for '3 × x' like '3 dozen' means 3 × 12 — algebra notation contracts repeated multiplication. Like terms are the same ingredient: 4a + a = 5a, but 4a + b is an unfinished recipe."] },
  ],
  gutChecks: [{ prompt: "Simplify 3x + 4x − 2x.", answer: "5x — all three are x-terms: 3 + 4 − 2 = 5." }],
  quiz: {
    pool: [
      // @q01
      { id: "U11L3-mcq-1", type: "mcq", category: "procedural", prompt: "Simplify 3x + 2x.", options: [ { id: "a", text: "5x" }, { id: "b", text: "5x²" }, { id: "c", text: "6x" }, { id: "d", text: "5" } ], correctOptionId: "a", diagnoses: { b: "5x² would come from 3x·2x, not addition.", c: "6x is 3 × 2, not 3 + 2.", d: "You dropped the x." }, explanation: "Both are x-terms: 3 + 2 = 5, keep x → 5x.", hints: ["Add the coefficients.", "Keep the x.", "Both are x-terms: 3 + 2 = 5, keep x → 5x."] },
      // @q02
      { id: "U11L3-mcq-2", type: "mcq", category: "conceptual", prompt: "Which two terms are LIKE terms?", options: [ { id: "a", text: "4x and 4y" }, { id: "b", text: "4x and 7x" }, { id: "c", text: "4x and 4x²" }, { id: "d", text: "4x and 4" } ], correctOptionId: "b", diagnoses: { a: "Different letters — unlike.", c: "Different powers — unlike.", d: "One has no variable — unlike." }, explanation: "Like terms share the letter AND power: 4x and 7x are both x-terms.", hints: ["Compare letters and powers.", "4x and 7x match both.", "Like terms share the letter AND power: 4x and 7x are both x-terms."] },
      // @q03
      { id: "U11L3-mcq-3", type: "mcq", category: "word", prompt: "3 pens cost $6 each and 2 pencils cost $c each. Total cost?", options: [ { id: "a", text: "5c" }, { id: "b", text: "3 × 6 + 2 + c" }, { id: "c", text: "18 + 2c" }, { id: "d", text: "18c" } ], correctOptionId: "c", diagnoses: { b: "2 pencils cost 2 × c, not 2 + c.", a: "5c mixes dollars and pen-counts.", d: "18c multiplies the things together wrongly." }, explanation: "Pens: 3 × $6 = 18; pencils: 2 × c = 2c; total = 18 + 2c.", hints: ["Pens: 3 × 6.", "Pencils: 2 × c.", "Pens: 3 × $6 = 18; pencils: 2 × c = 2c; total = 18 + 2c."] },
      // @q04
      { id: "U11L3-mcq-4", type: "mcq", category: "procedural", prompt: "Simplify 5x² + 3x².", options: [ { id: "a", text: "8x⁴" }, { id: "b", text: "8x" }, { id: "c", text: "15x²" }, { id: "d", text: "8x²" } ], correctOptionId: "d", diagnoses: { b: "The power is preserved — it stays x².", c: "15 is 5 × 3, you should add.", a: "Powers don't combine on addition." }, explanation: "Same kind (x²): 5 + 3 = 8, keep x² → 8x².", hints: ["Add coefficients.", "Keep x².", "Same kind (x²): 5 + 3 = 8, keep x² → 8x²."] },
      // @q05
      { id: "U11L3-mcq-5", type: "mcq", category: "conceptual", prompt: "Why can't 3x + 2y be simplified?", options: [ { id: "a", text: "Different letters — unlike terms" }, { id: "b", text: "Numbers are too small" }, { id: "c", text: "Addition is impossible" }, { id: "d", text: "One term is missing a sign" } ], correctOptionId: "a", diagnoses: { b: "Size is irrelevant.", c: "Addition is fine — it just stays as a sum.", d: "Signs are fine." }, explanation: "x-terms and y-terms are different kinds, like apples and bananas — they stay apart.", hints: ["Compare letters.", "x ≠ y.", "Different kinds."] },
      // @q06
      { id: "U11L3-mcq-6", type: "mcq", category: "word", prompt: "A rectangle is w cm wide and 3d cm long. Which shows its area?", options: [ { id: "a", text: "3w + d" }, { id: "b", text: "3wd" }, { id: "c", text: "3 + wd" }, { id: "d", text: "3w²d" } ], correctOptionId: "b", diagnoses: { a: "3w + d is a sum — area is a product.", c: "The 3 multiplies the whole.", d: "Only w is squared, not the product." }, explanation: "Area = w × 3d = 3 × w × d = 3wd.", hints: ["Area = length × width.", "w × 3d.", "Area = w × 3d = 3 × w × d = 3wd."] },
      // @q07
      { id: "U11L3-num-1", type: "numeric-input", category: "procedural", prompt: "Simplify 7x + 3x. Type the coefficient.", answer: 10, tolerance: 0, explanation: "7 + 3 = 10, keep x → 10x.", hints: ["Add the coefficients.", "7 + 3.", "7 + 3 = 10, keep x → 10x."] },
      // @q08
      { id: "U11L3-num-2", type: "numeric-input", category: "procedural", prompt: "Simplify 5y − 2y. Type the coefficient.", answer: 3, tolerance: 0, explanation: "5 − 2 = 3, keep y → 3y.", hints: ["Subtract coefficients.", "5 − 2.", "5 − 2 = 3, keep y → 3y."] },
      // @q09
      { id: "U11L3-num-3", type: "numeric-input", category: "conceptual", prompt: "Simplify 4x + 3x + 2y. Type the coefficient of x.", answer: 7, tolerance: 0, explanation: "4x + 3x = 7x; the 2y stays separate.", hints: ["Combine only x-terms.", "4 + 3.", "4x + 3x = 7x; the 2y stays separate."] },
      // @q10
      { id: "U11L3-frac-1", type: "fraction-input", category: "conceptual", prompt: "If x = 4, what is x/2? Write it as a fraction.", numerator: 2, denominator: 1, acceptEquivalent: true, explanation: "x/2 = 4/2 = 2 = 2/1.", hints: ["x/2 means half of x.", "Half of 4.", "x/2 = 4/2 = 2 = 2/1."] },
      // @q11
      { id: "U11L3-tf-1", type: "true-false-justify", category: "conceptual", prompt: "3x + 2x simplifies to 5x.", isTrue: true, explanation: "Both are x-terms: 3 + 2 = 5, keep x.", hints: ["Like terms combine.", "3 + 2.", "Both are x-terms: 3 + 2 = 5, keep x."] },
      // @q12
      { id: "U11L3-tf-2", type: "true-false-justify", category: "conceptual", prompt: "3x + 2y simplifies to 5xy.", isTrue: false, explanation: "x and y are different kinds — they stay apart; no such simplification exists.", hints: ["Do the letters match?", "No.", "False — no merge."] },
      // @q13
      { id: "U11L3-order-1", type: "order-steps", category: "word", prompt: "Order the steps to simplify 4x + 3x + 2y.", sequence: ["Identify like terms: 4x and 3x", "Add their coefficients: 7x", "Leave 2y separate", "Answer: 7x + 2y"], diagnoses: { "Add their coefficients: 7x@0": "Identify like terms first.", "Answer: 7x + 2y@0": "Build the answer last.", "Leave 2y separate@3": "Keep unlike terms apart before answering." }, explanation: "Combine the x-terms; the y-term stands alone.", hints: ["Find the same letter.", "Add those coefficients.", "Combine the x-terms; the y-term stands alone."] },
      // @q14
      { id: "U11L3-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each expression to its simplified form.", pairs: [ { source: "3x + 5x", target: "8x" }, { source: "4y − y", target: "3y" }, { source: "2x² + x²", target: "3x²" } ], diagnoses: { "3x + 5x->3y": "8x — same letter x.", "4y − y->8x": "3y, not an x-term.", "2x² + x²->8x": "3x² — keep the power." }, explanation: "Combine like terms: 8x, 3y, 3x².", hints: ["Match letters and powers.", "Add coefficients.", "Combine like terms: 8x, 3y, 3x²."] },
      // @q15
      { id: "U11L3-graph-1", type: "graph-interact", category: "word", prompt: "Set the slider to the coefficient of x after simplifying 6x + 4x (key: value).", challenge: "Adjust the values below so they match the condition described in the prompt.", validate: { value: 10 }, tolerance: 0, explanation: "6 + 4 = 10 → 10x.", hints: ["Add 6 and 4.", "10.", "Set slider to 10."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "combines unlike terms", diagnosis: "3x + 2y is not 5xy — different variables stay separate.", hint: "Only terms with the same letter AND power combine." },
    { wrongPattern: "confuses x² with 2x", diagnosis: "x² is x × x; 2x is x + x (or 2·x). They are different kinds.", hint: "Check the power: x² vs x." },
    { wrongPattern: "adds coefficients AND variables", diagnosis: "3x + 2x = 5x, not 5x² — the variable stays, only coefficients add.", hint: "Add the numbers in front; keep the letter." },
  ],
  recallTags: ["like-terms", "notation", "substitution"],
  discovery: {
    challenges: [
      { instruction: "Slide the bar to show 3x + 2x. Do the x-pieces merge?", observe: "Yes — 3x + 2x = 5x, one merged bar of 5 x-pieces." },
      { instruction: "Now show 3x + 2y on the bar.", observe: "They stay as two separate kinds — like 3 apples + 2 bananas, no merging." },
    ],
    predict: { prompt: "What is 3x + 2x?", numeric: { answer: 5, tolerance: 0 }, reveal: "5x — the x is the common kind, so we add 3 + 2 and keep the x." },
    sayItYourWay: { prompt: "When can two algebra terms be combined?", phrasings: [{ id: "a", text: "When they have the same letter and power", correct: true, why: "3x and 2x merge to 5x; 3x and 2y don't." }, { id: "b", text: "Whenever they both have letters", correct: false, why: "3x and 2y both have letters but can't combine." }, { id: "c", text: "When the numbers are equal", correct: false, why: "The letters matter, not just the coefficients." }], formalName: "like terms" },
    stretch: "If 3x + 2x = 5x, what do you think 3x × 2x equals? It's NOT 5x — multiplication with variables follows a different rule, coming in U12.",
  },
};
