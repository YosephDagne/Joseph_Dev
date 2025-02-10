import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div className="">
      <div className="">
        <h1 className="text-5xl font-semibold">Get in Touch</h1>
        <img className="" src={assets.theme_pattern} alt="" />
      </div>
      <div className="">
        {/* contact left */}
        <div className="relative">
          <h1>Let's Talk</h1>
          <p>
            I'm currently available to take on new projects , so feel free to
            send me a message about anything that you you want me to work on.
            You can contact any time.
          </p>
          <div className="">
            <div className="">
              <img src={assets.mail_icon} alt="" />
              <p>josefdagne5@gmail.com</p>
            </div>
            <div className="">
              <img src={assets.call_icon_1} alt="" /> <p>+251 9...</p>
            </div>
            <div className="">
              <img src={assets.location_icon_1} alt="" />{" "}
              <p>Addis Ababa , Ethiopia</p>
            </div>
          </div>
        </div>
        <form>
          <label htmlFor="">You Name:</label>
          <input type="text" placeholder="Enter your name" name="nmae" />
          <label htmlFor="">Your Email:</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Your Message:</label>
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
