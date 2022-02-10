import React from 'react';
import { NavLink } from 'react-router-dom';

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? 'grid grid-rows-6 text-center items-center bg-gray-50 text-lg z-50 fixed w-screen'
          : 'hidden'
      }
      onClick={toggle}
    >
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
      <NavLink className="navlink" to="/contact">
        Contact
      </NavLink>
      <NavLink className="navlink" to="/faq">
        FAQ
      </NavLink>
    </div>
  );
};

export default Dropdown;
