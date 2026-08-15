/**
 * Curriculum registry — Section 3 of the spec.
 * 5 Tiers → 14 Modules → Units → Lessons (ID pattern T{tier}-U{unit}-L{lesson}).
 */

export interface UnitMeta {
  id: string; // e.g. "U4"
  name: string;
  description: string;
  /** Ordered lesson IDs. For Phase 1 only U4 lessons have content; the rest are locked placeholders. */
  lessonIds: string[];
}

export interface ModuleMeta {
  id: number;
  name: string;
  units: UnitMeta[];
}

export interface TierMeta {
  id: number;
  name: string;
  modules: ModuleMeta[];
}

export const CURRICULUM: TierMeta[] = [
  {
    id: 1,
    name: "Number Foundations",
    modules: [
      {
        id: 1,
        name: "The Number System",
        units: [
          {
            id: "U1",
            name: "Number sense",
            description: "Place value, negatives, ordering, approximation intuition.",
            lessonIds: ["T1-U1-L1", "T1-U1-L2", "T1-U1-L3"],
          },
          {
            id: "U2",
            name: "Arithmetic fluency",
            description: "Order of operations, brackets, mental strategies, inverse operations.",
            lessonIds: ["T1-U2-L1", "T1-U2-L2", "T1-U2-L3"],
          },
          {
            id: "U3",
            name: "Primes & factorization",
            description: "Factors, primes, factorization, HCF & LCM, word problems.",
            lessonIds: ["T1-U3-L1", "T1-U3-L2", "T1-U3-L3", "T1-U3-L4"],
          },
        ],
      },
      {
        id: 2,
        name: "Parts of a Whole",
        units: [
          {
            id: "U4",
            name: "Fractions",
            description: "Part-whole, equivalence, comparing, the four operations — with the why.",
            lessonIds: ["T1-U4-L1", "T1-U4-L2", "T1-U4-L3", "T1-U4-L4", "T1-U4-L5", "T1-U4-L6"],
          },
          {
            id: "U5",
            name: "Decimals & percentages",
            description: "Conversions, percentage change, reverse percentages.",
            lessonIds: ["T1-U5-L1", "T1-U5-L2", "T1-U5-L3", "T1-U5-L4"],
          },
          {
            id: "U6",
            name: "Ratio & proportion",
            description: "Ratio, sharing, direct & inverse proportion, the unifying idea.",
            lessonIds: ["T1-U6-L1", "T1-U6-L2", "T1-U6-L3"],
          },
        ],
      },
      {
        id: 3,
        name: "Powers & Scale",
        units: [
          {
            id: "U7",
            name: "Indices",
            description: "Repeated multiplication, laws of indices, zero/negative/fractional indices.",
            lessonIds: ["T1-U7-L1", "T1-U7-L2", "T1-U7-L3", "T1-U7-L4"],
          },
          {
            id: "U8",
            name: "Roots & surds",
            description: "Square/cube roots, simplifying surds, rationalizing (intro).",
            lessonIds: ["T1-U8-L1", "T1-U8-L2", "T1-U8-L3"],
          },
          {
            id: "U9",
            name: "Standard form & accuracy",
            description: "Scientific notation, sig figs vs dp, estimation, bounds intuition.",
            lessonIds: ["T1-U9-L1", "T1-U9-L2", "T1-U9-L3"],
          },
          {
            id: "U10",
            name: "Sets",
            description: "Notation, Venn diagrams, union, intersection, complement.",
            lessonIds: ["T1-U10-L1", "T1-U10-L2", "T1-U10-L3"],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Algebra Foundations",
    modules: [
      {
        id: 4,
        name: "The Language of Algebra",
        units: [
          {
            id: "U11",
            name: "Variables & expressions",
            description: "Letters as unknowns & generalizers, notation, substitution, like terms.",
            lessonIds: ["T2-U11-L1", "T2-U11-L2", "T2-U11-L3"],
          },
          {
            id: "U12",
            name: "Manipulation",
            description: "Expanding brackets, factorization, quadratics x²+bx+c, difference of squares.",
            lessonIds: ["T2-U12-L1", "T2-U12-L2", "T2-U12-L3", "T2-U12-L4"],
          },
          {
            id: "U13",
            name: "Formulas",
            description: "Reading formulas, substitution with units, changing the subject.",
            lessonIds: ["T2-U13-L1", "T2-U13-L2", "T2-U13-L3"],
          },
        ],
      },
      {
        id: 5,
        name: "Equations & Patterns",
        units: [
          {
            id: "U14",
            name: "Solving equations",
            description: "Balance logic, linear equations, equations with fractions, forming equations.",
            lessonIds: ["T2-U14-L1", "T2-U14-L2", "T2-U14-L3", "T2-U14-L4"],
          },
          {
            id: "U15",
            name: "Simultaneous & quadratic equations",
            description: "Substitution, elimination, graphical interpretation, factorization, the formula.",
            lessonIds: ["T2-U15-L1", "T2-U15-L2", "T2-U15-L3", "T2-U15-L4"],
          },
          {
            id: "U16",
            name: "Inequalities",
            description: "Number line meaning, solving, sign-flip when ×/÷ negative, integer solutions.",
            lessonIds: ["T2-U16-L1", "T2-U16-L2", "T2-U16-L3"],
          },
          {
            id: "U17",
            name: "Sequences",
            description: "Patterns, term-to-term vs position-to-term, nth term, geometric sequences.",
            lessonIds: ["T2-U17-L1", "T2-U17-L2", "T2-U17-L3"],
          },
        ],
      },
      {
        id: 6,
        name: "Graphs",
        units: [
          {
            id: "U18",
            name: "Coordinates & straight lines",
            description: "Cartesian plane, gradient as rate of change, y = mx + c deeply, parallel lines.",
            lessonIds: ["T2-U18-L1", "T2-U18-L2", "T2-U18-L3", "T2-U18-L4"],
          },
          {
            id: "U19",
            name: "Curves",
            description: "Quadratics: roots/vertex/axis, cubic & reciprocal shape recognition, graph solving.",
            lessonIds: ["T2-U19-L1", "T2-U19-L2", "T2-U19-L3"],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Geometry & Measurement",
    modules: [
      {
        id: 7,
        name: "Shape & Angles",
        units: [
          {
            id: "U20",
            name: "Angle reasoning",
            description: "Angles at a point/on a line, parallel lines & transversals, triangle angle sum, exterior angles.",
            lessonIds: ["T3-U20-L1", "T3-U20-L2", "T3-U20-L3", "T3-U20-L4"],
          },
          {
            id: "U21",
            name: "Polygons & circles",
            description: "Interior/exterior angle sums, special triangles & quadrilaterals, circle vocabulary & theorems.",
            lessonIds: ["T3-U21-L1", "T3-U21-L2", "T3-U21-L3", "T3-U21-L4"],
          },
          {
            id: "U22",
            name: "Construction & symmetry",
            description: "Compass constructions, loci basics, line & rotational symmetry.",
            lessonIds: ["T3-U22-L1", "T3-U22-L2", "T3-U22-L3"],
          },
        ],
      },
      {
        id: 8,
        name: "Measurement",
        units: [
          {
            id: "U23",
            name: "Length, area, volume",
            description: "Perimeter, areas derived from rectangles, circles, prisms, unit conversion & dimension.",
            lessonIds: ["T3-U23-L1", "T3-U23-L2", "T3-U23-L3", "T3-U23-L4"],
          },
          {
            id: "U24",
            name: "Compound & real problems",
            description: "Composite shapes, arcs & sectors, cost/coverage word problems.",
            lessonIds: ["T3-U24-L1", "T3-U24-L2", "T3-U24-L3"],
          },
        ],
      },
      {
        id: 9,
        name: "Position & Triangles",
        units: [
          {
            id: "U25",
            name: "Pythagoras",
            description: "Geometric proof, finding any side, 3D diagonals, the converse.",
            lessonIds: ["T3-U25-L1", "T3-U25-L2", "T3-U25-L3", "T3-U25-L4"],
          },
          {
            id: "U26",
            name: "Trigonometry fundamentals",
            description: "sin/cos/tan as ratios, finding sides & angles, contexts, special angles.",
            lessonIds: ["T3-U26-L1", "T3-U26-L2", "T3-U26-L3", "T3-U26-L4"],
          },
          {
            id: "U27",
            name: "Transformations & coordinates",
            description: "Reflection/rotation/translation/enlargement, describing transformations, distance & midpoint.",
            lessonIds: ["T3-U27-L1", "T3-U27-L2", "T3-U27-L3"],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Data & Probability",
    modules: [
      {
        id: 10,
        name: "Data & Chance",
        units: [
          {
            id: "U28",
            name: "Data & averages",
            description: "Grouping data, mean/median/mode, when each average misleads, charts & correlation.",
            lessonIds: ["T4-U28-L1", "T4-U28-L2", "T4-U28-L3", "T4-U28-L4"],
          },
          {
            id: "U29",
            name: "Probability",
            description: "The 0–1 scale, equally likely outcomes, relative frequency, combined events, independence.",
            lessonIds: ["T4-U29-L1", "T4-U29-L2", "T4-U29-L3", "T4-U29-L4"],
          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Additional Mathematics Bridges",
    modules: [
      {
        id: 11,
        name: "Functions",
        units: [
          {
            id: "U30",
            name: "Functions",
            description: "Machines & notation f(x), domain & range, composites, inverses, graph transformations.",
            lessonIds: ["T5-U30-L1", "T5-U30-L2", "T5-U30-L3"],
          },
        ],
      },
      {
        id: 12,
        name: "Quadratics in depth",
        units: [
          {
            id: "U31",
            name: "Quadratics in depth",
            description: "Completing the square, vertex form, the discriminant, word problems.",
            lessonIds: ["T5-U31-L1", "T5-U31-L2", "T5-U31-L3"],
          },
        ],
      },
      {
        id: 13,
        name: "Exponentials & logarithms",
        units: [
          {
            id: "U32",
            name: "Exponentials & logarithms",
            description: "Growth/decay, graphs of aˣ, logs as the power question, laws, binomial bridge.",
            lessonIds: ["T5-U32-L1", "T5-U32-L2", "T5-U32-L3"],
          },
        ],
      },
      {
        id: 14,
        name: "Polynomials & further trig",
        units: [
          {
            id: "U33",
            name: "Polynomials & further trig",
            description: "Polynomial arithmetic, factor & remainder theorems, sine & cosine rules, identities.",
            lessonIds: ["T5-U33-L1", "T5-U33-L2", "T5-U33-L3"],
          },
        ],
      },
    ],
  },
];

/** Flat lookup of every unit. */
export const UNITS: Record<string, UnitMeta> = Object.fromEntries(
  CURRICULUM.flatMap((t) => t.modules).flatMap((m) => m.units).map((u) => [u.id, u])
);

/** All lesson IDs in curriculum order. */
export const ALL_LESSON_IDS: string[] = Object.values(UNITS).flatMap((u) => u.lessonIds);

export function unitForLesson(lessonId: string): UnitMeta | undefined {
  return Object.values(UNITS).find((u) => u.lessonIds.includes(lessonId));
}

export function tierForUnit(unitId: string): TierMeta | undefined {
  return CURRICULUM.find((t) => t.modules.some((m) => m.units.some((u) => u.id === unitId)));
}

export function moduleForUnit(unitId: string): ModuleMeta | undefined {
  for (const tier of CURRICULUM) {
    const mod = tier.modules.find((m) => m.units.some((u) => u.id === unitId));
    if (mod) return mod;
  }
  return undefined;
}

/** Total lesson count across the full curriculum (~110 planned). */
export const TOTAL_LESSONS = ALL_LESSON_IDS.length;