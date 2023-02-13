import React from "react";
import {ProjectList} from "./projectList"
import "./Project.css";

function Projects() {

  return (
    <div className="projects">
    
      <h1 id="title"> My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            <div className="projectItem" 
            key={idx}> 
            <img src={project.image} alt='project'/>
            <h1>{project.name}</h1> 
            <p>{project.description}</p>
            <p><span>{project.skills.pri}</span>
            <span>{project.skills.sec}</span>
            <span>{project.skills.terc}</span></p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;