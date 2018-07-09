import React from "react";
import TestRenderer from "react-test-renderer";
import Button from "./Button";

describe("Button", () => {
  it("renders correctly", () => {
    const instance = TestRenderer.create(<Button>Hello World</Button>);
    expect(instance.toJSON()).toMatchSnapshot();
  });
});
