import React from "react";
import styled from "styled-components";
import TextField from "../TextField";
import Button from "../Button";

const RegisterWrapper = styled.section`
  grid-column: 2 / span 2;
`;

const Heading = styled.h2`
  font-size: ${props => props.theme.fontSizeXLarge};
  font-weight: 500;
  text-align: center;
`;

const RegisterButton = styled(Button)`
  margin-top: 24px;
  display: block;
  width: 100%;
  font-size: 1em;
`;

const Register = () => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <RegisterWrapper>
      <Heading>Register</Heading>

      <form action="/" method="POST" onSubmit={handleSubmit}>
        <TextField id="email" labelText="Email" type="email" />
        <TextField id="username" labelText="Username" />
        <TextField id="firstname" labelText="First Name" />
        <TextField id="lastname" labelText="Last Name" />
        <TextField id="password" labelText="Password" type="password" />
        <RegisterButton type="submit" size="large">
          Sign Up
        </RegisterButton>
      </form>
    </RegisterWrapper>
  );
};

export default Register;
