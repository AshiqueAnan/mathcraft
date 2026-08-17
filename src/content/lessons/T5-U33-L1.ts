import type { Lesson } from "../schema";

export const T5U33L1: Lesson = {
  // @meta
  id: "T5-U33-L1",
  tier: 5,
  unit: "Polynomials & further trig",
  title: "Polynomial Arithmetic and a Clever Plug-In",
  prerequisites: ["T2-U12-L1", "T5-U32-L3"],
  estimatedMinutes: 14,
  hook: { question: "Polynomials add, subtract, and multiply like numbers with more parts. But here's the trick that feels like magic: divide f(x) = x³ - 2x + 4 by (x - 2), and the remainder is exactly f(2)! Evaluating the polynomial at a number is secretly the same as dividing by (x minus that number). One plug-in, and division is done.", type: "paradox" },
  intuitionBlocks: [{ widget: "number-line", narrative: "Place the input 2 on the line and compute f(2) for f(x) = x³ - 2x + 4: that's 8 - 4 + 4 = 8. Now divide f(x) by (x - 2) using the same coefficients — the remainder is 8. The two answers always match. That's the Remainder Theorem living on the number line." }],

  // @discovery
  formalBlocks: [{ definition: "POLYNOMIAL ARITHMETIC: add and subtract by matching powers; multiply by distributing every term of one into every term of the other. THE REMAINDER THEOREM: dividing $f(x)$ by $(x-a)$ leaves remainder $f(a)$. If $f(a) = 0$, then $(x-a)$ is a FACTOR of $f(x)$ — the Factor Theorem.", examples: ["f(x) = x³ - 2x + 4 divided by (x - 2): remainder = f(2) = 8 - 4 + 4 = 8.", "f(x) = x² - 5x + 6: f(2) = 0 → (x - 2) is a factor (indeed f = (x-2)(x-3))."], pitfall: "Divide by (x - a) means the plug-in is +a, not the sign shown. Dividing by (x + 3) uses f(-3): the bracket's root. Also don't forget the missing x² term when multiplying — line up powers carefully.", altExplanations: ["GAME: the remainder theorem is a fast-cheat code — dividing f(x) by (x−a) leaves remainder f(a), so plug a in instead of doing long division. f(x) = x² − 5x + 6 with a = 2: f(2) = 0 means (x−2) divides it exactly — the Factor Theorem's free check.", "FOOD: a portion-size trick — cutting a cake with (x−2) worth of slices leaves exactly f(2) leftovers. Evaluate the polynomial at the divisor's root and you skip the whole cutting ceremony; f(2)=0 means the cake divides without crumbs."] }],
  gutChecks: [{ prompt: "Remainder when f(x) = x² + 4x + 3 is divided by (x + 1)?", answer: "f(-1) = 1 - 4 + 3 = 0 → remainder 0 (so (x+1) is a factor)." }],
  quiz: {
    pool: [
      // @q01
      { id: "U33L1-mcq-1", type: "mcq", category: "procedural", prompt: "f(x) = x² + 3x - 5. Remainder when divided by (x - 2) = …", options: [ { id: "a", text: "5" }, { id: "b", text: "3" }, { id: "c", text: "-5" }, { id: "d", text: "0" } ], correctOptionId: "a", diagnoses: { b: "3 is the coefficient of x, not the remainder.", c: "-5 is f(0).", d: "0 would mean (x-2) is a factor — it's not." }, explanation: "f(2) = 4 + 6 - 5 = 5.", hints: ["f(2).", "4 + 6 - 5.", "5."] },
      // @q02
      { id: "U33L1-mcq-2", type: "mcq", category: "conceptual", prompt: "Dividing by (x + 3) means you plug in…", options: [ { id: "a", text: "+3" }, { id: "b", text: "-3" }, { id: "c", text: "0" }, { id: "d", text: "1" } ], correctOptionId: "b", diagnoses: { a: "+3 is for (x - 3).", c: "0 is for (x - 0).", d: "1 is for (x - 1)." }, explanation: "The divisor (x + 3) = (x - (-3)), so a = -3 and the remainder is f(-3).", hints: ["x + 3 = 0.", "x = -3.", "-3."] },
      // @q03
      { id: "U33L1-mcq-3", type: "mcq", category: "word", prompt: "A machine's cost model is f(x) = 2x³ - x. Checking if (x - 1) is a factor means evaluating f(1). f(1) = …", options: [ { id: "a", text: "2" }, { id: "b", text: "0" }, { id: "c", text: "1" }, { id: "d", text: "-1" } ], correctOptionId: "c", diagnoses: { b: "0 would mean a factor — but f(1) = 2 - 1 = 1.", a: "2 is the leading coefficient.", d: "-1 is -x at x = 1 alone." }, explanation: "f(1) = 2(1) - 1 = 1 — not 0, so (x - 1) is NOT a factor.", hints: ["2(1³) - 1.", "2 - 1.", "1."] },
      // @q04
      { id: "U33L1-mcq-4", type: "mcq", category: "procedural", prompt: "f(x) = x³ - 2x + 4. Remainder when divided by (x - 2) = …", options: [ { id: "a", text: "0" }, { id: "b", text: "4" }, { id: "c", text: "6" }, { id: "d", text: "8" } ], correctOptionId: "d", diagnoses: { b: "4 is the constant term.", c: "6 is 2x at x=3 — no.", a: "0 would mean (x-2) is a factor." }, explanation: "f(2) = 8 - 4 + 4 = 8.", hints: ["2³ - 4 + 4.", "8.", "8."] },
      // @q05
      { id: "U33L1-mcq-5", type: "mcq", category: "conceptual", prompt: "If f(3) = 0, then…", options: [ { id: "a", text: "(x - 3) is a factor of f(x)" }, { id: "b", text: "the remainder when dividing is 3" }, { id: "c", text: "f has no roots" }, { id: "d", text: "(x + 3) is a factor" } ], correctOptionId: "a", diagnoses: { b: "f(3)=0 means the remainder is 0, not 3.", c: "x = 3 IS a root.", d: "(x+3) would need f(-3)=0." }, explanation: "The Factor Theorem: f(a)=0 ↔ (x−a) is a factor.", hints: ["Factor Theorem.", "f(3)=0.", "(x−3) factor."] },
      // @q06
      { id: "U33L1-mcq-6", type: "mcq", category: "word", prompt: "A bridge's deflection is f(x) = x³ - 7x + 6. Which bracket divides it evenly?", options: [ { id: "a", text: "(x - 2)" }, { id: "b", text: "(x - 1)" }, { id: "c", text: "(x + 1)" }, { id: "d", text: "(x - 0)" } ], correctOptionId: "b", diagnoses: { a: "f(2) = 8 - 14 + 6 = 0 — so (x−2) divides it too; both are factors, pick (x−1).", c: "f(-1) = -1 + 7 + 6 = 12 ≠ 0.", d: "x only divides if f(0)=0 (it's 6)." }, explanation: "f(1) = 1 - 7 + 6 = 0, and also f(2) = 8 - 14 + 6 = 0 — both (x-1) and (x-2) are factors.", hints: ["f(1).", "1 - 7 + 6.", "0 → factor."] },
      // @q07
      { id: "U33L1-num-1", type: "numeric-input", category: "procedural", prompt: "f(x) = x² + 4x + 3. Remainder when divided by (x + 1): find f(-1).", answer: 0, tolerance: 0, explanation: "f(-1) = 1 - 4 + 3 = 0 — so (x+1) is a factor.", hints: ["Plug -1.", "1 - 4 + 3.", "0."] },
      // @q08
      { id: "U33L1-num-2", type: "numeric-input", category: "procedural", prompt: "f(x) = x³ - 2x + 4. Remainder when divided by (x + 1) = …", answer: 5, tolerance: 0, explanation: "f(-1) = -1 + 2 + 4 = 5.", hints: ["(-1)³ - 2(-1) + 4.", "-1 + 2 + 4.", "5."] },
      // @q09
      { id: "U33L1-num-3", type: "numeric-input", category: "conceptual", prompt: "For what a is (x - a) a factor of x² - 9?", answer: 3, tolerance: 0, explanation: "x² - 9 = (x-3)(x+3), so a = 3 (or -3).", hints: ["Factor x² - 9.", "(x-3)(x+3).", "3."] },
      // @q10
      { id: "U33L1-frac-1", type: "fraction-input", category: "conceptual", prompt: "f(x) = 2x + 1 divided by (x - 1/2). Remainder = f(1/2). Express f(1/2) as a fraction.", numerator: 2, denominator: 1, acceptEquivalent: true, explanation: "f(1/2) = 2(1/2) + 1 = 2 → remainder 2.", hints: ["2(1/2).", "+1 = 2.", "2/1."] },
      // @q11
      { id: "U33L1-tf-1", type: "true-false-justify", category: "conceptual", prompt: "If f(a) = 0, then (x - a) divides f(x) exactly (remainder 0).", isTrue: true, explanation: "The Factor Theorem: a root of f means the matching bracket is a factor.", hints: ["Factor Theorem.", "Remainder 0.", "True."] },
      // @q12
      { id: "U33L1-tf-2", type: "true-false-justify", category: "conceptual", prompt: "Dividing by (x + 5) means you evaluate f(5).", isTrue: false, explanation: "(x + 5) = (x - (-5)), so you evaluate f(-5), not f(5).", hints: ["x + 5 = 0.", "x = -5.", "f(-5)."] },
      // @q13
      { id: "U33L1-order-1", type: "order-steps", category: "word", prompt: "Order the steps to find the remainder dividing x² + x + 1 by (x - 2).", sequence: ["Note a = 2", "Evaluate f(2) = 4 + 2 + 1", "State remainder = 7"], diagnoses: { "Note a = 2@1": "Read a first.", "Evaluate f(2) = 4 + 2 + 1@0": "Then plug.", "State remainder = 7@0": "Conclude last." }, explanation: "Read a, plug in, state the remainder.", hints: ["a = 2.", "4 + 2 + 1.", "7."] },
      // @q14
      { id: "U33L1-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each divisor to the plug-in value.", pairs: [ { source: "(x - 3)", target: "f(3)" }, { source: "(x + 2)", target: "f(-2)" }, { source: "(x - 1)", target: "f(1)" } ], diagnoses: { "(x - 3)->f(-2)": "Minus 3 means plug +3.", "(x + 2)->f(3)": "+2 means plug -2.", "(x - 1)->f(-2)": "Minus 1 means plug +1." }, explanation: "The plug-in is the root of the bracket: (x−a) → f(a).", hints: ["x - 3.", "x + 2.", "x - 1."] },
      // @q15
      { id: "U33L1-graph-1", type: "graph-interact", category: "word", prompt: "f(x) = x² + 2x + 1. Set the slider to the remainder when divided by (x - 1) (key: value).", challenge: "Set the slider to 4.", validate: { value: 4 }, tolerance: 0.01, explanation: "f(1) = 1 + 2 + 1 = 4.", hints: ["1 + 2 + 1.", "4.", "4."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "plugs in the wrong sign", diagnosis: "(x + 2) needs f(-2): the plug-in is the bracket's root.", hint: "Solve bracket = 0." },
    { wrongPattern: "forgets the remainder is f(a), not a quotient", diagnosis: "You evaluate, not divide when using the theorem.", hint: "Plug and evaluate." },
    { wrongPattern: "thinks f(a)=0 means no factor", diagnosis: "f(a)=0 means (x−a) IS a factor — remainder zero.", hint: "Zero = factor." },
  ],
  recallTags: ["polynomial", "remainder theorem", "factor theorem", "divide", "f(a)"],
  discovery: {
    challenges: [
      { instruction: "Compute f(2) for f(x) = x³ - 2x + 4: 8 - 4 + 4.", observe: "f(2) = 8 — the same 8 appears as the remainder when dividing by (x - 2)." },
      { instruction: "Try f(1) and divide by (x - 1).", observe: "f(1) = 3 and the remainder is 3 again — the pattern holds for any input." },
    ],
    predict: { prompt: "The remainder when f(x) = x² + 3x - 5 is divided by (x - 2) is…", options: [{ id: "a", text: "5" }, { id: "b", text: "3" }, { id: "c", text: "-5" }], reveal: "5 — f(2) = 4 + 6 - 5 = 5. Evaluate, don't divide." },
    sayItYourWay: { prompt: "How do you find a remainder without dividing?", phrasings: [{ id: "a", text: "Plug the number into f — the remainder is f(a)", correct: true, why: "The Remainder Theorem: divide by (x−a), remainder is f(a)." }, { id: "b", text: "Plug 0 into f", correct: false, why: "f(0) is the remainder for (x − 0) only." }, { id: "c", text: "The remainder is always 1", correct: false, why: "Remainders depend on the polynomial and divisor." }], formalName: "the Remainder Theorem — dividing f(x) by (x − a) leaves remainder f(a); f(a) = 0 means (x − a) is a factor" },
    stretch: "Right-triangle trig laws don't reach every triangle. Next: rules for any triangle — the sine and cosine rules.", 
  },
};
