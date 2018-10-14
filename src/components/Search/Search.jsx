import React, { Component } from "react";
import { ApolloConsumer } from "react-apollo";

import TextField from "../TextField";
import Button from "../Button";
import SEARCH from "./Search.query";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      query: "",
      results: null,
    };
  }

  handleChange = e => {
    this.setState({
      query: e.target.value,
    });
  };

  handleSearchSubmit = async (e, client) => {
    e.preventDefault();

    const { query } = this.state;

    try {
      const { data } = await client.query({
        query: SEARCH,
        variables: { query },
      });

      this.setState({
        results: data.games,
      });

      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { query, results } = this.state;

    return (
      <ApolloConsumer>
        {client => (
          <section>
            <h1>Search</h1>
            <form
              action="/search"
              method="POST"
              onSubmit={e => this.handleSearchSubmit(e, client)}
            >
              <TextField
                id="query"
                labelText="Search"
                value={query}
                onChange={this.handleChange}
              />
              {results && (
                <ul>
                  {results.map(game => (
                    <li key={game._id}>
                      <img
                        src={game.cover.url}
                        alt={`Cover of ${game.title}`}
                      />
                      <p>{game.title}</p>
                      <p>
                        Developed by{" "}
                        {game.developer[0] && game.developer[0].name}
                      </p>
                      <p>
                        Published by{" "}
                        {game.publisher[0] && game.publisher[0].name}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
              <Button type="submit">Search</Button>
            </form>
          </section>
        )}
      </ApolloConsumer>
    );
  }
}

export default Search;
