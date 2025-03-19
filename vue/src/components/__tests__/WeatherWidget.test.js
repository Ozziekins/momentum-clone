import { render, screen, waitFor } from "@testing-library/vue";
import "@testing-library/jest-dom";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { beforeEach, describe, expect, test, vi } from "vitest";
import WeatherWidget from "../WeatherWidget.vue";

const mock = new MockAdapter(axios);

describe("WeatherWidget Component", () => {
	beforeEach(() => {
		mock.reset();

		global.navigator.geolocation = {
			getCurrentPosition: vi.fn().mockImplementation(
				(success) =>
					success({ coords: { latitude: 40.7128, longitude: -74.006 } }), // Mock location: NYC
			),
		};
	});

	test("fetches and displays weather data correctly", async () => {
		const mockWeather = {
			name: "New York",
			main: { temp: 22 },
			weather: [{ main: "Sunny" }],
		};

		mock
			.onGet("https://api.openweathermap.org/data/2.5/weather")
			.reply(200, mockWeather);

		render(WeatherWidget);

		// Wait for fetch
		await waitFor(() => {
			expect(screen.getByText("New York, 22°C")).toBeInTheDocument();
		});
	});
});
