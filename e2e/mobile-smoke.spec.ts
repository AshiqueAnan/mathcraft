import { test, expect } from "@playwright/test";
import { seedProgress } from "./quiz-helpers";
import { BUILT_LESSONS } from "../src/content/lessons";

/**
 * Phase C gate: every published lesson renders on a phone viewport with
 * zero console errors. Covers the 9 newly authored lessons (U8-L1..L3,
 * U9-L1..L3, U10-L1..L3) plus the rest of Tier 1.
 */

const consoleErrors: string[] = [];

test.beforeEach(async ({ page }) => {
  consoleErrors.length = 0;
  page.on("console", (msg) => { if (msg.type() === "error") consoleErrors.push(msg.text()); });
  page.on("pageerror", (err) => consoleErrors.push(err.message));
  page.on("response", (res) => { if (res.status() >= 400) consoleErrors.push(`HTTP ${res.status()} ${res.url()}`); });
  await page.route(/googletagmanager\.com|google-analytics\.com/, (route) =>
    route.fulfill({ status: 200, contentType: "text/javascript", body: "window.dataLayer=[];" }).catch(() => {})
  );
});

for (const lesson of BUILT_LESSONS) {
  test(`${lesson.id} renders on mobile with zero console errors`, async ({ page }) => {
    await seedProgress(page, lesson.id);
    await page.goto(`/mathcraft/lesson/${lesson.id}`);
    await expect(page.getByRole("heading", { name: lesson.title })).toBeVisible();
    // Some retrofitted lessons (e.g. T1-U4-L1) carry two widgets in one
    // intuition block; `.first()` keeps the smoke assertion valid for all.
    await expect(page.locator(".widget-surface").first()).toBeVisible();
    expect(consoleErrors).toEqual([]);
  });
}