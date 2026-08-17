import type { Lesson } from "../schema";

export const T1U8L3: Lesson = {
  // @meta
  id: "T1-U8-L3",
  tier: 1,
  unit: "Roots & surds",
  title: "Why We Rationalize",
  prerequisites: ["T1-U7-L4","T1-U8-L1","T1-U8-L2"],
  estimatedMinutes: 12,
  hook: {
    question: "One textbook writes a slope as 1/√2, another as √2/2. A calculator says both are ≈ 0.7071 — so why do mathematicians insist on the second? The difference is inside the fraction bar, and it matters more than you'd think.",
    type: "paradox",
  },
  intuitionBlocks: [{ widget: "number-line", narrative: "Mark 1/√2 ≈ 0.7071 and √2/2 ≈ 0.7071 — the point lands in exactly the same place. The two expressions are the same number, but one of them left the square root hiding in the denominator. Building a tidy, everyday fraction (with no root downstairs) is called rationalizing." }],

  // @discovery
  formalBlocks: [
    { definition: "A denominator containing a surd (like 1/√2) is considered untidy. Rationalizing replaces it with a whole number by multiplying top and bottom by the surd itself: multiply by √2/√2 = 1, which never changes the value. Fraction bars with whole-number denominators are easier to add, compare, and estimate.", examples: ["1/√3 × √3/√3 = √3/3 — the denominator becomes the clean 3.", "2/√5 × √5/√5 = 2√5/5 — denominator 5, and the 2 rides along on top."], pitfall: "Do NOT multiply only the denominator — a fraction changes if you alter just one part. You must multiply the numerator by the same surd, keeping the value fixed. And remember: √2 × √2 = 2, NOT √2.", altExplanations: ["FOOD: serving 1/2 of a 2-litre jug — you wouldn't pour half then double the label; instead make the denominator clean. Rationalizing 1/√2 turns the messy surd bottom into a tidy whole: ×√2/√2 = √2/2.", "GAME: converting a weapon's damage from 'per √2' to 'per whole unit' — multiply the set by the surd over itself (a 1x multiplier) to clear the denominator without changing the value: 2/√5 → 2√5/5."] },
  ],
  gutChecks: [{ prompt: "Rationalize 3/√7.", answer: "3√7/7 — multiply top and bottom by √7: (3×√7)/(√7×√7) = 3√7/7." }],
  quiz: {
    pool: [
      // @q01
      { id: "U8L3-mcq-1", type: "mcq", category: "procedural", prompt: "Rationalize: 1/√3.", options: [ { id: "a", text: "√3/3" }, { id: "b", text: "√3" }, { id: "c", text: "1/3" }, { id: "d", text: "3/√3" } ], correctOptionId: "a", diagnoses: { b: "√3 alone is just the numerator of the tidy form.", c: "You multiplied only the denominator — that changes the value.", d: "That's the same as the start, still untidy downstairs." }, explanation: "1/√3 × √3/√3 = √3/3 — the denominator becomes the whole 3.", hints: ["Multiply top and bottom by √3.", "√3 × √3 = 3.", "1/√3 × √3/√3 = √3/3 — the denominator becomes the whole 3."] },
      // @q02
      { id: "U8L3-mcq-2", type: "mcq", category: "conceptual", prompt: "Why is √2/2 preferred over 1/√2?", options: [ { id: "a", text: "It is a bigger number" }, { id: "b", text: "The denominator is a whole number, easier to compare and add" }, { id: "c", text: "The surd is gone entirely" }, { id: "d", text: "Decimals are exact in √2/2" } ], correctOptionId: "b", diagnoses: { a: "Both are ≈ 0.7071 — same value.", c: "√2 remains, but upstairs; only the denominator is rational.", d: "Neither expression is a terminating decimal." }, explanation: "A whole-number denominator makes fractions easier to add, compare, and estimate — while the value stays identical.", hints: ["What changed between the two forms?", "The surd moved upstairs.", "Whole denominator wins."] },
      // @q03
      { id: "U8L3-mcq-3", type: "mcq", category: "word", prompt: "An architect notes a roof slope as 2/√5. What is the rationalized form?", options: [ { id: "a", text: "2/5" }, { id: "b", text: "√5/2" }, { id: "c", text: "2√5/5" }, { id: "d", text: "√5" } ], correctOptionId: "c", diagnoses: { b: "√5/2 is the reciprocal's rationalized form, not this.", a: "You rationalized the denominator but dropped the numerator's 2.", d: "√5 alone ignores the original 2 on top." }, explanation: "2/√5 × √5/√5 = 2√5/5.", hints: ["Multiply top and bottom by √5.", "√5 × √5 = 5.", "2/√5 × √5/√5 = 2√5/5."] },
      // @q04
      { id: "U8L3-mcq-4", type: "mcq", category: "procedural", prompt: "Rationalize: 5/√2.", options: [ { id: "a", text: "5√2" }, { id: "b", text: "5/2" }, { id: "c", text: "√2/2" }, { id: "d", text: "5√2/2" } ], correctOptionId: "d", diagnoses: { b: "You multiplied only the bottom — value changed.", c: "That's 1/√2's tidy form, missing the 5.", a: "The denominator must stay 2 after √2 × √2." }, explanation: "5/√2 × √2/√2 = 5√2/2.", hints: ["Multiply top and bottom by √2.", "√2 × √2 = 2.", "5/√2 × √2/√2 = 5√2/2."] },
      // @q05
      { id: "U8L3-mcq-5", type: "mcq", category: "conceptual", prompt: "Which statement is TRUE about 1/√2 and √2/2?", options: [ { id: "a", text: "They are exactly equal" }, { id: "b", text: "√2/2 is slightly larger" }, { id: "c", text: "1/√2 is rational" }, { id: "d", text: "They differ after the 2nd decimal" } ], correctOptionId: "a", diagnoses: { b: "Square both: each gives 1/2.", c: "Both contain an irrational surd.", d: "They are the same number, digit for digit." }, explanation: "Multiplying 1/√2 by √2/√2 (which equals 1) yields √2/2 — the exact same value.", hints: ["What is √2/√2?", "Multiplying by 1 never changes a number.", "Multiplying 1/√2 by √2/√2 (which equals 1) yields √2/2 — the exact same value."] },
      // @q06
      { id: "U8L3-mcq-6", type: "mcq", category: "word", prompt: "A physics table lists 3/√3 as a speed factor. Rationalized, this equals:", options: [ { id: "a", text: "3√3/3" }, { id: "b", text: "√3" }, { id: "c", text: "1/√3" }, { id: "d", text: "3" } ], correctOptionId: "b", diagnoses: { a: "3√3/3 simplifies to √3 — don't stop halfway.", c: "That's the reciprocal's tidy form.", d: "3 would need 9/3 — only √3 = 3/√3 works." }, explanation: "3/√3 × √3/√3 = 3√3/3 = √3.", hints: ["Multiply top and bottom by √3.", "3√3 over 3.", "3/√3 × √3/√3 = 3√3/3 = √3."] },
      // @q07
      { id: "U8L3-num-1", type: "numeric-input", category: "procedural", prompt: "Rationalize 1/√2: the tidy numerator is √2, and the whole (rational) denominator is? Type it.", answer: 2, tolerance: 0, explanation: "1/√2 × √2/√2 = √2/2 — denominator 2.", hints: ["√2 × √2 = ?", "2.", "1/√2 × √2/√2 = √2/2 — denominator 2."] },
      // @q08
      { id: "U8L3-num-2", type: "numeric-input", category: "procedural", prompt: "Rationalize 2/√7: type the whole-number denominator.", answer: 7, tolerance: 0, explanation: "2/√7 × √7/√7 = 2√7/7 — denominator 7.", hints: ["√7 × √7 = ?", "7.", "2/√7 × √7/√7 = 2√7/7 — denominator 7."] },
      // @q09
      { id: "U8L3-num-3", type: "numeric-input", category: "conceptual", prompt: "What is 1/√2 as a decimal to 2 dp?", answer: 0.71, tolerance: 0.005, explanation: "√2/2 ≈ 0.7071 ≈ 0.71 at 2 dp.", hints: ["√2 ≈ 1.414.", "1.414 ÷ 2.", "√2/2 ≈ 0.7071 ≈ 0.71 at 2 dp."] },
      // @q10
      { id: "U8L3-frac-1", type: "fraction-input", category: "conceptual", prompt: "Rationalize 3/√3 and write the answer as a fraction (it simplifies!).", numerator: 3, denominator: 1, acceptEquivalent: true, explanation: "3/√3 × √3/√3 = 3√3/3 = √3/1 — actually just √3.", hints: ["Multiply top and bottom by √3.", "3√3 / 3.", "It simplifies to √3 = 3/1."] },
      // @q11
      { id: "U8L3-tf-1", type: "true-false-justify", category: "conceptual", prompt: "1/√3 and √3/3 are exactly equal.", isTrue: true, explanation: "1/√3 × √3/√3 = √3/3 — multiplying by 1 keeps the value.", hints: ["What is √3/√3?", "Multiply 1/√3 by it.", "True — same value."] },
      // @q12
      { id: "U8L3-tf-2", type: "true-false-justify", category: "conceptual", prompt: "√2 × √2 = 2√2.", isTrue: false, explanation: "√2 × √2 = (√2)² = 2, not 2√2 (2√2 ≈ 2.8).", hints: ["A root squared returns the radicand.", "(√2)² = 2.", "False — it's 2."] },
      // @q13
      { id: "U8L3-order-1", type: "order-steps", category: "word", prompt: "Put the steps to rationalize 2/√3 in order.", sequence: ["Write 2/√3", "Multiply top and bottom by √3", "Top: 2√3", "Bottom: √3 × √3 = 3", "Answer: 2√3/3"], diagnoses: { "Write 2/√3@0": "Start with what you're given.", "Multiply top and bottom by √3@0": "The clever-1 step comes first.", "Answer: 2√3/3@0": "Finish with the tidy form." }, explanation: "Multiply by √3/√3 = 1, giving 2√3/3.", hints: ["Start with the original fraction.", "The clever 1 goes next.", "End with 2√3/3."] },
      // @q14
      { id: "U8L3-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each surd fraction to its rationalized form.", pairs: [ { source: "1/√2", target: "√2/2" }, { source: "1/√5", target: "√5/5" }, { source: "3/√3", target: "√3" } ], diagnoses: { "1/√2->√5/5": "1/√2 = √2/2 — pair the radicand.", "1/√5->√2/2": "1/√5 = √5/5 — pair the radicand.", "3/√3->√5/5": "3/√3 simplifies to √3, not a fifths fraction." }, explanation: "Each multiplies top and bottom by its own surd: 1/√2 → √2/2, 1/√5 → √5/5, 3/√3 → √3.", hints: ["Multiply by the surd over itself.", "√2 pairs with 2, √5 with 5.", "3/√3 collapses to √3."] },
      // @q15
      { id: "U8L3-graph-1", type: "graph-interact", category: "word", prompt: "The number line shows 1/√2. Set the point to the same value written as √2/2 (key: value).", challenge: "The number line shows 1/√2. — adjust the values below to match the condition.", validate: { value: 0.71 }, tolerance: 0.01, explanation: "√2/2 ≈ 0.7071 — same value as 1/√2.", hints: ["√2 ≈ 1.414.", "Divide by 2.", "√2/2 ≈ 0.7071 — same value as 1/√2."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "multiplies only the bottom", diagnosis: "1/√2 → 1/2 is NOT allowed — changing only the denominator changes the fraction's value.", hint: "Multiply top AND bottom by √2 so the value stays fixed." },
    { wrongPattern: "√2 × √2 = √2", diagnosis: "√2 × √2 = (√2)² = 2, not √2. The pair of roots cancels exactly.", hint: "A root times itself gives the radicand back." },
    { wrongPattern: "1/√2 = 0.7 exactly", diagnosis: "Rationalizing keeps the exact surd (√2/2); rounding to 0.7 loses precision.", hint: "Leave it exact: √2/2, not 0.7." },
  ],
  recallTags: ["surds", "rationalize", "fractions"],
  discovery: {
    challenges: [
      { instruction: "Place the point at 0.7071, then switch and place it at √2/2.", observe: "Same spot — squaring 1/√2 and √2/2 both give 1/2, so they are the same number." },
      { instruction: "Now tidy 1/√2 by hand: multiply top and bottom by √2.", observe: "1/√2 × √2/√2 = √2/2 — multiplying by √2/√2 (which is 1) never changes the value. The square in the denominator becomes a clean whole number 2." },
    ],
    predict: { prompt: "Before the reveal: is 1/√2 exactly the same number as √2/2?", options: [{ id: "a", text: "Yes — multiply by √2/√2 = 1" }, { id: "b", text: "No — √2/2 is smaller" }, { id: "c", text: "No — √2/2 is bigger" }], reveal: "Yes. 1/√2 × (√2/√2) = √2/2, and √2/√2 = 1, so the value never changes — only the look." },
    sayItYourWay: { prompt: "What does it mean to rationalize a denominator?", phrasings: [{ id: "a", text: "Turn the surd downstairs into a whole number", correct: true, why: "Multiply by a clever 1 to clear the √ out of the denominator — 1/√2 → √2/2." }, { id: "b", text: "Round the fraction to a decimal", correct: false, why: "Rationalizing keeps the exact value; decimals only approximate." }, { id: "c", text: "Move the surd to the denominator", correct: false, why: "The opposite — the goal is a clean whole-number denominator." }], formalName: "rationalizing the denominator" },
    stretch: "You can rationalize 1/√2. But what about 1/(√3 − 1)? Multiplying by √3 − 1 over itself won't clear it — the next trick involves a change of sign. Tempted yet?",
  },
};
