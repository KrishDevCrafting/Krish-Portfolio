import React, { useContext } from "react";
import "./index.css";
import { ThemeContext } from "../home/ThemeContext";
const Nav = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  // const toggleButton = () => {
  //   setMode(!mode);
  // };

  return (
    <div>
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
              <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                Toggle {theme === "light" ? "Dark" : "Light"} Mode
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;

// check-laptop