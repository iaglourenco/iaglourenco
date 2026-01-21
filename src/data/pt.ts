import type { CVData } from '@/types'

export const pt: CVData = {
  profile: {
    name: 'Iago Lourenço',
    role: 'Desenvolvedor Full Stack',
    location: 'Brasil',
    email: 'contact@iaglourenco.com',
    summary:
      'Desenvolvedor apaixonado com experiência em Vue.js, TypeScript e tecnologias web modernas. Dedicado a criar aplicações eficientes, escaláveis e amigáveis ao usuário.',
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/iaglourenco',
        icon: 'pi pi-github',
        type: 'social',
      },
      {
        label: 'LinkedIn',
        url: 'https://linkedin.com/in/iaglourenco',
        icon: 'pi pi-linkedin',
        type: 'social',
      },
    ],
  },
  skills: [
    {
      category: 'Frontend',
      skills: [
        { name: 'Vue.js', level: 'Especialista' },
        { name: 'TypeScript', level: 'Avançado' },
        { name: 'Tailwind CSS', level: 'Avançado' },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 'Avançado' },
        { name: 'Express', level: 'Intermediário' },
      ],
    },
  ],
  experience: [
    {
      company: 'Tech Corp',
      role: 'Desenvolvedor Sênior',
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
      description: 'Website de portfólio pessoal construído com Vue 3 e Tailwind.',
      technologies: ['Vue 3', 'Tailwind', 'TypeScript'],
      link: 'https://iaglourenco.com',
      repo: 'https://github.com/iaglourenco/iaglourenco',
    },
  ],
  contact: {
    email: 'contact@iaglourenco.com',
    message: 'Sinta-se à vontade para entrar em contato para colaborações ou oportunidades.',
  },
}
