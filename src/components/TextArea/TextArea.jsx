import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledTextArea = styled.textarea`
  display: block;
  border: 1px solid ${({ theme }) => theme.borderGray};
  background: ${({ theme }) => theme.purpleWhite};
  font-size: ${({ theme }) => theme.fontSizeNormal};
  padding: 15px 10px;
  height: 90px;
  width: 100%;
`;

StyledTextArea.displayName = "TextArea";

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const Wrapper = styled.div`
  margin-bottom: 20px;
`;

const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.pinkRed};
  font-size: 1em;
  font-weight: 500;
  margin: 10px 0 20px;
`;

class TextArea extends Component {
  handleChange = event => {
    const { onChange } = this.props;
    onChange(event);
  };

  handleBlur = event => {
    const { onBlur } = this.props;
    onBlur(event);
  };

  render() {
    const { id, value, name, className, labelText, errorMessage } = this.props;

    return (
      <Wrapper className={className}>
        {labelText && <Label htmlFor={id}>{labelText}</Label>}
        <StyledTextArea
          id={id}
          value={value}
          name={name}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
        />
        {errorMessage && (
          <div id={`${id}-error-message`} className="textfield-error-message">
            <ErrorMessage>{errorMessage}</ErrorMessage>
          </div>
        )}
      </Wrapper>
    );
  }
}

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  labelText: PropTypes.string,
  errorMessage: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};

TextArea.defaultProps = {
  value: null,
  className: "",
  labelText: "",
  errorMessage: "",
  onChange: () => {},
  onBlur: () => {},
};

export default TextArea;
