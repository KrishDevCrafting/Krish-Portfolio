import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#282c34",
        color: "white",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <div style={{ marginBottom: "20px" }} className="parent-footer">
        <div>
          <h1 style={{ fontSize: "18px", margin: "10px 0" }}>Address</h1>
          <p>123 Main Street, City, Country</p>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <h1 style={{ fontSize: "18px", margin: "10px 0" }}>Let's Talk</h1>
          <p>+123 456 7890</p>
        </div>
        <div>
          <h1 style={{ fontSize: "18px", margin: "10px 0" }}>
            Send Us an Email!
          </h1>
          <p>contact@example.com</p>
        </div>
      </div>
    </footer>
  );
}
