import React from "react";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoLinkedin,
  BiLogoInstagram,
} from "react-icons/bi";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Footer = () => {
  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <footer className="py-32 overflow-hidden">
      <div className="max-w-[85%] w-full m-auto text-start text-white space-y-20 md:space-y-0 md:flex gap-10">
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="space-y-5 md:flex-1"
        >
          <h1 className="text-2xl font-bold border-b pb-5">About</h1>
          <p>
            We have much planned for the future, working with great clients and
            continued software development
          </p>
          <p className="footer-small-circle">+234 111 111 1111</p>
          <p className="footer-small-circle">info@techxcell.com</p>
          <div className="flex gap-5 text-2xl">
            <BiLogoFacebook className="hover:text-default cursor-pointer" />
            <BiLogoInstagram className="hover:text-default cursor-pointer" />
            <BiLogoTwitter className="hover:text-default cursor-pointer" />
            <BiLogoLinkedin className="hover:text-default cursor-pointer" />
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="space-y-5 md:flex-1"
        >
          <h1 className="text-2xl font-bold border-b pb-5">Useful Links</h1>
          <ul className="list-disc list-inside text-xl font-semibold space-y-3">
            <li className="hover:text-default cursor-pointer">Home</li>
            <li className="hover:text-default cursor-pointer">About</li>
            <li className="hover:text-default cursor-pointer">Services</li>
            <li className="hover:text-default cursor-pointer">Contact Us</li>
            <li className="hover:text-default cursor-pointer">Newsletter</li>
          </ul>
        </motion.div>

        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="space-y-5 md:flex-1"
        >
          <h1 className="text-2xl font-bold border-b pb-5">About</h1>
          <p>Join our mailing list to receive news and announcements</p>
          <form onSubmit={handleClick} className="space-y-5">
            <input
              type="email"
              placeholder="Your Email"
              className="bg-transparent border rounded-[4rem] w-full p-3"
            />
            <button type="submit" className="go-border p-3 w-full">
              Get Subscribed
            </button>
          </form>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
