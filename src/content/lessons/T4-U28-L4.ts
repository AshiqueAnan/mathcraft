import type { Lesson } from "../schema";

export const T4U28L4: Lesson = {
  // @meta
  id: "T4-U28-L4",
  tier: 4,
  unit: "Data & averages",
  title: "Do These Things Move Together?",
  prerequisites: ["T2-U18-L1","T3-U27-L3","T4-U28-L1","T4-U28-L3"],
  estimatedMinutes: 13,
  hook: { question: "Plot hours studied vs test scores: dots drift upward — more study, better scores, positive correlation. But ice-cream sales vs drownings also rise together in summer — correlation without causation. A scatter plot shows whether two things move together, never WHY.", type: "real-world" },
  intuitionBlocks: [{ widget: "graph-plotter", narrative: "Drop points for each person: one variable on each axis. Drag points to shape the cloud — up-right is positive correlation, down-right negative, scattered is none. Then add a confounder (like summer) and watch a fake link appear: correlation doesn't prove cause." }],

  // @discovery
  formalBlocks: [{ definition: "A scatter plot puts one variable on each axis; each point is a case. POSITIVE correlation: dots trend up-right (both rise). NEGATIVE: trend down-right. NO correlation: random scatter. Strong correlation = tight cloud; weak = fuzzy. CORRELATION ≠ CAUSATION — a third factor (confounder) can drive both, or the link can be coincidence.", examples: ["Study hours (x) vs score (y): upward trend = positive correlation.", "Shoe size vs reading age in kids BOTH rise with age — the confounder is age, not shoe size causing reading."], pitfall: "Don't overclaim: a tight upward cloud means they move together, not that one causes the other. Always hunt for a third variable.", altExplanations: ["GAME: scatter plots map two stats per character — an up-right cloud means positive correlation, down-right means negative. A tight cloud of shoe size vs reading age both rise with AGE — age is the confounder, not shoes causing reading.", "FOOD: scatter of ice-cream sales vs drownings both rise in summer — the confounder is warm weather. Strong correlation never proves causation; always hunt for the third variable."] }],
  gutChecks: [{ prompt: "What does a scatter plot's upward trend show?", answer: "Positive correlation — the variables move together; it does NOT prove one causes the other." }],
  quiz: {
    pool: [
      // @q01
      { id: "U28L4-mcq-1", type: "mcq", category: "procedural", prompt: "Scatter dots trend UP-RIGHT. This is…", options: [ { id: "a", text: "positive correlation" }, { id: "b", text: "negative correlation" }, { id: "c", text: "no correlation" }, { id: "d", text: "causation" } ], correctOptionId: "a", diagnoses: { b: "Down-right is negative.", c: "A trend means there IS correlation.", d: "The trend doesn't prove cause." }, explanation: "Both variables rise together → positive correlation.", hints: ["Up-right.", "Positive.", "Positive correlation."] },
      // @q02
      { id: "U28L4-mcq-2", type: "mcq", category: "conceptual", prompt: "Ice cream sales and drownings both spike in summer. The link is explained by the CONFOUNDER…", options: [ { id: "a", text: "ice cream makes people drown" }, { id: "b", text: "summer weather drives both" }, { id: "c", text: "drowning raises sales" }, { id: "d", text: "no link exists at all" } ], correctOptionId: "b", diagnoses: { a: "There's no causal mechanism.", c: "Drownings don't sell ice cream.", d: "They DO co-vary — but not causally." }, explanation: "Both rise with temperature — summer is the third variable.", hints: ["Third variable.", "Summer.", "Both rise with temperature — summer is the third variable."] },
      // @q03
      { id: "U28L4-mcq-3", type: "mcq", category: "word", prompt: "Studying more correlates with higher scores. A safe statement is…", options: [ { id: "a", text: "no relationship exists" }, { id: "b", text: "studying always causes success" }, { id: "c", text: "they're positively correlated" }, { id: "d", text: "scores cause studying" } ], correctOptionId: "c", diagnoses: { b: "Causation needs more than a correlation.", a: "There IS a visible trend.", d: "Direction isn't proven by correlation." }, explanation: "Correlation reports the co-movement — not the cause.", hints: ["Co-move only.", "Not causation.", "Correlation reports the co-movement — not the cause."] },
      // @q04
      { id: "U28L4-mcq-4", type: "mcq", category: "procedural", prompt: "Dots trend DOWN-RIGHT: temperature (x) vs hot-drink sales (y). This is…", options: [ { id: "a", text: "a perfect line" }, { id: "b", text: "positive correlation" }, { id: "c", text: "no correlation" }, { id: "d", text: "negative correlation" } ], correctOptionId: "d", diagnoses: { b: "Down-right is negative.", c: "There's a clear downward trend.", a: "Trend direction, not perfection." }, explanation: "Hotter outside → fewer hot drinks: inverse relationship.", hints: ["Down-right.", "Negative.", "Negative correlation."] },
      // @q05
      { id: "U28L4-mcq-5", type: "mcq", category: "conceptual", prompt: "SCATTERED dots with no trend mean…", options: [ { id: "a", text: "no correlation between the variables" }, { id: "b", text: "strong positive correlation" }, { id: "c", text: "causation is proven" }, { id: "d", text: "the axes are wrong" } ], correctOptionId: "a", diagnoses: { b: "A trend is required for correlation.", c: "Causation can't be proven by scatter alone.", d: "Axes can be fine; data just doesn't co-vary." }, explanation: "Random scatter = variables move independently.", hints: ["No pattern.", "Independent.", "No correlation."] },
      // @q06
      { id: "U28L4-mcq-6", type: "mcq", category: "word", prompt: "Shoe size and reading skill rise together in kids. The confounder is…", options: [ { id: "a", text: "bigger feet improve reading" }, { id: "b", text: "age — both grow with time" }, { id: "c", text: "reading grows feet" }, { id: "d", text: "random chance forever" } ], correctOptionId: "b", diagnoses: { a: "No such mechanism.", c: "Reading doesn't grow feet.", d: "The joint rise has a clear cause." }, explanation: "Age drives both — the correlation is real but not causal.", hints: ["Third variable.", "Age.", "Age drives both — the correlation is real but not causal."] },
      // @q07
      { id: "U28L4-num-1", type: "numeric-input", category: "procedural", prompt: "Points: (1,2), (2,4), (3,6). Trend up-right. Slope of the trend line = …", answer: 2, tolerance: 0, explanation: "rise/run = 2/1 = 2 — a steep positive slope.", hints: ["Rise over run.", "2.", "rise/run = 2/1 = 2 — a steep positive slope."] },
      // @q08
      { id: "U28L4-num-2", type: "numeric-input", category: "procedural", prompt: "Points: (1,10), (2,8), (3,6). Trend down-right. Slope = …", answer: -2, tolerance: 0, explanation: "rise/run = −2/1 = −2 — negative correlation.", hints: ["−2 over 1.", "−2.", "rise/run = −2/1 = −2 — negative correlation."] },
      // @q09
      { id: "U28L4-num-3", type: "numeric-input", category: "conceptual", prompt: "Scatter mix: hours studied (x) results (y). If every 2 extra hours adds 3 points, the slope is…", answer: 1.5, tolerance: 0.1, acceptFractions: true, explanation: "slope = 3/2 = 1.5 points per hour.", hints: ["3 points per 2 hours.", "1.5.", "slope = 3/2 = 1."] },
      // @q10
      { id: "U28L4-frac-1", type: "fraction-input", category: "conceptual", prompt: "In a scatter of height vs weight with a tight upward cloud, the number of cases on/near a clean straight line is most of them. If 8 of 12 are close to the line, what fraction is that?", numerator: 2, denominator: 3, acceptEquivalent: true, explanation: "8/12 = 2/3 — a fairly tight positive correlation.", hints: ["8 of 12.", "2/3.", "8/12 = 2/3 — a fairly tight positive correlation."] },
      // @q11
      { id: "U28L4-tf-1", type: "true-false-justify", category: "conceptual", prompt: "A tight upward cloud proves one variable causes the other.", isTrue: false, explanation: "Tight correlation shows co-movement — causation needs an experiment or strong reasoning.", hints: ["Co-move ≠ cause.", "Confounder check.", "Tight correlation shows co-movement — causation needs an experiment or strong reasoning."] },
      // @q12
      { id: "U28L4-tf-2", type: "true-false-justify", category: "conceptual", prompt: "A down-right scatter means negative correlation.", isTrue: true, explanation: "As x rises, y falls — the inverse relationship.", hints: ["Down-right.", "Negative.", "As x rises, y falls — the inverse relationship."] },
      // @q13
      { id: "U28L4-order-1", type: "order-steps", category: "word", prompt: "Order the steps to read a scatter plot.", sequence: ["Plot x on one axis, y on the other", "Look at the trend direction", "Check for possible confounders"], diagnoses: { "Plot x on one axis, y on the other@1": "Plot first.", "Look at the trend direction@0": "Then read the trend.", "Check for possible confounders@0": "Hunt confounders last." }, explanation: "Plot, read, question cause.", hints: ["Axes.", "Trend.", "Plot, read, question cause."] },
      // @q14
      { id: "U28L4-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each trend to its meaning.", pairs: [ { source: "Up-right", target: "positive correlation" }, { source: "Down-right", target: "negative correlation" }, { source: "Random scatter", target: "no correlation" } ], diagnoses: { "Up-right->negative correlation": "Up-right is positive.", "Down-right->positive correlation": "Down-right is negative.", "Random scatter->positive correlation": "Scatter = none." }, explanation: "Trend direction labels the correlation sign.", hints: ["Up = positive.", "Down = negative.", "Scatter = none."] },
      // @q15
      { id: "U28L4-graph-1", type: "graph-interact", category: "word", prompt: "Points trend: (1,4), (2,5), (3,6). Set the slider to the slope of the trend (key: value).", challenge: "Adjust the values below so they match the condition described in the prompt.", validate: { value: 1 }, tolerance: 0.01, explanation: "rise = 1 for run = 1 → slope 1.", hints: ["Rise over run.", "1.", "rise = 1 for run = 1 → slope 1."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "claims causation from correlation", diagnosis: "A tight cloud shows co-movement, never cause without more evidence.", hint: "Hunt for the confounder." },
    { wrongPattern: "reads down-right as positive", diagnosis: "Down-right means y falls as x rises — negative.", hint: "Follow the trend." },
    { wrongPattern: "says random scatter is strong correlation", diagnosis: "No trend = no correlation between the variables.", hint: "Scatter = none." },
  ],
  recallTags: ["scatter plot", "correlation", "causation", "confounder", "trend"],
  discovery: {
    challenges: [
      { instruction: "Drag points into an up-right cloud.", observe: "The trend reads positive — tight or loose determines strength." },
      { instruction: "Add summer as a third variable to ice-cream vs drownings.", observe: "Both rise with heat — correlation exists, causation doesn't." },
    ],
    predict: { prompt: "Umbrella sales and rainy days rise together — this is…", options: [{ id: "a", text: "correlation, explained by the rain" }, { id: "b", text: "umbrellas causing rain" }, { id: "c", text: "no relationship" }], reveal: "Correlation — rain (the weather) drives both umbrella sales AND wet days. The umbrella doesn't cause the rain." },
    sayItYourWay: { prompt: "What does a scatter plot tell you?", phrasings: [{ id: "a", text: "Whether two variables move together — and how tightly", correct: true, why: "It's a picture of co-variation, not cause." }, { id: "b", text: "Exactly why one thing causes another", correct: false, why: "Scatter never proves causation." }, { id: "c", text: "The average of each variable", correct: false, why: "That's a separate summary." }], formalName: "scatter plots and correlation (positive / negative / none; correlation ≠ causation)" },
    stretch: "From two variables that co-vary to the language of CHANCE itself. Next: placing probability on a 0-to-1 line.", 
  },
};
