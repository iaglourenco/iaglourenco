import type { CVData } from '@/types'

export const pt: CVData = {
  profile: {
    name: 'Iago Lourenço',
    role: 'Engenheiro de Software',
    location: 'Brasil',
    email: 'iagojlourenco@gmail.com',
    avatarUrl: 'https://avatars.githubusercontent.com/u/24625361?v=4',
    summary:
      'Engenheiro com interesse em transformar desafios em soluções práticas e aplicáveis. Combino uma base sólida em desenvolvimento de software com experiência em auditoria de processos de desenvolvimento, sempre buscando melhorar a qualidade, a eficiência e os resultados.',
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/iaglourenco',
        icon: 'pi pi-github',
        type: 'social',
      },
      {
        label: 'LinkedIn',
        url: 'https://linkedin.com/in/iagolourenco',
        icon: 'pi pi-linkedin',
        type: 'contact',
      },
    ],
  },
  skills: [
    {
      category: 'Desenvolvimento de Software',
      skills: [
        { name: 'JavaScript / TypeScript', level: 'Avançado' },
        { name: 'Python', level: 'Avançado' },
        { name: 'Java', level: 'Intermediário' },
      ],
    },
    {
      category: 'Aplicações Frontend e Multiplataforma',
      skills: [
        { name: 'Vue.js', level: 'Avançado' },
        { name: 'Flutter', level: 'Avançado' },
        { name: 'HTML / CSS', level: 'Avançado' },
        { name: 'Tauri', level: 'Intermediário' },
      ],
    },
    {
      category: 'Backend, APIs e Serviços',
      skills: [
        { name: 'FastAPI', level: 'Avançado' },
        { name: 'Node.js', level: 'Intermediário' },
        { name: 'Firebase (Auth, RTDB, Firestore)', level: 'Avançado' },
      ],
    },
    {
      category: 'Arquitetura, Integração e DevOps',
      skills: [
        { name: 'Full-Stack Architecture', level: 'Avançado' },
        { name: 'System Modernization', level: 'Avançado' },
        { name: 'CI/CD (Jenkins)', level: 'Avançado' },
        { name: 'GitHub / GitLab', level: 'Avançado' },
      ],
    },
  ],
  experience: [
    {
      type: 'work',
      company: 'SiDi',
      role: 'Analista de Engenharia de Software',
      location: 'Campinas, Brasil',
      period: '2021 - Presente',
      description:
        'Atuando na automação de processos com Python, na auditoria de práticas ágeis em projetos comerciais e na criação, manutenção e suporte a pipelines de integração contínua. Também orientei o uso de código open source e gerenciei ambientes de desenvolvimento e versionamento.',
      technologies: ['Python', 'Tauri', 'Vue 3', 'FastAPI'],
    },
    {
      type: 'education',
      company: 'FIAP',
      location: 'Remoto',
      role: 'Inteligência Artificial para Desenvolvedores',
      period: '2025 - 2026',
      description:
        'Pós-graduação voltada a desenvolvedores, focada na criação de soluções e aplicações para problemas complexos utilizando técnicas avançadas de Inteligência Artificial e Machine Learning, incluindo ML em nuvem, Processamento de Linguagem Natural, algoritmos genéticos, LLMs e IA generativa.',
      technologies: ['Python', 'Machine Learning', 'AI', 'NLP', 'Visão Computacional'],
    },

    {
      type: 'other',
      role: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
      location: 'Online',
      company: 'Oracle',
      period: '2025',
      description:
        'Certificação que valida o conhecimento fundamental em conceitos de Inteligência Artificial (IA) e Machine Learning (ML), incluindo terminologia, casos de uso, princípios éticos e serviços de IA/ML na Oracle Cloud Infrastructure (OCI).',
    },
    {
      type: 'other',
      role: 'Sistema de Gerenciamento de Negócios (ERP) e plataforma E-commerce',
      company: 'Projeto Próprio',
      period: 'Presente',
      description:
        'Projeto pessoal envolvendo manutenção e evolução de uma aplicação Java legada, com posterior migração para uma arquitetura moderna utilizando Flutter no frontend e Firebase como backend (autenticação, banco de dados e integrações). Incluiu também o desenvolvimento de um e-commerce em Next.js, totalmente integrado aos demais sistemas, com foco em integração de serviços, consistência de dados, escalabilidade e modernização tecnológica.',
      technologies: ['Java', 'Flutter', 'Firebase', 'Next.js'],
    },
    {
      type: 'education',
      role: 'Scrum Master Formation',
      company: 'Agile Academy',
      location: 'Online',
      period: '2024',
      description:
        'Formação de Scrum Master focada em capacitar profissionais para liderar equipes ágeis, facilitando a adoção de práticas Scrum e promovendo a colaboração eficaz entre os membros da equipe.',
    },
    {
      type: 'education',
      role: 'Kanban System Design (KMP I)',
      company: 'Kanban University',
      location: 'Online',
      period: '2023',
      description:
        'Curso de introdução ao Kanban, abordando os princípios e práticas fundamentais para implementar o sistema Kanban em equipes e organizações, visando melhorar a eficiência e a entrega de valor.',
    },
    {
      type: 'education',
      company: 'Pontifícia Universidade Católica de Campinas',
      role: 'Bacharelado em Engenharia de Computação',
      location: 'Campinas, Brasil',
      period: '2016 - 2023',
      description:
        'Bacharelado em Engenharia de Computação, com formação sólida em Computação, Matemática e Eletrônica. Experiência no desenvolvimento, manutenção e coordenação de sistemas de hardware e software, incluindo automação e controle de processos, sistemas embarcados, definição de arquiteturas computacionais e integração de soluções para aplicações comerciais, industriais e científicas, com visão crítica sobre os impactos éticos e sociais da tecnologia.',
    },
  ],
  projects: [
    {
      title: 'autostride',
      description:
        'Projeto de Machine Learning focado em detecção de elementos em diagramas AWS usando YOLO.',
      technologies: ['Python', 'Machine Learning', 'YOLO'],
      repo: 'https://github.com/iaglourenco/autostride',
      status: 'active',
      date: '2026',
      featured: false,
      highlights: [
        'Aplicação prática de visão computacional',
        'Foco em reconhecimento de arquitetura AWS em diagramas',
        'Código Python voltado para ML avançado',
      ],
    },
    {
      title: 'EmoAct',
      description:
        'Sistema de detecção de emoções e atividades em vídeos, integrando LLMs e frameworks como LangChain/LangGraph.',
      technologies: ['Python', 'LLM', 'LangChain', 'LangGraph'],
      repo: 'https://github.com/iaglourenco/EmoAct',
      status: 'completed',
      date: '2026',
      featured: false,
      highlights: [
        'Combina processamento de vídeo com inteligência artificial',
        'Uso de modelos de linguagem e pipeline multimodal',
        'Potencial para aplicações de UX, saúde ou análise comportamental',
      ],
    },
    {
      title: 'CSD',
      description:
        'Compilador completo para a linguagem LPD (Linguagem de Programação Didática) desenvolvido inteiramente em JavaScript, incluindo uma máquina virtual para execução.',
      technologies: ['JavaScript', 'Compiler Design', 'HTML', 'CSS'],
      repo: 'https://github.com/iaglourenco/CSD',
      status: 'archived',
      date: '2022',
      link: 'https://iaglourenco.github.io/CSD',
      highlights: [
        'Análise léxica, sintática e semântica',
        'Geração de código para máquina virtual',
        'Interface web para depuração',
      ],
    },
    {
      title: 'van-gogh',
      description:
        'Implementação de algoritmos genéticos para recriação e evolução de imagens utilizando formas geométricas primitivas.',
      technologies: ['Python', 'Genetic Algorithms', 'Image Processing'],
      repo: 'https://github.com/iaglourenco/van-gogh',
      status: 'completed',
      date: '2021',
      highlights: [
        'Computação evolutiva',
        'Processamento de imagem',
        'Experimentação com IA generativa',
      ],
    },
    {
      title: 'PSTA',
      description:
        'Protocolo Simples para Transferência de Arquivos. Uma implementação de baixo nível de um protocolo de rede customizado.',
      technologies: ['C', 'Socket Programming', 'Network Protocols'],
      repo: 'https://github.com/iaglourenco/PSTA',
      status: 'archived',
      date: '2021',
      highlights: [
        'Programação de sockets em C',
        'Definição de protocolo customizado',
        'Manipulação de arquivos binários',
      ],
    },
    {
      title: 'CopEye',
      description:
        'Sistema de visão computacional para auxiliar na identificação de pessoas utilizando a técnica One-Shot para reconhecimento facial.',
      technologies: ['Python', 'OpenCV', 'Face Recognition', 'dlib'],
      repo: 'https://github.com/iaglourenco/CopEye',
      status: 'completed',
      date: '2020',
      featured: true,
      highlights: [
        'Reconhecimento facial One-Shot',
        'Detecção em tempo real',
        'Integração com webcam e vídeo',
      ],
    },
  ],
  contact: {
    email: 'iagojlourenco@gmail.com',
    message: 'Sinta-se à vontade para entrar em contato para colaborações ou oportunidades.',
    linkedin: 'https://linkedin.com/in/iagolourenco',
    github: 'https://github.com/iaglourenco',
  },
}
