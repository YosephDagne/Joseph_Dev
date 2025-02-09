import React from "react";
import { assets } from "../assets/assets";
import my_work_data from "../assets/my_work_data";

const MyWork = () => {
  return (
    <div className="">
      <div className="">
        <h1>My Latest Works</h1>
        <img src={assets.theme_pattern} alt="" />
      </div>
      <div className="">
        {my_work_data.map((work, index) => { 
          return (
            <img key={index} src={work.w_image} alt="" />
          )
        })}
      </div>
    </div>
  );
};

export default MyWork;
