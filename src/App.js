import React, { useEffect } from "react";
import "./App.css";
import { About } from "./components/About/about";
import { Contact } from "./components/Contact/contact";
import { EduSkill } from "./components/EduSkill/EduSkill";
import { Experience } from "./components/Experience/experience";
import { Footer } from "./components/Footer/footer";
import { Homepage } from "./components/Homepage/homepage";
import Navbar from "./components/Navbar/navbar";
import { Preloader } from "./components/Preloader/preloader";
import Sidebar from "./components/Sidebar/sidebar";

function App() {
  useEffect(() => {
    var loader = document.querySelector(".preloader");
    var content = document.querySelector(".App");

    if (loader && content) {
      window.addEventListener("load", () => {
        setTimeout(() => {
          /////----temp timeout ----/////
          loader.classList.add("preloader-hidden");
          content.classList.add("App-visible");
        }, 2000);
      });
    }
  }, []);

  return (
    <React.Fragment>
      <Preloader />
      <div id="home" className={`App`}>
        <Navbar />
        <Sidebar />
        <Homepage />
        <About />
        <Experience />
        <EduSkill />
        <Contact />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
