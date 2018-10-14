import React from "react";
import TestRenderer from "react-test-renderer";

import Search from "./Search";

describe("Search", () => {
  it("renders correctly", () => {
    const instance = TestRenderer.create(<Search />);
    expect(instance.toJSON()).toMatchSnapshot();
  });

  it("needs to have test cases added", () => {
    expect(true).toBe(true);
  });
});
