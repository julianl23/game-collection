import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Gamepad } from "../Icons";

const Header = () => {
  const Wrapper = styled.header`
    height: 60px;
    background: #d8d8d8;
    border: 1px solid #999;
    border-left: 0;
    border-right: 0;
    display: flex;
    align-items: center;
    padding: 0 25px 0 25px;
  `;

  const Title = styled.h1`
    font-size: ${props => props.theme.fontSizeLarge};
    margin: 0;
  `;

  const StyledGamepad = styled(Gamepad)`
    margin-right: 20px;
    fill: #fff;
  `;

  return (
    <Wrapper>
      <StyledGamepad fill="#fff" />
      <Title>Game Collection</Title>
    </Wrapper>
  );
};

Header.propTypes = {
  theme: PropTypes.object,
};

Header.defaultProps = {
  theme: {},
};

export default Header;
