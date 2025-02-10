import React from "react";
import { assets } from "../assets/assets";

function NavBar() {
  return (
    <div className="fixed top-0 left-0 w-full flex items-center justify-between mt-0 mb-5 px-5 z-10 shadow-md bg-gray-900">
      <img src={assets.jo} alt="Logo" className="w-32 rounded-lg" />
      <ul className="flex items-center list-none gap-10 text-base">
        <li>HOME</li>
        <li>ABOUT ME</li>
        <li>SERVICES</li>
        <li>PORTFOLIO</li>
        <li>CONTACT</li>
      </ul> 
      <div
        className="flex items-center justify-center w-48 h-12 rounded-[50px] bg-gradient-to-r from-orange-400 to-purple-600 text-white cursor-pointer 
        transition-transform duration-300 text-lg text-center hover:from-orange-500 hover:to-purple-700 hover:scale-110 hover:border-white hover:border-2"
      >
        Connect with Me
      </div>
    </div>
  );
}

export default NavBar;
