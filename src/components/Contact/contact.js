import React from "react";
import { BsMailbox2Flag } from "react-icons/bs";
import { CiMobile3 } from "react-icons/ci";
import { GrSend } from "react-icons/gr";
import { IoMailOpenOutline } from "react-icons/io5";
import { Button } from "../Shared/Button/button";
import "./contact.style.css";

export const Contact = () => {
  const contacts = [
    {
      id: 1,
      icon: <BsMailbox2Flag size={"30px"} />,
      info: "Railway New Colony, Visakhapatnam, AndhraPradesh 530016",
    },
    {
      id: 2,
      icon: <IoMailOpenOutline size={"30px"} />,
      info: "iamshafi25@gmail.com",
    },
    {
      id: 3,
      icon: <CiMobile3 size={"30px"} />,
      info: "+91 9666 370 688",
    },
  ];
  return (
    <div id="contact-me" className="main-container flex-div">
      <h1
        className="connect auto-m"
        children="Let's connect and share our stories."
      />
      <h1 className="ask touch auto-m" children={"Get in touch!"} />

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
    </div>
  );
};
