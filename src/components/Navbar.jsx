import React from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => (
  <nav className="w-full flex justify-between py-6 navbar items-center">
    <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
    <ul className="list-none sm:flex hidden justify-end items-center flex-1">
      {navLinks.map((nav, index) => (   //dianamically load the nav  links using map
        <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}>
          <a href={`#${nav.id}`}>{nav.title}</a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
