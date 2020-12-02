import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import About from "./About.jsx";

it("renders the About component correctly", () => {
  const { container } = render(
    <Router>
        <About />
    </Router>
  );
  expect(container).toMatchSnapshot();
});