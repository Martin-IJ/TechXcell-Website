import React from "react";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import {FaGithub} from 'react-icons/fa';
import {SiUpwork} from 'react-icons/si';
import {RiTwitterXFill} from 'react-icons/ri'

const Team = () => {
  return (
    <div className="bg-white py-20 overflow-hidden">
      <div className="max-w-[85%] w-full m-auto text-center space-y-7">
        <motion.h1
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-5xl"
        >
          Our Creative <span className="text-default">Team</span>
        </motion.h1>
        <motion.p
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="max-w-[700px] w-full m-auto text-faded-black"
        >
          We are committed to using fact-based knowledge and our unique brand of
          innovation to help you dominate the competition.
        </motion.p>
        <div className="flex flex-wrap justify-center lg:justify-between gap-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="martins-team-picture group max-w-[320px] w-full h-[500px] rounded-2xl"
          >
            <div className="group-hover:scale-100 scale-0 transition duration-700 ease-in-out flex flex-col items-end gap-5 justify-end h-full">
              <div className="px-5 space-y-5">
                <div className="ease-in duration-300 w-[50px] h-[50px] bg-default hover:bg-[#F6F7FB] flex items-center justify-center rounded-full text-[#F6F7FB] hover:text-default text-3xl">
                  <BiLogoFacebook />
                </div>
                <div className="ease-in duration-300 w-[50px] h-[50px] bg-default hover:bg-[#F6F7FB] flex items-center justify-center rounded-full text-[#F6F7FB] hover:text-default text-3xl">
                  <a href="https://twitter.com/iceDeCoder" target="_blank" rel="noreferrer">
                    <RiTwitterXFill />
                  </a>
                </div>
                <div className="ease-in duration-300 w-[50px] h-[50px] bg-default hover:bg-[#F6F7FB] flex items-center justify-center rounded-full text-[#F6F7FB] hover:text-default text-3xl">
                  <BiLogoLinkedin />
                </div>
              </div>
              <div className="flex flex-col justify-center w-full text-center bg-[#F6F7FB] rounded-b-2xl h-[30%]">
                <p className="text-2xl font-semibold">Martins Ohez</p>
                <p className="text-faded-black text-xl">Manager</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="abiodun-team-picture group max-w-[320px] w-full h-[500px] rounded-2xl"
          >
            <div className="group-hover:scale-100 scale-0 transition duration-700 ease-in-out flex flex-col items-end gap-5 justify-end h-full">
              <div className="px-5 space-y-5">
                <div className="ease-in duration-300 w-[50px] h-[50px] bg-default hover:bg-[#F6F7FB] flex items-center justify-center rounded-full text-[#F6F7FB] hover:text-default text-3xl">
                  <BiLogoFacebook />
                </div>
                <div className="ease-in duration-300 w-[50px] h-[50px] bg-default hover:bg-[#F6F7FB] flex items-center justify-center rounded-full text-[#F6F7FB] hover:text-default text-3xl">
                  <RiTwitterXFill />
                </div>
                <div className="ease-in duration-300 w-[50px] h-[50px] bg-default hover:bg-[#F6F7FB] flex items-center justify-center rounded-full text-[#F6F7FB] hover:text-default text-3xl">
                  <BiLogoLinkedin />
                </div>
              </div>
              <div className="flex flex-col justify-center w-full text-center bg-[#F6F7FB] rounded-b-2xl h-[30%]">
                <p className="text-2xl font-semibold">Abiodun</p>
                <p className="text-faded-black text-xl">Manager</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="denyefa-team-picture group max-w-[320px] w-full h-[500px] rounded-2xl"
          >
            <div className="group-hover:scale-100 scale-0 transition duration-700 ease-in-out flex flex-col items-end gap-5 justify-end h-full">
              <div className="px-5 space-y-5">
                <div className="ease-in duration-300 w-[50px] h-[50px] bg-default hover:bg-[#F6F7FB] flex items-center justify-center rounded-full text-[#F6F7FB] hover:text-default text-3xl">
                  <a href="https://github.com/Denyifa007" target="blank">
                    <FaGithub />
                  </a>
                  
                </div>
                <div className="ease-in duration-300 w-[50px] h-[50px] bg-default hover:bg-[#F6F7FB] flex items-center justify-center rounded-full text-[#F6F7FB] hover:text-default text-3xl">
                  <a href="https://www.upwork.com/nx/find-work/best-matches" target="blank">
                  <SiUpwork />
                  </a>
                  
                </div>
                <div className="ease-in duration-300 w-[50px] h-[50px] bg-default hover:bg-[#F6F7FB] flex items-center justify-center rounded-full text-[#F6F7FB] hover:text-default text-3xl">
                  <a href="https://www.linkedin.com/in/oyeindenyifa-diegbegha-448740260/" target="blank">
                  <BiLogoLinkedin />
                  </a>
                  
                </div>
                <div className="ease-in duration-300 w-[50px] h-[50px] bg-default hover:bg-[#F6F7FB] flex items-center justify-center rounded-full text-[#F6F7FB] hover:text-default text-3xl">
                  <a href="https://twitter.com/denyifa" target="blank">
                  <RiTwitterXFill />
                  </a>
                  
                </div>
              </div>
              <div className="flex flex-col justify-center w-full text-center bg-[#F6F7FB] rounded-b-2xl h-[30%]">
                <p className="text-2xl font-semibold">Oyeindenyifa Diegbegha</p>
                <p className="text-faded-black text-xl">Manager</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Team;
