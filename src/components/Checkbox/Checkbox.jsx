import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const Input = styled.input``;

Input.displayName = "Checkbox";

const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.pinkRed};
  font-size: 1em;
  font-weight: 500;
  margin: 10px 0 20px;
`;

const Checkbox = ({ className, id, labelText, errorMessage, ...rest }) => (
  <Wrapper className={className}>
    <Label htmlFor={id}>
      {labelText}
      <Input type="checkbox" {...rest} />
    </Label>
    {errorMessage && (
      <div
        id={`${id}-error-message`}
        className="checkbox-error-message"
        data-test-id="checkbox-error-message"
      >
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </div>
    )}
  </Wrapper>
);

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  labelText: PropTypes.string,
  errorMessage: PropTypes.string,
};

Checkbox.defaultProps = {
  className: "",
  labelText: "",
  errorMessage: "",
};

export default Checkbox;
