import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "styled-tools";
import { Formik } from "formik";

import Button from "../Button";
import Checkbox from "../Checkbox";
import TextArea from "../TextArea";
import TextField from "../TextField";
import { PlusSquare } from "../Icons";

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

  handleSubmitForm = (
    values,
    { setSubmitting, setErrors /* setValues and other goodies */ }
  ) => {
    const { handleAddGame, game } = this.props;
    const { notes, cost, cartdisk, casebox, manual, other, platform } = values;

    // need to set submitting and set errors

    handleAddGame({
      notes,
      cost,
      hasCartDisk: cartdisk,
      hasCaseBox: casebox,
      hasManual: manual,
      hasOtherInserts: other,
      selectedPlatform:
        game.platforms.length === 1 ? game.platforms[0] : platform,
    });
  };

  render() {
    const { game, handleToggleAddView } = this.props;
    const { platforms } = game;

    return (
      <AddItemDetailViewContainer>
        <Formik
          initialValues={{
            notes: "",
            cost: 0,
            cartdisk: false,
            casebox: false,
            manual: false,
            other: false,
            platform: "",
          }}
          validate={this.validateForm}
          onSubmit={this.handleSubmitForm}
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
                  value={values.cartdisk}
                  onChange={handleChange}
                  labelText="Has cart/disk?"
                />
                <Checkbox
                  id="casebox"
                  name="casebox"
                  value={values.casebox}
                  onChange={handleChange}
                  labelText="Has case/box?"
                />
                <Checkbox
                  id="manual"
                  name="manual"
                  value={values.manual}
                  onChange={handleChange}
                  labelText="Has manual?"
                />
                <Checkbox
                  id="other"
                  name="other"
                  value={values.other}
                  onChange={handleChange}
                  labelText="Has other inserts?"
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
                  block
                >
                  Cancel
                </Button>
              </ButtonWrapper>
            </AddForm>
          )}
        />
      </AddItemDetailViewContainer>
    );
  }
}

AddItemDetailView.propTypes = {
  game: PropTypes.object.isRequired,
  handleAddGame: PropTypes.func.isRequired,
  handleToggleAddView: PropTypes.func.isRequired,
};

export default AddItemDetailView;
