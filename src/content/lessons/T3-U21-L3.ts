import type { Lesson } from "../schema";

export const T3U21L3: Lesson = {
  // @meta
  id: "T3-U21-L3",
  tier: 3,
  unit: "Polygons & circles",
  title: "A Family of Shapes",
  prerequisites: ["T3-U20-L4","T3-U21-L2"],
  estimatedMinutes: 12,
  hook: { question: "A square is a rectangle, a rectangle is a parallelogram, a parallelogram is a trapezium — shapes are a family tree, not separate boxes. Learn each property and you can deduce the rest.", type: "puzzle" },
  intuitionBlocks: [{ widget: "geometry-playground", narrative: "Drag vertices of a square and fold it in your mind: a square is a rectangle (right angles) that also has equal sides. Watch which properties survive each deformation." }],

  // @discovery
  formalBlocks: [{ definition: "Quadrilateral hierarchy: trapezium (≥1 pair parallel) ⊃ parallelogram (both pairs parallel) ⊃ rectangle (right angles) / rhombus (equal sides) ⊃ square (both). Triangle deductions: isosceles base angles equal; opposite angles of a parallelogram equal.", examples: ["A square is a rectangle: all four right angles, plus equal sides.", "Isosceles triangle with apex 40°: base angles = (180 − 40)/2 = 70° each."], pitfall: "The hierarchy is one-directional: every square is a rectangle, but NOT every rectangle is a square.", altExplanations: ["GAME: shape crafting — a square inherits rectangle traits (right angles) plus rhombus traits (equal sides); every square IS a rectangle AND a rhombus, but rectangles aren't all squares. The inheritance goes one way down the family tree.", "FOOD: pastry hierarchy — a square is a rhombus with right angles and a rectangle with equal sides. An isosceles triangle's equal base angles make cutting the base fold symmetric: apex 40° → base (180−40)/2 = 70° each."] }],
  gutChecks: [{ prompt: "Is a square a rhombus?", answer: "Yes — equal sides and both opposite pairs parallel." }],
  quiz: {
    pool: [
      // @q01
      { id: "U21L3-mcq-1", type: "mcq", category: "procedural", prompt: "Which must be true for a square but not a general rectangle?", options: [ { id: "a", text: "All four sides equal" }, { id: "b", text: "All angles 90°" }, { id: "c", text: "Both pairs parallel" }, { id: "d", text: "Four sides" } ], correctOptionId: "a", diagnoses: { b: "Rectangles have right angles too.", c: "Rectangles have both pairs parallel.", d: "Both are quadrilaterals." }, explanation: "Right angles and parallels are shared; equal sides are the square's extra property.", hints: ["Square's extra.", "Equal sides.", "a."] },
      // @q02
      { id: "U21L3-mcq-2", type: "mcq", category: "conceptual", prompt: "Is every rectangle a square?", options: [ { id: "a", text: "No — a square needs equal sides too" }, { id: "b", text: "Yes — right angles define the square" }, { id: "c", text: "Only if it's small" }, { id: "d", text: "Never" } ], correctOptionId: "a", diagnoses: { b: "Right angles make a rectangle; equal sides make it a square.", c: "Size is irrelevant.", d: "Some rectangles ARE squares (the equal-sided ones)." }, explanation: "Square ⊂ rectangle, not the other way.", hints: ["Hierarchy.", "One direction.", "No."] },
      // @q03
      { id: "U21L3-mcq-3", type: "mcq", category: "word", prompt: "A rhombus-shaped kite: all sides equal, no right angles. Is it a parallelogram?", options: [ { id: "a", text: "Yes — both pairs of opposite sides are parallel" }, { id: "b", text: "No — it must have right angles" }, { id: "c", text: "Only if opposite angles are equal" }, { id: "d", text: "Never" } ], correctOptionId: "a", diagnoses: { b: "Right angles are NOT required for a parallelogram.", c: "Opposite angles equal follows automatically.", d: "A rhombus IS a parallelogram by parallel definition." }, explanation: "Equal sides imply both pairs parallel → it's a parallelogram.", hints: ["Parallelogram = parallels.", "Rhombus has them.", "Yes."] },
      // @q04
      { id: "U21L3-mcq-4", type: "mcq", category: "procedural", prompt: "An isosceles triangle's apex is 40°. What are the base angles?", options: [ { id: "a", text: "70° each" }, { id: "b", text: "80° each" }, { id: "c", text: "40° each" }, { id: "d", text: "140° each" } ], correctOptionId: "a", diagnoses: { b: "80+80+40 = 200 — too much; base = (180−40)/2.", c: "40° is the apex, not a base.", d: "140° can't fit with another base angle." }, explanation: "(180 − 40) / 2 = 70°.", hints: ["Base angles equal.", "(180−40)/2.", "70°."] },
      // @q05
      { id: "U21L3-mcq-5", type: "mcq", category: "conceptual", prompt: "In a parallelogram, opposite angles are…", options: [ { id: "a", text: "Equal" }, { id: "b", text: "Supplementary (180°)" }, { id: "c", text: "Complementary (90°)" }, { id: "d", text: "Unrelated" } ], correctOptionId: "a", diagnoses: { b: "ADJACENT angles are supplementary in a parallelogram.", c: "90° pairs only in rectangles.", d: "Parallel rules fix the opposite pairs." }, explanation: "Parallel lines make opposite angles equal (alternate/corresponding).", hints: ["Opposite corners.", "Parallel lines.", "Equal."] },
      // @q06
      { id: "U21L3-mcq-6", type: "mcq", category: "word", prompt: "A lozenge window is a rhombus with one angle 120°. Its opposite angle is…", options: [ { id: "a", text: "120°" }, { id: "b", text: "60°" }, { id: "c", text: "180°" }, { id: "d", text: "90°" } ], correctOptionId: "a", diagnoses: { b: "60° is the ADJACENT angle (180 − 120).", c: "180° isn't a single corner.", d: "Right angles only in squares/rectangles." }, explanation: "Opposite angles of a parallelogram are equal: 120°.", hints: ["Opposite equal.", "120°.", "120°."] },
      // @q07
      { id: "U21L3-num-1", type: "numeric-input", category: "procedural", prompt: "Isosceles base angles: apex 80°. Type each base angle.", answer: 50, tolerance: 0, explanation: "(180 − 80)/2 = 50°.", hints: ["(180−80)/2.", "50.", "50°."] },
      // @q08
      { id: "U21L3-num-2", type: "numeric-input", category: "procedural", prompt: "A parallelogram has one angle 60°. Type the opposite angle.", answer: 60, tolerance: 0, explanation: "Opposite angles equal.", hints: ["Opposite equal.", "60.", "60°."] },
      // @q09
      { id: "U21L3-num-3", type: "numeric-input", category: "conceptual", prompt: "Same parallelogram: type an ADJACENT angle.", answer: 120, tolerance: 0, explanation: "Adjacent = 180 − 60 = 120°.", hints: ["180 − 60.", "120.", "120°."] },
      // @q10
      { id: "U21L3-frac-1", type: "fraction-input", category: "conceptual", prompt: "In a square, one angle as a fraction of 180°.", numerator: 1, denominator: 2, acceptEquivalent: true, explanation: "90° = 1/2 of 180°.", hints: ["90 ÷ 180.", "1/2.", "1/2."] },
      // @q11
      { id: "U21L3-tf-1", type: "true-false-justify", category: "conceptual", prompt: "Every square is a rhombus.", isTrue: true, explanation: "Equal sides + parallel opposites — exactly a rhombus.", hints: ["Equal sides.", "Parallels.", "True."] },
      // @q12
      { id: "U21L3-tf-2", type: "true-false-justify", category: "conceptual", prompt: "Every rhombus is a square.", isTrue: false, explanation: "A rhombus needs equal sides only — right angles not guaranteed.", hints: ["Not always 90°.", "Rhombus = equal sides.", "False."] },
      // @q13
      { id: "U21L3-order-1", type: "order-steps", category: "word", prompt: "Order the steps to classify a shape with equal sides and right angles.", sequence: ["Check both pairs of opposite sides are parallel", "Check all angles are 90°", "Check all sides are equal", "Conclude: square"], diagnoses: { "Check both pairs of opposite sides are parallel@1": "Parallel check first.", "Check all angles are 90°@0": "Then angles.", "Conclude: square@0": "Conclude last." }, explanation: "Parallel, right angles, equal sides → square.", hints: ["Parallels.", "90°.", "Equal sides → square."] },
      // @q14
      { id: "U21L3-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each shape to its defining extra property.", pairs: [ { source: "Rectangle", target: "Right angles" }, { source: "Rhombus", target: "Equal sides" }, { source: "Square", target: "Both right angles and equal sides" } ], diagnoses: { "Rectangle->Equal sides": "Rectangles may have unequal sides.", "Rhombus->Right angles": "A rhombus needs equal sides, not 90°.", "Square->Right angles": "Squares have BOTH properties." }, explanation: "Each subclass adds its own property.", hints: ["Rectangle = 90°.", "Rhombus = equal sides.", "Square = both."] },
      // @q15
      { id: "U21L3-graph-1", type: "graph-interact", category: "word", prompt: "A rhombus has one angle 100°. Set the slider to its opposite angle (key: value).", challenge: "Set the slider to 100.", validate: { value: 100 }, tolerance: 0.01, explanation: "Opposite angles of a parallelogram are equal.", hints: ["Opposite equal.", "100.", "100°."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "reverses the hierarchy", diagnosis: "Every square IS a rectangle, but not every rectangle is a square.", hint: "Follow the tree: square ⊂ rectangle." },
    { wrongPattern: "forgets isosceles base angles", diagnosis: "Two equal sides → two equal base angles; subtract the apex from 180 and halve.", hint: "(180 − apex)/2." },
    { wrongPattern: "confuses opposite/adjacent in parallelograms", diagnosis: "Opposite equal; ADJACENT supplementary (180°).", hint: "Adjacent corners share a side." },
  ],
  recallTags: ["quadrilaterals", "hierarchy", "isosceles", "properties"],
  discovery: {
    challenges: [
      { instruction: "Deform a square and note which properties survive.", observe: "Parallel sides persist; right angles drop unless you keep them." },
      { instruction: "Measure an isosceles triangle's base angles.", observe: "They're always equal — the equal sides lock them." },
    ],
    predict: { prompt: "Is every parallelogram a rectangle?", options: [{ id: "a", text: "No" }, { id: "b", text: "Yes" }, { id: "c", text: "Sometimes — only when it has right angles" }], reveal: "No — a parallelogram only needs parallel opposites; right angles are the rectangle's extra property." },
    sayItYourWay: { prompt: "What does 'square ⊂ rectangle' mean?", phrasings: [{ id: "a", text: "Every square is a rectangle, but not the reverse", correct: true, why: "Square = rectangle + equal sides." }, { id: "b", text: "Every rectangle is a square", correct: false, why: "That's the opposite direction." }, { id: "c", text: "They're unrelated shapes", correct: false, why: "Squares share all rectangle properties." }], formalName: "the quadrilateral hierarchy (subset relationships)" },
    stretch: "Circles hold the best-kept secrets of all: drag a point on the circumference and two fixed points on it, and the angle at the circumference stays frozen. That's U21-L4 with the CircleTheoremExplorer.",
  },
};
