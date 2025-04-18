'use client'

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="w-full min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-10 py-20"
    >
      {/* Text Section */}
      <motion.div
        className="flex-1 flex flex-col items-start"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-[40px] sm:text-[60px] font-bold bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">
          About Me
        </h2>
        <p className="mt-6 text-gray-300 text-lg leading-8 max-w-[600px]">
          Hi, I'm <span className="text-purple-400 font-semibold">Sankalp Tiwari</span>,
          a passionate and dedicated Full Stack Developer with a strong
          background in building scalable web applications and secure network
          systems. I specialize in creating seamless user experiences with
          modern frontend technologies and robust backend architectures.
        </p>
        <p className="mt-4 text-gray-400 text-base max-w-[600px]">
          From designing intuitive UIs to implementing intelligent security
          solutions, I enjoy solving real-world problems through code. I'm always
          eager to learn and adapt to new technologies to build efficient and
          impactful digital experiences.
        </p>
        <a
          href="https://www.linkedin.com/in/sankalp20tiwari/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block px-6 py-3 button-primary hover:bg-purple-700 text-white rounded-full transition duration-300"
        >
          Let's Connect
        </a>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="flex-1 flex items-center justify-center rounded-full"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/profile-pic.jpg" // replace with your actual image path
          alt="Sankalp Tiwari"
          width={400}
          height={400}
          className="rounded-full shadow-lg object-cover"
        />
      </motion.div>
    </section>
  );
};

export default AboutMe;
