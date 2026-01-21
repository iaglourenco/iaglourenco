<script setup lang="ts">
import type { ContactInfo } from '@/types'
import Section from '@/components/common/CommonSection.vue'
import Button from 'primevue/button'
import { useLanguage } from '@/composables/useLanguage'

defineProps<{
  contact: ContactInfo
}>()

const { labels } = useLanguage()
</script>

<template>
  <Section id="contact" :title="labels.contact">
    <div class="text-center max-w-2xl mx-auto">
      <p class="text-lg mb-8">
        {{ contact.message }}
      </p>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a :href="`mailto:${contact.email}`">
          <Button icon="pi pi-envelope" :label="contact.email" size="large" />
        </a>
      </div>
    </div>
  </Section>
</template>
