import React, { useState } from "react";
import { assets } from "../assets/assets";
import AnchorLink from "react-anchor-link-smooth-scroll";

function NavBar() {
  const [menu, setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full flex items-center justify-between p-5 z-10 shadow-md bg-gray-900">
      <img src={assets.jo} alt="Logo" className="w-32 rounded-lg" />

      {/* Mobile Menu Toggle */}
      <div
        className="md:hidden cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          className="w-6 h-6"
          src={isOpen ? assets.close : assets.open}
          alt="menu"
        />
      </div>

      {/* Navigation Links */}
      <ul
        className={`md:flex items-center list-none gap-10 text-base absolute md:static bg-gray-900 md:bg-transparent top-16 left-0 w-full md:w-auto p-5 md:p-0 transition-transform duration-300 ${
          isOpen ? "block" : "hidden"
        } md:flex`}
      >
        <img
          className="w-4 h-auto md:hidden"
          src={assets.close}
          alt=""
          onClick={() => setIsOpen(false)}
        />
        <li className="flex flex-col gap-2 cursor-pointer">
          <AnchorLink
            className="decoration-0 text-white"
            href="#home"
            onClick={() => {
              setMenu("home");
              setIsOpen(false);
            }}
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
            onClick={() => {
              setMenu("about");
              setIsOpen(false);
            }}
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
            onClick={() => {
              setMenu("services");
              setIsOpen(false);
            }}
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
            onClick={() => {
              setMenu("portfolio");
              setIsOpen(false);
            }}
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
            onClick={() => {
              setMenu("contact");
              setIsOpen(false);
            }}
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

      {/* Connect Button */}
      <div className="hidden md:flex items-center justify-center w-48 h-12 rounded-[50px] bg-gradient-to-r from-orange-400 to-purple-600 text-white cursor-pointer transition-transform duration-300 text-lg text-center hover:from-orange-500 hover:to-purple-700 hover:scale-110 hover:border-white hover:border-2">
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
