import React from "react";
import TestRenderer from "react-test-renderer";
import MainContent from "./MainContent";

describe("MainContent", () => {
  it("renders correctly", () => {
    const instance = TestRenderer.create(<MainContent />);
    expect(instance.toJSON()).toMatchSnapshot();
  });
});
