import type { Lesson } from "../schema";

export const T2U16L1: Lesson = {
  // @meta
  id: "T2-U16-L1",
  tier: 2,
  unit: "Inequalities",
  title: "Ranges, Not Points",
  prerequisites: ["T2-U11-L1","T2-U14-L1","T2-U15-L4"],
  estimatedMinutes: 12,
  hook: { question: "'You must be at least 120 cm tall to ride.' That's not one height — it's a whole family of heights: 120, 130, 157.5, all of them. An inequality describes a range, and a number line shows the whole family at once.", type: "real-world" },
  intuitionBlocks: [{ widget: "number-line", narrative: "Slide the marker past the 120 cm mark and watch the ray shade beyond it. A closed dot at 120 includes it; an open dot would leave it out — the two ways a range can start." }],

  // @discovery
  formalBlocks: [{ definition: "x ≥ 120 means x is 120 or more — a ray on the number line, closed dot at 120. x > 120 means MORE than 120 (121, 150.5…) — open dot at 120. < and ≤ work the same way to the left. The dot is open when the boundary itself is excluded.", examples: ["x ≥ 3 → closed dot at 3, ray right: 3, 4, 10.9 all included.", "x < 2 → open dot at 2, ray left: 1.9, 0, −5 included; 2 itself NOT."], pitfall: "A closed dot means 'this value is included'; an open dot means 'everything up to, but not including'. x > 5 includes 5.0001 but not 5 exactly.", altExplanations: ["GAME: x ≥ 120 is a level gate — any level at or above 120 passes (dot filled in); x > 120 passes only levels strictly above (dot open). The dot on the line is the gate's inclusivity switch.", "FOOD: height limits — 'you must be 120 cm or taller' includes exactly 120 (closed dot); 'taller than 120' excludes it (open dot). The number line shows the whole allowed range, not a single answer."] }],
  gutChecks: [{ prompt: "Show x ≤ 4 on a number line: open or closed dot?", answer: "Closed dot at 4, ray to the left." }],
  quiz: {
    pool: [
      // @q01
      { id: "U16L1-mcq-1", type: "mcq", category: "procedural", prompt: "x ≥ 3 on a number line uses…", options: [ { id: "a", text: "a closed dot at 3 and a ray to the right" }, { id: "b", text: "an open dot at 3 and a ray to the right" }, { id: "c", text: "a closed dot at 3 and a ray to the left" }, { id: "d", text: "two rays from 3" } ], correctOptionId: "a", diagnoses: { b: "Open dot means >, not ≥.", c: "Ray direction: ≥ goes right (bigger).", d: "One ray only — a single boundary." }, explanation: "≥ includes 3 (closed dot) and everything greater (ray right).", hints: ["≥ means 'or equal'.", "Closed dot.", "≥ includes 3 (closed dot) and everything greater (ray right)."] },
      // @q02
      { id: "U16L1-mcq-2", type: "mcq", category: "conceptual", prompt: "What's the difference between an open and a closed dot?", options: [ { id: "a", text: "Open includes it; closed doesn't" }, { id: "b", text: "Closed includes the boundary value; open excludes it" }, { id: "c", text: "They mean the same thing" }, { id: "d", text: "Closed means 'end of the line'" } ], correctOptionId: "b", diagnoses: { a: "Reversed — closed includes.", c: "They encode ≤ vs <, a real difference.", d: "Dots are about inclusion, not endings." }, explanation: "Closed = the boundary is in the range; open = it's just outside.", hints: ["Thinks of ≥ vs >.", "Closed = included.", "Open = excluded."] },
      // @q03
      { id: "U16L1-mcq-3", type: "mcq", category: "word", prompt: "Ride requires height ≥ 120 cm. Who CAN ride?", options: [ { id: "a", text: "Cal, 115 cm" }, { id: "b", text: "Ben, 119.5 cm" }, { id: "c", text: "Aisha, 131 cm" }, { id: "d", text: "Dana, 99 cm" } ], correctOptionId: "c", diagnoses: { b: "119.5 < 120 — below the boundary.", a: "115 < 120.", d: "99 < 120." }, explanation: "131 ≥ 120 qualifies; the rest are below.", hints: ["Compare to 120.", "131 passes.", "131 ≥ 120 qualifies; the rest are below."] },
      // @q04
      { id: "U16L1-mcq-4", type: "mcq", category: "procedural", prompt: "x < 2 is drawn as…", options: [ { id: "a", text: "a closed dot at 2, ray to the right" }, { id: "b", text: "a closed dot at 2, ray to the left" }, { id: "c", text: "an open dot at 2, ray to the right" }, { id: "d", text: "an open dot at 2, ray to the left" } ], correctOptionId: "d", diagnoses: { b: "Closed dot would include 2 — but x < 2 doesn't.", c: "Ray left for smaller values.", a: "Both dot and direction are wrong." }, explanation: "< excludes 2 (open dot) and shades everything smaller (left).", hints: ["< means 'less than'.", "2 NOT included → open.", "< excludes 2 (open dot) and shades everything smaller (left)."] },
      // @q05
      { id: "U16L1-mcq-5", type: "mcq", category: "conceptual", prompt: "Why is an inequality a RANGE, not a single answer?", options: [ { id: "a", text: "The boundary splits the line into a whole half-line of valid values" }, { id: "b", text: "Every inequality has exactly one solution" }, { id: "c", text: "Ranges are only for temperatures" }, { id: "d", text: "It has two answers, one left and one right" } ], correctOptionId: "a", diagnoses: { b: "x > 5 has infinitely many solutions, not one.", c: "Ranges apply everywhere, not just temperature.", d: "One ray, not one answer on each side." }, explanation: "One boundary → one ray: infinitely many values all valid.", hints: ["Slide along the line.", "Many values work.", "One boundary → one ray: infinitely many values all valid."] },
      // @q06
      { id: "U16L1-mcq-6", type: "mcq", category: "word", prompt: "Oven must stay under 220°C: t < 220. Which is safe?", options: [ { id: "a", text: "220°C" }, { id: "b", text: "219.8°C" }, { id: "c", text: "220.5°C" }, { id: "d", text: "221°C" } ], correctOptionId: "b", diagnoses: { a: "220 is NOT less than 220 — excluded by the open boundary.", c: "220.5 > 220.", d: "221 > 220." }, explanation: "t < 220 keeps 219.8 safe and excludes exactly 220.", hints: ["Barely under 220.", "219.8 passes.", "t < 220 keeps 219."] },
      // @q07
      { id: "U16L1-num-1", type: "numeric-input", category: "procedural", prompt: "x > 5. Type the SMALLEST whole number that satisfies it.", answer: 6, tolerance: 0, explanation: "5 itself is excluded, so 6 is the first whole number.", hints: ["More than 5.", "Not 5.", "5 itself is excluded, so 6 is the first whole number."] },
      // @q08
      { id: "U16L1-num-2", type: "numeric-input", category: "procedural", prompt: "x ≤ 4. Type the LARGEST whole number that satisfies it.", answer: 4, tolerance: 0, explanation: "≤ includes 4, so 4 itself is the largest.", hints: ["≤ means 'or equal'.", "4 included.", "≤ includes 4, so 4 itself is the largest."] },
      // @q09
      { id: "U16L1-num-3", type: "numeric-input", category: "conceptual", prompt: "Ride limit: h ≥ 120. Type the smallest height (cm) allowed.", answer: 120, tolerance: 0, explanation: "≥ includes exactly 120.", hints: ["Boundary value.", "120 included.", "≥ includes exactly 120."] },
      // @q10
      { id: "U16L1-frac-1", type: "fraction-input", category: "conceptual", prompt: "x > 1/2. Write a fraction just above the boundary that satisfies it.", numerator: 3, denominator: 4, acceptEquivalent: true, explanation: "3/4 > 1/2 — any value in the open range works.", hints: ["Bigger than 1/2.", "3/4 works.", "3/4 > 1/2 — any value in the open range works."] },
      // @q11
      { id: "U16L1-tf-1", type: "true-false-justify", category: "conceptual", prompt: "x > 4 includes 4.", isTrue: false, explanation: "Strict 'greater than' excludes exactly 4 — that's what the open dot shows.", hints: ["> is strict.", "4 not included.", "Strict 'greater than' excludes exactly 4 — that's what the open dot shows."] },
      // @q12
      { id: "U16L1-tf-2", type: "true-false-justify", category: "conceptual", prompt: "x ≥ 4 and x > 3 have different solution sets.", isTrue: true, explanation: "x ≥ 4 misses 3.5, but x > 3 includes it — different ranges.", hints: ["Compare 3.5.", "≥ 4 excludes it.", "True — different."] },
      // @q13
      { id: "U16L1-order-1", type: "order-steps", category: "word", prompt: "Order the steps to draw x < 2.", sequence: ["Mark the boundary at 2", "Decide the dot: 2 NOT included → open", "Shade the ray to the left", "Label the inequality x < 2"], diagnoses: { "Mark the boundary at 2@1": "Mark the boundary first.", "Shade the ray to the left@0": "Choose the dot before shading.", "Label the inequality x < 2@0": "Label at the end." }, explanation: "Mark, choose dot type, shade the correct ray, label.", hints: ["Boundary first.", "Dot next.", "Mark, choose dot type, shade the correct ray, label."] },
      // @q14
      { id: "U16L1-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each inequality to its number-line sketch.", pairs: [ { source: "x ≥ 2", target: "Closed dot at 2, ray right" }, { source: "x < 2", target: "Open dot at 2, ray left" }, { source: "x ≤ 2", target: "Closed dot at 2, ray left" } ], diagnoses: { "x ≥ 2->Open dot at 2, ray left": "≥ includes 2 and shades right.", "x < 2->Closed dot at 2, ray right": "< excludes 2 and shades left.", "x ≤ 2->Closed dot at 2, ray right": "≤ shades left (smaller values)." }, explanation: "Compare: ≤/≥ gain the closed dot; direction follows the arrow meaning.", hints: ["≤/≥ closed.", "< / > open.", "Direction: smaller = left."] },
      // @q15
      { id: "U16L1-graph-1", type: "graph-interact", category: "word", prompt: "The ride boundary is at 120 cm. Set the slider to the smallest height that satisfies h ≥ 120 (key: value).", challenge: "Adjust the values below so they match the condition described in the prompt.", validate: { value: 120 }, tolerance: 0.01, explanation: "≥ includes 120 — the closed boundary.", hints: ["Boundary value.", "120 included.", "≥ includes 120 — the closed boundary."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "confuses open and closed dots", diagnosis: "Open = excluded boundary (< or >); closed = included (≤ or ≥).", hint: "Look at the symbol: does it include 'or equal'?" },
    { wrongPattern: "shades the wrong direction", diagnosis: "Smaller values sit to the LEFT; bigger to the RIGHT.", hint: "Test a value on each side of the boundary." },
    { wrongPattern: "thinks one number is the answer", diagnosis: "Inequalities have infinitely many answers — a whole ray.", hint: "Pick two different valid numbers to see the range." },
  ],
  recallTags: ["inequalities", "number-line", "ranges"],
  discovery: {
    challenges: [
      { instruction: "Shade x ≥ 3 and slide the marker through 3, 3.5, 10.", observe: "Every value at or above 3 is shaded — a whole ray, not one point." },
      { instruction: "Switch to x > 3 and hover right at 3.", observe: "The dot opens: 3 itself now excluded, 3.0001 still in." },
    ],
    predict: { prompt: "Which numbers satisfy x > 5?", options: [{ id: "a", text: "6, 7, 8, … and everything bigger" }, { id: "b", text: "Just the number 6" }, { id: "c", text: "5 and everything bigger" }], reveal: "6, 7, 8… and 5.1, 5.01 — every value strictly above 5. Exactly 5 is out; that's the open dot." },
    sayItYourWay: { prompt: "What does x ≥ 3 describe?", phrasings: [{ id: "a", text: "All numbers from 3 upward, including 3 itself", correct: true, why: "The closed dot at 3 plus the ray right." }, { id: "b", text: "All numbers greater than 3, not including 3", correct: false, why: "That's x > 3 with the open dot." }, { id: "c", text: "Just the number 3", correct: false, why: "One point, not the range — lots of values fit." }], formalName: "an inequality (a half-line on the number line)" },
    stretch: "Now the real power: 3x + 1 > 10. Same balance moves as equations — until the sign-flip surprise hits. U16-L2.",
  },
};
