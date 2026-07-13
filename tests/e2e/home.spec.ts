import { expect, test } from "@playwright/test";

test("home page loads with the portfolio title", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Arif/i);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});

test("theme toggle switches between light and dark", async ({ page }) => {
  await page.goto("/");
  const html = page.locator("html");
  const toggle = page.getByRole("button", { name: /toggle color theme/i });

  // Force a known starting state, then toggle and assert the class flips.
  await page.emulateMedia({ colorScheme: "light" });
  await expect(html).not.toHaveClass(/dark/);

  await toggle.click();
  await expect(html).toHaveClass(/dark/);

  await toggle.click();
  await expect(html).not.toHaveClass(/dark/);
});
