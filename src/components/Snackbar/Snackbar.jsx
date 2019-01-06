import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const SnackbarContainer = styled.div`
  position: fixed;
  min-height: 48px;
  padding: 16px;
  background: ${({ theme }) => theme.bodyCopy};
  color: ${({ theme }) => theme.white};
  border-radius: 4px;
  bottom: 10px;
  left: 10px;
  // 100vw - width of scrollbar - 20px gutters
  width: calc(100vw - (100vw - 100%) - 20px);

  @media (min-width: 768px) {
    width: auto;
  }

  &.snackbar-fade-enter {
    opacity: 0.01;
  }

  &.snackbar-fade-enter.snackbar-fade-enter-active {
    opacity: 1;
    transition: opacity 200ms ease-in;
  }

  &.snackbar-fade-leave {
    opacity: 1;
  }

  &.snackbar-fade-leave.snackbar-fade-leave-active {
    opacity: 0.01;
    transition: opacity 500ms ease-in;
  }

  &.snackbar-fade-appear {
    opacity: 0.01;
  }

  &.snackbar-fade-appear.snackbar-fade-appear-active {
    opacity: 1;
    transition: opacity 250ms ease-in;
  }
`;

const Snackbar = ({ children }) => (
  <SnackbarContainer>{children}</SnackbarContainer>
);

Snackbar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Snackbar;
