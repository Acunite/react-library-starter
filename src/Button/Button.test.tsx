import { cleanup, render, screen } from "@testing-library/react";
import Button from "./Button";

afterEach(cleanup);

describe("Button", () => {
  it("button renders children", () => {
    render(
      <Button>
        <span>hello</span>
      </Button>
    );

    expect(screen.getByText("hello")).toBeInTheDocument();
  });
});
