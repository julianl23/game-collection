import React from "react";
import TestRenderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import { MockedProvider } from "react-apollo/test-utils";

import Search from "./Search";

describe("Search", () => {
  it("renders correctly", () => {
    const instance = TestRenderer.create(
      <BrowserRouter>
        <MockedProvider>
          <Search />
        </MockedProvider>
      </BrowserRouter>
    );
    expect(instance.toJSON()).toMatchSnapshot();
  });

  it("needs to have test cases added", () => {
    expect(true).toBe(true);
  });
});
