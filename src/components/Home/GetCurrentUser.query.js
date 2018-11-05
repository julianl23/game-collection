import gql from "graphql-tag";

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

export default GET_CURRENT_USER;
