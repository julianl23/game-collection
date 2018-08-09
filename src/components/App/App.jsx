import React from "react";
import { Route, Switch } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { CookiesProvider } from "react-cookie";
import Header from "../Header";
import Footer from "../Footer";
import Login from "../Login";
import Register from "../Register";
import Home from "../Home";
import Theme from "../../themes/theme";

// Injext globals into styled components
import "../../themes/globals";

const link = new HttpLink({
  uri: "http://localhost:3000/graphql", // TODO: Move this to env variable
  credentials: "include",
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
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
      <CookiesProvider>
        <React.Fragment>
          <Header />
          <Main>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/" component={Home} />
            </Switch>
          </Main>
          <Footer />
        </React.Fragment>
      </CookiesProvider>
    </ThemeProvider>
  </ApolloProvider>
);

export default App;
