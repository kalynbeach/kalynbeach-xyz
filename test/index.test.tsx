import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "@/app/(info)/page";
import About from "@/app/(info)/about/page";
import Blog from "@/app/(info)/blog/page";
import Code from "@/app/(info)/code/page";
import Music from "@/app/(music)/music/@music/page";

describe("Home", () => {
  it("renders", () => {
    render(<Home />);
  });
  // it("renders a heading", () => {
  //   render(<Home />);
  //   const heading = screen.getByText(`🌐`);
  //   expect(heading).toBeInTheDocument();
  // });
});

describe("About", () => {
  it("renders", () => {
    render(<About />);
  });
});

describe("Blog", () => {
  it("renders", () => {
    render(<Blog />);
  });
});

describe("Code", () => {
  it("renders", () => {
    render(<Code />);
  });
});

describe("Music", () => {
  it("renders", () => {
    render(<Music />);
  });
});
