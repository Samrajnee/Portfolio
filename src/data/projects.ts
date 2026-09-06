import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "campuschain",
    title: "CampusChain: Campus Operating System",
    status: "MVP · Testing Phase · Potential Final-year Project",
    period: "2024 to Present",
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
    featured: true,
  },
];