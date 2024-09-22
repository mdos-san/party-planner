const { test, expect } = require("@playwright/test");

test("When accessing page, layout should be correct", async ({ page }) => {
  await page.goto("http://localhost:8080/sign-in.html");
  await expect(page).toHaveTitle(/PartyPlanner/);

  const mainHeading = page.getByRole("heading", { name: "PartyPlanner" });
  await expect(mainHeading).toBeInViewport();

  const loginInput = page.getByLabel("Login");
  await expect(loginInput).toBeInViewport();

  const passwordInput = page.getByLabel("Mot de passe");
  await expect(passwordInput).toBeInViewport();

  const connectButton = page.getByRole("button", {
    name: "Me connecter",
  });
  await expect(connectButton).toBeInViewport();
});
