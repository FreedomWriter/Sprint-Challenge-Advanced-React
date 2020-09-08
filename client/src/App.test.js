import React from "react";
import ReactDOM from "react-dom";

import { render, fireEvent, waitForElement } from "@testing-library/react";
import App from "./App";
import axiosMock from "axios";
import PlayerCard from "./components/PlayerCard";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test(`it has "Women's World Cup" text`, () => {
  const container = render(<App />);
  container.getAllByText(/women's world cup/i);
});
