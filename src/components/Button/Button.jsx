import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, type }) => <button type={type}>{children}</button>;

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
};

Button.defaultProps = {
  children: "",
  type: "button",
};

export default Button;
