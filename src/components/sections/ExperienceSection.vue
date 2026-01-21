<script setup lang="ts">
import type { Experience } from '@/types'
import Section from '@/components/common/CommonSection.vue'
import Divider from 'primevue/divider'
import { useLanguage } from '@/composables/useLanguage'

defineProps<{
  experience: Experience[]
}>()

const { labels } = useLanguage()
</script>

<template>
  <Section id="experience" :title="labels.experience">
    <div class="max-w-4xl mx-auto flex flex-col gap-12">
      <div v-for="(job, index) in experience" :key="index" class="relative pl-8 md:pl-0">
        <!-- Timeline connection line for desktop -->

        <div class="flex flex-col md:flex-row gap-4 md:gap-10">
          <!-- Left side: Period -->
          <div class="md:w-1/4 text-left md:text-right pt-1">
            <span class="inline-block py-1 px-3 rounded-lg text-sm font-semibold">
              {{ job.period }}
            </span>
          </div>

          <!-- Right side: Content -->
          <div class="md:w-3/4 relative">
            <!-- Dot -->
            <div
              class="hidden md:block absolute -left-11.25 top-2 w-3 h-3 rounded-full bg-primary-500 ring-4"
            ></div>

            <h3 class="text-xl font-bold">{{ job.role }}</h3>
            <div class="text-lg mb-2">{{ job.company }}</div>

            <p class="mb-4 leading-relaxed">
              {{ job.description }}
            </p>

            <div v-if="job.technologies" class="flex flex-wrap gap-2 mt-4">
              <span
                v-for="tech in job.technologies"
                :key="tech"
                class="text-xs border px-2 py-1 rounded"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>

        <Divider v-if="index !== experience.length - 1" class="my-8 md:hidden" />
      </div>
    </div>
  </Section>
</template>
