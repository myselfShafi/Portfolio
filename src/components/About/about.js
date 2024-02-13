import React from "react";
import { PiDevicesBold, PiTelevisionSimpleBold } from "react-icons/pi";
import useIntersectObserver from "../../hooks/useIntersectObserver";
import { MainContainer } from "../Common/Main-container/MainContainer";
import { Card } from "../Shared/Card/card";
import "./about.style.css";

export const About = () => {
  useIntersectObserver("abt-div", "h-animate");
  const about = [
    {
      id: 1,
      icon: <PiDevicesBold size={"3.5rem"} />,
      title: "Web Design",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur necessitatibus voluptates omnis temporibus laborum eaque at ducimus consequatur.",
    },
    {
      id: 2,
      icon: <PiTelevisionSimpleBold size={"3.5rem"} />,
      title: "App Development",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur necessitatibus voluptates omnis temporibus laborum eaque at ducimus consequatur.",
    },
    {
      id: 3,
      icon: <PiTelevisionSimpleBold size={"3.5rem"} />,
      title: "App Development",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur necessitatibus voluptates omnis temporibus laborum eaque at ducimus consequatur.",
    },
  ];

  return (
    <MainContainer id="about" className="flex-div">
      <h1 className="ask mb auto-m" children={"What I do?"} />
      <section className="about-container">
        {about.map((data, index) => {
          return (
            <div
              key={data.id}
              className="abt-div "
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <Card icon={data.icon} title={data.title} info={data.info} />
            </div>
          );
        })}
      </section>
    </MainContainer>
  );
};
