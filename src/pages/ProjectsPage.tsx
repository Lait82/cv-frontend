"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { fetchProjects, fetchInterests } from "../services/api"
import type { Project, Interest, InterestType } from "../types"
import ProjectCard from "../components/ProjectCard"
import ApiEndpointDoc from "../components/ApiEndpointDoc"
import "../styles/ProjectsPage.css"
import "../styles/EndpointPage.css"

const ProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [interests, setInterests] = useState<Interest[]>([])
  const [selectedInterest, setSelectedInterest] = useState<InterestType | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const interestTypeMap: Record<number, InterestType> = {
    1: "JIU_JITSU",
    2: "TAEKWONDO_ITF",
    3: "GUITAR",
    4: "SINGING",
    5: "ELECTRONICS",
    6: "CYBERSECURITY",
    7: "PROGRAMMING",
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const interestsData = await fetchInterests()
        setInterests(interestsData)

        const projectsData = await fetchProjects(selectedInterest || undefined)
        setProjects(projectsData)
      } catch (err) {
        setError("Failed to load projects. Please try again later.")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [selectedInterest])

  const handleFilterChange = (interest: InterestType | null) => {
    setSelectedInterest(interest)
  }

  // Ejemplo de respuesta para el endpoint
  const projectsExample = [
    {
      banner_img: "string",
      description: "string",
      github_url: "string",
      id: "number",
      name: "string",
    },
    {
      banner_img: "string",
      description: "string",
      github_url: "string",
      id: "number",
      name: "string",
    },
  ]

  return (
    <div className="endpoint-page">
      <h1 className="endpoint-page-title">Projects</h1>

      <div className="endpoint-page-content">
        <div className="endpoint-data">
          <ApiEndpointDoc
            method="GET"
            endpoint={selectedInterest ? `/api/projects?interests=${selectedInterest}` : "/api/projects"}
            description="Returns a list of projects. Can be filtered by interest type using the query parameter 'interests'."
            responseExample={projectsExample}
          />
        </div>

        <div className="endpoint-visualization">
          <h2 className="visualization-title">Project Showcase</h2>

          <div className="filter-container">
            <div className="filter-label">Filter by interest:</div>
            <div className="filter-options">
              <button
                className={`filter-option ${selectedInterest === null ? "active" : ""}`}
                onClick={() => handleFilterChange(null)}
              >
                All
              </button>

              {interests.map((interest) => {
                const interestType = interestTypeMap[interest.id]
                return <button
                    key={interest.id}
                    className={`filter-option ${selectedInterest === interestType ? "active" : ""}`}
                    onClick={() => handleFilterChange(interestType)}
                  >
                    {interest.name}
                  </button>
              })}
            </div>
          </div>

          {loading ? (
            <div className="loading"></div>
          ) : error ? (
            <div className="error">{error}</div>
          ) : projects.length === 0 ? (
            <div className="no-projects">
              <p>No projects found for the selected filter.</p>
            </div>
          ) : (
            <div className="projects-grid">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage
