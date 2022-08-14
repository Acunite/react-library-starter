import { cleanup, render, screen } from "@testing-library/react";
import { Button } from "./Button";

afterEach(cleanup);

describe("Button", () => {
  it("displays button text", () => {
    render(<Button />);
    expect(screen.getByText("hello")).toBeInTheDocument();
  });
});
