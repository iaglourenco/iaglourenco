<script setup lang="ts">
import type { SkillGroup } from '@/types'
import Section from '@/components/common/CommonSection.vue'
import Card from 'primevue/card'
import Tag from 'primevue/tag'
import Badge from 'primevue/badge'
import { useLanguage } from '@/composables/useLanguage'

defineProps<{
  skills: SkillGroup[]
}>()

const { labels } = useLanguage()

// Map de ícones por categoria
const categoryIcons: Record<string, string> = {
  Frontend: 'pi-desktop',
  Backend: 'pi-server',
  Database: 'pi-database',
  DevOps: 'pi-cloud',
  Tools: 'pi-wrench',
  Mobile: 'pi-mobile',
  Design: 'pi-palette',
  Linguagens: 'pi-code',
  Frameworks: 'pi-box',
  Cloud: 'pi-cloud-upload',
}

const getCategoryIcon = (category: string): string => {
  return categoryIcons[category] || 'pi-star'
}

// Map de severidade por nível
const getLevelSeverity = (level?: string): 'success' | 'info' | 'warn' | 'secondary' => {
  if (!level) return 'secondary'
  const levelLower = level.toLowerCase()
  if (levelLower.includes('expert') || levelLower.includes('especialista')) return 'success'
  if (levelLower.includes('advanced') || levelLower.includes('avançado')) return 'info'
  if (levelLower.includes('intermediate') || levelLower.includes('intermediário')) return 'warn'
  return 'secondary'
}
</script>

<template>
  <Section id="skills" :title="labels.skills" icon="pi-star" :subtitle="labels.skillsSubtitle">
    <!-- Grid de skills por categoria -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card
        v-for="group in skills"
        :key="group.category"
        class="rounded-2xl border border-surface-200 dark:border-surface-700 shadow-md hover:shadow-xl hover:border-primary hover:-translate-y-1 transition-all duration-300 overflow-hidden"
      >
        <template #title>
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div
                class="flex items-center justify-center w-10 h-10 sm:w-8 sm:h-8 rounded-lg bg-linear-to-br from-primary-500 to-primary-600 text-white"
              >
                <i :class="['pi', getCategoryIcon(group.category), 'text-2xl sm:text-xl']" />
              </div>
              <span class="text-lg font-bold">{{ group.category }}</span>
            </div>
            <Badge :value="group.skills.length" severity="secondary" />
          </div>
        </template>
        <template #content>
          <div class="flex flex-col gap-3 mt-2">
            <div v-for="skill in group.skills" :key="skill.name" class="py-1 md:py-1.5">
              <div class="flex items-center justify-between gap-2">
                <Tag
                  :value="skill.name"
                  :severity="getLevelSeverity(skill.level)"
                  rounded
                  class="text-sm font-medium px-4 py-2 sm:px-3 sm:py-1.5 grow truncate"
                />
                <span
                  v-if="skill.level"
                  class="text-xs font-medium text-surface-600 dark:text-surface-400 whitespace-nowrap"
                >
                  {{ skill.level }}
                </span>
              </div>
            </div>
          </div>
        </template>
      </Card>
    </div>
  </Section>
</template>
