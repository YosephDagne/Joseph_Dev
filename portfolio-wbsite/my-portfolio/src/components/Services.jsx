import React from "react";
import { assets } from "../assets/assets";
import Services_Data from "../assets/services_data";

const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-16 px-6 md:px-20 my-24">
      {/* Title Section */}
      <div className="relative text-center">
        <h1 className="text-6xl md:text-7xl font-bold">My Services</h1>
        <img
          className="absolute bottom-0 right-0 -z-10 w-52 md:w-72"
          src={assets.theme_pattern}
          alt="Decorative Pattern"
        />
      </div>

      {/* Services List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
        {Services_Data.map((service, index) => (
          <div
            key={index}
            className="flex flex-col justify-center gap-6 p-10 rounded-2xl border-2 border-[#d4af37] hover:scale-105 transition-all duration-300 cursor-pointer hover:bg-gradient-to-r from-gray-800 to-gray-600 text-white shadow-md hover:border-red-600"
          >
            <h3 className="text-3xl font-semibold">{service.s_no}</h3>
            <h2 className="text-4xl font-extrabold bg-gradient-to-r from-purple-700 to-orange-400 text-transparent bg-clip-text">
              {service.s_name}
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              {service.s_desc}
            </p>
            <div className="flex items-center gap-3 mt-4 group">
              <p className="text-lg md:text-xl text-gray-300 transition-all duration-300 group-hover:text-orange-400">
                Read More
              </p>
              <img
                className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-2"
                src={assets.arrow_icon}
                alt="Arrow Icon"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
