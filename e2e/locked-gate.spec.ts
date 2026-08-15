import { test, expect } from "@playwright/test";

// The lesson route is gated client-side by the prerequisite chain. A fresh
// profile (no stored progress) must NOT be able to open a deep lesson directly;
// it should see the locked panel and a path back to the map instead.

test("a fresh profile cannot open a locked lesson directly", async ({ page }) => {
  // Other specs seed the progress store into the shared worker's localStorage;
  // force a truly fresh profile by clearing the key before any page loads.
  await page.addInitScript(() => {
    window.localStorage.removeItem("math-foundations-progress-v1");
  });
  const consoleErrors: string[] = [];
  page.on("console", (msg) => { if (msg.type() === "error") consoleErrors.push(msg.text()); });
  page.on("pageerror", (err) => consoleErrors.push(err.message));
  page.on("response", (res) => { if (res.status() >= 400) consoleErrors.push(`HTTP ${res.status()} ${res.url()}`); });

  // No seedProgress — brand-new localStorage-less profile.
  await page.goto("/mathcraft/lesson/T2-U11-L1");

  await expect(page.getByRole("heading", { name: "This lesson is locked" })).toBeVisible();
  await expect(page.getByRole("link", { name: "View the learning path" })).toBeVisible();

  // The very first lesson of the whole curriculum IS open on a fresh profile.
  await page.goto("/mathcraft/lesson/T1-U1-L1");
  await expect(page.getByRole("heading", { name: "How Big Is a Million?" })).toBeVisible();

  expect(consoleErrors).toEqual([]);
});