import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import RecipeListItem from "./RecipeListItem.jsx";

it("renders the RecipeListItem component correctly", () => {
  const { container } = render(
    <Router>
      <RecipeListItem id="1" name="Fruit Smoothie" url="https://source.unsplash.com/CpBBsda2eRI/750x1000" />
    </Router>
   
  );
  expect(container).toMatchSnapshot();
});