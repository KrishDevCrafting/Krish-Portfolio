import React from "react";

import Main from "./home/Main";
import Nav from "./NavBar";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Nav />
    <Main />
  </React.StrictMode>
);
