import React from "react";
import { Tooltip } from "../Shared/Tooltip/tooltip";
import "./eduSkill.style.css";

export const EduSkill = () => {
  const education = [
    {
      id: 1,
      institue: "Vignan's Institute of Information & Technology",
      degree: "B.Tech Undergraduate",
      duration: "2014 - 2018",
    },
    {
      id: 2,
      institue: "Narayana Institution",
      degree: "Intermediate - MPC",
      duration: "2012 - 2014",
    },
    {
      id: 3,
      institue: "Kendriya Vidyalaya",
      degree: "CBSE - High School",
      duration: "till 2012",
    },
  ];

  const skill = [
    { id: 4, skill: "React JS", value: "90" },
    { id: 3, skill: "Next JS", value: "78" },
    { id: 2, skill: "Bootstrap/Material UI", value: "85" },
    { id: 1, skill: "HTML5 & CSS", value: "90" },
  ];
  return (
    <div id="resume" className="main-container flex-div">
      <h1 className="ask mb auto-m" children={"Education & Skills."} />
      <section className="grid-section">
        <div className="education">
          {education.map((list) => {
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
          {skill.map((list) => {
            return (
              <div className="skill-div" key={list.id}>
                <label
                  htmlFor="skill-level"
                  children={list.skill}
                  className="skill-label"
                />
                <Tooltip
                  children={
                    <progress value={list.value} max={100} id="skill-level" />
                  }
                  text={list.value + "%"}
                  newClass={"skill-hover"}
                />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
