import React from "react";
import { assets } from "../assets/assets";
import my_work_data from "../assets/my_work_data";

const MyWork = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-20 mx-20 my-[170px] ">
      <div className="relative ">
        <h1 className="text-5xl font-semibold">My Latest Works</h1>
        <img
          className="absolute bottom-[-10px] right-[-20px] z-[-1] w-32"
          src={assets.theme_pattern}
          alt=""
        />
      </div>
      <div className="grid grid-cols-3 gap-10">
        {my_work_data.map((work, index) => {
          return (
            <img
              className="[box-sizing:border-box] w-[419px] h-[280px] border-2 border-[orange] cursor-pointer transition-transform duration-500 hover:scale-110 hover:border-2 hover:border-red-700  hover:bg-fuchsia-950"
              key={index}
              src={work.w_image}
              alt=""
            />
          );
        })}
      </div>
      <div className="flex items-center gap-3.5 rounded-[50px] border-2 border-white px-4 py-5 text-2xl font-medium mb-20 transition-all duration-500 cursor-pointer hover:scale-110 hover:bg-blue-500 hover:text-white hover:gap-4">
        <p>Show More</p>
        <img src={assets.arrow_icon} alt="Arrow Icon" />
      </div>
    </div>
  );
};

export default MyWork;
