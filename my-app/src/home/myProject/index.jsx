import "./index.css";
import img2 from "../../Assets/ChatGPT Image Apr 7, 2025, 10_30_12 PM.png";
import redSunimg from "../../Assets/finaltouchM4KRISH.png";
import img3 from "../../Assets/wallpaperflare.com_wallpaper.jpg";
import { forwardRef } from "react";
const Myprojects = forwardRef((props, ref) => {
  return (
    <>
      <div className="parent-container">
        <h3 ref={ref}>MY RECENT PORTFOLIO</h3>
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
          <div className="overlay">
            <h1>Sample-Image!</h1>
          </div>
        </div>
        <div className="project-card-2">
          <img src={img2} alt="img" srcset="" id="img-2" />
          <div className="overlay-2">
            <h1>Chair-img</h1>
          </div>
        </div>
      </div>

      {/* Third-Line */}

      <div className="project-parent-2">
        <div className="project-card-3">
          <img src={img3} alt="img" srcset="" id="img-3" />
          <div className="overlay-3">
            <h1>Sample-Image!</h1>
          </div>
        </div>
        <div className="project-card-2">
          <img src={img2} alt="img" srcset="" id="img-2" />
          <div className="overlay-2">
            <h1>Chair-img</h1>
          </div>
        </div>
      </div>
      <div class="scrolling-text">
        <span>I'm MotherFucker StarBoy..!</span>
      </div>
      {/* footersection! */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <h2>Krish Kuntal</h2>
            <p>Building cool web experiences with creativity & logic.</p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-social">
            <h4>Connect</h4>
            <div className="social-icons">
              <a
                href="https://github.com/KrishDevCrafting"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/krish-singh-7939b1294/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a href="mailto:krishgeek77@gmail.com">Email</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Krish Kuntal. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
});
export default Myprojects;
