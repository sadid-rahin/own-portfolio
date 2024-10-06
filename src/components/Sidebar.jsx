import React from 'react';
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="fixed top-1/4 left-0 z-50">
      <div className="flex flex-col space-y-4">
        <a
          href="https://www.facebook.com/sadid.nor.7/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 rounded-tr-lg rounded-br-lg bg-blue-600 text-white hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          <FaFacebookF size={20} />
        </a>
        <a
          href="https://www.instagram.com/sadid_rahin_nohan?igsh=MTJ6YzV1bnZyNDQ5cw%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 rounded-tr-lg rounded-br-lg bg-pink-500 text-white hover:bg-pink-600 transition duration-300 ease-in-out"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="https://github.com/sadid-rahin"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 rounded-tr-lg rounded-br-lg bg-gray-800 text-white hover:bg-gray-900 transition duration-300 ease-in-out"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/md-sadid-rahin-nohan-292624299/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 rounded-tr-lg rounded-br-lg bg-blue-500 text-white hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          <FaLinkedinIn size={20} />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
