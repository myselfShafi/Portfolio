import "./projects.style.css";

import React from "react";
import css from "../../assests/images/css.png";
import js from "../../assests/images/js.png";
import mui from "../../assests/images/mui.png";
import next from "../../assests/images/nextjs.png";
import p1 from "../../assests/images/plantopia-1.png";
import p2 from "../../assests/images/plantopia-2.png";
import p3 from "../../assests/images/plantopia-3.png";
import pf1 from "../../assests/images/portfolio-1.png";
import pf2 from "../../assests/images/portfolio-2.png";
import react from "../../assests/images/react.png";
import swiper from "../../assests/images/swiper-logo.svg";
import data from "../../content/data.json";
import useIntersectObserver from "../../hooks/useIntersectObserver";
import { Customcarousel } from "../Common/Custom-carousel/customcarousel";
import { MainContainer } from "../Common/Main-container/MainContainer";
import { Button } from "../Shared/Button/button";

export const Projects = () => {
  useIntersectObserver("context-div", "h-animate");
  useIntersectObserver("img-div", "v-animate");

  const projects = [
    {
      title: "Plantopia",
      text: "A digital e-commerce focused on plants powered by Next.js and customized MaterialUI theming.",
      imgs: [p1, p2, p3],
      url: data.projects_url.plantopia,
      tools: [
        { skill: "Next JS", icon: next },
        { skill: "React JS", icon: react },
        { skill: "Material UI", icon: mui },
        { skill: "Swiper.js", icon: swiper },
        { skill: "Javascript", icon: js },
      ],
    },
    {
      title: "Portfolio",
      text: "Purely React v18 & CSS Portfolio - No Frameworks, No Packages, Just Clean JavaScript Mastery! Including this Custom Carousel.",
      imgs: [pf1, pf2],
      url: data.projects_url.portfolio,
      tools: [
        { skill: "React JS", icon: react },
        { skill: "CSS", icon: css },
        { skill: "Javascript", icon: js },
      ],
    },
  ];
  return (
    <MainContainer id="my-projects" className="flex-div">
      <h1 className="ask mb auto-m" children={"Latest Projects."} />
      <Customcarousel array={projects} indicator={"bullet"}>
        {projects.map((each, idx) => {
          return (
            <div key={idx} style={{ display: "inline-flex" }}>
              <section className="grid-section space">
                <div className="flex-div context-div">
                  <h2 className="project-title" children={each.title} />
                  <h3 className="institution" children={each.text} />
                  <div className="tool-div">
                    {each?.tools.map((tool, id) => {
                      return (
                        <div key={id} className="project-context">
                          <img src={tool.icon} alt={tool.skill} />
                        </div>
                      );
                    })}
                  </div>
                  {each?.url && (
                    <Button
                      redirectURL={each?.url}
                      className={"redirect"}
                      children={"Visit Site"}
                      target="_blank"
                    />
                  )}
                </div>
                <div className="img-div">
                  <Customcarousel array={each.imgs}>
                    {each.imgs?.map((img, idx) => {
                      return (
                        <div key={idx} style={{ display: "inline-flex" }}>
                          <img
                            src={img}
                            alt={`${img}_ss`}
                            style={{ width: "100%", height: "100%" }}
                          />
                        </div>
                      );
                    })}
                  </Customcarousel>
                </div>
              </section>
            </div>
          );
        })}
      </Customcarousel>
    </MainContainer>
  );
};
