<script setup lang="ts">
import { computed } from 'vue'
import { Toolbar, Button } from 'primevue'
import { useDark } from '@/composables/useDark'
import { useLanguage } from '@/composables/useLanguage'

const { isDark, toggleDark } = useDark()
const { currentLang, toggleLanguage, labels } = useLanguage()

const menuItems = computed(() => [
  { label: labels.value.about, url: '#about' },
  { label: labels.value.skills, url: '#skills' },
  { label: labels.value.experience, url: '#experience' },
  { label: labels.value.projects, url: '#projects' },
  { label: labels.value.contact, url: '#contact' },
])

const scrollToSection = (event: Event, id: string) => {
  event.preventDefault()
  const element = document.querySelector(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <header class="header-wrapper">
    <div class="header-container">
      <Toolbar class="header-toolbar">
        <template #start>
          <div class="logo" @click="scrollToTop">
            <h2>iago.dev</h2>
          </div>
        </template>

        <template #center>
          <nav class="nav-menu">
            <a
              v-for="item in menuItems"
              :key="item.url"
              :href="item.url"
              class="nav-link"
              @click="scrollToSection($event, item.url)"
            >
              {{ item.label }}
            </a>
          </nav>
        </template>

        <template #end>
          <div class="header-actions">
            <Button
              :icon="isDark ? 'pi pi-sun' : 'pi pi-moon'"
              text
              rounded
              :aria-label="isDark ? labels.lightMode : labels.darkMode"
              @click="toggleDark"
            />
            <Button
              :label="currentLang.toUpperCase()"
              text
              rounded
              :aria-label="labels.language"
              @click="toggleLanguage"
            />
          </div>
        </template>
      </Toolbar>
    </div>
  </header>
</template>

<style scoped>
.header-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1.5rem 2rem 0;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header-container {
  width: 100%;
  max-width: 1200px;
}

.header-toolbar {
  border-radius: 0.75rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.logo {
  cursor: pointer;
  user-select: none;
}

.logo h2 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--p-primary-color);
  transition: opacity 0.2s;
}

.logo:hover h2 {
  opacity: 0.8;
}

.nav-menu {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-link {
  text-decoration: none;
  color: var(--p-text-color);
  font-weight: 500;
  transition: color 0.2s;
  padding: 0.5rem 0;
  position: relative;
}

.nav-link:hover {
  color: var(--p-primary-color);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--p-primary-color);
  transition: width 0.2s;
}

.nav-link:hover::after {
  width: 100%;
}

.header-actions {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}
</style>
