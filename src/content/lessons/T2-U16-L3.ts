import type { Lesson } from "../schema";

export const T2U16L3: Lesson = {
  // @meta
  id: "T2-U16-L3",
  tier: 2,
  unit: "Inequalities",
  title: "Whole-Number Answers",
  prerequisites: ["T2-U15-L4","T2-U16-L2"],
  estimatedMinutes: 12,
  hook: { question: "'Pack at least 12 biscuits, fewer than 18' — how many biscuits can you pack? The inequality allows 12.3 and 17.99, but a biscuit tin can't hold fractions. When the real world demands whole numbers, you list the integers from the shaded ray.", type: "real-world" },
  intuitionBlocks: [{ widget: "number-line", narrative: "Shade 12 ≤ x < 18 and watch which tick marks light up: 12, 13, 14, 15, 16, 17 — six whole numbers. The continuous ray shrinks to a discrete list of integer solutions." }],

  // @discovery
  formalBlocks: [{ definition: "The integer solutions of an inequality are the whole numbers on its ray. Solve the inequality like U16-L2, then walk the number line from the lower boundary to the upper boundary, including a boundary only if the sign has 'or equal' (≤/≥).", examples: ["2 ≤ x < 6 → x = 2, 3, 4, 5 (2 included, 6 excluded).", "x > 3.5 → x = 4, 5, 6, …; the smallest integer is 4 (3.5 < 4)."], pitfall: "Open boundaries drop the boundary integer: x < 5 excludes 5, but x ≤ 5 includes it. Always read the dot on the line before listing.", altExplanations: ["GAME: integer solutions are the collectible items on the ray — 2 ≤ x < 6 yields the pickups 2, 3, 4, 5; the open boundary at 6 means 6 is not a pickup. Read the dot before collecting.", "FOOD: listing whole servings from a range — 3 < x ≤ 7 means the whole-number servings are 4, 5, 6, 7. The closed boundary at 7 includes it; the open at 3 drops it."] }],
  gutChecks: [{ prompt: "List the integers with 3 < x ≤ 7.", answer: "4, 5, 6, 7 (3 excluded, 7 included)." }],
  quiz: {
    pool: [
      // @q01
      { id: "U16L3-mcq-1", type: "mcq", category: "procedural", prompt: "2 ≤ x < 6. Which whole numbers satisfy it?", options: [ { id: "a", text: "2, 3, 4, 5" }, { id: "b", text: "3, 4, 5" }, { id: "c", text: "2, 3, 4, 5, 6" }, { id: "d", text: "1, 2, 3, 4, 5" } ], correctOptionId: "a", diagnoses: { b: "2 is included (≤).", c: "6 is EXCLUDED (< 6).", d: "1 is below the closed boundary." }, explanation: "≤ includes 2, < excludes 6 → 2, 3, 4, 5.", hints: ["Left: ≤ includes 2.", "Right: < excludes 6.", "≤ includes 2, < excludes 6 → 2, 3, 4, 5."] },
      // @q02
      { id: "U16L3-mcq-2", type: "mcq", category: "conceptual", prompt: "What makes an integer-solutions problem different from a plain inequality?", options: [ { id: "a", text: "You ignore the inequality symbol" }, { id: "b", text: "You list discrete whole numbers instead of shading a whole ray" }, { id: "c", text: "Only negative numbers count" }, { id: "d", text: "You always round up" } ], correctOptionId: "b", diagnoses: { a: "The symbol still chooses which integers count.", c: "Positive and negative integers both count.", d: "Rounding isn't the rule — boundaries decide." }, explanation: "The ray stays, but you collect only the integer tick marks on it.", hints: ["Tick marks only.", "Whole numbers.", "The ray stays, but you collect only the integer tick marks on it."] },
      // @q03
      { id: "U16L3-mcq-3", type: "mcq", category: "word", prompt: "A lift takes at least 8 people and at most 12: 8 ≤ x ≤ 12. How many people can ride?", options: [ { id: "a", text: "8 only" }, { id: "b", text: "9, 10, 11" }, { id: "c", text: "8, 9, 10, 11, or 12" }, { id: "d", text: "9 to 13" } ], correctOptionId: "c", diagnoses: { b: "Both 8 and 12 are included (≤ on both sides).", a: "Only one person count? The range is wider.", d: "13 exceeds 12." }, explanation: "Both bounds closed → integers 8 through 12.", hints: ["≤ includes 8.", "≤ includes 12.", "Both bounds closed → integers 8 through 12."] },
      // @q04
      { id: "U16L3-mcq-4", type: "mcq", category: "procedural", prompt: "x > 3.5. What is the SMALLEST integer satisfying it?", options: [ { id: "a", text: "5" }, { id: "b", text: "3" }, { id: "c", text: "3.5" }, { id: "d", text: "4" } ], correctOptionId: "d", diagnoses: { b: "3 is less than 3.5.", c: "3.5 isn't an integer.", a: "4 is the first integer above 3.5 — 5 skips it." }, explanation: "The first whole number strictly above 3.5 is 4.", hints: ["Above 3.5.", "First whole number.", "The first whole number strictly above 3."] },
      // @q05
      { id: "U16L3-mcq-5", type: "mcq", category: "conceptual", prompt: "Which of these includes 5 as an integer solution?", options: [ { id: "a", text: "x ≤ 5" }, { id: "b", text: "x < 5" }, { id: "c", text: "5 < x" }, { id: "d", text: "x > 5" } ], correctOptionId: "a", diagnoses: { b: "< 5 excludes exactly 5.", c: "'5 less than x' means x > 5, excluding 5.", d: "x > 5 excludes 5." }, explanation: "Only ≤ (or ≥) includes its boundary value.", hints: ["Boundary included?", "'or equal'.", "Only ≤ (or ≥) includes its boundary value."] },
      // @q06
      { id: "U16L3-mcq-6", type: "mcq", category: "word", prompt: "Pencils: fewer than 20, at least 15: 15 ≤ p < 20. How many pencils can you buy?", options: [ { id: "a", text: "15 to 20" }, { id: "b", text: "15, 16, 17, 18, or 19" }, { id: "c", text: "16 to 19" }, { id: "d", text: "14 to 19" } ], correctOptionId: "b", diagnoses: { a: "20 is excluded by '< 20'.", c: "15 is included by '≥ 15'.", d: "14 is below the closed boundary." }, explanation: "15 ≤ p < 20 → 15 through 19 inclusive.", hints: ["≥ 15 includes 15.", "< 20 excludes 20.", "15 ≤ p < 20 → 15 through 19 inclusive."] },
      // @q07
      { id: "U16L3-num-1", type: "numeric-input", category: "procedural", prompt: "x > 4.5. Type the SMALLEST integer that satisfies it.", answer: 5, tolerance: 0, explanation: "First whole number strictly above 4.5 is 5.", hints: ["Above 4.5.", "Next whole number.", "First whole number strictly above 4."] },
      // @q08
      { id: "U16L3-num-2", type: "numeric-input", category: "procedural", prompt: "x < 8. Type the LARGEST integer that satisfies it.", answer: 7, tolerance: 0, explanation: "8 excluded, so 7 is the largest.", hints: ["< 8 excludes 8.", "7.", "8 excluded, so 7 is the largest."] },
      // @q09
      { id: "U16L3-num-3", type: "numeric-input", category: "conceptual", prompt: "5 ≤ x < 9. Type the number of integers in the solution set.", answer: 4, tolerance: 0, explanation: "5, 6, 7, 8 → four integers.", hints: ["List 5–8.", "Count them.", "5, 6, 7, 8 → four integers."] },
      // @q10
      { id: "U16L3-frac-1", type: "fraction-input", category: "conceptual", prompt: "x ≥ 1/2. Write the SMALLEST integer that satisfies it as a fraction.", numerator: 1, denominator: 1, acceptEquivalent: true, explanation: "1 is the smallest integer ≥ 1/2.", hints: ["≥ 1/2 means 1, 2, 3…", "The boundary itself isn't an integer.", "1 is the smallest integer ≥ 1/2."] },
      // @q11
      { id: "U16L3-tf-1", type: "true-false-justify", category: "conceptual", prompt: "x ≤ 4 has integer solutions 4, 3, 2, 1, 0, −1, …", isTrue: true, explanation: "≤ includes 4 and everything below, including all integers.", hints: ["Closed boundary.", "All integers below.", "≤ includes 4 and everything below, including all integers."] },
      // @q12
      { id: "U16L3-tf-2", type: "true-false-justify", category: "conceptual", prompt: "x < 4 and x ≤ 4 have the same integer solutions.", isTrue: false, explanation: "x < 4 excludes 4; x ≤ 4 includes it — different sets.", hints: ["4 included?", "< no, ≤ yes.", "x < 4 excludes 4; x ≤ 4 includes it — different sets."] },
      // @q13
      { id: "U16L3-order-1", type: "order-steps", category: "word", prompt: "Order the steps to list integers for 3 < x ≤ 6.", sequence: ["Draw the line with dots at 3 (open) and 6 (closed)", "Walk the integers between the dots", "List: 4, 5, 6", "Check boundaries: 3 out, 6 in"], diagnoses: { "Draw the line with dots at 3 (open) and 6 (closed)@1": "Draw first.", "List: 4, 5, 6@0": "Walk before listing.", "Check boundaries: 3 out, 6 in@0": "Check at the end." }, explanation: "Draw, walk, list, verify boundaries.", hints: ["Draw dots.", "Walk integers.", "List then check."] },
      // @q14
      { id: "U16L3-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each inequality to its integer set.", pairs: [ { source: "1 ≤ x < 4", target: "1, 2, 3" }, { source: "1 < x ≤ 4", target: "2, 3, 4" }, { source: "1 < x < 4", target: "2, 3" } ], diagnoses: { "1 ≤ x < 4->2, 3, 4": "1 is included, 4 excluded — it's 1, 2, 3.", "1 < x ≤ 4->1, 2, 3": "1 excluded, 4 included — 2, 3, 4.", "1 < x < 4->1, 2, 3": "Both boundaries open — just 2, 3." }, explanation: "Closed boundary adds the endpoint; open drops it.", hints: ["Check left boundary.", "Check right boundary.", "Adjust the list."] },
      // @q15
      { id: "U16L3-graph-1", type: "graph-interact", category: "word", prompt: "The lift allows 8 ≤ x ≤ 12. Set the slider to the LARGEST allowed integer (key: value).", challenge: "Adjust the values below so they match the condition described in the prompt.", validate: { value: 12 }, tolerance: 0.01, explanation: "12 is included by ≤ — the largest allowed.", hints: ["≤ includes 12.", "Largest is 12.", "12 is included by ≤ — the largest allowed."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "includes an open boundary integer", diagnosis: "x < 5 excludes 5; only ≤/≥ include the endpoint.", hint: "Check the dot: open dot → drop that integer." },
    { wrongPattern: "rounds instead of listing", diagnosis: "x > 3.5 doesn't round to 3 — the first valid integer is 4.", hint: "Walk the ray from the boundary upward, not round." },
    { wrongPattern: "forgets the integers past the boundary", diagnosis: "x > 3.5 lists 4, 5, 6, … forever — it's not just one number.", hint: "List the smallest, then '…' continues." },
  ],
  recallTags: ["inequalities", "integer-solutions", "number-line"],
  discovery: {
    challenges: [
      { instruction: "Shade 2 ≤ x < 6 and highlight just the integer ticks.", observe: "Exactly 2, 3, 4, 5 light up — the ray's integers." },
      { instruction: "Change the left dot to open (2 < x) and note the list.", observe: "2 drops off: 3, 4, 5 now — boundaries control the list." },
    ],
    predict: { prompt: "For 2 ≤ x < 6, how many whole numbers satisfy it?", options: [{ id: "a", text: "Four: 2, 3, 4, 5" }, { id: "b", text: "Five: 2, 3, 4, 5, 6" }, { id: "c", text: "Three: 3, 4, 5" }], reveal: "Four: 2 is in (closed dot), 6 is out (open dot), so 2, 3, 4, 5 — the boundary dots decide the count." },
    sayItYourWay: { prompt: "What is an 'integer solution'?", phrasings: [{ id: "a", text: "The whole-number values inside the inequality's range", correct: true, why: "You keep only the integer tick marks on the shaded ray." }, { id: "b", text: "Every number on the ray", correct: false, why: "That includes fractions — integers are a subset." }, { id: "c", text: "Only the boundary numbers", correct: false, why: "The whole list between the boundaries counts too." }], formalName: "integer solutions of an inequality" },
    stretch: "Lists of numbers, ordered by a rule — that IS a sequence. 2, 3, 4, 5 is a sequence; so is 1, 4, 9, 16, … What comes next, and why? U17.",
  },
};
