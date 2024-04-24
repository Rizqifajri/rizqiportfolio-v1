import React, { useRef } from "react";
import { FaCss3, FaHtml5, FaReact, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { motion, useInView } from "framer-motion";
import { fromLeft } from "../libs/variants";
import { fromRight } from "../libs/variants";
import { fadeIn } from "../libs/variants";
import Motion from "./Motion";

const TechStack = () => {
  const icons = [
    { icon: <FaHtml5 size={80} />, label: "HTML" },
    { icon: <FaCss3Alt size={80} />, label: "CSS" },
    { icon: <IoLogoJavascript size={80} />, label: "Javascript" },
    { icon: <FaReact size={80} />, label: "React JS" },
    { icon: <SiTailwindcss size={80} />, label: "Tailwind" },
    { icon: <FaGitAlt size={80} />, label: "Git " },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });

  return (
    <div>
      <article>
        <p className="text-center text-2xl ">Tech Stack</p>
        <div className="bg-blue-700 h-1 mb-5 w-24 mx-auto rounded-full "></div>
        <div className="grid grid-cols-3 justify-center m-5 gap-5 sm:flex sm:flex-row items-center mx-auto w-fit     ">
          {icons.map((item, index) => (
            <Motion variants={fadeIn} custom={index}>
              <div className="" key={index}>
                {item.icon}
                <p className="text-center ">{item.label}</p>
              </div>
            </Motion>
          ))}
        </div>
      </article>
    </div>
  );
};

export default TechStack;
