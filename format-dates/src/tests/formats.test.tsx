import { describe, expect, it, vi, Mock } from "vitest";
import { render, screen } from "@testing-library/react";
import {
  getCompleteDate,
  getFirstDate,
  getLocalHour,
  getSecondDate,
  getShortDate,
} from "../get_formats";

vi.mock("../get_formats", () => ({
  getCompleteDate: vi.fn(),
  getFirstDate: vi.fn(),
  getLocalHour: vi.fn(),
  getSecondDate: vi.fn(),
  getShortDate: vi.fn(),
}));

describe("prueba salidas de las funciones en get_formats", () => {
  it("prueba getFirstDate", () => {
    (getFirstDate as Mock).mockReturnValue("11/12/2024")
    const result = getFirstDate()
    expect(result).toBe("11/12/2024")
  });

  it("prueba getSecondDate", () => {
    (getSecondDate as Mock).mockReturnValue("11 Dec 2024")
    const result = getSecondDate()
    expect(result).toBe("11 Dec 2024")
  });

  it("prueba getShortDate", () => {
    (getShortDate as Mock).mockReturnValue("11/12")
    const result = getShortDate()
    expect(result).toBe("11/12")
  });

  it("prueba getCompleteDate", () => {
    (getCompleteDate as Mock).mockReturnValue("Wednesday, Dec 11, 2024")
    const result = getCompleteDate(); 
    expect(result).toBe("Wednesday, Dec 11, 2024")
  });

  it("prueba getCompleteDate pasandole el argumento short", () => {
    (getCompleteDate as Mock).mockReturnValue("Wed 11 Dec")
    const result = getCompleteDate("short");
    expect(result).toBe("Wed 11 Dec")

  });

  it("prueba getLocalHour", () => {
    (getLocalHour as Mock).mockReturnValue("16:20")
    const result = getLocalHour(); 
    expect(result).toBe("16:20")
  });
});

