import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const sizes = {
  small: 25,
  normal: 36,
  large: 50,
};

const buttonStyles = {
  primary: "#322F6F",
  secondary: "",
};

const StyledButton = styled.button`
  height: ${({ size }) => sizes[size]}px;
  background: ${({ buttonStyle }) => buttonStyles[buttonStyle]};
  color: #fff;
`;

const Button = ({ children, type, className, buttonStyle, size, onClick }) => (
  <StyledButton
    className={className}
    type={type}
    buttonStyle={buttonStyle}
    size={size}
    onClick={onClick}
  >
    {children}
  </StyledButton>
);

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  buttonStyle: PropTypes.oneOf(["primary", "secondary"]),
  size: PropTypes.oneOf(["small", "normal", "large"]),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  children: "",
  className: "",
  type: "button",
  buttonStyle: "primary",
  size: "normal",
  onClick: null,
};

export default Button;
