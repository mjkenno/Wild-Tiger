import React from 'react';
import { NavLink } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';

const Navbar = ({ toggle }) => {
  return (
    <nav
      className="flex md:flex-col justify-between md:justify-center items-center h-20 md:h-44 bg-gray-50 text-black shadow-sm mt-2"
      role="navigation"
    >
      <NavLink
        to="/"
        className="text-cyan-dark pl-8 font-allura text-5xl sm:text-7xl md:text-8xl md:p-6"
      >
        Wild Tiger Cakes
      </NavLink>
      <div
        className="px-4 cursor-pointer text-gray-600 md:hidden"
        onClick={toggle}
      >
        <HiMenu size={46} />
      </div>

      <div className="font-montserrat text-xl md:block hidden pb-2">
        <NavLink className="navlink" to="/">
          Home
        </NavLink>
        <NavLink className="navlink" to="/about">
          About
        </NavLink>
        <NavLink className="navlink" to="/gallery">
          Gallery
        </NavLink>
        <NavLink className="navlink" to="/flavours">
          Flavours
        </NavLink>
        <NavLink className="navlink" to="/orders">
          Orders
        </NavLink>
        <NavLink className="navlink" to="/help">
          Help
        </NavLink>
        <NavLink className="navlink" to="/privacy">
          Privacy Policy
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
