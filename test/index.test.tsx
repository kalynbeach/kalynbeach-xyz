import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "@/app/(info)/page";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);
    const heading = screen.getByText(`🌐`);
    expect(heading).toBeInTheDocument();
  });
});

// TODO: add `/about` tests

// TODO: add `/blog` tests

// TODO: add `/code` tests

// TODO: add `/music` tests
