import React, { Component } from "react";
import styled from "styled-components";
import { Query } from "react-apollo";
import { Redirect, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import TextField from "../TextField";
import Button from "../Button";
import GET_CURRENT_USER from "./GetCurrentUser.query";

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

class Home extends Component {
  constructor() {
    super();
    this.state = {
      query: "",
    };
  }

  static renderCollectionCount = collection => (
    <p>
      {collection.items.length} {collection.length === 1 ? "item" : "items"}
    </p>
  );

  handleSearchSubmit = e => {
    e.preventDefault();
    const { history } = this.props;
    const { query } = this.state;

    history.push(`/search/${query}`);
  };

  handleChange = e => {
    const { id, value } = e.target;

    this.setState({
      [id]: value,
    });
  };

  render() {
    const { query } = this.state;

    return (
      <Query query={GET_CURRENT_USER} fetchPolicy="network-only">
        {({ loading, error, data }) => {
          if (loading) {
            return null; // TODO: This should ideally be a spinner or some sort of placeholder
          }

          if (error && error.networkError.statusCode === 401) {
            return <Redirect to="/login" />;
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
                {Home.renderCollectionCount(data.currentUser.gameCollection)}
                {/* <p>66 wish list</p> TODO: Re-implement when wish list is a thing */}
                <p>0 wish list</p>
              </div>
              <div className="search">
                <form
                  action="/search"
                  method="POST"
                  onSubmit={this.handleSearchSubmit}
                >
                  <TextField
                    id="query"
                    labelText="Search"
                    value={query}
                    onChange={this.handleChange}
                  />
                  <Button type="submit">Search</Button>
                </form>
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
  }
}

Home.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(Home);
