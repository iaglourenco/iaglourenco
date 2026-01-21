export interface Link {
  url: string
  icon: string
  label: string
  type?: 'social' | 'contact' | 'other'
}

export interface Profile {
  name: string
  role: string
  location: string
  email: string
  avatarUrl?: string
  summary: string
  links: Link[]
}

export interface SkillItem {
  name: string
  level?: string
  icon?: string
}

export interface SkillGroup {
  category: string
  skills: SkillItem[]
}

export interface Experience {
  company: string
  role: string
  period: string
  location?: string
  description: string
  technologies?: string[]
}

export interface Project {
  title: string
  description: string
  technologies: string[]
  link?: string
  repo?: string
  imageUrl?: string
}

export interface ContactInfo {
  email: string
  linkedin?: string
  github?: string
  message?: string
}

export interface CVData {
  profile: Profile
  skills: SkillGroup[]
  experience: Experience[]
  projects: Project[]
  contact: ContactInfo
}
