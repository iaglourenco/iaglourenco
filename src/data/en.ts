import type { CVData } from '@/types'

export const en: CVData = {
  profile: {
    name: 'Iago Lourenço',
    role: 'Software Engineer',
    location: 'Brazil',
    avatarUrl: 'https://avatars.githubusercontent.com/u/24625361?v=5',
    email: 'iagojlourenco@gmail.com',
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
        url: 'https://linkedin.com/in/iagolourenco',
        icon: 'pi pi-linkedin',
        type: 'contact',
      },
    ],
  },
  skills: [
    {
      category: 'Software Development',
      skills: [
        { name: 'JavaScript / TypeScript', level: 'Advanced' },
        { name: 'Python', level: 'Advanced' },
        { name: 'Java', level: 'Intermediate' },
      ],
    },
    {
      category: 'Frontend and Multiplatform Applications',
      skills: [
        { name: 'Vue.js', level: 'Advanced' },
        { name: 'Flutter', level: 'Advanced' },
        { name: 'HTML / CSS', level: 'Advanced' },
        { name: 'Tauri', level: 'Intermediate' },
      ],
    },
    {
      category: 'Backend, APIs and Services',
      skills: [
        { name: 'FastAPI', level: 'Advanced' },
        { name: 'Node.js', level: 'Intermediate' },
        { name: 'Firebase', level: 'Advanced' },
      ],
    },
    {
      category: 'Architecture, Integration and DevOps',
      skills: [
        { name: 'Full-Stack Architecture', level: 'Advanced' },
        { name: 'System Modernization', level: 'Advanced' },
        { name: 'CI/CD (Jenkins)', level: 'Advanced' },
        { name: 'GitHub / GitLab', level: 'Advanced' },
      ],
    },
  ],
  experience: [
    {
      type: 'work',
      company: 'SiDi',
      role: 'Software Engineering Analyst',
      period: '2021 - Present',
      location: 'Campinas, Brazil',
      description:
        'Performing process automation using Python, audited agile practices in commercial projects, and designed, maintained, and supported continuous integration pipelines. Provided guidance on the use of open source code and managed development and versioning environments.',
      technologies: ['Python', 'Tauri', 'Vue 3', 'FastAPI'],
    },
    {
      type: 'education',
      company: 'FIAP',
      role: 'Artificial Intelligence for Developers',
      location: 'Remote',
      period: '2025 - 2026',
      description:
        'Postgraduate program aimed at developers, focused on building solutions and applications for complex problems using advanced Artificial Intelligence and Machine Learning techniques, including cloud-based ML, Natural Language Processing, genetic algorithms, large language models, and generative AI.',
      technologies: ['Python', 'Machine Learning', 'AI', 'NLP', 'Computer Vision'],
    },
    {
      type: 'other',
      role: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
      company: 'Oracle',
      period: '2025',
      location: 'Online',
      description:
        'Certification validating foundational knowledge of AI concepts and Oracle Cloud Infrastructure services related to AI, including machine learning, natural language processing, and computer vision.',
    },
    {
      type: 'other',
      role: 'Business Management Application (ERP) and E-Commerce Platform',
      company: 'Self-initiated',
      period: 'Present',
      description:
        'Personal project involving the maintenance and evolution of a legacy Java application, followed by migration to a modern architecture using Flutter for the frontend and Firebase as the backend (authentication, database, and integrations). It also included the development of a Next.js-based e-commerce fully integrated with the other systems, focusing on service integration, data consistency, scalability, and technology modernization.',
      technologies: ['Java', 'Flutter', 'Firebase', 'Next.js'],
    },
    {
      type: 'education',
      role: 'Scrum Master Formation',
      company: 'Agile Academy',
      location: 'Online',
      period: '2024',
      description:
        'Comprehensive Scrum Master training covering Agile principles, Scrum framework, team facilitation, and project management techniques to effectively lead Agile teams and deliver successful projects.',
    },
    {
      type: 'education',
      role: 'Kanban System Design (KMP I)',
      company: 'Kanban University',
      location: 'Online',
      period: '2023',
      description:
        'Certification that demonstrates knowledge and skills in Kanban principles, practices, and implementation strategies for effective workflow management and continuous improvement in various organizational contexts.',
    },
    {
      type: 'education',
      company: 'Pontifícia Universidade Católica de Campinas',
      role: 'Bachelor of Computer Engineering',
      location: 'Campinas, Brazil',
      period: '2016 - 2023',
      description:
        "Bachelor's degree in Computer Engineering, with a strong background in Computing, Mathematics, and Electronics. Experience in designing, developing, maintaining, and coordinating hardware and software systems, including automation and process control, embedded systems, computer architecture design, and integrated solutions for commercial, industrial, and scientific applications, with a critical perspective on the ethical and social impacts of technology.",
    },
  ],
  projects: [
    {
      title: 'autostride',
      description:
        'Machine Learning project focused on detecting elements in AWS diagrams using YOLO.',
      technologies: ['Python', 'Machine Learning', 'YOLO'],
      repo: 'https://github.com/iaglourenco/autostride',
      status: 'active',
      date: '2026',
      featured: false,
      highlights: [
        'Practical computer vision application',
        'Focused on AWS architecture recognition in diagrams',
        'Python codebase focused on advanced ML',
      ],
    },
    {
      title: 'EmoAct',
      description:
        'Emotion and activity detection system for videos, integrating LLMs and frameworks like LangChain/LangGraph.',
      technologies: ['Python', 'LLM', 'LangChain', 'LangGraph'],
      repo: 'https://github.com/iaglourenco/EmoAct',
      status: 'completed',
      date: '2026',
      featured: false,
      highlights: [
        'Combines video processing with artificial intelligence',
        'Utilizes language models and multimodal pipeline',
        'Potential for UX, healthcare, or behavioral analysis applications',
      ],
    },
    {
      title: 'CSD',
      description:
        'Full compiler for the LPD language (Didactic Programming Language) developed entirely in JavaScript, including a virtual machine for execution.',
      technologies: ['JavaScript', 'Compiler Design', 'HTML', 'CSS'],
      repo: 'https://github.com/iaglourenco/CSD',
      status: 'archived',
      date: '2022',
      link: 'https://iaglourenco.github.io/CSD/',
      highlights: [
        'Lexical, syntactic, and semantic analysis',
        'Code generation for virtual machine',
        'Web interface for debugging',
      ],
    },
    {
      title: 'van-gogh',
      description:
        'Implementation of genetic algorithms for image recreation and evolution using primitive geometric shapes.',
      technologies: ['Python', 'Genetic Algorithms', 'Image Processing'],
      repo: 'https://github.com/iaglourenco/van-gogh',
      status: 'completed',
      date: '2021',
      highlights: [
        'Evolutionary computation',
        'Image processing',
        'Experimentation with generative AI',
      ],
    },
    {
      title: 'PSTA',
      description:
        'Simple File Transfer Protocol. A low-level implementation of a custom network protocol.',
      technologies: ['C', 'Socket Programming', 'Network Protocols'],
      repo: 'https://github.com/iaglourenco/PSTA',
      status: 'archived',
      date: '2021',
      highlights: [
        'Socket programming in C',
        'Custom protocol definition',
        'Binary file manipulation',
      ],
    },
    {
      title: 'CopEye',
      description:
        'Computer vision system to assist in people identification using One-Shot technique for facial recognition.',
      technologies: ['Python', 'OpenCV', 'Face Recognition', 'dlib'],
      repo: 'https://github.com/iaglourenco/CopEye',
      status: 'completed',
      date: '2020',
      featured: true,
      highlights: [
        'One-Shot facial recognition',
        'Real-time detection',
        'Webcam and video integration',
      ],
    },
  ],
  contact: {
    email: 'iagojlourenco@gmail.com',
    message: 'Feel free to reach out for collaborations or opportunities.',
    linkedin: 'https://linkedin.com/in/iagolourenco',
    github: 'https://github.com/iaglourenco',
  },
}
