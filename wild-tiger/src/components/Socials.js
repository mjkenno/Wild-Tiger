import React from 'react';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';

const Socials = () => {
  return (
    <div>
      <div className="flex justify-center mt-10 ">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noreferrer"
          className="mx-2 text-gray-600 hover:text-cyan-dark duration-200 ease-in-out"
        >
          <FaInstagram size={56} />
        </a>

        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noreferrer"
          className="mx-2 text-gray-600 hover:text-cyan-dark duration-200 ease-in-out"
        >
          <FaFacebookF size={50} />
        </a>
      </div>
    </div>
  );
};

export default Socials;
