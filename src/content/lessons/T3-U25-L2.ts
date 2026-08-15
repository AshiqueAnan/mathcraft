import type { Lesson } from "../schema";

export const T3U25L2: Lesson = {
  // @meta
  id: "T3-U25-L2",
  tier: 3,
  unit: "Pythagoras",
  title: "Why It's Always True",
  prerequisites: ["T3-U24-L3","T3-U25-L1"],
  estimatedMinutes: 14,
  hook: { question: "9 + 16 = 25 worked for 3-4-5, and 36 + 64 = 100 for 6-8-10. But a right triangle with legs 2 and 3 has a hypotenuse of √13 — not a tidy whole number. Counting squares can't prove every case. Yet ONE rearrangement of four identical triangles settles it for all right triangles at once.", type: "paradox" },
  intuitionBlocks: [{ widget: "animated-proof", narrative: "Step through the four-triangle rearrangement: two squares (a² and b²) sit side by side inside a bigger square of side a + b. Four copies of the right triangle fill the leftover corners. Slide the triangles and the two small squares MERGE into one square on the hypotenuse — the same space, just recut. Press next to follow each move." }],

  // @discovery
  formalBlocks: [{ definition: "The proof by rearrangement: take a square of side $a + b$. Fill its corners with 4 congruent right triangles (legs a, b, hypotenuse c). The leftover shape is two squares of areas $a^2$ and $b^2$. Slide the triangles differently, and the same leftover space becomes ONE square of side c, area $c^2$. Same leftover area both ways — so $a^2 + b^2 = c^2$ for EVERY right triangle.", examples: ["Legs 2 and 3: a² + b² = 4 + 9 = 13 = c², so c = √13 ≈ 3.606 — irrational but real.", "Legs 5 and 12: 25 + 144 = 169 = 13² — a perfect triple again, same proof applies."], pitfall: "The proof needs the SAME four triangles in both arrangements. If you change the triangles, you change the leftover area. Keep the copies identical and only slide them.", altExplanations: ["GAME: a shape-shift puzzle — a big square of side a+b holds 4 identical right triangles; slide them and the leftover space first shows two squares (a² and b²), then one square (c²). Same leftover area both arrangements proves a² + b² = c² for every right triangle.", "FOOD: rearranging four identical slices in the same pan — the leftover crust area stays constant whether it lands as two small squares or one big square. Identical triangles sliding proves the square-counts always match."] }],
  gutChecks: [{ prompt: "What 'stays the same' when the triangles slide?", answer: "The leftover area — the two arrangements show the same total space, first as a² + b², then as c²." }],
  quiz: {
    pool: [
      // @q01
      { id: "U25L2-mcq-1", type: "mcq", category: "procedural", prompt: "Legs 2 and 3, hypotenuse c. c² = …", options: [ { id: "a", text: "13" }, { id: "b", text: "5" }, { id: "c", text: "36" }, { id: "d", text: "6" } ], correctOptionId: "a", diagnoses: { b: "5 adds the legs without squaring.", c: "36 multiplies 2 and 3 and squares wrong.", d: "6 is 2 × 3 — a rectangle, not the hypotenuse squared." }, explanation: "2² + 3² = 4 + 9 = 13.", hints: ["2² = 4, 3² = 9.", "4 + 9.", "13."] },
      // @q02
      { id: "U25L2-mcq-2", type: "mcq", category: "conceptual", prompt: "In the rearrangement proof, the 'leftover' area…", options: [ { id: "a", text: "stays the same in both arrangements" }, { id: "b", text: "doubles when the triangles slide" }, { id: "c", text: "shrinks to half" }, { id: "d", text: "depends on the triangle sizes" } ], correctOptionId: "a", diagnoses: { b: "Sliding doesn't change the area — only the shape.", c: "Same four triangles, same leftover space.", d: "The leftover is fixed by the big square minus four triangles." }, explanation: "Same total square, same four triangles → same leftover area, reshaped.", hints: ["Same square minus same triangles.", "Area conserved.", "Stays the same."] },
      // @q03
      { id: "U25L2-mcq-3", type: "mcq", category: "word", prompt: "A right triangle with legs 5 and 12: the proof guarantees c² = …", options: [ { id: "a", text: "169" }, { id: "b", text: "60" }, { id: "c", text: "17" }, { id: "d", text: "289" } ], correctOptionId: "a", diagnoses: { b: "60 is 5 × 12 — that's a rectangle.", c: "17 adds the legs.", d: "289 is 17² of the wrong sum." }, explanation: "25 + 144 = 169 = 13².", hints: ["25 + 144.", "169.", "c² = 169."] },
      // @q04
      { id: "U25L2-mcq-4", type: "mcq", category: "procedural", prompt: "Legs 7 and 24. The hypotenuse is…", options: [ { id: "a", text: "25" }, { id: "b", text: "31" }, { id: "c", text: "168" }, { id: "d", text: "625" } ], correctOptionId: "a", diagnoses: { b: "31 adds the legs.", c: "168 multiplies them.", d: "625 is c² — take the root." }, explanation: "49 + 576 = 625 = 25².", hints: ["49 + 576.", "√625.", "25."] },
      // @q05
      { id: "U25L2-mcq-5", type: "mcq", category: "conceptual", prompt: "Why does counting squares on a grid NOT prove Pythagoras for ALL triangles?", options: [ { id: "a", text: "Some hypotenuses aren't whole numbers, so their squares don't tile the grid" }, { id: "b", text: "Grids only work for squares" }, { id: "c", text: "Right triangles never sit on clean points" }, { id: "d", text: "Counting takes too long" } ], correctOptionId: "a", diagnoses: { b: "Grids handle many shapes, but irrational lengths break the tilings.", c: "Right triangles with rational legs do sit on clean points.", d: "Time isn't the mathematical objection." }, explanation: "The rearrangement proof covers irrational hypotenuses like √13 — counting can't.", hints: ["√13 isn't whole.", "No clean tiling.", "That."] },
      // @q06
      { id: "U25L2-mcq-6", type: "mcq", category: "word", prompt: "A right triangle's hypotenuse is 10 and one leg is 6. The other leg is…", options: [ { id: "a", text: "8" }, { id: "b", text: "4" }, { id: "c", text: "16" }, { id: "d", text: "136" } ], correctOptionId: "a", diagnoses: { b: "4 is 10 − 6 — you must subtract squares, then root.", c: "16 is b² — take the square root.", d: "136 is 100 + 36 — that adds the squares." }, explanation: "b² = 100 − 36 = 64 → b = 8.", hints: ["100 − 36.", "√64.", "8."] },
      // @q07
      { id: "U25L2-num-1", type: "numeric-input", category: "procedural", prompt: "Legs 2 and 3. c² = …", answer: 13, tolerance: 0, explanation: "4 + 9 = 13.", hints: ["2² + 3².", "13.", "13."] },
      // @q08
      { id: "U25L2-num-2", type: "numeric-input", category: "procedural", prompt: "Legs 9 and 12. The hypotenuse is…", answer: 15, tolerance: 0, explanation: "81 + 144 = 225 = 15².", hints: ["81 + 144.", "√225.", "15."] },
      // @q09
      { id: "U25L2-num-3", type: "numeric-input", category: "conceptual", prompt: "Legs 1 and 1. c² = …", answer: 2, tolerance: 0, explanation: "1 + 1 = 2 → the hypotenuse is √2.", hints: ["1² + 1².", "2.", "c = √2."] },
      // @q10
      { id: "U25L2-frac-1", type: "fraction-input", category: "conceptual", prompt: "In a 1-1-√2 right triangle, the hypotenuse is √2. What fraction of the triangle's leg-square total (2) is the hypotenuse's square (2)?", numerator: 1, denominator: 1, acceptEquivalent: true, explanation: "c² = 2 and a² + b² = 2 — the rearrangement says they're EQUAL, a 1/1 match.", hints: ["Both equal 2.", "1/1.", "1."] },
      // @q11
      { id: "U25L2-tf-1", type: "true-false-justify", category: "conceptual", prompt: "The rearrangement proof works even when the hypotenuse is irrational like √13.", isTrue: true, explanation: "The proof never counts unit squares — it compares the same area recut, so irrational lengths are fine.", hints: ["No counting needed.", "Area is conserved.", "True."] },
      // @q12
      { id: "U25L2-tf-2", type: "true-false-justify", category: "conceptual", prompt: "In the proof, you may use DIFFERENT triangles in each arrangement.", isTrue: false, explanation: "The four triangles must be the same copies — different triangles change the leftover area.", hints: ["Identical copies.", "Same four triangles.", "False."] },
      // @q13
      { id: "U25L2-order-1", type: "order-steps", category: "word", prompt: "Order the steps of the rearrangement proof.", sequence: ["Start with a square of side a + b", "Fit 4 identical right triangles in the corners", "Compare the leftover areas: a² + b² = c²"], diagnoses: { "Start with a square of side a + b@1": "Start with the big square.", "Fit 4 identical right triangles in the corners@0": "Then the triangles.", "Compare the leftover areas: a² + b² = c²@0": "Compare last." }, explanation: "Big square, triangles, compare leftover.", hints: ["Side a + b.", "4 triangles.", "Compare leftovers."] },
      // @q14
      { id: "U25L2-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each arrangement to its leftover shape.", pairs: [ { source: "First arrangement", target: "squares a² and b²" }, { source: "Second arrangement", target: "one square c²" }, { source: "Big square side", target: "a + b" } ], diagnoses: { "First arrangement->one square c²": "First arrangement keeps two small squares.", "Second arrangement->squares a² and b²": "Second arrangement merges into one square.", "Big square side->c": "The big square's side is a + b, not c." }, explanation: "Same leftover area, two different shapes: a²+b² then c².", hints: ["First = two squares.", "Second = one square.", "Big side = a + b."] },
      // @q15
      { id: "U25L2-graph-1", type: "graph-interact", category: "word", prompt: "Legs 6 and 8. Set the slider to c², the hypotenuse squared (key: value).", challenge: "Set the slider to 100.", validate: { value: 100 }, tolerance: 0.01, explanation: "36 + 64 = 100 = c².", hints: ["36 + 64.", "100.", "100."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "stops at c² without rooting", diagnosis: "The proof gives c² (area); the side c needs a square root afterward.", hint: "Undo the square." },
    { wrongPattern: "changes the triangles between arrangements", diagnosis: "Different triangles change the leftover area — the equality breaks.", hint: "Keep the 4 copies identical." },
    { wrongPattern: "thinks the proof only works for whole numbers", diagnosis: "No unit-square counting involved — irrational hypotenuses work too.", hint: "Area conservation needs no counting." },
  ],
  recallTags: ["proof", "rearrangement", "Pythagoras", "area conservation", "hypotenuse"],
  discovery: {
    challenges: [
      { instruction: "Step the animation: watch the two small squares merge into one.", observe: "The total leftover area never changes — same space, new shape." },
      { instruction: "Run the proof again with a different a and b.", observe: "The merge still works — big square (a+b)² minus four triangles is always both a²+b² and c²." },
    ],
    predict: { prompt: "Legs 1 and 2: the two small squares' total area equals…", options: [{ id: "a", text: "5 = c²" }, { id: "b", text: "3" }, { id: "c", text: "2" }], reveal: "5 — 1 + 4 = 5, so the hypotenuse is √5. The proof handles it even though no integer works." },
    sayItYourWay: { prompt: "What does the rearrangement show?", phrasings: [{ id: "a", text: "The same leftover area appears as a²+b² one way and c² the other", correct: true, why: "Conserved area proves the equality." }, { id: "b", text: "Four triangles always make a bigger square", correct: false, why: "The triangles just fill corners — the point is the leftover." }, { id: "c", text: "The hypotenuse is larger than both legs added", correct: false, why: "It's smaller than the sum of the legs, actually." }], formalName: "Pythagoras' theorem by rearrangement (area conservation proof)" },
    stretch: "Now that the theorem is proven, use it: U25-L3 finds any side — a hypotenuse to square-root, or a leg to subtract and root.", 
  },
};
