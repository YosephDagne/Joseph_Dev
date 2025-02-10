import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-20 mx-20 my-[170px]">
      {/* Title */}
      <div className="relative">
        <h1 className="px-[30px] py-0 text-[80px] font-semibold">About Me</h1>
        <img
          className="absolute bottom-0 right-0 z-[-1] w-72"
          src={assets.theme_pattern}
          alt="Decorative Pattern"
        />
      </div>

      {/* Main Content */}
      <div className="flex gap-20">
        {/* Left */}
        <div>
          <img className="rounded-3xl" src={assets.jo2} alt="My Profile" />
        </div>

        {/* Right */}
        <div className="flex flex-col gap-20">
          {/* Description */}
          <div className="flex flex-col gap-5 text-base font-normal">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              saepe quas minima itaque sequi similique sed dolore labore esse
              reiciendis officia rerum, maxime quos voluptatum dolorum velit
              laboriosam exercitationem temporibus!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
              quaerat temporibus consectetur et ut nihil in illum distinctio,
              praesentium dolor, quam iste id tempora eveniet eius odit,
              corporis earum! Qui.
            </p>
          </div>

          {/* Skills Section */}
          <div className="flex flex-col gap-5">
            <div className="flex gap-10 items-center hover:scale-110 transition-all duration-500">
              <p className="min-w-[150px] text-2xl font-medium">HTML</p>
              <hr className="w-[90%] border-0 h-2 rounded-[50px] bg-gradient-to-r from-orange-700 to-purple-500 " />
            </div>
            <div className="flex gap-10 items-center hover:scale-110 transition-all duration-500">
              <p className="min-w-[150px] text-2xl font-medium">CSS</p>
              <hr className="w-[75%] border-0 h-2 rounded-[50px] bg-gradient-to-r from-orange-700 to-purple-500 " />
            </div>
            <div className="flex gap-10 items-center hover:scale-110 transition-all duration-500">
              <p className="min-w-[150px] text-2xl font-medium">React JS</p>
              <hr className="w-[80%] border-0 h-2 rounded-[50px] bg-gradient-to-r from-orange-700 to-purple-500  " />
            </div>
            <div className="flex gap-10 items-center hover:scale-110 transition-all duration-500">
              <p className="min-w-[150px] text-2xl font-medium">JavaScript</p>
              <hr className="w-[70%] border-0 h-2 rounded-[50px] bg-gradient-to-r from-orange-700 to-purple-500" />
            </div>
            <div className="flex gap-10 items-center hover:scale-110 transition-all duration-500">
              <p className="min-w-[150px] text-2xl font-medium">Node JS</p>
              <hr className="w-[85%] border-0 h-2 rounded-[50px] bg-gradient-to-r from-orange-700 to-purple-500 " />
            </div>
          </div>
        </div>
      </div>

      {/* Experience Stats */}
      <div className="flex w-[100%] justify-around mb-20 ">
        <div className="flex flex-col items-center gap-2 hover:scale-125 transition-all duration-500">
          <h1 className="text-6xl bg-gradient-to-r from-purple-800 to-orange-500 bg-clip-text text-transparent">
            2+
          </h1>
          <p className="text-2xl font-medium">Years of Experience</p>
        </div>
        <hr />
        <div className="flex flex-col items-center gap-2 hover:scale-125 transition-all duration-500">
          <h1 className="text-6xl bg-gradient-to-r from-purple-800 to-orange-500 bg-clip-text text-transparent">
            10+
          </h1>
          <p className="text-2xl font-medium">Projects Completed</p>
        </div>
        <hr />
        <div className="flex flex-col items-center gap-2 hover:scale-125 transition-all duration-500">
          <h1 className="text-6xl bg-gradient-to-r from-purple-800 to-orange-500 bg-clip-text text-transparent">
            20+
          </h1>
          <p className="text-2xl font-medium">Happy Clients</p>
        </div>
      </div>
    </div>
  );
};

export default About;
