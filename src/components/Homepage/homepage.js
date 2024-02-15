import React from "react";
import { FaDownload } from "react-icons/fa6";
import { MainContainer } from "../Common/Main-container/MainContainer";
import { Button } from "../Shared/Button/button";
import "./homepage.style.css";

const description = ` I specialize in translating designs into responsive, user-friendly websites. Let's collaborate and turn your digital vision into reality!`;

export const Homepage = () => {
  const titles = ["Frontend Developer", "Web Designer", "Coder"];

  return (
    <MainContainer className="homepage" noBorder={true}>
      <header className="container ">
        <h2 className="header v-animate">
          Oh, hello there!
          <span children={" 👋"} className="wave" />
        </h2>
        <h1 className="name v-animate cap-bold">
          I'm <span children={"Shafi"} />
        </h1>
        <div className="title-div">
          {titles.map((tag, index) => {
            return <h2 key={index} children={tag} className={"title"} />;
          })}
        </div>
        <p children={description} className="para v-animate" />
        <Button
          children={"Download CV"}
          icon={<FaDownload />}
          onClick={() => alert("afgs")}
          className={"cv v-animate"}
        />
      </header>
      <div className="wave-bg" />
    </MainContainer>
  );
};
