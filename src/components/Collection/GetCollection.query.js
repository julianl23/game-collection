import gql from "graphql-tag";

// HOLD UP wait
// items shouldnt return a Game
// it should return a game collection item
// with notes and whatnot

const GET_COLLECTION = gql`
  {
    currentUser {
      _id
      gameCollection {
        _id
        items {
          _id
          note {
            text
            isPrivate
          }
          borrowed
          borrowedDate
          cost
          details {
            hasCartDiskItem
            hasCaseBox
            hasManual
            hasOtherInserts
          }
          platform {
            _id
            name
          }
          game {
            _id
            title
            developer {
              _id
            }
            publisher {
              _id
            }
            platforms {
              _id
            }
            igdbId
            cover {
              url
            }
            inCollection
          }
        }
      }
    }
  }
`;

export default GET_COLLECTION;
