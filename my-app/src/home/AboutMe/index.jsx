import React, { forwardRef } from "react";
import "./index.css";
import img from "../../Assets/KrishPhoto.jpg";
const AboutMe = forwardRef((props, ref) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "../../Assets/KRISH-Resume.pdf";
    link.download = "Assets/KRISH-Resume.pdf";
    link.click();
  };
  return (
    <div className="container-about">
      <div ref={ref}>
        <h1 id="aboutMe-text">About-Me</h1>
        <div className="container-child-about">
          <h3>Transforming visions into exceptional portfolio</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda,
            nostrum magni! Ipsum eligendi dicta exercitationem quae quo enim
            deserunt quidem?
          </p>
          <button onClick={handleDownload}>Download-CV</button>
        </div>
      </div>
      <div className="img-container">
        <img src={img} alt="img-not-found!" id="img-me" />
      </div>
    </div>
  );
});
export default AboutMe;
