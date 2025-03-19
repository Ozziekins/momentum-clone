import { render, screen, waitFor } from "@testing-library/svelte";
import "@testing-library/jest-dom";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { beforeEach, describe, expect, test, vi } from "vitest";
import WeatherWidget from "../WeatherWidget.svelte";

const mock = new MockAdapter(axios);

describe("WeatherWidget Component", () => {
	beforeEach(() => {
		mock.reset();

		global.navigator.geolocation = {
			getCurrentPosition: vi.fn().mockImplementation(
				(success) =>
					success({ coords: { latitude: 40.7128, longitude: -74.006 } }), // NYC Mock
			),
		};
	});

	test("fetches and displays weather data correctly", async () => {
		const mockWeather = {
			name: "New York",
			main: { temp: 22 },
			weather: [{ main: "Sunny" }],
		};

		// Ensure the mocked API call matches exactly
		mock.onGet(/weather/).reply(200, mockWeather);

		render(WeatherWidget);

		// Wait for API response and UI update
		await waitFor(() => {
			expect(screen.getByText(/New York, 22°C/)).toBeInTheDocument();
		});
	});
});
