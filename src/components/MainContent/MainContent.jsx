import React from "react";
import styled from "styled-components";

const MainContent = () => {
  const Main = styled.section`
    display: grid;
    grid-template-columns: repeat(4);
    grid-gap: 16px;
    grid-auto-rows: minmax(100px, auto);
    min-height: 90vh;
    padding: 25px;
  `;

  const TempContentDiv = styled.section`
    grid-column: 1 / 4;
    grid-row: 1;
  `;

  return (
    <Main>
      <TempContentDiv>Whoa! Main Content</TempContentDiv>
    </Main>
  );
};

export default MainContent;
