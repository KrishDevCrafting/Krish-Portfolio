import React from "react";
import "./index.css";
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
        <div className="project-card"></div>
        <div className="project-card"> </div>
      </div>
    </>
  );
};
export default Myprojects;
