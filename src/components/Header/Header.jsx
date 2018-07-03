import React from "react";
import styled from "styled-components";
import { Gamepad } from "../Icons";

const Header = () => {
  const Wrapper = styled.header`
    height: 60px;
    background: #d8d8d8;
    border: 1px solid #999;
  `;

  return (
    <Wrapper>
      <Gamepad />
      <h1>Game Collection</h1>
    </Wrapper>
  );
};

export default Header;
