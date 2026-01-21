<script setup lang="ts">
import type { Experience } from '@/types'
import Section from '@/components/common/CommonSection.vue'
import Timeline from 'primevue/timeline'
import Card from 'primevue/card'
import Tag from 'primevue/tag'
import { useLanguage } from '@/composables/useLanguage'

defineProps<{
  experience: Experience[]
}>()

const { labels } = useLanguage()
</script>

<template>
  <Section
    id="experience"
    :title="labels.experience"
    icon="pi-briefcase"
    :subtitle="labels.experienceSubtitle"
  >
    <div class="max-w-5xl mx-auto px-2 sm:px-4">
      <Timeline :value="experience" align="alternate">
        <!-- Marcador customizado com período -->
        <template #marker>
          <div class="relative flex items-center justify-center">
            <div
              class="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-linear-to-br from-primary-500 to-primary-600 dark:from-primary-600 dark:to-primary-700 shadow-lg shadow-primary-500/30 dark:shadow-primary-900/50 z-10"
            >
              <i class="pi pi-briefcase text-white text-base md:text-lg" />
            </div>
          </div>
        </template>

        <!-- Lado oposto vazio -->
        <template #opposite="slotProps">
          <div
            class="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 md:px-3 md:py-1.5 rounded-full border border-primary-200 dark:border-primary-700 shadow-sm"
          >
            <i class="pi pi-calendar text-primary text-xs" />
            <span class="text-xs font-bold text-primary">
              {{ slotProps.item.period }}
            </span>
          </div>
        </template>

        <!-- Conteúdo principal -->
        <template #content="slotProps">
          <Card
            :class="[
              'mb-6 md:mb-8 rounded-xl md:rounded-2xl shadow-sm hover:shadow-lg hover:border-primary transition-all duration-300 border border-surface-200 dark:border-surface-700 overflow-hidden',
              slotProps.index % 2 === 0 ? 'text-left' : 'md:text-right',
            ]"
          >
            <template #title>
              <div
                :class="[
                  'flex flex-col gap-2.5',
                  slotProps.index % 2 === 0 ? 'items-start' : 'md:items-end',
                ]"
              >
                <h3 class="text-lg md:text-xl font-bold text-primary leading-tight">
                  {{ slotProps.item.role }}
                </h3>
                <div
                  :class="[
                    'flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4',
                    slotProps.index % 2 === 0 ? '' : 'md:flex-row-reverse',
                  ]"
                >
                  <div class="flex items-center gap-2 text-sm md:text-base">
                    <i class="pi pi-building text-sm md:text-base shrink-0 text-primary" />
                    <span class="font-semibold">{{ slotProps.item.company }}</span>
                  </div>
                  <div
                    v-if="slotProps.item.location"
                    class="flex items-center gap-2 text-xs md:text-sm"
                  >
                    <i class="pi pi-map-marker text-xs shrink-0" />
                    <span>{{ slotProps.item.location }}</span>
                  </div>
                </div>
              </div>
            </template>

            <template #content>
              <div
                :class="['space-y-4', slotProps.index % 2 === 0 ? 'text-left' : 'md:text-right']"
              >
                <p class="text-sm md:text-base leading-relaxed">
                  {{ slotProps.item.description }}
                </p>

                <div
                  :class="[
                    'flex flex-wrap gap-2 pt-2',
                    slotProps.index % 2 === 0 ? 'justify-start' : 'md:justify-end',
                  ]"
                >
                  <Tag
                    v-for="tech in slotProps.item.technologies"
                    :key="tech"
                    :value="tech"
                    severity="info"
                    rounded
                    class="text-xs md:text-sm font-medium"
                  />
                </div>
              </div>
            </template>
          </Card>
        </template>
      </Timeline>
    </div>
  </Section>
</template>
