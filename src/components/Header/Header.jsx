import React from "react";
import styled from "styled-components";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import { Link } from "react-router-dom";
import { Gamepad } from "../Icons";
import UserMenu from "../UserMenu";

// Pulling the current user in here was a problem to solve here. The user could be passed in from a graph
// query occurring higher up in the tree, or directly from a graph query here. Or even through context.
// I decided to add a graph query here, which means that the current user is queried here along with
// any other component that queries it. Until this (potentially) becomes a bigger problem, it's easier to
// implement it this way than to build up a larger infrastructure around passing around a user object.

// It occurs to me that I can use apollo-link-state. I'll investigate it later.

const GET_CURRENT_USER = gql`
  {
    currentUser {
      _id
      username
    }
  }
`;

const Wrapper = styled.header`
  height: 60px;
  background: ${({ theme }) => theme.backgroundGray};
  border: 1px solid ${({ theme }) => theme.borderGray};
  border-left: 0;
  border-right: 0;
  display: flex;
  padding: 0 25px 0 25px;
  align-items: center;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizeLarge};
  margin: 0;
  font-weight: 500;
`;

const StyledGamepad = styled(Gamepad)`
  margin-right: 20px;
  fill: #fff;
`;

const UserLinks = styled.span`
  margin-left: auto;
`;

const LogInLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizeNormal};
`;

const Header = () => (
  <Query query={GET_CURRENT_USER} fetchPolicy="network-only">
    {({ data }) => {
      const currentUser = data ? data.currentUser : null;

      return (
        <Wrapper>
          <StyledGamepad fill="#fff" />
          <Title>Game Collection</Title>
          {!currentUser && (
            <UserLinks>
              <LogInLink to="/login">Log In</LogInLink> /{" "}
              <LogInLink to="/register">Register</LogInLink>
            </UserLinks>
          )}

          {currentUser && <UserMenu currentUser={currentUser} />}
        </Wrapper>
      );
    }}
  </Query>
);

export default Header;
