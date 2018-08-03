import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// const TextField = ({ id, labelText, type, className, value, onChange }) => {
// class TextField extends Component {
//   constructor() {
//     super();
//     this.state = {};
//   }

//   handleChange = e => {
//     const { onChange } = this.props;
//     onChange(e);
//   };

//   render() {
//     const { id, labelText, type, className, value, name } = this.props;

//     const Wrapper = styled.div`
//       margin-bottom: 20px;
//     `;

//     const Label = styled.label`
//       display: block;
//       margin-bottom: 10px;
//     `;

//     const Input = styled.input`
//       display: block;
//       border: 1px solid ${({ theme }) => theme.borderGray};
//       background: ${({ theme }) => theme.purpleWhite};
//       font-size: ${({ theme }) => theme.fontSizeNormal};
//       padding: 15px 10px;
//       height: 45px;
//       width: 100%;
//     `;

//     return (
//       <Wrapper className={className}>
//         <Label htmlFor={id}>{labelText}</Label>
//         {/* <Input
//           id={id}
//           type={type}
//           value={value}
//           onChange={this.handleChange}
//           name={name}
//           // key={id}
//         /> */}
//         <input id={id} type={type} />
//       </Wrapper>
//     );
//   }
// }

const Wrapper = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const Input = styled.input`
  display: block;
  border: 1px solid ${({ theme }) => theme.borderGray};
  background: ${({ theme }) => theme.purpleWhite};
  font-size: ${({ theme }) => theme.fontSizeNormal};
  padding: 15px 10px;
  height: 45px;
  width: 100%;
`;

Input.displayName = "Input";

const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.pinkRed};
  font-size: 1em;
  font-weight: 500;
  margin: 10px 0 20px;
`;

class TextField extends Component {
  handleChange = event => {
    const { onChange } = this.props;
    onChange(event);
  };

  handleBlur = event => {
    const { onBlur } = this.props;
    onBlur(event);
  };

  render() {
    const {
      id,
      labelText,
      type,
      className,
      value,
      name,
      errorMessage,
    } = this.props;

    return (
      <Wrapper className={className}>
        {labelText && <Label htmlFor={id}>{labelText}</Label>}
        <div className="textfield-wrapper">
          <Input
            id={id}
            name={name}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            type={type}
            value={value}
          />
        </div>
        {errorMessage && (
          <div id={`${id}-error-message`} className="textfield-error-message">
            <ErrorMessage>{errorMessage}</ErrorMessage>
          </div>
        )}
      </Wrapper>
    );
  }
}

TextField.propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  errorMessage: PropTypes.string,
};

TextField.defaultProps = {
  type: "text",
  className: "",
  onBlur: () => {},
  onChange: () => {},
  value: "",
  name: "",
  errorMessage: "",
};

export default TextField;
