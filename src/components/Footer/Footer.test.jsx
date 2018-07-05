import React from "react";
import TestRenderer from "react-test-renderer";
import Footer from "./Footer";

describe("Footer", () => {
  it("renders correctly", () => {
    const instance = TestRenderer.create(<Footer />);
    expect(instance.toJSON()).toMatchSnapshot();
  });
});
