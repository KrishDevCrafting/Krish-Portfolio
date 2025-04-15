import React, { useRef } from "react";
import { ThemeProvider } from "./home/ThemeContext";
import Main from "./home/Main";
import Nav from "./NavBar";
import Myservice from "./home/Myservice";
import AboutMe from "./home/AboutMe";
import PageSkill from "./home/Skills";
import Myprojects from "./home/myProject";
import Footer from "./Footers";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutSection from "./Testing/Test1";
export default function App() {
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ThemeProvider>
      <Router>
        <Nav onAboutclick={scrollToAbout} />

        {/* Routes block should ONLY contain <Route /> elements */}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/" element={<Myservice />} />
          <Route path="/" element={<AboutMe />} />
          <Route path="/skills" element={<PageSkill />} />
          <Route path="/projects" element={<Myprojects />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/test" element={<AboutSection />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
