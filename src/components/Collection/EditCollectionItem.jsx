import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
// import { theme } from "styled-tools";
import { Formik } from "formik";
// import { Mutation } from "react-apollo";

import Button from "../Button";
import Checkbox from "../Checkbox";
import TextArea from "../TextArea";
import TextField from "../TextField";

const EditForm = styled.form`
  width: 100%;
`;

const EditCollectionItem = ({
  id,
  handleToggleEditView,
  handleItemEdited,
  details,
  note,
  borrowed,
  cost,
}) => {
  // validateForm = values => {
  //   const { game } = this.props;
  //   const errors = {};

  //   if (game.platforms.length > 1 && !values.platform) {
  //     errors.platform = "Please select a platform to add.";
  //   }

  //   if (typeof values.cost !== "number") {
  //     errors.cost = "Please enter a numeric value for cost.";
  //   }

  //   return errors;
  // };

  // handleSubmitForm = async (values, { setSubmitting, setErrors }, AddGame) => {
  //   const { game, handleItemAdded } = this.props;
  //   const {
  //     notes,
  //     cost,
  //     cartdisk,
  //     casebox,
  //     manual,
  //     other,
  //     platform,
  //     noteprivate,
  //     borrowed,
  //   } = values;

  //   try {
  //     await AddGame({
  //       variables: {
  //         input: {
  //           _id: game._id,
  //           platform:
  //             game.platforms.length === 1 ? game.platforms[0]._id : platform,
  //           note: {
  //             text: notes,
  //             isPrivate: noteprivate,
  //           },
  //           borrowed,
  //           borrowedDate: new Date(), // TODO: Implement this in UI
  //           cost,
  //           details: {
  //             hasCartDiskItem: cartdisk,
  //             hasCaseBox: casebox,
  //             hasManual: manual,
  //             hasOtherInserts: other,
  //           },
  //         },
  //       },
  //     });

  //     handleItemAdded();
  //   } catch (e) {
  //     setErrors(e);
  //   }

  //   setSubmitting(false);
  // };

  const handleSubmitForm = values => {
    console.log(values);
    handleItemEdited();
  };

  const validateForm = () => {
    const errors = {};
    return errors;
  };

  const { hasCartDiskItem, hasCaseBox, hasManual, hasOtherInserts } = details;

  // return {
  // const { handleToggleEditView } = this.props;

  // <Mutation mutation={EDIT_GAME}>
  // {EditGame => (
  // )}
  // </Mutation>
  return (
    <Formik
      initialValues={{
        notes: note.text,
        noteprivate: note.isPrivate,
        cost,
        cartdisk: hasCartDiskItem,
        casebox: hasCaseBox,
        manual: hasManual,
        other: hasOtherInserts,
        borrowed,
      }}
      validate={validateForm}
      onSubmit={(values, actions) => handleSubmitForm(values, actions)}
      render={({
        values,
        errors,
        handleChange,
        handleSubmit,
        isSubmitting,
      }) => (
        <EditForm onSubmit={handleSubmit}>
          <div>
            <TextArea
              id="notes"
              name="notes"
              value={values.notes}
              labelText="Notes"
              onChange={handleChange}
            />
            <Checkbox
              id="noteprivate"
              name="noteprivate"
              checked={values.noteprivate}
              onChange={handleChange}
              labelText="Private note?"
            />
          </div>
          <div>
            <TextField
              type="number"
              id="cost"
              name="cost"
              labelText="Cost"
              onChange={handleChange}
              value={values.cost}
              errorMessage={errors.cost}
            />
          </div>
          <div>
            <Checkbox
              id="cartdisk"
              name="cartdisk"
              checked={values.cartdisk}
              onChange={handleChange}
              labelText="Has cart/disk?"
            />
            <Checkbox
              id="casebox"
              name="casebox"
              checked={values.casebox}
              onChange={handleChange}
              labelText="Has case/box?"
            />
            <Checkbox
              id="manual"
              name="manual"
              checked={values.manual}
              onChange={handleChange}
              labelText="Has manual?"
            />
            <Checkbox
              id="other"
              name="other"
              checked={values.other}
              onChange={handleChange}
              labelText="Has other inserts?"
            />
            <Checkbox
              id="borrowed"
              name="borrowed"
              checked={values.borrowed}
              onChange={handleChange}
              labelText="Has been borrowed?"
            />
          </div>

          <Button type="submit" disabled={isSubmitting} block>
            Save
          </Button>
          <Button
            type="button"
            buttonStyle="secondary"
            onClick={handleToggleEditView}
            data-test-id="cancel-button"
            block
          >
            Cancel
          </Button>
        </EditForm>
      )}
    />
  );
};

EditCollectionItem.propTypes = {
  id: PropTypes.string.isRequired,
  handleToggleEditView: PropTypes.func.isRequired,
  handleItemEdited: PropTypes.func.isRequired,
  details: PropTypes.shape({
    hasCartDiskItem: PropTypes.bool.isRequired,
    hasCaseBox: PropTypes.bool.isRequired,
    hasManual: PropTypes.bool.isRequired,
    hasOtherInserts: PropTypes.bool.isRequired,
  }).isRequired,
  note: PropTypes.object.isRequired,
  borrowed: PropTypes.bool.isRequired,
  cost: PropTypes.number.isRequired,
};

export default EditCollectionItem;
