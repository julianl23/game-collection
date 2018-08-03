import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import axios from "axios";
import { Formik } from "formik";

import TextField from "../TextField";
import Button from "../Button";
import ErrorMessage from "../ErrorMessage";

const errorStrings = {
  401: "Your credentials are invalid. Please check your email and password and try again.",
  generic: "An error has occurred.",
  required: "Required",
};

const LoginSection = styled.section`
  grid-column: 2 / span 2;
`;

const Heading = styled.h2`
  font-size: ${({ theme }) => theme.fontSizeXLarge};
  font-weight: 500;
  text-align: center;
`;

const LoginButton = styled(Button)`
  margin-top: 24px;
  display: block;
  width: 100%;
  font-size: 1em;
`;

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleFieldChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  };

  validateSubmission = () => {
    const { email, password } = this.state;

    if (!email || !password) {
      return false;
    }

    return true;
  };

  submitForm = values => {
    const response = axios.post(
      "http://localhost:3000/api/users/login",
      values,
      {
        withCredentials: true,
      }
    );

    return response;
  };

  handleSubmit = (
    values,
    { setSubmitting, setErrors /* setValues and other goodies */ }
  ) => {
    const { history } = this.props;

    this.submitForm(values).then(
      response => {
        setSubmitting(false);

        if (response.status === 200) {
          history.push("/");
        } else {
          setErrors({ loginError: errorStrings.default });
        }
      },
      error => {
        setSubmitting(false);
        let message = errorStrings[error.response.status];
        if (!message) {
          message = errorStrings.default;
        }
        setErrors({ loginError: message });
      }
    );
  };

  formikForm = () => (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validate={values => {
        // same as above, but feel free to move this into a class method now.
        const errors = {};
        if (!values.email) {
          errors.email = errorStrings.required;
        }

        if (!values.password) {
          errors.password = errorStrings.required;
        }

        return errors;
      }}
      onSubmit={this.handleSubmit}
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
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            id="password"
            labelText="Password"
            errorMessage={touched.password && errors.password}
          />
          {errors.loginError && <ErrorMessage message={errors.loginError} />}
          <LoginButton type="submit" disabled={isSubmitting}>
            Submit
          </LoginButton>
        </form>
      )}
    />
  );

  render() {
    return (
      <LoginSection>
        <Heading>Log In</Heading>
        {this.formikForm()}
      </LoginSection>
    );
  }
}

Login.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Login;
