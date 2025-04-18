import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full  py-10 ">
      <div className="max-w-6xl mx-auto sm:mx-40 px-6 flex flex-col sm:flex-row justify-between items-center gap-6 text-gray-400">
        {/* Left */}
        <div className="text-center sm:text-left">
          <h3 className="text-xl font-semibold text-white">Sankalp Tiwari</h3>
          <p className="mt-1 text-sm">
            Crafting code with creativity & purpose 🚀
          </p>
        </div>

        {/* Center - Links */}
        <div className="flex flex-row gap-6 text-sm">
          <a href="#about-me" className="hover:text-white  transition duration-300">About</a>
          <a href="#skills" className="hover:text-white  transition duration-300">Skills</a>
          <a href="#projects" className="hover:text-white  transition duration-300">Projects</a>
        </div>

        {/* Right - Social Icons */}
        <div className="flex flex-row gap-5 text-lg">
          <Link href="https://github.com/Sankalp20tiwari" target="_blank">
            <FaGithub className="hover:text-white transition duration-300 cursor-pointer" />
          </Link>
          <Link href="https://www.linkedin.com/in/sankalp20tiwari/" target="_blank">
            <FaLinkedin className="hover:text-white transition duration-300 cursor-pointer" />
          </Link>
          <a href="mailto:sankalp20tiwari@gmail.com">
            <FaEnvelope className="hover:text-white transition duration-300 cursor-pointer" />
          </a>
        </div>
      </div>
      <p className="text-xs mt-4 text-center  text-gray-600">
            © {new Date().getFullYear()} Sankalp Tiwari. All rights reserved.
          </p>
    </footer>
  );
};

export default Footer;
