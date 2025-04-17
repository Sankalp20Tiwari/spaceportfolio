import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { myProjects } from "@/constants";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center pb-20 "
      id="projects"
    >
      <h1 className="text-[50px] sm:text-[80px] font-semibold text-transparent bg-clip-text text-center bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
        {myProjects.map((project,index)=> (
          <ProjectCard       
            key={index}
            src={project.src}
            title={project.title}
            description={project.description}
            hrefGithub={project.hrefGithub}
            hrefLive={project.hrefLive}
          />
        ))}
      </div>
      <h2 className="mt-16 text-center text-lg sm:text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
        Wanna see more?{" "}
        <a
          href="https://github.com/Sankalp20Tiwari"
          target="_blank"
          rel="noopener noreferrer"   
        >
          Check out my{" "} 
          <span className="underline hover:text-white transition duration-300">
          GitHub →
          </span>
        </a>
      </h2>

    </div>
  );
};

export default Projects;
