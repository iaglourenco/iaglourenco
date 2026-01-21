import { ref, computed } from 'vue'
import { en } from '@/data/en'
import { pt } from '@/data/pt'
import type { CVData } from '@/types'

const currentLang = ref<'en' | 'pt'>('en')

export function useLanguage() {
  const toggleLanguage = () => {
    currentLang.value = currentLang.value === 'en' ? 'pt' : 'en'
  }

  const setLanguage = (lang: 'en' | 'pt') => {
    currentLang.value = lang
  }

  const content = computed<CVData>(() => {
    return currentLang.value === 'en' ? en : pt
  })

  const labels = computed(() => {
    return currentLang.value === 'en'
      ? {
          about: 'About',
          experience: 'Experience',
          experienceSubtitle: 'My professional journey',
          projects: 'Projects',
          projectsSubtitle: 'Some of my recent works',
          skills: 'Skills',
          skillsSubtitle: 'Technologies and tools I master',
          contact: 'Contact',
          contactSubtitle: "Let's talk?",
          downloadCv: 'Download CV',
          darkMode: 'Dark Mode',
          lightMode: 'Light Mode',
          language: 'Language',
          social: 'Social',
          getInTouch: 'Get in Touch',
        }
      : {
          about: 'Sobre',
          experience: 'Experiência',
          experienceSubtitle: 'Minha trajetória profissional',
          projects: 'Projetos',
          projectsSubtitle: 'Alguns dos meus trabalhos recentes',
          skills: 'Habilidades',
          skillsSubtitle: 'Tecnologias e ferramentas que domino',
          contact: 'Contato',
          contactSubtitle: 'Vamos conversar?',
          downloadCv: 'Baixar CV',
          darkMode: 'Modo Escuro',
          lightMode: 'Modo Claro',
          language: 'Idioma',
          social: 'Redes Sociais',
          getInTouch: 'Entre em Contato',
        }
  })

  return {
    currentLang,
    toggleLanguage,
    setLanguage,
    content,
    labels,
  }
}
