import type { Lesson } from "../schema";

export const T2U18L2: Lesson = {
  // @meta
  id: "T2-U18-L2",
  tier: 2,
  unit: "Coordinates & straight lines",
  title: "Steepness Is a Number",
  prerequisites: ["T2-U17-L3","T2-U18-L1"],
  estimatedMinutes: 12,
  hook: { question: "'Steeper' feels like a feeling — but a ladder, a slope, a ski run all have a number for it: rise ÷ run. Three up over two along = 3/2. Measure anywhere on the same straight line and you get the same number.", type: "real-world" },
  intuitionBlocks: [{ widget: "graph-plotter", narrative: "Drag two points on a line and watch rise ÷ run update live. Wherever you measure — close or far — the gradient stays the same. Steepness is written into the line itself." }],

  // @discovery
  formalBlocks: [{ definition: "The gradient (slope) of a line is rise ÷ run: how much y rises for each unit of x. Pick any two points, subtract y's (rise) and x's (run), divide. A positive gradient tilts up; negative tilts down; the number is the same no matter which two points you choose.", examples: ["Points (1, 2) and (3, 8): rise = 8 − 2 = 6, run = 3 − 1 = 2, gradient = 6/2 = 3.", "Points (0, 5) and (4, 1): rise = 1 − 5 = −4, run = 4, gradient = −1."], pitfall: "Keep the SAME order for both subtractions. (1, 2) → (3, 8): y₂−y₁ over x₂−x₁. Mixing orders — 6 over −2 — gives the wrong sign.", altExplanations: ["FOOD: the gradient is a recipe's steepness/rise ratio — for every 1 cm of run (horizontal), the line climbs rise cm. Measuring between (1,2) and (3,8): up 6, across 2 → 6/2 = 3 per unit.", "MONEY: the gradient is the slope meter of a savings line — rise is dollars gained, run is months passed. Same line, any two points: the rise/run ratio always reads the same slope."] }],
  gutChecks: [{ prompt: "Gradient of the line through (0, 0) and (4, 6)?", answer: "6/4 = 3/2." }],
  quiz: {
    pool: [
      // @q01
      { id: "U18L2-mcq-1", type: "mcq", category: "procedural", prompt: "Line through (1, 2) and (3, 8). Gradient?", options: [ { id: "a", text: "3" }, { id: "b", text: "6" }, { id: "c", text: "2" }, { id: "d", text: "1/3" } ], correctOptionId: "a", diagnoses: { b: "6 is the RISE alone — divide by run 2.", c: "2 is the run, not the gradient.", d: "That's run ÷ rise, upside down." }, explanation: "rise = 6, run = 2 → 6/2 = 3.", hints: ["y₂ − y₁ = 6.", "x₂ − x₁ = 2.", "rise = 6, run = 2 → 6/2 = 3."] },
      // @q02
      { id: "U18L2-mcq-2", type: "mcq", category: "conceptual", prompt: "Why is the gradient the same at ANY two points on a straight line?", options: [ { id: "a", text: "Every line has exactly two points" }, { id: "b", text: "The line rises proportionally — rise/run never changes" }, { id: "c", text: "The gradient is random" }, { id: "d", text: "It's constant only at the origin" } ], correctOptionId: "b", diagnoses: { a: "Lines have infinitely many points.", c: "The gradient is fixed by the line's steepness.", d: "Constancy holds along the whole line." }, explanation: "Constant steepness = constant rise per run.", hints: ["Straight meaning.", "Same tilt.", "Constant steepness = constant rise per run."] },
      // @q03
      { id: "U18L2-mcq-3", type: "mcq", category: "word", prompt: "A ramp rises 3 m over 12 m of run. Gradient?", options: [ { id: "a", text: "3" }, { id: "b", text: "4" }, { id: "c", text: "1/4" }, { id: "d", text: "12" } ], correctOptionId: "c", diagnoses: { b: "4 is run ÷ rise — upside down.", a: "3 is just the rise.", d: "12 is just the run." }, explanation: "3 ÷ 12 = 1/4 — gentle slope.", hints: ["rise ÷ run.", "3 ÷ 12.", "3 ÷ 12 = 1/4 — gentle slope."] },
      // @q04
      { id: "U18L2-mcq-4", type: "mcq", category: "procedural", prompt: "Line through (0, 5) and (4, 1). Gradient?", options: [ { id: "a", text: "4" }, { id: "b", text: "1" }, { id: "c", text: "−4" }, { id: "d", text: "−1" } ], correctOptionId: "d", diagnoses: { b: "y falls — gradient is negative.", c: "−4 is the rise; ÷ run 4 → −1.", a: "x subtracted the wrong way — sign flipped." }, explanation: "rise = 1 − 5 = −4, run = 4 → −1.", hints: ["y falls.", "−4 ÷ 4.", "rise = 1 − 5 = −4, run = 4 → −1."] },
      // @q05
      { id: "U18L2-mcq-5", type: "mcq", category: "conceptual", prompt: "What does a NEGATIVE gradient mean?", options: [ { id: "a", text: "The line slopes downhill (falls as x grows)" }, { id: "b", text: "The line is vertical" }, { id: "c", text: "The line is horizontal" }, { id: "d", text: "The line doesn't exist" } ], correctOptionId: "a", diagnoses: { b: "Vertical lines have undefined gradient.", c: "Horizontal lines have gradient 0.", d: "Negative slope lines exist all the time." }, explanation: "As x increases, y decreases — downhill.", hints: ["Downhill tilt.", "y decreases.", "As x increases, y decreases — downhill."] },
      // @q06
      { id: "U18L2-mcq-6", type: "mcq", category: "word", prompt: "A ski run drops 200 m over 800 m horizontally. Gradient?", options: [ { id: "a", text: "1/4" }, { id: "b", text: "−1/4" }, { id: "c", text: "−4" }, { id: "d", text: "200" } ], correctOptionId: "b", diagnoses: { a: "It DESCENDS — the sign is negative.", c: "That's the reciprocal.", d: "200 is the rise alone." }, explanation: "drop = −200, run = 800 → −200/800 = −1/4.", hints: ["Descent = negative.", "−200 ÷ 800.", "drop = −200, run = 800 → −200/800 = −1/4."] },
      // @q07
      { id: "U18L2-num-1", type: "numeric-input", category: "procedural", prompt: "Line through (0, 0) and (4, 6). Type the gradient.", answer: 1.5, tolerance: 0, explanation: "6/4 = 3/2 = 1.5.", hints: ["rise 6, run 4.", "6 ÷ 4.", "6/4 = 3/2 = 1.5."] },
      // @q08
      { id: "U18L2-num-2", type: "numeric-input", category: "procedural", prompt: "Line through (1, 2) and (3, 8). Type the rise.", answer: 6, tolerance: 0, explanation: "8 − 2 = 6.", hints: ["y₂ − y₁.", "8 − 2.", "8 − 2 = 6."] },
      // @q09
      { id: "U18L2-num-3", type: "numeric-input", category: "conceptual", prompt: "Line through (2, 1) and (5, 4). Type the gradient.", answer: 1, tolerance: 0, explanation: "rise = 3, run = 3 → 1.", hints: ["3 and 3.", "3 ÷ 3.", "rise = 3, run = 3 → 1."] },
      // @q10
      { id: "U18L2-frac-1", type: "fraction-input", category: "conceptual", prompt: "Line through (1, 1) and (3, 2). Write the gradient as a fraction.", numerator: 1, denominator: 2, acceptEquivalent: true, explanation: "rise = 1, run = 2 → 1/2.", hints: ["y: 2 − 1 = 1.", "x: 3 − 1 = 2.", "rise = 1, run = 2 → 1/2."] },
      // @q11
      { id: "U18L2-tf-1", type: "true-false-justify", category: "conceptual", prompt: "A horizontal line has gradient 0.", isTrue: true, explanation: "Rise is 0 for any run: 0 ÷ run = 0.", hints: ["No rise.", "0 ÷ anything.", "Rise is 0 for any run: 0 ÷ run = 0."] },
      // @q12
      { id: "U18L2-tf-2", type: "true-false-justify", category: "conceptual", prompt: "A line through (1, 1) and (3, 3) has gradient 3.", isTrue: false, explanation: "rise = 2, run = 2 → gradient 1, not 3.", hints: ["rise 2.", "run 2.", "rise = 2, run = 2 → gradient 1, not 3."] },
      // @q13
      { id: "U18L2-order-1", type: "order-steps", category: "word", prompt: "Order the steps to find the gradient through (1, 2) and (3, 8).", sequence: ["Label the points (x₁,y₁), (x₂,y₂)", "Rise: y₂ − y₁ = 8 − 2 = 6", "Run: x₂ − x₁ = 3 − 1 = 2", "Divide: gradient = 6 ÷ 2 = 3"], diagnoses: { "Label the points (x₁,y₁), (x₂,y₂)@1": "Label first.", "Rise: y₂ − y₁ = 8 − 2 = 6@0": "Rise comes after labelling.", "Run: x₂ − x₁ = 3 − 1 = 2@1": "Find both rise and run before dividing." }, explanation: "Label, find rise, find run, divide.", hints: ["Label points.", "Rise.", "Run, then divide."] },
      // @q14
      { id: "U18L2-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each line to its gradient.", pairs: [ { source: "Through (0, 0) and (2, 4)", target: "Gradient 2" }, { source: "Horizontal", target: "Gradient 0" }, { source: "Through (0, 4) and (2, 2)", target: "Gradient −1" } ], diagnoses: { "Through (0, 0) and (2, 4)->Gradient 0": "Rise 4, run 2 → 2, not 0.", "Horizontal->Gradient −1": "No rise → 0.", "Through (0, 4) and (2, 2)->Gradient 2": "Fall −2 over run 2 → −1." }, explanation: "Compute rise ÷ run; horizontal means 0 rise.", hints: ["rise ÷ run.", "Horizontal = 0.", "Fall = negative."] },
      // @q15
      { id: "U18L2-graph-1", type: "graph-interact", category: "word", prompt: "A line goes through the origin and the point (2, 6). Set the slider to the gradient (key: value).", challenge: "A line goes through the origin and the point (2, 6). — adjust the values below to match the condition.", validate: { value: 3 }, tolerance: 0.01, explanation: "rise 6, run 2 → gradient 3.", hints: ["6 ÷ 2.", "3.", "rise 6, run 2 → gradient 3."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "reverses rise and run", diagnosis: "Gradient is rise ÷ run — y first over x.", hint: "y's on top: (y₂ − y₁)/(x₂ − x₁)." },
    { wrongPattern: "mixed subtraction order", diagnosis: "Both subtractions must go the same way: point 2 minus point 1.", hint: "Pick which is point 1 and keep it first in both." },
    { wrongPattern: "forgets the sign on downhill lines", diagnosis: "y falling (point 2 lower) makes the gradient negative.", hint: "Check whether the line climbs or falls before dividing." },
  ],
  recallTags: ["gradient", "slope", "rise-run", "straight-lines"],
  discovery: {
    challenges: [
      { instruction: "Drag two points far apart and note rise ÷ run.", observe: "The ratio stays constant — steepness is fixed." },
      { instruction: "Tilt the line downhill and re-measure.", observe: "The gradient turns negative — sign follows direction." },
    ],
    predict: { prompt: "A line rises 4 for every 2 along. Its gradient is…", options: [{ id: "a", text: "2" }, { id: "b", text: "1/2" }, { id: "c", text: "4" }], reveal: "2 — rise ÷ run = 4 ÷ 2. Each unit of x gains 2 of y." },
    sayItYourWay: { prompt: "What does the gradient measure?", phrasings: [{ id: "a", text: "The steepness: how much y changes per unit of x", correct: true, why: "rise/run — one number for the whole line." }, { id: "b", text: "How long the line is", correct: false, why: "Length is separate; gradient is slope." }, { id: "c", text: "Where the line crosses the y-axis", correct: false, why: "That's the intercept — coming in the next lesson." }], formalName: "the gradient (slope) of a straight line" },
    stretch: "Gradient tells the tilt, but a line also has a HOME base — where it crosses the y-axis. Gradient + intercept = the whole line in one equation: y = mx + c, next.",
  },
};
