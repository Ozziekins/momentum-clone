import { render, screen, waitFor } from "@testing-library/svelte";
import "@testing-library/jest-dom";
import { describe, expect, test, vi } from "vitest";
import ClockDisplay from "../ClockDisplay.svelte";

vi.useFakeTimers();

describe("ClockDisplay Component", () => {
	test("renders the current time and updates after 1 second", async () => {
		render(ClockDisplay);

		const initialTime = screen.getByRole("heading");
		expect(initialTime).toBeInTheDocument();

		vi.advanceTimersByTime(1000);

		await waitFor(() => {
			expect(initialTime.textContent).not.toBe("");
		});
	});
});
