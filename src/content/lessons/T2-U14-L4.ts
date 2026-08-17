import type { Lesson } from "../schema";

export const T2U14L4: Lesson = {
  // @meta
  id: "T2-U14-L4",
  tier: 2,
  unit: "Solving equations",
  title: "Words Into Equations",
  prerequisites: ["T2-U11-L1","T2-U13-L3","T2-U14-L3"],
  estimatedMinutes: 12,
  hook: {
    question: "'Three more than twice a number is 17.' Real problems come as sentences, not as equations. The skill: listen for the unknown, translate the operations word-by-word (twice = ×2, more than = +), and balance the two halves — then the equation solves itself.",
    type: "real-world",
  },
  intuitionBlocks: [{ widget: "balance-scale", narrative: "Put the sentence on two pans: 'twice a number' (2x) plus 3 balances against 17. The translation is just mapping words to operations — the balance then does the solving." }],

  // @discovery
  formalBlocks: [
    { definition: "To solve a word problem: (1) name the unknown (let x be …); (2) translate the keywords into operations — 'is' → =, 'more than' → +, 'less than' → −, 'twice' → ×2, 'half of' → ÷2; (3) build one equation from the two sides of the sentence; (4) solve with the balance; (5) answer in the words of the question and check.", examples: ["'Three more than twice a number is 17' → 2x + 3 = 17 → 2x = 14 → x = 7; check 14+3 = 17 ✓.", "'A number less than 10 is 6' → 10 − x = 6 → x = 4."], pitfall: "Order matters in subtraction and division: '5 less than a number' is x − 5, NOT 5 − x. Read the sentence the way it was written — the thing 'less than' comes second in the expression.", altExplanations: ["GAME: a quest description becomes an equation — 'three more than twice a quest's coins is 17' maps to 2x + 3 = 17, with 'is' as the equals sign. Name the quest variable, translate the sentence, solve, then report in the quest's words.", "MONEY: a till slip in words — 'ten less than my money is 6' is m − 10 = 6, not 10 − m. Subtraction reads in order: the thing 'less than' comes first in the expression."] },
  ],
  gutChecks: [{ prompt: "'4 more than triple a number is 19.' Write the equation.", answer: "3x + 4 = 19 → x = 5." }],
  quiz: {
    pool: [
      // @q01
      { id: "U14L4-mcq-1", type: "mcq", category: "procedural", prompt: "'Three more than twice a number is 17.' What's the equation?", options: [ { id: "a", text: "2x + 3 = 17" }, { id: "b", text: "2(x + 3) = 17" }, { id: "c", text: "x + 3 = 17" }, { id: "d", text: "3x + 2 = 17" } ], correctOptionId: "a", diagnoses: { b: "That's 'twice the sum' — but it's 3 more than twice x.", c: "Missing the 'twice'.", d: "Twice is on x, not 3." }, explanation: "2x + 3 = 17 → x = 7.", hints: ["Twice → 2x.", "More than → +3.", "2x + 3 = 17."] },
      // @q02
      { id: "U14L4-mcq-2", type: "mcq", category: "conceptual", prompt: "What's the FIRST step for any word problem?", options: [ { id: "a", text: "Jump straight to the answer" }, { id: "b", text: "Name the unknown (let x be …)" }, { id: "c", text: "Add all the numbers" }, { id: "d", text: "Draw a graph" } ], correctOptionId: "b", diagnoses: { a: "Guess-and-check isn't the method.", c: "Adding blindly ignores the words.", d: "A graph isn't the first move." }, explanation: "Name the unknown first — everything translates onto x.", hints: ["Let x = …", "Start with the unknown.", "Name it first."] },
      // @q03
      { id: "U14L4-mcq-3", type: "mcq", category: "word", prompt: "'5 less than a number is 9.' What's the equation?", options: [ { id: "a", text: "x + 5 = 9" }, { id: "b", text: "5 − x = 9" }, { id: "c", text: "x − 5 = 9" }, { id: "d", text: "5x = 9" } ], correctOptionId: "c", diagnoses: { b: "5 less than x means x − 5.", a: "'Less than' subtracts, not adds.", d: "That's '5 times a number'." }, explanation: "x − 5 = 9 → x = 14.", hints: ["Less than = subtract.", "From x.", "x − 5 = 9."] },
      // @q04
      { id: "U14L4-mcq-4", type: "mcq", category: "procedural", prompt: "'Half of a number is 6.' Equation?", options: [ { id: "a", text: "x + 2 = 6" }, { id: "b", text: "2x = 6" }, { id: "c", text: "x − 2 = 6" }, { id: "d", text: "x/2 = 6" } ], correctOptionId: "d", diagnoses: { b: "That's 'twice a number'.", c: "That's '2 less'.", a: "That's '2 more'." }, explanation: "x/2 = 6 → x = 12.", hints: ["Half → ÷2.", "x/2 = 6.", "x = 12."] },
      // @q05
      { id: "U14L4-mcq-5", type: "mcq", category: "conceptual", prompt: "Why must you CHECK your answer in a word problem?", options: [ { id: "a", text: "To make sure it reads back correctly in the sentence" }, { id: "b", text: "To make the equation bigger" }, { id: "c", text: "To change the unknown" }, { id: "d", text: "To add more steps" } ], correctOptionId: "a", diagnoses: { b: "Checking isn't about size.", c: "The unknown stays the same.", d: "Checking is the final step, not extra." }, explanation: "Substitute back into the words: if x = 14, '5 less than 14' is 9 ✓.", hints: ["Read the sentence again.", "Plug the answer in.", "Verify."] },
      // @q06
      { id: "U14L4-mcq-6", type: "mcq", category: "word", prompt: "'A number increased by 4 is 11.' What is the number?", options: [ { id: "a", text: "15" }, { id: "b", text: "7" }, { id: "c", text: "4" }, { id: "d", text: "11" } ], correctOptionId: "b", diagnoses: { a: "15 = 11 + 4 — added wrong side.", c: "4 is the increase, not x.", d: "11 is the total." }, explanation: "x + 4 = 11 → x = 7.", hints: ["Increased → +4.", "x + 4 = 11.", "7."] },
      // @q07
      { id: "U14L4-num-1", type: "numeric-input", category: "procedural", prompt: "'Three more than twice a number is 17.' Type the number.", answer: 7, tolerance: 0, explanation: "2x + 3 = 17 → x = 7.", hints: ["2x + 3 = 17.", "2x = 14.", "7."] },
      // @q08
      { id: "U14L4-num-2", type: "numeric-input", category: "procedural", prompt: "'5 less than a number is 9.' Type the number.", answer: 14, tolerance: 0, explanation: "x − 5 = 9 → x = 14.", hints: ["x − 5 = 9.", "x = 14.", "14."] },
      // @q09
      { id: "U14L4-num-3", type: "numeric-input", category: "conceptual", prompt: "'Half of a number is 6.' Type the number.", answer: 12, tolerance: 0, explanation: "x/2 = 6 → x = 12.", hints: ["Half → ÷2.", "×2 both.", "12."] },
      // @q10
      { id: "U14L4-frac-1", type: "fraction-input", category: "conceptual", prompt: "'A number divided by 3 is 4.' Write the number as a fraction.", numerator: 12, denominator: 1, acceptEquivalent: true, explanation: "x/3 = 4 → x = 12.", hints: ["×3 both.", "12.", "12/1."] },
      // @q11
      { id: "U14L4-tf-1", type: "true-false-justify", category: "conceptual", prompt: "'7 more than a number is 12' translates to x + 7 = 12.", isTrue: true, explanation: "The known 7 is added to the unknown x.", hints: ["More than → +7.", "x + 7 = 12.", "True."] },
      // @q12
      { id: "U14L4-tf-2", type: "true-false-justify", category: "conceptual", prompt: "'3 less than a number is 8' translates to 3 − x = 8.", isTrue: false, explanation: "It's x − 3 = 8 — the known 3 is subtracted from the unknown.", hints: ["Less than → from x.", "x − 3 = 8.", "False."] },
      // @q13
      { id: "U14L4-order-1", type: "order-steps", category: "word", prompt: "Order the steps to solve 'three more than twice a number is 17'.", sequence: ["Let x = the number", "Translate: 2x + 3 = 17", "Solve: 2x = 14, x = 7", "Check: 14 + 3 = 17"], diagnoses: { "Translate: 2x + 3 = 17@0": "Name the unknown first.", "Check: 14 + 3 = 17@0": "Check at the end.", "Solve: 2x = 14, x = 7@1": "Translate before solving." }, explanation: "Name x, translate the sentence, solve, then check.", hints: ["Name the unknown.", "Translate.", "Solve & check."] },
      // @q14
      { id: "U14L4-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each phrase to its translation.", pairs: [ { source: "twice a number", target: "2x" }, { source: "a number less than 10", target: "10 − x" }, { source: "5 more than x", target: "x + 5" } ], diagnoses: { "twice a number->10 − x": "Twice = ×2, so 2x.", "a number less than 10->x + 5": "Less than 10 means 10 − x.", "5 more than x->2x": "More than = +, so x + 5." }, explanation: "Translate the keywords exactly: ×2, 'from' for less-than, + for more-than.", hints: ["Twice → 2x.", "'Less than 10' → 10 − x.", "'More than' → +."] },
      // @q15
      { id: "U14L4-graph-1", type: "graph-interact", category: "word", prompt: "'A number less than 10 is 6.' Set the slider to the number (key: value).", challenge: "Set the slider to 4.", validate: { value: 4 }, tolerance: 0, explanation: "10 − x = 6 → x = 4.", hints: ["10 − x = 6.", "x = 4.", "4."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "reverses subtraction order", diagnosis: "'5 less than a number' is x − 5, not 5 − x.", hint: "The known quantity comes FIRST in the words, so it's subtracted FROM x." },
    { wrongPattern: "names the wrong unknown", diagnosis: "Pick x for the question's unknown, then translate consistently — don't mix variables.", hint: "Write 'let x = the number' first." },
    { wrongPattern: "forgets to answer the question", diagnosis: "After solving, give the answer in the original words and CHECK it.", hint: "Substitute back and read the sentence." },
  ],
  recallTags: ["word-problems", "translate", "equations"],
  discovery: {
    challenges: [
      { instruction: "Translate 'twice a number, plus 3, is 17' phrase by phrase onto the balance.", observe: "2x + 3 = 17 — each phrase maps to one operation." },
      { instruction: "Now translate 'a number less than 12 is 7'.", observe: "12 − x = 7 → x = 5 — order matters in subtraction." },
    ],
    predict: { prompt: "'Three more than twice a number is 17' — what's the equation?", options: [{ id: "a", text: "2x + 3 = 17" }, { id: "b", text: "3 + 2 = x + 17" }, { id: "c", text: "2(x + 3) = 17" }], reveal: "2(x + 3) would be 'twice the sum', but the words say 'three more than twice x' — 2x + 3 = 17." },
    sayItYourWay: { prompt: "What's the FIRST thing to do with a word problem?", phrasings: [{ id: "a", text: "Name the unknown with a letter", correct: true, why: "x gives the sentence a handle; everything translates onto it." }, { id: "b", text: "Guess the answer", correct: false, why: "We build an equation, not a guess." }, { id: "c", text: "Solve first, ask later", correct: false, why: "Without the equation there's nothing to solve." }], formalName: "forming equations from word problems" },
    stretch: "Two numbers: one is 3 more than the other and their sum is 21. If x is the smaller, the other is x + 3 — so x + (x + 3) = 21. A single equation from two unknowns — the door to U15's simultaneous equations.",
  },
};
