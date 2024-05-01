import React from "react";
import Mindes from "../assets/MindesWeb.png";
import upz from "../assets/upz-ug.png"
import tokokami from "../assets/toko-kami.png"

const dataProjects = [
  {
    img: Mindes,
    title: "Mindes Website",
    desc: "Mindes adalah website Administrasi Desa Digital yang dikembangkan untuk memudahkan masyarakat dalam ber administrasi",
  },
  {
    img: upz,
    title: "UPZ UG",
    desc: "Website Lembaga otonom Universitas Gunadarma yang dibentuk dalam rangka mengumpulkan dan menyalurkan zakat, infaq dan sedekah.",
  },
  {
    img: tokokami,
    title: "Toko Kami",
    desc: "Toko kami destinasi belanja online yang memadukan teknologi dan fashion untuk memenuhi kebutuhan pria dan wanita modern.",
  },
];

const CardProjects = () => {
  return (
    <section className="flex justify-center items-center">
      <div className=" container grid grid-cols-1 xl:grid-cols-2 mx-auto xl:mx-64 justify-center gap-10  p-8 items-center">
        {dataProjects.map((project, index) => (
          <div key={index} className="bg-white w-[270px] md:w-[600px] mx-auto lg
   rounded-lg border hover:scale-105 hover:shadow-lg transition-all ">
            <div className="flex flex-col text-start p-2 ">
              <img
                className="w-[500px] h-full object-contain mx-auto rounded-md"
                src={project.img}
                alt=""
              />
              <div className="md:mx-12">
                <h1 className="text-md">{project.title}</h1>
              <h3 className="text-sm text-gray-400 truncate">{project.desc}</h3>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardProjects;
