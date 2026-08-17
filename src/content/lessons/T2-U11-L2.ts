import type { Lesson } from "../schema";

export const T2U11L2: Lesson = {
  // @meta
  id: "T2-U11-L2",
  tier: 2,
  unit: "Variables & expressions",
  title: "A Letter Is Every Number at Once",
  prerequisites: ["T1-U10-L3","T2-U11-L1"],
  estimatedMinutes: 12,
  hook: {
    question: "In the last lesson, x hid ONE number. But plot y = 2n and a whole parade of values appears — one for every n you feed in. Same letter, infinite meanings at once. Can one symbol be a number and a machine at the same time?",
    type: "paradox",
  },
  intuitionBlocks: [{ widget: "graph-plotter", narrative: "Plot y = 2n. Slide n through 1, 2, 3… and the point marches along a line — 2, 4, 6, 8. The letter n is now a SLOT: put any number in, get its double out. Contrast with x-as-unknown: there x picked one fixed value; here n spans all of them." }],

  // @discovery
  formalBlocks: [
    { definition: "A variable can be an unknown (one fixed value to solve for, like x in x + 3 = 11) OR a generalizer (a slot that ranges over many values). In an expression like 2n, n is a generalizer: n = 1 gives 2, n = 5 gives 10 — 2n says 'any even number'. Substitution means replacing the letter with a specific value to evaluate the expression.", examples: ["Evaluate 3n + 1 for n = 4: 3 × 4 + 1 = 13.", "Evaluate n² for n = 6: 6² = 36."], pitfall: "Don't confuse the two meanings: in an equation x is usually an unknown to find, but in an expression like 2n the letter runs over all allowed values — asking 'what is n?' only makes sense when a value is supplied.", altExplanations: ["GAME: 2n is a character selector — n picks any level, and the machine prints double that level. n=8 gives 16; n=1 gives 2. The letter is a slider, not a single fixed mystery value.", "FOOD: 2n is a serving multiplier — n is the number of guests; 2n is the biscuit count. It says 'any even number of biscuits', depending on who shows up."] },
  ],
  gutChecks: [{ prompt: "Evaluate 2n + 3 for n = 7.", answer: "17 — 2 × 7 + 3 = 14 + 3 = 17." }],
  quiz: {
    pool: [
      // @q01
      { id: "U11L2-mcq-1", type: "mcq", category: "procedural", prompt: "Evaluate 3n + 2 for n = 4.", options: [ { id: "a", text: "14" }, { id: "b", text: "20" }, { id: "c", text: "9" }, { id: "d", text: "18" } ], correctOptionId: "a", diagnoses: { b: "20 is 4×4+4 — check the coefficient.", c: "9 is 3 + 4 + 2, wrong grouping.", d: "18 is 4 × 3 + 2 × 3, over-applied." }, explanation: "3 × 4 + 2 = 12 + 2 = 14.", hints: ["Multiply first: 3 × 4.", "Then add 2.", "3 × 4 + 2 = 12 + 2 = 14."] },
      // @q02
      { id: "U11L2-mcq-2", type: "mcq", category: "conceptual", prompt: "In y = 3n, what does the 3 do?", options: [ { id: "a", text: "Adds 3 to n" }, { id: "b", text: "Triples whatever n is" }, { id: "c", text: "Makes n three digits long" }, { id: "d", text: "Ignores n" } ], correctOptionId: "b", diagnoses: { a: "3n is 3 × n, not 3 + n.", c: "Digits are irrelevant to a variable.", d: "n is the input the machine multiplies." }, explanation: "3n multiplies the slot n by 3 — it's a machine that triples.", hints: ["What operation sits between 3 and n?", "Multiplication.", "3n multiplies the slot n by 3 — it's a machine that triples."] },
      // @q03
      { id: "U11L2-mcq-3", type: "mcq", category: "word", prompt: "A taxi charges $3 per km plus a $2 flag fall. Which expression gives the fare for n km?", options: [ { id: "a", text: "5n" }, { id: "b", text: "3 + 2n" }, { id: "c", text: "3n + 2" }, { id: "d", text: "2n + 3n" } ], correctOptionId: "c", diagnoses: { b: "3 + 2n charges $2/km — wrong rate.", a: "5n merges the flag fall into the rate.", d: "2n + 3n = 5n, same mistake." }, explanation: "$3 per km → 3n, plus the $2 flag fall: 3n + 2.", hints: ["Rate per km comes first.", "Then the fixed fee.", "$3 per km → 3n, plus the $2 flag fall: 3n + 2."] },
      // @q04
      { id: "U11L2-mcq-4", type: "mcq", category: "procedural", prompt: "Evaluate n² for n = 5.", options: [ { id: "a", text: "125" }, { id: "b", text: "10" }, { id: "c", text: "5" }, { id: "d", text: "25" } ], correctOptionId: "d", diagnoses: { b: "10 is 5 × 2, not 5 × 5.", c: "5 is just n itself.", a: "125 is 5³." }, explanation: "n² means n × n: 5 × 5 = 25.", hints: ["n² = n × n.", "5 × 5.", "n² means n × n: 5 × 5 = 25."] },
      // @q05
      { id: "U11L2-mcq-5", type: "mcq", category: "conceptual", prompt: "What is the difference between 2n and 2n = 10?", options: [ { id: "a", text: "2n evaluates; 2n = 10 asks for the one n that makes it true" }, { id: "b", text: "They are identical" }, { id: "c", text: "2n = 10 is an expression" }, { id: "d", text: "2n has a unique solution" } ], correctOptionId: "a", diagnoses: { b: "One is expression, the other equation — different questions.", c: "The '= 10' makes it an equation.", d: "2n evaluates to many values, one per n." }, explanation: "2n is an expression (evaluates); 2n = 10 is an equation (solve: n = 5).", hints: ["Does it have an '=' ?", "Equation vs expression.", "Evaluate vs solve."] },
      // @q06
      { id: "U11L2-mcq-6", type: "mcq", category: "word", prompt: "A square's side is n cm. Which expression gives its area?", options: [ { id: "a", text: "4n" }, { id: "b", text: "n²" }, { id: "c", text: "2n" }, { id: "d", text: "n + n" } ], correctOptionId: "b", diagnoses: { a: "4n is the perimeter.", c: "2n is two sides.", d: "n + n = 2n, also two sides." }, explanation: "Area = side × side = n × n = n².", hints: ["Area = side × side.", "n × n.", "Area = side × side = n × n = n²."] },
      // @q07
      { id: "U11L2-num-1", type: "numeric-input", category: "procedural", prompt: "Evaluate 4n + 1 for n = 6. Type the value.", answer: 25, tolerance: 0, explanation: "4 × 6 + 1 = 24 + 1 = 25.", hints: ["4 × 6 first.", "24 + 1.", "4 × 6 + 1 = 24 + 1 = 25."] },
      // @q08
      { id: "U11L2-num-2", type: "numeric-input", category: "procedural", prompt: "Evaluate n² + 3 for n = 7. Type the value.", answer: 52, tolerance: 0, explanation: "7² + 3 = 49 + 3 = 52.", hints: ["7² = 49.", "Add 3.", "7² + 3 = 49 + 3 = 52."] },
      // @q09
      { id: "U11L2-num-3", type: "numeric-input", category: "conceptual", prompt: "2n + 5 = 19. Solve for n. Type n.", answer: 7, tolerance: 0, explanation: "2n = 19 − 5 = 14, so n = 7.", hints: ["Undo +5 first.", "2n = 14.", "2n = 19 − 5 = 14, so n = 7."] },
      // @q10
      { id: "U11L2-frac-1", type: "fraction-input", category: "conceptual", prompt: "If 4n = 1, what is n? Write it as a fraction.", numerator: 1, denominator: 4, acceptEquivalent: true, explanation: "n = 1 ÷ 4 = 1/4.", hints: ["Divide both sides by 4.", "1 ÷ 4.", "n = 1 ÷ 4 = 1/4."] },
      // @q11
      { id: "U11L2-tf-1", type: "true-false-justify", category: "conceptual", prompt: "Evaluating 3n for n = 4 gives 12.", isTrue: true, explanation: "3 × 4 = 12.", hints: ["3n = 3 × n.", "3 × 4.", "3 × 4 = 12."] },
      // @q12
      { id: "U11L2-tf-2", type: "true-false-justify", category: "conceptual", prompt: "2n means 'add 2 to n'. ", isTrue: false, explanation: "2n means 2 × n — multiplication, not addition.", hints: ["Adjacent letters/numbers multiply.", "2n = 2 × n.", "2n means 2 × n — multiplication, not addition."] },
      // @q13
      { id: "U11L2-order-1", type: "order-steps", category: "word", prompt: "Order the steps to evaluate 2n + 3 for n = 5.", sequence: ["Write the expression: 2n + 3", "Substitute n = 5: 2 × 5 + 3", "Multiply: 10", "Add: 13"], diagnoses: { "Substitute n = 5: 2 × 5 + 3@0": "Write the expression first.", "Add: 13@0": "Multiply before adding.", "Multiply: 10@3": "Substitute before multiplying." }, explanation: "Substitute, multiply, then add — order of operations.", hints: ["Write the expression.", "Plug in n = 5.", "Substitute, multiply, then add — order of operations."] },
      // @q14
      { id: "U11L2-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each expression to its value when n = 3.", pairs: [ { source: "2n", target: "6" }, { source: "n²", target: "9" }, { source: "n + 5", target: "8" } ], diagnoses: { "2n->9": "2 × 3 = 6.", "n²->6": "3 × 3 = 9.", "n + 5->6": "3 + 5 = 8." }, explanation: "2×3=6, 3×3=9, 3+5=8.", hints: ["Substitute n = 3.", "Compute each expression.", "2×3=6, 3×3=9, 3+5=8."] },
      // @q15
      { id: "U11L2-graph-1", type: "graph-interact", category: "word", prompt: "Set the slider to n so that 3n = 15 (key: value).", challenge: "Adjust the values below so they match the condition described in the prompt.", validate: { value: 5 }, tolerance: 0, explanation: "3n = 15 → n = 5.", hints: ["15 ÷ 3.", "5.", "Set slider to 5."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "thinks a letter is always one fixed number", diagnosis: "In 2n the letter is a slot — n = 1, 2, 3 give different values of the expression.", hint: "Ask: is the letter an unknown to solve, or a slot to vary?" },
    { wrongPattern: "evaluates out of order", diagnosis: "2n + 3 for n = 4 is 2 × 4 + 3 = 11 — multiply first, then add.", hint: "Follow the order of operations when substituting." },
    { wrongPattern: "mistakes expression for equation", diagnosis: "2n is an expression — no 'answer' until n is supplied; 2n = 10 would be an equation with a solution n = 5.", hint: "Expressions evaluate; equations solve." },
  ],
  recallTags: ["variables", "generalizer", "substitution"],
  discovery: {
    challenges: [
      { instruction: "Plot y = 2n and slide n = 1, 2, 3, 4. Write down the outputs.", observe: "2, 4, 6, 8 — every whole n produces its double. The letter is a slot, not a single value." },
      { instruction: "Now evaluate 2n + 1 by hand for n = 3 and n = 10.", observe: "7 and 21 — the same expression yields different values as n changes." },
    ],
    predict: { prompt: "If 2n represents 'any even number', what does n = 10 give?", numeric: { answer: 20, tolerance: 0 }, reveal: "2 × 10 = 20 — the expression evaluates to 20 when n is 10." },
    sayItYourWay: { prompt: "What is 2n when the letter is a generalizer?", phrasings: [{ id: "a", text: "A formula that turns any n into its double", correct: true, why: "Each n you plug in yields a corresponding value — 2, 4, 6…." }, { id: "b", text: "A single secret number", correct: false, why: "That's the unknown meaning from the last lesson — here n ranges freely." }, { id: "c", text: "The number 2 plus n", correct: false, why: "2n means 2 × n, not 2 + n." }], formalName: "variable as generalizer" },
    stretch: "If 2n makes evens, what does 2n + 1 make? Try n = 1, 2, 3, 4 and spot the pattern.",
  },
};
