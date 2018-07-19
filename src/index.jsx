import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";

const app = document.getElementById("app");
export default ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  app // eslint-disable-line comma-dangle
);
