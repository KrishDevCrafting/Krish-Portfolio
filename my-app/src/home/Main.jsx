import React from "react";
import img from "../Assets/love.jpg";
import "./index.css";
const Main = () => {
  return (
    <>
      <div className="container">
        <div className="container-child">
        <h1>I'm Krish</h1>

        <h4>I'm Developer!</h4>

        <button type="button">Get in touch--</button></div>
        <div>
          <span>
            <img src={img} alt="" srcset="" id="img-size" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Main;
