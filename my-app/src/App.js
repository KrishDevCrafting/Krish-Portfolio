import React from "react";
import { ThemeProvider } from "./home/ThemeContext";
import Main from "./home/Main";
import Nav from "./NavBar";
import Contact from "./home/Form/contact";
export default function App() {
  return (
    <ThemeProvider>
      <div>
        <Nav />
        <Main />
        <Contact />
      </div>
    </ThemeProvider>
  );
}
