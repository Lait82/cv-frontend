"use client"

import type React from "react"
import { useState } from "react"
import "../styles/ApiEndpointDoc.css"

interface ApiEndpointDocProps {
  method: "GET" | "POST" | "PUT" | "DELETE"
  endpoint: string
  description: string
  requestBody?: any
  responseExample?: any
}

const ApiEndpointDoc: React.FC<ApiEndpointDocProps> = ({
  method,
  endpoint,
  description,
  requestBody,
  responseExample,
}) => {
  const [response, setResponse] = useState<any>(responseExample)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const fetchEndpoint = async () => {
    setLoading(true)
    setError(null)

    try {
      const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001"
      const url = `${API_URL}${endpoint}`

      const options: RequestInit = {
        method,
        headers: {
          "Content-Type": "application/json",
        },
      }

      if (method !== "GET" && requestBody) {
        options.body = JSON.stringify(requestBody)
      }

      const res = await fetch(url, options)
      const data = await res.json()

      setResponse(data)
    } catch (err) {
      setError("Failed to fetch endpoint")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const getMethodColor = () => {
    switch (method) {
      case "GET":
        return "method-get"
      case "POST":
        return "method-post"
      case "PUT":
        return "method-put"
      case "DELETE":
        return "method-delete"
      default:
        return ""
    }
  }

  return (
    <div className="api-endpoint-doc">
      <div className="endpoint-header">
        <div className={`endpoint-method ${getMethodColor()}`}>{method}</div>
        <div className="endpoint-path">{endpoint}</div>
      </div>

      <div className="endpoint-description">{description}</div>

      {requestBody && (
        <div className="endpoint-section">
          <h4>Request Body:</h4>
          <pre className="code-block">{JSON.stringify(requestBody, null, 2)}</pre>
        </div>
      )}

      <div className="endpoint-section">
        <h4>Response:</h4>
        <pre className="code-block response-block">{JSON.stringify(response, null, 2)}</pre>
      </div>

      <div className="endpoint-actions">
        <button className="try-button" onClick={fetchEndpoint} disabled={loading}>
          {loading ? "Loading..." : "Try it out"}
        </button>

        {response && (
          <button className="toggle-response" onClick={() => setResponse(responseExample)}>
            {"Clear Response"}
          </button>
        )}
      </div>

      {error && <div className="endpoint-error">{error}</div>}
    </div>
  )
}

export default ApiEndpointDoc
