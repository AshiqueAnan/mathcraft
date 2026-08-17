import type { Lesson } from "../schema";

export const T3U22L3: Lesson = {
  // @meta
  id: "T3-U22-L3",
  tier: 3,
  unit: "Construction & symmetry",
  title: "Mirror and Spin",
  prerequisites: ["T3-U21-L4","T3-U22-L1","T3-U22-L2"],
  estimatedMinutes: 12,
  hook: { question: "Fold a butterfly and the wings match; spin a snowflake and it lands on itself. Symmetry is when a transform — reflection or rotation — leaves the shape looking identical. Count the lines and turns that copy the shape onto itself.", type: "real-world" },
  intuitionBlocks: [{ widget: "geometry-playground", narrative: "Fold a shape along a line: if the two halves coincide, that line is an axis of symmetry. Then rotate the shape about its centre: a half-turn snap means order-2 rotational symmetry. Drag and fold to find every axis and every turn." }],

  // @discovery
  formalBlocks: [{ definition: "A shape has line symmetry if a reflection maps it onto itself — the fold line is an axis of symmetry. It has rotational symmetry of order n if a turn of 360°/n maps it onto itself. An isosceles triangle: 1 axis. A square: 4 axes and order-4 rotation. The rank of symmetry counts how many copies the fold/turn makes.", examples: ["Isosceles triangle: 1 vertical axis; no rotational symmetry (order 1).", "Square: 4 axes; rotational order 4 (90° turns)."], pitfall: "Line symmetry folds across the axis — rotational symmetry SPINS about the centre. A rectangle has 2 axes but only order-2 rotation; don't add diagonal axes where the halves don't match.", altExplanations: ["GAME: line symmetry is a mirror-map folding the shape onto itself — one foldable axis for an isosceles triangle; a square has 4 mirror axes AND a 90° spin that returns it (order-4 rotation). Fold versus spin are different supers.", "FOOD: cutting patterns — a rectangle folds along its two midlines (2 axes) but spins back onto itself only at 180° (order 2). Don't add diagonal axes where the halves simply don't match."] }],
  gutChecks: [{ prompt: "How many lines of symmetry does a rectangle have, and what is its rotational order?", answer: "2 axes (midline horizontal + vertical); rotational order 2 (half-turn)." }],
  quiz: {
    pool: [
      // @q01
      { id: "U22L3-mcq-1", type: "mcq", category: "procedural", prompt: "An isosceles triangle has how many lines of symmetry?", options: [ { id: "a", text: "1" }, { id: "b", text: "2" }, { id: "c", text: "3" }, { id: "d", text: "0" } ], correctOptionId: "a", diagnoses: { b: "That's the rectangle's count.", c: "3 axes belong to an EQUILATERAL triangle.", d: "The fold through the apex matches the halves." }, explanation: "The axis through the apex and base midpoint matches the two sides.", hints: ["Fold through apex.", "One axis.", "1."] },
      // @q02
      { id: "U22L3-mcq-2", type: "mcq", category: "conceptual", prompt: "Rotational symmetry of order 4 means the shape matches itself every…", options: [ { id: "a", text: "180° turn" }, { id: "b", text: "90° turn" }, { id: "c", text: "45° turn" }, { id: "d", text: "360° turn" } ], correctOptionId: "b", diagnoses: { a: "180° is order 2.", c: "45° gives order 8.", d: "A full turn matches everything — trivial." }, explanation: "360°/4 = 90° turns bring it onto itself.", hints: ["360 ÷ 4.", "90°.", "90°."] },
      // @q03
      { id: "U22L3-mcq-3", type: "mcq", category: "word", prompt: "A road sign is a square. How many mirror axes does it have?", options: [ { id: "a", text: "1" }, { id: "b", text: "2" }, { id: "c", text: "4" }, { id: "d", text: "8" } ], correctOptionId: "c", diagnoses: { b: "2 is for a rectangle, the square adds the diagonals.", a: "1 belongs to isosceles.", d: "8 would be a regular octagon's axes." }, explanation: "Squares match across both midlines AND both diagonals → 4 axes.", hints: ["Square.", "Midlines + diagonals.", "4."] },
      // @q04
      { id: "U22L3-mcq-4", type: "mcq", category: "procedural", prompt: "Regular hexagon rotational order is…", options: [ { id: "a", text: "12" }, { id: "b", text: "3" }, { id: "c", text: "2" }, { id: "d", text: "6" } ], correctOptionId: "d", diagnoses: { b: "Order 3 would need 120° turns — a triangle shape.", c: "Order 2 is a half-turn only.", a: "12 would be a 12-gon." }, explanation: "A hexagon matches every 60° turn: order 6.", hints: ["360 ÷ 6.", "60° turns.", "Order 6."] },
      // @q05
      { id: "U22L3-mcq-5", type: "mcq", category: "conceptual", prompt: "Why does a rectangle NOT have diagonal axes of symmetry?", options: [ { id: "a", text: "Folding across a diagonal leaves unmatched corners" }, { id: "b", text: "Diagonals are shorter" }, { id: "c", text: "Rectangles never fold" }, { id: "d", text: "It's a rule only for squares" } ], correctOptionId: "a", diagnoses: { b: "Length isn't the issue — matching is.", c: "Rectangles fold fine across midlines.", d: "The reason is the unmatched corners." }, explanation: "Fold a rectangle corner-to-corner: the other corners land off each other.", hints: ["Fold the diagonal.", "Corners mismatch.", "No diagonal axes."] },
      // @q06
      { id: "U22L3-mcq-6", type: "mcq", category: "word", prompt: "A clock face's 12 marks: what's its rotational order?", options: [ { id: "a", text: "6" }, { id: "b", text: "12" }, { id: "c", text: "24" }, { id: "d", text: "4" } ], correctOptionId: "b", diagnoses: { a: "6 would need 60° copies — not the hour marks.", c: "24 marks would be half-hour ticks.", d: "4 belongs to a four-fold object." }, explanation: "Each 30° turn brings the 12-hour face onto itself: order 12.", hints: ["360 ÷ 12.", "30° turns.", "12."] },
      // @q07
      { id: "U22L3-num-1", type: "numeric-input", category: "procedural", prompt: "A square's rotational order.", answer: 4, tolerance: 0, explanation: "90° turns fit four times in 360°.", hints: ["360 ÷ 90.", "4.", "4."] },
      // @q08
      { id: "U22L3-num-2", type: "numeric-input", category: "procedural", prompt: "Number of symmetry axes of a regular pentagon.", answer: 5, tolerance: 0, explanation: "Each vertex-to-opposite-midpoint fold is an axis: 5.", hints: ["One per vertex.", "5.", "5."] },
      // @q09
      { id: "U22L3-num-3", type: "numeric-input", category: "conceptual", prompt: "A capital 'H' has how many mirror axes?", answer: 2, tolerance: 0, explanation: "Reflect across the vertical middle and the horizontal middle both match.", hints: ["Vertical fold.", "Horizontal fold.", "2."] },
      // @q10
      { id: "U22L3-frac-1", type: "fraction-input", category: "conceptual", prompt: "A regular hexagon matches at 60°. Express 60 as a fraction of 360°.", numerator: 1, denominator: 6, acceptEquivalent: true, explanation: "60/360 = 1/6.", hints: ["60 ÷ 360.", "1/6.", "1/6."] },
      // @q11
      { id: "U22L3-tf-1", type: "true-false-justify", category: "conceptual", prompt: "Every square has rotational symmetry of order 4.", isTrue: true, explanation: "Four 90° rotations map it onto itself.", hints: ["90° snaps.", "Order 4.", "True."] },
      // @q12
      { id: "U22L3-tf-2", type: "true-false-justify", category: "conceptual", prompt: "A rectangle has 4 lines of symmetry.", isTrue: false, explanation: "Only 2 (midlines); its diagonals don't fold-match.", hints: ["2 midlines.", "No diagonals.", "False."] },
      // @q13
      { id: "U22L3-order-1", type: "order-steps", category: "word", prompt: "Order the steps to count a square's rotational order.", sequence: ["Find the turn that matches: 90°", "How many in 360°? 360 ÷ 90 = 4", "State order 4", "Check: 4 × 90 = 360 ✓"], diagnoses: { "Find the turn that matches: 90°@1": "Find the matching turn first.", "How many in 360°? 360 ÷ 90 = 4@0": "Then divide 360.", "Check: 4 × 90 = 360 ✓@0": "Check last." }, explanation: "Matching turn, divide 360, state, verify.", hints: ["90° turn.", "360 ÷ 90.", "4."] },
      // @q14
      { id: "U22L3-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each shape to its symmetric profile.", pairs: [ { source: "Isosceles triangle", target: "1 axis, order 1" }, { source: "Square", target: "4 axes, order 4" }, { source: "Rectangle", target: "2 axes, order 2" } ], diagnoses: { "Isosceles triangle->4 axes, order 4": "Isosceles has one fold axis only.", "Square->2 axes, order 2": "Square has 4 axes and order 4.", "Rectangle->1 axis, order 1": "Rectangle: 2 axes, order 2." }, explanation: "Each shape's folds and turns settle its counts.", hints: ["Isosceles = 1.", "Square = 4/4.", "Rectangle = 2/2."] },
      // @q15
      { id: "U22L3-graph-1", type: "graph-interact", category: "word", prompt: "A regular octagon matches every 45°. Set the slider to its rotational order (key: value).", challenge: "Set the slider to 8.", validate: { value: 8 }, tolerance: 0.01, explanation: "360 ÷ 45 = 8.", hints: ["360 ÷ 45.", "8.", "Order 8."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "adds diagonal axes to rectangles", diagnosis: "Diagonal folds on a rectangle leave corners unmatched — only 2 midlines work.", hint: "Actually fold it to check." },
    { wrongPattern: "confuses order with number of axes", diagnosis: "Order counts 360°/matching-turn; axes count fold lines.", hint: "Turns vs folds — different counts." },
    { wrongPattern: "says every triangle is symmetric", diagnosis: "Only isosceles/equilateral have axes; a scalene triangle has none.", hint: "Three unequal sides → no fold." },
  ],
  recallTags: ["symmetry", "reflection", "rotation", "order"],
  discovery: {
    challenges: [
      { instruction: "Fold a square along each midline and diagonal.", observe: "All four folds match — four axes." },
      { instruction: "Rotate the square 90° in your mind and compare.", observe: "It lands on itself — rotational order 4." },
    ],
    predict: { prompt: "A regular hexagon — its rotational order is…", options: [{ id: "a", text: "6" }, { id: "b", text: "3" }, { id: "c", text: "2" }], reveal: "6 — it matches every 60° turn. The hexagon's sixfold symmetry is why honeycombs tile so perfectly." },
    sayItYourWay: { prompt: "What is 'rotational symmetry'?", phrasings: [{ id: "a", text: "The shape matches itself before a full turn", correct: true, why: "A partial rotation lands it on top of itself." }, { id: "b", text: "The shape spins without changing size", correct: false, why: "Spinning isn't symmetry unless it matches itself early." }, { id: "c", text: "The number of foldable lines", correct: false, why: "That's line symmetry — a different idea." }], formalName: "rotational symmetry (order n) and line symmetry" },
    stretch: "Flip, slide, turn, or make bigger — transformations are the theme. Reflecting a shape, then measuring the mirror image's distance, is exactly how coordinates calculate it: U27's distance formula.",
  },
};