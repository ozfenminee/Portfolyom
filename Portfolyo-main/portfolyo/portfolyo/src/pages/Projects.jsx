import React from 'react'
import ProjectItem from '../components/ProjectItem';
import { ProjectList } from '../helpers/ProjectList';

 function Projects ()  {
  return (
   <div className='projects'>
    <h1>My Personal Projects</h1>
    <div className='projectList'>
    {ProjectList.map((project,index)=>{
          return <ProjectItem name={project.name} key={index} image={project.image}/>
        })}

    </div>

   </div>
  )
}

export default Projects;