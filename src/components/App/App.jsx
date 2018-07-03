import React from "react";
import Header from "../Header";

const App = () => {
  const currentYear = new Date().getFullYear();

  return (
    <React.Fragment>
      <Header />
      <section>whatThis is where the content lives get you one</section>
      <footer>&copy; {currentYear} Julian Lord</footer>
    </React.Fragment>
  );
};

export default App;
