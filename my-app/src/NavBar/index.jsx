import React from "react";
import "./index.css";
const Nav = () => {
  return (
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
          <li>DarkMode</li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
