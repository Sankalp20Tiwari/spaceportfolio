
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center gap-3"
        >
                    <Image
                      src="/profile-pic.jpg" 
                      alt="Sankalp Tiwari"
                      width={400}
                      height={400}
                      className="rounded-full shadow-lg size-10 object-cover"
                    />
            <span className="text-gray-800 font-bold md:text-white text-xl sm:text-2xl">
                Sankalp Tiwari
            </span>
        </a>

        <div className="w-[500px] h-full hidden  md:flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
            <Link href={'https://github.com/Sankalp20tiwari'}>
                <Image src='/gitwhite.png' alt='github' width={30} height={30} className='cursor-pointer' />           
            </Link>
            <Link href={'https://www.linkedin.com/in/sankalp20tiwari/'}>
                <Image src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg' alt='github' width={30} height={30} className='cursor-pointer' />           
            </Link>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
