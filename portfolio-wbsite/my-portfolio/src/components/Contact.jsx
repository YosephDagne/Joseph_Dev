import React, { useState } from "react";
import { assets } from "../assets/assets";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    // Basic Validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("All fields are required!");
      return;
    }

    const submissionData = {
      ...formData,
      access_key: "96e914f2-7fc3-4512-ab68-69a3b85508ee",
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(submissionData),
      }).then((res) => res.json());

      if (res.success) {
        toast.success(res.message); // Show success message
        setFormData({ name: "", email: "", message: "" }); // Clear input fields
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
    }
  };

  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center gap-20 my-20 mx-4 sm:mx-8 md:mx-16 lg:mx-[170px]"
    >
      {/* Title Section */}
      <div className="relative text-center">
        <h1 className="px-8 text-5xl sm:text-6xl md:text-[70px] font-semibold text-white">
          Get in Touch
        </h1>
        <img
          className="absolute bottom-0 right-0 z-[-1] w-36 sm:w-52 md:w-72"
          src={assets.theme_pattern}
          alt="Decorative Pattern"
        />
      </div>

      {/* Contact Content */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start w-full">
        {/* Left Section: Contact Info */}
        <div className="flex flex-col gap-8 text-white w-full lg:w-1/2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-900 to-orange-500 bg-clip-text text-transparent">
            Let's Talk
          </h1>
          <p className="max-w-[550px] text-[#D8D8D8] text-lg sm:text-xl leading-8">
            I'm currently available to take on new projects. Feel free to send
            me a message about anything you’d like me to work on. You can
            contact me at any time.
          </p>

          {/* Contact Info */}
          <div className="flex flex-col gap-6 text-[#D8D8D8] text-lg">
            <div className="flex items-center gap-4">
              <img className="w-6 h-6" src={assets.mail_icon} alt="Mail Icon" />
              <p>josefdagne5@gmail.com</p>
            </div>
            <div className="flex items-center gap-4">
              <img
                className="w-6 h-6"
                src={assets.call_icon_1}
                alt="Call Icon"
              />
              <p>+251925857810</p>
            </div>
            <div className="flex items-center gap-4">
              <img
                className="w-6 h-6"
                src={assets.location_icon_1}
                alt="Location Icon"
              />
              <p>Addis Ababa, Ethiopia</p>
            </div>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-6 bg-[#1E1E2E] p-8 rounded-2xl w-full lg:w-[700px] shadow-lg"
        >
          <label className="text-[#D8D8D8] text-xl font-medium">
            Your Name:
          </label>
          <input
            className="w-full h-14 px-5 rounded-xl bg-[#32323c] text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-500"
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          <label className="text-[#D8D8D8] text-xl font-medium">
            Your Email:
          </label>
          <input
            className="w-full h-14 px-5 rounded-xl bg-[#32323c] text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-500"
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <label className="text-[#D8D8D8] text-xl font-medium">
            Your Message:
          </label>
          <textarea
            className="w-full h-32 p-5 rounded-xl bg-[#32323c] text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-500"
            name="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button
            className="w-full text-white rounded-xl bg-gradient-to-r from-[#DF8908] to-[#B415FF] text-lg py-3 mt-4 transition duration-300 hover:scale-110 cursor-pointer"
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
