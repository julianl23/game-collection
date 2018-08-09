import React, { Component } from "react";
import styled from "styled-components";
import { prop } from "styled-tools";
import { Formik } from "formik";
import TextField from "../TextField";
import Button from "../Button";

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
  handleFormSubmission = e => {
    e.preventDefault();
    console.log(e);
  };

  render() {
    return (
      <RegisterWrapper>
        <Heading>Register</Heading>

        <Formik
          initialValues={{
            email: "",
            username: "",
            firstname: "",
            lastname: "",
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

            if (!values.firstname) {
              errors.firstname = errorStrings.required;
            }

            if (!values.lastname) {
              errors.lastname = errorStrings.required;
            }

            if (!values.password) {
              errors.password = errorStrings.required;
            }

            return errors;
          }}
          onSubmit={this.handleFormSubmission}
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
                errorMessage={touched.username && errors.username}
              />
              <TextField
                id="firstname"
                name="firstname"
                onChange={handleChange}
                onBlur={handleBlur}
                labelText="First Name"
                errorMessage={touched.firstname && errors.firstname}
              />
              <TextField
                id="lastname"
                name="lastname"
                onChange={handleChange}
                onBlur={handleBlur}
                labelText="Last Name"
                errorMessage={touched.lastname && errors.lastname}
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

export default Register;
