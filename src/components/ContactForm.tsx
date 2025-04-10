"use client"

import type React from "react"
import { useState } from "react"
import type { ContactForm as ContactFormType } from "../types"
import { submitContactForm } from "../services/api"
import "../styles/ContactForm.css"

const initialFormState: ContactFormType = {
  name: "",
  email: "",
  company: "",
  url: "",
  contact_message: "",
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormType>(initialFormState)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formResponse, setFormResponse] = useState<{
    success: boolean
    message: string
  } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormResponse(null)

    try {
      const response = await submitContactForm(formData)
      setFormResponse(response)

      if (response.success) {
        setFormData(initialFormState)
      }
    } catch (error) {
      setFormResponse({
        success: false,
        message: "An unexpected error occurred. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="contact-form-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="company">Company</label>
          <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="url">Website/LinkedIn URL</label>
          <input type="url" id="url" name="url" value={formData.url} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="contact_message">Message *</label>
          <textarea
            id="contact_message"
            name="contact_message"
            value={formData.contact_message}
            onChange={handleChange}
            rows={15}
            required
          />
        </div>

        <button type="submit" className="submit-button" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

        {formResponse && (
          <div className={`form-response ${formResponse.success ? "success" : "error"}`}>{formResponse.message}</div>
        )}
      </form>
    </div>
  )
}

export default ContactForm
