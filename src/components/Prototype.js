import React from "react";
import Book from '../assets/book.png'
import Flower from '../assets/flower.png'
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Prototype = () => {
  const handleClick = (e) => {
    e.preventDefault();
  }

  return (
    <div name="contact" className="relative isolate overflow-hidden bg-main-color h-screen flex">
      <img src={Book} alt="" className="absolute -z-10 bottom-10 -left-48 drop-shadow-xl" />
      <img src={Flower} alt="" className="absolute -z-10 -bottom-40 -right-60 md:-right-40 mix-blend-soft-light" />
      <div className="absolute -z-20 -bottom-32 drop-shadow-xl">
        <h1 className=" text-[#161823] drop-shadow-lg text-center text-[20rem] font-black">
          CREATIVE <br /> SOLUTION
        </h1>
      </div>
      <div className="max-w-[85%] w-full space-y-10 m-auto text-center text-white">
        <motion.h1
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-5xl"
        >
          Get a <span className="text-default">Free</span> Prototype <br /> of
          Your Future Website!
        </motion.h1>
        <motion.p
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="max-w-[600px] w-full m-auto"
        >
          Send your requirements for a website, we will research your
          specification, create a prototype of the website for free and sed a
          result to you!
        </motion.p>

        <motion.form
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          action=""
          onSubmit={handleClick}
          className="space-y-7 max-w-[600px] w-full m-auto text-white"
        >
          <div className="w-full md:flex justify-between space-y-5 md:space-y-0 gap-5">
            <input
              type="text"
              className="bg-inherit border rounded-[5.5rem] py-4 px-10 w-full md:w-[50%]"
              placeholder="First name"
            />
            <input
              type="text"
              className="bg-inherit border rounded-[5.5rem] py-4 px-10 w-full md:w-[50%]"
              placeholder="Phone number"
            />
          </div>
          <textarea
            className="bg-inherit border rounded-3xl py-4 px-10 w-full text-white"
            placeholder="Message"
            rows="5"
          ></textarea>
          <button type="submit" className="default-border">
            Submit
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Prototype;
