import React from "react";
import { assets } from "../assets/assets";
import my_work_data from "../assets/my_work_data";

const MyWork = () => {
  return (
    <div
      id="portfolio"
      className="flex flex-col items-center justify-between gap-20 mx-5 sm:mx-10 md:mx-20 my-20 sm:my-24 lg:my-40"
    >
      {/* Title Section */}
      <div className="relative text-center">
        <h1 className="text-5xl md:text-6xl font-bold">My Latest Works</h1>
        <img
          className="absolute bottom-0 right-0 -z-10 w-28 sm:w-44 md:w-64"
          src={assets.theme_pattern}
          alt="Decorative Pattern"
        />
      </div>

      {/* Gallery Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 w-full max-w-6xl">
        {my_work_data.map((work, index) => (
          <a
            key={index}
            href={work.w_link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group hover:scale-105 transition-all duration-300 cursor-pointer rounded-xl overflow-hidden shadow-[0_0_20px_5px_#d4af37] shadow-[#d4af37]/50"
          >
            <img
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:opacity-80"
              src={work.w_image}
              alt={work.w_name}
            />

            {/* Hover Effect */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
            <div className="absolute bottom-4 left-4 text-white font-semibold text-lg sm:text-xl z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3>Project {work.w_no}</h3>
              <p className="text-sm">{work.w_name}</p>
            </div>
          </a>
        ))}
      </div>

      {/* Show More Button */}
      <button className="flex items-center gap-3 rounded-full border-2 border-white px-6 py-3 text-lg sm:text-xl font-medium cursor-pointer hover:scale-110 hover:bg-gradient-to-r from-blue-500 to-purple-600 hover:text-white transition-all duration-500">
        <span>Show More</span>
        <img className="w-6 h-6" src={assets.arrow_icon} alt="Arrow Icon" />
      </button>
    </div>
  );
};

export default MyWork;
