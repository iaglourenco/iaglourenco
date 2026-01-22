<script setup lang="ts">
import type { Experience } from '@/types'
import Section from '@/components/common/CommonSection.vue'
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
    <div class="max-w-4xl mx-auto px-4 sm:px-6">
      <!-- Layout simples e linear para mobile, mantém elegância em desktop -->
      <div class="relative">
        <!-- Linha vertical conectora (apenas visível em desktop) -->
        <div
          class="hidden md:block absolute left-0 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary-200 via-primary-300 to-primary-200 dark:from-primary-800 dark:via-primary-700 dark:to-primary-800"
          style="left: 1.5rem"
        ></div>

        <!-- Lista de experiências -->
        <div class="space-y-6 md:space-y-8">
          <div v-for="(item, index) in experience" :key="index" class="relative md:pl-16">
            <!-- Marcador (badge) - desktop apenas -->
            <div
              class="hidden md:flex absolute left-0 items-center justify-center w-12 h-12 rounded-full bg-linear-to-br from-primary-500 to-primary-600 dark:from-primary-600 dark:to-primary-700 shadow-lg shadow-primary-500/30 dark:shadow-primary-900/50 z-10"
            >
              <i v-if="item.type == 'work'" class="pi pi-briefcase text-white text-lg" />
              <i
                v-else-if="item.type == 'education'"
                class="pi pi-graduation-cap text-white text-lg"
              />
              <i v-else class="pi pi-star text-white text-lg" />
            </div>

            <!-- Card de experiência -->
            <Card
              class="rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-surface-200 dark:border-surface-700 overflow-hidden group"
            >
              <template #title>
                <div class="space-y-3">
                  <!-- Badges no topo mobile -->
                  <div class="flex flex-wrap items-center gap-2">
                    <!-- Badge de tipo -->
                    <div
                      v-if="item.type === 'work'"
                      class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700"
                    >
                      <i class="pi pi-briefcase text-blue-600 dark:text-blue-400 text-xs" />
                      <span class="text-xs font-semibold text-blue-700 dark:text-blue-300">
                        {{ labels.experienceTypeWork }}
                      </span>
                    </div>
                    <div
                      v-else-if="item.type === 'education'"
                      class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-700"
                    >
                      <i
                        class="pi pi-graduation-cap text-purple-600 dark:text-purple-400 text-xs"
                      />
                      <span class="text-xs font-semibold text-purple-700 dark:text-purple-300">
                        {{ labels.experienceTypeEducation }}
                      </span>
                    </div>
                    <div
                      v-else
                      class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-700"
                    >
                      <i class="pi pi-star text-amber-600 dark:text-amber-400 text-xs" />
                      <span class="text-xs font-semibold text-amber-700 dark:text-amber-300">
                        {{ labels.experienceTypeOther }}
                      </span>
                    </div>

                    <!-- Período -->
                    <div
                      class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-700"
                    >
                      <i class="pi pi-calendar text-primary text-xs" />
                      <span class="text-xs font-bold text-primary">
                        {{ item.period }}
                      </span>
                    </div>
                  </div>

                  <!-- Título da posição -->
                  <h3
                    class="text-xl md:text-2xl font-bold text-primary leading-tight group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
                  >
                    {{ item.role }}
                  </h3>

                  <!-- Empresa e localização -->
                  <div
                    class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-surface-600 dark:text-surface-400"
                  >
                    <div class="flex items-center gap-2">
                      <i class="pi pi-building text-base shrink-0 text-primary" />
                      <span class="font-semibold text-surface-900 dark:text-surface-100">
                        {{ item.company }}
                      </span>
                    </div>
                    <div v-if="item.location" class="flex items-center gap-2 text-sm">
                      <i class="pi pi-map-marker text-sm shrink-0" />
                      <span>{{ item.location }}</span>
                    </div>
                  </div>
                </div>
              </template>

              <template #content>
                <div class="space-y-4">
                  <!-- Descrição -->
                  <p class="text-base leading-relaxed text-surface-700 dark:text-surface-300">
                    {{ item.description }}
                  </p>

                  <!-- Tecnologias -->
                  <div class="flex flex-wrap gap-2 pt-2">
                    <Tag
                      v-for="tech in item.technologies"
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
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>
