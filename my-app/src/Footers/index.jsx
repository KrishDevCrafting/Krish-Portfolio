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
    <footer
      style={{
        backgroundColor: "#282c34",
        color: "white",
        padding: "20px",
      }}
    >
      <div style={{ marginBottom: "20px" }} className="parent-footer">
        <div>
          <p>
            <FontAwesomeIcon icon={faLocationDot} id="location-icon" />
          </p>
          <h1 style={{ fontSize: "18px", margin: "10px 0" }}>Address</h1>
          <p>123 Main Street, City, Country</p>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <p>
            <FontAwesomeIcon icon={faPhoneVolume} id="location-icon" />
          </p>
          <h1 style={{ fontSize: "18px", margin: "10px 0" }}>Let's Talk</h1>
          <p>+123 456 7890</p>
        </div>
        <div>
          <p>
            {" "}
            <FontAwesomeIcon icon={faEnvelope} id="location-icon" />
          </p>
          <h1 style={{ fontSize: "18px", margin: "10px 0" }}>
            Send Us an Email!
          </h1>
          <p>contact@example.com</p>
        </div>
      </div>
    </footer>
  );
}
