import React from "react";
import bootstrap from "../../assests/images/bootstrap.png";
import css from "../../assests/images/css.png";
import html from "../../assests/images/html.png";
import js from "../../assests/images/js.png";
import mui from "../../assests/images/mui.png";
import next from "../../assests/images/nextjs.png";
import prisma from "../../assests/images/prisma.png";
import react from "../../assests/images/react.png";
import redux from "../../assests/images/redux.png";
import trpc from "../../assests/images/trpc.svg";
import data from "../../content/data.json";
import { useCircularProgress } from "../../hooks/circularProgress";
import useIntersectObserver from "../../hooks/useIntersectObserver";
import { MainContainer } from "../Common/Main-container/MainContainer";
import { Tooltip } from "../Shared/Tooltip/tooltip";
import "./eduSkill.style.css";

export const EduSkill = () => {
  useIntersectObserver("edu-div", "v-animate");
  useIntersectObserver("skills", "h-animate");

  const skill = [
    { id: 10, skill: "Prisma", icon: prisma },
    { id: 9, skill: "Trpc", icon: trpc },
    { id: 8, skill: "Redux", icon: redux },
    { id: 7, skill: "Javascript", icon: js },
    { id: 6, skill: "CSS", icon: css },
    { id: 5, skill: "HTML5", icon: html },

    { id: 4, skill: "React JS", value: "90", icon: react },
    { id: 3, skill: "Next JS", value: "78", icon: next },
    { id: 2, skill: "Bootstrap", value: "85", icon: bootstrap },
    { id: 1, skill: "Material UI", value: "90", icon: mui },
  ];

  const skillWithV = skill.filter((item) => item.hasOwnProperty("value"));
  const skillWithoutV = skill.filter((item) => !item.hasOwnProperty("value"));

  useCircularProgress(skillWithV);

  return (
    <MainContainer id="education-skills" className="flex-div">
      <h1 className="ask mb auto-m" children={"Education & Skills."} />
      <section className="grid-section">
        <div className="education">
          {data.education?.map((list) => {
            return (
              <div key={list.id} className="edu-div">
                <h3 className="institution" children={list.institue} />
                <p className="degree" children={list.degree} />
                <p className="timespan" children={list.duration} />
              </div>
            );
          })}
        </div>
        <div className="skills">
          {skillWithV.map((list) => {
            return (
              <div className="flip-container" key={list.id}>
                <div className="flip-div">
                  <div className="front">
                    <img src={list.icon} alt={list.skill} />
                  </div>
                  <div className="back">
                    <p className="value" children={`${list.value}%`} />
                  </div>
                </div>
              </div>
            );
          })}
          <div className="more-skills">
            <p children={"More skills on deck!"} />
            <div className="skill-list">
              <div className="skill-slide">
                {skillWithoutV.map((list) => {
                  return (
                    <div key={list.id}>
                      <Tooltip
                        children={<img src={list.icon} alt={list.skill} />}
                        text={list.skill}
                        newClass={"icon-name"}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="skill-slide">
                {skillWithoutV.map((list) => {
                  return (
                    <div key={list.id}>
                      <Tooltip
                        children={<img src={list.icon} alt={list.skill} />}
                        text={list.skill}
                        newClass={"icon-name"}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainContainer>
  );
};
