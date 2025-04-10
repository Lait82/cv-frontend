import type React from "react"
import ApiEndpointDoc from "../components/ApiEndpointDoc"
import "../styles/ApiDocsPage.css"

const ApiDocsPage: React.FC = () => {
  // Ejemplos de respuestas para cada endpoint
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

  const projectsExample = [
    {
      description: "string",
      github_url: "string",
      id: "number",
      name: "string",
    },
    {
      description: "string",
      github_url: "string",
      id: "number",
      name: "string",
    },
  ]

  const contactExample = {
    firstname: "Jane",
    lastname: "Smith",
    email: "jane.smith@example.com",
    url: "https://linkedin.com/in/janesmith",
    contact_message: "I'm interested in discussing a potential project.",
  }

  const contactResponseExample = {
    success: true,
    message: "Message sent successfully!",
  }

  return (
    <div className="api-docs-page">
      <h1 className="section-title">API Documentation</h1>

      <p className="api-docs-intro">
        This documentation provides information about the available endpoints in the API. You can try out each endpoint
        to see the actual response.
      </p>

      <div className="api-endpoints">
        <ApiEndpointDoc
          method="GET"
          endpoint="/api/basic_info"
          description="Returns basic information about the person, including name, contact details, and summary."
          responseExample={basicInfoExample}
        />

        <ApiEndpointDoc
          method="GET"
          endpoint="/api/interests"
          description="Returns a list of interests and hobbies, including skill level and years of experience."
          responseExample={interestsExample}
        />

        <ApiEndpointDoc
          method="GET"
          endpoint="/api/projects"
          description="Returns a list of projects. Can be filtered by interest type using the query parameter 'interests'."
          responseExample={projectsExample}
        />

        <ApiEndpointDoc
          method="POST"
          endpoint="/api/contact"
          description="Submits a contact form to get in touch."
          requestBody={contactExample}
          responseExample={contactResponseExample}
        />
      </div>
    </div>
  )
}

export default ApiDocsPage
