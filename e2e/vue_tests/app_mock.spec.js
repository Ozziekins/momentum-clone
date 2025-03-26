import { expect, test } from "@playwright/test";

const mockQuote = {
	content: "Be yourself; everyone else is already taken.",
	author: "Oscar Wilde",
};

const mockWeather = {
	name: "Barcelona",
	main: { temp: 25 },
	weather: [{ main: "Clear" }],
};

test.describe("Vue App End-to-End", () => {
	test.beforeEach(async ({ page }) => {
		// Clear localStorage and mock fetch APIs before each test
		await page.addInitScript(
			([quote, weather]) => {
				window.localStorage.clear();

				const originalFetch = window.fetch;
				window.fetch = async (url, ...args) => {
					if (url.includes("zenquotes.io")) {
						return new Response(JSON.stringify(quote), {
							headers: { "Content-Type": "application/json" },
						});
					}
					if (url.includes("api.openweathermap.org")) {
						return new Response(JSON.stringify(weather), {
							headers: { "Content-Type": "application/json" },
						});
					}
					return originalFetch(url, ...args);
				};
			},
			[mockQuote, mockWeather],
		);

		await page.goto("/");
	});

	test("loads and displays default username", async ({ page }) => {
		const greeting = await page.locator("h2");
		await expect(greeting).toContainText(/Click to enter name/);
	});

	test("can edit name and see it reflected in greeting", async ({ page }) => {
		await page.getByText(/Click to enter name/).click();
		const input = page.locator("input.username-input");
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

		const weekday = today.split(",")[0];
		const dateLocator = page.locator(".date-display");
		await expect(dateLocator).toContainText(weekday);
	});

	test("displays current time", async ({ page }) => {
		const clock = page.locator(".clock h1");
		await expect(clock).not.toHaveText("");
	});

	test.skip("shows the mocked daily quote", async ({ page }) => {
		const quote = page.locator(".quote");
		await expect(quote).toContainText(mockQuote.content);
		await expect(quote).toContainText(mockQuote.author);
	});

	test.skip("shows mocked weather info", async ({ page }) => {
		const weather = page.locator(".weather");
		await expect(weather).toContainText("Barcelona");
		await expect(weather).toContainText("25°C");
		await expect(weather).toContainText("Clear");
	});

	test("applies background image", async ({ page }) => {
		const bg = page.locator(".bg");
		const style = await bg.getAttribute("style");
		expect(style).toContain("background-image");
	});
});
