import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Breadcrumb from "./Breadcrumb.jsx";

it("renders the Breadcrumb component correctly", () => {
  const { container } = render(
    <Router>
        <Breadcrumb categoryId="1" categoryName="Breakfast" />
    </Router>
  );
  expect(container).toMatchSnapshot();
});