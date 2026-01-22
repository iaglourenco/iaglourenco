<script setup lang="ts">
import { computed, ref } from 'vue'
import Toolbar from 'primevue/toolbar'
import Button from 'primevue/button'
import Drawer from 'primevue/drawer'
import { useDark } from '@/composables/useDark'
import { useLanguage } from '@/composables/useLanguage'

const { isDark, toggleDark } = useDark()
const { currentLang, toggleLanguage, labels } = useLanguage()
const mobileMenuVisible = ref(false)

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
  mobileMenuVisible.value = false
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  mobileMenuVisible.value = false
}
</script>

<template>
  <header class="w-full flex justify-center px-8 pt-6 sticky top-0 z-1000">
    <div class="w-full max-w-7xl">
      <Toolbar class="rounded-xl shadow-lg">
        <template #start>
          <div
            class="cursor-pointer select-none transition-opacity hover:opacity-80"
            @click="scrollToTop"
          >
            <h2 class="m-0 text-2xl font-semibold text-primary-500">iago</h2>
          </div>
        </template>

        <template #center>
          <nav class="hidden md:flex gap-8 items-center">
            <a
              v-for="item in menuItems"
              :key="item.url"
              :href="item.url"
              class="no-underline font-medium py-2 relative transition-colors hover:text-primary-500 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-500 after:transition-all hover:after:w-full"
              @click="scrollToSection($event, item.url)"
            >
              {{ item.label }}
            </a>
          </nav>
        </template>

        <template #end>
          <div class="flex gap-2 items-center">
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
            <Button
              icon="pi pi-bars"
              text
              rounded
              class="md:hidden!"
              aria-label="Menu"
              @click="mobileMenuVisible = true"
            />
          </div>
        </template>
      </Toolbar>
    </div>

    <!-- Mobile Menu Drawer -->
    <Drawer v-model:visible="mobileMenuVisible" position="right" class="w-80!">
      <template #header>
        <div
          class="cursor-pointer select-none transition-opacity hover:opacity-80"
          @click="scrollToTop"
        >
          <h2 class="m-0 text-2xl font-semibold text-primary-500">iago</h2>
        </div>
      </template>

      <nav class="flex flex-col gap-2">
        <a
          v-for="item in menuItems"
          :key="item.url"
          :href="item.url"
          class="no-underline font-medium p-4 rounded-lg transition-all block hover:bg-primary-50 hover:text-primary-500 dark:hover:bg-primary-900/30"
          @click="scrollToSection($event, item.url)"
        >
          {{ item.label }}
        </a>
      </nav>
    </Drawer>
  </header>
</template>
