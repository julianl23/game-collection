import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import TextField from "../TextField";

const Login = () => {
  const LoginSection = styled.section`
    grid-column: 2 / span 2;
  `;

  const Heading = styled.h2`
    font-size: ${props => props.theme.fontSizeXLarge};
    font-weight: 500;
    text-align: center;
  `;

  return (
    <LoginSection>
      <Heading>Log In</Heading>
      <form action="/" method="POST">
        <TextField id="email" labelText="Email" type="email" />
        <TextField id="password" labelText="Password" type="password" />
      </form>
    </LoginSection>
  );
};

Login.propTypes = {
  theme: PropTypes.object,
};

Login.defaultProps = {
  theme: {},
};

export default Login;
