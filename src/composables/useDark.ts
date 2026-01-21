import { ref, onMounted } from 'vue'

const isDark = ref(false)

export function useDark() {
  const toggleDark = () => {
    isDark.value = !isDark.value
    updateTheme()
  }

  const updateTheme = () => {
    if (isDark.value) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  const initTheme = () => {
    if (
      localStorage.getItem('theme') === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      isDark.value = true
    } else {
      isDark.value = false
    }
    updateTheme()
  }

  onMounted(() => {
    initTheme()
  })

  return {
    isDark,
    toggleDark,
  }
}
