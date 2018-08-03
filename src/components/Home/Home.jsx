import React from "react";
import styled from "styled-components";
import TextField from "../TextField";

const HomeSection = styled.section`
  grid-column: 1 / span 4;
`;

const CoverImage = styled.img`
  width: 70px;
  height: 93px;
  background: ${({ theme }) => theme.backgroundGray};
`;

const RecentlyAdded = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const Home = () => (
  <HomeSection>
    <h2>Median</h2>
    <div className="user-counts">
      <p>276 items</p>
      <p>66 wish list</p>
    </div>
    <div className="search">
      <TextField labelText="Search" id="search" />
    </div>
    <RecentlyAdded>
      <CoverImage />
      <CoverImage />
      <CoverImage />
      <CoverImage />
    </RecentlyAdded>
    <div className="friend-activity">
      <div className="feed-item">
        <p>
          VMelo added Injustice: Gods Among Us for the Wii U to their collection
        </p>
      </div>
    </div>
  </HomeSection>
);

export default Home;
