import React from "react";
import styled from "styled-components";
import { Query } from "react-apollo";

import GET_COLLECTION_QUERY from "./GetCollection.query";
import CollectionItem from "./CollectionItem";

const CollectionSection = styled.section`
  grid-column: 1 / span 4;
`;

const Collection = () => (
  <Query query={GET_COLLECTION_QUERY} fetchPolicy="cache-and-network">
    {({ data, loading }) => {
      if (loading) {
        return <p>Loading...</p>;
      }

      const { currentUser } = data;

      // TODO: Wrap this in a router
      // if (!currentUser) {
      //   return <Redirect to="/" />
      // }

      const { gameCollection } = currentUser;

      console.log(gameCollection);

      return (
        <CollectionSection>
          <h1>Your Collection</h1>

          <section>
            <h2>Filters</h2>
            <label htmlFor="platform">Platform</label>
            <select id="platform">
              <option value="nsw">Nintendo Switch</option>
              <option value="snes">Super Nintendo Entertainment System</option>
              <option value="3ds">Nintendo 3DS</option>
            </select>
          </section>

          <section>
            <h2>{gameCollection.items.length} items</h2>
          </section>

          {gameCollection.items.map(
            // ({ _id, platform, game, borrowed, cost, note, details }) => (
            //   <div key={_id}>
            //     <h3>{game.title}</h3>
            //     <p>{platform.name}</p>
            //     {game.cover && game.cover.url && (
            //       <img src={game.cover.url} alt={`Cover of ${game.title}`} />
            //     )}
            //     <p>
            //       Is borrowed?
            //       <input type="checkbox" checked={borrowed} disabled />
            //     </p>
            //     {cost ? <p>Cost: {cost}</p> : null}
            //     {note.text ? (
            //       <React.Fragment>
            //         <p>Note: {note.text}</p>
            //         <label>Is private?</label>
            //         <input type="checkbox" checked={note.isPrivate} disabled />
            //       </React.Fragment>
            //     ) : null}
            //     <div className="details">
            //       <p>
            //         Has cart/disk?
            //         <input
            //           type="checkbox"
            //           checked={details.hasCartDiskItem}
            //           disabled
            //         />
            //       </p>
            //       <p>
            //         Has case/box?
            //         <input
            //           type="checkbox"
            //           checked={details.hasCaseBox}
            //           disabled
            //         />
            //       </p>
            //       <p>
            //         Has manual?
            //         <input
            //           type="checkbox"
            //           checked={details.hasManual}
            //           disabled
            //         />
            //       </p>
            //       <p>
            //         Has other inserts?
            //         <input
            //           type="checkbox"
            //           checked={details.hasOtherInserts}
            //           disabled
            //         />
            //       </p>
            //     </div>
            //     <button type="button">Edit</button>
            //     <button type="button">Delete</button>
            //   </div>
            // )
            ({ _id, platform, game, borrowed, cost, note, details }) => (
              <CollectionItem
                key={_id}
                id={_id}
                platform={platform}
                game={game}
                borrowed={borrowed}
                cost={cost}
                note={note}
                details={details}
              />
            )
          )}
        </CollectionSection>
      );
    }}
  </Query>
);

export default Collection;
