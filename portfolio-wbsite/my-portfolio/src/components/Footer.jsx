import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="mx-4 md:mx-10 lg:mx-[170px] my-10 md:my-[50px] flex flex-col gap-6 md:gap-[30px]">
      {/* Logo and Description Section */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
        <div className="text-center md:text-left">
          <img
            className="w-20 h-10 mx-auto md:mx-0"
            src={assets.jo}
            alt="Logo"
          />
          <p className="text-lg max-w-md mt-3">
            I'm a fullstack developer from Ethiopia with 2 years of experience.
          </p>
        </div>

        {/* Subscription Form */}
        <div className="flex flex-col md:flex-row items-center gap-4 w-full max-w-lg">
          <div className="flex gap-4 py-3 px-5 rounded-full bg-[#32323c] w-full hover:scale-110 hover:border-2 hover:border-white duration-500">
            <img
              className="w-8 h-8 rounded-full"
              src={assets.user_icon}
              alt="User Icon"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="bg-transparent text-[#a0a0a0] placeholder-gray-400 focus:outline-none w-full border-0"
              aria-label="Enter your email"
            />
          </div>
          <button
            aria-label="Subscribe"
            className="px-6 py-3 text-white bg-gradient-to-r from-[#DF8908] to-[#B415FF] rounded-full transition-transform duration-500 cursor-pointer hover:scale-110 hover:border-2 hover:border-white"
          >
            Subscribe
          </button>
        </div>
      </div>

      <hr className="border-gray-600" />

      {/* Footer Links and Copyright Section */}
      <div className="flex flex-col md:flex-row justify-between text-lg text-center md:text-left">
        <p>© {new Date().getFullYear()} Yoseph Degne. All rights reserved.</p>
        <div className="flex flex-col md:flex-row gap-3 md:gap-6 mt-3 md:mt-0">
          <p className="cursor-pointer hover:underline">Terms of Service</p>
          <p className="cursor-pointer hover:underline">Privacy Policy</p>
          <p className="cursor-pointer hover:underline">Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
