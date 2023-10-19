import React, { useState } from "react";
import Logo from "../assets/IMG_8764.PNG";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const closeNavbar = () => {
    setNavbar(false);
  };

  const handleClick = () => {
    setNavbar(!navbar);
  };

  return (
    <div className="sticky z-50 inset-x-0 top-0 nav-container overflow-hidden flex justify-center bg-[rgba(22,24,35,0.7)] backdrop-blur-lg border-b">
      <div className="max-w-[85%] w-[100%] flex justify-between items-center py-5 text-white">
        <Link to="/">
          <img src={Logo} alt="logo" className="w-[150px]" />
        </Link>
        <div>
          <div onClick={handleClick} className="lg:hidden text-2xl">
            {navbar ? <IoCloseSharp /> : <GiHamburgerMenu />}
          </div>
          <ul
            className={`lg:flex items-center lg:space-x-12 ${
              navbar
                ? "absolute z-50 right-0 top-[4.6rem] max-w-[300px] text-lg w-full bg-[rgba(22,24,35,0.5)] backdrop-blur-lg divide-y-2 p-10 flex flex-col items-baseline mt-1"
                : "hidden"
            }`}
          >
            <NavLink to="/" className='w-full lg:w-auto' onClick={closeNavbar}>
              <li className="py-5 w-full">Home</li>
            </NavLink>
            <NavLink to="/about" className='w-full lg:w-auto' onClick={closeNavbar}>
              <li className="py-5 w-full">About Us</li>
            </NavLink>
            <NavLink to="/services" className='w-full lg:w-auto' onClick={closeNavbar}>
              <li className="py-5 w-full">Services</li>
            </NavLink>
            <NavLink to="/contact" className='w-full lg:w-auto' onClick={closeNavbar}>
              <li className="py-5 w-full">Contact Us</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
