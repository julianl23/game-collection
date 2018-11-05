import React from "react";
import TestRenderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
// import App from "./App";

describe.skip("App", () => {
  // Throws an error about symbol is not a function.
  // Related to styled-components globals
  it.skip("renders correctly", () => {
    const instance = TestRenderer
      .create
      // <BrowserRouter>
      //   {/* <App /> */}
      // </BrowserRouter>
      ();
    expect(instance.toJSON()).toMatchSnapshot();
  });
});
