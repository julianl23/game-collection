import React, { useState } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import PropTypes from "prop-types";

import EditCollectionItem from "./EditCollectionItem";
import Snackbar from "../Snackbar";

const CollectionItem = ({
  id,
  platform,
  game,
  borrowed,
  cost,
  note,
  details,
}) => {
  const [editViewOpen, setEditViewOpen] = useState(false);
  const [itemEdited, setItemEdited] = useState(false);

  const handleItemEdited = () => {
    setItemEdited(true);
    setTimeout(() => {
      setItemEdited(false);
    }, 3000);

    setEditViewOpen(false);
  };

  return (
    <div>
      <ReactCSSTransitionGroup
        transitionName="snackbar-fade"
        transitionAppear
        transitionAppearTimeout={250}
        transitionEnterTimeout={250}
        transitionLeave
        transitionLeaveTimeout={500}
      >
        {itemEdited && (
          <Snackbar key={0}>
            <em>{game.title}</em> has been updated.
          </Snackbar>
        )}
      </ReactCSSTransitionGroup>

      <h3>{game.title}</h3>
      <p>{platform.name}</p>
      {game.cover && game.cover.url && (
        <img src={game.cover.url} alt={`Cover of ${game.title}`} />
      )}

      {!editViewOpen && (
        <React.Fragment>
          <p>
            Is borrowed?
            <input type="checkbox" checked={borrowed} disabled />
          </p>
          {cost ? <p>Cost: {cost}</p> : null}
          {note.text ? (
            <React.Fragment>
              <p>Note: {note.text}</p>
              <label>Is private?</label>
              <input type="checkbox" checked={note.isPrivate} disabled />
            </React.Fragment>
          ) : null}
          <div className="details">
            <p>
              Has cart/disk?
              <input
                type="checkbox"
                checked={details.hasCartDiskItem}
                disabled
              />
            </p>
            <p>
              Has case/box?
              <input type="checkbox" checked={details.hasCaseBox} disabled />
            </p>
            <p>
              Has manual?
              <input type="checkbox" checked={details.hasManual} disabled />
            </p>
            <p>
              Has other inserts?
              <input
                type="checkbox"
                checked={details.hasOtherInserts}
                disabled
              />
            </p>
          </div>
          <button type="button" onClick={() => setEditViewOpen(true)}>
            Edit
          </button>
          <button type="button">Delete</button>
        </React.Fragment>
      )}

      {editViewOpen && (
        <EditCollectionItem
          id={id}
          handleToggleEditView={() => setEditViewOpen(false)}
          handleItemEdited={handleItemEdited}
          details={details}
          note={note}
          borrowed={borrowed}
          cost={cost}
        />
      )}
    </div>
  );
};

CollectionItem.propTypes = {
  id: PropTypes.string.isRequired,
  platform: PropTypes.object.isRequired,
  game: PropTypes.object.isRequired,
  borrowed: PropTypes.bool.isRequired,
  cost: PropTypes.number.isRequired,
  note: PropTypes.object.isRequired,
  details: PropTypes.shape({
    hasCartDiskItem: PropTypes.bool.isRequired,
    hasCaseBox: PropTypes.bool.isRequired,
    hasManual: PropTypes.bool.isRequired,
    hasOtherInserts: PropTypes.bool.isRequired,
  }).isRequired,
};

export default CollectionItem;
