import React from "react";
import { ThemeProvider } from "./home/ThemeContext";
import Main from "./home/Main";
import Nav from "./NavBar";
export default function App() {
  return (
    <ThemeProvider>
      <div>
        <Nav />
        <Main />
      </div>
    </ThemeProvider>
  );
}
