import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useTheme } from "../../contexts/themeContext";
import "./navbar.style.css";

const Navbar = () => {
  const { toggleTheme } = useTheme();

  const buttons = [
    { id: 1, class: "light" },
    { id: 2, class: "dark" },
  ];
  return (
    <nav className="nav-body">
      <div className="head-div">
        <h3 children={"iamshafi25@gmail.com"} className="head-tag" />
        <div className="icon-div">
          <FaXTwitter className="social-icon" size={"60px"} />
          <FaInstagram className="social-icon" size={"60px"} />
          <FaLinkedin className="social-icon" size={"60px"} />
          <FaGithub className="social-icon" size={"60px"} />
        </div>
      </div>
      <div>
        {buttons.map((value) => {
          return (
            <button
              key={value.id}
              type="button"
              className={`theme ${value.class}`}
              onClick={() => toggleTheme(value.class)}
            />
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
