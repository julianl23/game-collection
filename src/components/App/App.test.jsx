import React from "react";
import TestRenderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

describe("App", () => {
  it("renders correctly", () => {
    const instance = TestRenderer.create(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(instance.toJSON()).toMatchSnapshot();
  });
});
