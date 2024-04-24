import React, { useRef } from "react";
import { fromLeft, fromRight } from "../libs/variants";
import { motion, useInView } from "framer-motion";

const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });

  return (
    <div className="">
      <h2 className="text-center text-4xl  mt-5  font-bold">About Me</h2>
      <div className="bg-gray-600 h-1 mb-5 w-24 mx-auto rounded-full "></div>
      <h3 className="text-center text-gray-400 ">Who am i ?</h3>
      <motion.article
        ref={ref}
        variants={fromLeft}
        animate={isInView ? "animate" : "initial"}
        initial={"initial"}
        className="flex flex-col sm:flex-row justify-center items-center border-2 w-max mx-auto m-10 p-5 rounded-2xl  ">
        <div className="photo-profile w-60 h-60 rounded-full mb-5 "></div>
        <motion.div className="sm:max-w-lg max-w-60 mt-10 sm:ml-10">
          <p className="text-3xl mb-10 font-bold ">Muhammad Rizqi Fajri</p>
          <span className="text-left text-sm">
            <p className="flex ">
              <span className="hidden sm:block ">Education : </span>Gunadarma
              University
            </p>
            <p className="flex ">
              <span className="hidden sm:block">Phone :</span> +62 83894631800{" "}
            </p>
            <p className="flex ">
              <span className="hidden sm:block">Email :</span>{" "}
              rizqifajri51@gmail.com{" "}
            </p>
          </span>
        </motion.div>
      </motion.article>
      <motion.article
        ref={ref}
        variants={fromRight}
        animate={isInView ? "animate" : "initial"}
        initial={"initial"}
        className="flex flex-col justify-center items-center w-auto m-5 p-5 rounded-2xl ">
        <p className="text-lg text-center sm:text-3xl sm:text-left mb-10 font-semibold">
          Hei There 👋! <br /> Im Rizqi Fajri !
        </p>
        <span className="text-justify">
          <p>
            Im from indonesia 😊 you can call me kiki or qiqi | i am a computer
            science student | front end developer
          </p>
          <p className="mt-5">
            and i also enjoy watching anime and K-Drama🎞️, playing game 🕹️ and
            yea ofc write a code 👨‍💻
          </p>
          <p className="text-xl text-center sm:text-3xl sm:text-left mt-10 font-semibold">
            Nice To Meet u!{" "}
          </p>
        </span>
      </motion.article>
    </div>
  );
};

export default AboutMe;
