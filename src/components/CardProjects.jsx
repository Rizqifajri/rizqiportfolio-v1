import React from "react";
import Mindes from "../assets/MindesWeb.png";

const dataProjects = [
  {
    img: Mindes,
    title: "Mindes Website",
    desc: "Mindes adalah website Administrasi Desa Digital yang dikembangkan untuk memudahkan masyarakat dalam ber administrasi",
  },
  {
    img: Mindes,
    title: "Mindes Website",
    desc: "Mindes adalah website Administrasi Desa Digital yang dikembangkan untuk memudahkan masyarakat dalam ber administrasi",
  },
  {
    img: Mindes,
    title: "Mindes Website",
    desc: "Mindes adalah website Administrasi Desa Digital yang dikembangkan untuk memudahkan masyarakat dalam ber administrasi",
  },
  {
    img: Mindes,
    title: "Mindes Website",
    desc: "Mindes adalah website Administrasi Desa Digital yang dikembangkan untuk memudahkan masyarakat dalam ber administrasi",
  },
];

const CardProjects = () => {
  return (
    <section className="flex justify-center items-center">
      <div className=" container grid grid-cols-2 justify-center gap-10 p-8 items-center">
        {dataProjects.map((project, index) => (
          <div key={index} className="bg-white w-[600px] mx-auto rounded-lg border-2 ">
            <div className="flex flex-col text-start p-2">
              <img
                className="w-[500px] h-full object-contain mx-auto"
                src={project.img}
                alt=""
              />
              <div className="mx-12">
                <h1 className="text-2xl">{project.title}</h1>
              <h3 className="text-sm text-gray-400">{project.desc}</h3>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardProjects;
