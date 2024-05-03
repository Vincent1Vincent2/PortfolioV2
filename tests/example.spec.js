// @ts-check
const { test, expect } = require("@playwright/test");

test("has title", async ({ page }) => {
  await page.goto("https://vincent1vincent2.github.io/PortfolioV2/");

  // Expect a title "to contain" a substring.
});
