import { describe, it, expect, vi, Mock } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Loader } from "../components/Loader";
import { Modal } from "../components/Modal";
import { Collapse } from "../components/Collapse";
import { Toggle } from "../components/Toggle";

describe("prueba de UI de componentes más sus props", () => {
  it("Prueba de Loader", () => {
    render(<Loader />);
    const loader = screen.getByTestId("loader");
    expect(loader).toBeInTheDocument();
  });

  it("Prueba de Modal", async () => {
    render(
      <Modal titleButton="Click here">
        <p>Hello World</p>
      </Modal>
    );

    const openModal = screen.getByText("Click here");
    expect(openModal).toBeInTheDocument();
    const modal = screen.getByTestId("modal"); 

    expect(modal).not.toHaveClass("active");

    await userEvent.click(openModal);
    expect(modal).toHaveClass("active");
  });

  it("Prueba de Collapse", async () => {
    render(
      <Collapse bg="dark" title="Message">
        <p>This message is mine</p>
      </Collapse>
    );

    expect(screen.getByTestId("collapse")).toHaveClass("container dark");
    expect(screen.getByText("Message")).toBeInTheDocument();
    const openCollapse = screen.getByTestId("open-collapse");
    await userEvent.click(openCollapse);
    expect(screen.getByText("This message is mine")).toBeInTheDocument();
  });

  it("Prueba Toggle", async () => {
    const openToggle = vi.fn(); 
    render(<Toggle onClick={openToggle} />);
    const input = screen.getByTestId("input");

    await userEvent.click(input);
    expect(openToggle).toHaveBeenCalled(); 

  });
});
