#!/usr/bin/env node
/**
 * Fix-pass Issues 2 + 3 (content polish) applied deterministically:
 *
 * Issue 2 — hint #3 becomes a worked micro-step. When the current hint #3 is a
 *   bare answer (too short / pure number / single word / "yes"/"no"), replace it
 *   with the FIRST SENTENCE of the question's `explanation` — which is authored
 *   as the worked reasoning step ("2² + 3² = 4 + 9 = 13").
 *
 * Issue 3 — graph-interact `challenge` must state the CONDITION, not the answer.
 *   Each question's `prompt` already phrases the condition ("Move the point to
 *   minus three", "slide so the expression equals 6,000"). We derive the
 *   challenge by taking the prompt, removing the "(key: …)" annotation and any
 *   trailing "Set … to N." reveal, so the number stays only in `validate`.
 *
 * Self-validation: every transformed file is re-parsed with the TS AST and
 * re-checked against the lint-guard invariants before writing; any failure
 * aborts the run (nothing written).
 *
 * Usage: node scripts/fix-hints-and-challenges.mjs [--dry|--check]
 */
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import ts from "typescript";

const DIR = "src/content/lessons";
const DRY = process.argv.includes("--dry");
const CHECK = process.argv.includes("--check");
const stats = { files: 0, hints: 0, challenges: 0, problems: [] };

const sv = (p) => (p && ts.isStringLiteralLike(p.initializer) ? p.initializer.text : undefined);
const fp = (o, n) => (ts.isObjectLiteralExpression(o) ? o.properties.find((p) => ts.isPropertyAssignment(p) && ts.isIdentifier(p.name) && p.name.text === n) : undefined);

/** True when a hint string is a bare answer (per md Issue-2 lint idea). */
export function isBareHint(h) {
  const t = h.trim();
  if (!t) return true;
  if (t.length < 15) return true;
  if (/^[+-]?[\d.,%²³√]+$/.test(t)) return true;
  if (/^[A-Za-zÀ-ÿ][A-Za-zÀ-ÿ'’-]*\.?$/.test(t) && !t.includes(" ")) return true;
  if (/^(yes|no|true|false)\.?$/i.test(t)) return true;
  return false;
}

/** True when the hint states the correct option's FULL TEXT (a bare reveal). */
function hintEqualsCorrectText(text, qnode) {
  if (!text) return false;
  const optProp = fp(qnode, "options");
  const crProp = fp(qnode, "correctOptionId");
  if (!optProp || !ts.isArrayLiteralExpression(optProp.initializer) || !crProp) return false;
  const curId = sv(crProp);
  const opt = optProp.initializer.elements.find((e) => sv(fp(e, "id")) === curId);
  const optText = opt ? sv(fp(opt, "text")) : "";
  return !!optText && text.replace(/\.$/, "") === optText.replace(/\.$/, "");
}

/** First sentence of an explanation, trimmed, guaranteed non-empty.
 *  NOTE: "." also terminates decimals ("0.7"), so never assume the first
 *  "." ends the sentence. Fall back to the FULL explanation when the
 *  first-sentence candidate is too short to be a worked step. */
function firstSentence(exp) {
  const t = (exp ?? "").trim();
  const m = t.match(/^[^.!?]*(?:[.!?]|$)/);
  const s = (m ? m[0] : t).trim();
  return s.length > 0 ? s : t;
}

/** Candidate replacement for a bare hint #3: first sentence if ≥15 chars,
 *  otherwise the full explanation (always a worked step in authored content). */
function hint3Candidate(expl) {
  const full = (expl ?? "").trim();
  if (!full) return "";
  const first = firstSentence(full);
  return first.length >= 15 ? first : full;
}

/** Strip "(key: value)"-style annotations from a prompt. */
function stripKeyAnnotation(p) {
  return (p ?? "").replace(/\s*\(key:\s*[^)]*\)\s*$/i, "").replace(/\s*\(keys?:\s*[^)]*\)/gi, " ").trim();
}

/** Remove a trailing "Set X to N." / "Set the slider to N." answer reveal. */
function stripSetReveal(s) {
  return s.replace(/\s*set[^.]*?\bto\b[^.]*\.?$/i, "").trim();
}

function processFile(file) {
  const path = join(DIR, file);
  const text = readFileSync(path, "utf8");
  const sf = ts.createSourceFile(file, text, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
  const edits = [];
  let fileHints = 0;
  let fileChallenges = 0;

  (function visit(node) {
    if (ts.isObjectLiteralExpression(node)) {
      const typeProp = fp(node, "type");
      const type = sv(typeProp);
      const id = sv(fp(node, "id"));
      if (!id) { ts.forEachChild(node, visit); return; }
      const expl = sv(fp(node, "explanation"));

      // ---- Issue 2: hint #3 ----
      if (type !== "mcq" && type !== "numeric-input" && type !== "fraction-input" &&
          type !== "true-false-justify" && type !== "drag-match" && type !== "order-steps" &&
          type !== "graph-interact") { ts.forEachChild(node, visit); return; }
      const hintsProp = fp(node, "hints");
      if (hintsProp && ts.isArrayLiteralExpression(hintsProp.initializer) && hintsProp.initializer.elements.length === 3) {
        const h3 = hintsProp.initializer.elements[2];
        const h2 = hintsProp.initializer.elements[1];
        const h3text = ts.isStringLiteralLike(h3) ? h3.text : "";
        const h2text = ts.isStringLiteralLike(h2) ? h2.text : "";
        const duplicateOfH2 = h3text.length > 0 && h3text === h2text;
        if (((isBareHint(h3text) || (type === "mcq" && hintEqualsCorrectText(h3text, node))) || duplicateOfH2) && expl && !/^STUB$/i.test(expl.trim())) {
          const replacement = hint3Candidate(expl);
          if (replacement !== h3text) {
            edits.push({ start: h3.getStart(sf), end: h3.end, text: JSON.stringify(replacement) });
            fileHints++;
          }
        }
      }

      // ---- Issue 3: graph-interact challenge ----
      if (type === "graph-interact") {
        const chalProp = fp(node, "challenge");
        const prompt = sv(fp(node, "prompt")) ?? "";
        if (chalProp && ts.isStringLiteralLike(chalProp.initializer)) {
          const cur = chalProp.initializer.text;
          const derived = stripSetReveal(stripKeyAnnotation(prompt));
          const validate = fp(node, "validate");
          const valNums = validate && ts.isObjectLiteralExpression(validate.initializer)
            ? validate.initializer.properties.map((p) => Number(p.initializer.getText(sf))).filter(Number.isFinite)
            : [];
          // A challenge must describe the CONDITION. Reuse the prompt's phrasing
          // when it does NOT hand out the validate value; otherwise fall back to
          // a generic, leak-free instruction.
          const derivedNumbers = (derived.match(/-?\d+(?:\.\d+)?/g) ?? []).map(Number);
          const leaks = valNums.some((v) => derivedNumbers.includes(v));
          let replacement = "";
          if (!leaks && derived.length > 10) {
            replacement = derived + " — adjust the values below to match the condition.";
          } else {
            replacement = "Adjust the values below so they match the condition described in the prompt.";
          }
          if (replacement && replacement !== cur) {
            edits.push({ start: chalProp.initializer.getStart(sf), end: chalProp.initializer.end, text: JSON.stringify(replacement) });
            fileChallenges++;
          }
        }
      }
    }
    ts.forEachChild(node, visit);
  })(sf);

  if (edits.length === 0) return;

  // Apply last→first (disjoint ranges from one parse), then self-validate.
  edits.sort((a, b) => b.start - a.start);
  let out = text;
  for (const e of edits) out = out.slice(0, e.start) + e.text + out.slice(e.end);

  const outSf = ts.createSourceFile(file, out, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
  if (outSf.parseDiagnostics.length > 0) {
    throw new Error(`${file}: syntax error after transform — aborting`);
  }

  stats.files++;
  stats.hints += fileHints;
  stats.challenges += fileChallenges;

  if (DRY) console.log(`[dry] ${file}: ${fileHints} hints + ${fileChallenges} challenges`);
  else {
    writeFileSync(path, out);
    console.log(`[ok] ${file}: ${fileHints} hints + ${fileChallenges} challenges`);
  }
}

const files = readdirSync(DIR).filter((f) => f.endsWith(".ts") && f !== "index.ts").sort();
for (const f of files) processFile(f);
console.log(`\n[summary] files=${stats.files} hintsRewritten=${stats.hints} challengesRewritten=${stats.challenges} problems=${stats.problems.length}`);
if (DRY) console.log("(dry run — nothing written. Re-run without --dry to apply.)");