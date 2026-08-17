import type { Lesson } from "../schema";

export const T2U18L3: Lesson = {
  // @meta
  id: "T2-U18-L3",
  tier: 2,
  unit: "Coordinates & straight lines",
  title: "y = mx + c, Own It",
  prerequisites: ["T2-U13-L3","T2-U17-L3","T2-U18-L2"],
  estimatedMinutes: 12,
  hook: { question: "Every straight line has a secret identity: y = mx + c. m is its tilt (the gradient), c is its address on the y-axis (the intercept). Change m and the line rocks; change c and it slides up and down. Two sliders, every line on the whole grid.", type: "real-world" },
  intuitionBlocks: [{ widget: "graph-plotter", narrative: "Slide m and c and watch the line obey. m tilts it (negative m flips it to slope down); c lifts or lowers it without changing the tilt. The equation is the line's control panel." }],

  // @discovery
  formalBlocks: [{ definition: "y = mx + c: m = gradient (steepness and direction), c = y-intercept (where the line crosses the y-axis, i.e. y when x = 0). Lines with the same m are parallel — same tilt, different height.", examples: ["y = 3x + 2: gradient 3, crosses y-axis at (0, 2).", "y = −1x − 4: gradient −1 (downhill), crosses at (0, −4)."], pitfall: "The intercept is c, the LAST number — the one written alone. y = 2x + 5 crosses at (0, 5), not (5, 0). Read c as 'y when x = 0'.", altExplanations: ["GAME: m is the tilt slider and c is the spawn height — sliding m changes steepness (negative m means the line dives down), sliding c raises or lowers where the line crosses the y-axis. Same tilt (same m) = parallel lines.", "FOOD: a ramp's pitch (m) and its floor height (c) — the ramp builds up from its starting floor at (0, c). Two ramps with identical pitch never meet: parallel tracks share m."] }],
  gutChecks: [{ prompt: "For y = 4x − 3, what are m and c?", answer: "m = 4; c = −3 (crosses at (0, −3))." }],
  quiz: {
    pool: [
      // @q01
      { id: "U18L3-mcq-1", type: "mcq", category: "procedural", prompt: "For y = 3x + 2, what is the gradient m?", options: [ { id: "a", text: "3" }, { id: "b", text: "2" }, { id: "c", text: "−3" }, { id: "d", text: "1/3" } ], correctOptionId: "a", diagnoses: { b: "2 is c, the intercept.", c: "The x coefficient is +3.", d: "That's run over rise." }, explanation: "m is the coefficient of x: 3.", hints: ["m = x's coefficient.", "3.", "m is the coefficient of x: 3."] },
      // @q02
      { id: "U18L3-mcq-2", type: "mcq", category: "conceptual", prompt: "Where does y = 3x + 2 cross the y-axis?", options: [ { id: "a", text: "(2, 0)" }, { id: "b", text: "(0, 2)" }, { id: "c", text: "(0, 3)" }, { id: "d", text: "(3, 2)" } ], correctOptionId: "b", diagnoses: { a: "c is y when x = 0 — (0, 2), not (2, 0).", c: "3 is m, not the intercept.", d: "That's a point on the line, not the axis crossing." }, explanation: "At x = 0, y = 3(0) + 2 = 2.", hints: ["Set x = 0.", "y = 2.", "At x = 0, y = 3(0) + 2 = 2."] },
      // @q03
      { id: "U18L3-mcq-3", type: "mcq", category: "word", prompt: "A taxi: ₹20 base + ₹5/km: C = 5d + 20. What is the base fare (c)?", options: [ { id: "a", text: "₹25" }, { id: "b", text: "₹5" }, { id: "c", text: "₹20" }, { id: "d", text: "₹4" } ], correctOptionId: "c", diagnoses: { b: "5 is the rate per km (m).", a: "25 = 20 + 5 — that's 1 km's cost.", d: "4 is d flipped." }, explanation: "c = 20 — the charge before any km.", hints: ["c is the constant.", "Base = 20.", "c = 20 — the charge before any km."] },
      // @q04
      { id: "U18L3-mcq-4", type: "mcq", category: "procedural", prompt: "Which line is PARALLEL to y = 2x + 1?", options: [ { id: "a", text: "y = x + 2" }, { id: "b", text: "y = 3x + 1" }, { id: "c", text: "y = −2x + 1" }, { id: "d", text: "y = 2x − 5" } ], correctOptionId: "d", diagnoses: { b: "m = 3 changes the tilt.", c: "m = −2 slopes down instead of up.", a: "m = 1, a different tilt." }, explanation: "Same m (2) → same slope → parallel; c moves it.", hints: ["Parallel = same m.", "m = 2.", "Same m (2) → same slope → parallel; c moves it."] },
      // @q05
      { id: "U18L3-mcq-5", type: "mcq", category: "conceptual", prompt: "What happens when you increase c in y = mx + c?", options: [ { id: "a", text: "The whole line slides UP (still parallel)" }, { id: "b", text: "The line gets steeper" }, { id: "c", text: "The line flips direction" }, { id: "d", text: "Nothing changes" } ], correctOptionId: "a", diagnoses: { b: "Steepness is m's job.", c: "Direction flips only if m's sign changes.", d: "c raises or lowers the line." }, explanation: "c is the height; bigger c lifts the whole parallel line.", hints: ["c = height.", "Slides up.", "Still parallel."] },
      // @q06
      { id: "U18L3-mcq-6", type: "mcq", category: "word", prompt: "A plane descends: h = −3t + 10 (km). At what height does it start (t = 0)?", options: [ { id: "a", text: "−3 km" }, { id: "b", text: "10 km" }, { id: "c", text: "7 km" }, { id: "d", text: "3 km" } ], correctOptionId: "b", diagnoses: { a: "−3 is the descent rate (m).", c: "7 = 10 − 3 — that's 1 minute in.", d: "3 is the rate without sign." }, explanation: "c = 10 — height at start.", hints: ["c = starting value.", "10.", "c = 10 — height at start."] },
      // @q07
      { id: "U18L3-num-1", type: "numeric-input", category: "procedural", prompt: "For y = −2x + 5, type the value of c.", answer: 5, tolerance: 0, explanation: "c = 5 — where it crosses the y-axis.", hints: ["c is the constant.", "5.", "c = 5 — where it crosses the y-axis."] },
      // @q08
      { id: "U18L3-num-2", type: "numeric-input", category: "procedural", prompt: "For y = 4x − 3, type the intercept y when x = 0.", answer: -3, tolerance: 0, explanation: "y = 4(0) − 3 = −3.", hints: ["Set x = 0.", "y = −3.", "y = 4(0) − 3 = −3."] },
      // @q09
      { id: "U18L3-num-3", type: "numeric-input", category: "conceptual", prompt: "A line through (0, 7) with gradient 2. Type c.", answer: 7, tolerance: 0, explanation: "The y-intercept IS the line through (0, 7): c = 7.", hints: ["c = y when x = 0.", "x = 0 gives 7.", "The y-intercept IS the line through (0, 7): c = 7."] },
      // @q10
      { id: "U18L3-frac-1", type: "fraction-input", category: "conceptual", prompt: "A line rises 1 for every 2 along and crosses at (0, 3). Write its equation's gradient as a fraction.", numerator: 1, denominator: 2, acceptEquivalent: true, explanation: "m = 1/2 — the line is y = (1/2)x + 3.", hints: ["m = rise/run.", "1/2.", "m = 1/2 — the line is y = (1/2)x + 3."] },
      // @q11
      { id: "U18L3-tf-1", type: "true-false-justify", category: "conceptual", prompt: "y = 2x + 5 and y = 2x − 1 are parallel.", isTrue: true, explanation: "Same m = 2 — identical tilt, different intercepts.", hints: ["Same m.", "Parallel.", "Same m = 2 — identical tilt, different intercepts."] },
      // @q12
      { id: "U18L3-tf-2", type: "true-false-justify", category: "conceptual", prompt: "y = 3x − 5 crosses the y-axis at (0, −5), not (−5, 0).", isTrue: true, explanation: "c = −5 is the y-value when x = 0.", hints: ["Set x = 0.", "y = −5.", "c = −5 is the y-value when x = 0."] },
      // @q13
      { id: "U18L3-order-1", type: "order-steps", category: "word", prompt: "Order the steps to draw y = 2x + 1.", sequence: ["Read m = 2 and c = 1", "Mark the intercept (0, 1)", "From there, go 1 right and 2 up to a second point", "Draw the line through both points"], diagnoses: { "Read m = 2 and c = 1@1": "Read the equation first.", "Mark the intercept (0, 1)@0": "Mark the intercept before using slope.", "Draw the line through both points@0": "Plot both points before drawing." }, explanation: "Read, mark intercept, step out the slope, draw.", hints: ["m and c.", "Intercept.", "Read, mark intercept, step out the slope, draw."] },
      // @q14
      { id: "U18L3-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each equation to its description.", pairs: [ { source: "y = 2x + 1", target: "Gradient 2, intercept 1" }, { source: "y = −3x + 4", target: "Downhill, intercept 4" }, { source: "y = x − 2", target: "Gradient 1, intercept −2" } ], diagnoses: { "y = 2x + 1->Downhill, intercept 4": "m = 2 is positive — climbs.", "y = −3x + 4->Gradient 2, intercept 1": "m = −3 is negative.", "y = x − 2->Gradient 2, intercept 1": "x means m = 1, c = −2." }, explanation: "m is x's coefficient; c is the constant.", hints: ["m = coefficient of x.", "c = constant.", "Check the sign."] },
      // @q15
      { id: "U18L3-graph-1", type: "graph-interact", category: "word", prompt: "The line y = 2x + 3 crosses the y-axis at (0, 3). Set the slider to the INTERCEPT value (key: value).", challenge: "Adjust the values below so they match the condition described in the prompt.", validate: { value: 3 }, tolerance: 0.01, explanation: "c = 3 — the y-intercept.", hints: ["c = intercept.", "3.", "c = 3 — the y-intercept."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "mixes up m and c", diagnosis: "m is x's coefficient; c is the constant — they do different jobs.", hint: "Highlight x's coefficient (m) and the lone constant (c)." },
    { wrongPattern: "reads intercept as (c, 0)", diagnosis: "The y-intercept is (0, c) — y when x = 0.", hint: "Set x = 0 and read off y." },
    { wrongPattern: "thinks changing c changes steepness", diagnosis: "c slides the line; only m changes the tilt.", hint: "Change c, watch parallel lines — same slope, new height." },
  ],
  recallTags: ["straight-lines", "y-mx-c", "intercept", "gradient"],
  discovery: {
    challenges: [
      { instruction: "Slide m and record how the line tilts.", observe: "Bigger m → steeper; negative m → downhill." },
      { instruction: "Now keep m fixed and slide c.", observe: "The line slides up/down but stays parallel — c is a height control." },
    ],
    predict: { prompt: "y = 2x + 1 and y = 2x + 6 — how do the lines differ?", options: [{ id: "a", text: "Parallel, one 5 units higher" }, { id: "b", text: "Cross at the origin" }, { id: "c", text: "One is steeper" }], reveal: "Parallel — same gradient 2; the +6 line sits 5 units higher. Same tilt, different base height." },
    sayItYourWay: { prompt: "What does c do in y = mx + c?", phrasings: [{ id: "a", text: "Sets where the line crosses the y-axis", correct: true, why: "At x = 0, y = c — the line's home height." }, { id: "b", text: "Controls the steepness", correct: false, why: "That's m, the gradient." }, { id: "c", text: "Sets where it crosses the x-axis", correct: false, why: "The x-intercept is different — it's where y = 0." }], formalName: "the gradient–intercept form y = mx + c" },
    stretch: "Given just two clues — a gradient and a point, or two points — can you write the whole equation? Rebuilding a line from clues is U18-L4.",
  },
};
