import React, { Component } from "react";
import { ApolloConsumer } from "react-apollo";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import TextField from "../TextField";
import Button from "../Button";
import SearchResultItem from "./SearchResultItem";
import SEARCH from "./Search.query";

const SearchSection = styled.section`
  grid-column: 1 / span 4;
`;

const SearchResultsList = styled.ul`
  padding: 0;
  list-style-type: none;
`;

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      results: null,
    };
  }

  componentDidMount() {
    const { match } = this.props;
    if (match.params && match.params.query) {
      this.setState({
        query: match.params.query,
        searchOnFirstOpen: true,
      });
    }
  }

  handleChange = e => {
    this.setState({
      query: e.target.value,
    });
  };

  handleSearchSubmit = async (e, client) => {
    if (e) e.preventDefault();

    this.setState({ searchOnFirstOpen: false });

    const { query } = this.state;

    try {
      const { data } = await client.query({
        query: SEARCH,
        variables: { query },
      });

      this.setState({
        results: data.games,
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { query, results, searchOnFirstOpen } = this.state;

    return (
      <ApolloConsumer>
        {client => {
          if (searchOnFirstOpen) {
            this.handleSearchSubmit(null, client);
          }

          return (
            <SearchSection>
              <h1>Search</h1>
              <form
                action="/search"
                method="POST"
                onSubmit={e => this.handleSearchSubmit(e, client)}
              >
                <TextField
                  id="query"
                  value={query}
                  labelText=""
                  onChange={this.handleChange}
                />
                <Button type="submit">Search</Button>
              </form>
              {results && (
                <SearchResultsList>
                  {results.map(game => (
                    <SearchResultItem game={game} key={game._id} />
                  ))}
                </SearchResultsList>
              )}
            </SearchSection>
          );
        }}
      </ApolloConsumer>
    );
  }
}

Search.propTypes = {
  match: PropTypes.object.isRequired,
};

export default withRouter(Search);
