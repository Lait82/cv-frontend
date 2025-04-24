export interface BasicInfo {
  firstname: string
  lastname: string
  email: string
  dob: string
  summary: string
  location: string
  github_profile: string
  linkedin_profile: string
}

export type InterestType =
  | "JIU_JITSU"
  | "TAEKWONDO_ITF"
  | "GUITAR"
  | "SINGING"
  | "ELECTRONICS"
  | "CYBERSECURITY"
  | "PROGRAMMING"

export interface Interest {
  id: number
  name: string
  notes: string
  level_or_degree: string
  years_of_practice: number
  img_logo?: string|null

}

export interface Project {
  id: number
  name: string
  description: string
  github_url?: string
  banner_img: string|null
}

export interface ContactForm {
  name: string
  email: string
  url?: string
  company: string
  contact_message: string
}
