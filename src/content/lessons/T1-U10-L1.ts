import type { Lesson } from "../schema";

export const T1U10L1: Lesson = {
  // @meta
  id: "T1-U10-L1",
  tier: 1,
  unit: "Sets",
  title: "Sorting the World",
  prerequisites: ["T1-U1-L1","T1-U9-L3"],
  estimatedMinutes: 12,
  hook: {
    question: "A librarian sorts every book by genre, then every genre by author. A pet shop sorts animals into 'mammals' and 'can fly'. Where does a bat go? And why does 'belongs to' (∈) turn an ordinary pile into a mathematical tool?",
    type: "real-world",
  },
  intuitionBlocks: [{ widget: "venn-diagram", narrative: "Drop the objects into the circles. A bat is a mammal AND it can fly, so it lands in the overlap of the two sets — one object, two memberships. The Venn diagram is a storage bag for 'belongs to': each circle is a set, and every object inside it satisfies that set's test." }],

  // @discovery
  formalBlocks: [
    { definition: "A set is a collection of distinct objects called elements or members. We write $A = \\{2, 4, 6\\}$ to list a set, use $\\in$ for 'is a member of' ($4 \\in A$) and $\\notin$ for 'is not a member of' ($3 \\notin A$). Sets ignore order: $\\{1, 2\\} = \\{2, 1\\}$ because they hold the same members. A set can also be described by a rule or property, e.g. $A = \\{x : x \\text{ is an even number between 1 and 9}\\}$.", examples: ["$B = \\{1, 3, 5\\}$: $3 \\in B$ but $4 \\notin B$ — membership is decided by the listing or rule.", "$C = \\{$letters in 'bat'$\\} = \\{b, a, t\\}$ and $D = \\{$letters in 'tab'$\\} = \\{t, a, b\\}$: $C = D$ — order never matters."], pitfall: "Do not list duplicates — sets collect distinct objects and $\\{1, 1, 2\\} = \\{1, 2\\}$. And remember: $1 \\in \\{1, 2\\}$ is true, but the set $\\{1, 2\\}$ itself is not a member of itself in ordinary school sets.", altExplanations: ["FOOD: a set is a recipe's ingredient list — distinct items only, no repeats, and the order you write them never matters: {flour, sugar} and {sugar, flour} are the same bowl. Membership ∈ asks 'is this ingredient in the list?'", "GAME: a set is your item bag — duplicates collapse (two of the same potion is one entry), and the bag doesn't care what order you picked them in. An item is in the set (∈) or it isn't."] },
  ],
  gutChecks: [{ prompt: "If E = {multiples of 3 under 12}, list E.", answer: "E = {3, 6, 9} — the multiples of 3 that are less than 12." }],
  quiz: {
    pool: [
      // @q01
      { id: "U10L1-mcq-1", type: "mcq", category: "procedural", prompt: "If A = {2, 4, 6, 8}, which statement is TRUE?", options: [ { id: "a", text: "6 ∈ A" }, { id: "b", text: "5 ∈ A" }, { id: "c", text: "8 ∉ A" }, { id: "d", text: "2 ∉ A" } ], correctOptionId: "a", diagnoses: { b: "5 is odd — it fails A's 'even' test.", c: "8 IS in A, so 'not in' is wrong.", d: "2 IS in A." }, explanation: "6 is an even number in the set, so 6 ∈ A.", hints: ["What does ∈ mean?", "Is 6 listed in A?", "6 ∈ A."] },
      // @q02
      { id: "U10L1-mcq-2", type: "mcq", category: "conceptual", prompt: "Which is the SAME set as {1, 2, 3}?", options: [ { id: "a", text: "{3, 1, 2}" }, { id: "b", text: "{1, 1, 2}" }, { id: "c", text: "{1, 2, 3, 4}" }, { id: "d", text: "{}" } ], correctOptionId: "a", diagnoses: { b: "Missing 3 and 1 is duplicated — different collection.", c: "Has an extra member, 4.", d: "The empty set has no members." }, explanation: "Sets ignore order: {1, 2, 3} = {3, 1, 2} because they hold the same members.", hints: ["Order never matters to a set.", "Compare the members, not the sequence.", "{3, 1, 2}."] },
      // @q03
      { id: "U10L1-mcq-3", type: "mcq", category: "word", prompt: "A class's 'pets at home' set P = {cat, dog, fish, bird}. Rina has a hamster. Which is true?", options: [ { id: "a", text: "hamster ∉ P" }, { id: "b", text: "hamster ∈ P" }, { id: "c", text: "P = {hamster}" }, { id: "d", text: "P has 5 members" } ], correctOptionId: "a", diagnoses: { b: "Hamster isn't in the listed pet set.", c: "P lists four pets, not one.", d: "P has exactly 4 members." }, explanation: "Hamster is not a member of the listed set P, so hamster ∉ P.", hints: ["Is hamster on the list?", "No.", "hamster ∉ P."] },
      // @q04
      { id: "U10L1-mcq-4", type: "mcq", category: "procedural", prompt: "Which listing describes 'the set of vowel letters'?", options: [ { id: "a", text: "{a, e, i, o, u}" }, { id: "b", text: "{b, c, d}" }, { id: "c", text: "{1, 2, 3}" }, { id: "d", text: "{a, b, c, d}" } ], correctOptionId: "a", diagnoses: { b: "b, c, d are consonants.", c: "Numbers aren't letters.", d: "b, c, d aren't vowels." }, explanation: "The vowels are exactly a, e, i, o, u.", hints: ["Which letters are vowels?", "a, e, i, o, u.", "{a, e, i, o, u}."] },
      // @q05
      { id: "U10L1-mcq-5", type: "mcq", category: "conceptual", prompt: "The set D = {days starting with S}. Which belongs?", options: [ { id: "a", text: "Sunday" }, { id: "b", text: "Monday" }, { id: "c", text: "Friday" }, { id: "d", text: "Wednesday" } ], correctOptionId: "a", diagnoses: { b: "Monday starts with M.", c: "Friday starts with F.", d: "Wednesday starts with W." }, explanation: "Sunday starts with S, so Sunday ∈ D.", hints: ["Which day begins with S?", "Saturday and Sunday.", "Sunday."] },
      // @q06
      { id: "U10L1-mcq-6", type: "mcq", category: "word", prompt: "A chef's 'ingredients in the fridge' set has 5 items. She buys milk, which is not among them. What is the new set?", options: [ { id: "a", text: "The old 5 plus milk — 6 members" }, { id: "b", text: "Still 5 — milk replaces one" }, { id: "c", text: "4 members" }, { id: "d", text: "Milk only" } ], correctOptionId: "a", diagnoses: { b: "Adding a NEW item grows the set by one.", c: "Nothing was removed.", d: "Milk joins, not replaces." }, explanation: "Adding a new distinct member makes the set have 6 members.", hints: ["Was milk already in the set?", "No — it's new.", "6 members."] },
      // @q07
      { id: "U10L1-num-1", type: "numeric-input", category: "procedural", prompt: "If A = {1, 3, 5, 7, 9}, how many members does A have? Type the count.", answer: 5, tolerance: 0, explanation: "A lists five odd numbers between 0 and 10.", hints: ["Count the listed elements.", "1, 3, 5, 7, 9.", "5."] },
      // @q08
      { id: "U10L1-num-2", type: "numeric-input", category: "procedural", prompt: "E = {multiples of 3 less than 20}. How many members does E have? Type the count.", answer: 6, tolerance: 0, explanation: "3, 6, 9, 12, 15, 18 — six multiples of 3 under 20.", hints: ["List the multiples of 3 below 20.", "3, 6, 9, 12, 15, 18.", "6."] },
      // @q09
      { id: "U10L1-num-3", type: "numeric-input", category: "conceptual", prompt: "The set of single-digit primes is P = {2, 3, 5, 7}. Type the member that is also even.", answer: 2, tolerance: 0, explanation: "2 is the only even prime in P.", hints: ["Which of 2, 3, 5, 7 is even?", "Only 2.", "2."] },
      // @q10
      { id: "U10L1-frac-1", type: "fraction-input", category: "conceptual", prompt: "The set W = {days of the week} has 7 members. Tuesday and Thursday start with T. What fraction of W starts with T? (Write as a fraction.)", numerator: 2, denominator: 7, acceptEquivalent: false, explanation: "Of the 7 days, 2 start with T, so the fraction is 2/7.", hints: ["How many days start with T?", "2 out of 7.", "2/7."] },
      // @q11
      { id: "U10L1-tf-1", type: "true-false-justify", category: "conceptual", prompt: "{2, 5, 2} and {2, 5} are the same set.", isTrue: true, explanation: "A set holds distinct objects only — the duplicate 2 adds nothing, so {2, 5, 2} = {2, 5}.", hints: ["Do duplicates matter in a set?", "No.", "True — same members."] },
      // @q12
      { id: "U10L1-tf-2", type: "true-false-justify", category: "conceptual", prompt: "The empty set {} has one member.", isTrue: false, explanation: "The empty set has NO members — it's the set with size zero.", hints: ["What's inside {}?", "Nothing.", "False — zero members."] },
      // @q13
      { id: "U10L1-order-1", type: "order-steps", category: "word", prompt: "Order the steps to decide whether 4 is in the set of even numbers.", sequence: ["State the set's rule: even numbers", "Test 4: is it even?", "4 = 2 × 2, so yes", "Write: 4 ∈ Evens"], diagnoses: { "Test 4: is it even?@0": "State the rule first.", "Write: 4 ∈ Evens@0": "Test before concluding.", "State the set's rule: even numbers@1": "The rule comes first." }, explanation: "Membership is a test: state the rule, apply it to 4, then write the verdict.", hints: ["Start with the rule.", "Apply the test.", "End with 4 ∈ Evens."] },
      // @q14
      { id: "U10L1-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each symbol to its meaning.", pairs: [ { source: "∈", target: "is a member of" }, { source: "∉", target: "is not a member of" }, { source: "{ }", target: "a set's braces" } ], diagnoses: { "∈->is not a member of": "∈ means 'is a member of'.", "∉->is a member of": "∉ means 'is not a member of'.", "{ }->is a member of": "Braces wrap a set's listing." }, explanation: "∈ = belongs to, ∉ = doesn't belong, { } = set notation.", hints: ["∈ says 'in the set'.", "∉ says 'not in the set'.", "Match the symbols."] },
      // @q15
      { id: "U10L1-graph-1", type: "graph-interact", category: "word", prompt: "This slider counts members of set S = {1, 2, 3, 4, 5, 6}. Set it to the value of the LARGEST even member (key: value).", challenge: "Set the slider to 6.", validate: { value: 6 }, tolerance: 0, explanation: "The largest even number in S is 6.", hints: ["Which members are even?", "2, 4, 6.", "6."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "order matters to a set", diagnosis: "{1, 2} and {2, 1} are the SAME set — only the collection of members matters.", hint: "Reorder the members and see the pile is unchanged." },
    { wrongPattern: "duplicates count", diagnosis: "{1, 1, 2} = {1, 2} — a set holds distinct objects only.", hint: "Cross out repeated members; they add nothing." },
    { wrongPattern: "confuses ∈ with subset", diagnosis: "2 ∈ {1, 2} says 2 is a MEMBER; {2} ⊂ {1, 2} says the set {2} is inside. The ∈ is for elements, not collections.", hint: "∈ uses numbers; ⊂ uses set braces." },
  ],
  recallTags: ["sets", "membership", "elements"],
  discovery: {
    challenges: [
      { instruction: "Place the bat, the eagle, and the cat in the right regions of the two-set Venn.", observe: "The bat needs BOTH circles — membership isn't a single slot." },
      { instruction: "Now list the members of A = {2, 4, 6, 8} and ask: is 4 in A?", observe: "4 satisfies A's rule ('even number'), so it belongs — we write 4 ∈ A." },
    ],
    predict: { prompt: "Is 1 a member of the set of even numbers?", options: [{ id: "a", text: "Yes — 1 is odd but still a number" }, { id: "b", text: "No — 1 fails the 'even' test" }, { id: "c", text: "Only if it appears in the listing" }], reveal: "No — membership is decided by the set's rule, not by whether the number happens to be listed. 1 is odd, so 1 ∉ {evens}." },
    sayItYourWay: { prompt: "What makes something a member of a set?", phrasings: [{ id: "a", text: "It passes the set's rule or test", correct: true, why: "A set is defined by what belongs to it — membership is a yes/no question the rule answers." }, { id: "b", text: "It looks similar to the others", correct: false, why: "'Looks similar' is vague; a set's test is exact — either it's in, or it's out." }, { id: "c", text: "It is bigger than the other members", correct: false, why: "Size has nothing to do with belonging." }], formalName: "sets, elements, and membership" },
    stretch: "If A = {letters in 'bat'} and B = {letters in 'tab'}, are A and B the same set? Same members, different order — sets ignore order. What about 'bat' vs 'batt'?",
  },
};
