import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-top">
        <div className="footer-logo">SysDevCode</div>

        <p>
          Transforming ideas into digital excellence through innovative
          solutions, strategic design, and cutting-edge development.
        </p>

        <div className="socials">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-linkedin"></i>
        </div>
      </div>

      <div className="footer-bottom">
        <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-linkedin"></i>
        <p>© 2024 Digimax. All rights reserved.</p>
      </div>
    </footer>
  );
}
