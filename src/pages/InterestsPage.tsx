"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { fetchInterests } from "../services/api"
import type { Interest } from "../types"
import InterestCard from "../components/InterestCard"
import ApiEndpointDoc from "../components/ApiEndpointDoc"
import "../styles/InterestsPage.css"
import "../styles/EndpointPage.css"

const InterestsPage: React.FC = () => {
  const [interests, setInterests] = useState<Interest[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const getInterests = async () => {
      try {
        const data = await fetchInterests()
        setInterests(data)
      } catch (err) {
        setError("Failed to load interests. Please try again later.")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    getInterests()
  }, [])

  // Ejemplo de respuesta para el endpoint
  const interestsExample = [
    {
      "id": "number",
      "level_or_degree": "string",
      "name": "string",
      "notes": "string",
      "years_of_practice": "number"
    },
    {
      "id": "number",
      "level_or_degree":"string",
      "name":"string",
      "notes":"string",
      "years_of_practice": "number"
    }
  ]

  return (
    <div className="endpoint-page">
      <h1 className="endpoint-page-title">Interests & Skills</h1>

      <div className="endpoint-page-content">
        <div className="endpoint-data">
          <ApiEndpointDoc
            method="GET"
            endpoint="/api/interests"
            description="Returns a list of interests and hobbies, including skill level and years of experience."
            responseExample={interestsExample}
          />
        </div>

        <div className="endpoint-visualization">
          <h2 className="visualization-title">Skills & Hobbies</h2>

          <div className="interests-intro">
            <p>
              Here are some of my interests and hobbies. I'm passionate about continuous learning and developing new
              skills in various areas.
            </p>
          </div>

          {loading ? (
            <div className="loading"></div>
          ) : error ? (
            <div className="error">{error}</div>
          ) : interests.length === 0 ? (
            <div className="no-interests">
              <p>No interests information available.</p>
            </div>
          ) : (
            <div className="interests-grid">
              {interests.map((interest) => (
                <InterestCard key={interest.id} interest={interest} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default InterestsPage
