import type { Lesson } from "../schema";

export const T5U32L2: Lesson = {
  // @meta
  id: "T5-U32-L2",
  tier: 5,
  unit: "Exponentials & logarithms",
  title: "The Logarithm Is a Question",
  prerequisites: ["T1-U7-L2","T5-U31-L3","T5-U32-L1"],
  estimatedMinutes: 14,
  hook: { question: "2 to the what equals 8? The answer is 3, because 2³ = 8. Now ask: 2 to the what equals 100? There IS an answer (about 6.64), and the logarithm names exactly that question. log₂100 asks '2 to the WHAT gives 100?' — a logarithm isn't a number you look up; it's a question you can now write down.", type: "puzzle" },
  intuitionBlocks: [{ widget: "number-line", props: { mode: "markers", min: 0, max: 32, powerBase: 2, markers: [{ value: 1, label: "2⁰" }, { value: 2, label: "2¹" }, { value: 4, label: "2²" }, { value: 8, label: "2³" }, { value: 16, label: "2⁴" }, { value: 32, label: "2⁵" }] }, narrative: "Slide along powers of 2 on the number line: 1, 2, 4, 8, 16… The logarithm asks which position a target sits at — log₂8 = 3 because 8 sits at position 3. Drag the target to 32 and watch log₂32 = 5 appear. The line turns multiplication into addition of positions." }],

  // @discovery
  formalBlocks: [{ definition: "A LOGARITHM answers 'base to the WHAT equals this?': $\\log_b(a) = x$ exactly when $b^x = a$. The base b must be positive (not 1). Laws mirror the index laws students met in U7: $\\log_b(mn) = \\log_b m + \\log_b n$ and $\\log_b(m/n) = \\log_b m - \\log_b n$ — multiplication becomes addition of log-positions.", examples: ["$\\log_2 8 = 3$ because $2^3 = 8$.", "$\\log_3 81 = 4$ because $3^4 = 81$."], pitfall: "log₂(-4) is impossible: no power of 2 is negative, so the logarithm's input must be positive. Also, log₁x is undefined — any power of 1 is still 1.", altExplanations: ["GAME: log₂8 is a level-lookup — it asks '2 to the WHAT power gives 8?' and the answer is 3 (levels). The laws mirror the index laws: log(mn) = log m + log n because multiplying indices adds powers (recall T1-U7).", "MONEY: reverse compounding — 'my money tripled to 81' asks how many triplings: log₃81 = 4. A logarithm counts the multiplications that led to a total; its input must be positive, because no power of a positive base ever produces a negative."] }],
  gutChecks: [{ prompt: "What is log₅ 25?", answer: "2 — because 5² = 25." }],
  quiz: {
    pool: [
      // @q01
      { id: "U32L2-mcq-1", type: "mcq", category: "procedural", prompt: "log₂ 8 = …", options: [ { id: "a", text: "3" }, { id: "b", text: "8" }, { id: "c", text: "2" }, { id: "d", text: "16" } ], correctOptionId: "a", diagnoses: { b: "8 is the target, not the exponent.", c: "2 is the base.", d: "16 is 2×8 — wrong idea." }, explanation: "2³ = 8, so log₂8 = 3.", hints: ["2^? = 8.", "2³.", "2³ = 8, so log₂8 = 3."] },
      // @q02
      { id: "U32L2-mcq-2", type: "mcq", category: "conceptual", prompt: "What question does log₃ 81 ask?", options: [ { id: "a", text: "81 divided by 3?" }, { id: "b", text: "3 to the what equals 81?" }, { id: "c", text: "81 times 3?" }, { id: "d", text: "what is 3³?" } ], correctOptionId: "b", diagnoses: { a: "That's a quotient.", c: "That's a product.", d: "3³ = 27, not 81." }, explanation: "log_b(a) asks for the exponent: b^? = a.", hints: ["Base to the what.", "Exponent.", "log_b(a) asks for the exponent: b^?"] },
      // @q03
      { id: "U32L2-mcq-3", type: "mcq", category: "word", prompt: "Sound doubles in 'loudness steps' every 3 dB. A whisper of 2 steps is 4 times louder than 1 step. log₂ 4 = …", options: [ { id: "a", text: "1" }, { id: "b", text: "4" }, { id: "c", text: "2" }, { id: "d", text: "8" } ], correctOptionId: "c", diagnoses: { b: "4 is the loudness, not the step.", a: "1 step would be 2×, not 4×.", d: "8 is 2³." }, explanation: "2² = 4, so log₂4 = 2 steps.", hints: ["2^? = 4.", "2².", "2² = 4, so log₂4 = 2 steps."] },
      // @q04
      { id: "U32L2-mcq-4", type: "mcq", category: "procedural", prompt: "log₃ 27 = …", options: [ { id: "a", text: "81" }, { id: "b", text: "9" }, { id: "c", text: "27" }, { id: "d", text: "3" } ], correctOptionId: "d", diagnoses: { b: "9 is 3² — one step too small.", c: "27 is the target.", a: "81 is 3⁴." }, explanation: "3³ = 27, so log₃27 = 3.", hints: ["3^? = 27.", "3³.", "3³ = 27, so log₃27 = 3."] },
      // @q05
      { id: "U32L2-mcq-5", type: "mcq", category: "conceptual", prompt: "log₂ 32 equals log₂ 4 + log₂ 8 because…", options: [ { id: "a", text: "multiplying 4×8 = 32 adds their log-positions" }, { id: "b", text: "adding 4+8 = 12" }, { id: "c", text: "they're both powers of 2" }, { id: "d", text: "no — the statement is false" } ], correctOptionId: "a", diagnoses: { b: "Logs add positions when the NUMBERS multiply, not add.", c: "True but not the reason.", d: "log₂4 + log₂8 = 2 + 3 = 5 = log₂32 — it holds." }, explanation: "log(mn) = log m + log n — multiplication turns into addition of exponents.", hints: ["4 × 8.", "2 + 3.", "log(mn) = log m + log n — multiplication turns into addition of exponents."] },
      // @q06
      { id: "U32L2-mcq-6", type: "mcq", category: "word", prompt: "Earthquakes: each whole number on the scale is 10× the energy. A 6 is how many times stronger than a 4?", options: [ { id: "a", text: "10×" }, { id: "b", text: "100×" }, { id: "c", text: "2×" }, { id: "d", text: "20×" } ], correctOptionId: "b", diagnoses: { a: "10× is one step (5 vs 4).", c: "2× is for adding, not multiplying.", d: "20 is 10+10, not 10×10." }, explanation: "Two steps up: 10×10 = 100× — the scale is logarithmic.", hints: ["6 − 4 = 2 steps.", "10².", "Two steps up: 10×10 = 100× — the scale is logarithmic."] },
      // @q07
      { id: "U32L2-num-1", type: "numeric-input", category: "procedural", prompt: "log₂ 16 = …", answer: 4, tolerance: 0, explanation: "2⁴ = 16.", hints: ["2^? = 16.", "2⁴.", "2⁴ = 16."] },
      // @q08
      { id: "U32L2-num-2", type: "numeric-input", category: "procedural", prompt: "log₅ 125 = …", answer: 3, tolerance: 0, explanation: "5³ = 125.", hints: ["5^? = 125.", "5³.", "5³ = 125."] },
      // @q09
      { id: "U32L2-num-3", type: "numeric-input", category: "conceptual", prompt: "log₂ 2 = …", answer: 1, tolerance: 0, explanation: "2¹ = 2 — any base's log of itself is 1.", hints: ["2¹ = 2.", "1.", "2¹ = 2 — any base's log of itself is 1."] },
      // @q10
      { id: "U32L2-frac-1", type: "fraction-input", category: "conceptual", prompt: "log₂ (1/2) — the exponent with 2^x = 1/2. Express the answer as a fraction.", numerator: -1, denominator: 1, acceptEquivalent: true, explanation: "2⁻¹ = 1/2 — negative exponents give reciprocals.", hints: ["2^? = ½.", "2⁻¹.", "2⁻¹ = 1/2 — negative exponents give reciprocals."] },
      // @q11
      { id: "U32L2-tf-1", type: "true-false-justify", category: "conceptual", prompt: "log₂ 8 + log₂ 4 = log₂ 32.", isTrue: true, explanation: "3 + 2 = 5 = log₂32 — multiplication turns to addition.", hints: ["3 + 2.", "5.", "3 + 2 = 5 = log₂32 — multiplication turns to addition."] },
      // @q12
      { id: "U32L2-tf-2", type: "true-false-justify", category: "conceptual", prompt: "log₂ (−8) is a valid real number.", isTrue: false, explanation: "No power of 2 is negative — the input must be positive.", hints: ["2^? > 0 always.", "Negative input.", "No power of 2 is negative — the input must be positive."] },
      // @q13
      { id: "U32L2-order-1", type: "order-steps", category: "word", prompt: "Order the steps to evaluate log₂ 64.", sequence: ["Ask: 2 to the what equals 64?", "List powers: 2,4,8,16,32,64", "Count positions: 6"], diagnoses: { "Ask: 2 to the what equals 64?@1": "Ask the question first.", "List powers: 2,4,8,16,32,64@0": "Then list.", "Count positions: 6@0": "Count last." }, explanation: "Whose power, list, count.", hints: ["What exponent?", "Powers.", "Whose power, list, count."] },
      // @q14
      { id: "U32L2-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each logarithm to its value.", pairs: [ { source: "log₂ 8", target: "3" }, { source: "log₁₀ 100", target: "2" }, { source: "log₅ 25", target: "2" } ], diagnoses: { "log₂ 8->2": "2³ = 8.", "log₁₀ 100->3": "10² = 100.", "log₅ 25->3": "5² = 25." }, explanation: "Each asks base^? = target.", hints: ["2³.", "10².", "Each asks base^?"] },
      // @q15
      { id: "U32L2-graph-1", type: "graph-interact", category: "word", prompt: "log₂ 8 = 3. Set the slider to the value of log₂ 8 (key: value).", challenge: "Adjust the values below so they match the condition described in the prompt.", validate: { value: 3 }, tolerance: 0.01, explanation: "2³ = 8 → log₂8 = 3.", hints: ["2³.", "3.", "2³ = 8 → log₂8 = 3."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "reads log as multiplication", diagnosis: "log₂8 is the EXPONENT (3), not 2×8.", hint: "Exponent, not product." },
    { wrongPattern: "takes logs of negative numbers", diagnosis: "No real power of a positive base is negative.", hint: "Input must be positive." },
    { wrongPattern: "adds logs when adding the numbers", diagnosis: "log m + log n = log(mn) — the numbers multiply.", hint: "× becomes +." },
  ],
  recallTags: ["logarithm", "log", "exponent", "base", "inverse of exponential"],
  discovery: {
    challenges: [
      { instruction: "Drag the target to 16 on the powers-of-2 line.", observe: "log₂16 = 4 — 16 sits at position 4 (2⁴)." },
      { instruction: "Now multiply two targets: place 4 and 8. Their positions are 2 and 3.", observe: "4 × 8 = 32 sits at position 5 = 2 + 3 — multiplying numbers ADDS their log positions. That's the logarithm's superpower." },
    ],
    predict: { prompt: "log₂ 8 = …", options: [{ id: "a", text: "3" }, { id: "b", text: "8" }, { id: "c", text: "2" }], reveal: "3 — because 2³ = 8. The log asks '2 to the what?'" },
    sayItYourWay: { prompt: "What is a logarithm, really?", phrasings: [{ id: "a", text: "The answer to 'base to the what equals this number?'", correct: true, why: "log_b(a) asks for the exponent." }, { id: "b", text: "A number multiplied by itself", correct: false, why: "That's a power; the log is the question that the power answers." }, { id: "c", text: "The base divided by the number", correct: false, why: "No — it's an exponent-finder, not a quotient." }], formalName: "logarithm — log_b(a) = the exponent x with bˣ = a (the inverse of the exponential)" },
    stretch: "Now that logs ask 'what exponent?', you can solve 2ˣ = 100 by writing x = log₂100. Next: using logs to solve the unsolvable — and a shortcut called Pascal.", 
  },
};
