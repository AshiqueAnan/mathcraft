import type { Lesson } from "../schema";

export const T2U13L2: Lesson = {
  // @meta
  id: "T2-U13-L2",
  tier: 2,
  unit: "Formulas",
  title: "Making x the Subject",
  prerequisites: ["T2-U11-L1","T2-U12-L4","T2-U13-L1"],
  estimatedMinutes: 12,
  hook: {
    question: "v = u + at tells you v when you know u, a, t. But what if you know v, a, t and want u? Same formula, same balance — you just rearrange it so u stands alone. 'Making a letter the subject' is solving, applied to formulas.",
    type: "real-world",
  },
  intuitionBlocks: [{ widget: "balance-scale", narrative: "Keep the balance: whatever you do to one side, do to the other. To make u the subject of v = u + at, subtract at from BOTH sides: v − at = u. The scales stay level the whole time — that's the whole of rearrangement." }],

  // @discovery
  formalBlocks: [
    { definition: "Rearranging a formula means making a chosen letter the subject — the only letter on one side. Treat it like solving an equation: do the same operation to both sides, undoing each operation in reverse order. To make x the subject of y = 2x + 3: subtract 3 (y − 3 = 2x), then divide by 2 (x = (y − 3)/2).", examples: ["Make u the subject of v = u + at: u = v − at.", "Make a the subject of v = u + at: a = (v − u)/t."], pitfall: "Keep the balance: every step must act on the WHOLE of both sides. To isolate x in 2x + 3, subtract 3 from BOTH sides, then divide BOTH sides by 2 — never just part of a side.", altExplanations: ["GAME: making x the subject is un-equipping gear — y = 2x + 3 has x wearing +3 and ×2. Undo in reverse: first remove the +3 (subtract from both save slots), then divide by 2 so x stands alone.", "FOOD: a recipe card reads 'y = 2x + 3' — rearrange it so the unmixed ingredient x is alone: subtract 3 cups then halve, giving x = (y−3)/2. Same balance, both sides acted on together."] },
  ],
  gutChecks: [{ prompt: "Make x the subject of y = 5x + 7.", answer: "x = (y − 7)/5 — subtract 7, then divide by 5." }],
  quiz: {
    pool: [
      // @q01
      { id: "U13L2-mcq-1", type: "mcq", category: "procedural", prompt: "Make x the subject of y = x + 3.", options: [ { id: "a", text: "x = y − 3" }, { id: "b", text: "x = y + 3" }, { id: "c", text: "x = 3 − y" }, { id: "d", text: "x = 3y" } ], correctOptionId: "a", diagnoses: { b: "Add 3 to isolate? That adds, not undoes.", c: "Wrong order — swap sides keeps signs.", d: "Multiplication isn't involved." }, explanation: "Undo +3: subtract 3 from both sides → x = y − 3.", hints: ["Undo the +3.", "Subtract 3 both sides.", "Undo +3: subtract 3 from both sides → x = y − 3."] },
      // @q02
      { id: "U13L2-mcq-2", type: "mcq", category: "conceptual", prompt: "What does 'x is the subject' mean?", options: [ { id: "a", text: "x appears twice" }, { id: "b", text: "x is alone on one side of the = " }, { id: "c", text: "x is the biggest letter" }, { id: "d", text: "x is on the left always" } ], correctOptionId: "b", diagnoses: { a: "Subject means ALONE, not repeated.", c: "Size is irrelevant.", d: "Side doesn't matter — just alone." }, explanation: "The subject is the single letter isolated on one side: x = ….", hints: ["x = … with nothing else.", "Alone on one side.", "The subject is the single letter isolated on one side: x = …."] },
      // @q03
      { id: "U13L2-mcq-3", type: "mcq", category: "word", prompt: "F = ma is Newton's law. Make m the subject.", options: [ { id: "a", text: "m = a/F" }, { id: "b", text: "m = F × a" }, { id: "c", text: "m = F/a" }, { id: "d", text: "m = F − a" } ], correctOptionId: "c", diagnoses: { b: "Undo ×a by dividing, not multiplying.", a: "Divide by a, so m = F/a.", d: "Addition isn't involved." }, explanation: "m is multiplied by a: divide both sides by a → m = F/a.", hints: ["Undo the ×a.", "Divide by a.", "m is multiplied by a: divide both sides by a → m = F/a."] },
      // @q04
      { id: "U13L2-mcq-4", type: "mcq", category: "procedural", prompt: "Make x the subject of y = 2x + 3.", options: [ { id: "a", text: "x = 2y − 3" }, { id: "b", text: "x = y/2 − 3" }, { id: "c", text: "x = (y + 3)/2" }, { id: "d", text: "x = (y − 3)/2" } ], correctOptionId: "d", diagnoses: { b: "Divide the whole side by 2 — not term by term.", c: "Subtract 3 first, not add.", a: "Wrong — 2y − 3 rearranges wrongly." }, explanation: "Undo +3 (y − 3 = 2x), then ÷2 → x = (y − 3)/2.", hints: ["Undo +3 first.", "Then ÷2.", "Undo +3 (y − 3 = 2x), then ÷2 → x = (y − 3)/2."] },
      // @q05
      { id: "U13L2-mcq-5", type: "mcq", category: "conceptual", prompt: "Why must you do the same to both sides when rearranging?", options: [ { id: "a", text: "To keep the equation true" }, { id: "b", text: "To make the numbers even" }, { id: "c", text: "To use bigger numbers" }, { id: "d", text: "It's just a rule" } ], correctOptionId: "a", diagnoses: { b: "Evenness is irrelevant.", c: "Value is never 'bigger'.", d: "It's not arbitrary — equality must hold." }, explanation: "An equation says both sides ARE equal; changing one side breaks the truth.", hints: ["What does '=' mean?", "Both sides equal.", "An equation says both sides ARE equal; changing one side breaks the truth."] },
      // @q06
      { id: "U13L2-mcq-6", type: "mcq", category: "word", prompt: "The perimeter P = 2(l + w). Make w the subject.", options: [ { id: "a", text: "w = P − l" }, { id: "b", text: "w = P/2 − l" }, { id: "c", text: "w = (P − 2)/l" }, { id: "d", text: "w = (P − l)/2" } ], correctOptionId: "b", diagnoses: { a: "Undo the ×2 first, then subtract l.", c: "l isn't divided — it's added inside.", d: "That undoes the wrong order." }, explanation: "P = 2(l + w): divide by 2 (P/2 = l + w), then −l → w = P/2 − l.", hints: ["Undo ×2 first.", "P/2 = l + w.", "Then subtract l."] },
      // @q07
      { id: "U13L2-num-1", type: "numeric-input", category: "procedural", prompt: "y = 3x − 2. Rearrange for x; type the number you add first.", answer: 2, tolerance: 0, explanation: "Add 2 to both sides first: y + 2 = 3x.", hints: ["Undo −2 first.", "Add 2.", "Add 2 to both sides first: y + 2 = 3x."] },
      // @q08
      { id: "U13L2-num-2", type: "numeric-input", category: "procedural", prompt: "y = 3x after the +2 step: y + 2 = 3x. Type what you divide by to isolate x.", answer: 3, tolerance: 0, explanation: "x = (y + 2)/3 — divide by the coefficient 3.", hints: ["Undo the ×3.", "Divide by 3.", "x = (y + 2)/3 — divide by the coefficient 3."] },
      // @q09
      { id: "U13L2-num-3", type: "numeric-input", category: "conceptual", prompt: "V = IR (voltage = current × resistance). Make R the subject; type the letter you divide by.", answer: 1, tolerance: 1, explanation: "R = V/I — divide by I (the current).", hints: ["Undo the ×I.", "Divide by I.", "R = V/I — divide by I (the current)."] },
      // @q10
      { id: "U13L2-frac-1", type: "fraction-input", category: "conceptual", prompt: "y = 2x − 1. Rearrange for x. If y = 4, write x as a fraction.", numerator: 5, denominator: 2, acceptEquivalent: true, explanation: "x = (y + 1)/2 = (4 + 1)/2 = 5/2.", hints: ["Add 1: y + 1 = 2x.", "Divide by 2.", "x = (y + 1)/2 = (4 + 1)/2 = 5/2."] },
      // @q11
      { id: "U13L2-tf-1", type: "true-false-justify", category: "conceptual", prompt: "Making u the subject of v = u + at gives u = v − at.", isTrue: true, explanation: "Subtract at from both sides isolates u.", hints: ["Undo the +at.", "Subtract at.", "Subtract at from both sides isolates u."] },
      // @q12
      { id: "U13L2-tf-2", type: "true-false-justify", category: "conceptual", prompt: "Making x the subject of y = 2x + 3 gives x = y/2 − 3.", isTrue: false, explanation: "Undo the +3 first: x = (y − 3)/2 — the −3 must be inside the bracket before dividing.", hints: ["Undo +3 before ×2.", "y − 3 = 2x.", "Undo the +3 first: x = (y − 3)/2 — the −3 must be inside the bracket before dividing."] },
      // @q13
      { id: "U13L2-order-1", type: "order-steps", category: "word", prompt: "Order the steps to make x the subject of y = 2x + 3.", sequence: ["Subtract 3: y − 3 = 2x", "Divide by 2: (y − 3)/2 = x", "Write x = (y − 3)/2"], diagnoses: { "Divide by 2: (y − 3)/2 = x@0": "Subtract 3 first.", "Write x = (y − 3)/2@0": "Divide first." }, explanation: "Reverse the operations: undo +3, then ÷2.", hints: ["Undo the +3.", "Then ÷2.", "Reverse the operations: undo +3, then ÷2."] },
      // @q14
      { id: "U13L2-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each formula to its made-subject version.", pairs: [ { source: "v = u + at → u", target: "u = v − at" }, { source: "F = ma → m", target: "m = F/a" }, { source: "P = 2(l + w) → w", target: "w = P/2 − l" } ], diagnoses: { "v = u + at → u->w = P/2 − l": "That's perimeter, not motion.", "F = ma ->u = v − at": "Divide by a, not subtract at.", "P = 2(l + w) ->m = F/a": "Divide the bracket by 2 first." }, explanation: "Each rearranges by undoing the operations on the target letter.", hints: ["Undo the operation on the letter.", "Match each pair.", "Rearrange carefully."] },
      // @q15
      { id: "U13L2-graph-1", type: "graph-interact", category: "word", prompt: "Set the slider to u when v = 14, a = 3, t = 4 in v = u + at (key: value).", challenge: "Adjust the values below so they match the condition described in the prompt.", validate: { value: 2 }, tolerance: 0, explanation: "u = v − at = 14 − 3×4 = 2.", hints: ["u = v − at.", "14 − 12.", "u = v − at = 14 − 3×4 = 2."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "only moves a term on one side", diagnosis: "To make x the subject of y = 2x + 3 you subtract 3 from BOTH sides — 2x = y − 3.", hint: "Whatever you do to one side, do to the other." },
    { wrongPattern: "wrong order of undoing", diagnosis: "y = 2x + 3: undo the +3 BEFORE the ×2 — x = (y − 3)/2, not y/2 − 3.", hint: "Reverse the order of operations on x." },
    { wrongPattern: "divides only part of a side", diagnosis: "(y − 3)/2 divides the whole side by 2 — never just y/2.", hint: "Divide the whole bracket, not one term." },
  ],
  recallTags: ["rearrange", "subject", "formulas"],
  discovery: {
    challenges: [
      { instruction: "Balance v = u + at with the scale. Make u the subject by removing at from both sides.", observe: "v − at = u — the balance holds and u stands alone." },
      { instruction: "Now make t the subject of the same formula.", observe: "v − u = at, then t = (v − u)/a — undo +u then ÷a." },
    ],
    predict: { prompt: "Make u the subject of v = u + at: what goes on the left?", options: [{ id: "a", text: "v − at" }, { id: "b", text: "v + at" }, { id: "c", text: "at − v" }], reveal: "v − at = u — subtract at from both sides to isolate u." },
    sayItYourWay: { prompt: "What does 'make x the subject' mean?", phrasings: [{ id: "a", text: "Rewrite so x is alone on one side", correct: true, why: "x = … with nothing else on x's side." }, { id: "b", text: "Give x a name", correct: false, why: "It's about rearranging, not naming." }, { id: "c", text: "Erase the other letters", correct: false, why: "The other letters stay — they move to the other side." }], formalName: "changing the subject of a formula" },
    stretch: "What if the letter you want appears twice, like x = ax + b? One x on each side can't be isolated by one move — you'll need to collect the x's together. That's coming in U14.",
  },
};
