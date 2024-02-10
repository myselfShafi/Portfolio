import React from "react";
import { PiDevicesBold, PiTelevisionSimpleBold } from "react-icons/pi";
import { Card } from "../Shared/Card/card";
import "./about.style.css";

export const About = () => {
  const about = [
    {
      id: 1,
      icon: <PiDevicesBold size={"60px"} />,
      title: "Web Design",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur necessitatibus voluptates omnis temporibus laborum eaque at ducimus consequatur.",
    },
    {
      id: 2,
      icon: <PiTelevisionSimpleBold size={"60px"} />,
      title: "App Development",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur necessitatibus voluptates omnis temporibus laborum eaque at ducimus consequatur.",
    },
    { id: 3, icon: "", title: "", info: "" },
  ];

  return (
    <section id="about" className="main-container flex-div">
      <h1 className="ask mb auto-m" children={"What I do?"} />
      <div className="about-container">
        {about.map((data) => {
          return (
            <div key={data.id}>
              <Card icon={data.icon} title={data.title} info={data.info} />
            </div>
          );
        })}
      </div>
    </section>
  );
};
