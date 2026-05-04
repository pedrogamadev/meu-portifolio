import { Globe, LayoutTemplate, MonitorSmartphone, Zap, Layers, Container } from 'lucide-react'
export interface Project {
  id: string
  title: string
  context: string
  description: string
  longDescription?: string
  subtitle?: string
  status?: string
  tags: string[]
  color: string
  url?: string
  github?: string
  audience?: string
  viableFor?: string
  acknowledgments?: {
    name: string;
    github: string;
    text: string;
  };
}

export const personalInfo = {
  name: "Pedro Humberto Gama de Medeiros",
  role: "Full Stack Developer",
  shortBio: "Desenvolvedor full stack que gosta de criar aplicações web bem pensadas, com código organizado e experiências claras para quem usa.",
  about: "Sou Pedro Gama, desenvolvedor full stack em Natal/RN, com foco em aplicações web modernas usando React, TypeScript, Node.js, Prisma e PostgreSQL.\n\nGosto de atuar além da tela: entender a regra de negócio, estruturar o banco de dados, construir APIs, cuidar da experiência do usuário e entregar soluções simples de manter, performáticas e prontas para produção.",
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

export const projects: Project[] = [
  {
    id: "catalogofacil",
    title: "Catálogo Fácil",
    context: "SaaS de catálogo B2B",
    description: "SaaS de catálogo B2B para cadastrar produtos, personalizar a vitrine e facilitar pedidos via catálogo digital com foco em uso simples e rápido.",
    longDescription: `O Catálogo Fácil é um SaaS B2B multi-tenant para digitalização de catálogos, com foco em pequenos e médios negócios que vendem para outras empresas. A solução foi projetada para separar claramente a operação de cada loja (tenant), garantindo isolamento de dados, escalabilidade e gestão centralizada.

## Stack e arquitetura
- Frontend: React + TypeScript, com interface administrativa para gestão de catálogo, tema, equipe e configurações.
- Backend: Node.js com Prisma ORM, organizado por módulos de domínio (catálogo, delivery, usuários, billing e administração).
- Banco de dados: PostgreSQL, com modelagem voltada para multi-tenant e relacionamento entre lojas, itens, categorias, assinaturas e transações.
- Entrega: arquitetura orientada a APIs REST, com autenticação, controle de permissões e integração entre painéis admin/master e catálogo público.

## Funcionalidades principais
- Gestão completa de catálogo (categorias, itens, disponibilidade, personalização visual e QR Code de acesso).
- Modo catálogo e modo delivery com carrinho e envio de pedido via WhatsApp.
- Área administrativa com indicadores operacionais e configuração de regras da loja.
- Gestão de assinatura com histórico de cobranças e acompanhamento de status no painel.

## Pagamentos e billing
- Integração de cobrança recorrente com **API Karvix PAY** para pagamentos via **PIX**.
- Fluxo de assinatura com estados de teste, cobrança pendente, ativo e renovação.
- Registro de transações para auditoria, rastreabilidade e suporte operacional.

## Diferenciais técnicos
- Estrutura preparada para escala SaaS (multi-tenant com isolamento por cliente).
- Regras de negócio centralizadas no backend para consistência entre painéis e catálogo público.
- Foco em usabilidade: operação simples para o lojista e configuração rápida de catálogo digital.`,
    status: "Em produção",
    tags: ["React", "TypeScript", "Node.js", "Prisma", "PostgreSQL"],
    color: "from-green-500/20 to-emerald-900/40",
    url: "https://www.catalogofacil.shop/",
    audience: "Pequenas e médias empresas que trabalham com vendas B2B — distribuidoras, representantes comerciais e atacadistas que precisam de uma forma mais organizada de compartilhar produtos com seus clientes.",
    viableFor: "Qualquer negócio que venda para outras empresas por catálogo, especialmente quem hoje usa PDF, WhatsApp ou planilhas para enviar listas de produtos. A plataforma é pensada para quem quer evoluir para algo mais profissional sem abrir mão da simplicidade.",
    acknowledgments: {
      name: "Flávia Regina",
      github: "flaviamarinho10",
      text: "Preciso agradecer a @flaviamarinho10 pela contribuição nesse projeto, ela é minha namorada e me ajudou no desenvolvimento visual, ideias e códigos."
    }
  },
  {
    id: "norteia",
    title: "NorteIa",
    context: "SaaS comercial com IA",
    description: "SaaS de gestão comercial multi-tenant focado no ciclo Lead → Proposta → Cliente → Projeto, com geração de propostas por IA.",
    longDescription: "NorteIa é um SaaS de gestão comercial multi-tenant para freelancers e microagências, em desenvolvimento ativo. O nome vem do verbo nortear: a proposta não é guardar dados — é orientar o profissional sobre o que precisa ser feito agora.\n\nO ciclo previsto vai do primeiro lead ao recibo final: captura de leads, geração de proposta com apoio de IA a partir do briefing bruto, aceite digital pelo cliente, kanban do projeto e dashboard financeiro com emissão de Recibo de Pagamento em PDF (sem NF-e e sem gateway no MVP — decisão consciente, registrada no escopo).\n\nO diferencial que está sendo construído em torno disso é a **Inbox de Ações**: uma fila priorizada que diz \"cobre essa parcela atrasada\", \"responde essa proposta visualizada\", \"libera esse projeto travado por sinal\" — com mensagem pronta para disparar no WhatsApp do cliente em um clique.\n\nA arquitetura é multi-tenant com isolamento por workspace (Personal e Studio), e o modelo de dados foi desenhado com LGPD desde o início — consentimento versionado, direito de exportação e anonimização do titular.",
    status: "EM DESENVOLVIMENTO · MVP em construção",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Gemini 2.0", "LGPD"],
    color: "from-violet-500/20 to-purple-900/40",
    audience: "Freelancers, designers, devs e microagências que hoje gerenciam o comercial em planilha, WhatsApp e cabeça — e que por isso perdem proposta no meio do caminho, esquecem follow-up e refazem orçamento do zero a cada lead.",
    viableFor: "Profissionais autônomos e times de 1 a 10 pessoas que precisam de uma ferramenta enxuta para conduzir o ciclo comercial — sem pagar pelo excesso de HubSpot ou Pipedrive, e sem a fricção de costurar Notion + Bonsai + Trello + planilha na mão.",
    acknowledgments: {
      name: "Freitas",
      github: "Freitas024",
      text: "Um agradecimento especial ao meu amigo @Freitas024, que está desenvolvendo esse sistema junto comigo. Tem sido uma parceria muito boa para dividir códigos e ideias na construção desse produto!"
    }
  },
  {
    id: "curriculoclaro",
    title: "Currículo Claro",
    context: "Gerador de currículos",
    description: "Ferramenta web para montar currículos claros, objetivos e ATS-friendly com foco em simplicidade e legibilidade.",
    longDescription: "O Currículo Claro surgiu da observação de que a maioria das ferramentas de criação de currículos prioriza design excessivo em detrimento da leitura por sistemas ATS (Applicant Tracking System) — o software que filtra candidatos antes de chegarem ao recrutador humano.\n\nA ferramenta guia o usuário em seções claras — dados pessoais, experiências, formação e habilidades — com formatação limpa e exportação em PDF otimizado para triagem automatizada.\n\nA interface foi construída com React, TypeScript, Shadcn/UI e Tailwind CSS. Toda a geração do PDF acontece direto no navegador, sem necessidade de backend.",
    status: "Em produção",
    tags: ["React", "TypeScript", "Shadcn/UI", "Tailwind CSS"],
    color: "from-blue-500/20 to-cyan-900/40",
    url: "https://curriculo-claro.vercel.app/",
    github: "https://github.com/pedrogamadev/Curriculo-Claro.git",
    audience: "Profissionais em busca de recolocação ou novos desafios que querem garantir que seu currículo passe pelos filtros automáticos e chegue ao RH.",
    viableFor: "Qualquer candidato, especialmente em tecnologia, administração e marketing, onde empresas maiores usam ATS para triagem. Ideal para quem não quer depender de designers ou templates pesados."
  },
  {
    id: "smp",
    title: "SMP",
    context: "Sistema administrativo",
    description: "Sistema web administrativo para monitorar projetos com autenticação, RBAC, CRUD e Kanban.",
    longDescription: "O SMP (Sistema de Monitoramento de Projetos) é uma plataforma administrativa web criada para centralizar o acompanhamento de projetos em uma única interface.\n\nConta com autenticação de usuários, controle de acesso baseado em papéis (RBAC), CRUD completo de projetos e tarefas, e um board Kanban para visualizar o fluxo de trabalho. A arquitetura foi projetada para suportar múltiplos usuários com níveis de permissão distintos.\n\nConstruído com React no frontend e Node.js no backend, com TypeScript em toda a stack.",
    status: "Em desenvolvimento",
    tags: ["React", "TypeScript", "Node.js", "RBAC"],
    color: "from-amber-500/20 to-orange-900/40",
    audience: "Gestores e líderes técnicos que precisam acompanhar o andamento de projetos e equipes sem depender de ferramentas caras ou complexas.",
    viableFor: "Pequenas equipes de desenvolvimento, agências digitais e empresas que gerenciam projetos internos e querem uma visão centralizada do status de cada entrega."
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
    company: "Secretaria de Estado da Educação, do Esporte e do Lazer do Rio Grande do Norte",
    period: "Set/2025 — Atual",
    description: "Atuação no desenvolvimento e manutenção de sistemas web internos. Trabalho diariamente com construção de interfaces, integração e estruturação de APIs, modelagem de banco de dados e criação de dashboards, garantindo correções e melhorias contínuas nas demandas da secretaria."
  },
  {
    id: 2,
    type: "parallel",
    role: "Desenvolvedor Full Stack Independente",
    company: "Arabella.dev — Projetos web e sistemas sob demanda",
    period: "2025 — Atual",
    description: "Desenvolvimento de landing pages, portfólios, sistemas administrativos e soluções web para clientes reais. Atuação em todo o ciclo do projeto: levantamento da necessidade, construção da interface, integração com backend, banco de dados, deploy e manutenção. Experiência prática que reforça minha capacidade de transformar problemas de negócio em produtos digitais funcionais, bem estruturados e prontos para uso."
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
