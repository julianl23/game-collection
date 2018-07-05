import React from "react";
import TestRenderer from "react-test-renderer";
import Gamepad from "./Gamepad";

describe("Gamepad", () => {
  it("renders correctly", () => {
    const instance = TestRenderer.create(<Gamepad />);
    expect(instance.toJSON()).toMatchSnapshot();
  });
});
