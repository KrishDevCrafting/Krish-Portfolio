import React from "react";
import "./index.css";
import redSunimg from "../../Assets/red-sunset-mountain-landscape-desktop-wallpaper.jpg";
const Myprojects = () => {
  return (
    <>
      <div className="parent-container">
        <h3>MY RECENT PORTFOLIO</h3>
        <h1>
          Elevate your brand to new
          <br />
          heights with our portfolio expertise
        </h1>
        <div className="project-parent">
          <div className="project-card"></div>
          <div className="project-card"> </div>
        </div>
      </div>
      {/* second-line */}
      <div className="project-parent">
        <div className="project-card-1">
          <img src={redSunimg} alt="img" srcset="" id="img-1" />
          <div className="overlay"></div>
        </div>
        <div className="project-card-2"> </div>
      </div>
    </>
  );
};
export default Myprojects;
