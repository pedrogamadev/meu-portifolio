import { Globe, LayoutTemplate, MonitorSmartphone, Zap, Layers, Container } from 'lucide-react'
import catalogoImg from '@/assets/projetos/catalogo.png'
import curriculoImg from '@/assets/projetos/curriculo.png'
import type { Experience } from './pt'

export const personalInfo = {
  name: "Pedro Humberto Gama de Medeiros",
  role: "Full Stack Developer",
  shortBio: "Full stack developer who enjoys creating well-thought-out web applications with organized code and clear experiences for users.",
  about: "I'm a full stack developer who enjoys transforming ideas into functional interfaces and systems. I have a special interest in modern web applications, good development practices, and solutions that are simple to understand, maintain, and evolve.",
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

export const projects = [
  {
    id: "catalogofacil",
    title: "Catálogo Fácil",
    context: "B2B Catalog SaaS",
    description: "B2B catalog SaaS that allows businesses to register products and customize their own menu without needing development.",
    tags: ["React", "TypeScript", "Node.js", "Prisma", "PostgreSQL"],
    image: catalogoImg,
    color: "from-green-500/20 to-emerald-900/40",
    url: "https://www.catalogofacil.shop/"
  },
  {
    id: "supinoapp",
    title: "Supino App",
    context: "SaaS for Personal Trainers and Students",
    description: "Platform focused on intermediating the relationship between teacher and student for registering and tracking workouts (in development).",
    tags: ["React", "Tailwind CSS", "TypeScript", "Vite"],
    color: "from-purple-500/20 to-violet-900/40",
    url: "https://supino-app.vercel.app/"
  },
  {
    id: "curriculoclaro",
    title: "Currículo Claro",
    context: "Resume Generator SaaS",
    description: "Simple serverless system that asks objective questions to the user to create an already formatted resume, without images (ATS-friendly) to pass better in automated screenings, focusing on clarity and objectivity.",
    tags: ["React", "TypeScript", "Shadcn/UI", "Tailwind CSS"],
    image: curriculoImg,
    color: "from-blue-500/20 to-cyan-900/40",
    url: "https://curriculo-claro.vercel.app/",
    github: "https://github.com/pedrogamadev/Curriculo-Claro.git"
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
