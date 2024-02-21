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
  const icons = [
    {
      id: 1,
      icon: <IoHomeOutline className={`sbar-icon`} size={"40px"} />,
      text: "Home",
      href: "#home",
    },
    {
      id: 2,
      icon: <GoPerson className={`sbar-icon`} size={"40px"} />,
      text: "About",
      href: "#about",
    },
    {
      id: 3,
      icon: <IoMdPaper className={`sbar-icon`} size={"40px"} />,
      text: "Resume",
      href: "#resume",
    },
    {
      id: 4,
      icon: <LiaSuitcaseSolid className={`sbar-icon`} size={"40px"} />,
      text: "Work",
      href: "#work",
    },
    {
      id: 5,
      icon: <PiPhoneOutgoing className={`sbar-icon`} size={"40px"} />,
      text: "Contact",
      href: "#contact-me",
    },
  ];

  const themes = [
    { id: 1, class: "light", icon: <ImSun size={"20px"} /> },
    { id: 2, class: "dark", icon: <BsMoonStarsFill size={"20px"} /> },
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
        <div className="logo-img">
          {themes.map((value) => {
            return (
              <button
                key={value.id}
                type="button"
                className={`theme-mode ${theme === value.class && "active"}`}
                onClick={() => toggleTheme(value.class)}
                children={value.icon}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
