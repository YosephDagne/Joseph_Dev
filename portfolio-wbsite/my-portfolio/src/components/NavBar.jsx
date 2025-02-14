import React, { useRef, useState } from "react";
import { assets } from "../assets/assets";
import AnchorLink from "react-anchor-link-smooth-scroll";
function NavBar() {
  const [menu, setMenu] = useState("home");

  const menuRef = useRef();
  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="fixed top-0 left-0 w-full flex items-center justify-between mt-0 mb-5 px-5 z-10 shadow-md bg-gray-900 md:mx-[50px] md:my-5">
      <img src={assets.jo} alt="Logo" className="w-32 rounded-lg" />
      <img
        onClick={openMenu}
        className="w-4 h-auto md:block md:fixed right-[30px]"
        src={assets.open}
        alt=""
      />
      <ul
        ref={menuRef}
        className="flex items-center list-none gap-10 text-base md:fixed md:flex-col md:items-start md:top-0 md:gap-[30px] md:bg-[#1F0016] md:w-[350px] md:h-[100%] md:z-[2] transition-[right] md:duration-500 duration-500 md:right-[-350px]"
      >
        <img
          onClick={closeMenu}
          className="w-4 h-auto md:block relative md:top-[30px] md:left-[290px] md:w-[30px] hidden"
          src={assets.close}
          alt=""
        />
        <li className="flex flex-col gap-2 cursor-pointer md:text-[30px] md:pl-[100px] md:flex-row md:gap-5">
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
        <li className="flex flex-col gap-2 cursor-pointer md:text-[30px] md:pl-[100px] md:flex-row md:gap-5">
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
        <li className="flex flex-col gap-2 cursor-pointer md:text-[30px] md:pl-[100px] md:flex-row md:gap-5">
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
        <li className="flex flex-col gap-2 cursor-pointer md:text-[30px] md:pl-[100px] md:flex-row md:gap-5">
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
        <li className="flex flex-col gap-2 cursor-pointer md:text-[30px] md:pl-[100px] md:flex-row md:gap-5">
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
      <div className="flex items-center justify-center w-48 h-12 rounded-[50px] bg-gradient-to-r from-orange-400 to-purple-600 text-white cursor-pointer transition-transform duration-300 text-lg text-center hover:from-orange-500 hover:to-purple-700 hover:scale-110 hover:border-white hover:border-2 md:hidden">
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
