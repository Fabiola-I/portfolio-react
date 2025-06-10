import React from "react";
import "../styles/project.css";
import projectsData from "../data/projects.json";

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectsData.projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.icon} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.technologies.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </div>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
