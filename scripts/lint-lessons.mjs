// lint-lessons (Phase C gate, spec section 6): fail the build if any lesson ships shallow.
// Runs the lesson-quality Vitest suite and exits non-zero on failure.
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const r = spawnSync(
  process.execPath,
  [join(ROOT, "node_modules", "vitest", "vitest.mjs"), "run", join(ROOT, "src", "lib", "__tests__", "lessons-lint.test.ts")],
  { cwd: ROOT, stdio: "inherit" }
);
if (r.error) {
  console.error("[lint-lessons] launch failed:", r.error.message);
  process.exit(2);
}
if (r.status !== 0) {
  console.error(`[lint-lessons] FAILED (exit ${r.status}) — fix every issue before building.`);
  process.exit(r.status ?? 1);
}
console.log("[lint-lessons] OK — every built lesson meets the MathCraft bar.");