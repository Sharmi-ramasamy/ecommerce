import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { Checkout } from "../Checkout/Checkout";
const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
  useHref: () => mockedUsedNavigate,
}));

describe("<Signup />", () => {
  test("render name input", () => {
    render(
      <MemoryRouter>
        <Checkout />
      </MemoryRouter>
    );
    const inputElementEmail = screen.getByTestId("name-test");
    expect(inputElementEmail).toBeInTheDocument();
    expect(inputElementEmail).toHaveAttribute("type", "text");
  });
});

describe("<Signup />", () => {
  test("render name input", () => {
    render(
      <MemoryRouter>
        <Checkout />
      </MemoryRouter>
    );
    const inputElementPassword = screen.getByTestId("email-test");
    expect(inputElementPassword).toBeInTheDocument();
    expect(inputElementPassword).toHaveAttribute("type", "text");
  });
});

describe("<Signup />", () => {
  test("render name input", () => {
    render(
      <MemoryRouter>
        <Checkout />
      </MemoryRouter>
    );
    const inputElementPassword = screen.getByTestId("address-test");
    expect(inputElementPassword).toBeInTheDocument();
    expect(inputElementPassword).toHaveAttribute("type", "text");
  });
});

describe("<Signup />", () => {
  test("render name input", () => {
    render(
      <MemoryRouter>
        <Checkout />
      </MemoryRouter>
    );
    const inputElementPassword = screen.getByTestId("city-test");
    expect(inputElementPassword).toBeInTheDocument();
    expect(inputElementPassword).toHaveAttribute("type", "text");
  });
});

describe("<Signup />", () => {
  test("render name input", () => {
    render(
      <MemoryRouter>
        <Checkout />
      </MemoryRouter>
    );
    const inputElementPassword = screen.getByTestId("state-test");
    expect(inputElementPassword).toBeInTheDocument();
    expect(inputElementPassword).toHaveAttribute("type", "text");
  });
});
