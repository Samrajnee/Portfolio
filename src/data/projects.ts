import { Project } from "@/types";

export const projects: Project[] = [
  { 
    imageUrl: "/projects/campuschain-dashboard.png",
    id: "campuschain",
    title: "CampusChain: Campus Operating System",
    tagline:
      "A unified campus operating system replacing scattered tools with tamper-evident elections, QR-verified certificates, and a portable student record.",
    status: "MVP · Testing Phase · Potential Final-year Project",
    period: "2026",
    description: [
      "Architecting a unified platform to replace 5-10 disconnected tools (Google Forms, Excel, WhatsApp) that institutions rely on for governance, identity, and student operations, none of which produce a verifiable record.",
      "Core modules: tamper-evident elections with voter-token anonymity; digitally signed certificates with QR verification; XP ledger and badge engine; auto-generated student resume PDF from full activity history.",
      "Every student action feeds a portable, employer-shareable profile via a public verification link, eliminating credential fraud and paper trails.",
    ],
    stack: [
      "React", "Vite", "TailwindCSS", "Node.js", "Express", "Socket.IO",
      "PostgreSQL", "Redis", "Prisma ORM", "BullMQ", "JWT", "Nodemailer",
      "Passport.js", "Google OAuth2", "PDFKit",
    ],
    githubUrl: "https://github.com/Samrajnee/CampusChain",
    liveUrl: "https://github.com/Samrajnee/CampusChain",
    stage: "in-progress",
  },
  {
    imageUrl: "/projects/fundly-dashboard.jpeg",
    id: "fundly",
    title: "Fundly: Personal Finance Planner",
    tagline:
      "A personal finance platform helping first-time earners plan their salary, manage expenses, build savings, and understand their financial health.",
    status: "Development Phase",
    period: "2026",
    description: [
      "Building a full-stack financial planning platform for first-time earners and young professionals who want a structured way to manage their income, expenses, savings, and financial goals.",
      "Core modules: salary planning based on income and living situation; expense tracking with categorized transactions; monthly financial reviews; salary increment planning; financial health scoring; and net-worth tracking.",
      "Introduces lightweight AI-powered insights to turn monthly financial data into personalized explanations and actionable recommendations, while retaining rule-based fallbacks for reliable functionality.",
    ],
    stack: [
      "Next.js", "React", "TypeScript", "TailwindCSS", "Node.js", "Express",
      "PostgreSQL", "Prisma ORM", "JWT", "REST API", "Gemini API",
    ],
    githubUrl: "https://github.com/Samrajnee/Fundly",
    liveUrl: "https://github.com/Samrajnee/Fundly",
    stage: "in-progress",
  },
];