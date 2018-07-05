import React from "react";
import styled from "styled-components";

const Footer = () => {
  const Wrapper = styled.footer`
    background: #d8d8d8;
    border: 1px solid #999;
    border-left: 0;
    border-right: 0;
    display: flex;
    align-items: center;
    padding: 10px 25px;
  `;
  const currentYear = new Date().getFullYear();

  return <Wrapper>&copy; {currentYear} Julian Lord</Wrapper>;
};

export default Footer;
