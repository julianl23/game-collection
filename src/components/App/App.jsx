import React from "react";
import { Route, Switch } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Header from "../Header";
import Footer from "../Footer";
import Login from "../Login";
import Home from "../Home";
import Theme from "../../themes/theme";

// Injext globals into styled components
import "../../themes/globals";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql", // TODO: Move this to env variable
});

const Main = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 16px;
  grid-auto-rows: minmax(100px, auto);
  min-height: 90vh;
  padding: 25px;
  font-size: ${({ theme }) => theme.fontSizeNormal};
`;

const App = () => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={Theme}>
      <React.Fragment>
        <Header />
        <Main>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/" component={Home} />
          </Switch>
        </Main>
        <Footer />
      </React.Fragment>
    </ThemeProvider>
  </ApolloProvider>
);

export default App;
