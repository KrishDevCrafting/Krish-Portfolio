import React from "react";
import "./index.css";
const PageSkill = () => {
  return (
    <>
      {/* section-Eduction and skills */}

      <div className="main-container">
        <h3 className="heading-main">EDUCATION & SKILL</h3>

        <h1 className="heading-main">
          Showcasting your talent amplifying your impact!
        </h1>

        <div className="main-container-child">
          <div className="main-container-sub-child">
            <p className="box-design">2014-2018</p>
            <h5>WordPress and End Developer</h5>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit voluptas adipisci natus dolor tenetur alias
              voluptatibus dicta error, quod sequi?
            </p>
          </div>
          <div className="main-container-sub-child">
            <p className="box-design">2017-2019</p>
            <h5>Python Developer</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est porro
              veritatis quisquam tenetur, consectetur esse! Debitis iste
              similique commodi praesentium?
            </p>
          </div>
        </div>
      </div>
      {/* second! */}
      <div className="main-container">
        <div className="main-container-child">
          <div className="main-container-sub-child">
            <p className="box-design">2014-2018</p>
            <h5>WordPress and End Developer</h5>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit voluptas adipisci natus dolor tenetur alias
              voluptatibus dicta error, quod sequi?
            </p>
          </div>
          <div className="main-container-sub-child">
            <p className="box-design">2017-2019</p>
            <h5>Python Developer</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est porro
              veritatis quisquam tenetur, consectetur esse! Debitis iste
              similique commodi praesentium?
            </p>
          </div>
        </div>
        {/* dynamic-skill-bar */}
        <div className="parent-bar">
          <div className="child-bar">
            <h1>HTML</h1>
          </div>
          <div className="child-bar">
            <h1>Python</h1>
          </div>
        </div>
        {/* end */}
        {/* 2 */}
        <div className="parent-bar">
          <div className="child-bar">
            <h1>Java</h1>
          </div>
          <div className="child-bar">
            <h1>C++</h1>
          </div>
        </div>
        {/* end */}
        {/* 3 */}
        <div className="parent-bar">
          <div className="child-bar">
            <h1>CSS</h1>
          </div>
          <div className="child-bar">
            <h1>Javascript</h1>
          </div>
        </div>
        {/* end! */}
        <div>
          <h1>Hello-world!</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
            voluptates sit labore qui distinctio quis a quas maxime, aperiam
            amet?
          </p>
        </div>
      </div>
    </>
  );
};

export default PageSkill;
