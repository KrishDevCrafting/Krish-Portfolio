import React from "react";
// import styled from "styled-components";
import "./index.css";
const Form = () => {
  return (
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
  );
};

// const StyledWrapper = styled.div``;

export default Form;
