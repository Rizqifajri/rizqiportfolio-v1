import React, { useEffect } from "react";
import "../App.css";
import gitHub from "../assets/github.png";
import Linkedn from "../assets/linkedin.png";
import Instagram from "../assets/instagram.png";
import { motion } from "framer-motion";
import { fromLeft, fromRight, zoomOut } from "../libs/variants";
import { FaArrowDown } from "react-icons/fa";
import Motion from "./Motion";

const Profile = () => {
  useEffect(() => {}, []);

  return (
    <div className="profile">
      <div className="flex flex-col justify-center items-center h-screen gap-5 relative  ">
        <Motion variants={zoomOut}>
          <div className="photo-profile w-60 h-60 rounded-full "></div>
        </Motion>
        <Motion variants={fromRight} custom={0}>
          <h1 className="text-white text-4xl font-custom">Rizqi Fajri</h1>
        </Motion>
        <Motion variants={fromLeft} custom={1}>
          <p className="text-white">Front end developer</p>
        </Motion>
        <Motion variants={fromRight} custom={2}>
          <p className="text-white">Let's Code! 👨‍💻</p>
        </Motion>
        <Motion variants={fromLeft} custom={3}>
          <ul className="flex gap-2 ">
            <li className="w-12 hover:scale-110 transition-all">
              <a className="" href="https://github.com/Rizqifajri">
                <img className="" src={gitHub} alt="" />
              </a>
            </li>
            <li className="w-12 hover:scale-110 transition-all">
              <a className="text-white" href="https://www.linkedin.com/in/muhammad-rizqi-fajri-0759a222b/">
                <img src={Linkedn} alt="" />
              </a>
            </li>
            <li className="w-12 hover:scale-110 transition-all">
              <a className="text-white" href="https://www.instagram.com/rizqifajriii/">
                <img src={Instagram} alt="" />
              </a>
            </li>
          </ul>
        </Motion>

        <p className="flex items-center gap-5 text-white p-2 rounded-full absolute bottom-0 animate-bounce ">
          Let's Scroll Down <FaArrowDown />
        </p>
      </div>
    </div>
  );
};

export default Profile;
