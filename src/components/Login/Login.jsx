import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Mutation } from "react-apollo";
import { Redirect } from "react-router-dom";
import gql from "graphql-tag";
import TextField from "../TextField";
import Button from "../Button";

const Login = () => {
  const LoginSection = styled.section`
    grid-column: 2 / span 2;
  `;

  const Heading = styled.h2`
    font-size: ${props => props.theme.fontSizeXLarge};
    font-weight: 500;
    text-align: center;
  `;

  const LoginButton = styled(Button)`
    margin-top: 24px;
    display: block;
    width: 100%;
    font-size: 1em;
  `;

  const LOGIN = gql`
    mutation LoginMutation($input: LoginInput!) {
      Login(input: $input) {
        _id
        email
        firstName
        lastName
        token
      }
    }
  `;

  const handleSubmit = (e, LoginMutation) => {
    e.preventDefault();
    LoginMutation({
      variables: {
        input: { email: "julianl23@gmail.com", password: "password" },
      },
    });
  };

  return (
    <Mutation mutation={LOGIN}>
      {(LoginMutation, { data, loading, error }) => {
        if (data && data.Login.token) {
          return <Redirect to="/" />;
        }

        return (
          <LoginSection>
            <Heading>Log In</Heading>
            <form
              action="/"
              method="POST"
              onSubmit={e => handleSubmit(e, LoginMutation)}
            >
              <TextField id="email" labelText="Email" type="email" />
              <TextField id="password" labelText="Password" type="password" />
              {/* There should be separate buttons for PrimaryButton, SecondaryButton */}
              <LoginButton type="submit" buttonStyle="primary" size="large">
                Log In
              </LoginButton>
            </form>
          </LoginSection>
        );
      }}
    </Mutation>
  );
};

Login.propTypes = {
  theme: PropTypes.object,
};

Login.defaultProps = {
  theme: {},
};

export default Login;
