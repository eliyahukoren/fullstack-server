import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Test Header Component", () => {
	beforeEach(() => {
		render(<Header />);
	});

	test("render brand link", () => {
		const linkElement = screen.getByText(/Emaily/i);
		expect(linkElement).toBeInTheDocument();
	});

	test("render login link", () => {
		const linkElement = screen.getByText(/Google/i);
		expect(linkElement).toBeInTheDocument();
	});


});
