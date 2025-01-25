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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus,
            itaque fugiat! Illum accusantium illo ducimus sequi corrupti,
            voluptate non, sapiente voluptates, error et excepturi vitae totam
            ut aliquid libero voluptas dolorum temporibus atque alias neque?
            Aspernatur rem sit voluptatum ipsum harum voluptate expedita sunt
            assumenda nulla dolores esse similique consequatur, corrupti
            suscipit exercitationem, perferendis quo eius, aperiam totam
            doloremque officiis iure cupiditate hic. Distinctio ea quas tempore
            voluptas in velit odio ab reiciendis molestias et, minima
            consequatur fuga voluptate praesentium necessitatibus! Repellat ad
            fugiat, odit nam eum voluptatum dolores, quod soluta molestias
            provident possimus. Eum ducimus accusantium delectus nobis! Aperiam?
          </p>
        </div>
      </footer>
    </>
  );
};

export default Main;
