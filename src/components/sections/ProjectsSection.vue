<script setup lang="ts">
import type { Project } from '@/types'
import Section from '@/components/common/CommonSection.vue'
import { useLanguage } from '@/composables/useLanguage'
import { Button } from 'primevue'

defineProps<{
  projects: Project[]
}>()

const { labels, currentLang } = useLanguage()

const getStatusLabel = (status?: string) => {
  if (!status) return ''
  const statusLabels = {
    en: {
      active: 'Active',
      completed: 'Completed',
      archived: 'Archived',
    },
    pt: {
      active: 'Ativo',
      completed: 'Concluído',
      archived: 'Arquivado',
    },
  }
  return statusLabels[currentLang.value as 'en' | 'pt'][status as keyof typeof statusLabels.en]
}

const getStatusColor = (status?: string) => {
  const colors = {
    active:
      'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800',
    completed:
      'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-800',
    archived:
      'bg-surface-100 text-surface-600 dark:bg-surface-800/30 dark:text-surface-400 border-surface-200 dark:border-surface-700',
  }
  return colors[status as keyof typeof colors] || colors.completed
}
</script>

<template>
  <Section
    id="projects"
    :title="labels.projects"
    icon="pi-code"
    :subtitle="labels.projectsSubtitle"
  >
    <!-- Projects Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
      <article
        v-for="project in projects"
        :key="project.title"
        :class="[
          'group relative rounded-2xl overflow-hidden border border-surface-200 dark:border-surface-700',
          'shadow-md hover:shadow-2xl hover:border-primary-500 dark:hover:border-primary-600',
          'hover:-translate-y-2 transition-all duration-300',
          'flex flex-col',
          project.featured &&
            'ring-2 ring-primary-500 dark:ring-primary-600 ring-offset-2 dark:ring-offset-surface-950',
        ]"
      >
        <!-- Featured Badge -->
        <div
          v-if="project.featured"
          class="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-full bg-primary-500 text-white text-xs font-bold shadow-lg flex items-center gap-1.5"
        >
          <i class="pi pi-star-fill text-xs" />
          <span>{{ currentLang === 'en' ? 'Featured' : 'Destaque' }}</span>
        </div>

        <!-- Project Image/Placeholder -->
        <div
          class="relative h-48 sm:h-52 overflow-hidden bg-linear-to-br from-primary-50 to-primary-100 dark:from-primary-950 dark:to-surface-900"
        >
          <img
            v-if="project.imageUrl"
            :src="project.imageUrl"
            :alt="project.title"
            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div v-else class="w-full h-full flex flex-col items-center justify-center gap-3">
            <i
              class="pi pi-code text-5xl text-primary-500 dark:text-primary-400 group-hover:scale-110 transition-transform duration-300"
            />
          </div>

          <!-- Overlay with Status and Date -->
          <div
            class="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-surface-950/80 to-transparent"
          >
            <div class="flex items-center gap-2 flex-wrap">
              <span
                v-if="project.status"
                :class="[
                  'text-xs font-semibold px-2.5 py-1 rounded-full border backdrop-blur-sm',
                  getStatusColor(project.status),
                ]"
              >
                {{ getStatusLabel(project.status) }}
              </span>
              <span
                v-if="project.date"
                class="text-xs font-medium px-2.5 py-1 rounded-full bg-surface-900/60 text-white backdrop-blur-sm border border-white/20"
              >
                <i class="pi pi-calendar text-xs mr-1" />
                {{ project.date }}
              </span>
            </div>
          </div>
        </div>

        <!-- Project Content -->
        <div class="p-5 sm:p-6 flex-1 flex flex-col">
          <!-- Title -->
          <h3
            class="text-xl sm:text-2xl font-bold mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
          >
            {{ project.title }}
          </h3>

          <!-- Description -->
          <p
            class="text-sm sm:text-base text-surface-600 dark:text-surface-400 mb-4 flex-0 leading-relaxed"
          >
            {{ project.description }}
          </p>

          <!-- Highlights -->
          <div v-if="project.highlights && project.highlights.length" class="mb-5">
            <ul class="space-y-2">
              <li
                v-for="(highlight, idx) in project.highlights.slice(0, 3)"
                :key="idx"
                class="flex items-start gap-2 text-xs sm:text-sm"
              >
                <i
                  class="pi pi-check-circle text-primary-500 dark:text-primary-400 text-sm shrink-0 mt-0.5"
                />
                <span>{{ highlight }}</span>
              </li>
            </ul>
          </div>

          <!-- Technologies -->
          <div class="flex flex-wrap gap-2 mb-5">
            <span
              v-for="tech in project.technologies"
              :key="tech"
              class="text-xs font-medium px-3 py-1.5 rounded-lg bg-surface-100 dark:bg-surface-800 text-surface-700 dark:text-surface-300 border border-surface-200 dark:border-surface-700 hover:border-primary-500 dark:hover:border-primary-600 transition-colors"
            >
              {{ tech }}
            </span>
          </div>

          <!-- Action Buttons -->
          <div class="flex gap-3 mt-auto pt-4">
            <Button
              as="a"
              target="_blank"
              rel="noopener noreferrer"
              :href="project.repo"
              v-if="project.repo"
              icon="pi pi-github"
              :variant="project.link ? 'outlined' : 'solid'"
              :label="currentLang === 'en' ? 'Code' : 'Código'"
              class="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border-2 border-surface-300 dark:border-surface-600 font-semibold text-sm hover:border-primary-500 dark:hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-950/30 transition-all duration-200 group/btn"
            />
            <Button
              as="a"
              target="_blank"
              rel="noopener noreferrer"
              v-if="project.link"
              :href="project.link"
              icon="pi pi-external-link"
              :label="currentLang === 'en' ? 'Demo' : 'Ver'"
            />
          </div>
        </div>
      </article>
    </div>
  </Section>
</template>
