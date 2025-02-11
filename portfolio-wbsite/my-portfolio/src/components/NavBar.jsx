import React, { useState } from "react";
import { assets } from "../assets/assets";
import AnchorLink from "react-anchor-link-smooth-scroll";

function NavBar() {
  const [menu, setMenu] = useState("home");

  return (
    <div className="fixed top-0 left-0 w-full flex items-center justify-between mt-0 mb-5 px-5 z-10 shadow-md bg-gray-900">
      <img src={assets.jo} alt="Logo" className="w-32 rounded-lg" />
      <ul className="flex items-center list-none gap-10 text-base">
        <li className="flex flex-col gap-2 cursor-pointer">
          <AnchorLink
            className="decoration-0 text-white"
            href="#home"
            onClick={() => setMenu("home")}
          >
            HOME
          </AnchorLink>
          {menu === "home" && (
            <img
              className="w-full h-[3px] object-cover"
              src={assets.nav_underline}
              alt=""
            />
          )}
        </li>
        <li className="flex flex-col gap-2 cursor-pointer">
          <AnchorLink
            offset={50}
            href="#about"
            onClick={() => setMenu("about")}
          >
            ABOUT ME
          </AnchorLink>
          {menu === "about" && (
            <img
              className="w-full h-[3px] object-cover"
              src={assets.nav_underline}
              alt=""
            />
          )}
        </li>
        <li className="flex flex-col gap-2 cursor-pointer">
          <AnchorLink
            offset={50}
            href="#services"
            onClick={() => setMenu("services")}
          >
            SERVICES
          </AnchorLink>
          {menu === "services" && (
            <img
              className="w-full h-[3px] object-cover"
              src={assets.nav_underline}
              alt=""
            />
          )}
        </li>
        <li className="flex flex-col gap-2 cursor-pointer">
          <AnchorLink
            offset={50}
            href="#work"
            onClick={() => setMenu("portfolio")}
          >
            PORTFOLIO
          </AnchorLink>
          {menu === "portfolio" && (
            <img
              className="w-full h-[3px] object-cover"
              src={assets.nav_underline}
              alt=""
            />
          )}
        </li>
        <li className="flex flex-col gap-2 cursor-pointer">
          <AnchorLink
            offset={50}
            href="#contact"
            onClick={() => setMenu("contact")}
          >
            CONTACT
          </AnchorLink>
          {menu === "contact" && (
            <img
              className="w-full h-[3px] object-cover"
              src={assets.nav_underline}
              alt=""
            />
          )}
        </li>
      </ul>
      <div
        className="flex items-center justify-center w-48 h-12 rounded-[50px] bg-gradient-to-r from-orange-400 to-purple-600 text-white cursor-pointer 
        transition-transform duration-300 text-lg text-center hover:from-orange-500 hover:to-purple-700 hover:scale-110 hover:border-white hover:border-2"
      >
        <AnchorLink
          offset={50}
          href="#contact"
          onClick={() => setMenu("contact")}
        >
          Connect with Me
        </AnchorLink>
      </div>
    </div>
  );
}

export default NavBar;
