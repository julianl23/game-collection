import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Message = styled.div`
  color: ${({ theme }) => theme.pinkRed};
  font-size: 1em;
  font-weight: 500;
`;

const ErrorMessage = ({ className, message }) => (
  <Message className={className}>{message}</Message>
);

ErrorMessage.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string.isRequired,
};

ErrorMessage.defaultProps = {
  className: "",
};

export default ErrorMessage;
