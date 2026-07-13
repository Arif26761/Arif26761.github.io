import { expect, test } from "@playwright/test";

test("home page loads with the portfolio title", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Arif/i);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});
