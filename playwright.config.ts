import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: false,
  workers: 1,
  retries: 0,
  timeout: 120_000,
  use: {
    // Static export served Pages-style (out/ mounted at /mathcraft/).
    // baseURL is the host root; the spec navigates to /mathcraft/ explicitly.
    baseURL: "http://localhost:3210",
    trace: "on-first-retry",
    actionTimeout: 30_000,
  },
  projects: [
    {
      name: "mobile-chromium",
      use: {
        ...devices["Pixel 5"],
        launchOptions: {
          executablePath:
            process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE ??
            "C:\\Users\\X E R O\\AppData\\Local\\ms-playwright\\chromium-1234\\chrome-win64\\chrome.exe",
        },
      },
    },
  ],
  // Serve the static export exactly like GitHub Pages (mounts out/ at /mathcraft/).
  // `node` resolves to the portable Node 22 on PATH (see README); build must be run first.
  webServer: {
    command: 'node scripts/serve-export.mjs 2>&1',
    url: "http://localhost:3210/mathcraft/",
    timeout: 60_000,
    reuseExistingServer: true,
  },
});