import gql from "graphql-tag";

const GameSearch = gql`
  query GameSearchQuery($query: String!) {
    games(input: { query: $username }) {
      [_id]
    }
  }
`;

export default GameSearch;
