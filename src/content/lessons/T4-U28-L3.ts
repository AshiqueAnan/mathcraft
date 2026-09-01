import type { Lesson } from "../schema";

export const T4U28L3: Lesson = {
  // @meta
  id: "T4-U28-L3",
  tier: 4,
  unit: "Data & averages",
  title: "Reading Charts Like a Skeptic",
  prerequisites: ["T3-U27-L3","T4-U28-L1","T4-U28-L2"],
  estimatedMinutes: 13,
  hook: { question: "A bar chart 'shows' profits rocketing — but the axis starts at 90, not 0, so a 4% rise looks like a quadrupling. Charts can warp the truth through truncated axes, misleading proportions, or slicing pie charts oddly. A skeptic reads the scale, the labels, and the baseline before believing the picture.", type: "real-world" },
  intuitionBlocks: [{ widget: "fraction-circles", props: { mode: "sweep" }, narrative: "Shade a pie slice and rescale the whole circle: a 'half' shown on a halved circle can look bigger than a 'half' on a full one. Then compare bar segments with a shifted baseline — same data, wildly different visuals. Drag the representations and see how framing changes the story." }],

  // @discovery
  formalBlocks: [{ definition: "Reading charts critically: (1) CHECK THE BASELINE — a bar chart that starts at 90 instead of 0 exaggerates small changes. (2) CHECK THE SCALE — pie slices must reflect true proportions; two charts comparing sizes must use the same scale. (3) CHECK THE LABELS — axes, units, and footnotes. (4) RANGE vs spread: range = max−min, a quick sense of spread before deeper measures.", examples: ["Profits 100 → 104 looks like a 4x leap if the axis starts at 100.", "Pie charts: a 25% slice on a zoomed circle can look as big as 50% on a full one."], pitfall: "Don't judge bar heights by EYE — read the numbers on the axis. A chart with a truncated axis and no baseline label is a red flag that the visual is doing the arguing, not the data.", altExplanations: ["GAME: chart skepticism is an anti-cheat check — a bar chart starting at 90 instead of 0 makes a 100→104 profit look like a quadruple. Check baseline, check scale, check axis labels before believing the visual.", "FOOD: menu photos lie the same way — zoomed-in 25% slice can photograph as big as an honest 50% slice. Range = max − min gives a quick spread check before deeper measures."] }],
  gutChecks: [{ prompt: "What's the first thing to check on any bar chart?", answer: "The baseline — if it doesn't start at 0, proportional comparisons are misleading." }],
  quiz: {
    pool: [
      // @q01
      { id: "U28L3-mcq-1", type: "mcq", category: "procedural", prompt: "Sales 100 → 106 on a bar chart with axis starting at 100. The bars LOOK like…", options: [ { id: "a", text: "6× growth — hugely exaggerated" }, { id: "b", text: "6% growth — accurate" }, { id: "c", text: "no growth" }, { id: "d", text: "decline" } ], correctOptionId: "a", diagnoses: { b: "The axis should start at 0 to show 6% honestly.", c: "The bars visibly differ.", d: "106 > 100, so it's not a decline." }, explanation: "Truncating the baseline at 100 makes the 6-unit rise look six times the whole bar.", hints: ["Baseline 90/100.", "Exaggerates.", "Truncating the baseline at 100 makes the 6-unit rise look six times the whole bar."] },
      // @q02
      { id: "U28L3-mcq-2", type: "mcq", category: "conceptual", prompt: "The FIRST thing to check on a bar chart is…", options: [ { id: "a", text: "the colors" }, { id: "b", text: "whether the baseline starts at 0" }, { id: "c", text: "the title only" }, { id: "d", text: "the file name" } ], correctOptionId: "b", diagnoses: { a: "Colors are cosmetic.", c: "A title can spin the same data.", d: "File names don't verify data." }, explanation: "A non-zero baseline is the classic scaling trick.", hints: ["Baseline.", "Starts at 0?", "A non-zero baseline is the classic scaling trick."] },
      // @q03
      { id: "U28L3-mcq-3", type: "mcq", category: "word", prompt: "Two regions: A grows 5%, B grows 7%. A chart has B's bar twice as tall as A's, with axis 0–100. The bar lengths say…", options: [ { id: "a", text: "Both grew the same" }, { id: "b", text: "B is exactly 2× A's data" }, { id: "c", text: "B ≈ 7 vs A ≈ 5 — the heights mislead because bars scaled oddly" }, { id: "d", text: "A grew more" } ], correctOptionId: "c", diagnoses: { b: "7 vs 5 is not 2×.", a: "The data differs.", d: "A is smaller." }, explanation: "The bars don't match the axis values — a red flag in the visual encoding.", hints: ["Compare heights to scale.", "B ≈ 7.", "Misleading bars."] },
      // @q04
      { id: "U28L3-mcq-4", type: "mcq", category: "procedural", prompt: "Test scores: 60, 70, 80, 90, 100. The RANGE is…", options: [ { id: "a", text: "20" }, { id: "b", text: "80" }, { id: "c", text: "100" }, { id: "d", text: "40" } ], correctOptionId: "d", diagnoses: { b: "80 is the median.", c: "100 is the max only.", a: "20 is one gap." }, explanation: "Range = max − min = 100 − 60 = 40.", hints: ["Max minus min.", "100 − 60.", "Range = max − min = 100 − 60 = 40."] },
      // @q05
      { id: "U28L3-mcq-5", type: "mcq", category: "conceptual", prompt: "A pie chart with a 30% slice shown on a zoomed circle looks…", options: [ { id: "a", text: "like a larger share than it is" }, { id: "b", text: "like exactly 30%" }, { id: "c", text: "like a smaller share" }, { id: "d", text: "unrelated to the data" } ], correctOptionId: "a", diagnoses: { b: "Only with a full fixed circle does angle = proportion.", c: "Zooming inflates the apparent share.", d: "It's still 30% — but the eye is fooled." }, explanation: "Zooming a pie keeps the angle but inflates apparent size — always check the circle's scale.", hints: ["Angle vs size.", "Zoom inflates.", "Zooming a pie keeps the angle but inflates apparent size — always check the circle's scale."] },
      // @q06
      { id: "U28L3-mcq-6", type: "mcq", category: "word", prompt: "A headline bar chart shows 'debt crisis!' — a 2-unit rise from a 100-unit base with axis starting at 98. The true story is…", options: [ { id: "a", text: "debt doubling" }, { id: "b", text: "a tiny 2% increase over a large baseline" }, { id: "c", text: "debt tripling" }, { id: "d", text: "no change" } ], correctOptionId: "b", diagnoses: { a: "100→102 is a 2% rise, not double.", c: "Tripling would need ≈ 300.", d: "There is a small change." }, explanation: "Read the numbers, not the visual: 102 ÷ 100 = a 2% rise.", hints: ["102 vs 100.", "2% rise.", "Read the numbers, not the visual: 102 ÷ 100 = a 2% rise."] },
      // @q07
      { id: "U28L3-num-1", type: "numeric-input", category: "procedural", prompt: "Scores: 12, 15, 20, 25, 30. Range = …", answer: 18, tolerance: 0, explanation: "30 − 12 = 18.", hints: ["Max − min.", "30 − 12.", "30 − 12 = 18."] },
      // @q08
      { id: "U28L3-num-2", type: "numeric-input", category: "procedural", prompt: "A pie shows 25% of students prefer blue (90° slice). The angle of the slice in degrees = …", answer: 90, tolerance: 0, unit: "°", explanation: "25% of 360° = 90°.", hints: ["25% of 360.", "0.25 × 360.", "25% of 360° = 90°."] },
      // @q09
      { id: "U28L3-num-3", type: "numeric-input", category: "conceptual", prompt: "Two identical percentages: bar A uses a 0–100 axis, bar B a 0–10 axis. Same data → the bar LOOKS 10× bigger on B. The honest way is same axis. If A's height on axis is 40, what fraction of the axis does it span?", answer: 0.4, tolerance: 0.01, acceptFractions: true, explanation: "40 out of 100 = 40% = 0.4 of the axis.", hints: ["40/100.", "0.4.", "40 out of 100 = 40% = 0."] },
      // @q10
      { id: "U28L3-frac-1", type: "fraction-input", category: "conceptual", prompt: "A bar chart shows 30 of 60 students. What fraction of students does the bar represent?", numerator: 1, denominator: 2, acceptEquivalent: true, explanation: "30/60 = 1/2.", hints: ["30 over 60.", "1/2.", "30/60 = 1/2."] },
      // @q11
      { id: "U28L3-tf-1", type: "true-false-justify", category: "conceptual", prompt: "A bar chart starting its axis at 0 always tells the honest proportional story.", isTrue: true, explanation: "Zero baseline keeps bar heights proportional to values.", hints: ["Baseline 0.", "Proportional.", "Zero baseline keeps bar heights proportional to values."] },
      // @q12
      { id: "U28L3-tf-2", type: "true-false-justify", category: "conceptual", prompt: "Range measures spread: the gap between the biggest and smallest values.", isTrue: true, explanation: "Range = max − min, the quickest spread measure.", hints: ["Max − min.", "Spread.", "Range = max − min, the quickest spread measure."] },
      // @q13
      { id: "U28L3-order-1", type: "order-steps", category: "word", prompt: "Order the steps to read a chart skeptically.", sequence: ["Check the baseline starts at 0", "Read the axis numbers, not the bar heights", "Compare across the same scale"], diagnoses: { "Check the baseline starts at 0@1": "Baseline first.", "Read the axis numbers, not the bar heights@0": "Then the numbers.", "Compare across the same scale@0": "Compare last." }, explanation: "Baseline, numbers, scale.", hints: ["0 baseline.", "Read numbers.", "Baseline, numbers, scale."] },
      // @q14
      { id: "U28L3-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each chart check to its purpose.", pairs: [ { source: "Baseline", target: "detect truncation" }, { source: "Pie angles", target: "verify proportions" }, { source: "Axis labels", target: "know the units" } ], diagnoses: { "Baseline->verify proportions": "Baseline detects truncation tricks.", "Pie angles->detect truncation": "Angles verify proportion in pies.", "Axis labels->detect truncation": "Labels reveal units and scale." }, explanation: "Each check guards a different kind of distortion.", hints: ["Baseline = truncation.", "Angles = proportions.", "Labels = units."] },
      // @q15
      { id: "U28L3-graph-1", type: "graph-interact", category: "word", prompt: "Scores: 5, 8, 12, 20. Set the slider to the RANGE (key: value).", challenge: "Scores: 5, 8, 12, 20. — adjust the values below to match the condition.", validate: { value: 15 }, tolerance: 0.01, explanation: "Range = 20 − 5 = 15.", hints: ["20 − 5.", "15.", "Range = 20 − 5 = 15."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "judges bar sizes by eye", diagnosis: "Visual height can lie — read the axis numbers.", hint: "Numbers, not eyes." },
    { wrongPattern: "ignores truncated axes", diagnosis: "A non-zero baseline exaggerates small changes.", hint: "Check for 0." },
    { wrongPattern: "confuses range with average", diagnosis: "Range is max−min spread; averages locate the centre.", hint: "Spread vs centre." },
  ],
  recallTags: ["charts", "axis", "baseline", "range", "skeptic"],
  discovery: {
    challenges: [
      { instruction: "Rescale a pie slice circle and compare apparent sizes.", observe: "Same 30% angle can look bigger or smaller with zoom." },
      { instruction: "Shift a bar chart's baseline from 0 to 95.", observe: "The same tiny rise suddenly towers — the axis did the lying." },
    ],
    predict: { prompt: "Bars show 50 and 52 with axis 50–54. The visual suggests…", options: [{ id: "a", text: "52 is nearly double 50" }, { id: "b", text: "52 is 4% more" }, { id: "c", text: "they're equal" }], reveal: "52 looks nearly double because the axis is squeezed into 50–54. The true rise is just 4%." },
    sayItYourWay: { prompt: "How do you read a chart honestly?", phrasings: [{ id: "a", text: "Check scale and baseline, then read the numbers", correct: true, why: "The numbers are the data; the picture can distort." }, { id: "b", text: "Trust the tallest bar", correct: false, why: "A truncated axis can make a small bar look huge." }, { id: "c", text: "Only read the title", correct: false, why: "Titles can spin the same numbers." }], formalName: "chart literacy — baseline, scale, labels; range = max − min" },
    stretch: "Charts show one variable at a time — but what about TWO interacting? Next: scatter plots and the tricky idea of correlation.", 
  },
};
