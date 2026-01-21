<script setup lang="ts">
import type { Project } from '@/types'
import Section from '@/components/common/CommonSection.vue'
import Button from 'primevue/button'
import { useLanguage } from '@/composables/useLanguage'

defineProps<{
  projects: Project[]
}>()

const { labels } = useLanguage()
</script>

<template>
  <Section id="projects" :title="labels.projects">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="project in projects"
        :key="project.title"
        class="rounded-2xl overflow-hidden border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
      >
        <!-- Optional Image -->
        <div v-if="project.imageUrl" class="h-48 overflow-hidden">
          <img :src="project.imageUrl" :alt="project.title" class="w-full h-full object-cover" />
        </div>
        <div v-else class="h-48 flex items-center justify-center">
          <i class="pi pi-images text-4xl text-surface-400"></i>
        </div>

        <div class="p-6 flex-1 flex flex-col">
          <h3 class="text-xl font-bold mb-2">
            {{ project.title }}
          </h3>

          <p class="text-sm mb-6 flex-1 line-clamp-3">
            {{ project.description }}
          </p>

          <div class="flex flex-wrap gap-2 mb-6">
            <span
              v-for="tech in project.technologies"
              :key="tech"
              class="text-xs font-medium px-2 py-1 rounded"
            >
              {{ tech }}
            </span>
          </div>

          <div class="flex gap-3 mt-auto">
            <a
              v-if="project.repo"
              :href="project.repo"
              target="_blank"
              rel="noopener noreferrer"
              class="flex-1"
            >
              <Button icon="pi pi-github" label="Code" outlined size="small" class="w-full" />
            </a>
            <a
              v-if="project.link"
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="flex-1"
            >
              <Button icon="pi pi-external-link" label="Demo" size="small" class="w-full" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>
