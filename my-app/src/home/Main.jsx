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

          <button type="button">Get in touch--</button>
          <button type="button">Resume</button>
        </div>
        <div>
          <span>
            <img src={img} alt="" srcset="" id="img-size" />
          </span>
        </div>
      </div>
      <div className="experience-container">
        <h1 style={{ textAlign: "center" }}>Experiences!</h1>
        <ul>
          <li>Javascript</li>
          <li>React.js</li>
          <li>Css</li>
          <li>Express.js</li>
        </ul>
      </div>
    </>
  );
};

export default Main;
