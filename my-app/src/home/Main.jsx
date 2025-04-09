import React, { useState } from "react";
import img from "../Assets/love.jpg";
import "./index.css";

const Main = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="container-wrapper">
      <div
        className={darkMode ? "container dark-mode" : "container light-mode"}
      >
        <div className="container-child">
          <h1 className="fade-in">I'm Krish</h1>
          <h4 className="fade-in delay-1">I'm a Developer!</h4>
          <p className="fade-in delay-2">
            Passionate about building web applications and learning new
            technologies.
          </p>
          <p className="fade-in delay-3">
            I specialize in front-end development and have experience with
            various frameworks and libraries.
          </p>
          <div className="buttons fade-in delay-4">
            <button type="button">Get in touch</button>
            <button type="button">Resume</button>
          </div>
          <button
            className="toggle-button fade-in delay-5"
            onClick={toggleDarkMode}
          >
            {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </button>
        </div>
        <div className="image-container fade-in delay-6">
          <img src={img} alt="Profile" id="img-size" />
        </div>
      </div>
    </div>
  );
};

export default Main;

// https://codeefly.net/wp/zyan/
// TikTok embed code
// coffe
