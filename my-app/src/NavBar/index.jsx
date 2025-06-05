import React, { useContext } from "react";
import "./index.css";
import { ThemeContext } from "../home/ThemeContext";
const Nav = ({ onAboutclick }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = React.useState(false);
  // const toggleButton = () => {
  //   setMode(!mode);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <div>
      <nav className="navbar">
        <div class="menu-toggle" onClick={toggleMenu}>
          <button type="button"
          className="colo"
          ></button>
        </div>

        <div className="nav-content">
          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li>
              <a href="#home">Home</a>
            </li>

            <li>
              <a href="#blog">Blog</a>
            </li>
            <li onClick={onAboutclick}>
              <a href="#project">Project</a>
            </li>
            <li onClick={onAboutclick}>
              <a href="#about">About</a>
            </li>
          </ul>
        </div>

        <div className="nav-content">
          <ul className="nav-links">
            <a
              href="https://github.com/KrishDevCrafting"
              target="_blank"
              rel="noreferrer">
              <li>Github</li>
            </a>
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
