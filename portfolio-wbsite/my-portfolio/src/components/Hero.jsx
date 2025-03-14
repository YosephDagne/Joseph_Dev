import React, { useState } from "react";
import { assets } from "../assets/assets";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  const [menu, setMenu] = useState("");

  return (
    <div
      id="home"
      className="flex flex-col items-center text-center gap-6 mt-60"
    >
      {/* Profile Image */}
      <img
        className="w-40 h-40 rounded-full object-cover shadow-lg"
        src={assets.josi1}
        alt="Yosef Dagne"
      />

      {/* Title */}
      <h1 className="text-5xl font-extrabold">
        <span className="bg-gradient-to-r from-purple-600 to-orange-400 text-transparent bg-clip-text">
          I'm Yosef Dagne
        </span>
        , a Fullstack Web Developer
      </h1>

      {/* Short Bio */}
      <p className="text-lg max-w-2xl text-gray-300 leading-relaxed">
        Passionate about building scalable and efficient web applications. I
        love turning ideas into reality through code.
      </p>

      {/* Buttons */}
      <div className="flex gap-6 mt-6">
        <button className="px-6 py-3 sm:px-4 sm:py-2 bg-gradient-to-r from-orange-500 to-purple-700 text-white text-lg sm:text-base rounded-full transition-transform duration-300 hover:scale-110 shadow-md cursor-pointer hover:border-2 hover:border-white">
          <AnchorLink
            offset={50}
            href="#contact"
            onClick={() => setMenu("contact")}
          >
            Connect with Me
          </AnchorLink>
        </button>
        <a
          href="/Yosef_Dagne_Resume.pdf"
          target="_blank"
          download
          className="px-6 py-3 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-500 to-green-500 text-white text-lg sm:text-base rounded-full transition-transform duration-300 hover:scale-110 shadow-md cursor-pointer hover:border-2 hover:border-white text-center"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default Hero;
