import type { CVData } from '@/types'

export const en: CVData = {
  profile: {
    name: 'Iago Lourenço',
    role: 'Developer',
    location: 'Brazil',
    avatarUrl: 'https://avatars.githubusercontent.com/u/24625361?v=4',
    email: 'contact@iaglourenco.com',
    summary:
      'A Engineer passionate about transforming challenges into innovative, real-world solutions. I combine a strong foundation in software development with experience in auditing development processes, always aiming to improve quality, efficiency, and outcomes.',
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
        { name: 'Vue.js', level: 'Expert' },
        { name: 'TypeScript', level: 'Advanced' },
        { name: 'Tailwind CSS', level: 'Advanced' },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 'Advanced' },
        { name: 'Express', level: 'Intermediate' },
      ],
    },
  ],
  experience: [
    {
      company: 'Tech Corp',
      role: 'Senior Developer',
      period: '2022 - Present',
      location: 'Remote',
      description: 'Leading the frontend team in migration to Vue 3.',
      technologies: ['Vue 3', 'TypeScript', 'Vite'],
    },
    {
      company: 'StartUp Inc',
      role: 'Frontend Developer',
      location: 'Remote',
      period: '2020 - 2022',
      description: 'Developed main product dashboard.',
      technologies: ['React', 'Redux', 'Sass'],
    },
  ],
  projects: [
    {
      title: 'Portfolio V2',
      description:
        'Modern and responsive personal portfolio website showcasing my skills, experience, and projects.',
      technologies: ['Vue 3', 'Tailwind CSS', 'TypeScript', 'PrimeVue', 'Vite'],
      link: 'https://iaglourenco.com',
      repo: 'https://github.com/iaglourenco/iaglourenco',
      status: 'active',
      date: '2024',
      featured: true,
      highlights: [
        'Responsive design with mobile-first approach',
        'Dark mode support',
        'Multi-language (EN/PT)',
      ],
    },
    {
      title: 'Task Manager Pro',
      description:
        'Collaborative task management application with real-time updates and team workspace features.',
      technologies: ['Vue 3', 'Node.js', 'MongoDB', 'Socket.io'],
      repo: 'https://github.com/iaglourenco/task-manager',
      status: 'completed',
      date: '2023',
      highlights: ['Real-time collaboration', 'Drag & drop interface', 'Team management'],
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration and admin dashboard.',
      technologies: ['Vue 3', 'Express', 'PostgreSQL', 'Stripe'],
      status: 'completed',
      date: '2022',
      highlights: ['Payment processing', 'Inventory management', 'Analytics dashboard'],
    },
  ],
  contact: {
    email: 'contact@iaglourenco.com',
    message: 'Feel free to reach out for collaborations or opportunities.',
    linkedin: 'https://linkedin.com/in/iaglourenco',
    github: 'https://github.com/iaglourenco',
  },
}
