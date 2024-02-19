import React from "react";
import { LiaMedapps } from "react-icons/lia";
import { PiDevicesLight, PiTelevisionSimpleBold } from "react-icons/pi";
import useIntersectObserver from "../../hooks/useIntersectObserver";
import { MainContainer } from "../Common/Main-container/MainContainer";
import { Card } from "../Shared/Card/card";
import "./about.style.css";

export const About = () => {
  useIntersectObserver("abt-div", "h-animate");
  const about = [
    {
      id: 1,
      icon: <PiDevicesLight size={"3.5rem"} />,
      title: "Web Design",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur necessitatibus voluptates omnis temporibus laborum eaque at ducimus consequatur.",
    },
    {
      id: 2,
      icon: <LiaMedapps size={"3.5rem"} />,
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

  const intro =
    "Hello, I'm Shafi, a Software Developer with frontend expertise from India. I develop and craft web elements for clients across different locations. I like work with new people. New people new Experiences.";

  const intro1 =
    "Fluent in JavaScript libraries such as React.js & Next.js, popular frameworks including Material-UI & Bootstrap, and Redux for state management. Proficient in core web technologies, including JavaScript, HTML5, CSS, and DOM.";

  return (
    <MainContainer id="about">
      <div className="flex-div">
        <h1 className="ask mb auto-m" children={"Biography."} />
        <section className="bio-container">
          <div className="info-div">
            <p>
              Name: <span children={"Md Shafi"} />
            </p>
            <p>
              Name: <span children={"Md Shafi"} />
            </p>
            <p>
              Name: <span children={"Md Shafi"} />
            </p>
            <p>
              Name: <span children={"Md Shafi"} />
            </p>
          </div>
          <div className="content-div">
            <p className="intro" children={intro} />
            <p className="intro" children={intro1} />
          </div>
        </section>
      </div>

      <div className="flex-div">
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
      </div>
    </MainContainer>
  );
};
