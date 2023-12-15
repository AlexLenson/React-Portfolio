import React from 'react';
import projectData from '../projects.json';
import Project from './Project';


function Portfolio() {
    return (
        <div className="portfolio row d-flex justify-content-center flex-wrap gap-3 pt-4">
            {projectData.map((project, index) => (
                <Project
                    key={index}
                    image={project.image}
                    title={project.title}
                    link={project.link}
                    repoLink={project.repoLink}
                />
            ))}
        </div>
    );
}

export default Portfolio;