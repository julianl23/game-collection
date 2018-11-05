import React from "react";
import TestRenderer from "react-test-renderer";

import SearchResultItem from "./SearchResultItem";

const mockGame = {
  _id: "123456",
  platforms: [
    {
      _id: "123456",
      name: "Sega GameCast",
    },
  ],
  cover: {
    url: "http://image.com/image.jpg",
  },
  title: "Sonic Rides Again",
  developer: [{ name: "Sonic Team" }],
  publisher: [{ name: "Sega" }],
};

describe("SearchResultItem", () => {
  it("renders correctly", () => {
    const instance = TestRenderer.create(<SearchResultItem game={mockGame} />);
    expect(instance.toJSON()).toMatchSnapshot();
  });
});
