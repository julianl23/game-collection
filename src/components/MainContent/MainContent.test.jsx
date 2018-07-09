import React from "react";
import TestRenderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import MainContent from "./MainContent";

describe("MainContent", () => {
  it("renders correctly", () => {
    const instance = TestRenderer.create(
      <ThemeProvider theme={{}}>
        <MainContent />
      </ThemeProvider>
    );
    expect(instance.toJSON()).toMatchSnapshot();
  });
});
