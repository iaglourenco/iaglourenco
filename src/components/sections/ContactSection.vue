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
  { icon: 'pi pi-envelope', url: 'email', label: 'Email' },
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

      <!-- CTA Button -->
      <div class="text-center space-x-4">
        <Button
          as="a"
          v-for="(link, index) in socialLinks"
          :key="index"
          :label="link.label"
          :icon="link.icon"
          size="large"
          :href="contact[link.url]"
          target="_blank"
          rel="noopener noreferrer"
        />
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
