import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <FontAwesomeIcon icon={faLocationDot} className="icon" />
          <h3>Address</h3>
          <p>123 Main Street, City, Country</p>
        </div>

        <div className="footer-section">
          <FontAwesomeIcon icon={faPhoneVolume} className="icon" />
          <h3>Let's Talk</h3>
          <p>+123 456 7890</p>
        </div>

        <div className="footer-section">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          <h3>Send Us an Email!</h3>
          <p>contact@example.com</p>
        </div>
      </div>
      <hr />
    </footer>
  );
}
