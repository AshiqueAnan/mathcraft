import type { Lesson } from "../schema";

export const T4U28L2: Lesson = {
  // @meta
  id: "T4-U28-L2",
  tier: 4,
  unit: "Data & averages",
  title: "When Averages Lie",
  prerequisites: ["T3-U27-L3","T4-U28-L1"],
  estimatedMinutes: 12,
  hook: { question: "A company says 'average salary $80,000' — but a handful of executives earn millions while most staff make $40k. The mean gets yanked upward, hiding the typical worker. Picking mean vs median is a choice with consequences: you can tell the truth and still mislead.", type: "real-world" },
  intuitionBlocks: [{ widget: "number-line", narrative: "Place salaries as dots on a line. One giant outlier far right: the mean jumps way past where most dots sit, while the median stays near the crowd. Slide the outlier and watch the mean chase it — that's how a single number can misrepresent a whole dataset." }],

  // @discovery
  formalBlocks: [{ definition: "Averages mislead when the data is SKEWED (pulled to one side). The mean is dragged toward the tail by outliers; the median ignores tail magnitude; the mode shows what's genuinely common. Choose the measure that answers the real question: 'typical worker' → median; 'total budget per person' → mean; 'most common' → mode. Always report the spread too.", examples: ["Salaries 40k, 42k, 45k, 50k, 3M: mean ≈ $635k vs median $45k — huge gap from one outlier.", "Housing prices: median is the honest 'typical home' because mansions inflate the mean."], pitfall: "Calling the mean 'average' without noting outliers is the classic trick. In skewed data, always ask: which average — and what does the tail look like?", altExplanations: ["GAME: average health bars lie — 5 players at 40, 42, 45, 50 and one boss at 3000: the mean says 'about 630' but the median says 45, which matches what most players actually have. Big outliers sucker the mean; the median ignores their size.", "MONEY: a town meeting quotes 'average income $635k' — that's the mean dragged up by one billionaire. The median $45k is the honest 'typical' salary. Always ask which average was quoted and what the tail looks like."] }],
  gutChecks: [{ prompt: "Why does the median often beat the mean for income data?", answer: "A few very high earners drag the mean up but don't move the middle — the median reports what a typical earner actually makes." }],
  quiz: {
    pool: [
      // @q01
      { id: "U28L2-mcq-1", type: "mcq", category: "procedural", prompt: "Salaries: 40k, 42k, 45k, 50k, 3M. The MEAN ≈ …", options: [ { id: "a", text: "$635k" }, { id: "b", text: "$45k" }, { id: "c", text: "$50k" }, { id: "d", text: "$3M" } ], correctOptionId: "a", diagnoses: { b: "45k is the MEDIAN.", c: "50k is the max of the non-outliers.", d: "3M is one salary, not the average." }, explanation: "Sum ≈ 3.177M ÷ 5 ≈ $635k — dragged up by the outlier.", hints: ["Sum ÷ 5.", "≈ $635k.", "$635k."] },
      // @q02
      { id: "U28L2-mcq-2", type: "mcq", category: "conceptual", prompt: "For 'typical worker salary' the honest choice is…", options: [ { id: "a", text: "median" }, { id: "b", text: "mean" }, { id: "c", text: "mode" }, { id: "d", text: "max" } ], correctOptionId: "a", diagnoses: { b: "The mean is inflated by executives.", c: "Mode shows the most common single value — useful but blunt.", d: "Max describes the richest, not the typical." }, explanation: "The median sits at the middle worker — immune to the executive tail.", hints: ["Middle worker.", "Median.", "Median."] },
      // @q03
      { id: "U28L2-mcq-3", type: "mcq", category: "word", prompt: "A news headline: 'House prices average $900k!' — but most homes sell ~$350k. The reporter likely used the…", options: [ { id: "a", text: "mean, skewed by a few mansions" }, { id: "b", text: "median, correctly" }, { id: "c", text: "mode, correctly" }, { id: "d", text: "range, correctly" } ], correctOptionId: "a", diagnoses: { b: "The median would be near $350k.", c: "The mode is the most common price, not the average.", d: "The range is min-to-max, not an average." }, explanation: "A few extreme sales inflate the mean while the bulk stays low.", hints: ["Mansions skew.", "Mean.", "Mean."] },
      // @q04
      { id: "U28L2-mcq-4", type: "mcq", category: "procedural", prompt: "Data: 100, 105, 110, 115. Remove the outlier 1000 from 100, 105, 110, 115, 1000. The MEDIAN…", options: [ { id: "a", text: "barely changes" }, { id: "b", text: "doubles" }, { id: "c", text: "becomes 1000" }, { id: "d", text: "becomes 0" } ], correctOptionId: "a", diagnoses: { b: "Median doesn't scale with values.", c: "1000 is the outlier, not the middle.", d: "No value becomes zero." }, explanation: "With 1000: median = 110; without: median = 107.5 — a small shift.", hints: ["Middle values only.", "110 vs 107.5.", "Barely changes."] },
      // @q05
      { id: "U28L2-mcq-5", type: "mcq", category: "conceptual", prompt: "When data is right-skewed (a long tail of big values), the mean is usually…", options: [ { id: "a", text: "greater than the median" }, { id: "b", text: "less than the median" }, { id: "c", text: "equal to the mode" }, { id: "d", text: "zero" } ], correctOptionId: "a", diagnoses: { b: "The tail pulls the mean UP, not down.", c: "Mode is about frequency, not location.", d: "Means can't vanish." }, explanation: "The tail drags the mean right of the median.", hints: ["Tail pulls.", "Mean > median.", "Greater."] },
      // @q06
      { id: "U28L2-mcq-6", type: "mcq", category: "word", prompt: "A store averages 100 customers/day except Sundays (all staff + families = 600). Best 'busy typical day' summary?", options: [ { id: "a", text: "Median ≈ 100 from the six ordinary days" }, { id: "b", text: "Mean ≈ 171 customers" }, { id: "c", text: "Mode = 600" }, { id: "d", text: "Range = 100" } ], correctOptionId: "a", diagnoses: { b: "The Sunday outlier drags the mean up to 171.", c: "600 happens only once — it's not common.", d: "Range is min-to-max spread, not typical." }, explanation: "Six days near 100 with one 600-day: the median stays near the ordinary.", hints: ["Sunday skews.", "Use the middle.", "Median ≈ 100."] },
      // @q07
      { id: "U28L2-num-1", type: "numeric-input", category: "procedural", prompt: "Data: 2, 3, 3, 4, 88. Median = …", answer: 3, tolerance: 0, explanation: "Sorted: 2, 3, 3, 4, 88 → middle is 3.", hints: ["Sorted middle.", "3.", "3."] },
      // @q08
      { id: "U28L2-num-2", type: "numeric-input", category: "procedural", prompt: "Same data: 2, 3, 3, 4, 88. Mean = …", answer: 20, tolerance: 0, explanation: "Sum 100 ÷ 5 = 20 — yanked up by 88.", hints: ["100 ÷ 5.", "20.", "20."] },
      // @q09
      { id: "U28L2-num-3", type: "numeric-input", category: "conceptual", prompt: "Add one huge value to 1, 2, 3, 4. The median of the 5 sorted values stays 3 because the 3rd position never moves. The added value can be as small as what number without becoming the median?", answer: 4, tolerance: 0, explanation: "With 5 sorted values the median is the 3rd. The added value ≥ 4 becomes the 5th, so the 3rd stays 3 — the outlier's SIZE doesn't matter, only that it doesn't displace the middle.", hints: ["5th position.", "Median is the 3rd.", "≥ 4."] },
      // @q10
      { id: "U28L2-frac-1", type: "fraction-input", category: "conceptual", prompt: "In 1, 2, 2, 100 the mean is 26.25 but the median is 2. What fraction of the data lies at or below the median? (2 of 4 values)", numerator: 1, denominator: 2, acceptEquivalent: true, explanation: "Values 1 and 2 (two of four) sit at/below the median 2 → 1/2.", hints: ["2 of 4.", "1/2.", "1/2."] },
      // @q11
      { id: "U28L2-tf-1", type: "true-false-justify", category: "conceptual", prompt: "The mean can be greater than every value except the outlier in a right-skewed set.", isTrue: true, explanation: "A huge outlier drags the mean above most points — that's the lie.", hints: ["Outlier pulls.", "Mean above crowd.", "True."] },
      // @q12
      { id: "U28L2-tf-2", type: "true-false-justify", category: "conceptual", prompt: "Quoting the mean without checking for outliers is always misleading.", isTrue: false, explanation: "In symmetric data the mean is fine — it's skewed data where it misleads.", hints: ["Symmetric = fine.", "Skewed = check.", "False — depends."] },
      // @q13
      { id: "U28L2-order-1", type: "order-steps", category: "word", prompt: "Order the steps to spot a misleading average.", sequence: ["Look at the data's shape (spread + outliers)", "Compute mean and median", "Compare them — big gap means skew"], diagnoses: { "Look at the data's shape (spread + outliers)@1": "Inspect the distribution first.", "Compute mean and median@0": "Then both averages.", "Compare them — big gap means skew@0": "Compare last." }, explanation: "Inspect, compute both, compare for skew.", hints: ["Shape first.", "Mean + median.", "Compare gap."] },
      // @q14
      { id: "U28L2-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each question to the average to use.", pairs: [ { source: "Total budget per employee", target: "mean" }, { source: "Typical income", target: "median" }, { source: "Most common shoe size", target: "mode" } ], diagnoses: { "Total budget per employee->median": "Budget divides the total fairly — mean.", "Typical income->mode": "Income skew needs the median.", "Most common shoe size->mean": "Most frequent = mode." }, explanation: "The question decides the measure.", hints: ["Budget = mean.", "Typical = median.", "Common = mode."] },
      // @q15
      { id: "U28L2-graph-1", type: "graph-interact", category: "word", prompt: "Data 4, 6, 8, 10, 100: set the slider to the MEDIAN (key: value).", challenge: "Set the slider to 8.", validate: { value: 8 }, tolerance: 0.01, explanation: "Sorted: 4, 6, 8, 10, 100 → median = 8.", hints: ["Sorted middle.", "8.", "8."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "quotes mean without mentioning outliers", diagnosis: "Skewed means misrepresent the typical value — always note the tail.", hint: "Check for skew." },
    { wrongPattern: "always picks the mean", diagnosis: "'Average' is ambiguous: mean/median/mode answer different questions.", hint: "Which question are you answering?" },
    { wrongPattern: "thinks mode handles outliers", diagnosis: "Mode shows frequency; the outlier's SIZE still doesn't register — mode isn't the fix.", hint: "Median resists size; mode resists frequency." },
  ],
  recallTags: ["skew", "outlier", "median", "mean", "misleading"],
  discovery: {
    challenges: [
      { instruction: "Place an outlier far right and watch mean vs median.", observe: "Mean chases the outlier; median stays with the crowd." },
      { instruction: "Try shrinking the outlier back into the pack.", observe: "Mean and median converge — the gap shrinks with the skew." },
    ],
    predict: { prompt: "Five incomes: 30k, 35k, 40k, 45k, 5M. The 'average' most people earn is…", options: [{ id: "a", text: "≈ 40k (median)" }, { id: "b", text: "≈ $1.03M (mean)" }, { id: "c", text: "≈ 43k (mode)" }], reveal: "≈ 40k — the median. The mean's $1.03M is inflated by one billionaire's paycheck, and no single salary repeats to form a mode." },
    sayItYourWay: { prompt: "When can an average 'lie'?", phrasings: [{ id: "a", text: "When outliers skew the mean away from what's typical", correct: true, why: "The mean is heavy-tailed; the median resists." }, { id: "b", text: "Averages are always truthful", correct: false, why: "The choice of measure can misrepresent." }, { id: "c", text: "Only when data is completely wrong", correct: false, why: "Correct data can still be quoted misleadingly." }], formalName: "skew and outliers — mean vs median choice determines what an 'average' really says" },
    stretch: "Averages hide the story in the SHAPE of data. Next: reading charts skeptically — truncated axes and misleading visuals.", 
  },
};
