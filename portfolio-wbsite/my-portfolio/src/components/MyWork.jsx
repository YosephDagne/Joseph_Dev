import React from "react";
import { assets } from "../assets/assets";
import my_work_data from "../assets/my_work_data";

const MyWork = () => {
  return (
    <div id="work" className="flex flex-col items-center justify-between gap-20 mx-[20px] sm:mx-[40px] md:mx-[80px] my-[80px] sm:my-[100px] lg:my-[170px]">
      {/* Title Section */}
      <div className="relative text-center">
        <h1 className="text-6xl md:text-7xl font-bold">My Latest Works</h1>
        <img
          className="absolute bottom-0 right-0 -z-10 w-32 sm:w-52 md:w-72"
          src={assets.theme_pattern}
          alt="Decorative Pattern"
        />
      </div>

      {/* Gallery Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 w-full max-w-6xl">
        {my_work_data.map((work, index) => (
          <div
            key={index}
            className="relative group hover:scale-105 transition-all duration-300 cursor-pointer rounded-xl overflow-hidden shadow-xl shadow-[#d4af37]/50"
          >
            <img
              className="w-full h-auto max-h-[300px] lg:max-h-[350px] object-contain transform transition-all duration-500 group-hover:scale-110 group-hover:opacity-80"
              src={work.w_image}
              alt={work.w_title}
            />
            {/* Hover Effect */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            <div className="absolute bottom-4 left-4 text-white font-semibold text-xl z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3>{work.w_title}</h3>
              <p className="text-sm">{work.w_desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <div className="flex items-center gap-3 rounded-full border-2 border-white px-6 py-3 text-xl sm:text-2xl font-medium cursor-pointer hover:scale-110 hover:bg-gradient-to-r from-blue-500 to-purple-600 hover:text-white transition-all duration-500">
        <p>Show More</p>
        <img className="w-6 h-6" src={assets.arrow_icon} alt="Arrow Icon" />
      </div>
    </div>
  );
};

export default MyWork;
