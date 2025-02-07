import React from "react";
import { assets } from "../assets/assets";

function NavBar() {
  return (
    <div className="flex items-center justify-between mt-20 mb-20 mr-[100px] ml-[100px]">
      <img src={assets.jo} alt="Logo" className="w-32 rounded-lg" />
      <ul className="flex items-center list-none gap-10 text-[20px]">
        <li>HOME</li>
        <li>ABOUT ME</li>
        <li>SERVICES</li>
        <li>PORTFOLIO</li>
        <li>CONTACT</li>
      </ul>
      <div>Connect with Me</div>
    </div>
  );
}

export default NavBar;
