import { expect, test } from "@playwright/test";

test.describe("Svelte App End-to-End", () => {
	test.beforeEach(async ({ page }) => {
		// Clear localStorage before each test to ensure a fresh start
		await page.addInitScript(() => localStorage.clear());
		await page.goto("/");
	});

	test("loads and displays default username", async ({ page }) => {
		const greeting = await page.locator("button.greeting");
		await expect(greeting).toContainText(/Click to enter name/);
	});

	test("can edit name and see it reflected in greeting", async ({ page }) => {
		await page.getByText(/Click to enter name/).click();
		const input = page.locator("input.username-input");
		await input.fill("Ozzie");
		await input.press("Enter");
		await expect(page.locator("button.greeting")).toContainText("Ozzie");
	});

	test("displays current date", async ({ page }) => {
		const today = new Date().toLocaleDateString("en-US", {
			weekday: "long",
			year: "numeric",
			month: "long",
			day: "numeric",
		});

		const weekday = today.split(",")[0];
		const dateLocator = page.locator(".date-display");
		await expect(dateLocator).toContainText(weekday);
	});

	test("displays current time", async ({ page }) => {
		const clock = page.locator(".clock h1");
		await expect(clock).not.toHaveText("");
	});

	test.skip("shows a daily quote", async ({ page }) => {
		const quote = page.locator(".quote");
		await expect(quote).not.toHaveText("");
	});

	test.skip("renders weather widget", async ({ page }) => {
		const weather = page.locator(".weather");
		await expect(weather).not.toHaveText("");
	});

	test("applies background image", async ({ page }) => {
		const bg = page.locator(".bg");
		const style = await bg.getAttribute("style");
		expect(style).toContain("background-image");
	});
});
