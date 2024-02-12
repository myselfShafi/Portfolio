import { useEffect } from "react";
import "./App.css";
import { About } from "./components/About/about";
import { Contact } from "./components/Contact/contact";
import { EduSkill } from "./components/EduSkill/EduSkill";
import { Experience } from "./components/Experience/experience";
import { Footer } from "./components/Footer/footer";
import { Homepage } from "./components/Homepage/homepage";
import Navbar from "./components/Navbar/navbar";
import Sidebar from "./components/Sidebar/sidebar";

import { useTheme } from "./contexts/themeContext";

function App() {
  const { theme } = useTheme();
  console.log(theme);

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  return (
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
  );
}

export default App;
