import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { ChangePassword } from "../../Pages/Signup/ChangePassword";
const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
  useHref: () => mockedUsedNavigate,
}));

describe("<ChangePassword />", () => {
  test("render name input", () => {
    render(
      <MemoryRouter>
        <ChangePassword />
      </MemoryRouter>
    );
    const inputElementEmail = screen.getByTestId("name-test");
    expect(inputElementEmail).toBeInTheDocument();
    expect(inputElementEmail).toHaveAttribute("type", "text");
  });
});

describe("<ChangePassword />", () => {
  test("render name input", () => {
    render(
      <MemoryRouter>
        <ChangePassword />
      </MemoryRouter>
    );
    const inputElementPassword = screen.getByTestId("password-test");
    expect(inputElementPassword).toBeInTheDocument();
    expect(inputElementPassword).toHaveAttribute("type", "password");
  });
});
