import React from "react";
import Board from "../assets/board.png";
import Brush from "../assets/brush.png";

const About = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="max-w-[85%] w-full m-auto">
        <div className="w-full lg:flex items-center text-center lg:text-start pt-32 pb-20">
          <div className="w-full lg:w-[50%] flex items-end justify-center p-5">
            <img src={Brush} alt="" className="-mr-20 mb-7" />
            <img src={Board} alt="" />
          </div>
          <div className="w-full lg:w-[50%] flex flex-col gap-7">
            <h1 className="text-5xl font-semibold">
              We Are <span className="text-default">Professional</span>
              <br /> Digital Team
            </h1>
            <p className="text-2xl text-[#666666]">
              Our web design company specializes in the professional creation of
              unique sites.
            </p>
            <p className="text-[#666666] leading-loose">
              Our team constantly monitors the emergence of new technologies
              that we are not afraid to implement in web projects. We create
              only selling websites – this is an achievement by drawing the
              design and working out usability. The approach to each new project
              is individual, we treat every customer equally, regardless of the
              size of the company and its budget.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
