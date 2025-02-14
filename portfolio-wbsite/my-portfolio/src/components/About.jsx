import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center gap-16 px-10 md:px-20 my-60"
    >
      {/* Title Section */}
      <div className="relative text-center">
        <h1 className="text-6xl md:text-7xl font-bold">About Me</h1>
        <img
          className="absolute bottom-0 right-0 -z-10 w-52 md:w-72"
          src={assets.theme_pattern}
          alt="Decorative Pattern"
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">
        {/* Left - Profile Image */}
        <div className="flex justify-center">
          <img
            className="w-72 md:w-96 rounded-3xl shadow-lg"
            src={assets.jo2}
            alt="My Profile"
          />
        </div>

        {/* Right - Description & Skills */}
        <div className="flex flex-col gap-10 max-w-2xl">
          {/* Description */}
          <div className="text-gray-300 text-lg leading-relaxed">
            <p>
              I am a passionate full-stack developer with experience in building
              responsive and scalable web applications. I thrive on solving
              complex problems and crafting efficient solutions.
            </p>
            <p>
              My expertise spans front-end and back-end technologies, ensuring
              seamless user experiences and robust system architecture.
            </p>
          </div>

          {/* Skills Section */}
          <div className="flex flex-col gap-4">
            {[
              { skill: "HTML", level: "90%" },
              { skill: "CSS", level: "80%" },
              { skill: "React JS", level: "85%" },
              { skill: "JavaScript", level: "75%" },
              { skill: "Node JS", level: "85%" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-6 group transition-transform duration-300 hover:scale-105"
              >
                <p className="min-w-[120px] text-xl font-medium">
                  {item.skill}
                </p>
                <div className="w-full h-2 rounded-full bg-gray-700">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-orange-600 to-purple-600"
                    style={{ width: item.level }}
                    aria-label={`${item.skill} skill level ${item.level}`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Experience Stats */}
      <div className="flex flex-wrap justify-center gap-12 md:gap-24 text-center">
        {[
          { value: "2+", label: "Years of Experience" },
          { value: "10+", label: "Projects Completed" },
          { value: "20+", label: "Happy Clients" },
        ].map((stat, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 transition-transform duration-300 hover:scale-110"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-700 to-orange-500 bg-clip-text text-transparent">
              {stat.value}
            </h1>
            <p className="text-lg md:text-xl font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
