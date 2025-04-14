import React, { useContext } from "react";
import "./index.css";
import { ThemeContext } from "../home/ThemeContext";
const Nav = ({ onAboutclick }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  // const toggleButton = () => {
  //   setMode(!mode);
  // };

  return (
    <div>
      <nav className="navbar">
        <div className="nav-content">
          <ul>
            <button>
              <li>Home</li>
            </button>
            <button>
              <li>Blog</li>
            </button>
            <button onClick={onAboutclick}>
              <li>Project</li>
            </button>
            <button onClick={onAboutclick}>
              <li>About</li>
            </button>
          </ul>
        </div>

        <div className="nav-content">
          <ul>
            <a href="https://github.com/KrishDevCrafting" target="_blank">
              <li>Github</li>
            </a>
            <li>
              <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
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
