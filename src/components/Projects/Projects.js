import React from "react";
import {ProjectList} from "./projectList"
//import axios from 'axios';
import "./Project.css";

function Projects({props}) {
// const [state, setState ] = useState([])

//   useEffect( () => {
//     axios.get('..//../ProjectList.json') 
//     .then(response => {
//       const data = response.data;
//       console.log(data);
//     })
//     .catch(error => {
//       console.log(error);
//     });
//   },[]);
  return (
    <div className="projects">
    
      <h1 id="title"> My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            <div className="projectItem" 
            key={idx}> 
            <h1>{project.name}</h1> 
            <img src={project.image} alt='project'/>
            <p>{project.description}</p>
            <p><span>{project.skills.pri}</span><span>{project.skills.sec}</span><span>{project.skills.terc}</span></p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;