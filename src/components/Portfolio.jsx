import projectData from '../projects.json'
import Project from './Project'

function Protfolio(){
    return(
        <>
        
    {projectData}.map((project)=>{
        <Project
        image= {project.image}
        title={project.title}
        />
    })


        </>
    )
}