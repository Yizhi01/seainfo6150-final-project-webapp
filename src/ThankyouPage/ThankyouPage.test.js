import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ThankyouPage from "./ThankyouPage.jsx";

it("renders the ThankyouPage component correctly", () => {
  const { container } = render(
    <Router>
        <ThankyouPage />
    </Router>
  );
  expect(container).toMatchSnapshot();
});