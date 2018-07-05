import React from "react";
import TestRenderer from "react-test-renderer";
import Header from "./Header";

describe("Header", () => {
  it("renders correctly", () => {
    const instance = TestRenderer.create(<Header />);
    expect(instance.toJSON()).toMatchSnapshot();
  });
});
