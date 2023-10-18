import React from "react";

const Statistics = () => {
  return (
    <div className="relative overflow-x-hidden">
      <div className="max-w-[85%] w-full m-auto flex justify-center lg:justify-between gap-10 flex-wrap text-center py-20 text-6xl font-semibold">
        <p className="absolute hidden md:block overflow-hidden statistics-text-shadow text-white -z-10 bottom-0 left-10 text-[15rem] lg:text-[20rem] font-bold">
          Statistics
        </p>
        <div>
          <p>
            32<span className="text-default">+</span>
          </p>
          <p className="text-lg">Professionals team</p>
        </div>
        <div>
          <p>
            200<span className="text-default">+</span>
          </p>
          <p className="text-lg">Satisfied customers</p>
        </div>
        <div>
          <p>
            175<span className="text-default">+</span>
          </p>
          <p className="text-lg">Successful projects</p>
        </div>
        <div>
          <p>
            8<span className="text-default">+</span>
          </p>
          <p className="text-lg">Years of experience</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
