import type { Lesson } from "../schema";

export const T2U17L1: Lesson = {
  // @meta
  id: "T2-U17-L1",
  tier: 2,
  unit: "Sequences",
  title: "What Comes Next, and Why",
  prerequisites: ["T2-U11-L1", "T2-U16-L3"],
  estimatedMinutes: 12,
  hook: { question: "3, 6, 9, 12, … and 3, 6, 12, 24, … both start the same — but the next numbers split ways. A sequence isn't just a list: it's a list with a RULE, and the rule says what comes next and why.", type: "puzzle" },
  intuitionBlocks: [{ widget: "number-line", narrative: "Place the terms of a sequence on the line and watch the jumps between them. Sequence A jumps +3 each time; sequence B doubles each time. Same start, different law — the gap between terms IS the rule." }],

  // @discovery
  formalBlocks: [{ definition: "A sequence is an ordered list of numbers with a rule. The term-to-term rule describes how each term becomes the next: +3 (arithmetic-style) or ×2 (geometric-style). An arithmetic sequence adds (or subtracts) the same number each step; the common difference d is the gap.", examples: ["5, 8, 11, 14, … → each term is +3, so d = 3 and the next is 17.", "2, 6, 18, 54, … → each term is ×3, so the next is 162."], pitfall: "Look at the GAP between terms, not the terms themselves: 3, 6, 9, 12 has the same start as 3, 6, 12, 24, but only one is +3. Compute the differences before guessing.", altExplanations: ["FOOD: a growing biscuit tower — each new term stacks on a fixed +3 height pattern (7, 10, 13, 16). The term-to-term rule is the brick you add every layer; the common difference d is that brick's size.", "GAME: an XP streak — 5 → 8 → 11 → 14 gains +3 every level-up. That +3 is the term-to-term rule; spotting it means you can predict the next level without listing all of them."] }],
  gutChecks: [{ prompt: "For 7, 10, 13, 16, … what is d and the next term?", answer: "d = 3; next term 19." }],
  quiz: {
    pool: [
      // @q01
      { id: "U17L1-mcq-1", type: "mcq", category: "procedural", prompt: "5, 8, 11, 14, … What is d and the next term?", options: [ { id: "a", text: "d = 3; 17" }, { id: "b", text: "d = 3; 17.5" }, { id: "c", text: "d = 2; 16" }, { id: "d", text: "d = 4; 18" } ], correctOptionId: "a", diagnoses: { b: "Differences are whole: 8 − 5 = 3.", c: "8 − 5 = 3, not 2.", d: "14 − 11 = 3, not 4." }, explanation: "Each gap is +3; 14 + 3 = 17.", hints: ["Subtract neighbours.", "8 − 5 = 3.", "14 + 3 = 17."] },
      // @q02
      { id: "U17L1-mcq-2", type: "mcq", category: "conceptual", prompt: "Why does 3, 6, 12, 24… differ from 3, 6, 9, 12…?", options: [ { id: "a", text: "One multiplies by 2; the other adds 3 — the RULE differs" }, { id: "b", text: "They're actually the same sequence" }, { id: "c", text: "The second is bigger" }, { id: "d", text: "Sequences can't start with 3" } ], correctOptionId: "a", diagnoses: { b: "Same start ≠ same rule; the gaps differ.", c: "Size isn't the distinction — pattern is.", d: "Any starting value is fine." }, explanation: "Term-to-term rule is the identity: ×2 vs +3.", hints: ["Check the gaps.", "6 → 12 is ×2.", "6 → 9 is +3."] },
      // @q03
      { id: "U17L1-mcq-3", type: "mcq", category: "word", prompt: "A plant grows 2 cm each day: 5, 7, 9, 11, … cm. What's the next height?", options: [ { id: "a", text: "13 cm" }, { id: "b", text: "12 cm" }, { id: "c", text: "15 cm" }, { id: "d", text: "10 cm" } ], correctOptionId: "a", diagnoses: { b: "It grows by 2, not 1: 11 + 2 = 13.", c: "That's growing by 4.", d: "11 + 2 = 13, not 10." }, explanation: "Constant +2 each day → 11 + 2 = 13 cm.", hints: ["Daily growth = 2.", "11 + 2.", "13 cm."] },
      // @q04
      { id: "U17L1-mcq-4", type: "mcq", category: "procedural", prompt: "2, 6, 18, 54, … What is the term-to-term rule?", options: [ { id: "a", text: "×3" }, { id: "b", text: "+4" }, { id: "c", text: "×2" }, { id: "d", text: "+2" } ], correctOptionId: "a", diagnoses: { b: "6 − 2 = 4, but 18 − 6 = 12 — not constant.", c: "6 × 2 = 12, not 18.", d: "2 + 2 = 4, not 6." }, explanation: "Each term × 3: 2 → 6 → 18 → 54.", hints: ["Check the multiplier.", "6/2 = 3.", "×3."] },
      // @q05
      { id: "U17L1-mcq-5", type: "mcq", category: "conceptual", prompt: "What does 'term-to-term rule' mean?", options: [ { id: "a", text: "The operation that turns each term into the next one" }, { id: "b", text: "The biggest term in the list" }, { id: "c", text: "How many terms there are" }, { id: "d", text: "The starting number only" } ], correctOptionId: "a", diagnoses: { b: "The rule is the operation, not a single term.", c: "Count is length, not rule.", d: "Start alone doesn't decide the sequence." }, explanation: "It's the 'from one to the next' law — +d or ×r.", hints: ["How you get the next.", "One step.", "The operation."] },
      // @q06
      { id: "U17L1-mcq-6", type: "mcq", category: "word", prompt: "Savings: $10, then $15, then $20, … adding $5 each week. What is the 6th week's saving?", options: [ { id: "a", text: "$35" }, { id: "b", text: "$30" }, { id: "c", text: "$25" }, { id: "d", text: "$40" } ], correctOptionId: "a", diagnoses: { b: "Count weeks: 10, 15, 20, 25, 30, 35 → 6th is 35.", c: "25 is only the 4th term.", d: "That's growing by more than 5." }, explanation: "10, 15, 20, 25, 30, 35 — 6th week = $35.", hints: ["List the terms.", "10, 15, 20, 25, 30, 35.", "$35."] },
      // @q07
      { id: "U17L1-num-1", type: "numeric-input", category: "procedural", prompt: "4, 7, 10, 13, … Type the next term.", answer: 16, tolerance: 0, explanation: "d = 3; 13 + 3 = 16.", hints: ["Gap = 3.", "13 + 3.", "16."] },
      // @q08
      { id: "U17L1-num-2", type: "numeric-input", category: "procedural", prompt: "3, 6, 12, 24, … Type the next term.", answer: 48, tolerance: 0, explanation: "×2 each step: 24 × 2 = 48.", hints: ["Multiplier = 2.", "24 × 2.", "48."] },
      // @q09
      { id: "U17L1-num-3", type: "numeric-input", category: "conceptual", prompt: "100, 90, 80, … Type the next term (what's d?).", answer: 70, tolerance: 0, explanation: "d = −10; 80 − 10 = 70.", hints: ["Subtracting 10.", "d = −10.", "70."] },
      // @q10
      { id: "U17L1-frac-1", type: "fraction-input", category: "conceptual", prompt: "1/2, 1, 3/2, 2, … Type the next term as a fraction.", numerator: 5, denominator: 2, acceptEquivalent: true, explanation: "Adding 1/2 each step: 2 + 1/2 = 5/2.", hints: ["d = 1/2.", "2 + 1/2.", "5/2."] },
      // @q11
      { id: "U17L1-tf-1", type: "true-false-justify", category: "conceptual", prompt: "6, 9, 12, 15, … is an arithmetic sequence with d = 3.", isTrue: true, explanation: "Constant gap +3 between consecutive terms.", hints: ["Check gaps.", "9 − 6 = 3.", "True."] },
      // @q12
      { id: "U17L1-tf-2", type: "true-false-justify", category: "conceptual", prompt: "1, 3, 6, 10, … is arithmetic (constant differences).", isTrue: false, explanation: "Gaps are 2, 3, 4 — the differences change, so it's not arithmetic.", hints: ["Compute gaps.", "2, then 3.", "False."] },
      // @q13
      { id: "U17L1-order-1", type: "order-steps", category: "word", prompt: "Order the steps to find the next term of 5, 9, 13, 17, …", sequence: ["Subtract neighbours: 9 − 5 = 4", "Check it's constant: 13 − 9 = 4 too", "State the rule: add 4", "Apply: 17 + 4 = 21"], diagnoses: { "Subtract neighbours: 9 − 5 = 4@1": "Find a gap first.", "Check it's constant: 13 − 9 = 4 too@0": "Verify the gap repeats before trusting it.", "Apply: 17 + 4 = 21@0": "Apply at the end." }, explanation: "Find the gap, verify it's constant, name the rule, apply.", hints: ["Find a gap.", "Check it repeats.", "Then add."] },
      // @q14
      { id: "U17L1-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each rule to its example.", pairs: [ { source: "Add 3", target: "2, 5, 8, 11" }, { source: "Multiply by 2", target: "2, 4, 8, 16" }, { source: "Subtract 5", target: "30, 25, 20, 15" } ], diagnoses: { "Add 3->2, 4, 8, 16": "2, 4, 8, 16 doubles — that's ×2.", "Multiply by 2->30, 25, 20, 15": "That subtracts 5 each step.", "Subtract 5->2, 5, 8, 11": "That adds 3, not subtracts 5." }, explanation: "Each example is generated by its stated operation.", hints: ["Check the first gap.", "×2 doubles.", "+3 steps up."] },
      // @q15
      { id: "U17L1-graph-1", type: "graph-interact", category: "word", prompt: "The sequence 3, 6, 9, 12, … reaches 12 after 4 terms. Set the slider to the NEXT term (key: value).", challenge: "Set the slider to 15.", validate: { value: 15 }, tolerance: 0.01, explanation: "Adding 3 → next term 15.", hints: ["d = 3.", "12 + 3.", "15."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "guesses from the starting terms only", diagnosis: "3, 6, 9 and 3, 6, 12 differ after the second gap — the rule, not the start, decides.", hint: "Compute several consecutive gaps before choosing the rule." },
    { wrongPattern: "assumes + is always the rule", diagnosis: "2, 4, 8, 16 isn't +2 — it's ×2.", hint: "Check multiplication too: divide neighbours." },
    { wrongPattern: "each sequence must get bigger", diagnosis: "Subtracting rules (100, 90, 80) are sequences too.", hint: "d can be negative — shrinking is allowed." },
  ],
  recallTags: ["sequences", "term-to-term", "common-difference"],
  discovery: {
    challenges: [
      { instruction: "Place 3, 6, 9, 12 on the line and measure the gaps.", observe: "Every gap is 3 — constant difference, arithmetic." },
      { instruction: "Now switch to 3, 6, 12, 24 and measure gaps again.", observe: "Gaps grow (3, 6, 12) — not arithmetic; it multiplies by 2." },
    ],
    predict: { prompt: "For 2, 5, 8, 11, … what is the next term?", options: [{ id: "a", text: "14 (add 3)" }, { id: "b", text: "13 (add 2)" }, { id: "c", text: "22 (multiply by 2)" }], reveal: "14 — each gap is +3, a constant common difference. Spot the constant operation and the next term writes itself." },
    sayItYourWay: { prompt: "What is a sequence?", phrasings: [{ id: "a", text: "An ordered list of numbers following a rule", correct: true, why: "Order + rule — the rule tells the next term." }, { id: "b", text: "Any collection of numbers", correct: false, why: "Without order or rule it's just a set, not a sequence." }, { id: "c", text: "A single number pattern that doesn't continue", correct: false, why: "A sequence continues by its rule — often forever." }], formalName: "a sequence with a term-to-term rule" },
    stretch: "3, 6, 9, 12, … can reach ANY term — but writing out 100 steps is silly. Is there a formula for the 100th term directly? That's U17-L2.",
  },
};
