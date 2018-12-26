import React from "react";
import { shallow } from "enzyme";

import Checkbox from "./Checkbox";

describe("Checkbox", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Checkbox id="hello" labelText="Hello" />);

    expect(
      wrapper
        .find("Label")
        .first()
        .text()
    ).toEqual("Hello");
  });

  it("displays an error message if one is provided", () => {
    const wrapper = shallow(
      <Checkbox id="hello" labelText="Hello" errorMessage="You done a bad" />
    );

    expect(
      wrapper.find("[data-test-id='checkbox-error-message']").length
    ).toEqual(1);
  });
});
