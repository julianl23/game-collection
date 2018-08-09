import React from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import { Redirect } from "react-router-dom";

import TextField from "../TextField";

const GET_CURRENT_USER = gql`
  {
    currentUser {
      _id
      firstName
      lastName
      username
      gameCollection {
        items
      }
    }
  }
`;

const HomeSection = styled.section`
  grid-column: 1 / span 4;
`;

const CoverImage = styled.img`
  width: 70px;
  height: 93px;
  background: ${({ theme }) => theme.midGray};
`;

const RecentlyAdded = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const Home = () => {
  const renderCollectionCount = collection => (
    <p>
      {collection.items.length} {collection.length === 1 ? "item" : "items"}
    </p>
  );

  return (
    <Query query={GET_CURRENT_USER} fetchPolicy="network-only">
      {({ loading, error, data }) => {
        if (loading) {
          return null; // TODO: This should ideally be a spinner or some sort of placeholder
        }

        if (error) {
          return <div>An error has occurred</div>; // TODO: Create an error page and render it here
        }

        const { currentUser } = data;

        if (!loading && (!data || !currentUser)) {
          return <Redirect to="/login" />;
        }

        return (
          <HomeSection>
            <h2>{currentUser.username}</h2>
            <div className="user-counts">
              {renderCollectionCount(data.currentUser.gameCollection)}
              {/* <p>66 wish list</p> TODO: Re-implement when wish list is a thing */}
              <p>0 wish list</p>
            </div>
            <div className="search">
              <TextField labelText="Search" id="search" />
            </div>
            <section>
              <h3>Recently Added</h3>
              <RecentlyAdded>
                <CoverImage />
                <CoverImage />
                <CoverImage />
                <CoverImage />
              </RecentlyAdded>
            </section>
            <div className="friend-activity">
              <div className="feed-item">
                <p>
                  VMelo added Injustice: Gods Among Us for the Wii U to their
                  collection
                </p>
              </div>
            </div>
          </HomeSection>
        );
      }}
    </Query>
  );
};

export default Home;
