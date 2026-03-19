import {
  Code2,
  Database,
  Globe,
  LayoutTemplate,
  Server,
  Terminal,
  MonitorSmartphone,
  Zap,
  Layers,
  Container,
  GitBranch,
  Cloud
} from 'lucide-react'

export const personalInfo = {
  name: "Pedro Humberto Gama de Medeiros",
  role: "Full Stack Developer",
  shortBio: "Construindo aplicações web modernas, escaláveis e orientadas à performance.",
  about: "Sou um desenvolvedor full stack focado em criar produtos digitais de alta performance, com experiência em arquiteturas modernas e interfaces que entregam excelente experiência ao usuário.",
  email: "contato@pedrogama.dev", // mock
  github: "https://github.com/pedrogamadev",
  linkedin: "https://linkedin.com/in/pedrogamadev"
}

export const highlights = [
  { id: 1, title: "Aplicações Web Modernas", icon: Globe },
  { id: 2, title: "Foco em Performance", icon: Zap },
  { id: 3, title: "Arquitetura Limpa", icon: Layers },
  { id: 4, title: "Entregas Orientadas a Valor", icon: LayoutTemplate }
]

export const stacks = [
  {
    category: "Front-end",
    items: [
      { name: "React", icon: Code2, role: "Biblioteca de interface" },
      { name: "TypeScript", icon: Terminal, role: "Tipagem forte" },
      { name: "JavaScript", icon: Terminal, role: "Linguagem Base" },
      { name: "Tailwind CSS", icon: LayoutTemplate, role: "Estilização utilitária" }
    ]
  },
  {
    category: "Back-end & DB",
    items: [
      { name: "Node.js", icon: Server, role: "Runtime backend" },
      { name: "Prisma ORM", icon: Database, role: "Acesso a dados" },
      { name: "PostgreSQL", icon: Database, role: "Banco de dados relacional" },
      { name: "REST APIs", icon: Globe, role: "Integração e contratos" }
    ]
  },
  {
    category: "Ferramentas & Deploy",
    items: [
      { name: "Git / GitHub", icon: GitBranch, role: "Controle de versão" },
      { name: "Vercel", icon: Cloud, role: "Deploy e Cloud" }
    ]
  }
]

export const projects = [
  {
    id: "agendunas",
    title: "AgenDunas",
    context: "Plataforma de agendamento de trilhas",
    description: "Sistema completo para o Parque das Dunas com gestão de disponibilidade, reservas, trilhas e condutores. Foco total em otimização de APIs e uma experiência de usuário simples e eficiente para o público geral.",
    tags: ["React", "TypeScript", "Node.js", "Prisma", "PostgreSQL"],
    image: "/mock-agendunas.webp", // Will mock with CSS if needed
    color: "from-green-500/20 to-emerald-900/40"
  },
  {
    id: "studiosyllgama",
    title: "Studio Syll Gama",
    context: "Plataforma Institucional e Educacional",
    description: "Site completo com páginas institucionais, gestão de cursos presenciais e online, depoimentos e fluxo automatizado de contato. Otimizado para conversão e alta performance.",
    tags: ["React", "Tailwind CSS", "TypeScript", "Vite"],
    image: "/mock-syllgama.webp", 
    color: "from-purple-500/20 to-violet-900/40"
  },
  {
    id: "curriculoclaro",
    title: "Currículo Claro",
    context: "SaaS de Gerador de Currículos",
    description: "Plataforma web intuitiva para gerar currículos profissionais, limpos e customizáveis. Conta com formulários dinâmicos complexos, geração de PDF via client-side e preview em tempo real.",
    tags: ["React", "TypeScript", "Shadcn/UI", "Tailwind CSS"],
    image: "/mock-curriculo.webp",
    color: "from-blue-500/20 to-cyan-900/40"
  }
]

export const experience = [
  {
    id: 1,
    year: "Atual",
    title: "Desenvolvedor Full Stack Independente",
    description: "Criação de soluções sob medida como SaaS, plataformas de agendamento e sites de alta performance. Desenvolvimento de ponta a ponta desde validação até o deploy."
  },
  {
    id: 2,
    year: "Anterior",
    title: "Desenvolvedor de Software",
    description: "Desenvolvimento e manutenção de sistemas complexos, APIs REST, modelagem de banco de dados e interfaces reativas."
  }
]

export const productMindset = [
  {
    title: "Arquitetura Escalável",
    description: "Sistemas desenhados para crescer com a demanda, garantindo manutenção fácil e alta coesão.",
    icon: Container
  },
  {
    title: "Foco em SaaS & Dashboard",
    description: "Fluidez na navegação, gestão inteligente de estado e métricas claras para tomadores de decisão.",
    icon: MonitorSmartphone
  },
  {
    title: "Produção Rápida",
    description: "Mentalidade lean focado no time-to-market. Códgo pronto para produção desde o day-one.",
    icon: Zap
  }
]
