import React from "react";
import TestRenderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import UserMenu from "./UserMenu";

describe("UserMenu", () => {
  it("renders correctly", () => {
    const currentUser = { _id: "12345", username: "hello" };
    const instance = TestRenderer.create(
      <BrowserRouter>
        <UserMenu currentUser={currentUser} />
      </BrowserRouter>
    );
    expect(instance.toJSON()).toMatchSnapshot();
  });
});
