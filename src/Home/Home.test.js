import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Home.jsx";

it("renders the Home component correctly", () => {
  const { container } = render(
    <Router>
        <Home />
    </Router>
  );
  expect(container).toMatchSnapshot();
});
