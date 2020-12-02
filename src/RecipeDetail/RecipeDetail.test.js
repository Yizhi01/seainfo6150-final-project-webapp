import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import RecipeDetail from "./RecipeDetail.jsx";

const testlist = [
  {
    "categoryId": "5",
    "recipeId": "1",
    "categoryName": "drinks",
    "name": "Fruit & Yogurt Smoothie",
    "description": "This easy fruit smoothie with yogurt recipe calls for just three ingredients--yogurt, fruit juice and whatever frozen fruit you have on hand. Mix up your combinations from day to day for a healthy breakfast or snack you'll never get bored with.",
    "ingredients": [
      "1 cup 3/4 cup nonfat plain yogurt",
      "¼ cup 1/2 cup 100% pure fruit juice ",
      "1½ cups 1 1/2 cups (6 1/2 ounces) frozen fruit, such as blueberries, raspberries, pineapple or peaches"
    ],
    "instructions": {
      "1": "Puree yogurt with juice in a blender until smooth. With the motor running, add fruit through the hole in the lid and continue to puree until smooth."
    },
    "pubTime": "2020-11-01",
    "serves": "1",
    "cookTime": "10 mins",
    "difficulty": "easy",
    "image": {
      "_url": "https://source.unsplash.com/CpBBsda2eRI/750x1000",
      "_height": "1000",
      "_width": "750"
    }
  }
]

it("renders the RecipeDetail component correctly", () => {
  const { container } = render(
    <Router>
      <RecipeDetail recipeId="1" recipes={testlist} />
    </Router>
  );
  expect(container).toMatchSnapshot();
});
