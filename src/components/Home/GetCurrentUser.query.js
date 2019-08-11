import gql from "graphql-tag";

const GET_CURRENT_USER = gql`
  {
    currentUser {
      _id
      firstName
      lastName
      username
      gameCollection {
        _id
        items {
          _id
        }
      }
    }
  }
`;

export default GET_CURRENT_USER;
