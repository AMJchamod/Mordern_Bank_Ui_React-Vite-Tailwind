import React, { useState } from 'react';
import { close, logo, menu } from '../assets';  
import { navLinks } from '../constants';       

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex justify-between items-center py-6 relative navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
      
      {/* Desktop Navigation */}
      <ul className="hidden sm:flex list-none justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
              index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
            }`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      
      {/* Mobile Navigation Toggle */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
          aria-expanded={toggle}
          aria-controls="mobile-menu"
        />
      </div>
      
      {/* Mobile Navigation Links */}
      <div
        id="mobile-menu"
        className={`${
          toggle ? 'flex' : 'hidden'
        } flex-col p-6 bg-black-gradient absolute top-16 right-0 mx-4 my-2 min-w-[200px] rounded-xl transition-all duration-300 ease-in-out`}
      >
        <ul className="list-none flex flex-col justify-start items-start flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-medium cursor-pointer text-[16px] text-white ${
                index === navLinks.length - 1 ? 'mb-0' : 'mb-4'
              }`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
