import React from "react";
import Laptop from "../assets/macbook.png";

const Banner = () => {
  return (
    <div className="relative isolate bg-main-color flex items-center overflow-hidden">
      <img
        src={Laptop}
        alt=""
        className="absolute hidden md:block -z-10 bottom-5 lg:bottom-10 right-0 lg:-right-32 w-[400px] lg:w-[900px]"
      />
      <div className="max-w-[85%] w-full m-auto flex flex-col justify-center gap-10 items-center md:items-start py-36 text-white">
        <h1 className="text-center md:text-start text-5xl md:text-7xl lg:text-8xl font-semibold">
          A Website that <br />{" "}
          <span className="text-default">Leads to Customers</span>
        </h1>
        <p className="text-center md:text-start text-slate-400 max-w-[410px]">
          Our web design company specializes in the Professional creation of
          unique site the converts visitors to customers
        </p>
        <button className="default-border">Read More</button>
      </div>
    </div>
  );
};

export default Banner;
