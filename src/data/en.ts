import type { CVData } from '@/types'

export const en: CVData = {
  profile: {
    name: 'Iago Lourenço',
    role: 'Full Stack Developer',
    location: 'Brazil',
    email: 'contact@iaglourenco.com',
    summary:
      'Passionate developer with expertise in Vue.js, TypeScript, and modern web technologies. Dedicated to building efficient, scalable, and user-friendly applications.',
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
      description: 'Leading the frontend team in migration to Vue 3.',
      technologies: ['Vue 3', 'TypeScript', 'Vite'],
    },
    {
      company: 'StartUp Inc',
      role: 'Frontend Developer',
      period: '2020 - 2022',
      description: 'Developed main product dashboard.',
      technologies: ['React', 'Redux', 'Sass'],
    },
  ],
  projects: [
    {
      title: 'Portfolio V2',
      description: 'Personal portfolio website built with Vue 3 and Tailwind.',
      technologies: ['Vue 3', 'Tailwind', 'TypeScript'],
      link: 'https://iaglourenco.com',
      repo: 'https://github.com/iaglourenco/iaglourenco',
    },
  ],
  contact: {
    email: 'contact@iaglourenco.com',
    message: 'Feel free to reach out for collaborations or opportunities.',
  },
}
