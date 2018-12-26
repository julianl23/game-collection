import React from "react";
import { MockedProvider } from "react-apollo/test-utils";
import { mount } from "enzyme";
import { BrowserRouter } from "react-router-dom";
import wait from "waait";

import Home from "./Home";
import GET_CURRENT_USER from "./GetCurrentUser.query";

const getMockData = ({ currentUser = {} }) => {
  const defaultUser = {
    _id: "123123",
    firstName: "Test",
    lastName: "User",
    username: "testUser",
    gameCollection: {
      items: [],
    },
  };

  return [
    {
      request: {
        query: GET_CURRENT_USER,
      },
      result: {
        data: {
          currentUser: { ...defaultUser, ...currentUser },
        },
      },
    },
  ];
};

describe("Home", () => {
  it("renders correctly", async () => {
    const mocks = getMockData({});
    const wrapper = mount(
      <BrowserRouter>
        <MockedProvider mocks={mocks} addTypename={false}>
          <Home />
        </MockedProvider>
      </BrowserRouter>
    );

    await wait(50); // wait for response
    expect(wrapper.find(Home).length).toBe(1);
  });
});
