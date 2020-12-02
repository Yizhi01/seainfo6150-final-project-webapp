import React from "react";
import { render } from "@testing-library/react";
import SignUpForm from "./SignUpForm.jsx";

it("renders the SignUpForm component correctly", () => {
  const { container } = render(
    <SignUpForm />
  );
  expect(container).toMatchSnapshot();
});
