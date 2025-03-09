import React from "react";
import img from "../../Assets/red-sunset-mountain-landscape-desktop-wallpaper.jpg";

export default function AboutMe() {
  return (
    <div>
      <h1>About-Me</h1>

      <h3>Transforming visions into exceptional portfolios</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda,
        nostrum magni! Ipsum eligendi dicta exercitationem quae quo enim
        deserunt quidem?
      </p>

      <div>
        <img src={img} alt="" />
      </div>
    </div>
  );
}
