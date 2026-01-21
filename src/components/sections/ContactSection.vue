<script setup lang="ts">
import type { ContactInfo } from '@/types'
import Section from '@/components/common/CommonSection.vue'
import Button from 'primevue/button'
import { useLanguage } from '@/composables/useLanguage'

defineProps<{
  contact: ContactInfo
}>()

const { labels } = useLanguage()

const socialLinks: Array<{ icon: string; url: keyof ContactInfo; label: string }> = [
  { icon: 'pi pi-github', url: 'github', label: 'GitHub' },
  { icon: 'pi pi-linkedin', url: 'linkedin', label: 'LinkedIn' },
]
</script>

<template>
  <Section id="contact" :title="labels.contact">
    <div class="max-w-4xl mx-auto">
      <!-- Message -->
      <div class="text-center mb-12">
        <p class="text-xl md:text-2xl mb-4 font-light leading-relaxed">
          {{ contact.message }}
        </p>
        <div class="w-24 h-1 bg-primary mx-auto rounded-full"></div>
      </div>

      <!-- Contact Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <!-- Email Card -->
        <a
          :href="`mailto:${contact.email}`"
          class="group relative overflow-hidden rounded-2xl border-2 border-surface-200 dark:border-surface-700 hover:border-primary dark:hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-surface-0 dark:bg-surface-900"
        >
          <div class="p-8 flex flex-col items-center text-center">
            <div
              class="w-16 h-16 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300"
            >
              <i
                class="pi pi-envelope text-3xl text-primary group-hover:text-white transition-colors"
              ></i>
            </div>
            <h3
              class="text-sm font-semibold mb-2 text-surface-500 dark:text-surface-400 uppercase tracking-wider"
            >
              Email
            </h3>
            <p class="text-lg font-medium text-surface-900 dark:text-surface-0 break-all">
              {{ contact.email }}
            </p>
          </div>
        </a>

        <!-- Social Links Card -->
        <div
          class="rounded-2xl border-2 border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900 p-8"
        >
          <div class="flex flex-col items-center text-center h-full justify-center">
            <div
              class="w-16 h-16 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4"
            >
              <i class="pi pi-share-alt text-3xl text-primary"></i>
            </div>
            <h3
              class="text-sm font-semibold mb-4 text-surface-500 dark:text-surface-400 uppercase tracking-wider"
            >
              {{ labels.social || 'Social' }}
            </h3>
            <div class="flex gap-4">
              <a
                v-for="social in socialLinks"
                :key="social.label"
                :href="contact[social.url]"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="social.label"
                class="w-12 h-12 rounded-full border-2 border-surface-300 dark:border-surface-600 flex items-center justify-center hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 text-surface-700 dark:text-surface-300"
              >
                <i :class="social.icon" class="text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Button -->
      <div class="text-center">
        <a :href="`mailto:${contact.email}`">
          <Button
            :label="labels.getInTouch || 'Get in Touch'"
            icon="pi pi-send"
            size="large"
            class="px-8 py-3"
          />
        </a>
      </div>

      <!-- Decorative Elements -->
      <div class="mt-16 flex justify-center gap-2">
        <div class="w-2 h-2 rounded-full bg-primary/30"></div>
        <div class="w-2 h-2 rounded-full bg-primary/50"></div>
        <div class="w-2 h-2 rounded-full bg-primary"></div>
        <div class="w-2 h-2 rounded-full bg-primary/50"></div>
        <div class="w-2 h-2 rounded-full bg-primary/30"></div>
      </div>
    </div>
  </Section>
</template>
