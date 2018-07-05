import React from "react";
import { ThemeProvider } from "styled-components";
import Header from "../Header";
import MainContent from "../MainContent";
import Footer from "../Footer";
import Theme from "../../themes/theme";

// Injext globals into styled components
import "../../themes/globals";

const App = () => (
  <ThemeProvider theme={Theme}>
    <React.Fragment>
      <Header />
      <MainContent />
      <Footer />
    </React.Fragment>
  </ThemeProvider>
);

export default App;
