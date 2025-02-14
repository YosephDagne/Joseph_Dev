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
    <div className="fixed top-0 left-0 w-full flex items-center justify-between px-5 py-3 z-10 shadow-md bg-gray-900 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
      <img
        src={assets.jo}
        alt="Logo"
        className="w-24 md:w-28 lg:w-32 xl:w-36"
      />
      <img
        onClick={openMenu}
        className="w-6 h-6 cursor-pointer md:hidden"
        src={assets.open}
        alt=""
      />
      <ul
        ref={menuRef}
        className="fixed top-0 right-[-350px] w-[150px] h-full bg-[#130f12] flex flex-col items-start gap-6 p-6 text-lg transition-all duration-500 md:static md:flex-row md:bg-transparent md:w-auto md:h-auto md:items-center md:gap-10 md:p-0"
      >
        <img
          onClick={closeMenu}
          className="w-8 h-8 cursor-pointer md:hidden absolute top-6 right-6"
          src={assets.close}
          alt=""
        />
        {["home", "about", "services", "portfolio", "contact"].map((item) => (
          <li
            key={item}
            className="relative cursor-pointer text-white text-sm md:text-base lg:text-lg"
          >
            <AnchorLink
              className={`text-white hover:text-orange-400 transition-colors relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-orange-400 after:left-0 after:bottom-[-2px] after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                menu === item ? "text-orange-400 after:scale-x-100" : ""
              }`}
              href={`#${item}`}
              onClick={() => setMenu(item)}
            >
              {item.toUpperCase()}
            </AnchorLink>
          </li>
        ))}
      </ul>
      <div className="hidden md:flex items-center justify-center w-40 md:w-44 lg:w-48 xl:w-52 h-10 md:h-12 rounded-full bg-gradient-to-r from-orange-400 to-purple-600 text-white cursor-pointer transition-transform duration-300 text-sm md:text-base lg:text-lg text-center hover:from-orange-500 hover:to-purple-700 hover:scale-115 hover:border-white hover:border-2">
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
