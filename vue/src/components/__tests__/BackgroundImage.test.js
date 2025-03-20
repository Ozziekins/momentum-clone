import { render, screen, waitFor } from "@testing-library/vue";
import "@testing-library/jest-dom";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { beforeEach, describe, expect, test } from "vitest";
import BackgroundImage from "../BackgroundImage.vue";

const mock = new MockAdapter(axios);

describe("BackgroundImage Component", () => {
	beforeEach(() => {
		mock.reset();
	});

	test("fetches and displays an image from Unsplash", async () => {
		const mockImageUrl = "https://example.com/sample.jpg";

		mock.onGet("https://api.unsplash.com/photos/random").reply(200, {
			urls: { full: mockImageUrl },
		});

		render(BackgroundImage);

		// Wait for the image to be fetched and applied
		await waitFor(() => {
			const backgroundDiv = screen.getByRole("presentation");
			expect(backgroundDiv).toHaveStyle(
				`background-image: url(${mockImageUrl})`,
			);
		});
	});
});
