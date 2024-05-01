import React, { useRef } from "react";
import {
  FaCss3,
  FaHtml5,
  FaReact,
  FaCss3Alt,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import {
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoPostgresql,
} from "react-icons/bi";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiPostman,
  SiPython,
  SiBlender,
} from "react-icons/si";
import { motion, useInView } from "framer-motion";
import { fromLeft } from "../libs/variants";
import { fromRight } from "../libs/variants";
import { fadeIn } from "../libs/variants";
import Motion from "./Motion";
import Title from "./Title";
import Ballblur from "../assets/sprites/Ballblur";

const TechStack = () => {
  const icons = [
    { icon: <FaHtml5 size={80} />, label: "HTML" },
    { icon: <FaCss3Alt size={80} />, label: "CSS" },
    { icon: <BiLogoJavascript size={80} />, label: "Javascript" },
    { icon: <BiLogoTypescript size={80} />, label: "Typescript " },
    { icon: <FaReact size={80} />, label: "React" },
    { icon: <SiNextdotjs size={80} />, label: "Next " },
    { icon: <SiTailwindcss size={80} />, label: "Tailwind" },
    { icon: <FaGitAlt size={80} />, label: "Git " },
    { icon: <SiPostman size={80} />, label: "Postman " },
    { icon: <BiLogoPostgresql size={80} />, label: "Postgresql " },
    { icon: <SiPython size={80} />, label: "Python " },
    { icon: <FaFigma size={80} />, label: "Figma " },
    { icon: <SiBlender size={80} />, label: "Blender" },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });

  return (
    <div>
      <article>
        <Title title='Tech Stack' subtitle='Technology' />
        <div className='grid grid-cols-3 sm:grid-cols-5 justify-center m-5 md:gap-10 sm:flex-row items-center mx-auto w-fit     '>
          {icons.map((item, index) => (
            <Motion variants={fadeIn} custom={index}>
              <div className='mx-5' key={index}>
                {item.icon}
                <p className='text-center text-sm '>{item.label}</p>
              </div>
            </Motion>
          ))}
        </div>
        
      </article>
    </div>
  );
};

export default TechStack;
