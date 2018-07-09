import React from "react";
import TestRenderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import Login from "./Login";

describe("Login", () => {
  it("renders correctly", () => {
    const instance = TestRenderer.create(
      <ThemeProvider theme={{}}>
        <Login />
      </ThemeProvider>
    );
    expect(instance.toJSON()).toMatchSnapshot();
  });
});
