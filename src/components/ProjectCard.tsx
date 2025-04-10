import type React from "react"
import type { Project } from "../types"
import "../styles/ProjectCard.css"

interface ProjectCardProps {
  project: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="project-card">
      {/* {project.imageUrl && (
        <div className="project-image">
          <img src={project.imageUrl || "/placeholder.svg"} alt={project.title} />
        </div>
      )} */}
      <div className="project-image">
        <img src={"/placeholder.svg"} alt={project.name} />
      </div>

      <div className="project-content">
        <h3 className="project-title">{project.name}</h3>
        <p className="project-description">{project.description}</p>

        {/* <div className="project-tech">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div> */}

        {/* <div className="project-interests">
          {['GUITAR', 'PROGRAMMING'].map((interest, index) => {
            console.log(interest)
            return <span key={index} className="interest-tag">
                {interest.replace("_", " ").toLowerCase()}
              </span>
          })}
        </div> */}

        <div className="project-links">
          {/* {project.projectUrl && (
            <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="project-link">
              <i className="fas fa-external-link-alt"></i> View Project
            </a>
          )} */}
          {project.github_url && (
            <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="project-link">
              <i className="fab fa-github"></i> View Code
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
