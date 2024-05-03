// @ts-check
import { test } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("http://127.0.0.1:5501/");

  await page.pause();
  // Expect a title "to contain" a substring.
});
