import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col items-center gap-5">
      <img
        className="w-32 h-32 rounded-full object-cover mt-[150px]"
        src={assets.josi1}
        alt="Yosef Dagne"
      />
      <h1 className="text-4xl font-bold">
        <span className="bg-gradient-to-r from-purple-600 to-orange-400 text-transparent bg-clip-text">
          I'm Yosef Dagne
        </span>
        , a Fullstack Web Developer
      </h1>
      <p className="text-lg text-center leading-normal">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      <div className="flex gap-5 mt-5">
        <div className="px-6 py-3 bg-gradient-to-r from-orange-400 to-purple-600 text-white rounded-[50px] cursor-pointer hover:scale-110 transition-transform duration-300 hover:border-white hover:border-2">
          Connect with Me
        </div>
        <div className="px-6 py-3 bg-gradient-to-r  from-blue-500 to-green-500 text-white rounded-[50px] cursor-pointer hover:scale-110 transition-transform duration-300 hover:border-white hover:border-2">
          My Resume
        </div>
      </div>
    </div>
  );
};

export default Hero;
