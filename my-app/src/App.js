import React, { useRef } from "react";
import { ThemeProvider } from "./home/ThemeContext";

import Nav from "./NavBar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutSection from "./Testing/Test1";
import Home from "./Home";
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
          <Route path="/" element={<Home />} />
         
          <Route path="/test" element={<AboutSection />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
