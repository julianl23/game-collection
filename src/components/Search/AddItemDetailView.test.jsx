import React from "react";
import { shallow, mount } from "enzyme";
import { MockedProvider } from "react-apollo/test-utils";

import AddItemDetailView from "./AddItemDetailView";

const testGame = {
  _id: "5b2fa599fe028d7cdb6eea4c",
  cover: {
    url: "//images.igdb.com/igdb/image/upload/t_thumb/tnor90bzdlyttlnawvbf.jpg",
    cloudinary_id: "tnor90bzdlyttlnawvbf",
    width: 478,
    height: 597,
  },
  title: "Marvel: Ultimate Alliance 2",
  platforms: [
    {
      _id: "5b29ae95f83ae5c5360c2e3b",
      igdbId: 6,
      name: "PC (Microsoft Windows)",
    },
    {
      _id: "5b29ae95f83ae5c5360c2e16",
      igdbId: 9,
      name: "PlayStation 3",
    },
  ],
};

describe("AddItemDetailView", () => {
  it("renders correctly", () => {
    const wrapper = shallow(
      <MockedProvider>
        <AddItemDetailView
          game={testGame}
          handleToggleAddView={() => {}}
          handleItemAdded={() => {}}
        />
      </MockedProvider>
    );

    expect(wrapper.find(AddItemDetailView).length).toEqual(1);
  });

  it("closes the view when the cancel button is clicked", () => {
    const cancelMock = jest.fn();
    const wrapper = mount(
      <MockedProvider>
        <AddItemDetailView
          game={testGame}
          handleToggleAddView={cancelMock}
          handleItemAdded={() => {}}
        />
      </MockedProvider>
    );

    wrapper
      .find("[data-test-id='cancel-button']")
      .first()
      .simulate("click");
    expect(cancelMock).toHaveBeenCalled();
  });

  it("does not display a select for platforms if the game only has one platform", () => {
    const testGameCopy = {
      ...testGame,
      platforms: [
        {
          _id: "5b29ae95f83ae5c5360c2e16",
          igdbId: 9,
          name: "PlayStation 3",
        },
      ],
    };
    const wrapper = mount(
      <MockedProvider>
        <AddItemDetailView
          game={testGameCopy}
          handleToggleAddView={() => {}}
          handleItemAdded={() => {}}
        />
      </MockedProvider>
    );

    expect(wrapper.find("PlatformSelect").length).toBe(0);
  });
});
