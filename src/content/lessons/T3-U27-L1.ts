import type { Lesson } from "../schema";

export const T3U27L1: Lesson = {
  // @meta
  id: "T3-U27-L1",
  tier: 3,
  unit: "Transformations & coordinates",
  title: "Slide, Flip, Turn, Grow",
  prerequisites: ["T2-U18-L1","T3-U22-L3","T3-U26-L4"],
  estimatedMinutes: 12,
  hook: { question: "Move a shape and you have four options: slide it (translation), flip it (reflection), turn it (rotation), or make it bigger (enlargement). A full description needs precise details — how far and which way you slide, which line you flip across, which point and angle you turn, and what factor you grow by. No detail, no unique move.", type: "real-world" },
  intuitionBlocks: [{ widget: "geometry-playground", narrative: "Drag a triangle across the grid: its coordinates shift by the slide vector. Flip it over an axis and watch the mirror distances. Rotate about a point by an angle, then enlarge from a centre. Each move needs its own full description to land the shape in the right place." }],

  // @discovery
  formalBlocks: [{ definition: "The four transformations: TRANSLATION slides every point by the same vector (x + a, y + b) — shape unchanged, just moved. REFLECTION flips across a mirror line — like a mirror image, orientation reversed. ROTATION turns about a fixed centre by an angle (clockwise/anticlockwise). ENLARGEMENT scales distances from a centre by a scale factor k — sizes change, angles don't.", examples: ["Translate by (3, 2): the point (1, 1) moves to (4, 3).", "Reflect (2, 3) across the y-axis → (−2, 3)."], pitfall: "A 'turn' is meaningless without its centre, angle, and direction. Saying 'rotate the triangle' doesn't locate it — you must say rotate 90° clockwise about point P to pin the image down.", altExplanations: ["GAME: four character moves — translation slides every sprite by the same vector (like a dash move), reflection mirrors across a line (like a puddle flip), rotation spins about a fixed centre by an angle, enlargement scales distances from a centre. A rotation without centre+angle+direction is an unplayable move description.", "TRAVEL: a map stamp — translation shifts the stamp whole (same size, new spot), reflection stamps it mirrored, rotation turns it about a pin, enlargement rescales it from an anchor point. Name ALL the details or the stamp lands somewhere else."] }],
  gutChecks: [{ prompt: "What four details can pin down a rotation completely?", answer: "The centre point, the angle, and the direction (clockwise/anticlockwise) — three details plus the shapes themselves." }],
  quiz: {
    pool: [
      // @q01
      { id: "U27L1-mcq-1", type: "mcq", category: "procedural", prompt: "Translate (2, 5) by vector (3, −1). New point = …", options: [ { id: "a", text: "(5, 4)" }, { id: "b", text: "(5, 6)" }, { id: "c", text: "(−1, 6)" }, { id: "d", text: "(6, 4)" } ], correctOptionId: "a", diagnoses: { b: "(2+3, 5+1) adds wrongly on y — the vector's y is −1.", c: "That subtracts the vector.", d: "(6, 4) scrambles the coordinates." }, explanation: "x: 2+3 = 5, y: 5−1 = 4 → (5, 4).", hints: ["Add x, add y.", "5, 4.", "(5, 4)."] },
      // @q02
      { id: "U27L1-mcq-2", type: "mcq", category: "conceptual", prompt: "A reflection across the y-axis sends (2, 3) to…", options: [ { id: "a", text: "(2, −3)" }, { id: "b", text: "(−2, 3)" }, { id: "c", text: "(3, 2)" }, { id: "d", text: "(−2, −3)" } ], correctOptionId: "b", diagnoses: { a: "(2, −3) flips across the x-axis.", c: "(3, 2) swaps coordinates.", d: "(−2, −3) flips across BOTH axes." }, explanation: "The y-axis flips x's sign: (2, 3) → (−2, 3).", hints: ["x changes sign.", "(−2, 3).", "(−2, 3)."] },
      // @q03
      { id: "U27L1-mcq-3", type: "mcq", category: "word", prompt: "Describing a rotation needs…", options: [ { id: "a", text: "only the centre" }, { id: "b", text: "only the angle" }, { id: "c", text: "centre, angle, and direction" }, { id: "d", text: "the mirror line" } ], correctOptionId: "c", diagnoses: { b: "The angle alone doesn't say where to turn about.", a: "The centre alone doesn't say how far to turn.", d: "A mirror line belongs to reflection." }, explanation: "Rotate 90° clockwise ABOUT P — three details pin the image.", hints: ["Centre point.", "Angle + direction.", "All three."] },
      // @q04
      { id: "U27L1-mcq-4", type: "mcq", category: "procedural", prompt: "Enlargement with scale factor 2 from the origin sends (3, 4) to…", options: [ { id: "a", text: "(1, 1)" }, { id: "b", text: "(1.5, 2)" }, { id: "c", text: "(5, 6)" }, { id: "d", text: "(6, 8)" } ], correctOptionId: "d", diagnoses: { b: "That's scale factor ½.", c: "(5, 6) adds 2 to each coordinate.", a: "(1, 1) subtracts 2 from each." }, explanation: "Multiply each coordinate by k = 2: (6, 8).", hints: ["× 2 each.", "(6, 8).", "(6, 8)."] },
      // @q05
      { id: "U27L1-mcq-5", type: "mcq", category: "conceptual", prompt: "A translation preserves…", options: [ { id: "a", text: "size, shape, and orientation" }, { id: "b", text: "size but not shape" }, { id: "c", text: "nothing" }, { id: "d", text: "orientation but not size" } ], correctOptionId: "a", diagnoses: { b: "Translation slides — everything stays identical.", c: "It's a rigid move, nothing changes.", d: "Both size and orientation are preserved." }, explanation: "Sliding doesn't stretch, flip, or rotate — a perfect copy just relocated.", hints: ["Just moved.", "Identical copy.", "All preserved."] },
      // @q06
      { id: "U27L1-mcq-6", type: "mcq", category: "word", prompt: "A photocopier at 150% is which transformation?", options: [ { id: "a", text: "translation" }, { id: "b", text: "enlargement" }, { id: "c", text: "reflection" }, { id: "d", text: "rotation" } ], correctOptionId: "b", diagnoses: { a: "Translation moves without resizing.", c: "Reflection flips like a mirror.", d: "Rotation turns in place." }, explanation: "Scaling by 1.5 from the copier's centre is an enlargement.", hints: ["150% = ×1.5.", "Enlargement.", "Enlargement."] },
      // @q07
      { id: "U27L1-num-1", type: "numeric-input", category: "procedural", prompt: "Reflect (4, 7) across the y-axis. New x-coordinate = …", answer: -4, tolerance: 0, explanation: "The y-axis flips x's sign: (4, 7) → (−4, 7).", hints: ["Sign flips.", "−4.", "−4."] },
      // @q08
      { id: "U27L1-num-2", type: "numeric-input", category: "procedural", prompt: "Translate (1, 2) by vector (−3, 5). New y-coordinate = …", answer: 7, tolerance: 0, explanation: "y: 2 + 5 = 7.", hints: ["2 + 5.", "7.", "7."] },
      // @q09
      { id: "U27L1-num-3", type: "numeric-input", category: "conceptual", prompt: "Rotate (0, 0) by 90° clockwise about the origin. New coordinates? (both are 0)", answer: 0, tolerance: 0, explanation: "The origin is the centre — it stays put under any rotation.", hints: ["Centre point.", "Stays fixed.", "0."] },
      // @q10
      { id: "U27L1-frac-1", type: "fraction-input", category: "conceptual", prompt: "A point 4 units from the enlargement centre, scale factor ½. How far from the centre is the image?", numerator: 2, denominator: 1, acceptEquivalent: true, explanation: "4 × ½ = 2 units.", hints: ["4 × ½.", "2.", "2/1."] },
      // @q11
      { id: "U27L1-tf-1", type: "true-false-justify", category: "conceptual", prompt: "A reflection reverses orientation like a mirror.", isTrue: true, explanation: "The image is a mirror copy — clockwise becomes anticlockwise.", hints: ["Mirror flip.", "Orientation reverses.", "True."] },
      // @q12
      { id: "U27L1-tf-2", type: "true-false-justify", category: "conceptual", prompt: "An enlargement always makes a shape bigger.", isTrue: false, explanation: "Scale factor less than 1 (like ½) shrinks it — enlargement just means scaling from a centre.", hints: ["k < 1 shrinks.", "Scale ≠ bigger always.", "False."] },
      // @q13
      { id: "U27L1-order-1", type: "order-steps", category: "word", prompt: "Order the steps to fully describe a rotation.", sequence: ["Name the centre point", "Give the angle", "State direction (clockwise/anti)"], diagnoses: { "Name the centre point@1": "Centre first.", "Give the angle@0": "Then the angle.", "State direction (clockwise/anti)@0": "Direction last." }, explanation: "Centre, angle, direction complete the description.", hints: ["Centre.", "Angle.", "Direction."] },
      // @q14
      { id: "U27L1-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each transformation to its key detail.", pairs: [ { source: "Translation", target: "vector" }, { source: "Reflection", target: "mirror line" }, { source: "Rotation", target: "centre + angle" } ], diagnoses: { "Translation->mirror line": "Translation uses a vector.", "Reflection->centre + angle": "Reflection uses a mirror line.", "Rotation->vector": "Rotation needs a centre and angle." }, explanation: "Each move is pinned by its own detail set.", hints: ["Slide = vector.", "Flip = line.", "Turn = centre + angle."] },
      // @q15
      { id: "U27L1-graph-1", type: "graph-interact", category: "word", prompt: "Reflect (3, 4) across the y-axis. Set the slider to the NEW X-coordinate (key: value).", challenge: "Set the slider to -3.", validate: { value: -3 }, tolerance: 0.01, explanation: "y-axis reflection flips x: (3, 4) → (−3, 4).", hints: ["x flips sign.", "−3.", "−3."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "omits rotation direction", diagnosis: "90° clockwise ≠ 90° anticlockwise — always state direction.", hint: "Say CW or ACW." },
    { wrongPattern: "thinks reflection preserves orientation", diagnosis: "A mirror image swaps clockwise and anticlockwise.", hint: "Mirrors reverse." },
    { wrongPattern: "confuses reflection axes", diagnosis: "y-axis flips x; x-axis flips y — swap them and the image lands elsewhere.", hint: "Which coordinate changes sign?" },
  ],
  recallTags: ["translation", "reflection", "rotation", "enlargement", "vector"],
  discovery: {
    challenges: [
      { instruction: "Translate a triangle by (3, 1) and record each vertex's shift.", observe: "Every point moves exactly the same vector — the whole shape slides rigidly." },
      { instruction: "Reflect it across the y-axis and compare orientations.", observe: "Left-right is swapped; the shape reads like a mirror copy." },
    ],
    predict: { prompt: "Enlarging a square by scale factor 2 makes its AREA…", options: [{ id: "a", text: "4× as large" }, { id: "b", text: "2× as large" }, { id: "c", text: "the same" }], reveal: "4× — length scales by 2 but area scales by 2² = 4. That area-scaling link is the heart of the next lesson." },
    sayItYourWay: { prompt: "What is a transformation?", phrasings: [{ id: "a", text: "A rule that moves a shape to a new position while following clear details", correct: true, why: "Every move is described precisely." }, { id: "b", text: "Only turning shapes around", correct: false, why: "There are four types, not one." }, { id: "c", text: "Deleting a shape", correct: false, why: "Transformations move, not remove." }], formalName: "transformation — translation (vector), reflection (line), rotation (centre + angle), enlargement (centre + scale factor)" },
    stretch: "Enlargements grow from a CENTRE along rays — and the scale factor also multiplies area. Next: centre, scale factor, and the area surprise.", 
  },
};
