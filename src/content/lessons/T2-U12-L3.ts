import type { Lesson } from "../schema";

export const T2U12L3: Lesson = {
  // @meta
  id: "T2-U12-L3",
  tier: 2,
  unit: "Manipulation",
  title: "Running Expansion Backwards",
  prerequisites: ["T2-U11-L3","T2-U12-L1","T2-U12-L2"],
  estimatedMinutes: 12,
  hook: {
    question: "You expanded 3(x + 4) into 3x + 12. Now run it backwards: can you spot the shared factor hiding in 3x + 12 and fold it back into a bracket? This reverse move — factorization — is the algebra superpower that solves equations later.",
    type: "puzzle",
  },
  intuitionBlocks: [{ widget: "ratio-bar", props: { mode: "factorout", a: 3, b: 12, factor: 3 }, narrative: "Shade 3x + 12 as one expression. The bar shows both terms share a factor of 3: 3x = 3·x and 12 = 3·4. Pull the shared 3 out front and the expression folds back into 3(x + 4) — expansion run in reverse." }],

  // @discovery
  formalBlocks: [
    { definition: "Factorizing means writing an expression as a product by pulling out the highest common factor (HCF) of the terms: divide each term by the HCF and bracket the quotient. 3x + 12 → HCF 3 → 3(x + 4). Check by expanding: 3(x + 4) = 3x + 12. The HCF is the biggest factor of BOTH the coefficients and any shared letters.", examples: ["6x + 9 = 3(2x + 3) — HCF 3 divides 6x and 9.", "4x² + 8x = 4x(x + 2) — 4 and x divide both terms."], pitfall: "Factor out the HIGHEST common factor. 6x + 12 factored as 2(3x + 6) is valid but incomplete — the HCF is 6, so the tidy form is 6(x + 2).", altExplanations: ["GAME: un-stacking a loot pile — 6x + 9 has a common boss-drop of 3, so it unpacks as 3(2x + 3). Factorizing is the reverse craft of expanding: pull out the biggest shared multiplier.", "MONEY: 6x + 9 pays both parts with the largest shared bill size — 3-dollar bills: 6x is 2x bills, 9 is 3 bills. The HCF is the biggest bill both parts accept."] },
  ],
  gutChecks: [{ prompt: "Factorize 5x + 15.", answer: "5(x + 3) — HCF 5, and expanding 5(x + 3) = 5x + 15 checks." }],
  quiz: {
    pool: [
      // @q01
      { id: "U12L3-mcq-1", type: "mcq", category: "procedural", prompt: "Factorize 3x + 12.", options: [ { id: "a", text: "3(x + 4)" }, { id: "b", text: "3(x + 12)" }, { id: "c", text: "x(3 + 12)" }, { id: "d", text: "3x + 4" } ], correctOptionId: "a", diagnoses: { b: "12÷3 = 4, not 12.", c: "x doesn't divide 12.", d: "That's not factored." }, explanation: "HCF of 3x and 12 is 3 → 3(x + 4).", hints: ["What divides 3x and 12?", "3.", "HCF of 3x and 12 is 3 → 3(x + 4)."] },
      // @q02
      { id: "U12L3-mcq-2", type: "mcq", category: "conceptual", prompt: "Why is 2(3x + 6) NOT the fully factored form of 6x + 12?", options: [ { id: "a", text: "It changes the value" }, { id: "b", text: "2 isn't the highest common factor" }, { id: "c", text: "It's not a product" }, { id: "d", text: "Brackets are wrong" } ], correctOptionId: "b", diagnoses: { a: "2(3x+6) = 6x+12 — same value.", c: "It IS a product (2 × bracket).", d: "Brackets are fine." }, explanation: "The HCF is 6, so the tidy form is 6(x + 2).", hints: ["Biggest factor of both?", "6.", "The HCF is 6, so the tidy form is 6(x + 2)."] },
      // @q03
      { id: "U12L3-mcq-3", type: "mcq", category: "word", prompt: "A farm has 8x sheep and 12x goats. Factorize the total.", options: [ { id: "a", text: "x(8 + 12)" }, { id: "b", text: "4(2x + 3x)" }, { id: "c", text: "4x(2 + 3)" }, { id: "d", text: "20x²" } ], correctOptionId: "c", diagnoses: { b: "4 is a factor but x is too — HCF is 4x.", a: "x(8+12) = 20x, valid but 4x is higher.", d: "20x² wrong — add, don't multiply." }, explanation: "8x + 12x = 4x(2 + 3) — both 4 and x divide both terms.", hints: ["HCF of 8x and 12x?", "4x.", "8x + 12x = 4x(2 + 3) — both 4 and x divide both terms."] },
      // @q04
      { id: "U12L3-mcq-4", type: "mcq", category: "procedural", prompt: "Factorize 4x² + 8x.", options: [ { id: "a", text: "x(4x + 8)" }, { id: "b", text: "4(x² + 8x)" }, { id: "c", text: "2x(2x + 4)" }, { id: "d", text: "4x(x + 2)" } ], correctOptionId: "d", diagnoses: { b: "4 doesn't divide 8x fully? It does — but x is also common; HCF is 4x.", c: "2x is a factor but not the highest — HCF is 4x.", a: "x is a factor but 4 is too — HCF is 4x." }, explanation: "HCF is 4x: 4x·x = 4x² and 4x·2 = 8x → 4x(x + 2).", hints: ["HCF of 4x² and 8x?", "4x.", "HCF is 4x: 4x·x = 4x² and 4x·2 = 8x → 4x(x + 2)."] },
      // @q05
      { id: "U12L3-mcq-5", type: "mcq", category: "conceptual", prompt: "What is the HCF of 6x³ and 9x²?", options: [ { id: "a", text: "3x²" }, { id: "b", text: "3x³" }, { id: "c", text: "6x²" }, { id: "d", text: "x²" } ], correctOptionId: "a", diagnoses: { b: "6x³ has x³ but 9x² only x² — highest x-power shared is x².", c: "6 doesn't divide 9.", d: "Miss the common 3." }, explanation: "3 divides 6 and 9; x² is the highest shared power → 3x².", hints: ["Most of 6 and 9?", "3.", "x² shared → 3x²."] },
      // @q06
      { id: "U12L3-mcq-6", type: "mcq", category: "word", prompt: "A garden's area is 10x + 15. Which shows it factored as length × width?", options: [ { id: "a", text: "2(5x + 15)" }, { id: "b", text: "5(2x + 3)" }, { id: "c", text: "5(x + 15)" }, { id: "d", text: "10(x + 5)" } ], correctOptionId: "b", diagnoses: { a: "2 isn't the HCF — 5 is.", c: "15÷5 = 3, not 15.", d: "10 doesn't divide 15." }, explanation: "HCF 5: 10x + 15 = 5(2x + 3).", hints: ["HCF of 10 and 15?", "5.", "HCF 5: 10x + 15 = 5(2x + 3)."] },
      // @q07
      { id: "U12L3-num-1", type: "numeric-input", category: "procedural", prompt: "Factorize 6x + 9. Type the number outside the bracket.", answer: 3, tolerance: 0, explanation: "HCF of 6 and 9 is 3 → 3(2x + 3).", hints: ["HCF of 6 and 9.", "3.", "HCF of 6 and 9 is 3 → 3(2x + 3)."] },
      // @q08
      { id: "U12L3-num-2", type: "numeric-input", category: "procedural", prompt: "Factorize 8x + 12x. Type the number outside the bracket.", answer: 4, tolerance: 0, explanation: "8x + 12x = 4x(2 + 3) — number part is 4.", hints: ["HCF of 8 and 12.", "4.", "8x + 12x = 4x(2 + 3) — number part is 4."] },
      // @q09
      { id: "U12L3-num-3", type: "numeric-input", category: "conceptual", prompt: "Factorize 4x² + 6x. Type the number outside the bracket.", answer: 2, tolerance: 0, explanation: "HCF is 2x: the number part is 2 → 2x(2x + 3).", hints: ["HCF of 4 and 6.", "2.", "HCF is 2x: the number part is 2 → 2x(2x + 3)."] },
      // @q10
      { id: "U12L3-frac-1", type: "fraction-input", category: "conceptual", prompt: "Factorize x + 1/2. Write the constant inside the bracket as a fraction.", numerator: 1, denominator: 2, acceptEquivalent: true, explanation: "HCF is 1: x + 1/2 = 1(x + 1/2) → already in factored form with 1 outside.", hints: ["Every term is a multiple of 1.", "It's already factored.", "HCF is 1: x + 1/2 = 1(x + 1/2) → already in factored form with 1 outside."] },
      // @q11
      { id: "U12L3-tf-1", type: "true-false-justify", category: "conceptual", prompt: "6x + 12 factors to 6(x + 2).", isTrue: true, explanation: "HCF 6: 6x ÷ 6 = x and 12 ÷ 6 = 2 → 6(x + 2).", hints: ["HCF of 6x and 12.", "6.", "True — 6(x + 2)."] },
      // @q12
      { id: "U12L3-tf-2", type: "true-false-justify", category: "conceptual", prompt: "3x + 3 = 3(x).", isTrue: false, explanation: "3 ÷ 3 = 1, so 3x + 3 = 3(x + 1) — the 1 must remain.", hints: ["Divide each term by 3.", "3 ÷ 3 = 1.", "False — 3(x + 1)."] },
      // @q13
      { id: "U12L3-order-1", type: "order-steps", category: "word", prompt: "Order the steps to factorize 6x + 12.", sequence: ["Find HCF: 6", "Divide 6x by 6: x", "Divide 12 by 6: 2", "Write 6(x + 2)"], diagnoses: { "Divide 6x by 6: x@0": "Find the HCF first.", "Write 6(x + 2)@0": "Divide both terms first.", "Find HCF: 6@1": "The HCF comes first." }, explanation: "Find the HCF, divide each term, write the product.", hints: ["Find HCF first.", "Divide each term.", "Write the bracket."] },
      // @q14
      { id: "U12L3-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each expression to its factored form.", pairs: [ { source: "5x + 10", target: "5(x + 2)" }, { source: "8x + 12", target: "4(2x + 3)" }, { source: "3x² + 6x", target: "3x(x + 2)" } ], diagnoses: { "5x + 10->4(2x + 3)": "HCF of 5x,10 is 5.", "8x + 12->3x(x + 2)": "HCF of 8,12 is 4 — no x shared.", "3x² + 6x->5(x + 2)": "HCF is 3x." }, explanation: "Pull the HCF from each pair.", hints: ["Find each HCF.", "Check the bracket by expanding.", "Pull the HCF from each pair."] },
      // @q15
      { id: "U12L3-graph-1", type: "graph-interact", category: "word", prompt: "Set the slider to the number outside the bracket when you factorize 9x + 12 (key: value).", challenge: "Adjust the values below so they match the condition described in the prompt.", validate: { value: 3 }, tolerance: 0, explanation: "HCF of 9 and 12 is 3 → 3(3x + 4).", hints: ["HCF of 9 and 12.", "3.", "Set slider to 3."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "stops at a non-highest common factor", diagnosis: "6x + 12 → 2(3x + 6) is valid but not fully factored; pull out 6 → 6(x + 2).", hint: "Find the biggest number AND letter that divide all terms." },
    { wrongPattern: "forgets the 1 when a term is fully factored", diagnosis: "3x + 3 = 3(x + 1), not 3(x) — dividing 3 by 3 leaves 1, not nothing.", hint: "Every term must survive the division." },
    { wrongPattern: "drops a sign", diagnosis: "−4x − 8 = −4(x + 2) — pull the minus sign out too.", hint: "Factor a negative out to keep the bracket tidy." },
  ],
  recallTags: ["factorize", "common-factor", "brackets"],
  discovery: {
    challenges: [
      { instruction: "Show 3x + 12 on the bar and find what divides both terms.", observe: "3 divides 3x and 12, so 3x + 12 = 3(x + 4)." },
      { instruction: "Now try 4x² + 8x. What's the common factor?", observe: "4x divides both: 4x² + 8x = 4x(x + 2)." },
    ],
    predict: { prompt: "Factorize 6x + 9. What goes outside the bracket?", options: [{ id: "a", text: "3" }, { id: "b", text: "6" }, { id: "c", text: "9" }], reveal: "3 — the HCF of 6x and 9. 6x + 9 = 3(2x + 3)." },
    sayItYourWay: { prompt: "What are you doing when you factorize?", phrasings: [{ id: "a", text: "Finding the shared factor and pulling it out", correct: true, why: "3x + 12 → 3(x + 4): the 3 is shared by both terms." }, { id: "b", text: "Making the numbers smaller", correct: false, why: "Values stay equal; only the 'packaging' changes." }, { id: "c", text: "Removing the letters", correct: false, why: "Letters stay — they move inside the bracket." }], formalName: "factorizing a common factor" },
    stretch: "You can factorize 6x² + 9x needing 3x. But what about x² + 5x + 6 — it has no common factor across ALL three terms. Factorizing that needs the pair-hunt of the next lesson.",
  },
};
