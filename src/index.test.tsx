/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import ControllableUpdate from "./index";

function Wrapper() {
  const [locked, setLocked] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <>
      <div data-testid="locked" onClick={() => setLocked(!locked)} />
      <div data-testid="count" onClick={() => setCount(count + 1)} />
      <ControllableUpdate locked={locked}>{count}</ControllableUpdate>
    </>
  );
}

describe("ControllableUpdate", () => {
  function testRender() {
    render(<Wrapper />);
  }

  it("does not throw", () => {
    expect(testRender).not.toThrow();
  });

  it("renders initially", () => {
    testRender();

    expect(screen.getByText("0")).toBeInTheDocument();
  });

  it("updates as expected when locked state is false", () => {
    testRender();

    userEvent.click(screen.getByTestId("count"));
    userEvent.click(screen.getByTestId("count"));

    expect(screen.getByText("2")).toBeInTheDocument();
  });

  it("does not update when locked state is set to true", () => {
    testRender();

    userEvent.click(screen.getByTestId("locked"));

    userEvent.click(screen.getByTestId("count"));
    userEvent.click(screen.getByTestId("count"));

    expect(screen.getByText("0")).toBeInTheDocument();
  });

  it("updates component again after it was locked", () => {
    testRender();

    userEvent.click(screen.getByTestId("locked"));

    userEvent.click(screen.getByTestId("count"));
    userEvent.click(screen.getByTestId("count"));

    userEvent.click(screen.getByTestId("locked"));

    expect(screen.getByText("2")).toBeInTheDocument();
  });
});
