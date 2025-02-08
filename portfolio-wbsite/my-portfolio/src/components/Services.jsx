import React from "react";
import { assets } from "../assets/assets";
import Services_Data from "../assets/services_data";

const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-20 mx-20 my-44">
      {/* Title Section */}
      <div className="relative flex flex-col items-center">
        <h1 className="text-5xl font-semibold">My Services</h1>
        <img
          className="absolute bottom-[-10px] right-[-20px] z-[-1] w-32"
          src={assets.theme_pattern}
          alt="Decorative Pattern"
        />
      </div>

      {/* Services List */}
      <div className=" grid grid-cols-2 gap-10 mb-20">
        {Services_Data.map((service, index) => (
          <div
            key={index}
            className="flex flex-col justify-center gap-[20px] p-[60px] rounded-2xl border-2 transition-all duration-500 cursor-pointer"
          >
            <h3 className="text-3xl font-semibold">{service.s_no}</h3>
            <h2 className="text-4xl font-extrabold bg-gradient-to-r from-purple-700 to-orange-400 text-transparent bg-clip-text">
              {service.s_name}
            </h2>
            <p>{service.s_desc}</p>
            <div>
              <p>Read More</p>
              <img src={assets.arrow_icon} alt="Arrow Icon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
