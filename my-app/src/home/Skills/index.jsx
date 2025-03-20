import React, { useState, useEffect } from "react";
import "./index.css";
import SkillBar from "./skills";
const PageSkill = () => {
  const [inView, setInView] = useState(false);

  // Detect if the skills section is in the viewport

  // const isInViewport = (element) => {
  //   const rect = element.getBoundingClientRect();
  //   return (
  //     rect.top >= 0 &&
  //     rect.left >= 0 &&
  //     rect.bottom <=
  //       (window.innerHeight || document.documentElement.clientHeight) &&
  //     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  //   );
  // };

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
            <label>HTML</label>
            <div className="skill-bar">
              <div
                className="skill-fill"
                style={{ width: inView ? "20%" : "0%" }}
              />
            </div>
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
            <div className="skill-bar">
              <div
                className="skill-fill"
                style={{ width: inView ? "20%" : "0%" }}
              />
            </div>
          </div>
          <div className="child-bar">
            <h1>C++</h1>
            <div className="skill-bar">
              <div
                className="skill-fill"
                style={{ width: inView ? "20%" : "0%" }}
              />
            </div>
          </div>
        </div>
        {/* end */}
        {/* 3 */}
        <div className="parent-bar">
          <div className="child-bar">
            <h1>CSS</h1>
            <div className="skill-bar">
              <div
                className="skill-fill"
                style={{ width: inView ? "20%" : "0%" }}
              />
            </div>
          </div>
          <div className="child-bar">
            <h1>Javascript</h1>
            <div className="skill-bar">
              <div
                className="skill-fill"
                style={{ width: inView ? "20%" : "0%" }}
              />
            </div>
          </div>
        </div>
        {/* end! */}
        <div>
          <SkillBar skill="React" percentage={80} />
        </div>
      </div>
    </>
  );
};

export default PageSkill;
