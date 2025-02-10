import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="">
      <div className="">
        <div className="">
          <img src={assets.jo} alt="" />
        </div>

        <div className="">
          <div>
            <img src={assets.user_icon} alt="" />
            <input type="email" name="email" placeholder=" Enter your email" />
          </div>
          <div>
            <button>Subscribe</button>
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
