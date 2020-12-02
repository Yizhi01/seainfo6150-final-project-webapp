import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import CategoryList from "./CategoryList.jsx";

const testlist = [
  { 
    "id": "1", 
    "name": "breakfast",
    "image": {
      "_url": "https://source.unsplash.com/Wns3U-oVoLA/960x960",
      "_height": "960",
      "_width": "960"
    }
  }
];

it("renders the CategoryList component correctly", () => {
  const { container } = render(
    <Router>
      <CategoryList categorylist={testlist} />
    </Router>
  );
  expect(container).toMatchSnapshot();
});