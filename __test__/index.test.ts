import { describe, expect, test } from "bun:test";
import { render, screen } from "@testing-library/react";
import Home from "@/app/(default)/page";
import About from "@/app/(default)/about/page";
import Blog from "@/app/(default)/blog/page";
import Code from "@/app/(default)/code/page";
import Music from "@/app/(music)/music/page";

describe("Home", () => {
  test("renders", () => {
    render(Home());
  });
  // test("renders a heading", () => {
  //   render(<Home />);
  //   const heading = screen.getByText(`🌐`);
  //   expect(heading).toBeInTheDocument();
  // });
});

describe("About", () => {
  test("renders", () => {
    // render(<About />);
    render(About());
  });
});

describe("Blog", () => {
  test("renders", () => {
    // render(<Blog />);
    render(Blog());
  });
});

describe("Code", () => {
  test("renders", () => {
    render(Code());
  });
});

describe("Music", () => {
  test("renders", () => {
    // render(Music());
  });
});
