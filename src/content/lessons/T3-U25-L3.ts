import type { Lesson } from "../schema";

export const T3U25L3: Lesson = {
  // @meta
  id: "T3-U25-L3",
  tier: 3,
  unit: "Pythagoras",
  title: "Finding Any Side",
  prerequisites: ["T3-U24-L3","T3-U25-L1","T3-U25-L2"],
  estimatedMinutes: 12,
  hook: { question: "A ladder leans 4 m up a wall with its foot 3 m out. The ladder is the hypotenuse, and three sides mean three possible questions. Each is the same equation, solved differently: square both legs, add, and root — or square the hypotenuse, subtract the known leg, and root. One formula, two directions.", type: "real-world" },
  intuitionBlocks: [{ widget: "geometry-playground", narrative: "Drag a right triangle's legs and read the hypotenuse live. Then flip: fix the hypotenuse and one leg, and drag the other leg to see what length satisfies the equation. Adding squares finds the hypotenuse; subtracting finds a leg." }],

  // @discovery
  formalBlocks: [{ definition: "To find the HYPOTENUSE: $c = \\sqrt{a^2 + b^2}$ (add the squares, then root). To find a LEG: $a = \\sqrt{c^2 - b^2}$ (subtract the known leg's square from the hypotenuse's square, then root). The SAME theorem $a^2 + b^2 = c^2$ — you just solve for the missing letter.", examples: ["Legs 6 and 8 → c = √(36 + 64) = √100 = 10.", "Hypotenuse 13, leg 5 → other leg = √(169 − 25) = √144 = 12."], pitfall: "FOR THE LEG YOU SUBTRACT, never add. Adding makes the hypotenuse² + leg², which would be bigger than c² — impossible. Ask first: am I finding the longest side (add) or a shorter one (subtract)?", altExplanations: ["GAME: the hypotenuse is the max-stat side — add the legs' squares then root for c (6² + 8² = 100 → 10). Finding a leg means SUBTRACT: the known leg's square comes out of c² first (13² − 5² = 144 → 12). Ask 'am I finding the longest side or a shorter one?'", "MONEY: a total budget of $13² split between two accounts — one account holds $5², the other must hold the remainder: √(169 − 25) = 12. The hypotenuse is the total; legs are parts of the total, never bigger."] }],
  gutChecks: [{ prompt: "When finding a leg instead of the hypotenuse, what changes?", answer: "You subtract the known leg's square from c² before rooting — never add." }],
  quiz: {
    pool: [
      // @q01
      { id: "U25L3-mcq-1", type: "mcq", category: "procedural", prompt: "Legs 5 and 12. Hypotenuse = …", options: [ { id: "a", text: "13" }, { id: "b", text: "17" }, { id: "c", text: "119" }, { id: "d", text: "169" } ], correctOptionId: "a", diagnoses: { b: "17 adds the legs without squaring.", c: "119 is c² − 1 — not from Pythagoras.", d: "169 is c², not c." }, explanation: "c = √(25 + 144) = √169 = 13.", hints: ["Add the squares.", "√169.", "c = √(25 + 144) = √169 = 13."] },
      // @q02
      { id: "U25L3-mcq-2", type: "mcq", category: "conceptual", prompt: "Finding a LEG needs…", options: [ { id: "a", text: "add both squares, then root" }, { id: "b", text: "subtract the known leg's square from c², then root" }, { id: "c", text: "halve the hypotenuse" }, { id: "d", text: "divide by the leg" } ], correctOptionId: "b", diagnoses: { a: "Adding finds the hypotenuse, not a leg.", c: "Halving isn't Pythagorean.", d: "Division isn't in the theorem." }, explanation: "a² = c² − b², so a = √(c² − b²).", hints: ["c² − b².", "Then root.", "Subtract then root."] },
      // @q03
      { id: "U25L3-mcq-3", type: "mcq", category: "word", prompt: "A ladder 10 m long reaches 8 m up a wall. Foot distance from wall = …", options: [ { id: "a", text: "18 m" }, { id: "b", text: "2 m" }, { id: "c", text: "6 m" }, { id: "d", text: "√164 m" } ], correctOptionId: "c", diagnoses: { b: "2 subtracts the lengths before squaring.", a: "18 adds them.", d: "√164 adds the squares — that's the wrong leg move (adds)." }, explanation: "b² = 100 − 64 = 36 → b = 6 m.", hints: ["100 − 64.", "√36.", "b² = 100 − 64 = 36 → b = 6 m."] },
      // @q04
      { id: "U25L3-mcq-4", type: "mcq", category: "procedural", prompt: "Hypotenuse 17, leg 8. Other leg = …", options: [ { id: "a", text: "√353" }, { id: "b", text: "9" }, { id: "c", text: "25" }, { id: "d", text: "15" } ], correctOptionId: "d", diagnoses: { b: "9 is 17 − 8 without squaring.", c: "25 is 17 + 8, adding instead.", a: "√353 adds the squares — wrong direction." }, explanation: "b² = 289 − 64 = 225 → b = 15.", hints: ["289 − 64.", "√225.", "b² = 289 − 64 = 225 → b = 15."] },
      // @q05
      { id: "U25L3-mcq-5", type: "mcq", category: "conceptual", prompt: "Why can't a leg come from adding the squares?", options: [ { id: "a", text: "c² − a² would be negative — the sum exceeds c²" }, { id: "b", text: "Adding is always for the hypotenuse" }, { id: "c", text: "Legs are always shorter than 1" }, { id: "d", text: "It can — both directions add" } ], correctOptionId: "a", diagnoses: { b: "That's the memory rule, but the real reason is the inequality.", c: "Legs can be any positive length.", d: "Adding gives c², which is bigger than any leg² — a leg can't match it." }, explanation: "a² = c² − b²; if you instead did c² + b² the result exceeds c², contradicting the hypotenuse being longest.", hints: ["a² + b² = c².", "Leg = c² − b².", "a² = c² − b²; if you instead did c² + b² the result exceeds c², contradicting the hypotenuse being longest."] },
      // @q06
      { id: "U25L3-mcq-6", type: "mcq", category: "word", prompt: "A box diagonal question: room 6 m long, 8 m wide — the floor diagonal is…", options: [ { id: "a", text: "14 m" }, { id: "b", text: "10 m" }, { id: "c", text: "2 m" }, { id: "d", text: "√100 m = 100 m" } ], correctOptionId: "b", diagnoses: { a: "14 adds the sides.", c: "2 subtracts them without squaring.", d: "√100 = 10, not 100." }, explanation: "d = √(36 + 64) = √100 = 10 m.", hints: ["36 + 64.", "√100.", "d = √(36 + 64) = √100 = 10 m."] },
      // @q07
      { id: "U25L3-num-1", type: "numeric-input", category: "procedural", prompt: "Legs 8 and 15. Hypotenuse = …", answer: 17, tolerance: 0, explanation: "√(64 + 225) = √289 = 17.", hints: ["64 + 225.", "√289.", "√(64 + 225) = √289 = 17."] },
      // @q08
      { id: "U25L3-num-2", type: "numeric-input", category: "procedural", prompt: "Hypotenuse 25, leg 7. Other leg = …", answer: 24, tolerance: 0, explanation: "√(625 − 49) = √576 = 24.", hints: ["625 − 49.", "√576.", "√(625 − 49) = √576 = 24."] },
      // @q09
      { id: "U25L3-num-3", type: "numeric-input", category: "conceptual", prompt: "A right triangle has legs a and b. If a = 5 and c = 13, find b.", answer: 12, tolerance: 0, explanation: "b = √(169 − 25) = √144 = 12.", hints: ["169 − 25.", "√144.", "b = √(169 − 25) = √144 = 12."] },
      // @q10
      { id: "U25L3-frac-1", type: "fraction-input", category: "conceptual", prompt: "The hypotenuse c = √13 for legs 2 and 3. What fraction of c² is the square on the 2-side?", numerator: 4, denominator: 13, acceptEquivalent: true, explanation: "The 2-side's square is 4; c² is 13 → 4/13.", hints: ["2² = 4.", "c² = 13.", "The 2-side's square is 4; c² is 13 → 4/13."] },
      // @q11
      { id: "U25L3-tf-1", type: "true-false-justify", category: "conceptual", prompt: "Finding a leg always involves subtracting the known leg's square from c².", isTrue: true, explanation: "a² = c² − b² — isolation gives subtraction before the root.", hints: ["c² − b².", "Subtract, then root.", "a² = c² − b² — isolation gives subtraction before the root."] },
      // @q12
      { id: "U25L3-tf-2", type: "true-false-justify", category: "conceptual", prompt: "To find the hypotenuse you subtract the smaller square from the larger.", isTrue: false, explanation: "The hypotenuse ADDS both leg squares — subtraction is only for finding a leg.", hints: ["Add for the hypotenuse.", "Subtract for a leg.", "The hypotenuse ADDS both leg squares — subtraction is only for finding a leg."] },
      // @q13
      { id: "U25L3-order-1", type: "order-steps", category: "word", prompt: "Order the steps to find a leg (c = 13, b = 5).", sequence: ["c² − b²: 169 − 25 = 144", "Take the root: √144", "Result: 12"], diagnoses: { "c² − b²: 169 − 25 = 144@1": "Subtract squares first.", "Take the root: √144@0": "Root after subtracting.", "Result: 12@0": "State the value last." }, explanation: "Subtract squares, root, report.", hints: ["169 − 25.", "√144.", "Subtract squares, root, report."] },
      // @q14
      { id: "U25L3-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each situation to its operation.", pairs: [ { source: "Find hypotenuse", target: "add squares, root" }, { source: "Find a leg", target: "subtract squares, root" }, { source: "Known leg", target: "c² − its square" } ], diagnoses: { "Find hypotenuse->subtract squares, root": "Hypotenuse adds.", "Find a leg->add squares, root": "Legs subtract from c².", "Known leg->add squares, root": "A known leg is removed from c²." }, explanation: "The missing side's position decides add vs subtract.", hints: ["Longest adds.", "Leg subtracts.", "The missing side's position decides add vs subtract."] },
      // @q15
      { id: "U25L3-graph-1", type: "graph-interact", category: "word", prompt: "A right triangle has legs 12 and 16. Set the slider to the HYPOTENUSE (key: value).", challenge: "A right triangle has legs 12 and 16. — adjust the values below to match the condition.", validate: { value: 20 }, tolerance: 0.01, explanation: "√(144 + 256) = √400 = 20.", hints: ["144 + 256.", "√400.", "√(144 + 256) = √400 = 20."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "adds squares when finding a leg", diagnosis: "A leg is c² − b² — adding would make it exceed the hypotenuse's square.", hint: "Ask: longest side or leg?" },
    { wrongPattern: "forgets the root", diagnosis: "Squaring then summing gives c², not c — undo the square.", hint: "√ at the end." },
    { wrongPattern: "subtracts lengths before squaring", diagnosis: "You square first, then subtract — (17 − 8) ≠ √(17² − 8²).", hint: "Square each side first." },
  ],
  recallTags: ["Pythagoras", "hypotenuse", "square root", "solving", "leg"],
  discovery: {
    challenges: [
      { instruction: "Drag both legs and watch the hypotenuse update.", observe: "Adding the squares always reproduces the hypotenuse squared." },
      { instruction: "Fix c and one leg, then slide the other leg to match.", observe: "The matching length is √(c² − b²) — subtraction finds the leg." },
    ],
    predict: { prompt: "Hypotenuse 15, leg 9. The other leg is…", options: [{ id: "a", text: "12" }, { id: "b", text: "6" }, { id: "c", text: "√306" }], reveal: "12 — √(225 − 81) = √144. Adding would give √306, which is wrong for a leg." },
    sayItYourWay: { prompt: "How do you find a missing side of a right triangle?", phrasings: [{ id: "a", text: "Add the squares for the hypotenuse; subtract for a leg, then root", correct: true, why: "The missing side's role decides add or subtract." }, { id: "b", text: "Always add both squares, then root", correct: false, why: "Legs subtract from the hypotenuse's square." }, { id: "c", text: "Add the two known lengths straight", correct: false, why: "Sides must be squared before combining." }], formalName: "solving for any side — c = √(a² + b²) or a = √(c² − b²)" },
    stretch: "A 3-4-5 triangle is right-angled — but is a 5-12-13 triangle? Next: the converse test — check the squares, then decide.", 
  },
};
