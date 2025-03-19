import { render, screen, waitFor } from "@testing-library/svelte";
import "@testing-library/jest-dom";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { beforeEach, describe, expect, test } from "vitest";
import DailyQuote from "../DailyQuote.svelte";

const mock = new MockAdapter(axios);

describe("DailyQuote Component", () => {
	beforeEach(() => {
		mock.reset();
	});

	test("renders fetched quote correctly", async () => {
		const fakeQuote = [{ q: "Test quote!", a: "Author" }];
		mock.onGet("/zenquotes/api/random").reply(200, fakeQuote);

		render(DailyQuote);

		expect(
			screen.getByText(/Stay positive, work hard, make it happen./),
		).toBeInTheDocument();

		await waitFor(() => {
			expect(screen.getByText(`"${fakeQuote[0].q}"`)).toBeInTheDocument();
		});
	});
});
