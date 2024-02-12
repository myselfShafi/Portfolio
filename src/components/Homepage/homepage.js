import React from "react";
import { FaDownload } from "react-icons/fa6";
import profileDp from "../../assests/images/dp.png";
import { MainContainer } from "../Common/Main-container/MainContainer";
import { Button } from "../Shared/Button/button";
import "./homepage.style.css";

const description = ` I specialize in translating designs into responsive, user-friendly websites. Let's collaborate and turn your digital vision into reality!`;

export const Homepage = () => {
  return (
    <MainContainer className="homepage">
      <header className="container">
        <h2 className="header">
          Oh, hello there!
          <span children={" 👋"} className="wave" />
        </h2>
        <h1 className="name cap-bold">
          I'm <span children={"Shafi"} className="white" />
        </h1>
        <h2 children="Frontend Developer" className="title cap-bold" />
        <p children={description} className="para" />
        <Button
          children={"Download CV"}
          icon={<FaDownload />}
          onClick={() => alert("afgs")}
          className={"cv"}
        />
      </header>
      <img alt="profile-img" src={profileDp} className="dp-img" />
    </MainContainer>
  );
};
