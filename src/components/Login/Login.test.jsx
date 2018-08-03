import React from "react";
import TestRenderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import { shallow } from "enzyme";
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

  // Skipping these tests until context support is released for enzyme react adapter 16
  // https://github.com/airbnb/enzyme/issues/1509

  it.skip("sends credentials to the server and redirects on valid login", () => {
    // const wrapper = shallow(
    //   <ThemeProvider theme={{}}>
    //     <Login />
    //   </ThemeProvider>
    // );

    const wrapper = shallow(<Login theme={{}} />);

    const innerWrapper = wrapper.dive();
    console.log("urg", innerWrapper.debug());
    console.log(innerWrapper.html());

    // innerWrapper.find(".textfield-wrapper > input").simulate("change", {
    innerWrapper.find("Input").simulate("change", {
      // you must add this next line as (Formik calls e.persist() internally)
      persist: () => {},
      // simulate changing e.target.name and e.target.value
      target: {
        name: "email",
        value: "blerg",
      },
    });

    expect(wrapper.html()).toBe(false);
  });

  it.skip("sends credentials to the server and errors on invalid login", () => {});

  it.skip("displays an error message if email is empty", () => {});

  it.skip("displays an error message if password is empty", () => {});
});
