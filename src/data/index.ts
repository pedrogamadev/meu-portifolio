import {
  Globe,
  LayoutTemplate,
  MonitorSmartphone,
  Zap,
  Layers,
  Container
} from 'lucide-react'

import catalogoImg from '@/assets/projetos/catalogo.png'
import curriculoImg from '@/assets/projetos/curriculo.png'

export const personalInfo = {
  name: "Pedro Humberto Gama de Medeiros",
  role: "Full Stack Developer",
  shortBio: "Desenvolvedor full stack que gosta de criar aplicações web bem pensadas, com código organizado e experiências claras para quem usa.",
  about: "Sou um desenvolvedor full stack que gosta de transformar ideias em interfaces e sistemas funcionais. Tenho interesse especial por aplicações web modernas, boas práticas de desenvolvimento e soluções que sejam simples de entender, manter e evoluir.",
  email: "pedrohumbertody@gmail.com",
  github: "https://github.com/pedrogamadev",
  linkedin: "https://www.linkedin.com/in/pedro-humberto-59719429a",
  whatsapp: "https://wa.me/5584991926432",
  instagram: "https://instagram.com/pedro_humbertoo"
}

export const highlights = [
  { id: 1, title: "Aplicações Web Modernas", icon: Globe },
  { id: 2, title: "Atenção a Performance", icon: Zap },
  { id: 3, title: "Código Organizado", icon: Layers },
  { id: 4, title: "Aprendizado Contínuo", icon: LayoutTemplate }
]

export const stacks = [
  {
    category: "Front-end",
    items: [
      { name: "React", logo: "https://skillicons.dev/icons?i=react", role: "Biblioteca de interface" },
      { name: "TypeScript", logo: "https://skillicons.dev/icons?i=ts", role: "Tipagem forte" },
      { name: "JavaScript", logo: "https://skillicons.dev/icons?i=js", role: "Linguagem base" },
      { name: "Tailwind CSS", logo: "https://skillicons.dev/icons?i=tailwind", role: "Estilização utilitária" }
    ]
  },
  {
    category: "Back-end & DB",
    items: [
      { name: "Node.js", logo: "https://skillicons.dev/icons?i=nodejs", role: "Runtime backend" },
      { name: "Prisma ORM", logo: "https://skillicons.dev/icons?i=prisma", role: "Acesso a dados" },
      { name: "PostgreSQL", logo: "https://skillicons.dev/icons?i=postgres", role: "Banco de dados relacional" },
      { name: "REST APIs", logo: "https://skillicons.dev/icons?i=postman", role: "Integração e contratos" }
    ]
  },
  {
    category: "Ferramentas & Deploy",
    items: [
      { name: "Git", logo: "https://skillicons.dev/icons?i=git", role: "Versionamento local" },
      { name: "GitHub", logo: "https://skillicons.dev/icons?i=github", role: "Colaboração e repositórios" },
      { name: "Vercel", logo: "https://skillicons.dev/icons?i=vercel", role: "Deploy e cloud" },
      { name: "Render", logo: "/render-white.svg", role: "Hospedagem de serviços" }
    ]
  }
]

export const projects = [
  {
    id: "catalogofacil",
    title: "Catálogo Fácil",
    context: "SaaS de catálogo B2B",
    description: "SaaS de catálogo B2B que permite cadastrar produtos e personalizar o próprio cardápio sem necessidade de desenvolvimento.",
    tags: ["React", "TypeScript", "Node.js", "Prisma", "PostgreSQL"],
    image: catalogoImg,
    color: "from-green-500/20 to-emerald-900/40",
    url: "https://www.catalogofacil.shop/"
  },
  {
    id: "supinoapp",
    title: "Supino App",
    context: "SaaS para Personal Trainers e Alunos",
    description: "Plataforma focada em intermediar a relação entre professor e aluno para o cadastro e acompanhamento de treinos (em desenvolvimento).",
    tags: ["React", "Tailwind CSS", "TypeScript", "Vite"],
    color: "from-purple-500/20 to-violet-900/40",
    url: "https://supino-app.vercel.app/"
  },
  {
    id: "curriculoclaro",
    title: "Currículo Claro",
    context: "SaaS de Gerador de Currículos",
    description: "Sistema simples sem servidor que faz perguntas objetivas ao usuário para criar um currículo já formatado, sem imagens (ATS-friendly) para passar melhor nas triagens automatizadas, focando na clareza e objetividade.",
    tags: ["React", "TypeScript", "Shadcn/UI", "Tailwind CSS"],
    image: curriculoImg,
    color: "from-blue-500/20 to-cyan-900/40",
    url: "https://curriculo-claro.vercel.app/",
    github: "https://github.com/pedrogamadev/Curriculo-Claro.git"
  }
]

export type ExperienceType = "current" | "parallel" | "business" | "previous"

export interface Experience {
  id: number
  type: ExperienceType
  role: string
  company: string
  period: string
  description: string
}

export const experience: Experience[] = [
  {
    id: 1,
    type: "current",
    role: "Desenvolvedor Full Stack Estagiário",
    company: "SEEC",
    period: "Set/2025 — Atual",
    description: "Atuação no desenvolvimento e manutenção de sistemas web internos. Trabalho diariamente com construção de interfaces, integração e estruturação de APIs, modelagem de banco de dados e criação de dashboards, garantindo correções e melhorias contínuas nas demandas da secretaria."
  },
  {
    id: 2,
    type: "parallel",
    role: "Freelancer em Desenvolvimento Web",
    company: "Atuação Independente",
    period: "2025 — Atual",
    description: "Criação de landing pages, portfólios, sistemas web e soluções customizadas sob demanda para clientes. Foco em arquitetar o projeto do zero ao deploy, entregando código organizado e interfaces funcionais."
  },
  {
    id: 3,
    type: "business",
    role: "Fundador / Gestor",
    company: "Loja Própria de Suplementos",
    period: "Duração de ~1 ano",
    description: "Responsável integral pela gestão, operação e vendas do negócio. Essa vivência empreendedora desenvolveu uma forte visão pragmática sobre o que realmente importa em um produto e como organizar rotinas comerciais eficientes."
  },
  {
    id: 4,
    type: "previous",
    role: "Vendedor",
    company: "Seu Natural",
    period: "Até Fev/2025",
    description: "Atuação direta na linha de frente do atendimento ao público e rotina comercial. Experiência fundamental para o desenvolvimento de comunicação clara, negociação e agilidade na resolução de problemas reais de clientes."
  }
]

export const productMindset = [
  {
    title: "Organização do Código",
    description: "Gosto de construir projetos com estrutura clara, separação de responsabilidades e código que continue fácil de manter com o tempo.",
    icon: Container
  },
  {
    title: "Experiência de Uso",
    description: "Dou bastante atenção à navegação, legibilidade da interface e aos detalhes que deixam a experiência mais simples para quem usa.",
    icon: MonitorSmartphone
  },
  {
    title: "Evolução Constante",
    description: "Valorizo aprender com cada projeto, revisar escolhas técnicas e evoluir tanto na escrita de código quanto na forma de resolver problemas.",
    icon: Zap
  }
]
