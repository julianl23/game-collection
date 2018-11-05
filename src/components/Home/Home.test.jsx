import React from "react";
import TestRenderer from "react-test-renderer";
import { MockedProvider } from "react-apollo/test-utils";
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
    const instance = TestRenderer.create(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Home />
      </MockedProvider>
    );

    await wait(50); // wait for response

    expect(instance.toJSON()).toMatchSnapshot();
  });
});
