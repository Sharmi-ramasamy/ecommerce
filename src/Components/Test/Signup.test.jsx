import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Signup } from "../../Pages/Signup/Signup";
import { MemoryRouter } from "react-router-dom";
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
        <Signup />
      </MemoryRouter>
    );
    const inputElement = screen.getByTestId("name-test");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", "text");
  });
});

describe("<Signup />", () => {
  test("render name input", () => {
    render(
      <MemoryRouter>
        <Signup />
      </MemoryRouter>
    );
    const inputElementEmail = screen.getByTestId("email-test");
    expect(inputElementEmail).toBeInTheDocument();
    expect(inputElementEmail).toHaveAttribute("type", "text");
  });
});

describe("<Signup />", () => {
  test("render name input", () => {
    render(
      <MemoryRouter>
        <Signup />
      </MemoryRouter>
    );
    const inputElementPassword = screen.getByTestId("password-test");
    expect(inputElementPassword).toBeInTheDocument();
    expect(inputElementPassword).toHaveAttribute("type", "password");
  });
});
