import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { prop } from "styled-tools";
import { Formik } from "formik";
import axios from "axios";

import TextField from "../TextField";
import Button from "../Button";
import ErrorMessage from "../ErrorMessage";

const errorStrings = {
  generic: "An error has occurred.",
  required: "Required",
  email: {
    invalidFormat: "Your email address is in an invalid format.",
  },
};

const RegisterWrapper = styled.section`
  grid-column: 1 / span 4;

  @media (min-width: 768px) {
    grid-column: 2 / span 2;
  }
`;

const Heading = styled.h2`
  font-size: ${prop("theme.fontSizeXLarge")};
  font-weight: 500;
  text-align: center;
`;

const RegisterButton = styled(Button)`
  margin-top: 24px;
  display: block;
  width: 100%;
  font-size: 1em;
`;

class Register extends Component {
  constructor() {
    super();
    this.state = {
      serverError: null,
    };
  }

  handleFormSubmission = async values => {
    const { history } = this.props;

    this.setState({
      serverError: null,
    });

    try {
      // TODO: Create config layer for getting api urls
      const registerResult = await axios.put(
        "http://localhost:3000/api/users",
        values,
        {
          withCredentials: true,
        }
      );

      history.push("/");
    } catch (error) {
      const responseCode = error.response.status;
      const errorMessage =
        responseCode === 409
          ? "A user with this email already exists"
          : "Could not create user";

      this.setState({
        serverError: errorMessage,
      });
    }
  };

  render() {
    const { serverError } = this.state;

    return (
      <RegisterWrapper>
        <Heading>Register</Heading>

        <Formik
          initialValues={{
            email: "",
            username: "",
            firstName: "",
            lastName: "",
            password: "",
          }}
          validate={values => {
            // same as above, but feel free to move this into a class method now.
            const errors = {};
            if (!values.email) {
              errors.email = errorStrings.required;
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
            ) {
              errors.email = errorStrings.email.invalidFormat;
            }

            if (!values.username) {
              errors.username = errorStrings.required;
            }

            if (!values.firstName) {
              errors.firstName = errorStrings.required;
            }

            if (!values.lastName) {
              errors.lastName = errorStrings.required;
            }

            if (!values.password) {
              errors.password = errorStrings.required;
            }

            return errors;
          }}
          onSubmit={values => this.handleFormSubmission(values)}
          render={({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <TextField
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                id="email"
                labelText="Email"
                errorMessage={touched.email && errors.email}
              />
              <TextField
                id="username"
                name="username"
                onChange={handleChange}
                onBlur={handleBlur}
                labelText="Username"
                value={values.username}
                errorMessage={touched.username && errors.username}
              />
              <TextField
                id="firstName"
                name="firstName"
                onChange={handleChange}
                onBlur={handleBlur}
                labelText="First Name"
                value={values.firstName}
                errorMessage={touched.firstName && errors.firstName}
              />
              <TextField
                id="lastName"
                name="lastName"
                onChange={handleChange}
                onBlur={handleBlur}
                labelText="Last Name"
                value={values.lastName}
                errorMessage={touched.lastName && errors.lastName}
              />
              <TextField
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                id="password"
                labelText="Password"
                errorMessage={touched.password && errors.password}
              />
              {serverError && <ErrorMessage message={serverError} />}
              <RegisterButton
                type="submit"
                size="large"
                disabled={isSubmitting}
              >
                Sign Up
              </RegisterButton>
            </form>
          )}
        />
      </RegisterWrapper>
    );
  }
}

export default withRouter(Register);
