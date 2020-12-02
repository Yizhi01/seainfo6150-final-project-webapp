import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import CategoryListItem from "./CategoryListItem.jsx";

it("renders the CategoryListItem component correctly", () => {
  const { container } = render(
    <Router>
      <CategoryListItem id="1" name="breakfast" url="https://source.unsplash.com/Wns3U-oVoLA/960x960" />
    </Router>
   
  );
  expect(container).toMatchSnapshot();
});