import React from "react";
import TestRenderer from "react-test-renderer";
import { shallow } from "enzyme";

import TextArea from "./TextArea";

describe("TextArea", () => {
  it("renders correctly", () => {
    const instance = TestRenderer.create(<TextArea id="hello" />);
    expect(instance.toJSON()).toMatchSnapshot();
  });

  it("displays the passed in value when one is set", () => {
    const instance = TestRenderer.create(<TextArea id="hello" value="world" />);
    expect(instance.toJSON()).toMatchSnapshot();
  });

  it("displays a label if labelText is set", () => {
    const wrapper = shallow(
      <TextArea id="hello" labelText="Hello" value="world" />
    );

    expect(
      wrapper
        .find("Label")
        .first()
        .text()
    ).toEqual("Hello");
  });

  it("displays an error message if errorMessage is set", () => {
    const wrapper = shallow(
      <TextArea id="hello" errorMessage="You done a bad" value="world" />
    );

    expect(
      wrapper
        .find("ErrorMessage")
        .first()
        .text()
    ).toEqual("You done a bad");
  });
});
