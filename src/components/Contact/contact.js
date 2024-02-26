import React from "react";
import { BsMailbox2Flag } from "react-icons/bs";
import { CiMobile3 } from "react-icons/ci";
import { GrSend } from "react-icons/gr";
import { IoMailOpenOutline } from "react-icons/io5";
import data from "../../content/data.json";
import useIntersectObserver from "../../hooks/useIntersectObserver";
import { MainContainer } from "../Common/Main-container/MainContainer";
import { Button } from "../Shared/Button/button";
import "./contact.style.css";

export const Contact = () => {
  useIntersectObserver("contact-details", "h-animate");
  useIntersectObserver("contact-form", "h-animate");

  const contacts = [
    {
      id: 1,
      icon: <BsMailbox2Flag size={"25px"} />,
      info: data.bio.address2,
    },
    {
      id: 2,
      icon: <IoMailOpenOutline size={"25px"} />,
      info: data.bio.mail,
    },
    {
      id: 3,
      icon: <CiMobile3 size={"25px"} />,
      info: data.bio.mob,
    },
  ];
  return (
    <MainContainer id="contact-me" className="flex-div" noBorder={true}>
      <h1
        className="connect auto-m"
        children="Let's connect & share our stories."
      />
      <h1 className="ask mb auto-m touch" children={"Get in touch!"} />

      <section className="contact-section">
        <div className="contact-details">
          <p className="auto-m tag">
            Open to freelancing opportunities for the right project. Feel free
            to reach out and start a conversation.
          </p>
          {contacts.map((list) => {
            return (
              <div className="contact-info" key={list.id}>
                <div className="outline" children={list.icon} />
                <h3 children={list.info} className="contact-para" />
              </div>
            );
          })}
        </div>
        <div className="contact-form">
          <h1 children={"What's on your Mind?"} />
          <form>
            <input type="text" id="name" placeholder="Full Name" />
            <input type="email" id="email" placeholder="Email" />
            <input type="text" id="subject" placeholder="Subject" />
            <textarea
              rows={4}
              type="text"
              id="comment"
              maxLength={300}
              placeholder="Type Comment"
            />
            <Button
              children={"Share Your Thoughts"}
              icon={<GrSend />}
              onClick={() => alert("sent!")}
            />
          </form>
        </div>
      </section>
    </MainContainer>
  );
};
