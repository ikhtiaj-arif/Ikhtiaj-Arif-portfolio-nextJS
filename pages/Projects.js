import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (

      <div>
        <div className="text-center mt-20 max-w-3xl mx-auto">
          <h3 className="text-3xl py-1">Projects That I Built</h3>
          <p className="text-md py-5 leading-8 text-gray-800">
            Lorem ipsum dolor, sit <span className="text-teal-500">amet</span>{" "}
            consectetur adipisicing elit. Reiciendis porro blanditiis quos at
            culpa sapiente itaque tenetur adipisci sequi optio distinctio error
          </p>

          
        </div>
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-10">
    <ProjectCard/>
    <ProjectCard/>
    <ProjectCard/>
        </div>

      </div>
    
  );
};

export default Projects;
