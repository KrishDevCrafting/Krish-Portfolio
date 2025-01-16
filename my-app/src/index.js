import React from "react";
import App from "./App";
import Nav from "./NavBar";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Nav />
    <App />
  </React.StrictMode>
);
