import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-20 my-20 mx-[170px]">
      <div className="relative">
        <h1 className="px-[30px] py-0 text-[80px] font-semibold ">
          Get in Touch
        </h1>
        <img
          className="absolute bottom-0 right-0 z-[-1] w-72"
          src={assets.theme_pattern}
          alt=""
        />
      </div>
      <div className="flex gap-[150px]">
        {/* contact left */}
        <div className="flex flex-col gap-[30px]">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-900 to-orange-500 bg-clip-text text-transparent">
            Let's Talk
          </h1>
          <p className="max-w-[550px] text-[#D8D8D8] text-lg leading-9">
            I'm currently available to take on new projects , so feel free to
            send me a message about anything that you want me to work on. You
            can contact any time.
          </p>
          <div className="flex  flex-col gap-8 text-[#D8D8D8] text-2xl">
            <div className="flex items-center gap-5">
              <img src={assets.mail_icon} alt="" />
              <p>josefdagne5@gmail.com</p>
            </div>
            <div className="flex items-center gap-5">
              <img src={assets.call_icon_1} alt="" /> <p>+251 9...</p>
            </div>
            <div className="flex items-center gap-5">
              <img src={assets.location_icon_1} alt="" />{" "}
              <p>Addis Ababa , Ethiopia</p>
            </div>
          </div>
        </div>
        <form className="flex flex-col items-start gap-8">
          <label className="text-[D8D8D8] text-[22px] font-medium" htmlFor="">
            You Name:
          </label>
          <input
            className="border-0 w-[700px] h-[78px] pl-5 rounded-2xl bg-[#32323c] text-[#A0A0A0] font-outfit"
            type="text"
            placeholder="Enter your name"
            name="nmae"
          />
          <label className="text-[D8D8D8] text-[22px] font-medium" htmlFor="">
            Your Email:
          </label>
          <input
            className="border-0 w-[700px] h-[78px] pl-5 rounded-2xl bg-[#32323c] text-[#A0A0A0] font-outfit"
            type="email"
            placeholder="Enter your email"
            name="email"
          />
          <label className="text-[D8D8D8] text-[22px] font-medium" htmlFor="">
            Your Message:
          </label>
          <textarea
            className="w-[650px] border-0 p-6 rounded-3xl bg-[#32323c] text-[#A0A0A0] font-outfit"
            name="message"
            cols="30"
            rows="10"
            placeholder="Enter your message"
          ></textarea>
          <button
            className="border-0 text-white rounded-[50px] bg-gradient-to-r from-[#DF8908] to-[#B415FF] text-lg py-5 px-14 mb-16 cursor-pointer transition duration-300 hover:scale-110 "
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
