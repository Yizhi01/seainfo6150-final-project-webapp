import React from "react";
import { render } from "@testing-library/react";
import Confirmation from "./Confirmation.jsx";

const testdata = {
  title: "cake",
  description: "cupcake",
  serves: "2",
  cookTime: "20 mins",
  difficulty: "easy",
  ingredients: "flour, sugar",
  instructions: "mix ingredients and bake cake",
};

it("renders the Confirmation component correctly", () => {
  const { container } = render(
    <Confirmation 
      title="cake"
      description="cupcake"
      serves="2"
      cookTime="20 mins"
      difficulty="easy"
      ingredients="flour, sugar"
      instructions="mix ingredients and bake cake" />
  );
  expect(container).toMatchSnapshot();
});