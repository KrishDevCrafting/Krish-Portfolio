import React from "react";
import "./index.css";
import { motion } from "framer-motion";

const Myservice = () => {
  const cardVariants = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, type: "spring" },
    },
  };

  const MotionCard = ({ children }) => (
    <motion.div
      className="container-child-2 bg-white p-4 rounded-lg shadow-lg hover:scale-105 transition-all"
      initial="offscreen"
      whileInView="onscreen"
      variants={cardVariants}
      whileHover={{ scale: 1.05 }}
    >
      {children}
    </motion.div>
  );

  return (
    <>
      <div className="container-service">
        <div className="container-child-service">
          <h1>My Service</h1>
          <h2>Crafting Stories Through</h2>
          <h2>design and innovation!</h2>
        </div>
      </div>

      {/* section-2 */}
      <div className="container-service-2">
        <MotionCard>
          <h1>Website Development</h1>
          <ul>
            <li>
              Static Websites – Simple websites with fixed content e.g.,
              portfolios, company profiles.
            </li>
            <li>
              Dynamic Websites – Websites with interactive features e.g., blogs,
              news sites.
            </li>
            <li>
              Full-Stack Development – End-to-end development, including
              frontend and backend.
            </li>
          </ul>
        </MotionCard>

        <MotionCard>
          <h1>Web Application Development</h1>
          <ul>
            <li>
              Single Page Applications – Websites that load content dynamically
              without refreshing the page.
            </li>
            <li>
              Progressive Web Applications – Websites that provide an app-like
              experience.
            </li>
            <li>
              Web Apps with APIs – Websites that interact with external services
              and APIs.
            </li>
          </ul>
        </MotionCard>

        <MotionCard>
          <h1>E-commerce Development</h1>
          <ul>
            <li>
              Custom-built e-commerce solutions with payment gateway
              integration.
            </li>
            <li>
              Online stores using platforms like Shopify, WooCommerce, Magento.
            </li>
          </ul>
        </MotionCard>
      </div>
    </>
  );
};

export default Myservice;
