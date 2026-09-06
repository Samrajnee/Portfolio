// Central type definitions. Every data file in /src/data must conform
// to one of these shapes. Add a field here first, then it becomes
// available (and type-checked) everywhere that data is used.

export interface Profile {
  name: string;
  role: string; // e.g. "Computer Science Engineer"
  location: string;
  email: string;
  phone?: string;
  linkedin: string;
  github: string;
  resumeUrl: string; // path to the downloadable PDF in /public
  summary: string; // short bio for hero / about
  photoUrl: string;
}

export interface Project {
  id: string; // slug, used as React key - keep stable once set
  title: string;
  status?: string; // e.g. "Pre-MVP · Testing Phase"
  period: string; // e.g. "2024 to Present"
  description: string[]; // one entry per bullet point
  stack: string[];
  githubUrl?: string;
  liveUrl: string; // always present - every project ships to a live URL
  stage?: "live" | "in-progress"; // compact tag shown next to the title
  featured?: boolean; // true = shown prominently (e.g. CampusChain)
}

export interface ExperienceRole {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  bullets: string[];
  credentialUrl?: string;
}

export interface Experience {
  id: string;
  role: string; // fallback title used only when `roles` below is absent
  organisation: string;
  location: string;
  startDate: string;
  endDate: string;
  bullets: string[];
  credentialUrl?: string;
  roles?: ExperienceRole[];
}

export interface EducationEntry {
  id: string;
  degree: string;
  institution: string;
  location?: string;
  startDate: string;
  endDate: string;
  detail?: string; // freeform fallback text
  credentials?: string[]; // e.g. "SGPA 8.83" - shown as small tags
  coursework?: string[]; // relevant coursework - shown as small tags
  activities?: string[]; // clubs, societies, notable degree-period projects
}

export interface SkillGroup {
  category: string; // "Languages", "Frontend", "Databases", etc.
  items: string[];
}

export interface Language {
  name: string;
  level: string; // "Native (C2)", "Full professional (C1)"
}

export interface Achievement {
  id: string;
  title: string;
  category: "hackathon" | "achievement";
  organisation?: string;
  date?: string;
  description?: string;
}

export interface Hobby {
  name: string;
  note?: string;
}

export interface OpenSourceContribution {
  id: string;
  project: string;
  description: string;
  url?: string;
  date?: string;
}