import React from "react";
import TestRenderer from "react-test-renderer";
import ErrorMessage from "./ErrorMessage";

describe("ErrorMessage", () => {
  it("renders an error message", () => {
    const instance = TestRenderer.create(
      <ErrorMessage message="Hello World" />
    );
    expect(instance.toJSON()).toMatchSnapshot();
  });
});
