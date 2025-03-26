// @ts-check
import { defineConfig, devices } from "@playwright/test";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
	testDir: "./e2e",
	/* Run tests in files in parallel */
	fullyParallel: true,
	/* Fail the build on CI if you accidentally left test.only in the source code. */
	forbidOnly: !!process.env.CI,
	/* Retry on CI only */
	retries: process.env.CI ? 2 : 0,
	/* Opt out of parallel tests on CI. */
	workers: process.env.CI ? 1 : undefined,
	/* Reporter to use. See https://playwright.dev/docs/test-reporters */
	reporter: "html",
	/* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
	use: {
		/* Base URL to use in actions like `await page.goto('/')`. */
		// baseURL: 'http://127.0.0.1:3000',

		/* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
		trace: "on-first-retry",
	},

	/* Configure projects for major browsers */
	projects: [
		{
			name: "Vue E2E (Chromium)",
			testDir: "./e2e/vue_tests",
			use: {
				baseURL: "http://localhost:5173",
				...devices["Desktop Chrome"],
				trace: "on-first-retry",
			},
		},
		{
			name: "Svelte E2E (Chromium)",
			testDir: "./e2e/svelte_tests",
			use: {
				baseURL: "http://localhost:5174",
				...devices["Desktop Chrome"],
				trace: "on-first-retry",
			},
		},
		{
			name: "Vue E2E (Firefox)",
			testDir: "./e2e/vue_tests",
			use: {
				baseURL: "http://localhost:5173",
				...devices["Desktop Firefox"],
				trace: "on-first-retry",
			},
		},
		{
			name: "Svelte E2E (Firefox)",
			testDir: "./e2e/svelte_tests",
			use: {
				baseURL: "http://localhost:5174",
				...devices["Desktop Firefox"],
				trace: "on-first-retry",
			},
		},
		{
			name: "Vue E2E (Webkit)",
			testDir: "./e2e/vue_tests",
			use: {
				baseURL: "http://localhost:5173",
				...devices["Desktop Safari"],
				trace: "on-first-retry",
			},
		},
		{
			name: "Svelte E2E (Webkit)",
			testDir: "./e2e/svelte_tests",
			use: {
				baseURL: "http://localhost:5174",
				...devices["Desktop Safari"],
				trace: "on-first-retry",
			},
		},
	],

	/* Run your local dev server before starting the tests */
	webServer: [
		{
			command: "cd vue && npm i && npm run dev -- --port=5173",
			url: "http://localhost:5173",
			timeout: 20_000,
			reuseExistingServer: !process.env.CI,
		},
		{
			command: "cd svelte && npm i && npm run dev -- --port=5174",
			url: "http://localhost:5174",
			timeout: 20_000,
			reuseExistingServer: !process.env.CI,
		},
	],
});
