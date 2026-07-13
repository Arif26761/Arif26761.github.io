import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

function Hello() {
  return <h1>Scaffold ready</h1>;
}

describe("scaffold sanity", () => {
  it("renders a component with jsdom + testing-library", () => {
    render(<Hello />);
    expect(screen.getByRole("heading", { name: /scaffold ready/i })).toBeInTheDocument();
  });
});
