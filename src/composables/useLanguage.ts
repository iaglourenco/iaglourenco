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
          projects: 'Projects',
          skills: 'Skills',
          contact: 'Contact',
          downloadCv: 'Download CV',
          darkMode: 'Dark Mode',
          lightMode: 'Light Mode',
          language: 'Language',
        }
      : {
          about: 'Sobre',
          experience: 'Experiência',
          projects: 'Projetos',
          skills: 'Habilidades',
          contact: 'Contato',
          downloadCv: 'Baixar CV',
          darkMode: 'Modo Escuro',
          lightMode: 'Modo Claro',
          language: 'Idioma',
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
