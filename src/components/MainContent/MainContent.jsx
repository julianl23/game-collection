import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Login from "../Login";

const MainContent = () => {
  const Main = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 16px;
    grid-auto-rows: minmax(100px, auto);
    min-height: 90vh;
    padding: 25px;
    font-size: ${props => props.theme.fontSizeNormal};
  `;

  const LoginContent = styled(Login)`
    grid-column: 2 / span 2;
    grid-row: 1;
  `;

  return (
    <Main>
      {/* <TempContentDiv>Whoa! Main Content</TempContentDiv> */}
      <LoginContent />
    </Main>
  );
};

MainContent.propTypes = {
  theme: PropTypes.object,
};

MainContent.defaultProps = {
  theme: {},
};

export default MainContent;
