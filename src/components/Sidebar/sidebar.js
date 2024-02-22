import React from "react";
import { BsMoonStarsFill } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import { ImSun } from "react-icons/im";
import { IoMdPaper } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { LiaSuitcaseSolid } from "react-icons/lia";
import { PiPhoneOutgoing } from "react-icons/pi";
import { useTheme } from "../../contexts/themeContext";
import { Tooltip } from "../Shared/Tooltip/tooltip";
import "./sidebar.style.css";

const Sidebar = () => {
  const { theme, toggleTheme } = useTheme();

  const abc = () => {
    let current = document.getElementById("toggle-theme");

    current.addEventListener("change", (event) => {
      if (event.target.checked) {
        toggleTheme("light");
      } else {
        toggleTheme("dark");
      }
    });
  };

  const icons = [
    {
      id: 1,
      icon: <IoHomeOutline className={`sbar-icon`} size={"30px"} />,
      text: "Home",
      href: "#home",
    },
    {
      id: 2,
      icon: <GoPerson className={`sbar-icon`} size={"30px"} />,
      text: "About",
      href: "#about",
    },
    {
      id: 3,
      icon: <IoMdPaper className={`sbar-icon`} size={"30px"} />,
      text: "Resume",
      href: "#resume",
    },
    {
      id: 4,
      icon: <LiaSuitcaseSolid className={`sbar-icon`} size={"30px"} />,
      text: "Work",
      href: "#work",
    },
    {
      id: 5,
      icon: <PiPhoneOutgoing className={`sbar-icon`} size={"30px"} />,
      text: "Contact",
      href: "#contact-me",
    },
  ];

  return (
    <>
      <span className="logo-small" children={"Sh."} />
      <div className={`sbar-body`}>
        <div className="logo-img">
          <h1>
            Dev.
            <span children={"Sh."} />
          </h1>
        </div>
        <div className="sbar-icon-div">
          {icons.map((item) => {
            return (
              <div key={item.id}>
                <Tooltip
                  children={item.icon}
                  text={item.text}
                  href={item.href}
                />
              </div>
            );
          })}
        </div>

        <input id="toggle-theme" type="checkbox" />
        <label htmlFor="toggle-theme" className="toggle-btn" onClick={abc}>
          <BsMoonStarsFill size={"20px"} />
          <ImSun size={"20px"} />
        </label>
      </div>
    </>
  );
};

export default Sidebar;
