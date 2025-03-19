import { render, screen } from "@testing-library/svelte";
import "@testing-library/jest-dom";
import moment from "moment";
import { describe, expect, test, vi } from "vitest";
import DateDisplay from "../DateDisplay.svelte";

describe("DateDisplay Component", () => {
	test("renders today's date correctly", () => {
		// Mock some date
		const mockDate = "Thursday, March 13th 2025";
		vi.spyOn(moment.prototype, "format").mockReturnValue(mockDate);

		render(DateDisplay);

		expect(screen.getByText(mockDate)).toBeInTheDocument();
	});
});
