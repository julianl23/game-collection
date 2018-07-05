import React from "react";
import TestRenderer from "react-test-renderer";
import Login from "./Login";

describe("Login", () => {
  it("renders correctly", () => {
    const instance = TestRenderer.create(<Login />);
    expect(instance.toJSON()).toMatchSnapshot();
  });
});
