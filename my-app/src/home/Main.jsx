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
      {/* Section End */}
      <div className="container-box">
        <div>
          <h1 style={{ textAlign: "center" }}>Projects</h1>
          <div className="mini-box"></div>
          <div className="mini-box"></div>
          <div className="mini-box"></div>
          <div className="mini-box"></div>
        </div>
      </div>

      <footer>
        <div className="footer-container">
          <h1>Contact</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nostrum
            dolorum velit quibusdam dolor consequatur repudiandae quae eum illum
            deserunt.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Main;
