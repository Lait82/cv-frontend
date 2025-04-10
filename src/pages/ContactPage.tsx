"use client"

import type React from "react"
import ContactForm from "../components/ContactForm"
import ApiEndpointDoc from "../components/ApiEndpointDoc"
import "../styles/ContactPage.css"
import "../styles/EndpointPage.css"

const ContactPage: React.FC = () => {
  // Ejemplo de solicitud y respuesta para el endpoint
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
    <div className="endpoint-page">
      <h1 className="endpoint-page-title">Contact</h1>

      <div className="endpoint-page-content">
        <div className="endpoint-data">
          <ApiEndpointDoc
            method="POST"
            endpoint="/api/contact"
            description="Submits a contact form to get in touch."
            requestBody={contactExample}
            responseExample={contactResponseExample}
          />
        </div>

        <div className="endpoint-visualization">
          <h2 className="visualization-title">Let's Connect</h2>

          <div className="contact-intro">
            <p>Interested in working together or have any questions? Feel free to reach out using the form below.</p>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default ContactPage
