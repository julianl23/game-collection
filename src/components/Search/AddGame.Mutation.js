import gql from "graphql-tag";

const AddGameToCollection = gql`
  mutation AddGameToCollection($input: GameInput!) {
    AddGameToCollection(input: $input) {
      _id
    }
  }
`;

export default AddGameToCollection;
