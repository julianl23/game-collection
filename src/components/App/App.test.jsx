import React from "react";
import TestRenderer from "react-test-renderer";
import App from "./App";

describe("App", () => {
  it("renders correctly", () => {
    const instance = TestRenderer.create(<App />);
    expect(instance.toJSON()).toMatchSnapshot();
  });
});
