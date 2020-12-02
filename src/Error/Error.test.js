import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Error from "./Error.jsx";

it("renders the Error component correctly", () => {
  const { container } = render(
    <Router>
        <Error />
    </Router>
  );
  expect(container).toMatchSnapshot();
});