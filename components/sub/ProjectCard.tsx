
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  hrefGithub: string;
  hrefLive: string;
}

const ProjectCard = ({ src, title, description ,hrefGithub ,hrefLive}: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
        <div className="flex gap-4 mt-4 relative z-10">
        <a href={hrefGithub} target="_blank" rel="noopener noreferrer" className="relative pointer-events-auto flex gap-2 items-center justify-center">
          <Image src='/gitwhite.png' alt='github' width={20} height={20} className="cursor-pointer" />
          <p className="text-white text-xs">Github Repository</p>           
        </a>
        <a href={hrefLive} target="_blank" rel="noopener noreferrer" className="relative z-10 pointer-events-auto flex gap-2 items-center justify-center" >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
            className="size-5 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
            />
          </svg>
          <p className="text-white text-xs">Live site</p> 
        </a>
        </div> 
      </div>
    </div>
  );
};

export default ProjectCard;