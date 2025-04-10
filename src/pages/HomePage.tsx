"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { fetchBasicInfo } from "../services/api"
import type { BasicInfo } from "../types"
import ApiEndpointDoc from "../components/ApiEndpointDoc"
import "../styles/HomePage.css"
import "../styles/EndpointPage.css"

const HomePage: React.FC = () => {
  const [basicInfo, setBasicInfo] = useState<BasicInfo | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const getBasicInfo = async () => {
      try {
        const data = await fetchBasicInfo()
        setBasicInfo(data)
      } catch (err) {
        setError("Failed to load basic information. Please try again later.")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    getBasicInfo()
  }, [])

  // Ejemplo de respuesta para el endpoint
  const basicInfoExample = {
    dob: "string",
    email: "string",
    firstname: "string",
    github_profile: "string",
    lastname: "string",
    linkedin_profile: "string",
    location: "string",
    summary: "string",
  }

  return (
    <div className="endpoint-page">
      <h1 className="endpoint-page-title">Welcome to My API CV</h1>

      <div className="endpoint-page-content">
        <div className="endpoint-data">
          <ApiEndpointDoc
            method="GET"
            endpoint="/api/basic_info"
            description="Returns basic information about the person, including name, contact details, and summary."
            responseExample={basicInfoExample}
          />
        </div>

        <div className="endpoint-visualization">
          <h2 className="visualization-title">CV Dashboard</h2>

          {loading ? (
            <div className="loading"></div>
          ) : error ? (
            <div className="error">{error}</div>
          ) : !basicInfo ? (
            <div className="error">No information available.</div>
          ) : (
            <div className="home-content">
              <div className="hero-content">
                <div className="pixel-portrait"></div>
                <h1 className="hero-title">
                  <span className="greeting">Hello, I'm</span>
                  <span className="name">
                    {basicInfo.firstname} {basicInfo.lastname}
                  </span>
                  <span className="title">{"Backend Engineer"}</span>
                </h1>
                {/* <p className="hero-summary">{basicInfo.summary}</p> */}
                <div className="hero-cta">
                  <Link to="/projects" className="cta-button primary">
                    View Projects
                  </Link>
                  <Link to="/contact" className="cta-button secondary">
                    Contact Me
                  </Link>
                </div>
              </div>

              <div className="api-navigation">
                <h3 className="api-nav-title">Explore API Endpoints</h3>
                <div className="api-nav-links">
                  <Link to="/about" className="api-nav-link">
                    <div className="api-nav-method">GET</div>
                    <div className="api-nav-path">/api/basic_info</div>
                  </Link>
                  <Link to="/interests" className="api-nav-link">
                    <div className="api-nav-method">GET</div>
                    <div className="api-nav-path">/api/interests</div>
                  </Link>
                  <Link to="/projects" className="api-nav-link">
                    <div className="api-nav-method">GET</div>
                    <div className="api-nav-path">/api/projects</div>
                  </Link>
                  <Link to="/contact" className="api-nav-link">
                    <div className="api-nav-method">POST</div>
                    <div className="api-nav-path">/api/contact</div>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default HomePage
