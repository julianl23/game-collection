import React from "react";
import TestRenderer from "react-test-renderer";
import { shallow } from "enzyme";
import TextField from "./TextField";

describe("TextField", () => {
  it("renders correctly", () => {
    const instance = TestRenderer.create(
      <TextField id="hello" labelText="Hello" />
    );
    expect(instance.toJSON()).toMatchSnapshot();
  });

  it("displays the passed in value when one is set", () => {
    const instance = TestRenderer.create(
      <TextField id="hello" labelText="Hello" value="world" />
    );
    expect(instance.toJSON()).toMatchSnapshot();
  });

  it("displays an error message if one is provided", () => {
    const instance = TestRenderer.create(
      <TextField
        id="hello"
        labelText="Hello"
        value="world"
        errorMessage="Field is required"
      />
    );
    expect(instance.toJSON()).toMatchSnapshot();
  });

  it("calls the provided onchange function when it is changed", () => {
    const mock = jest.fn();
    const wrapper = shallow(
      <TextField id="hello" labelText="Hello" onChange={mock} />
    );
    wrapper
      .find("#hello")
      .simulate("change", { target: { value: "My new value" } });
    expect(mock).toHaveBeenCalled();
  });
});
