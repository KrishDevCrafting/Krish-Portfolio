import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Start off-screen & hidden
      whileInView={{ opacity: 1, y: 0 }} // Animate when in view
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }} // Animate only once
      className=""
    >
      <h2 className="text-3xl font-bold">About Me</h2>
      <p>I’m Krish, a passionate developer building awesome stuff 👨‍💻</p>
    </motion.div>
  );
};

export default AboutSection;
