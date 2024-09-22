const { test, expect } = require("@playwright/test");

test("When accessing page, layout should be correct", async ({ page }) => {
  await page.goto("http://localhost:8080/add-event.html");
  await expect(page).toHaveTitle("PartyPlanner - Création");

  const mainHeading = page.getByRole("heading", {
    name: "Création d'un évènement",
  });
  await expect(mainHeading).toBeInViewport();

  const nameInput = page.getByLabel("Nom de l'évènement");
  await expect(nameInput).toBeInViewport();

  const descriptionInput = page.getByLabel("Description de l'évènement");
  await expect(descriptionInput).toBeInViewport();

  const addEventButton = page.getByRole("button", {
    name: "Créer l'évènement",
  });
  await expect(addEventButton).toBeInViewport();
});
