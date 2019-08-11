import { gql } from "apollo-boost";

const SEARCH = gql`
  query GameSearch($query: String!) {
    games(query: $query) {
      _id
      title
      inCollection
      developer {
        _id
        name
      }
      publisher {
        _id
        name
      }
      platforms {
        _id
        name
        logo {
          url
          width
          height
          cloudinary_id
        }
      }
      releaseDate
      description
      createdAt
      updatedAt
      igdbId
      cover {
        url
        width
        height
      }
      gameModes {
        name
      }
      multiplayerModes {
        platform {
          _id
        }
        offlinecoop
        onlinecoop
        lancoop
        campaigncoop
        splitscreenonline
        splitscreen
        dropin
        offlinecoopmax
        onlinecoopmax
        onlinemax
        offlinemax
      }
    }
  }
`;

export default SEARCH;
