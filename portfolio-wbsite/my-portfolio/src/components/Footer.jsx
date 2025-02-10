import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="mx-[170px] my-[50px] flex flex-col gap-[30px]">
      <div className="flex justify-between ">
        <div className="">
          <img className="w-20 h-10" src={assets.jo} alt="" />
          <p className="text-lg ma-w-[400px]">
            I'm a fullstack developer from , Ethipia with 2 years of experience
          </p>
        </div>

        <div className="flex items-center gap-[35px]">
          <div className="flex gap-[30px] py-5 px-8 rounded-[50px] bg-[#32323c] pr-20 w-full max-w-md">
            <img
              className="w-10 h-7 rounded-full"
              src={assets.user_icon}
              alt="User Icon"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="bg-transparent text-white placeholder-gray-400 focus:outline-none w-full"
            />
          </div>
          <div>
            <button className="px-6 py-3 text-white bg-gradient-to-r from-[#DF8908] to-[#B415FF] rounded-[50px] transition-transform duration-300 hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div className="">
        <p>© {new Date().getFullYear()} Yoseph Degne. All rights reserved.</p>
        <div>
          <p>Term of services</p>
          <p>Privacy policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
