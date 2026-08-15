import type { Lesson } from "../schema";

export const T3U25L1: Lesson = {
  // @meta
  id: "T3-U25-L1",
  tier: 3,
  unit: "Pythagoras",
  title: "The 3-4-5 Rope Trick",
  prerequisites: ["T3-U21-L1","T3-U24-L3"],
  estimatedMinutes: 12,
  hook: { question: "Ancient rope-stretchers laid knots 3, 4, and 5 units apart and pulled them tight — the corner always came out square. Plot that triangle on a grid and build a square on each side: the small squares hold 9 and 16 little squares, and the big one holds exactly 25. 9 + 16 = 25, no coincidence.", type: "puzzle" },
  intuitionBlocks: [{ widget: "graph-plotter", narrative: "Plot points at (0,0), (3,0), and (0,4): a right triangle. Count the unit squares inside the square on each side — 3² = 9, 4² = 16 — and on the slanted side you find exactly 5² = 25. Drag the points and the counts change, but the two small squares always pack the big one." }],

  // @discovery
  formalBlocks: [{ definition: "For a right-angled triangle with shorter sides a and b and longest side c (the hypotenuse opposite the right angle), the square count matches: the square on side a holds $a^2$ unit squares, on b holds $b^2$, on c holds $c^2$ — and they fit exactly: $a^2 + b^2 = c^2$. For 3-4-5: $9 + 16 = 25$.", examples: ["Right triangle legs 3 and 4: 3² + 4² = 9 + 16 = 25 = 5².", "Right triangle legs 6 and 8: 36 + 64 = 100 = 10² — a 6-8-10 triple."], pitfall: "The hypotenuse is the LONGEST side, opposite the right angle — always the c in a² + b² = c². Using a short side as c breaks the equation.", altExplanations: ["GAME: a right triangle's square-count proof — build a square on each side and count unit squares: 9 on one leg, 16 on the other, and they fit exactly into the 25 on the hypotenuse. The middle side (hypotenuse, opposite the right angle) is always the c in a² + b² = c².", "MONEY: two savings squares — one side holds 3×3 = $9 worth, another 4×4 = $16; combined they exactly fill the longest-side square of 5×5 = $25. The hypotenuse square is the total, never one of the legs."] }],
  gutChecks: [{ prompt: "Which side is the hypotenuse of a right triangle?", answer: "The longest side, opposite the right angle — it faces across from the corner that is 90°." }],
  quiz: {
    pool: [
      // @q01
      { id: "U25L1-mcq-1", type: "mcq", category: "procedural", prompt: "A right triangle has legs 3 and 4. Its hypotenuse is…", options: [ { id: "a", text: "5" }, { id: "b", text: "7" }, { id: "c", text: "12" }, { id: "d", text: "25" } ], correctOptionId: "a", diagnoses: { b: "7 adds the legs — square them first.", c: "12 multiplies them.", d: "25 is c², not c." }, explanation: "3² + 4² = 9 + 16 = 25 = 5², so c = 5.", hints: ["9 + 16.", "25 = c².", "c = 5."] },
      // @q02
      { id: "U25L1-mcq-2", type: "mcq", category: "conceptual", prompt: "In a 3-4-5 right triangle, which side is the hypotenuse?", options: [ { id: "a", text: "5 — opposite the right angle" }, { id: "b", text: "3 — the smallest" }, { id: "c", text: "4 — the run" }, { id: "d", text: "Any side" } ], correctOptionId: "a", diagnoses: { b: "The smallest side faces the smallest angle.", c: "The run is a leg, not the longest side.", d: "The hypotenuse is specifically opposite the 90° corner." }, explanation: "The hypotenuse is always the longest side, opposite the right angle.", hints: ["Opposite 90°.", "Longest.", "5."] },
      // @q03
      { id: "U25L1-mcq-3", type: "mcq", category: "word", prompt: "A ladder 5 m long leans against a wall reaching 4 m up. How far is its base from the wall?", options: [ { id: "a", text: "3 m" }, { id: "b", text: "6 m" }, { id: "c", text: "9 m" }, { id: "d", text: "5 m" } ], correctOptionId: "a", diagnoses: { b: "6 is 5 + 1, not from Pythagoras.", c: "9 is 5² − 4²? No — 25 − 16 = 9 = b², and b = √9 = 3.", d: "5 is the ladder itself." }, explanation: "b² = 5² − 4² = 25 − 16 = 9 → b = 3 m.", hints: ["25 − 16.", "b² = 9.", "b = 3."] },
      // @q04
      { id: "U25L1-mcq-4", type: "mcq", category: "procedural", prompt: "Legs 5 and 12. The hypotenuse is…", options: [ { id: "a", text: "13" }, { id: "b", text: "17" }, { id: "c", text: "60" }, { id: "d", text: "169" } ], correctOptionId: "a", diagnoses: { b: "17 adds the legs.", c: "60 multiplies them.", d: "169 is c² — take the root." }, explanation: "25 + 144 = 169 = 13², so c = 13.", hints: ["25 + 144.", "169 = c².", "c = 13."] },
      // @q05
      { id: "U25L1-mcq-5", type: "mcq", category: "conceptual", prompt: "The square on a 3-unit side holds how many unit squares?", options: [ { id: "a", text: "9" }, { id: "b", text: "3" }, { id: "c", text: "6" }, { id: "d", text: "12" } ], correctOptionId: "a", diagnoses: { b: "3 is the side length, not its square count.", c: "6 doubles the side length.", d: "12 is a 3 × 4 rectangle." }, explanation: "3² = 3 × 3 = 9 unit squares.", hints: ["3 × 3.", "9.", "9."] },
      // @q06
      { id: "U25L1-mcq-6", type: "mcq", category: "word", prompt: "A right triangle has legs 8 and 15. The hypotenuse is…", options: [ { id: "a", text: "17" }, { id: "b", text: "23" }, { id: "c", text: "120" }, { id: "d", text: "289" } ], correctOptionId: "a", diagnoses: { b: "23 adds the legs.", c: "120 multiplies them.", d: "289 is c² — take the square root." }, explanation: "64 + 225 = 289 = 17².", hints: ["64 + 225.", "289.", "c = 17."] },
      // @q07
      { id: "U25L1-num-1", type: "numeric-input", category: "procedural", prompt: "Legs 6 and 8. The hypotenuse is…", answer: 10, tolerance: 0, explanation: "36 + 64 = 100 = 10².", hints: ["36 + 64.", "√100.", "10."] },
      // @q08
      { id: "U25L1-num-2", type: "numeric-input", category: "procedural", prompt: "Leg 5, hypotenuse 13. The other leg is…", answer: 12, tolerance: 0, explanation: "b² = 169 − 25 = 144 → b = 12.", hints: ["169 − 25.", "√144.", "12."] },
      // @q09
      { id: "U25L1-num-3", type: "numeric-input", category: "conceptual", prompt: "The square on a 5-unit side holds how many unit squares?", answer: 25, tolerance: 0, explanation: "5² = 25.", hints: ["5 × 5.", "25.", "25."] },
      // @q10
      { id: "U25L1-frac-1", type: "fraction-input", category: "conceptual", prompt: "In a 3-4-5 triangle, the square on the shortest side is what fraction of the square on the hypotenuse?", numerator: 9, denominator: 25, acceptEquivalent: true, explanation: "3² = 9 and 5² = 25 → 9/25.", hints: ["3² = 9.", "5² = 25.", "9/25."] },
      // @q11
      { id: "U25L1-tf-1", type: "true-false-justify", category: "conceptual", prompt: "The hypotenuse is the longest side of a right triangle.", isTrue: true, explanation: "It sits opposite the 90° corner, the largest angle, so it's the longest side.", hints: ["Opposite the biggest angle.", "Longest side.", "True."] },
      // @q12
      { id: "U25L1-tf-2", type: "true-false-justify", category: "conceptual", prompt: "In a² + b² = c², any side can play the role of c.", isTrue: false, explanation: "c must be the hypotenuse — the longest side opposite the right angle.", hints: ["c is fixed.", "Hypotenuse only.", "False."] },
      // @q13
      { id: "U25L1-order-1", type: "order-steps", category: "word", prompt: "Order the steps to check a 3-4-5 triangle.", sequence: ["Square the legs: 9 + 16", "Add: 9 + 16 = 25", "Compare with 5²: 25 = 25 ✓"], diagnoses: { "Square the legs: 9 + 16@1": "Square the legs first.", "Add: 9 + 16 = 25@0": "Then add.", "Compare with 5²: 25 = 25 ✓@0": "Compare last." }, explanation: "Square, add, compare with c².", hints: ["9 + 16.", "25.", "25 = 5²."] },
      // @q14
      { id: "U25L1-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each side of a 3-4-5 triangle.", pairs: [ { source: "Hypotenuse", target: "5" }, { source: "One leg", target: "3" }, { source: "Other leg", target: "4" } ], diagnoses: { "Hypotenuse->3": "The hypotenuse is the longest side.", "One leg->5": "5 is the hypotenuse, not a leg.", "Other leg->3": "Legs are 3 and 4." }, explanation: "3² + 4² = 25 = 5² — 5 is the hypotenuse.", hints: ["Longest = 5.", "Short = 3.", "Middle = 4."] },
      // @q15
      { id: "U25L1-graph-1", type: "graph-interact", category: "word", prompt: "A right triangle's legs are 3 and 4. Set the slider to the HYPOTENUSE (key: value).", challenge: "Set the slider to 5.", validate: { value: 5 }, tolerance: 0.01, explanation: "√(9 + 16) = √25 = 5.", hints: ["√25.", "5.", "5."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "adds the leg lengths to get the hypotenuse", diagnosis: "The hypotenuse comes from adding the SQUARES, then square-rooting.", hint: "3² + 4² first." },
    { wrongPattern: "forgets to square root", diagnosis: "9 + 16 = 25 is c² — c is √25 = 5, not 25.", hint: "Undo the square." },
    { wrongPattern: "uses a leg as c", diagnosis: "c is always the hypotenuse opposite the right angle — never a short side.", hint: "Find the longest side." },
  ],
  recallTags: ["Pythagoras", "hypotenuse", "right triangle", "3-4-5"],
  discovery: {
    challenges: [
      { instruction: "Draw a 3-4-5 right triangle and build squares on each side.", observe: "The 3 side holds 9 squares, the 4 side 16, the 5 side exactly 25." },
      { instruction: "Try legs 6 and 8 and count again.", observe: "36 + 64 = 100 — the 10 side's square matches again." },
    ],
    predict: { prompt: "Legs 6 and 8 — the hypotenuse is…", options: [{ id: "a", text: "10" }, { id: "b", text: "14" }, { id: "c", text: "48" }], reveal: "10 — 36 + 64 = 100 = 10². Another perfect triple, discovered by counting squares." },
    sayItYourWay: { prompt: "What does a² + b² = c² say in your words?", phrasings: [{ id: "a", text: "The two small squares add up to exactly the big square on the hypotenuse", correct: true, why: "That's the square-counting picture." }, { id: "b", text: "Adding the sides gives the hypotenuse", correct: false, why: "You square the sides, then add." }, { id: "c", text: "The longest side is always twice a short side", correct: false, why: "No such doubling rule exists." }], formalName: "Pythagoras' theorem — a² + b² = c² for right triangles" },
    stretch: "Counting shows 9 + 16 = 25 — but WHY do the squares always pack perfectly? Next: the four-triangle rearrangement that proves it for every right triangle.", 
  },
};
