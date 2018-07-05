import React from "react";
import TestRenderer from "react-test-renderer";
import TextField from "./TextField";

describe("TextField", () => {
  it("renders correctly", () => {
    const instance = TestRenderer.create(
      <TextField id="hello" labelText="Hello" />
    );
    expect(instance.toJSON()).toMatchSnapshot();
  });
});
