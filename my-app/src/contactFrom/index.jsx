import React, { useState, useEffect } from "react";
// import styled from "styled-components";
import "./index.css";
const Form = () => {
  const [theme, setTheme] = useState(false);

  const handleMode = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  useEffect(() => {
    document.body.className = ""; // Clear previous classes
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <>
      <div>
        <button type="submit" onClick={handleMode}>
          {theme === "light" ? "Dark" : "Light"}
          Switch
        </button>
      </div>

      <div className="login-box">
        <form>
          <div className="user-box">
            <input type="text" name required />
            <label>Full Name</label>
          </div>
          <div className="user-box">
            <input type="password" name required />
            <label>Email</label>
          </div>

          <div className="user-box">
            <input type="text" name required />
            <label>Message</label>
          </div>
          <center>
            <a href="#">
              Connected
              <span />
            </a>
          </center>
        </form>
      </div>
    </>
  );
};

// const StyledWrapper = styled.div``;

export default Form;
