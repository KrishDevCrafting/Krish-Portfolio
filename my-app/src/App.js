import React from "react";
import { ThemeProvider } from "./home/ThemeContext";
import Main from "./home/Main";
import Nav from "./NavBar";
import Myservice from "./home/Myservice";
import AboutMe from "./home/AboutMe";
import PageSkill from "./home/Skills";

export default function App() {
  return (
    <ThemeProvider>
      <div>
        <Nav />
        <Main />
        <Myservice />
        <AboutMe />
        <PageSkill />
      </div>
    </ThemeProvider>
  );
}
