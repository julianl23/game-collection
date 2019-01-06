import React from "react";
import { shallow } from "enzyme";

import Snackbar from "./Snackbar";

describe("Snackbar", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Snackbar>Hello world</Snackbar>);
    expect(wrapper.find("SnackbarContainer").length).toEqual(1);
  });
});
