import React, { useState } from "react";
import "./index.css";
const Nav = () => {
  const [mode, setMode] = useState(false);

  const toggleButton = () => {
    setMode(!mode);
  };

  return (
    <div
      className={mode ? "nav-container dark-mode" : "nav-container light-mode"}
    >
      <nav className="navbar">
        <div className="nav-content">
          <ul>
            <li>Home</li>
            <li>Blog</li>
            <li>Project</li>
            <li>About</li>
          </ul>
        </div>

        <div className="nav-content">
          <ul>
            <li>Github</li>
            <li>
              <button onClick={toggleButton}>DarkMode</button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
