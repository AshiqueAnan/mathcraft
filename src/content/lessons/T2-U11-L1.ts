import type { Lesson } from "../schema";

export const T2U11L1: Lesson = {
  // @meta
  id: "T2-U11-L1",
  tier: 2,
  unit: "Variables & expressions",
  title: "A Letter Is a Number in Disguise",
  prerequisites: ["T1-U10-L1","T1-U10-L3"],
  estimatedMinutes: 12,
  hook: {
    question: "I'm thinking of a number. Double it, add 3, and I get 11. You can find my number without ever seeing it — because a letter can stand in for the mystery value. What is x?",
    type: "puzzle",
  },
  intuitionBlocks: [{ widget: "balance-scale", narrative: "The scale hides an unknown weight — call it x. Add 3 weights to the same pan: both sides stay balanced. A letter is just a number in disguise: x + 3 = 11 lets us hunt the hidden value directly." }],

  // @discovery
  formalBlocks: [
    { definition: "A variable is a letter that stands for an unknown number. It obeys the same rules as a known number: if x + 3 = 11, then x is whatever added to 3 gives 11, so x = 8. Check by substituting back: 8 + 3 = 11.", examples: ["If 2x = 10, x = 5 because 2 × 5 = 10.", "If y − 4 = 6, y = 10 because 10 − 4 = 6."], pitfall: "x is not a mystery symbol with exotic rules — it's an ordinary number hiding in a letter, so all normal arithmetic applies to it.", altExplanations: ["GAME: x is a mystery chest — you don't know the coins inside, but opening it follows the same rules as opening a known chest. x + 3 = 11 means the chest's coins plus 3 known coins make 11; subtract 3 and the chest holds 8.", "MONEY: a blank receipt line — 'I bought x pens at 2 dollars each and a $3 notebook; total $11'. The x is a real count hiding behind a letter; you solve it exactly like working with a known number."] },
  ],
  gutChecks: [{ prompt: "If m + 7 = 12, what is m?", answer: "m = 5, since 5 + 7 = 12." }],
  quiz: {
    pool: [
      // @q01
      { id: "U11L1-mcq-1", type: "mcq", category: "procedural", prompt: "If x + 3 = 11, what is x?", options: [ { id: "a", text: "8" }, { id: "b", text: "14" }, { id: "c", text: "3" }, { id: "d", text: "11" } ], correctOptionId: "a", diagnoses: { b: "14 is 11 + 3 — you added instead of undoing.", c: "3 is the number added, not the unknown.", d: "11 is the total, not x." }, explanation: "Undo the +3: x = 11 − 3 = 8.", hints: ["Undo the +3.", "11 − 3.", "Undo the +3: x = 11 − 3 = 8."] },
      // @q02
      { id: "U11L1-mcq-2", type: "mcq", category: "conceptual", prompt: "What does 2x mean?", options: [ { id: "a", text: "2 + x" }, { id: "b", text: "2 × x" }, { id: "c", text: "x²" }, { id: "d", text: "x + 2" } ], correctOptionId: "b", diagnoses: { a: "2 + x is written 2 + x, not 2x.", c: "x² is x × x.", d: "x + 2 is addition, not multiplication." }, explanation: "A number next to a letter means multiply: 2x = 2 × x.", hints: ["Adjacent number and letter = multiply.", "2x = 2 × x.", "A number next to a letter means multiply: 2x = 2 × x."] },
      // @q03
      { id: "U11L1-mcq-3", type: "mcq", category: "word", prompt: "A number is doubled, then 5 is added, giving 17. Which equation matches?", options: [ { id: "a", text: "2(x + 5) = 17" }, { id: "b", text: "x + 2 + 5 = 17" }, { id: "c", text: "2x + 5 = 17" }, { id: "d", text: "x + 5 = 17" } ], correctOptionId: "c", diagnoses: { b: "Doubling means ×2, not +2.", a: "The 5 is added AFTER doubling, not inside.", d: "Missing the doubling of x." }, explanation: "Double x (2x), then add 5: 2x + 5 = 17.", hints: ["Double first: 2x.", "Then add 5.", "Double x (2x), then add 5: 2x + 5 = 17."] },
      // @q04
      { id: "U11L1-mcq-4", type: "mcq", category: "procedural", prompt: "If 2x = 10, what is x?", options: [ { id: "a", text: "12" }, { id: "b", text: "20" }, { id: "c", text: "8" }, { id: "d", text: "5" } ], correctOptionId: "d", diagnoses: { b: "20 is 2 × 10 — you multiplied instead of dividing.", c: "8 is 10 − 2, wrong operation.", a: "12 is 10 + 2, wrong operation." }, explanation: "Undo the ×2: x = 10 ÷ 2 = 5.", hints: ["Undo the ×2.", "10 ÷ 2.", "Undo the ×2: x = 10 ÷ 2 = 5."] },
      // @q05
      { id: "U11L1-mcq-5", type: "mcq", category: "conceptual", prompt: "Why is x = 8 the correct solution to x + 3 = 11?", options: [ { id: "a", text: "8 + 3 = 11, so it checks" }, { id: "b", text: "8 is the biggest number" }, { id: "c", text: "8 is half of 16" }, { id: "d", text: "It looks right" } ], correctOptionId: "a", diagnoses: { b: "Size is irrelevant — only the check matters.", c: "Unrelated fact.", d: "Math needs a verifiable reason." }, explanation: "Substituting x = 8 gives 8 + 3 = 11 — the equation reads true, so the solution is verified.", hints: ["Plug 8 in for x.", "8 + 3 = 11.", "Substituting x = 8 gives 8 + 3 = 11 — the equation reads true, so the solution is verified."] },
      // @q06
      { id: "U11L1-mcq-6", type: "mcq", category: "word", prompt: "Some money m is shared, then $8 is added and the total becomes $20. Which equation matches?", options: [ { id: "a", text: "8m = 20" }, { id: "b", text: "m + 8 = 20" }, { id: "c", text: "m − 8 = 20" }, { id: "d", text: "m = 20 + 8" } ], correctOptionId: "b", diagnoses: { a: "8m means $8 per share, not adding $8.", c: "Money was added, not removed.", d: "m = 12, not 28 — the +8 is undone by subtracting." }, explanation: "Start with m, add 8, end at 20: m + 8 = 20, so m = 12.", hints: ["Start with m.", "Add 8 → m + 8 = 20.", "Start with m, add 8, end at 20: m + 8 = 20, so m = 12."] },
      // @q07
      { id: "U11L1-num-1", type: "numeric-input", category: "procedural", prompt: "Solve: x − 4 = 9. Type x.", answer: 13, tolerance: 0, explanation: "Undo the −4 by adding 4: x = 9 + 4 = 13.", hints: ["Undo the −4.", "9 + 4.", "Undo the −4 by adding 4: x = 9 + 4 = 13."] },
      // @q08
      { id: "U11L1-num-2", type: "numeric-input", category: "procedural", prompt: "Solve: 3x = 21. Type x.", answer: 7, tolerance: 0, explanation: "Undo the ×3 by dividing: x = 21 ÷ 3 = 7.", hints: ["Undo the ×3.", "21 ÷ 3.", "Undo the ×3 by dividing: x = 21 ÷ 3 = 7."] },
      // @q09
      { id: "U11L1-num-3", type: "numeric-input", category: "conceptual", prompt: "A number doubled, then minus 1, equals 9. If x is the number, type x.", answer: 5, tolerance: 0, explanation: "2x − 1 = 9 → 2x = 10 → x = 5.", hints: ["Undo −1 first: 2x = 10.", "Then ÷2.", "2x − 1 = 9 → 2x = 10 → x = 5."] },
      // @q10
      { id: "U11L1-frac-1", type: "fraction-input", category: "conceptual", prompt: "If 2x = 1, what is x? Write it as a fraction.", numerator: 1, denominator: 2, acceptEquivalent: true, explanation: "x = 1 ÷ 2 = 1/2.", hints: ["Divide both sides by 2.", "1 ÷ 2.", "x = 1 ÷ 2 = 1/2."] },
      // @q11
      { id: "U11L1-tf-1", type: "true-false-justify", category: "conceptual", prompt: "If x + 5 = 12, then x = 7.", isTrue: true, explanation: "x = 12 − 5 = 7, and 7 + 5 = 12 checks.", hints: ["Undo the +5.", "12 − 5 = 7.", "x = 12 − 5 = 7, and 7 + 5 = 12 checks."] },
      // @q12
      { id: "U11L1-tf-2", type: "true-false-justify", category: "conceptual", prompt: "2x = 10 means x = 20.", isTrue: false, explanation: "Undo the ×2: x = 10 ÷ 2 = 5, not 20.", hints: ["Divide, don't multiply.", "10 ÷ 2.", "Undo the ×2: x = 10 ÷ 2 = 5, not 20."] },
      // @q13
      { id: "U11L1-order-1", type: "order-steps", category: "word", prompt: "Order the steps to solve 2x + 3 = 11.", sequence: ["Write 2x + 3 = 11", "Subtract 3: 2x = 8", "Divide by 2: x = 4", "Check: 2 × 4 + 3 = 11"], diagnoses: { "Subtract 3: 2x = 8@0": "Write the equation first.", "Check: 2 × 4 + 3 = 11@0": "The check comes last.", "Divide by 2: x = 4@1": "Undo the +3 before the ×2." }, explanation: "Reverse the order of operations on x: undo +3, then ÷2.", hints: ["Start with the equation.", "Undo the +3 first.", "Finish with the check."] },
      // @q14
      { id: "U11L1-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each equation to its solution.", pairs: [ { source: "x + 2 = 7", target: "5" }, { source: "3x = 15", target: "5" }, { source: "x − 1 = 4", target: "5" } ], diagnoses: { "x + 2 = 7->6": "7 − 2 = 5.", "3x = 15->12": "15 ÷ 3 = 5.", "x − 1 = 4->3": "4 + 1 = 5." }, explanation: "Each solves to x = 5: 7−2, 15÷3, 4+1.", hints: ["Undo the operation on each.", "All three give the same x.", "Each solves to x = 5: 7−2, 15÷3, 4+1."] },
      // @q15
      { id: "U11L1-graph-1", type: "graph-interact", category: "word", prompt: "The slider holds the unknown x. Set it so x + 4 = 9 (key: value).", challenge: "The slider holds the unknown x. Set it so x + 4 = 9 . — adjust the values below to match the condition.", validate: { value: 5 }, tolerance: 0, explanation: "x = 9 − 4 = 5.", hints: ["Undo the +4.", "9 − 4.", "x = 9 − 4 = 5."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "treats x like a symbol, not a number", diagnosis: "x is just a number in disguise — 2x means 2 × x, and x answers to all the usual arithmetic.", hint: "Replace x with the number you find and check the equation." },
    { wrongPattern: "guesses instead of solving", diagnosis: "x + 3 = 11 is solved by undoing the +3: x = 11 − 3 = 8.", hint: "Undo what was done to x, in reverse." },
    { wrongPattern: "forgets to check the answer", diagnosis: "Substituting x = 8 back gives 8 + 3 = 11 — the check confirms the solution.", hint: "Always substitute back to verify." },
  ],
  recallTags: ["variables", "unknown", "solving"],
  discovery: {
    challenges: [
      { instruction: "Set the scale to x + 3 on one pan and 11 on the other. What must x be to balance?", observe: "x balances 8 — the hidden number is revealed by undoing the +3." },
      { instruction: "Now try 2x on one pan against 10. How much is one x?", observe: "Two x's are 10, so one x is 5 — the letter is just a holder for an ordinary number." },
    ],
    predict: { prompt: "If x + 5 = 9, what is x?", numeric: { answer: 4, tolerance: 0 }, reveal: "x = 9 − 5 = 4. Undoing the +5 reveals the mystery number." },
    sayItYourWay: { prompt: "What is a variable, really?", phrasings: [{ id: "a", text: "A letter holding an unknown number", correct: true, why: "x stands for a specific value we can find by solving." }, { id: "b", text: "A magical symbol with its own rules", correct: false, why: "x follows the same arithmetic as any number." }, { id: "c", text: "A letter that means multiply", correct: false, why: "It's a letter standing for a number — multiplication is just what adjacent letters sometimes mean (2x = 2 × x)." }], formalName: "variable (unknown)" },
    stretch: "If 3x − 2 = 13, what number is x? You undo −2 first, then ÷3 — the reverse of how x was built.",
  },
};
