import React, { useRef } from "react";
import { ThemeProvider } from "./home/ThemeContext";
import Form from "./contactFrom/index";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutSection from "./Testing/Test1";
import Home from "./Home";
export default function App() {
  return (
    <ThemeProvider>
      <Router>
        {/* Routes block should ONLY contain <Route /> elements */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Form />} />
          {/* <Route path="/test" element={<AboutSection />} /> */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}


// hello