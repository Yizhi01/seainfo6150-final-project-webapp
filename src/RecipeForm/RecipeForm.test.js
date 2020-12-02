import React from "react";
import { render } from "@testing-library/react";
import RecipeForm from "./RecipeForm.jsx";

it("renders the RecipeForm component correctly", () => {
  const { container } = render(
    <RecipeForm />
  );
  expect(container).toMatchSnapshot();
});
