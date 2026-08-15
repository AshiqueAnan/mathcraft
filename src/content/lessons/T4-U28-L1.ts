import type { Lesson } from "../schema";

export const T4U28L1: Lesson = {
  // @meta
  id: "T4-U28-L1",
  tier: 4,
  unit: "Data & averages",
  title: "Three Ways to Be Average",
  prerequisites: ["T1-U5-L1","T3-U27-L3"],
  estimatedMinutes: 12,
  hook: { question: "Ask 'what's the average height?' and you could mean three different things: the mean (split the total evenly), the median (the middle person in a line), or the mode (the most common height). They can sit in three different places on the same data — and each tells a different story.", type: "puzzle" },
  intuitionBlocks: [{ widget: "graph-plotter", narrative: "Plot heights as dots on a number line. Move one dot an inch left: the MEAN chases it, the MEDIAN barely shrugs, the MODE only cares if a value repeats most often. Drag a cluster and watch which average moves — that's the fingerprint of each measure." }],

  // @discovery
  formalBlocks: [{ definition: "MEAN = sum ÷ how many (the fair share). MEDIAN = the middle value when data is sorted (average of the two middles for an even count). MODE = the value that appears most often. For data 2, 3, 3, 4, 8: mean = 20 ÷ 5 = 4; median = 3; mode = 3. A single extreme point drags the mean far but leaves the median nearly untouched.", examples: ["Data 2, 3, 3, 4, 8: mean = 20/5 = 4; median = 3; mode = 3.", "Data 1, 2, 2, 9: mean = 14/4 = 3.5; median = (2+2)/2 = 2; mode = 2."], pitfall: "Don't sort the data for the mean — order doesn't matter when summing. But the MEDIAN REQUIRES sorting first; find the middle of the ordered list, or the average of the two middles.", altExplanations: ["GAME: mean is the fair share of loot — pour the total into equal piles (sum ÷ count); median is the middle player's pickup when sorted; mode is the most common drop. One player with a mega-loot (8) drags the mean far right while the median barely blinks.", "MONEY: mean is splitting the total bill equally, median is the middle earner's salary when everyone lines up, mode is the most common salary. An extreme outlier always pulls the mean, never the middle."] }],
  gutChecks: [{ prompt: "Which average is most sensitive to one extreme value?", answer: "The mean — it averages every value in, so a single huge/small point pulls it. The median depends only on the middle, so extremes barely move it." }],
  quiz: {
    pool: [
      // @q01
      { id: "U28L1-mcq-1", type: "mcq", category: "procedural", prompt: "Data: 2, 3, 3, 4, 8. The MEAN is…", options: [ { id: "a", text: "4" }, { id: "b", text: "3" }, { id: "c", text: "20" }, { id: "d", text: "5" } ], correctOptionId: "a", diagnoses: { b: "3 is the median, not the mean.", c: "20 is the SUM, not the mean.", d: "5 is the count." }, explanation: "Mean = 20 ÷ 5 = 4.", hints: ["Sum ÷ count.", "20 ÷ 5.", "4."] },
      // @q02
      { id: "U28L1-mcq-2", type: "mcq", category: "conceptual", prompt: "The median requires you to…", options: [ { id: "a", text: "sort the data first" }, { id: "b", text: "add then divide" }, { id: "c", text: "find the most frequent value" }, { id: "d", text: "double the biggest value" } ], correctOptionId: "a", diagnoses: { b: "Adding then dividing is the mean.", c: "The most frequent value is the mode.", d: "Doubling is meaningless here." }, explanation: "Median = middle of the SORTED list.", hints: ["Order it.", "Middle value.", "Sort first."] },
      // @q03
      { id: "U28L1-mcq-3", type: "mcq", category: "word", prompt: "Heights (cm): 150, 152, 152, 155, 160, 195. Best 'typical' height?", options: [ { id: "a", text: "Median 153.5" }, { id: "b", text: "Mean ≈ 160.7" }, { id: "c", text: "Mode 150" }, { id: "d", text: "Max 195" } ], correctOptionId: "a", diagnoses: { b: "The 195 outlier inflates the mean beyond most values.", c: "150 appears only once — mode is 152.", d: "The max is an outlier, not typical." }, explanation: "The outlier drags the mean up; the sorted middle (152+155)/2 = 153.5 is more typical.", hints: ["Outlier = bias.", "Use the middle.", "Median 153.5."] },
      // @q04
      { id: "U28L1-mcq-4", type: "mcq", category: "procedural", prompt: "Data: 1, 2, 2, 9. The MEDIAN is…", options: [ { id: "a", text: "2" }, { id: "b", text: "3.5" }, { id: "c", text: "14" }, { id: "d", text: "9" } ], correctOptionId: "a", diagnoses: { b: "3.5 is the MEAN (14÷4).", c: "14 is the sum.", d: "9 is the outlier." }, explanation: "Sorted: 1, 2, 2, 9 → middle two are 2 and 2 → median = (2+2)/2 = 2.", hints: ["Two middles.", "2 and 2.", "2."] },
      // @q05
      { id: "U28L1-mcq-5", type: "mcq", category: "conceptual", prompt: "Add an extreme 100 to a dataset. The average MOST affected is the…", options: [ { id: "a", text: "mean" }, { id: "b", text: "median" }, { id: "c", text: "mode" }, { id: "d", text: "none" } ], correctOptionId: "a", diagnoses: { b: "The median only shifts by position, not magnitude.", c: "The mode only cares about frequency, not size.", d: "The mean definitely moves." }, explanation: "The mean sums ALL values, so one extreme drags it.", hints: ["Sums everything.", "Mean.", "Mean."] },
      // @q06
      { id: "U28L1-mcq-6", type: "mcq", category: "word", prompt: "Shoe sizes: 5, 6, 6, 7, 8, 8, 8. The MODE is…", options: [ { id: "a", text: "8" }, { id: "b", text: "6" }, { id: "c", text: "6.857" }, { id: "d", text: "7" } ], correctOptionId: "a", diagnoses: { b: "6 appears twice; 8 appears three times.", c: "6.857 is the MEAN.", d: "7 is the middle, not the most frequent." }, explanation: "8 appears 3 times — the most frequent value.", hints: ["Count repeats.", "8 three times.", "8."] },
      // @q07
      { id: "U28L1-num-1", type: "numeric-input", category: "procedural", prompt: "Scores: 3, 4, 5, 5, 8. Mean = …", answer: 5, tolerance: 0, explanation: "Sum 25 ÷ 5 = 5.", hints: ["Sum then divide.", "25 ÷ 5.", "5."] },
      // @q08
      { id: "U28L1-num-2", type: "numeric-input", category: "procedural", prompt: "Scores: 3, 4, 5, 5, 8. Median = …", answer: 5, tolerance: 0, explanation: "Sorted middle is 5.", hints: ["Middle of sorted list.", "5.", "5."] },
      // @q09
      { id: "U28L1-num-3", type: "numeric-input", category: "conceptual", prompt: "Data: 10, 20, 30. Add one number x so the mean becomes 25. x = …", answer: 40, tolerance: 0, explanation: "(60 + x) ÷ 4 = 25 → 60 + x = 100 → x = 40.", hints: ["4 × 25 = 100.", "100 − 60.", "40."] },
      // @q10
      { id: "U28L1-frac-1", type: "fraction-input", category: "conceptual", prompt: "The median of an even count (e.g. 2 and 2) averages them. For 1, 2, 2, 9 the median (2) is what fraction of the pair (2+2=4)?", numerator: 1, denominator: 2, acceptEquivalent: true, explanation: "Median 2 = half of the middle pair's sum 4.", hints: ["2 of 4.", "1/2.", "1/2."] },
      // @q11
      { id: "U28L1-tf-1", type: "true-false-justify", category: "conceptual", prompt: "The median resists extreme outliers better than the mean.", isTrue: true, explanation: "Only the middle value matters — magnitude of extremes doesn't touch it.", hints: ["Middle only.", "Outlier-proof.", "True."] },
      // @q12
      { id: "U28L1-tf-2", type: "true-false-justify", category: "conceptual", prompt: "The mode requires sorting the data.", isTrue: false, explanation: "The mode counts frequencies — sorting isn't needed (though it helps).", hints: ["Count repeats.", "No sorting needed.", "False."] },
      // @q13
      { id: "U28L1-order-1", type: "order-steps", category: "word", prompt: "Order the steps to find the median of 7, 3, 5, 9, 5.", sequence: ["Sort: 3, 5, 5, 7, 9", "Find the middle position (3rd)", "Median = 5"], diagnoses: { "Sort: 3, 5, 5, 7, 9@1": "Sort first.", "Find the middle position (3rd)@0": "Then the middle.", "Median = 5@0": "State it last." }, explanation: "Sort, locate the middle, read the value.", hints: ["3, 5, 5, 7, 9.", "3rd value.", "5."] },
      // @q14
      { id: "U28L1-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each average to its method.", pairs: [ { source: "Mean", target: "sum ÷ count" }, { source: "Median", target: "middle of sorted data" }, { source: "Mode", target: "most frequent value" } ], diagnoses: { "Mean->middle of sorted data": "Mean sums and divides.", "Median->most frequent value": "Median is the middle.", "Mode->sum ÷ count": "Mode counts repeats." }, explanation: "Each average answers a different question.", hints: ["Mean = ÷.", "Median = middle.", "Mode = frequent."] },
      // @q15
      { id: "U28L1-graph-1", type: "graph-interact", category: "word", prompt: "Pet counts: 1, 1, 1, 2, 5. Set the slider to the MODE (key: value).", challenge: "Set the slider to 1.", validate: { value: 1 }, tolerance: 0.01, explanation: "1 appears three times — the mode.", hints: ["Most frequent.", "1.", "1."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "computes the mean when asked for median", diagnosis: "Mean divides the total; median takes the sorted middle — different questions.", hint: "Mean = ÷, median = middle." },
    { wrongPattern: "forgets to sort before finding median", diagnosis: "Unsorted middles aren't the median — order the list first.", hint: "Sort then middle." },
    { wrongPattern: "says the mode is the average of repeated values", diagnosis: "Mode is the VALUE with most repeats, not an average of them.", hint: "Count, don't average." },
  ],
  recallTags: ["mean", "median", "mode", "average", "outlier"],
  discovery: {
    challenges: [
      { instruction: "Plot dots and push one dot far to the right.", observe: "The mean chases the dot; the median barely moves." },
      { instruction: "Add a repeated value to create a mode.", observe: "The mode is just the tallest stack — size of values irrelevant." },
    ],
    predict: { prompt: "Data 2, 4, 6, 8, 100 — the best 'typical' value is…", options: [{ id: "a", text: "Median 6" }, { id: "b", text: "Mean 24" }, { id: "c", text: "Mode 100" }], reveal: "Median 6 — the 100 is a lone outlier yanking the mean to 24. The median reads the crowd, not the outlier." },
    sayItYourWay: { prompt: "What's the difference between mean and median?", phrasings: [{ id: "a", text: "Mean splits the total evenly; median finds the middle person", correct: true, why: "One divides the sum, one locates the middle." }, { id: "b", text: "They're the same number always", correct: false, why: "They differ whenever data is skewed." }, { id: "c", text: "Mean is the most common value", correct: false, why: "That's the mode." }], formalName: "mean (sum ÷ count), median (middle of sorted data), mode (most frequent value)" },
    stretch: "Averages can be quoted to mislead — one outlier, or a deliberately chosen measure. Next: when averages lie.", 
  },
};
