import { Globe, LayoutTemplate, MonitorSmartphone, Zap, Layers, Container } from 'lucide-react'
import type { Experience, Project } from './pt'

export const personalInfo = {
  name: "Pedro Humberto Gama de Medeiros",
  role: "Full Stack Developer",
  shortBio: "Full stack developer who enjoys creating well-thought-out web applications with organized code and clear experiences for users.",
  about: "I'm Pedro Gama, a full stack developer in Natal/RN (Brazil), focusing on modern web applications using React, TypeScript, Node.js, Prisma, and PostgreSQL.\n\nI like to work beyond the screen: understanding business rules, structuring the database, building APIs, caring for the user experience, and delivering solutions that are easy to maintain, performant, and ready for production.",
  email: "pedrohumbertody@gmail.com",
  github: "https://github.com/pedrogamadev",
  linkedin: "https://www.linkedin.com/in/pedro-humberto-59719429a",
  whatsapp: "https://wa.me/5584991926432",
  instagram: "https://instagram.com/pedro_humbertoo"
}

export const highlights = [
  { id: 1, title: "Modern Web Apps", icon: Globe },
  { id: 2, title: "Performance Focus", icon: Zap },
  { id: 3, title: "Organized Code", icon: Layers },
  { id: 4, title: "Continuous Learning", icon: LayoutTemplate }
]

export const stacks = [
  {
    category: "Front-end",
    items: [
      { name: "React", logo: "https://skillicons.dev/icons?i=react", role: "UI Library" },
      { name: "TypeScript", logo: "https://skillicons.dev/icons?i=ts", role: "Strong Typing" },
      { name: "JavaScript", logo: "https://skillicons.dev/icons?i=js", role: "Core Language" },
      { name: "Tailwind CSS", logo: "https://skillicons.dev/icons?i=tailwind", role: "Utility Styling" }
    ]
  },
  {
    category: "Back-end & DB",
    items: [
      { name: "Node.js", logo: "https://skillicons.dev/icons?i=nodejs", role: "Backend Runtime" },
      { name: "Prisma ORM", logo: "https://skillicons.dev/icons?i=prisma", role: "Data Access" },
      { name: "PostgreSQL", logo: "https://skillicons.dev/icons?i=postgres", role: "Relational DB" },
      { name: "REST APIs", logo: "https://skillicons.dev/icons?i=postman", role: "Integration" }
    ]
  },
  {
    category: "Tools & Deploy",
    items: [
      { name: "Git", logo: "https://skillicons.dev/icons?i=git", role: "Version Control" },
      { name: "GitHub", logo: "https://skillicons.dev/icons?i=github", role: "Collaboration" },
      { name: "Vercel", logo: "https://skillicons.dev/icons?i=vercel", role: "Deploy & Cloud" },
      { name: "Render", logo: "/render-white.svg", role: "Hosting Services" }
    ]
  }
]

export const projects: Project[] = [
  {
    id: "catalogofacil",
    title: "Catálogo Fácil",
    context: "B2B Catalog SaaS",
    description: "B2B catalog SaaS to register products, customize the storefront, and streamline orders via digital catalog with a focus on simplicity and speed.",
    longDescription: `Catálogo Fácil is a multi-tenant B2B SaaS for digitizing catalogs, focused on small and medium-sized businesses that sell to other companies. The solution was designed to clearly separate the operations of each store (tenant), ensuring data isolation, scalability, and centralized management.

## Stack and Architecture
- Frontend: React + TypeScript, with an administrative interface for managing catalogs, themes, teams, and settings.
- Backend: Node.js with Prisma ORM, organized by domain modules (catalog, delivery, users, billing, and administration).
- Database: PostgreSQL, with modeling geared towards multi-tenancy and relationships between stores, items, categories, subscriptions, and transactions.
- Delivery: REST API-oriented architecture, with authentication, permission control, and integration between admin/master dashboards and the public catalog.

## Key Features
- Complete catalog management (categories, items, availability, visual customization, and access QR Code).
- Catalog mode and delivery mode with cart and order submission via WhatsApp.
- Administrative area with operational indicators and store rules configuration.
- Subscription management with billing history and status tracking in the dashboard.

## Payments and Billing
- Integration of recurring billing with **Karvix PAY API** for payments via **PIX**.
- Subscription flow with trial, pending billing, active, and renewal states.
- Transaction logging for auditing, traceability, and operational support.

## Technical Highlights
- Structure prepared for SaaS scale (multi-tenant with customer isolation).
- Business rules centralized in the backend for consistency between dashboards and the public catalog.
- Focus on usability: simple operation for the store owner and quick setup of the digital catalog.`,
    status: "Live",
    tags: ["React", "TypeScript", "Node.js", "Prisma", "PostgreSQL"],
    color: "from-green-500/20 to-emerald-900/40",
    url: "https://www.catalogofacil.shop/",
    audience: "Small and medium businesses working with B2B sales — distributors, sales reps, and wholesalers who need a more organized way to share products with their clients.",
    viableFor: "Any business that sells to other companies via catalog, especially those currently using PDFs, WhatsApp, or spreadsheets to send product lists. Built for those who want to move to something more professional without losing simplicity.",
    acknowledgments: {
      name: "Flávia Regina",
      github: "flaviamarinho10",
      text: "I want to thank @flaviamarinho10 for her contribution to this project; she is my girlfriend and helped me with the visual development, ideas, and code."
    }
  },
  {
    id: "curriculoclaro",
    title: "Currículo Claro",
    context: "Resume Generator",
    description: "Web tool to build clear, objective, ATS-friendly resumes focused on simplicity and readability.",
    longDescription: "Currículo Claro came from observing that most resume-building tools prioritize excessive design over readability by ATS (Applicant Tracking System) software — the tool that filters candidates before they reach a human recruiter.\n\nThe tool guides users through clear sections — personal info, experience, education, and skills — with clean formatting and PDF export optimized for automated screening.\n\nThe interface was built with React, TypeScript, Shadcn/UI, and Tailwind CSS. All PDF generation happens in the browser, with no backend required.",
    status: "Live",
    tags: ["React", "TypeScript", "Shadcn/UI", "Tailwind CSS"],
    color: "from-blue-500/20 to-cyan-900/40",
    url: "https://curriculo-claro.vercel.app/",
    github: "https://github.com/pedrogamadev/Curriculo-Claro.git",
    audience: "Professionals looking for new opportunities who want to make sure their resume gets past automated filters and reaches the hiring team.",
    viableFor: "Any job seeker, especially in tech, business, and marketing, where larger companies use ATS for screening. Ideal for those who don't want to rely on designers or heavy templates."
  },
  {
    id: "smp",
    title: "SMP",
    context: "Admin system",
    description: "Web admin system to monitor projects with authentication, RBAC, CRUD, and Kanban.",
    longDescription: "SMP (Project Monitoring System) is a web admin platform built to centralize project tracking in a single interface.\n\nIt includes user authentication, role-based access control (RBAC), full CRUD for projects and tasks, and a Kanban board to visualize workflow. The architecture was designed to support multiple users with distinct permission levels.\n\nBuilt with React on the frontend and Node.js on the backend, with TypeScript throughout the stack.",
    status: "In development",
    tags: ["React", "TypeScript", "Node.js", "RBAC"],
    color: "from-amber-500/20 to-orange-900/40",
    audience: "Managers and tech leads who need to track project and team progress without relying on expensive or complex tools.",
    viableFor: "Small dev teams, digital agencies, and companies managing internal projects who want a centralized view of the status of each delivery."
  },
  {
    id: "norteia",
    title: "NorteIA",
    context: "Commercial SaaS with AI",
    description: "Multi-tenant commercial management SaaS focused on the Lead → Proposal → Client → Project cycle, with AI-generated proposals and LGPD-oriented foundation.",
    longDescription: "NorteIA is a multi-tenant commercial management SaaS designed around the real workflow of freelancers and small agencies: from first contact with a lead to project completion.\n\nThe platform covers the full cycle — lead capture, proposal creation (with AI-assisted text generation), client management, and project tracking. The entire database was structured for LGPD compliance, ensuring client data is handled securely and transparently.\n\nThe multi-tenant architecture fully isolates each user's environment, with no interference between accounts.",
    subtitle: "For freelancers, liberal professionals, and micro-agencies.",
    status: "In development",
    tags: ["SaaS", "Multi-tenant", "AI", "LGPD"],
    color: "from-violet-500/20 to-purple-900/40",
    audience: "Freelancers, designers, developers, and micro-agencies currently managing their sales pipeline in spreadsheets, WhatsApp, or generic tools and losing track of the deal cycle.",
    viableFor: "Solo professionals or small agencies (1–10 people) who need a lean, integrated tool to manage leads, proposals, and projects — without paying for the excess features of platforms like HubSpot or Pipedrive."
  }
]

export const experience: Experience[] = [
  {
    id: 1,
    type: "current",
    role: "Full Stack Developer Intern",
    company: "SEEC",
    period: "Sep/2025 — Present",
    description: "Working on the development and maintenance of internal web systems. Daily work involves building interfaces, integrating and structuring APIs, database modeling, and creating dashboards, ensuring continuous fixes and improvements for department demands."
  },
  {
    id: 2,
    type: "parallel",
    role: "Freelance Web Developer",
    company: "Independent",
    period: "2025 — Present",
    description: "Creating landing pages, portfolios, web systems, and custom solutions on demand for clients. Focus on architecting the project from scratch to deploy, delivering organized code and functional interfaces."
  },
  {
    id: 3,
    type: "business",
    role: "Founder / Manager",
    company: "Own Supplement Store",
    period: "Duration ~1 year",
    description: "Fully responsible for management, operation, and sales of the business. This entrepreneurial experience developed a strong pragmatic vision on what really matters in a product and how to organize efficient commercial routines."
  },
  {
    id: 4,
    type: "previous",
    role: "Salesperson",
    company: "Seu Natural",
    period: "Until Feb/2025",
    description: "Direct action on the front line of customer service and commercial routine. Fundamental experience for developing clear communication, negotiation, and agility in solving real customer problems."
  }
]

export const productMindset = [
  {
    title: "Code Organization",
    description: "I like to build projects with clear structure, separation of concerns, and code that remains easy to maintain over time.",
    icon: Container
  },
  {
    title: "User Experience",
    description: "I pay close attention to navigation, interface readability, and the details that make the experience simpler for the user.",
    icon: MonitorSmartphone
  },
  {
    title: "Constant Evolution",
    description: "I value learning with each project, reviewing technical choices, and evolving both in code writing and problem-solving.",
    icon: Zap
  }
]
