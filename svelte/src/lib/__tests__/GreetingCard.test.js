import { fireEvent, render, screen } from "@testing-library/svelte";
import "@testing-library/jest-dom";
import { describe, expect, test } from "vitest";
import GreetingCard from "../GreetingCard.svelte";

describe("GreetingCard Component", () => {
	test("renders greeting and allows editing username", async () => {
		render(GreetingCard);

		// Check if greeting appears with default name
		const greetingText = screen.getByText(/Click to enter name/);
		expect(greetingText).toBeInTheDocument();

		// Click to enable editing mode
		await fireEvent.click(greetingText);

		// Ensure input appears
		const input = screen.getByRole("textbox");
		expect(input).toBeInTheDocument();

		// Simulate typing in the input field
		await fireEvent.input(input, { target: { value: "Ozzie" } });

		// Simulate blurring the input field to trigger save
		await fireEvent.blur(input);

		// Verify the updated name appears
		expect(screen.getByText(/Ozzie/)).toBeInTheDocument();
	});
});
