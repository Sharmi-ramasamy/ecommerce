/* eslint-disable no-unused-vars */
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Signup } from "../../Pages/Signup/Signup";
const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
  //useHref: () => mockedUsedNavigate,
}));

describe("<Signup/>", () => {
  test("render name input", () => {
    render(<Signup />);
    const inputElement = screen.getByTestId("name-test");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", "text");
  });
});
