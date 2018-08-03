import React from "react";
import TestRenderer from "react-test-renderer";
import Home from "./Home";

describe("Home", () => {
  it("renders correctly", () => {
    const instance = TestRenderer.create(<Home />);
    expect(instance.toJSON()).toMatchSnapshot();
  });
});
