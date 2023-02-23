import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import Login from "../../Pages/Login/Login";
const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
  useHref: () => mockedUsedNavigate,
}));

describe("<Login />", () => {
  test("render name input", () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    const inputElementEmail = screen.getByTestId("email-test");
    expect(inputElementEmail).toBeInTheDocument();
    expect(inputElementEmail).toHaveAttribute("type", "text");
  });
});

describe("<Login />", () => {
  test("render name input", () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    const inputElementPassword = screen.getByTestId("password-test");
    expect(inputElementPassword).toBeInTheDocument();
    expect(inputElementPassword).toHaveAttribute("type", "password");
  });
});
{
  /* <ul className="instruction">
            <li>
              Password should have minimum 9 characters with combination of uppercase, lowercase ,numbers and a special
              character !@#$%*
            </li>
          </ul> */
}
