import type { BasicInfo, Interest, Project, ContactForm, InterestType } from "../types"

// const API_URL = process.env.REACT_APP_API_URL || ""


export const fetchBasicInfo = async (): Promise<BasicInfo> => {
  try {
    // const response = await fetch(`${API_URL}/api/basic_info`)
    const response = await fetch(`/api/basic_info`)
    if (!response.ok) {
      throw new Error("Failed to fetch basic info")
    }
    return await response.json()
  } catch (error) {
    console.error("Error fetching basic info:", error)
    throw error
  }
}

export const fetchInterests = async (): Promise<Interest[]> => {
  try {
    const response = await fetch(`/api/interests`)
    if (!response.ok) {
      throw new Error("Failed to fetch interests")
    }
    return await response.json()
  } catch (error) {
    console.error("Error fetching interests:", error)
    throw error
  }
}

export const fetchProjects = async (interestFilter?: InterestType): Promise<Project[]> => {
  try {
    const url = interestFilter ? `/api/projects?interests=${interestFilter}` : `/api/projects`

    const response = await fetch(url)
    if (!response.ok) {
      throw new Error("Failed to fetch projects")
    }
    return await response.json()
  } catch (error) {
    console.error("Error fetching projects:", error)
    throw error
  }
}

export const submitContactForm = async (formData: ContactForm): Promise<{ success: boolean; message: string }> => {
  try {
    const response = await fetch(`/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message || "Failed to submit contact form")
    }

    return {
      success: true,
      message: data.message || "Message sent successfully!",
    }
  } catch (error) {
    console.error("Error submitting contact form:", error)
    return {
      success: false,
      message: error instanceof Error ? error.message : "An unknown error occurred",
    }
  }
}
