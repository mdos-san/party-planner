const { test, expect } = require("@playwright/test");

test("When accessing page, layout should be correct", async ({ page }) => {
  await page.goto("http://localhost:8080/home.html");
  await expect(page).toHaveTitle("PartyPlanner - Accueil");

  const mainHeading = page.getByRole("heading", { name: "Accueil" });
  await expect(mainHeading).toBeInViewport();

  const eventHeading = page.getByRole("heading", { name: "Mes évènements" });
  await expect(eventHeading).toBeInViewport();

  const addEventLink = page.getByRole("link", { name: "Ajouter un évènement" });
  await expect(addEventLink).toBeInViewport();

  const noEventsText = page.getByText("Vous n'avez aucun évènement");
  await expect(noEventsText).toBeInViewport();
});
