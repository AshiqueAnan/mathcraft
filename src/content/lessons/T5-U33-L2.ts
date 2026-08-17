import type { Lesson } from "../schema";

export const T5U33L2: Lesson = {
  // @meta
  id: "T5-U33-L2",
  tier: 5,
  unit: "Polynomials & further trig",
  title: "Beyond Right Triangles",
  prerequisites: ["T3-U26-L3","T5-U32-L3","T5-U33-L1"],
  estimatedMinutes: 14,
  hook: { question: "SOH-CAH-TOA only works in right triangles — but most triangles aren't right-angled. Surveyors measuring a mountain, engineers sizing a bridge: their triangles are awkward. Two new laws take over: the sine rule (a side over sin of its opposite angle) and the cosine rule (a generalization of Pythagoras). Every triangle, any shape.", type: "real-world" },
  intuitionBlocks: [{ widget: "geometry-playground", narrative: "Drag the vertices of any triangle and watch the sine-rule ratios: a/sin A, b/sin B, c/sin C stay equal no matter the shape. Then check the cosine rule: the side opposite an angle equals the other two sides' squares minus 2bc cos A — Pythagoras is just the case where cos 90° = 0." }],

  // @discovery
  formalBlocks: [{ definition: "THE SINE RULE: $\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$ for ANY triangle (side a opposite angle A, etc.). Use it when you know a side and its opposite angle. THE COSINE RULE: $c^2 = a^2 + b^2 - 2ab\\cos C$ — use it when given two sides and the INCLUDED angle (SAS) or three sides (SSS).", examples: ["Sides 8 and 10 with angles opposite 50° and 70°: 8/sin 50° = 10/sin 70°.", "Sides 5, 7 with included angle 60°: c² = 25 + 49 - 2(5)(7)cos60° = 74 - 35 = 39, so c = √39."], pitfall: "The sine rule pairs each side with its OPPOSITE angle — mismatching (e.g. 8/sin 70°) is the classic slip. Also, two sides and a NON-included angle can give two possible triangles (the ambiguous case) — flagged, don't ignore it.", altExplanations: ["GAME: the sine rule is the angle-vs-side pairing rule — side a over sin A, matched to its OPPOSITE angle. Use it with a side + its opposite angle (ASA/AAS). The cosine rule is the SAS/SSS all-in-one: c² = a² + b² − 2ab cos C. Mismatching a side with a non-opposite angle is the classic game-over.", "TRAVEL: a triangle's navigation chart — the sine rule pairs each leg with the angle DIRECTLY across the junction; the cosine rule handles the two-sides-and-corner (SAS) or three-known-sides (SSS) cases. The ambiguous case (two sides, non-included angle) can yield two possible triangles — a flagged detour."] }],
  gutChecks: [{ prompt: "Which rule for sides 6, 8 with included angle 45°?", answer: "Cosine rule — two sides plus the angle between them (SAS)." }],
  quiz: {
    pool: [
      // @q01
      { id: "U33L2-mcq-1", type: "mcq", category: "procedural", prompt: "Sides 8 and 10 opposite angles 50° and 70°. The sine rule says…", options: [ { id: "a", text: "8/sin50° = 10/sin70°" }, { id: "b", text: "8/sin70° = 10/sin50°" }, { id: "c", text: "8×10 = sin50°×sin70°" }, { id: "d", text: "8+10 = 50+70" } ], correctOptionId: "a", diagnoses: { b: "Each side pairs with its OPPOSITE angle.", c: "Sides don't multiply with sines like that.", d: "Sides and angles don't add." }, explanation: "a/sin A pairs side a with its opposite angle A.", hints: ["Opposite pairs.", "8 ↔ 50°.", "8/sin50°."] },
      // @q02
      { id: "U33L2-mcq-2", type: "mcq", category: "conceptual", prompt: "Given sides 5, 7 and the INCLUDED angle 60°, which rule finds the third side?", options: [ { id: "a", text: "sine rule" }, { id: "b", text: "cosine rule" }, { id: "c", text: "Pythagoras directly" }, { id: "d", text: "either works equally" } ], correctOptionId: "b", diagnoses: { a: "Sine rule needs a side-opposite-angle pair.", c: "Pythagoras needs a right angle.", d: "Cosine rule is the designed tool for SAS." }, explanation: "SAS = cosine rule: c² = a² + b² - 2ab·cos C.", hints: ["Two sides + included angle.", "SAS.", "Cosine rule."] },
      // @q03
      { id: "U33L2-mcq-3", type: "mcq", category: "word", prompt: "A surveyor sights a mountain top at 40° from one point, and a base of 100 m at 70° from the top's opposite side. Which rule fits?", options: [ { id: "a", text: "Pythagoras" }, { id: "b", text: "cosine rule" }, { id: "c", text: "sine rule" }, { id: "d", text: "no rule fits" } ], correctOptionId: "c", diagnoses: { b: "Cosine rule is for SAS/SSS — here we have a side and its opposite angle.", a: "No right angle yet.", d: "The sine rule handles side-opposite-angle data." }, explanation: "Given a side and its opposite angle → sine rule.", hints: ["Side + opposite angle.", "Sine rule.", "Sine."] },
      // @q04
      { id: "U33L2-mcq-4", type: "mcq", category: "procedural", prompt: "Cosine rule with sides 5, 7 and included angle 60°: c² = …", options: [ { id: "a", text: "60" }, { id: "b", text: "74" }, { id: "c", text: "25" }, { id: "d", text: "39" } ], correctOptionId: "d", diagnoses: { b: "74 is a² + b² without subtracting 2ab·cos C.", c: "25 is just 5².", a: "60 is the angle, not the square." }, explanation: "c² = 25 + 49 - 2(5)(7)(0.5) = 74 - 35 = 39.", hints: ["a² + b² - 2ab cosC.", "74 - 35.", "39."] },
      // @q05
      { id: "U33L2-mcq-5", type: "mcq", category: "conceptual", prompt: "Why is the cosine rule a generalization of Pythagoras?", options: [ { id: "a", text: "when C = 90°, cos C = 0 and it becomes a² + b²" }, { id: "b", text: "it's a different theorem" }, { id: "c", text: "it only works with right angles" }, { id: "d", text: "cos never affects the result" } ], correctOptionId: "a", diagnoses: { b: "Same family — it includes Pythagoras as a case.", c: "It works for all triangles.", d: "cos C changes the term." }, explanation: "At 90°, cos 90° = 0, so c² = a² + b² exactly.", hints: ["cos 90°.", "= 0.", "Pythagoras."] },
      // @q06
      { id: "U33L2-mcq-6", type: "mcq", category: "word", prompt: "Two forces 6 N and 8 N at 120°. The resultant uses…", options: [ { id: "a", text: "sine rule" }, { id: "b", text: "cosine rule (sides with included angle)" }, { id: "c", text: "Pythagoras (6² + 8²)" }, { id: "d", text: "no triangle exists" } ], correctOptionId: "b", diagnoses: { a: "Sine rule needs a side-opposite pair.", c: "Pythagoras needs 90° — here it's 120°.", d: "Two sides + included angle always make a triangle." }, explanation: "The resultant is the third side of a triangle: SAS → cosine rule.", hints: ["Included angle.", "SAS.", "Cosine."] },
      // @q07
      { id: "U33L2-num-1", type: "numeric-input", category: "procedural", prompt: "Sine rule: a = 8, sin A = 0.5, sin B = 0.75. Find b (b = a·sin B / sin A).", answer: 12, tolerance: 0, explanation: "b = 8 × 0.75 / 0.5 = 12.", hints: ["8 × 0.75.", "÷ 0.5.", "12."] },
      // @q08
      { id: "U33L2-num-2", type: "numeric-input", category: "procedural", prompt: "Cosine rule: sides 3, 4 with included angle 90°. c² = …", answer: 25, tolerance: 0, explanation: "9 + 16 - 2(3)(4)(0) = 25.", hints: ["cos 90° = 0.", "9 + 16.", "25."] },
      // @q09
      { id: "U33L2-num-3", type: "numeric-input", category: "conceptual", prompt: "Sine rule: sin A / 8 = 0.0625. Find sin A.", answer: 0.5, tolerance: 0.01, acceptFractions: true, explanation: "sin A = 8 × 0.0625 = 0.5.", hints: ["8 × 0.0625.", "0.5.", "0.5."] },
      // @q10
      { id: "U33L2-frac-1", type: "fraction-input", category: "conceptual", prompt: "In a 30-60-90 triangle, sin 30° = 1/2. Express sin 30° as a fraction.", numerator: 1, denominator: 2, acceptEquivalent: true, explanation: "sin 30° = 1/2 from the half-equilateral triangle.", hints: ["30° exactly.", "1/2.", "1/2."] },
      // @q11
      { id: "U33L2-tf-1", type: "true-false-justify", category: "conceptual", prompt: "The sine rule works for EVERY triangle, right or not.", isTrue: true, explanation: "a/sin A = b/sin B = c/sin C holds for all triangles.", hints: ["Any shape.", "Equal ratios.", "True."] },
      // @q12
      { id: "U33L2-tf-2", type: "true-false-justify", category: "conceptual", prompt: "Given two sides and a non-included angle, exactly one triangle is always possible.", isTrue: false, explanation: "The ambiguous case can yield two different triangles — always check.", hints: ["Non-included angle.", "Two possibilities.", "False."] },
      // @q13
      { id: "U33L2-order-1", type: "order-steps", category: "word", prompt: "Order the steps to find the third side with sides 5, 7, included angle 60°.", sequence: ["Write c² = a² + b² - 2ab·cos C", "Substitute: 74 - 2(5)(7)(0.5)", "Simplify: c² = 39, c = √39"], diagnoses: { "Write c² = a² + b² - 2ab·cos C@1": "State the rule first.", "Substitute: 74 - 2(5)(7)(0.5)@0": "Then substitute.", "Simplify: c² = 39, c = √39@0": "Simplify last." }, explanation: "Rule, substitute, simplify.", hints: ["Cosine rule.", "74 - 35.", "√39."] },
      // @q14
      { id: "U33L2-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each situation to its rule.", pairs: [ { source: "Side + its opposite angle", target: "sine rule" }, { source: "Two sides + included angle", target: "cosine rule" }, { source: "Three sides", target: "cosine rule" } ], diagnoses: { "Side + its opposite angle->cosine rule": "That's the sine rule's signal.", "Two sides + included angle->sine rule": "SAS calls for cosine.", "Three sides->sine rule": "SSS calls for cosine." }, explanation: "Sine: side-opposite-angle. Cosine: SAS or SSS.", hints: ["Opposite pair.", "SAS.", "SSS."] },
      // @q15
      { id: "U33L2-graph-1", type: "graph-interact", category: "word", prompt: "Cosine rule with sides 3, 4 and included 90°: c² = 25. Set the slider to c (key: value).", challenge: "Set the slider to 5.", validate: { value: 5 }, tolerance: 0.01, explanation: "c = √25 = 5 — Pythagoras' 3-4-5 at 90°.", hints: ["√25.", "5.", "5."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "pairs a side with the wrong angle in sin rule", diagnosis: "Each side pairs with its OPPOSITE angle.", hint: "Side ↔ opposite angle." },
    { wrongPattern: "uses Pythagoras on non-right triangles", diagnosis: "The cosine rule is Pythagoras with a -2ab·cos C term that only vanishes at 90°.", hint: "Add the cos term." },
    { wrongPattern: "ignores the ambiguous case", diagnosis: "Two sides and a non-included angle can make two triangles.", hint: "Check both." },
  ],
  recallTags: ["sine rule", "cosine rule", "ambiguous case", "any triangle", "SAS", "SSS"],
  discovery: {
    challenges: [
      { instruction: "Drag the triangle until A = 90°. Read the sine-rule ratios.", observe: "At a right angle, the cosine rule collapses to Pythagoras: c² = a² + b² because cos 90° = 0." },
      { instruction: "Morph a triangle into an obtuse one (A > 90°). Watch a/sin A, b/sin B, c/sin C.", observe: "The three ratios stay equal for every shape — the sine rule never breaks." },
    ],
    predict: { prompt: "In a triangle with sides 8, 10 and angles opposite 50° and 70°, which ratio holds?", options: [{ id: "a", text: "8/sin 50° = 10/sin 70°" }, { id: "b", text: "8/10 = 50/70" }, { id: "c", text: "8×sin50° = 10×sin70°" }], reveal: "a/sin A pairs each side with its OPPOSITE angle — the sine rule." },
    sayItYourWay: { prompt: "When do you reach for the cosine rule?", phrasings: [{ id: "a", text: "When given two sides and the angle between them", correct: true, why: "SAS — the cosine rule finds the third side directly." }, { id: "b", text: "When given three angles only", correct: false, why: "Angles alone don't fix a triangle's size." }, { id: "c", text: "Only for right triangles", correct: false, why: "It works for any triangle; right triangles are just the cos 90° special case." }], formalName: "the sine rule a/sin A = b/sin B = c/sin C and the cosine rule c² = a² + b² − 2ab·cos C" },
    stretch: "There's a beautiful link hiding in the unit circle: sin²θ + cos²θ = 1. Next: two identities you already own.", 
  },
};
