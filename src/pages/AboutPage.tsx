"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { fetchBasicInfo } from "../services/api"
import type { BasicInfo } from "../types"
import ApiEndpointDoc from "../components/ApiEndpointDoc"
import "../styles/AboutPage.css"
import "../styles/EndpointPage.css"

const AboutPage: React.FC = () => {
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
      <h1 className="endpoint-page-title">About Me</h1>

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
          <h2 className="visualization-title">Profile Information</h2>

          {loading ? (
            <div className="loading"></div>
          ) : error ? (
            <div className="error">{error}</div>
          ) : !basicInfo ? (
            <div className="error">No information available.</div>
          ) : (
            <div className="about-content">
              <div className="about-image">
                <div className="pixel-portrait large"></div>
              </div>

              <div className="about-info">
                <div className="about-header">
                  <h2>
                    {basicInfo.firstname} {basicInfo.lastname}
                  </h2>
                  <i className="fa-solid fa"></i><p className="title">{"Backend Engineer"}</p>
                  {/* <p className="title">{basicInfo.title}</p> */}
                </div>

                <div className="about-summary">
                  <p>{basicInfo.summary}</p>
                </div>

                <div className="about-details">
                  <div className="detail-item">
                    <span className="detail-label">Location:</span>
                    <span className="detail-value">
                      <i className="fas fa-map-marker-alt" style={{marginRight:15}}></i>
                      {basicInfo.location}
                    </span>
                  </div>

                  <div className="detail-item">
                    <span className="detail-label">Email:</span>
                    <span className="detail-value">
                      <a href={`mailto:${basicInfo.email}`}>
                        <i className="fas fa-envelope" style={{marginRight:15}}></i>
                        {basicInfo.email}
                      </a>
                    </span>
                  </div>
                </div>


                  <div className="social-links">
                      <a
                        href={basicInfo.github_profile}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                      >
                        <i className="fab fa-github"></i>
                      </a>

                      <a
                        href={basicInfo.linkedin_profile}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                  </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AboutPage
