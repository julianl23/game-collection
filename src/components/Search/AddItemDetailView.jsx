import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "styled-tools";
import { Formik } from "formik";
import { Mutation } from "react-apollo";

import Button from "../Button";
import Checkbox from "../Checkbox";
import TextArea from "../TextArea";
import TextField from "../TextField";
import { PlusSquare } from "../Icons";
import ADD_GAME from "./AddGame.Mutation";

// TODO: This is reused in two places
const AddButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;

  svg {
    margin-right: 5px;
  }
`;

const AddItemDetailViewContainer = styled.div`
  display: flex;
`;

const PlatformSelectLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin: 0 10px 20px 0;
  flex: 1;
  width: 100%;
`;

const PlatformSelect = styled.select`
  height: 36px;
  background: ${theme("purpleWhite")};
  margin: 10px 0 0;
`;

const AddForm = styled.form`
  width: 100%;
`;

const ButtonWrapper = styled.div``;

class AddItemDetailView extends Component {
  validateForm = values => {
    const { game } = this.props;
    const errors = {};

    if (game.platforms.length > 1 && !values.platform) {
      errors.platform = "Please select a platform to add.";
    }

    if (typeof values.cost !== "number") {
      errors.cost = "Please enter a numeric value for cost.";
    }

    return errors;
  };

  handleSubmitForm = async (values, { setSubmitting, setErrors }, AddGame) => {
    const { game, handleItemAdded } = this.props;
    const {
      notes,
      cost,
      cartdisk,
      casebox,
      manual,
      other,
      platform,
      noteprivate,
      borrowed,
    } = values;

    try {
      await AddGame({
        variables: {
          input: {
            _id: game._id,
            platform:
              game.platforms.length === 1 ? game.platforms[0]._id : platform,
            note: {
              text: notes,
              isPrivate: noteprivate,
            },
            borrowed,
            borrowedDate: new Date(), // TODO: Implement this in UI
            cost,
            details: {
              hasCartDiskItem: cartdisk,
              hasCaseBox: casebox,
              hasManual: manual,
              hasOtherInserts: other,
            },
          },
        },
      });

      handleItemAdded();
    } catch (e) {
      setErrors(e);
    }

    setSubmitting(false);
  };

  render() {
    const { game, handleToggleAddView } = this.props;
    const { platforms } = game;

    return (
      <Mutation mutation={ADD_GAME}>
        {AddGame => (
          <AddItemDetailViewContainer>
            <Formik
              initialValues={{
                notes: "",
                noteprivate: false,
                cost: 0,
                cartdisk: true,
                casebox: true,
                manual: true,
                other: true,
                platform: "",
                borrowed: false,
              }}
              validate={this.validateForm}
              onSubmit={(values, actions) =>
                this.handleSubmitForm(values, actions, AddGame)
              }
              render={({
                values,
                errors,
                handleChange,
                handleSubmit,
                isSubmitting,
              }) => (
                <AddForm onSubmit={handleSubmit}>
                  {platforms.length > 1 && (
                    <PlatformSelectLabel htmlFor="platform">
                      Platform
                      <PlatformSelect
                        id="platform"
                        name="platform"
                        onChange={handleChange}
                        value={values.platform}
                      >
                        <option>Select</option>
                        {platforms.map(platform => (
                          <option key={platform._id} value={platform._id}>
                            {platform.name}
                          </option>
                        ))}
                      </PlatformSelect>
                      {errors.platform}
                    </PlatformSelectLabel>
                  )}
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
                  <ButtonWrapper>
                    <AddButton type="submit" disabled={isSubmitting} block>
                      <PlusSquare /> Add to my collection
                    </AddButton>
                    <Button
                      type="button"
                      buttonStyle="secondary"
                      onClick={handleToggleAddView}
                      data-test-id="cancel-button"
                      block
                    >
                      Cancel
                    </Button>
                  </ButtonWrapper>
                </AddForm>
              )}
            />
          </AddItemDetailViewContainer>
        )}
      </Mutation>
    );
  }
}

AddItemDetailView.propTypes = {
  game: PropTypes.object.isRequired,
  handleToggleAddView: PropTypes.func.isRequired,
  handleItemAdded: PropTypes.func.isRequired,
};

export default AddItemDetailView;
