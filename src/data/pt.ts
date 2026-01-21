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
        type: 'social',
      },
    ],
  },
  skills: [
    {
      category: 'Frontend',
      skills: [
        { name: 'Next.js', level: 'Intermediário' },
        { name: 'TypeScript', level: 'Intermediário' },
        { name: 'Tailwind CSS', level: 'Intermediário' },
        { name: 'Vue.js', level: 'Intermediário' },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Python', level: 'Avançado' },
        { name: 'FastAPI', level: 'Avançado' },
        { name: 'Node.js', level: 'Intermediário' },
      ],
    },
  ],
  experience: [
    {
      company: 'SiDi',
      role: 'Analista de Engenharia de Software Jr.',
      location: 'Campinas, Brasil',
      period: '2022 - Presente',
      description: 'Liderando a equipe de frontend na migração para Vue 3.',
      technologies: ['Vue 3', 'TypeScript', 'Vite'],
    },
    {
      company: 'StartUp Inc',
      role: 'Desenvolvedor Frontend',
      period: '2020 - 2022',
      description: 'Desenvolveu o painel principal do produto.',
      technologies: ['React', 'Redux', 'Sass'],
    },
  ],
  projects: [
    {
      title: 'Portfólio V2',
      description:
        'Website de portfólio pessoal moderno e responsivo apresentando minhas habilidades, experiência e projetos.',
      technologies: ['Vue 3', 'Tailwind CSS', 'TypeScript', 'PrimeVue', 'Vite'],
      link: 'https://iaglourenco.com',
      repo: 'https://github.com/iaglourenco/iaglourenco',
      status: 'active',
      date: '2024',
      featured: true,
      highlights: [
        'Design responsivo com abordagem mobile-first',
        'Suporte a modo escuro',
        'Multi-idioma (EN/PT)',
      ],
    },
    {
      title: 'Gerenciador de Tarefas Pro',
      description:
        'Aplicativo colaborativo de gerenciamento de tarefas com atualizações em tempo real e recursos de workspace em equipe.',
      technologies: ['Vue 3', 'Node.js', 'MongoDB', 'Socket.io'],
      repo: 'https://github.com/iaglourenco/task-manager',
      status: 'completed',
      date: '2023',
      highlights: ['Colaboração em tempo real', 'Interface drag & drop', 'Gestão de equipes'],
    },
    {
      title: 'Plataforma E-Commerce',
      description:
        'Solução full-stack de e-commerce com integração de pagamento e painel administrativo.',
      technologies: ['Vue 3', 'Express', 'PostgreSQL', 'Stripe'],
      status: 'completed',
      date: '2022',
      highlights: ['Processamento de pagamentos', 'Gestão de inventário', 'Dashboard de análises'],
    },
  ],
  contact: {
    email: 'contact@iaglourenco.com',
    message: 'Sinta-se à vontade para entrar em contato para colaborações ou oportunidades.',
    linkedin: 'https://linkedin.com/in/iaglourenco',
    github: 'https://github.com/iaglourenco',
  },
}
