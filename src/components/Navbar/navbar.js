import React from "react";
import { GiAsianLantern } from "react-icons/gi";
import "./navbar.style.css";

const Navbar = () => {
  return (
    <nav className="nav-body">
      <h3 children={"+ 91 9666 370 688"} className="head-tag" />
      <GiAsianLantern size={"30px"} className="lantern" />
      <h3 children={"iamshafi25@gmail.com"} className="head-tag" />
    </nav>
  );
};

export default Navbar;
