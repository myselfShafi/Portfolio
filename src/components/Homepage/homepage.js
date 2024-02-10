import React from "react";
import { FaDownload } from "react-icons/fa6";
import profileDp from "../../assests/images/dp.png";
import { Button } from "../Shared/Button/button";
import "./homepage.style.css";

const description = ` I specialize in translating designs into responsive, user-friendly websites. Let's collaborate and turn your digital vision into reality!`;

export const Homepage = () => {
  return (
    <div className="homepage">
      <header className="container">
        <h1 className="header">
          Oh, hello there!
          <span children={" 👋"} className="wave" />
        </h1>
        <h1 children="I'm Shafi " className="name cap-bold" />
        <h2 children="Frontend Developer" className="title cap-bold" />
        <p children={description} className="para" />
        <Button
          children={"Download CV"}
          icon={<FaDownload />}
          onClick={() => alert("afgs")}
        />
      </header>
      <img alt="profile-img" src={profileDp} className="dp-img" />
    </div>
  );
};
