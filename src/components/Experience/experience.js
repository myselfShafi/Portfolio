import React from "react";
import { MainContainer } from "../Common/Main-container/MainContainer";
import "./experience.style.css";

export const Experience = () => {
  const experience = [
    {
      id: 1,
      position: "Technical Support Associate",
      duration: "Dec 2020 - Apr 2022",
      status: "Full Time",
      companyName: "Ttec",
      workInfo:
        "Worked for Ebay Inc. as a Technical specialist and Customer support.",
    },
    {
      id: 2,
      position: "Frontend Developer",
      duration: "May 2022 - May 2023",
      status: "Part Time",
      companyName: "Beaver software IT services Ltd.",
      workInfo:
        "Designing Android mobile app using React Native framework & Typescript.",
    },
    {
      id: 3,
      position: "Frontend Developer",
      duration: "May 2023 - Aug 2023",
      status: "Part Time",
      companyName: "innData Analytics Private Limited",
      workInfo:
        "Focused on creating user-friendly web interfaces designed specifically for healthcare solutions. Specializing in layout design with MUI and Next.js to seamlessly integrate their functionalities. Collaborated with an accomplished team to work on API integration & Deployment.",
    },
    {
      id: 4,
      position: "Software Developer",
      duration: "Sept 2023 - Present",
      status: "Full Time",
      companyName: "Sparrowhawk Systems",
      workInfo:
        "Integrating TRPC and Prisma in a Next.js environment, and actively gaining hands-on experience by creating and modifying Prisma models. Additionally, collaborating on the modification and expansion of the existing frontend ( using React, Next.js and MaterialUI), incorporating new features as required.",
    },
  ];

  return (
    <MainContainer id="resume" className="flex-div">
      <h1 className="ask mb auto-m" children={"Experience."} />
      {experience.reverse().map((data, index) => {
        return (
          <div key={data.id}>
            <section className="exp-detail">
              <div className="company">
                <h1 className="position" children={data.position} />
                <p className="" children={data.duration} />
                <div children={data.status} className="status" />
                {experience.length - 1 !== index && <div className="stepper" />}
              </div>
              <div className="company">
                <h1 className="position" children={data.companyName} />
                <p className="exp-para" children={data.workInfo} />
              </div>
            </section>
          </div>
        );
      })}
    </MainContainer>
  );
};
