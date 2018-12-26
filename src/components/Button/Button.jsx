import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { switchProp } from "styled-tools";

const sizes = {
  small: 25,
  normal: 36,
  large: 50,
};

const buttonStyles = {
  primary: "#322F6F",
  secondary: "#F7FAFE",
};

const textStyles = {
  primary: "#fff",
  secondary: "#222629",
};

const StyledButton = styled.button`
  height: ${({ size }) => sizes[size]}px;
  background: ${({ buttonStyle }) => buttonStyles[buttonStyle]};
  border-radius: 3px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 14px;
  font-weight: 300;
  line-height: 16px;
  color: ${({ buttonStyle }) => textStyles[buttonStyle]};
  cursor: pointer;
  ${switchProp("block", {
    true: css`
      display: block;
      width: 100%;
    `,
    false: css`
      display: inline-block;
    `,
  })};
`;

const Button = ({
  children,
  type,
  className,
  buttonStyle,
  size,
  onClick,
  block,
}) => (
  <StyledButton
    className={className}
    type={type}
    buttonStyle={buttonStyle}
    size={size}
    onClick={onClick}
    block={block}
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
  block: PropTypes.bool,
};

Button.defaultProps = {
  children: "",
  className: "",
  type: "button",
  buttonStyle: "primary",
  size: "normal",
  onClick: null,
  block: false,
};

export default Button;
