import { expect, test } from "@playwright/test";

test.describe("Vue App End-to-End", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("/");
	});

	test("loads and displays default username", async ({ page }) => {
		const greeting = await page.locator("h2");
		await expect(greeting).toContainText(/Click to enter name/);
	});

	test("can edit name and see it reflected in greeting", async ({ page }) => {
		await page.getByText(/Click to enter name/).click();
		const input = await page.locator("input.username-input");
		await input.fill("Ozzie");
		await input.press("Enter");

		await expect(page.locator("h2")).toContainText("Ozzie");
	});

	test("displays current date", async ({ page }) => {
		const today = new Date().toLocaleDateString("en-US", {
			weekday: "long",
			year: "numeric",
			month: "long",
			day: "numeric",
		});
		await expect(page.locator(".date-display")).toContainText(
			today.split(",")[0],
		); // at least weekday
	});

	test("displays current time", async ({ page }) => {
		const clock = page.locator(".clock h1");
		await expect(clock).not.toHaveText("");
	});

	test("shows a daily quote", async ({ page }) => {
		await expect(page.locator(".quote")).not.toHaveText("");
	});

	test("renders weather widget", async ({ page }) => {
		await expect(page.locator(".weather")).not.toHaveText("");
	});

	test("background image is applied", async ({ page }) => {
		const bg = page.locator(".bg");
		const style = await bg.getAttribute("style");
		expect(style).toContain("background-image");
	});
});
