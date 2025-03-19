import { render, screen, waitFor } from "@testing-library/vue";
import "@testing-library/jest-dom";
import moment from "moment";
import { describe, expect, test, vi } from "vitest";
import DateDisplay from "../DateDisplay.vue";

describe("DateDisplay Component", () => {
	test("renders today's date correctly", async () => {
		// Mock the current date
		const mockDate = "Thursday, March 13th 2025";
		vi.spyOn(moment.prototype, "format").mockReturnValue(mockDate);

		render(DateDisplay);

		await waitFor(() => {
			expect(screen.getByText(mockDate)).toBeInTheDocument();
		});
	});
});
