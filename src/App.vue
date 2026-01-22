<script setup lang="ts">
import { useLanguage } from '@/composables/useLanguage'
import Header from '@/components/layout/HeaderMenu.vue'
import Summary from '@/components/sections/SummarySection.vue'
import Skills from '@/components/sections/SkillsSection.vue'
import Experience from '@/components/sections/ExperienceSection.vue'
import Projects from '@/components/sections/ProjectsSection.vue'
import Contact from '@/components/sections/ContactSection.vue'

const { content } = useLanguage()
</script>

<template>
  <div class="min-h-screen transition-colors duration-300">
    <Header />

    <main class="pt-16">
      <Summary :profile="content.profile" />
      <Skills :skills="content.skills" />
      <Experience :experience="content.experience" />
      <Projects :projects="content.projects" />
      <Contact :contact="content.contact" />
    </main>
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>
