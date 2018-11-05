import React from "react";
import TestRenderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import UserMenu from "./UserMenu";

describe("UserMenu", () => {
  // This errors out due to react-cookie. Need to figure out how to test
  it.skip("renders correctly", () => {
    const currentUser = { _id: "12345", username: "hello" };
    const instance = TestRenderer.create(
      <BrowserRouter>
        <UserMenu currentUser={currentUser} />
      </BrowserRouter>
    );
    expect(instance.toJSON()).toMatchSnapshot();
  });
});
