import React from "react";
import { render } from "@testing-library/react";
import SignUp from "./SignUp.jsx";

it("renders the SignUp component correctly", () => {
  const { container } = render(
    <SignUp />
  );
  expect(container).toMatchSnapshot();
});
