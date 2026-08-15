import type { Lesson } from "../schema";

export const T2U18L1: Lesson = {
  // @meta
  id: "T2-U18-L1",
  tier: 2,
  unit: "Coordinates & straight lines",
  title: "The Grid That Changed Math",
  prerequisites: ["T2-U15-L1","T2-U17-L2","T2-U17-L3"],
  estimatedMinutes: 12,
  hook: { question: "'Meet me at (3, 4).' With one pair of numbers, a whole city can point to one exact spot. Descartes' grid gave every point an address — and every equation a picture.", type: "real-world" },
  intuitionBlocks: [{ widget: "graph-plotter", narrative: "Drag a point around the grid and watch its (x, y) address update. Move right → x grows; move up → y grows. Two numbers, one pin — the birth of coordinate math." }],

  // @discovery
  formalBlocks: [{ definition: "The Cartesian plane has a horizontal x-axis and vertical y-axis crossing at the origin (0, 0). Every point has coordinates (x, y): x tells how far right (negative = left), y tells how far up (negative = down).", examples: ["(3, 4): go 3 right, 4 up from the origin.", "(−2, 1): go 2 left, 1 up."], pitfall: "Order matters: (3, 4) and (4, 3) are different points. Always read x first (horizontal), then y (vertical) — 'along the corridor, up the stairs'.", altExplanations: ["GAME: the Cartesian plane is a two-coordinate radar — (3, 4) means 3 steps east then 4 steps north of base (0, 0). Negative x means west, negative y means south.", "TRAVEL: a city grid — every address is (avenue, street); (3, 4) is 3 avenues right and 4 streets up from the origin corner. Order matters: (3, 4) is a different corner than (4, 3)."] }],
  gutChecks: [{ prompt: "Which quadrant holds the point (−2, 3)?", answer: "Top-left (x negative, y positive)." }],
  quiz: {
    pool: [
      // @q01
      { id: "U18L1-mcq-1", type: "mcq", category: "procedural", prompt: "How do you reach (3, 4) from the origin?", options: [ { id: "a", text: "3 right, 4 up" }, { id: "b", text: "4 right, 3 up" }, { id: "c", text: "3 left, 4 down" }, { id: "d", text: "3 up, 4 right" } ], correctOptionId: "a", diagnoses: { b: "x first, then y: (3, 4) is 3 right then 4 up.", c: "Positives go right and up.", d: "x is horizontal, y vertical — not swapped." }, explanation: "(x, y): x horizontal first, then y vertical.", hints: ["x first.", "Right and up.", "3 right, 4 up."] },
      // @q02
      { id: "U18L1-mcq-2", type: "mcq", category: "conceptual", prompt: "Why would (3, 4) and (4, 3) be different points?", options: [ { id: "a", text: "The order of x and y matters — they're different addresses" }, { id: "b", text: "They're actually the same point" }, { id: "c", text: "Only negative coordinates differ" }, { id: "d", text: "The grid moves" } ], correctOptionId: "a", diagnoses: { b: "3 right / 4 up ≠ 4 right / 3 up.", c: "Order matters regardless of sign.", d: "Coordinates are fixed addresses on the grid." }, explanation: "(3, 4) and (4, 3) land in different spots.", hints: ["Swap the numbers.", "Different spot.", "Order matters."] },
      // @q03
      { id: "U18L1-mcq-3", type: "mcq", category: "word", prompt: "A map says the treasure is at (−2, 3). Go…", options: [ { id: "a", text: "2 left, 3 up" }, { id: "b", text: "2 right, 3 up" }, { id: "c", text: "3 left, 2 up" }, { id: "d", text: "2 left, 3 down" } ], correctOptionId: "a", diagnoses: { b: "Negative x means LEFT.", c: "First coordinate is x: −2 → 2 left.", d: "Positive y means UP, not down." }, explanation: "x = −2 → left; y = 3 → up.", hints: ["x negative.", "Left.", "2 left, 3 up."] },
      // @q04
      { id: "U18L1-mcq-4", type: "mcq", category: "procedural", prompt: "What is the origin's coordinate?", options: [ { id: "a", text: "(0, 0)" }, { id: "b", text: "(1, 1)" }, { id: "c", text: "(0, 1)" }, { id: "d", text: "(1, 0)" } ], correctOptionId: "a", diagnoses: { b: "Origin is zero on both axes.", c: "That's one step up.", d: "That's one step right." }, explanation: "The axes cross at (0, 0) — neither left/right nor up/down.", hints: ["Both zero.", "Crossing point.", "(0, 0)."] },
      // @q05
      { id: "U18L1-mcq-5", type: "mcq", category: "conceptual", prompt: "What does the x-coordinate control?", options: [ { id: "a", text: "How far left or right from the y-axis" }, { id: "b", text: "How far up or down" }, { id: "c", text: "The size of the point" }, { id: "d", text: "The color of the point" } ], correctOptionId: "a", diagnoses: { b: "Up/down is y.", c: "Points are zero-size locations.", d: "Color is styling, not math." }, explanation: "x is horizontal position; y is vertical.", hints: ["Horizontal.", "Left/right.", "x."] },
      // @q06
      { id: "U18L1-mcq-6", type: "mcq", category: "word", prompt: "Chess: king at (5, 1) moves one right. New coordinate?", options: [ { id: "a", text: "(6, 1)" }, { id: "b", text: "(5, 2)" }, { id: "c", text: "(4, 1)" }, { id: "d", text: "(6, 2)" } ], correctOptionId: "a", diagnoses: { b: "One right changes x, not y.", c: "Right increases x: 5 → 6.", d: "Only one step — can't change both." }, explanation: "Right adds 1 to x: (5 + 1, 1) = (6, 1).", hints: ["Right = x change.", "5 + 1.", "(6, 1)."] },
      // @q07
      { id: "U18L1-num-1", type: "numeric-input", category: "procedural", prompt: "Type the x-coordinate of (−2, 5).", answer: -2, tolerance: 0, explanation: "First number in the pair is x: −2.", hints: ["First is x.", "−2.", "−2."] },
      // @q08
      { id: "U18L1-num-2", type: "numeric-input", category: "procedural", prompt: "Type the y-coordinate of (3, −4).", answer: -4, tolerance: 0, explanation: "Second number is y: −4.", hints: ["Second is y.", "−4.", "−4."] },
      // @q09
      { id: "U18L1-num-3", type: "numeric-input", category: "conceptual", prompt: "A point sits 5 left and 2 down from the origin. Type its x-coordinate.", answer: -5, tolerance: 0, explanation: "Left = negative x: x = −5.", hints: ["Left is negative.", "−5.", "−5."] },
      // @q10
      { id: "U18L1-frac-1", type: "fraction-input", category: "conceptual", prompt: "A point sits half a unit right and 1 up. Write its x-coordinate as a fraction.", numerator: 1, denominator: 2, acceptEquivalent: true, explanation: "Half right: x = 1/2.", hints: ["Half right.", "x = 1/2.", "1/2."] },
      // @q11
      { id: "U18L1-tf-1", type: "true-false-justify", category: "conceptual", prompt: "(4, 2) is reached by moving 4 right and 2 up from the origin.", isTrue: true, explanation: "x = 4 → 4 right; y = 2 → 2 up.", hints: ["x first.", "4 right, 2 up.", "True."] },
      // @q12
      { id: "U18L1-tf-2", type: "true-false-justify", category: "conceptual", prompt: "(3, 7) and (7, 3) label the same point.", isTrue: false, explanation: "Order swaps the location — different addresses.", hints: ["x vs y.", "Different spot.", "False."] },
      // @q13
      { id: "U18L1-order-1", type: "order-steps", category: "word", prompt: "Order the steps to plot (2, −3).", sequence: ["Start at the origin (0, 0)", "Move 2 units right (x = 2)", "Move 3 units down (y = −3)", "Mark the point (2, −3)"], diagnoses: { "Start at the origin (0, 0)@1": "Start at origin first.", "Move 2 units right (x = 2)@0": "Do x first.", "Move 3 units down (y = −3)@0": "Then y — down for negative." }, explanation: "Origin → x step → y step → mark.", hints: ["Origin first.", "x then y.", "Down for negative y."] },
      // @q14
      { id: "U18L1-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each point to its direction from the origin.", pairs: [ { source: "(3, −2)", target: "Right 3, down 2" }, { source: "(−4, 1)", target: "Left 4, up 1" }, { source: "(0, 5)", target: "Straight up 5" } ], diagnoses: { "(3, −2)->Left 4, up 1": "x = 3 → right, not left.", "(−4, 1)->Right 3, down 2": "x = −4 → left.", "(0, 5)->Right 3, down 2": "x = 0 → no sideways step." }, explanation: "Read x (horizontal, negative left) then y (vertical, negative down).", hints: ["x first.", "Negative left/down.", "Match signs."] },
      // @q15
      { id: "U18L1-graph-1", type: "graph-interact", category: "word", prompt: "Plot the point (3, 2) on the grid. Set the slider to its x-coordinate first (key: value).", challenge: "Set the slider to 3.", validate: { value: 3 }, tolerance: 0.01, explanation: "The x-coordinate of (3, 2) is 3.", hints: ["x first.", "3.", "3."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "swaps x and y", diagnosis: "(3, 4) goes 3 right, not 4 right — x leads.", hint: "Read horizontal first: 'along the corridor, up the stairs'." },
    { wrongPattern: "mixes up negative directions", diagnosis: "Negative x → left; negative y → down.", hint: "Left and down are the negative moves." },
    { wrongPattern: "forgets the origin", diagnosis: "All plotting starts at (0, 0) — that's the zero point of both axes.", hint: "Start every journey at the origin." },
  ],
  recallTags: ["coordinates", "cartesian-plane", "axes"],
  discovery: {
    challenges: [
      { instruction: "Drag a point to (3, 2) and read the live coordinates.", observe: "Right 3, up 2 — the address updates as you slide." },
      { instruction: "Drag the point into the bottom-left region.", observe: "Both coordinates go negative — left and down." },
    ],
    predict: { prompt: "From the origin, (negative, positive) lands…", options: [{ id: "a", text: "Top-left" }, { id: "b", text: "Bottom-right" }, { id: "c", text: "Top-right" }], reveal: "Top-left — negative x goes left, positive y goes up. Signs pin the quadrant." },
    sayItYourWay: { prompt: "What do the two numbers in (x, y) mean?", phrasings: [{ id: "a", text: "The horizontal and vertical distances from the origin", correct: true, why: "x sideways, y up/down — one ordered address." }, { id: "b", text: "The width and height of a rectangle", correct: false, why: "Coordinates place a point, not a shape's size." }, { id: "c", text: "Two independent answers to two questions", correct: false, why: "They're one location — an ordered pair." }], formalName: "coordinates on the Cartesian plane" },
    stretch: "A point is one address — a line is the whole street. Steepness turns that street into a number: the gradient of a line is coming in U18-L2.",
  },
};
