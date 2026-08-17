import type { Lesson } from "../schema";

export const T3U21L2: Lesson = {
  // @meta
  id: "T3-U21-L2",
  tier: 3,
  unit: "Polygons & circles",
  title: "The Exterior Walk",
  prerequisites: ["T3-U20-L4","T3-U21-L1"],
  estimatedMinutes: 12,
  hook: { question: "Walk all the way around a building and total your turns: you face the same way you started — a full 360°. The exterior angles of ANY polygon add to 360°: each corner's 'turn' contributes, and the whole path brings you full circle.", type: "real-world" },
  intuitionBlocks: [{ widget: "geometry-playground", narrative: "Walk the polygon's outline and watch the turn at each corner accumulate. Triangle, square, hexagon — the exterior turns always sum to exactly 360°." }],

  // @discovery
  formalBlocks: [{ definition: "At each vertex, the exterior angle is the turn you make walking around the polygon — the angle between one side and the next, extended. Exterior angles always sum to 360° for any convex polygon. Interior + exterior at a vertex = 180° (they share a straight line). For a regular n-gon, each exterior angle = 360°/n, and each interior = 180° − exterior.", examples: ["Square: four 90° exterior turns → 4 × 90 = 360°.", "Regular hexagon: each exterior = 360/6 = 60°, interior = 120°."], pitfall: "Don't confuse interior with exterior: at a vertex the two add to 180°, and only the EXTERIORS sum to 360° overall.", altExplanations: ["TRAVEL: walking around a fence — at each corner you turn the exterior angle; after a full lap you've turned one complete 360°. Each corner's interior+exterior = 180 (they share a straight line).", "GAME: a character walking a polygon's perimeter — the total direction change after one circuit is always 360°, so the exterior angles sum to 360. A regular hexagon turns 60° six times."] }],
  gutChecks: [{ prompt: "Regular pentagon — one exterior angle?", answer: "360 ÷ 5 = 72°." }],
  quiz: {
    pool: [
      // @q01
      { id: "U21L2-mcq-1", type: "mcq", category: "procedural", prompt: "A square's exterior angles sum to…", options: [ { id: "a", text: "360°" }, { id: "b", text: "720°" }, { id: "c", text: "180°" }, { id: "d", text: "540°" } ], correctOptionId: "a", diagnoses: { b: "720° is a hexagon's interior sum.", c: "180° is one straight line of turns.", d: "540° is a pentagon's interior." }, explanation: "Exterior ALWAYS sum to 360°.", hints: ["Exteriors.", "360°.", "Exterior ALWAYS sum to 360°."] },
      // @q02
      { id: "U21L2-mcq-2", type: "mcq", category: "conceptual", prompt: "Why do exterior angles always total 360°?", options: [ { id: "a", text: "Because triangles have 3 sides" }, { id: "b", text: "The walking path brings you back to face the same way — one full turn" }, { id: "c", text: "Exteriors are all right angles" }, { id: "d", text: "Only squares do" } ], correctOptionId: "b", diagnoses: { a: "The side count isn't the cause.", c: "Exteriors vary; only the total is fixed.", d: "ALL convex polygons share the rule." }, explanation: "Net rotation around the polygon is exactly one full turn.", hints: ["Full turn.", "360°.", "Net rotation around the polygon is exactly one full turn."] },
      // @q03
      { id: "U21L2-mcq-3", type: "mcq", category: "word", prompt: "A regular hexagon sign — one exterior angle?", options: [ { id: "a", text: "90°" }, { id: "b", text: "120°" }, { id: "c", text: "60°" }, { id: "d", text: "72°" } ], correctOptionId: "c", diagnoses: { b: "120° is the interior.", a: "90° is a square's corner.", d: "72° belongs to a pentagon." }, explanation: "360 ÷ 6 = 60° per exterior.", hints: ["360 ÷ 6.", "60°.", "360 ÷ 6 = 60° per exterior."] },
      // @q04
      { id: "U21L2-mcq-4", type: "mcq", category: "procedural", prompt: "At one vertex, interior 150° → the exterior is…", options: [ { id: "a", text: "360°" }, { id: "b", text: "150°" }, { id: "c", text: "210°" }, { id: "d", text: "30°" } ], correctOptionId: "d", diagnoses: { b: "Interior and exterior are different — they add to 180°.", c: "210° = 360 − 150, an exterior outside the linear pair.", a: "360 is the whole turn, not one exterior." }, explanation: "Interior + exterior = 180° → exterior = 180 − 150 = 30°.", hints: ["180 − 150.", "30°.", "Interior + exterior = 180° → exterior = 180 − 150 = 30°."] },
      // @q05
      { id: "U21L2-mcq-5", type: "mcq", category: "conceptual", prompt: "A regular 12-gon — each exterior angle?", options: [ { id: "a", text: "30°" }, { id: "b", text: "36°" }, { id: "c", text: "45°" }, { id: "d", text: "150°" } ], correctOptionId: "a", diagnoses: { b: "36° would be a 10-gon.", c: "45° would be an 8-gon.", d: "150° is the interior of a 12-gon." }, explanation: "360 ÷ 12 = 30°.", hints: ["360 ÷ 12.", "30°.", "360 ÷ 12 = 30°."] },
      // @q06
      { id: "U21L2-mcq-6", type: "mcq", category: "word", prompt: "Walking a triangular block: one exterior is 90°, another 120°. The third is…", options: [ { id: "a", text: "60°" }, { id: "b", text: "150°" }, { id: "c", text: "30°" }, { id: "d", text: "90°" } ], correctOptionId: "b", diagnoses: { a: "60° would sum to 270° — not a full turn.", c: "30 is the interior partner of 150, not the exterior.", d: "Two right turns already make 180." }, explanation: "360 − 90 − 120 = 150°.", hints: ["360 − 210.", "150°.", "360 − 90 − 120 = 150°."] },
      // @q07
      { id: "U21L2-num-1", type: "numeric-input", category: "procedural", prompt: "A regular octagon — one exterior angle?", answer: 45, tolerance: 0, explanation: "360 ÷ 8 = 45°.", hints: ["360 ÷ 8.", "45.", "360 ÷ 8 = 45°."] },
      // @q08
      { id: "U21L2-num-2", type: "numeric-input", category: "procedural", prompt: "A pentagon has exteriors 70°, 80°, 60°, 90°. Type the last.", answer: 60, tolerance: 0, explanation: "360 − 300 = 60°.", hints: ["Sum others.", "360 − 300.", "360 − 300 = 60°."] },
      // @q09
      { id: "U21L2-num-3", type: "numeric-input", category: "conceptual", prompt: "Interior 110° — type the exterior.", answer: 70, tolerance: 0, explanation: "180 − 110 = 70°.", hints: ["180 − interior.", "70.", "180 − 110 = 70°."] },
      // @q10
      { id: "U21L2-frac-1", type: "fraction-input", category: "conceptual", prompt: "One exterior of a regular decagon as a fraction of 360°.", numerator: 1, denominator: 10, acceptEquivalent: true, explanation: "Each exterior = 360/10 = 36° = 1/10 of 360.", hints: ["360 ÷ 10.", "1/10.", "Each exterior = 360/10 = 36° = 1/10 of 360."] },
      // @q11
      { id: "U21L2-tf-1", type: "true-false-justify", category: "conceptual", prompt: "Exterior angles always sum to 360° for any convex polygon.", isTrue: true, explanation: "The walking turn around the polygon is always one full rotation.", hints: ["Full turn.", "360°.", "The walking turn around the polygon is always one full rotation."] },
      // @q12
      { id: "U21L2-tf-2", type: "true-false-justify", category: "conceptual", prompt: "Interior and exterior at a vertex sum to 90°.", isTrue: false, explanation: "They share a straight line: interior + exterior = 180°.", hints: ["Straight line.", "180°.", "They share a straight line: interior + exterior = 180°."] },
      // @q13
      { id: "U21L2-order-1", type: "order-steps", category: "word", prompt: "Order the steps to find a regular pentagon's interior angle.", sequence: ["Exterior = 360 ÷ 5 = 72°", "Interior = 180 − exterior", "Interior = 180 − 72 = 108°", "Check: 108 × 5 = 540° (matches interior sum)"], diagnoses: { "Exterior = 360 ÷ 5 = 72°@1": "Find the exterior first.", "Interior = 180 − exterior@0": "Then subtract from 180.", "Check: 108 × 5 = 540° (matches interior sum)@0": "Check at the end." }, explanation: "Exterior, subtract, state, verify.", hints: ["360 ÷ 5.", "180 − 72.", "Exterior, subtract, state, verify."] },
      // @q14
      { id: "U21L2-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each regular polygon to its exterior angle.", pairs: [ { source: "Triangle", target: "120°" }, { source: "Square", target: "90°" }, { source: "Hexagon", target: "60°" } ], diagnoses: { "Triangle->90°": "360 ÷ 3 = 120°.", "Square->120°": "Square's exterior = 90°.", "Hexagon->120°": "Hexagon's = 60°." }, explanation: "360 ÷ n gives each exterior.", hints: ["360 ÷ n.", "Match.", "360 ÷ n gives each exterior."] },
      // @q15
      { id: "U21L2-graph-1", type: "graph-interact", category: "word", prompt: "A regular nonagon (9 sides). Set the slider to one exterior angle (key: value).", challenge: "A regular nonagon (9 sides). — adjust the values below to match the condition.", validate: { value: 40 }, tolerance: 0.01, explanation: "360 ÷ 9 = 40°.", hints: ["360 ÷ 9.", "40.", "360 ÷ 9 = 40°."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "adds interior and exterior to 360", diagnosis: "At one vertex interior + exterior = 180° (a straight line).", hint: "They share one straight line, not a full turn." },
    { wrongPattern: "uses interior sum for exterior total", diagnosis: "Exteriors total 360°; interiors total (n − 2) × 180°.", hint: "Exteriors: full turn 360°." },
    { wrongPattern: "forgets to divide for regular polygons", diagnosis: "Regular means equal angles — divide 360° by n.", hint: "360 ÷ number of sides." },
  ],
  recallTags: ["exterior-angles", "regular-polygons", "360", "turns"],
  discovery: {
    challenges: [
      { instruction: "Walk a triangle's outline and sum the corner turns.", observe: "The three turns total 360° — you end facing the start direction." },
      { instruction: "Switch to a hexagon and read the exterior at each corner.", observe: "Each is 60°; six of them still total 360°." },
    ],
    predict: { prompt: "Regular octagon — one exterior angle is…", options: [{ id: "a", text: "45°" }, { id: "b", text: "40°" }, { id: "c", text: "135°" }], reveal: "45° — 360 ÷ 8. Its interior is then 180 − 45 = 135°." },
    sayItYourWay: { prompt: "What is an exterior angle?", phrasings: [{ id: "a", text: "The turn you make at a corner, walking around a polygon", correct: true, why: "The net of all turns brings you full circle to 360°." }, { id: "b", text: "The angle inside the polygon", correct: false, why: "That's the interior — the pair sums to 180°." }, { id: "c", text: "The total of all inner corners", correct: false, why: "Each vertex has one turn: the exterior." }], formalName: "exterior angles of a polygon (sum = 360°)" },
    stretch: "Triangles and circles share hidden laws. Inside a circle, angles behave like members of one family — the isosceles triangles from the centre are the big clue. Circle secrets are U21-L4.",
  },
};
