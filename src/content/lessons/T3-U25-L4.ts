import type { Lesson } from "../schema";

export const T3U25L4: Lesson = {
  // @meta
  id: "T3-U25-L4",
  tier: 3,
  unit: "Pythagoras",
  title: "Is It Right-Angled?",
  prerequisites: ["T3-U24-L3","T3-U25-L1","T3-U25-L3"],
  estimatedMinutes: 12,
  hook: { question: "Carpenters test a corner with a 3-4-5 check: measure 3 along one side, 4 along the other — if the gap between the marks is 5, the corner is square. The theorem works BACKWARDS too: if a triangle's sides satisfy a² + b² = c², then the angle opposite c is 90°. The converse turns the rope trick into a right-angle detector.", type: "real-world" },
  intuitionBlocks: [{ widget: "graph-plotter", narrative: "Plot a triangle from its side lengths and inspect the corner. When a² + b² = c² the largest angle is exactly 90°; when a² + b² > c² it's acute (< 90°), and when a² + b² < c² it's obtuse (> 90°). Drag a corner and watch the sign flip as the angle crosses 90°." }],

  // @discovery
  formalBlocks: [{ definition: "CONVERSE of Pythagoras: if the three sides of a triangle satisfy $a^2 + b^2 = c^2$ with c the longest side, the triangle is right-angled (angle opposite c = 90°). Compare the squares: $a^2 + b^2 > c^2$ → acute (all angles < 90°); $a^2 + b^2 < c^2$ → obtuse (one angle > 90°). The equality is the exact boundary.", examples: ["Sides 5, 12, 13: 25 + 144 = 169 = 13² → right-angled.", "Sides 6, 7, 8: 36 + 49 = 85 > 64 → acute (no 90°)."], pitfall: "You MUST put the longest side as c. If you test 3, 4, 6 as 3² + 6² ? 4² you get a mismatch — but the true question is 3² + 4² vs 6² (which is < , so obtuse).", altExplanations: ["GAME: the converse is a triangle's class-check — if the longest side's square exactly equals the sum of the other two squares, the triangle HAS a right angle. Greater → acute, less → obtuse; equality is the precise boundary line between the two.", "MONEY: checking three bills against the square-total rule — sides 5, 12, 13: 25 + 144 = 169 exactly, so the triangle is right-angled. Always test the LONGEST side first, or you'll swap which side plays the role of c."] }],
  gutChecks: [{ prompt: "What does the converse tell you when a² + b² = c²?", answer: "That the triangle HAS a right angle opposite c — the equality is both necessary and sufficient." }],
  quiz: {
    pool: [
      // @q01
      { id: "U25L4-mcq-1", type: "mcq", category: "procedural", prompt: "Sides 8, 15, 17. Is it right-angled?", options: [ { id: "a", text: "Yes — 64 + 225 = 289 = 17²" }, { id: "b", text: "No — 8 + 15 ≠ 17" }, { id: "c", text: "Only if the 17 is a leg" }, { id: "d", text: "Cannot tell" } ], correctOptionId: "a", diagnoses: { b: "You compare squares, not raw lengths.", c: "17 is the LONGEST side, so it plays c.", d: "The squares decide it exactly." }, explanation: "8² + 15² = 64 + 225 = 289 = 17² → right-angled.", hints: ["Compare squares.", "289 = 17².", "8² + 15² = 64 + 225 = 289 = 17² → right-angled."] },
      // @q02
      { id: "U25L4-mcq-2", type: "mcq", category: "conceptual", prompt: "The converse test compares…", options: [ { id: "a", text: "a + b with c" }, { id: "b", text: "a² + b² with c², c = longest side" }, { id: "c", text: "all three angles by eye" }, { id: "d", text: "the perimeter with the area" } ], correctOptionId: "b", diagnoses: { a: "Sides aren't compared directly.", c: "The test is numeric, not visual.", d: "Perimeter/area are unrelated." }, explanation: "Square the two shorter sides, add, compare with the longest squared.", hints: ["Longest = c.", "Compare squares.", "Square the two shorter sides, add, compare with the longest squared."] },
      // @q03
      { id: "U25L4-mcq-3", type: "mcq", category: "word", prompt: "A 6 m × 8 m corner with diagonal 10 m — is it square?", options: [ { id: "a", text: "Only if the diagonal is 11 m" }, { id: "b", text: "No — 6 + 8 = 14" }, { id: "c", text: "Yes — 36 + 64 = 100" }, { id: "d", text: "Depends on the material" } ], correctOptionId: "c", diagnoses: { b: "Compare squares, not lengths.", a: "The 10 m diagonal already matches.", d: "Geometry doesn't depend on material." }, explanation: "6² + 8² = 100 = 10² → right angle confirmed.", hints: ["36 + 64.", "= 100 = 10².", "6² + 8² = 100 = 10² → right angle confirmed."] },
      // @q04
      { id: "U25L4-mcq-4", type: "mcq", category: "procedural", prompt: "Sides 5, 6, 7. The triangle is…", options: [ { id: "a", text: "impossible" }, { id: "b", text: "right-angled" }, { id: "c", text: "obtuse — 25 + 36 < 49" }, { id: "d", text: "acute — 25 + 36 = 61 > 49" } ], correctOptionId: "d", diagnoses: { b: "61 ≠ 49, so not right.", c: "61 > 49 means ACUTE, not obtuse.", a: "The triangle inequality holds." }, explanation: "a² + b² > c² → all angles acute.", hints: ["Longest = 7.", "61 vs 49.", "a² + b² > c² → all angles acute."] },
      // @q05
      { id: "U25L4-mcq-5", type: "mcq", category: "conceptual", prompt: "When a² + b² < c², the triangle is…", options: [ { id: "a", text: "obtuse — one angle exceeds 90°" }, { id: "b", text: "acute — all angles under 90°" }, { id: "c", text: "right-angled" }, { id: "d", text: "degenerate" } ], correctOptionId: "a", diagnoses: { b: "Acute is > , this is < .", c: "Equality gives right, less gives obtuse.", d: "It's still a proper triangle." }, explanation: "Less-than means the longest side is too long for a right angle → obtuse.", hints: ["< c².", "Obtuse.", "Less-than means the longest side is too long for a right angle → obtuse."] },
      // @q06
      { id: "U25L4-mcq-6", type: "mcq", category: "word", prompt: "A garden bed has sides 7, 24, 25. Is a corner square?", options: [ { id: "a", text: "No — 7 + 24 = 31" }, { id: "b", text: "Yes — 49 + 576 = 625 = 25²" }, { id: "c", text: "Only if it's a triangle" }, { id: "d", text: "7-24-25 is acute" } ], correctOptionId: "b", diagnoses: { a: "Compare squares, not raw lengths.", c: "Any triangle can be tested.", d: "Equality means right, not acute." }, explanation: "7² + 24² = 49 + 576 = 625 = 25² → right-angled.", hints: ["49 + 576.", "= 625.", "7² + 24² = 49 + 576 = 625 = 25² → right-angled."] },
      // @q07
      { id: "U25L4-num-1", type: "numeric-input", category: "procedural", prompt: "Sides 9, 12, 15 — test a² + b². What value do you compare with 15²?", answer: 225, tolerance: 0, explanation: "81 + 144 = 225 equals 15² → right-angled.", hints: ["81 + 144.", "225.", "81 + 144 = 225 equals 15² → right-angled."] },
      // @q08
      { id: "U25L4-num-2", type: "numeric-input", category: "procedural", prompt: "Sides 20, 21, 29: find a² + b² (the sum to compare with 29²).", answer: 841, tolerance: 0, explanation: "400 + 441 = 841 = 29² → right-angled.", hints: ["400 + 441.", "841.", "400 + 441 = 841 = 29² → right-angled."] },
      // @q09
      { id: "U25L4-num-3", type: "numeric-input", category: "conceptual", prompt: "Sides 4, 5, 6: c² is 36. What is the sum a² + b² you compare it with?", answer: 41, tolerance: 0, explanation: "16 + 25 = 41 > 36 → acute.", hints: ["16 + 25.", "41.", "16 + 25 = 41 > 36 → acute."] },
      // @q10
      { id: "U25L4-frac-1", type: "fraction-input", category: "conceptual", prompt: "In a 5-12-13 right triangle, the square on side 12 is what fraction of the square on 13?", numerator: 144, denominator: 169, acceptEquivalent: true, explanation: "12² = 144 and 13² = 169 → 144/169.", hints: ["12² = 144.", "13² = 169.", "12² = 144 and 13² = 169 → 144/169."] },
      // @q11
      { id: "U25L4-tf-1", type: "true-false-justify", category: "conceptual", prompt: "If a² + b² = c² then the triangle MUST be right-angled.", isTrue: true, explanation: "That's the converse — the equality forces the 90° angle opposite c.", hints: ["Converse holds.", "Right angle forced.", "That's the converse — the equality forces the 90° angle opposite c."] },
      // @q12
      { id: "U25L4-tf-2", type: "true-false-justify", category: "conceptual", prompt: "The converse is only useful when you already know the triangle is right-angled.", isTrue: false, explanation: "The converse DECIDES whether it's right-angled — that's its whole purpose.", hints: ["It tests.", "Decides right or not.", "The converse DECIDES whether it's right-angled — that's its whole purpose."] },
      // @q13
      { id: "U25L4-order-1", type: "order-steps", category: "word", prompt: "Order the steps to test sides 5, 12, 13.", sequence: ["Identify c = 13 (longest)", "Compute a² + b²: 25 + 144 = 169", "Compare with c²: 169 = 169 ✓ right"], diagnoses: { "Identify c = 13 (longest)@1": "Identify c first.", "Compute a² + b²: 25 + 144 = 169@0": "Then compute the sum.", "Compare with c²: 169 = 169 ✓ right@0": "Compare last." }, explanation: "Find c, add leg squares, compare with c².", hints: ["c = 13.", "25 + 144.", "Find c, add leg squares, compare with c²."] },
      // @q14
      { id: "U25L4-drag-1", type: "drag-match", category: "conceptual", prompt: "Match the comparison to the triangle type.", pairs: [ { source: "a² + b² = c²", target: "right-angled" }, { source: "a² + b² > c²", target: "acute" }, { source: "a² + b² < c²", target: "obtuse" } ], diagnoses: { "a² + b² = c²->acute": "Equality means right, not acute.", "a² + b² > c²->obtuse": "Greater means acute.", "a² + b² < c²->right-angled": "Less means obtuse." }, explanation: "The sign of the comparison classifies the biggest angle.", hints: ["= right.", "> acute.", "The sign of the comparison classifies the biggest angle."] },
      // @q15
      { id: "U25L4-graph-1", type: "graph-interact", category: "word", prompt: "Sides 3, 4, 5: set the slider to a² + b² (the sum to compare with c²).", challenge: "Sides 3, 4, 5: — adjust the values below to match the condition.", validate: { value: 25 }, tolerance: 0.01, explanation: "9 + 16 = 25 = 5² → right-angled confirmed.", hints: ["9 + 16.", "25.", "9 + 16 = 25 = 5² → right-angled confirmed."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "tests the wrong side as c", diagnosis: "c is the LONGEST side — using a shorter side misreads the comparison.", hint: "Sort the sides first." },
    { wrongPattern: "compares raw lengths instead of squares", diagnosis: "The test squares each side first; 5+12 vs 13 is not the question.", hint: "Square everything." },
    { wrongPattern: "mixes up acute and obtuse signs", diagnosis: "a² + b² > c² → acute; < → obtuse; = → right.", hint: "Think: more spread = acute." },
  ],
  recallTags: ["converse", "Pythagoras", "right-angled", "acute", "obtuse"],
  discovery: {
    challenges: [
      { instruction: "Plot a triangle with sides 5, 12, 13 and read the largest angle.", observe: "It reads exactly 90° — the equality predicts the corner." },
      { instruction: "Try sides 4, 5, 6 and read the angles.", observe: "The largest angle is under 90°, and a² + b² > c² confirms acute." },
    ],
    predict: { prompt: "Sides 6, 8, 10 — the triangle is…", options: [{ id: "a", text: "right-angled" }, { id: "b", text: "acute" }, { id: "c", text: "obtuse" }], reveal: "Right-angled — 36 + 64 = 100 = 10². The 6-8-10 triple mirrors the 3-4-5 rope trick scaled up." },
    sayItYourWay: { prompt: "How can you test if a triangle is right-angled?", phrasings: [{ id: "a", text: "Compare the two shorter sides' squares with the longest side's square", correct: true, why: "Equality means the right angle exists." }, { id: "b", text: "Add the three side lengths", correct: false, why: "Perimeter decides nothing about angles." }, { id: "c", text: "Check if one angle looks like 90°", correct: false, why: "The numeric test is exact, sight is guesswork." }], formalName: "converse of Pythagoras — a² + b² = c² ⇔ right angle opposite c" },
    stretch: "Right triangles are the gateway to angles themselves. Next: the ratio that only cares about the angle — sine, the keystone of trigonometry.", 
  },
};
