import React from "react";
import "./footer.css";

export default function Footer({footerTitle, footerDesc}) {
  return (
    <footer className="footer" id="footer">
      <div className="footer-top">
        <div className="footer-logo">{footerTitle}</div>

        <p>
          {footerDesc}
        </p>

        <div className="socials">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-linkedin"></i>
        </div>
      </div>

      <div className="footer-bottom">
        <p> {new Date().getFullYear()}© SysDevCode. All rights reserved.</p>
      </div>
    </footer>
  );
}
