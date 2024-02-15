import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./footer.style.css";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="icon-div">
        <FaXTwitter className="social-icon" size={"45px"} />
        <FaInstagram className="social-icon" size={"45px"} />
        <FaLinkedin className="social-icon" size={"45px"} />
        <FaGithub className="social-icon" size={"45px"} />
      </div>
      <p className="cpyryt">
        Copyright &#169; Shafi 2022 - {year}. All Rights Reserved.
      </p>
    </footer>
  );
};
