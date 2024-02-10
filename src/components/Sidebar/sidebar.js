import React from "react";
import { GoPerson } from "react-icons/go";
import { IoMdPaper } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { LiaSuitcaseSolid } from "react-icons/lia";
import { PiPhoneOutgoing } from "react-icons/pi";
import logo from "../../assests/images/logo.png";
import { Tooltip } from "../Shared/Tooltip/tooltip";
import "./sidebar.style.css";

const Sidebar = () => {
  const icons = [
    {
      id: 1,
      icon: <IoHomeOutline className="sbar-icon" size={"40px"} />,
      text: "Home",
      href: "#home",
    },
    {
      id: 2,
      icon: <GoPerson className="sbar-icon" size={"40px"} />,
      text: "About",
      href: "#about",
    },
    {
      id: 3,
      icon: <IoMdPaper className="sbar-icon" size={"40px"} />,
      text: "Resume",
      href: "#resume",
    },
    {
      id: 4,
      icon: <LiaSuitcaseSolid className="sbar-icon" size={"40px"} />,
      text: "Work",
      href: "#work",
    },
    {
      id: 5,
      icon: <PiPhoneOutgoing className="sbar-icon" size={"40px"} />,
      text: "Contact",
      href: "#contact-me",
    },
  ];
  return (
    <div className="sbar-body">
      <div>
        <img alt="logo" src={logo} className="logo-img" />
      </div>
      <div className="sbar-icon-div">
        {icons.map((item) => {
          return (
            <div key={item.id}>
              <div>
                <Tooltip
                  children={item.icon}
                  text={item.text}
                  href={item.href}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
