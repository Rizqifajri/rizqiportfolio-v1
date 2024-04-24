import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Profile from "./components/Profile";
import AboutMe from "./components/AboutMe";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Profile />
      <AboutMe />
      <TechStack />
      <Footer/>
    </>
  );
}

export default App;
