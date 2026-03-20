import {
  Globe,
  LayoutTemplate,
  MonitorSmartphone,
  Zap,
  Layers,
  Container
} from 'lucide-react'

export const personalInfo = {
  name: "Pedro Humberto Gama de Medeiros",
  role: "Full Stack Developer",
  shortBio: "Desenvolvedor full stack que gosta de criar aplicações web bem pensadas, com código organizado e experiências claras para quem usa.",
  about: "Sou um desenvolvedor full stack que gosta de transformar ideias em interfaces e sistemas funcionais. Tenho interesse especial por aplicações web modernas, boas práticas de desenvolvimento e soluções que sejam simples de entender, manter e evoluir.",
  email: "contato@pedrogama.dev", // mock
  github: "https://github.com/pedrogamadev",
  linkedin: "https://linkedin.com/in/pedrogamadev"
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
      { name: "Supabase", logo: "https://skillicons.dev/icons?i=supabase", role: "Backend e autenticação" },
      { name: "REST APIs", logo: "https://skillicons.dev/icons?i=postman", role: "Integração e contratos" }
    ]
  },
  {
    category: "Ferramentas & Deploy",
    items: [
      { name: "Git / GitHub", logo: "https://skillicons.dev/icons?i=git,github", role: "Controle de versão" },
      { name: "Vercel", logo: "https://skillicons.dev/icons?i=vercel", role: "Deploy e cloud" },
      { name: "Render", logo: "https://skillicons.dev/icons?i=render", role: "Hospedagem de serviços" }
    ]
  }
]

export const projects = [
  {
    id: "agendunas",
    title: "AgenDunas",
    context: "Plataforma de agendamento de trilhas",
    description: "Sistema desenvolvido para apoiar o agendamento de trilhas no Parque das Dunas, com controle de disponibilidade, reservas, trilhas e condutores. Foi um projeto importante para trabalhar integração entre front-end, regras de negócio e organização de dados.",
    tags: ["React", "TypeScript", "Node.js", "Prisma", "PostgreSQL"],
    image: "/mock-agendunas.webp", // Will mock with CSS if needed
    color: "from-green-500/20 to-emerald-900/40"
  },
  {
    id: "studiosyllgama",
    title: "Studio Syll Gama",
    context: "Plataforma Institucional e Educacional",
    description: "Projeto com foco em apresentar a proposta da marca e organizar informações sobre cursos presenciais e online. Aqui trabalhei principalmente a estrutura da interface, clareza de navegação e experiência de uso.",
    tags: ["React", "Tailwind CSS", "TypeScript", "Vite"],
    image: "/mock-syllgama.webp",
    color: "from-purple-500/20 to-violet-900/40"
  },
  {
    id: "curriculoclaro",
    title: "Currículo Claro",
    context: "SaaS de Gerador de Currículos",
    description: "Aplicação web para criação de currículos com formulários dinâmicos, visualização em tempo real e geração de PDF no client-side. Foi um projeto que exigiu bastante cuidado com usabilidade e organização de estado na interface.",
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
