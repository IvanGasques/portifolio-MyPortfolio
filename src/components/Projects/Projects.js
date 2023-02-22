import React from "react";
import {ProjectList} from "./projectList"
import "./Project.css";
import { Link } from 'react-router-dom'

function Projects() {

  return (
    <div className="projects">

      <h1 id="title"> My Personal Projects</h1>‹
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            <div className="projectItem" 
            key={idx}> 
            <img src={project.image} alt='project'/>
            <h1><Link className="color" to={project.url}> {project.name}</Link></h1> 
            <p>{project.description}</p>
            <p><span>{project.skills.pri}</span>
            <span>{project.skills.sec}</span>
            <span>{project.skills.terc}</span></p>
            </div>
          );
        })}
      </div>
      <div className="rest"> Soon I will update with more projects that are already done and the new ones that I am about to finish!</div>
    </div>
  );
}

export default Projects;