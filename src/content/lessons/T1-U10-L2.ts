import type { Lesson } from "../schema";

export const T1U10L2: Lesson = {
  // @meta
  id: "T1-U10-L2",
  tier: 1,
  unit: "Sets",
  title: "Overlap Logic",
  prerequisites: ["T1-U10-L1","T1-U9-L3"],
  estimatedMinutes: 12,
  hook: {
    question: "A shop sells 10 phones with 5G, 8 phones with a great camera, and 3 phones with BOTH. How many phones have 5G OR a great camera? Careful — 'or' in sets counts the overlap only ONCE, and '3 with both' is the trap.",
    type: "puzzle",
  },
  intuitionBlocks: [{ widget: "venn-diagram", narrative: "Shade the two circles. The overlap belongs to both sets — count it ONCE for 'union', not twice. The part of A outside the overlap is 'A only', the rest of B is 'B only', and everything inside either circle is the union A ∪ B. Shading each region teaches the three operations: ∪ (union), ∩ (intersection), and ′ (not in)." }],

  // @discovery
  formalBlocks: [
    { definition: "For two sets A and B: the union $A \\cup B$ contains everything in A or B (or both); the intersection $A \\cap B$ contains everything in BOTH; and the complement $A'$ contains everything NOT in A. The union counting rule: $|A \\cup B| = |A| + |B| - |A \\cap B|$ — add the totals, then subtract the overlap once because it was counted twice.", examples: ["If |A| = 10, |B| = 8, and |A ∩ B| = 3, then |A ∪ B| = 10 + 8 − 3 = 15.", "$A = \\{1, 2, 3\\}, B = \\{3, 4\\}$: $A \\cup B = \\{1, 2, 3, 4\\}$ (3 appears once) and $A \\cap B = \\{3\\}$."], pitfall: "The overlap is inside BOTH totals — never add |A| and |B| without subtracting |A ∩ B| when you want the union. Students who answer 18 in the 10-8-3 problem are double-counting the 3 'both' phones.", altExplanations: ["GAME: merging two guild rosters — union is everyone in either guild; intersection is the players in BOTH; the counting rule adds the totals then subtracts the overlap once, because the shared players were counted twice.", "MONEY: two savings goals — the union is all money saved to either pot, but the money in both pots must be counted once. Add the pots, subtract the shared stash, and you get the true union total."] },
  ],
  gutChecks: [{ prompt: "If |A| = 6, |B| = 5, and |A ∩ B| = 2, what is |A ∪ B|?", answer: "9 — 6 + 5 − 2 = 9, subtracting the doubly-counted overlap once." }],
  quiz: {
    pool: [
      // @q01
      { id: "U10L2-mcq-1", type: "mcq", category: "procedural", prompt: "A = {1, 2, 3} and B = {3, 4, 5}. What is A ∪ B?", options: [ { id: "a", text: "{1, 2, 3, 4, 5}" }, { id: "b", text: "{3}" }, { id: "c", text: "{1, 2, 3, 3, 4, 5}" }, { id: "d", text: "{1, 2, 4, 5}" } ], correctOptionId: "a", diagnoses: { b: "{3} is the intersection, not the union.", c: "The union lists each member once — no duplicate 3.", d: "Missing 3 from the union." }, explanation: "The union keeps 3 once: {1, 2, 3, 4, 5}.", hints: ["Union = everything in either set.", "3 belongs to both but lists once.", "The union keeps 3 once: {1, 2, 3, 4, 5}."] },
      // @q02
      { id: "U10L2-mcq-2", type: "mcq", category: "conceptual", prompt: "A = {1, 2, 3} and B = {3, 4, 5}. What is A ∩ B?", options: [ { id: "a", text: "{1, 2, 3, 4, 5}" }, { id: "b", text: "{3}" }, { id: "c", text: "{}" }, { id: "d", text: "{1, 2}" } ], correctOptionId: "b", diagnoses: { a: "That's the union, not the intersection.", c: "3 is shared, so the intersection is not empty.", d: "1 and 2 are only in A." }, explanation: "The only member in BOTH sets is 3, so A ∩ B = {3}.", hints: ["Intersection = members in both.", "Which number appears in A and B?", "The only member in BOTH sets is 3, so A ∩ B = {3}."] },
      // @q03
      { id: "U10L2-mcq-3", type: "mcq", category: "word", prompt: "12 students play football, 9 play basketball, and 4 play both. How many play football OR basketball?", options: [ { id: "a", text: "13" }, { id: "b", text: "21" }, { id: "c", text: "17" }, { id: "d", text: "6" } ], correctOptionId: "c", diagnoses: { b: "12 + 9 = 21 double-counts the 4 both.", a: "13 is 17 − 4 — you subtracted twice.", d: "6 is just 12 − 4 − 2, wrong arithmetic." }, explanation: "12 + 9 − 4 = 17, subtracting the doubly-counted overlap once.", hints: ["Add the two groups.", "Subtract the 'both' once.", "12 + 9 − 4 = 17, subtracting the doubly-counted overlap once."] },
      // @q04
      { id: "U10L2-mcq-4", type: "mcq", category: "procedural", prompt: "If |A| = 7, |B| = 6, and |A ∩ B| = 2, what is |A ∪ B|?", options: [ { id: "a", text: "15" }, { id: "b", text: "13" }, { id: "c", text: "9" }, { id: "d", text: "11" } ], correctOptionId: "d", diagnoses: { b: "7 + 6 = 13 — you forgot to subtract the overlap.", c: "7 + 6 − 2 − 2 = 9 subtracts twice.", a: "Too large — 15 adds extra." }, explanation: "|A ∪ B| = 7 + 6 − 2 = 11.", hints: ["Add the sizes.", "Subtract the overlap once.", "|A ∪ B| = 7 + 6 − 2 = 11."] },
      // @q05
      { id: "U10L2-mcq-5", type: "mcq", category: "conceptual", prompt: "Which symbol means 'everything in A OR B'?", options: [ { id: "a", text: "A ∪ B" }, { id: "b", text: "A ∩ B" }, { id: "c", text: "A′" }, { id: "d", text: "A = B" } ], correctOptionId: "a", diagnoses: { b: "∩ is 'and — both'.", c: "A′ is 'not in A'.", d: "= says the sets are equal." }, explanation: "∪ is the union — everything in A or B.", hints: ["∪ looks like a cup holding both sets.", "∪ = or.", "∪ is the union — everything in A or B."] },
      // @q06
      { id: "U10L2-mcq-6", type: "mcq", category: "word", prompt: "A lunch counter: 14 orders include rice, 11 include chicken, 5 include BOTH. How many orders include rice OR chicken?", options: [ { id: "a", text: "25" }, { id: "b", text: "20" }, { id: "c", text: "19" }, { id: "d", text: "9" } ], correctOptionId: "b", diagnoses: { a: "14 + 11 = 25 double-counts the 5 both.", c: "14 + 11 − 5 − 1 = 19 — extra subtraction mistake.", d: "Too small — that's subtracting both groups wrong." }, explanation: "14 + 11 − 5 = 20, removing the double-counted overlap once.", hints: ["Add the two totals.", "Subtract the 'both' once.", "14 + 11 − 5 = 20, removing the double-counted overlap once."] },
      // @q07
      { id: "U10L2-num-1", type: "numeric-input", category: "procedural", prompt: "A = {0, 1, 2, 3}, B = {2, 3, 4, 5}. Type the number of members in A ∩ B.", answer: 2, tolerance: 0, explanation: "The shared members are 2 and 3 — two of them.", hints: ["Which numbers are in both sets?", "2 and 3.", "The shared members are 2 and 3 — two of them."] },
      // @q08
      { id: "U10L2-num-2", type: "numeric-input", category: "procedural", prompt: "A = {0, 1, 2, 3}, B = {2, 3, 4, 5}. Type the number of members in A ∪ B.", answer: 6, tolerance: 0, explanation: "The union is {0, 1, 2, 3, 4, 5} — six members.", hints: ["List everything in either set.", "0, 1, 2, 3, 4, 5.", "The union is {0, 1, 2, 3, 4, 5} — six members."] },
      // @q09
      { id: "U10L2-num-3", type: "numeric-input", category: "conceptual", prompt: "If |A| = 7, |B| = 5, and |A ∪ B| = 9, what is |A ∩ B|? Type the size of the overlap.", answer: 3, tolerance: 0, explanation: "|A ∩ B| = |A| + |B| − |A ∪ B| = 7 + 5 − 9 = 3.", hints: ["Rearrange the union rule.", "Overlap = |A| + |B| − |A ∪ B|.", "|A ∩ B| = |A| + |B| − |A ∪ B| = 7 + 5 − 9 = 3."] },
      // @q10
      { id: "U10L2-frac-1", type: "fraction-input", category: "conceptual", prompt: "Universe U = {1, 2, 3, 4, 5, 6}, A = {1, 2, 3}. What fraction of U is in A's complement A′? (Write it.)", numerator: 1, denominator: 2, acceptEquivalent: true, explanation: "A′ = {4, 5, 6} — 3 of 6 members, fraction 3/6 = 1/2.", hints: ["What is NOT in A?", "{4, 5, 6}.", "A′ = {4, 5, 6} — 3 of 6 members, fraction 3/6 = 1/2."] },
      // @q11
      { id: "U10L2-tf-1", type: "true-false-justify", category: "conceptual", prompt: "If |A| = 5, |B| = 3, and |A ∩ B| = 2, then |A ∪ B| = 6.", isTrue: true, explanation: "5 + 3 − 2 = 6, subtracting the doubly-counted overlap once.", hints: ["Add the sizes, subtract overlap once.", "5 + 3 − 2.", "5 + 3 − 2 = 6, subtracting the doubly-counted overlap once."] },
      // @q12
      { id: "U10L2-tf-2", type: "true-false-justify", category: "conceptual", prompt: "A ∪ B has fewer members than A ∩ B.", isTrue: false, explanation: "The union is always at least as big as the intersection — it contains the intersection and more.", hints: ["Which is bigger: 'or' or 'and'?", "∪ holds everything in either set.", "The union is always at least as big as the intersection — it contains the intersection and more."] },
      // @q13
      { id: "U10L2-order-1", type: "order-steps", category: "word", prompt: "Order the steps to count: 12 football, 9 basketball, 4 both → how many play football OR basketball?", sequence: ["Write |F| = 12, |B| = 9", "Write |F ∩ B| = 4", "Add: 12 + 9 = 21", "Subtract the overlap: 21 − 4 = 17"], diagnoses: { "Write |F ∩ B| = 4@0": "List the sizes first.", "Subtract the overlap: 21 − 4 = 17@0": "Add before subtracting.", "Add: 12 + 9 = 21@2": "Add after listing sizes." }, explanation: "Add the totals, then subtract the overlap once to avoid double-counting.", hints: ["Write the given sizes.", "Then the overlap.", "Add the totals, then subtract the overlap once to avoid double-counting."] },
      // @q14
      { id: "U10L2-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each operation to its meaning.", pairs: [ { source: "A ∪ B", target: "in A or B" }, { source: "A ∩ B", target: "in both A and B" }, { source: "A′", target: "not in A" } ], diagnoses: { "A ∪ B->in both A and B": "∪ is 'or — at least one'.", "A ∩ B->not in A": "∩ is 'and — both'.", "A′->in A or B": "A′ is everything outside A." }, explanation: "∪ = or, ∩ = and (both), ′ = complement (not in).", hints: ["∪ means 'in A or B'.", "∩ means 'in both'.", "Prime means 'not in'."] },
      // @q15
      { id: "U10L2-graph-1", type: "graph-interact", category: "word", prompt: "A = {1, 2, 3, 4, 5}, B = {4, 5, 6, 7}. Set the slider to the number of members in A ∩ B (key: value).", challenge: "Adjust the values below so they match the condition described in the prompt.", validate: { value: 2 }, tolerance: 0, explanation: "The shared members are 4 and 5 — two of them.", hints: ["What is in both sets?", "4 and 5.", "The shared members are 4 and 5 — two of them."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "adds both totals for the union", diagnosis: "10 + 8 = 18 double-counts the 3 phones with both features — the union is 15.", hint: "Subtract the overlap once: add, then minus the both." },
    { wrongPattern: "thinks ∪ means 'and'", diagnosis: "∪ is 'or — at least one of them'. ∩ is the 'and'—both—operation.", hint: "∪ = or (either set), ∩ = and (both)." },
    { wrongPattern: "writes the overlap twice in a listing", diagnosis: "A ∪ B = {1, 2, 3, 4}, not {1, 2, 3, 3, 4} — the shared 3 appears once.", hint: "The union lists each member a single time." },
  ],
  recallTags: ["sets", "union", "intersection", "venn-diagram"],
  discovery: {
    challenges: [
      { instruction: "Shade A ∩ B — the overlap of the two circles.", observe: "The overlap holds members in BOTH sets — that's the intersection, counted once." },
      { instruction: "Now shade A ∪ B — everything inside either circle.", observe: "The overlap belongs to A ∪ B too, but it was already shaded — union never double-counts." },
    ],
    predict: { prompt: "10 phones have 5G, 8 have a great camera, 3 have both. How many have 5G OR a great camera?", numeric: { answer: 15, tolerance: 0 }, reveal: "15, not 18. 10 already includes the 3 'both' phones, and so does 8 — adding 10 + 8 counts the overlap twice, so subtract it once: 10 + 8 − 3 = 15." },
    sayItYourWay: { prompt: "When counting 'or' in overlapping sets, what's the rule?", phrasings: [{ id: "a", text: "Add the groups, then subtract what's double-counted", correct: true, why: "10 + 8 − 3 = 15 — the overlap was counted in both circles." }, { id: "b", text: "Always add the two whole groups", correct: false, why: "That double-counts the overlap and overstates the union." }, { id: "c", text: "Always subtract the overlap twice", correct: false, why: "You subtract it only once — that's exactly the double-counting it fixed." }], formalName: "union, intersection, and the subtraction rule" },
    stretch: "If A ∪ B has 15 phones and A ∩ B has 3, and there are 20 phones total, how many have NEITHER 5G nor a great camera? That's the complement coming next.",
  },
};
