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

export const experience = [
  {
    id: 1,
    year: "Atual",
    title: "Desenvolvedor Full Stack Independente",
    description: "Atuando no desenvolvimento de aplicações web completas, participando desde a definição da estrutura até a implementação de interfaces, APIs, banco de dados e deploy."
  },
  {
    id: 2,
    year: "Anterior",
    title: "Desenvolvedor de Software",
    description: "Experiência com desenvolvimento e manutenção de sistemas, criação de APIs REST, modelagem de banco de dados e construção de interfaces reativas."
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
