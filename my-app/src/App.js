import React, { useRef } from "react";
import { ThemeProvider } from "./home/ThemeContext";
import Main from "./home/Main";
import Nav from "./NavBar";
import Myservice from "./home/Myservice";
import AboutMe from "./home/AboutMe";
import PageSkill from "./home/Skills";
import Myprojects from "./home/myProject";
import Footer from "./Footers";
export default function App() {
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ThemeProvider>
      <div>
        <Nav onAboutclick={scrollToAbout} />
        <Main />
        <Myservice />
        <AboutMe ref={aboutRef} />
        <PageSkill />
        <Myprojects ref={aboutRef} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
