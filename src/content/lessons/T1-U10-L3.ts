import type { Lesson } from "../schema";

export const T1U10L3: Lesson = {
  // @meta
  id: "T1-U10-L3",
  tier: 1,
  unit: "Sets",
  title: "Venn Word Problems",
  prerequisites: ["T1-U10-L1","T1-U10-L2","T1-U9-L3"],
  estimatedMinutes: 12,
  hook: {
    question: "A survey of 20 students: 12 like tea, 8 like coffee, 5 like both. How many like NO hot drink? Most people add 12 + 8, subtract 5, then forget the '20 students' part — the last region of the Venn (the outside) hides the answer.",
    type: "puzzle",
  },
  intuitionBlocks: [{ widget: "fraction-bars", narrative: "Think of the whole bar as the 20 students. Split it into four regions: tea only, coffee only, both, and neither. Each region is a slice of the same total — once every student is placed in exactly one slice, the bar always sums to 20. Fill the known slices first, then the outside slice is whatever is left over." }],

  // @discovery
  formalBlocks: [
    { definition: "A Venn word problem gives totals and an overlap, and asks about the regions: 'both', 'A only' ($|A| - |A \\cap B|$), 'B only' ($|B| - |A \\cap B|$), and 'neither' (universe $|U|$ minus the union). The reliable order is: write the overlap, subtract it from each total to get the 'only' slices, add all three, then subtract from the universe to find the outside region.", examples: ["20 students, 12 like tea, 8 like coffee, 5 both: tea-only = 12 − 5 = 7, coffee-only = 8 − 5 = 3, union = 7 + 3 + 5 = 15, neither = 20 − 15 = 5.", "30 people, 18 read books, 14 watch films, 6 do both: books-only = 12, films-only = 8, neither = 30 − (12 + 8 + 6) = 4."], pitfall: "Never use a given total as a region directly — '12 like tea' includes the 5 who also like coffee. Subtract the overlap first: the tea-only slice is 7, not 12. And never forget the outside region when the universe is given.", altExplanations: ["FOOD: 20 guests, 12 like tea, 8 like coffee, 5 like both — the 5 sit in the overlap. Tea-only is 12 − 5 = 7, coffee-only 8 − 5 = 3; union = 7+3+5 = 15, so neither = 20 − 15 = 5. Never treat '12 like tea' as tea-only.", "GAME: 30 players, 18 own a sword, 14 own a bow, 6 own both — sword-only 12, bow-only 8, union 26, neither 4. The given totals include the overlap; subtract it from each total BEFORE adding the slices."] },
  ],
  gutChecks: [{ prompt: "20 students, 12 like tea, 8 like coffee, 5 both. How many like both tea and coffee?", answer: "5 — that's the overlap, given directly; the trap is forgetting it's inside both totals." }],
  quiz: {
    pool: [
      // @q01
      { id: "U10L3-mcq-1", type: "mcq", category: "procedural", prompt: "20 students: 12 like tea, 8 like coffee, 5 both. How many like tea ONLY?", options: [ { id: "a", text: "7" }, { id: "b", text: "12" }, { id: "c", text: "5" }, { id: "d", text: "17" } ], correctOptionId: "a", diagnoses: { b: "12 includes the 5 who also like coffee — subtract the overlap.", c: "5 is the 'both' count, not tea-only.", d: "17 is the union, not the tea-only slice." }, explanation: "Tea-only = 12 − 5 = 7.", hints: ["Subtract the overlap from the tea total.", "12 − 5.", "Tea-only = 12 − 5 = 7."] },
      // @q02
      { id: "U10L3-mcq-2", type: "mcq", category: "conceptual", prompt: "What is the FIRST region to fill in a Venn word problem?", options: [ { id: "a", text: "The outside" }, { id: "b", text: "The overlap (both)" }, { id: "c", text: "The tea-only slice" }, { id: "d", text: "The whole universe" } ], correctOptionId: "b", diagnoses: { a: "The outside comes LAST — it's what's left.", c: "You need the overlap first to subtract it from the total.", d: "The universe is given, not filled." }, explanation: "Write the overlap first — it's subtracted from both totals.", hints: ["Which count is inside both circles?", "The overlap.", "The 'both' region."] },
      // @q03
      { id: "U10L3-mcq-3", type: "mcq", category: "word", prompt: "30 people: 18 read books, 14 watch films, 6 do both. How many do NEITHER?", options: [ { id: "a", text: "10" }, { id: "b", text: "26" }, { id: "c", text: "4" }, { id: "d", text: "6" } ], correctOptionId: "c", diagnoses: { b: "26 is 32 − 6 — you forgot to subtract from the 30 universe before answering.", a: "Book-only = 12 and film-only = 8 are 20, but the answer needs the outside too.", d: "6 is the overlap, not the outside." }, explanation: "book-only 12 + film-only 8 + both 6 = 26; 30 − 26 = 4 neither.", hints: ["Find the three inside regions first.", "30 − (12 + 8 + 6).", "book-only 12 + film-only 8 + both 6 = 26; 30 − 26 = 4 neither."] },
      // @q04
      { id: "U10L3-mcq-4", type: "mcq", category: "procedural", prompt: "40 people: 15 jog, 20 swim, 8 do both. How many jog ONLY?", options: [ { id: "a", text: "12" }, { id: "b", text: "15" }, { id: "c", text: "8" }, { id: "d", text: "7" } ], correctOptionId: "d", diagnoses: { b: "15 includes the 8 who also swim.", c: "8 is the overlap.", a: "12 is 20 − 8 — the swim-only count." }, explanation: "Jog-only = 15 − 8 = 7.", hints: ["Subtract the overlap from the jog total.", "15 − 8.", "Jog-only = 15 − 8 = 7."] },
      // @q05
      { id: "U10L3-mcq-5", type: "mcq", category: "conceptual", prompt: "Why can't you just add '12 like tea + 8 like coffee' for the number who like at least one?", options: [ { id: "a", text: "The 5 who like both are counted twice" }, { id: "b", text: "Tea-likers are always larger" }, { id: "c", text: "Coffee-likers might not exist" }, { id: "d", text: "Addition is too slow" } ], correctOptionId: "a", diagnoses: { b: "Size of the groups is irrelevant.", c: "Both groups are given.", d: "The issue is double-counting, not speed." }, explanation: "The 5 'both' are inside the tea total AND the coffee total — adding counts them twice.", hints: ["Who appears in both circles?", "The 5 both.", "They get counted twice."] },
      // @q06
      { id: "U10L3-mcq-6", type: "mcq", category: "word", prompt: "A class of 25: 10 play chess, 14 play the piano, 6 do both. How many play NO instrument or game? (Those outside both circles.)", options: [ { id: "a", text: "18" }, { id: "b", text: "7" }, { id: "c", text: "12" }, { id: "d", text: "6" } ], correctOptionId: "b", diagnoses: { a: "18 = 10 + 14 − 6 — that's the union, then you still need 25 − 18.", c: "12 is chess-only — the outside is different.", d: "6 is the overlap, not the outside." }, explanation: "chess-only 4 + piano-only 8 + both 6 = 18; 25 − 18 = 7 neither.", hints: ["Fill the three inside regions first.", "25 − 18.", "chess-only 4 + piano-only 8 + both 6 = 18; 25 − 18 = 7 neither."] },
      // @q07
      { id: "U10L3-num-1", type: "numeric-input", category: "procedural", prompt: "24 students: 10 play tennis, 12 play football, 4 play both. How many play tennis ONLY? Type the number.", answer: 6, tolerance: 0, explanation: "Tennis-only = 10 − 4 = 6.", hints: ["Subtract the overlap from tennis.", "10 − 4.", "Tennis-only = 10 − 4 = 6."] },
      // @q08
      { id: "U10L3-num-2", type: "numeric-input", category: "procedural", prompt: "24 students: 10 play tennis, 12 play football, 4 play both. How many play NEITHER? Type the number.", answer: 6, tolerance: 0, explanation: "Union = 6 + 8 + 4 = 18; neither = 24 − 18 = 6.", hints: ["Find the three inside slices first.", "24 − 18.", "Union = 6 + 8 + 4 = 18; neither = 24 − 18 = 6."] },
      // @q09
      { id: "U10L3-num-3", type: "numeric-input", category: "conceptual", prompt: "50 people surveyed: 20 like apples, 25 like bananas, 10 like both. How many like bananas ONLY? Type the number.", answer: 15, tolerance: 0, explanation: "Bananas-only = 25 − 10 = 15.", hints: ["Subtract the overlap from the banana total.", "25 − 10.", "Bananas-only = 25 − 10 = 15."] },
      // @q10
      { id: "U10L3-frac-1", type: "fraction-input", category: "conceptual", prompt: "A class of 20: 12 like tea, 8 like coffee, 5 like both. What fraction of the class likes NEITHER? (Write it.)", numerator: 1, denominator: 4, acceptEquivalent: true, explanation: "Neither = 20 − 15 = 5, and 5/20 = 1/4.", hints: ["Neither = 5.", "5 out of 20.", "Neither = 20 − 15 = 5, and 5/20 = 1/4."] },
      // @q11
      { id: "U10L3-tf-1", type: "true-false-justify", category: "conceptual", prompt: "20 students, 12 like tea, 8 like coffee, 5 like both: exactly 5 like neither.", isTrue: true, explanation: "Union = 12 + 8 − 5 = 15; neither = 20 − 15 = 5.", hints: ["Compute the union first.", "20 − 15.", "Union = 12 + 8 − 5 = 15; neither = 20 − 15 = 5."] },
      // @q12
      { id: "U10L3-tf-2", type: "true-false-justify", category: "conceptual", prompt: "In the tea/coffee survey, the number who like tea ONLY is 12.", isTrue: false, explanation: "Tea-only subtracts the overlap: 12 − 5 = 7, not 12.", hints: ["The 12 includes the 'both' students.", "12 − 5.", "Tea-only subtracts the overlap: 12 − 5 = 7, not 12."] },
      // @q13
      { id: "U10L3-order-1", type: "order-steps", category: "word", prompt: "Order the fill-regions strategy for: 20 students, 12 tea, 8 coffee, 5 both.", sequence: ["Write the overlap: 5 both", "Tea-only: 12 − 5 = 7", "Coffee-only: 8 − 5 = 3", "Union: 7 + 3 + 5 = 15", "Neither: 20 − 15 = 5"], diagnoses: { "Tea-only: 12 − 5 = 7@0": "The overlap comes first.", "Neither: 20 − 15 = 5@0": "The outside region is last.", "Union: 7 + 3 + 5 = 15@4": "Union before the outside." }, explanation: "Overlap → only-slices → union → outside.", hints: ["Start with the overlap.", "Then the only-slices.", "End with neither."] },
      // @q14
      { id: "U10L3-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each survey region to its count (20 students, 12 tea, 8 coffee, 5 both).", pairs: [ { source: "Tea only", target: "7" }, { source: "Coffee only", target: "3" }, { source: "Neither", target: "5" } ], diagnoses: { "Tea only->3": "Tea-only = 12 − 5 = 7.", "Coffee only->5": "Coffee-only = 8 − 5 = 3.", "Neither->7": "Neither = 20 − 15 = 5." }, explanation: "Tea-only 7, coffee-only 3, both 5, neither 5.", hints: ["Subtract the overlap from each total.", "7, 3, and 5.", "Match the three."] },
      // @q15
      { id: "U10L3-graph-1", type: "graph-interact", category: "word", prompt: "Set the slider to the number who like NEITHER: 20 students, 12 tea, 8 coffee, 5 both (key: value).", challenge: "Adjust the values below so they match the condition described in the prompt.", validate: { value: 5 }, tolerance: 0, explanation: "Union 15, outside = 20 − 15 = 5.", hints: ["Union = 15.", "20 − 15.", "Union 15, outside = 20 − 15 = 5."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "uses a total as an 'only' count", diagnosis: "'12 like tea' includes the 5 who also like coffee — tea-only is 12 − 5 = 7.", hint: "Subtract the overlap from each total first." },
    { wrongPattern: "forgets the outside region", diagnosis: "With a given universe, the answer often hides outside both circles: neither = total − union.", hint: "Fill the regions, then subtract everything from the universe." },
    { wrongPattern: "adds overlap twice", diagnosis: "12 + 8 = 20 misses the 5 subtraction; the union is 15, not 20.", hint: "Add the 'only' slices and the overlap — never the raw totals." },
  ],
  recallTags: ["sets", "venn-diagram", "word-problems", "union"],
  discovery: {
    challenges: [
      { instruction: "Fill the '5 both' slice, then the tea-only slice (12 − 5), then coffee-only (8 − 5).", observe: "Subtracting the 'both' from each total gives the 'only' regions: tea 7, coffee 3, both 5." },
      { instruction: "Now add the filled slices: 7 + 3 + 5 = 15. What's left of the 20-student bar?", observe: "20 − 15 = 5 students like neither tea nor coffee — the outside region." },
    ],
    predict: { prompt: "20 students, 12 like tea, 8 like coffee, 5 like both. How many like NEITHER?", numeric: { answer: 5, tolerance: 0 }, reveal: "The union is 12 + 8 − 5 = 15, and 20 − 15 = 5 like neither. The outside region is the total minus the union." },
    sayItYourWay: { prompt: "What's the reliable strategy for a Venn word problem?", phrasings: [{ id: "a", text: "Fill the overlap first, then the 'only' slices, then the outside", correct: true, why: "Overlap first because it's subtracted from both totals; the outside is what's left of the universe." }, { id: "b", text: "Just add the two given totals", correct: false, why: "That double-counts the overlap and skips the outside region entirely." }, { id: "c", text: "Guess from the numbers that look biggest", correct: false, why: "Venn problems are exact — every region has a fixed count, no guessing." }], formalName: "the fill-regions strategy for Venn problems" },
    stretch: "If the same 20 students have 12 who like tea and 8 who like coffee, what's the LEAST number that could like both? (Hint: the circles must still fit inside a 20-member universe.)",
  },
};
