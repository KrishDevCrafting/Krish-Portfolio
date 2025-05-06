import React, { useState } from "react";
import img from "../Assets/KrishJAAT.jpeg";
import "./index.css";
import { motion } from "framer-motion";

const Main = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="container-wrapper">
      <motion.div
        className={darkMode ? "container dark-mode" : "container light-mode"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="container-child"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            I'm Krish
          </motion.h1>

          <motion.h4
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            I'm a Developer!
          </motion.h4>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Driven by passion and curiosity, I love building dynamic,
            responsive, and user-focused web applications. My journey as a
            developer is fueled by continuous learning and a strong desire to
            stay ahead in the ever-evolving tech world.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            I specialize in front-end development, crafting engaging user
            interfaces and seamless user experiences using modern frameworks and
            libraries like React, Tailwind CSS, and JavaScript. I enjoy turning
            complex problems into elegant, efficient solutions that deliver real
            value. Always eager to explore new tools and technologies, I believe
            in writing clean, scalable code and contributing to projects that
            make a meaningful impact.
          </motion.p>

          <motion.div
            className="buttons"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1 }}
          >
            <button type="button">Get in touch</button>
            <button type="button">Resume</button>
          </motion.div>

          <motion.button
            className="toggle-button"
            onClick={toggleDarkMode}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </motion.button>
        </motion.div>

        <motion.div
          className="image-container"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.5, type: "spring", stiffness: 100 }}
        >
          <img src={img} alt="Profile" id="img-size" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Main;

// https://codeefly.net/wp/zyan/
// TikTok embed code
// coffe
