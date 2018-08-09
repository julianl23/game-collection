import React from "react";
import TestRenderer from "react-test-renderer";
import Header from "./Header";

describe("Header", () => {
  // Skipping these tests until context support is released for enzyme react adapter 16
  // https://github.com/airbnb/enzyme/issues/1509

  it.skip("renders correctly", () => {
    const instance = TestRenderer.create(<Header />);
    expect(instance.toJSON()).toMatchSnapshot();
  });
});
