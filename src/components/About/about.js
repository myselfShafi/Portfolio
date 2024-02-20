import React from "react";
import { GrLocation } from "react-icons/gr";
import { LiaBirthdayCakeSolid, LiaIdCard, LiaMedapps } from "react-icons/lia";
import { PiDevicesLight, PiTelevisionSimpleBold } from "react-icons/pi";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { SocialIcons } from "../../components/Shared/Reused-Icons/Icons";
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

  const personalInfo = [
    {
      id: 1,
      icon: <LiaIdCard size={"30px"} />,
      tag: "Full Name : ",
      details: "Md Shafi",
    },
    {
      id: 2,
      icon: <LiaBirthdayCakeSolid size={"30px"} />,
      tag: "Years Alive : ",
      details: "27",
    },
    {
      id: 3,
      icon: <TbDeviceLandlinePhone size={"30px"} />,
      tag: "Telephone : ",
      details: " +91 9666-370-688",
    },
    {
      id: 4,
      icon: <GrLocation size={"30px"} />,
      tag: "Location : ",
      details: "Andhra Pradesh, India",
    },
    {
      id: 5,
      icon: <GrLocation size={"30px"} />,
      tag: "Interests : ",
      details: "Gaming, Music",
    },
  ];

  const intro =
    "Hello, I'm Shafi, a Software Developer with frontend expertise from India. I develop and craft web elements for clients across different locations. I like work with new people. New people new Experiences.";

  const intro1 =
    "Fluent in JavaScript libraries such as React.js & Next.js, popular frameworks including Material-UI & Bootstrap, and Redux for state management. Proficient in core web technologies, including JavaScript, HTML5, CSS, and DOM.";

  return (
    <MainContainer id="about">
      <div className="flex-div m-b">
        <h1 className="ask mb auto-m" children={"About Me"} />
        <section className="bio-container">
          <div className="info-div">
            <ul>
              {personalInfo.map((data) => (
                <li className="intro details" key={data.id}>
                  <span children={data.icon} />
                  <span children={data.tag} />
                  <span children={data.details} />
                </li>
              ))}
            </ul>
            <div className="social-div">
              {SocialIcons.map((icon) => (
                <a
                  className="social-icon"
                  key={icon.id}
                  href={icon.href}
                  rel="noreferrer"
                  target="_blank"
                  children={icon.icon}
                />
              ))}
            </div>
          </div>
          <div className="content-div">
            <p className="intro mb" children={intro} />
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
