import type { Lesson } from "../schema";

export const T5U32L3: Lesson = {
  // @meta
  id: "T5-U32-L3",
  tier: 5,
  unit: "Exponentials & logarithms",
  title: "Solving the Unsolvable, Plus Pascal's Shortcut",
  prerequisites: ["T2-U12-L2","T5-U31-L3","T5-U32-L2"],
  estimatedMinutes: 15,
  hook: { question: "You can't 'just solve' 2ˣ = 100 by rearranging like normal algebra — x is stuck in the exponent. But the logarithm was born for this: x = log₂100. And there's a bonus: expanding (a+b)³ used to mean multiplying three brackets. A triangular shortcut — Pascal's triangle — gives every coefficient at a glance. One lesson, two superpowers.", type: "puzzle" },
  intuitionBlocks: [{ widget: "graph-plotter", narrative: "Watch the curve y = 2ˣ. To solve 2ˣ = 100, trace across to x ≈ 6.64 — the log reads the graph's answer. Then build Pascal's triangle row by row: each entry is the sum of the two above it, and those rows ARE the coefficients of (a+b)ⁿ." }],

  // @discovery
  formalBlocks: [{ definition: "SOLVING EXPONENTIALS: $a^x = b$ becomes $x = \\log_a b$. Take the log of both sides to pull x out of the exponent. PASCAL'S TRIANGLE: row n (starting row 0) gives the coefficients of $(a+b)^n$. Each entry is the sum of the two above it. Row 3: 1, 3, 3, 1 → $(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$.", examples: ["$2^x = 100$: take log₂ both sides → $x = \\log_2 100 \\approx 6.64$.", "$(x+1)^2$: row 2 = 1, 2, 1 → $x^2 + 2x + 1$."], pitfall: "When expanding (a+b)ⁿ, the exponents on a DESCEND from n to 0 while b's ASCEND from 0 to n. The middle terms combine — don't forget the coefficient: 3a²b, not a²b.", altExplanations: ["GAME: solving 2ˣ = 100 is finding the level — take log₂ of both sides to pull x out of the exponent: x = log₂(100) ≈ 6.64. Pascal's triangle is the coefficient recipe — row 3 (1, 3, 3, 1) expands (a+b)³, exponents on a falling while b's rise.", "FOOD: measuring a growth recipe in reverse — beans double per day; 100 beans grew from 2 in x = log₂(100) ≈ 6.64 days. Pascal's triangle hands you the row of mixing coefficients: (x+1)² uses row 2 = 1, 2, 1."] }],
  gutChecks: [{ prompt: "What is x in 3ˣ = 81?", answer: "x = log₃81 = 4." }],
  quiz: {
    pool: [
      // @q01
      { id: "U32L3-mcq-1", type: "mcq", category: "procedural", prompt: "Solve 2ˣ = 32. x = …", options: [ { id: "a", text: "5" }, { id: "b", text: "16" }, { id: "c", text: "30" }, { id: "d", text: "2" } ], correctOptionId: "a", diagnoses: { b: "16 is 2⁴ — one power short.", c: "30 is 32−2 — not a power.", d: "2 is the base." }, explanation: "2⁵ = 32 → x = 5.", hints: ["2^? = 32.", "2⁵.", "5."] },
      // @q02
      { id: "U32L3-mcq-2", type: "mcq", category: "conceptual", prompt: "To solve 3ˣ = 7, you write…", options: [ { id: "a", text: "x = log₇ 3" }, { id: "b", text: "x = log₃ 7" }, { id: "c", text: "x = 7/3" }, { id: "d", text: "x = 3×7" } ], correctOptionId: "b", diagnoses: { a: "Base is 3, target is 7.", c: "That's a quotient, not the exponent.", d: "Multiplication doesn't find exponents." }, explanation: "Take log base 3 of both sides: x = log₃7.", hints: ["Log both sides.", "Base 3.", "log₃7."] },
      // @q03
      { id: "U32L3-mcq-3", type: "mcq", category: "word", prompt: "A culture doubles hourly. How many hours until it's 8× the start?", options: [ { id: "a", text: "4" }, { id: "b", text: "8" }, { id: "c", text: "3" }, { id: "d", text: "2" } ], correctOptionId: "c", diagnoses: { b: "8 is the multiplier, not the time.", a: "4 is 2² — that's 4×.", d: "2 is one doubling." }, explanation: "2ᵗ = 8 → t = log₂8 = 3.", hints: ["2^t = 8.", "log₂8.", "3."] },
      // @q04
      { id: "U32L3-mcq-4", type: "mcq", category: "procedural", prompt: "Pascal's row for (a+b)³ is…", options: [ { id: "a", text: "3, 3, 3" }, { id: "b", text: "1, 2, 1" }, { id: "c", text: "1, 4, 6, 4, 1" }, { id: "d", text: "1, 3, 3, 1" } ], correctOptionId: "d", diagnoses: { b: "1,2,1 is (a+b)².", c: "That's row 4 — for (a+b)⁴.", a: "The middle coefficients differ." }, explanation: "Row 3 = 1, 3, 3, 1 → a³ + 3a²b + 3ab² + b³.", hints: ["Sum of row above.", "1,3,3,1.", "1, 3, 3, 1."] },
      // @q05
      { id: "U32L3-mcq-5", type: "mcq", category: "conceptual", prompt: "Why can logs solve 5ˣ = 13 exactly?", options: [ { id: "a", text: "taking log₅ both sides isolates x as log₅13" }, { id: "b", text: "logs multiply both sides by 5" }, { id: "c", text: "13/5 is the exact answer" }, { id: "d", text: "they can't — it's unsolvable" } ], correctOptionId: "a", diagnoses: { b: "Logs extract exponents, they don't multiply.", c: "13/5 ignores the exponent structure.", d: "Logs were invented for exactly this." }, explanation: "log₅(5ˣ) = x by definition, so x = log₅13.", hints: ["log(5ˣ).", "= x.", "log₅13."] },
      // @q06
      { id: "U32L3-mcq-6", type: "mcq", category: "word", prompt: "A population triples yearly. Years until 27× the start = …", options: [ { id: "a", text: "9" }, { id: "b", text: "3" }, { id: "c", text: "27" }, { id: "d", text: "6" } ], correctOptionId: "b", diagnoses: { a: "9 is 3² — that's 9×.", c: "27 is the multiplier.", d: "6 is 2 doublings of tripling — no." }, explanation: "3ᵗ = 27 → t = log₃27 = 3.", hints: ["3^t = 27.", "log₃27.", "3."] },
      // @q07
      { id: "U32L3-num-1", type: "numeric-input", category: "procedural", prompt: "Solve 5ˣ = 125. x = …", answer: 3, tolerance: 0, explanation: "5³ = 125 → x = 3.", hints: ["5^? = 125.", "5³.", "3."] },
      // @q08
      { id: "U32L3-num-2", type: "numeric-input", category: "procedural", prompt: "Solve 2ˣ = 64. x = …", answer: 6, tolerance: 0, explanation: "2⁶ = 64 → x = 6.", hints: ["2,4,8,16,32,64.", "2⁶.", "6."] },
      // @q09
      { id: "U32L3-num-3", type: "numeric-input", category: "conceptual", prompt: "In (a+b)³ = a³ + 3a²b + 3ab² + b³, the coefficient of a²b is…", answer: 3, tolerance: 0, explanation: "Pascal's row 1,3,3,1 — the second entry is 3.", hints: ["Row 3.", "1,3,3,1.", "3."] },
      // @q10
      { id: "U32L3-frac-1", type: "fraction-input", category: "conceptual", prompt: "log₃ (1/3). Express the answer as a fraction over 1.", numerator: -1, denominator: 1, acceptEquivalent: true, explanation: "3⁻¹ = 1/3 → log₃(1/3) = -1.", hints: ["3^? = 1/3.", "3⁻¹.", "-1/1."] },
      // @q11
      { id: "U32L3-tf-1", type: "true-false-justify", category: "conceptual", prompt: "The entries in Pascal's row 3 (1, 3, 3, 1) sum to 8 = 2³.", isTrue: true, explanation: "1+3+3+1 = 8 — every row sums to 2ⁿ.", hints: ["1+3+3+1.", "8.", "True."] },
      // @q12
      { id: "U32L3-tf-2", type: "true-false-justify", category: "conceptual", prompt: "(a+b)² expands to a² + b².", isTrue: false, explanation: "It's a² + 2ab + b² — the middle term 2ab comes from Pascal's row 1,2,1.", hints: ["Pascal row 2.", "1,2,1.", "2ab missing."] },
      // @q13
      { id: "U32L3-order-1", type: "order-steps", category: "word", prompt: "Order the steps to solve 2ˣ = 100.", sequence: ["Take log₂ of both sides", "Use log₂(2ˣ) = x", "Write x = log₂100"], diagnoses: { "Take log₂ of both sides@1": "Log first.", "Use log₂(2ˣ) = x@0": "Simplify the left.", "Write x = log₂100@0": "Conclude last." }, explanation: "Log, simplify, conclude.", hints: ["Log both sides.", "log₂(2ˣ).", "log₂100."] },
      // @q14
      { id: "U32L3-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each expansion to its Pascal row.", pairs: [ { source: "(a+b)²", target: "1, 2, 1" }, { source: "(a+b)³", target: "1, 3, 3, 1" }, { source: "(a+b)¹", target: "1, 1" } ], diagnoses: { "(a+b)²->1, 3, 3, 1": "Square uses row 2: 1,2,1.", "(a+b)³->1, 2, 1": "Cube uses row 3: 1,3,3,1.", "(a+b)¹->1, 2, 1": "Row 1 is just 1,1." }, explanation: "Row n gives (a+b)ⁿ's coefficients.", hints: ["n = 2.", "n = 3.", "n = 1."] },
      // @q15
      { id: "U32L3-graph-1", type: "graph-interact", category: "word", prompt: "In (a+b)³, the coefficient of ab² is 3. Set the slider to the coefficient of a²b (key: value).", challenge: "Set the slider to 3.", validate: { value: 3 }, tolerance: 0.01, explanation: "Row 3 = 1,3,3,1 → both middle coefficients are 3.", hints: ["1,3,3,1.", "3.", "3."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "forgets the middle terms in (a+b)ⁿ", diagnosis: "(a+b)² is a²+2ab+b² — Pascal's row gives every coefficient.", hint: "Use the row." },
    { wrongPattern: "solves 2ˣ = 100 by dividing", diagnosis: "x is an exponent — divide won't reach it; take the log.", hint: "Log both sides." },
    { wrongPattern: "uses the wrong base in the log", diagnosis: "aˣ = b means x = log_a b — the base matches a.", hint: "Base a." },
  ],
  recallTags: ["log", "solve exponential", "Pascal", "binomial", "coefficients"],
  discovery: {
    challenges: [
      { instruction: "Trace y = 2ˣ to solve 2ˣ = 8: read x off the graph.", observe: "The curve passes y = 8 exactly at x = 3 — the graph IS the log's answer." },
      { instruction: "Build Pascal's row for n = 3: each entry adds the two above it.", observe: "Row 3 is 1, 3, 3, 1 — exactly the coefficients of (a+b)³ = a³ + 3a²b + 3ab² + b³." },
    ],
    predict: { prompt: "The coefficient of a²b in (a+b)³ is…", options: [{ id: "a", text: "3" }, { id: "b", text: "1" }, { id: "c", text: "2" }], reveal: "3 — Pascal's row 1, 3, 3, 1 gives the coefficients in order." },
    sayItYourWay: { prompt: "What does Pascal's triangle give you?", phrasings: [{ id: "a", text: "The coefficients of (a+b)ⁿ, built by adding neighbors", correct: true, why: "Each row's entries are the expansion's coefficients." }, { id: "b", text: "The exponents of each term", correct: false, why: "The exponents descend by pattern; the numbers are coefficients." }, { id: "c", text: "The solutions to quadratics", correct: false, why: "That's the discriminant's job." }], formalName: "Pascal's triangle — binomial coefficients; row n gives the coefficients of (a+b)ⁿ" },
    stretch: "Polynomials get their own arithmetic and a surprising plug-in trick next: evaluating f(2) is secretly a remainder.", 
  },
};
