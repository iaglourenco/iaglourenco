<script setup lang="ts">
import type { SkillGroup } from '@/types'
import Section from '@/components/common/CommonSection.vue'
import Chip from 'primevue/chip'
import { useLanguage } from '@/composables/useLanguage'

defineProps<{
  skills: SkillGroup[]
}>()

const { labels } = useLanguage()
</script>

<template>
  <Section id="skills" :title="labels.skills">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div
        v-for="group in skills"
        :key="group.category"
        class="p-6 rounded-2xl shadow-sm border hover:shadow-md transition-shadow"
      >
        <h3 class="text-xl font-semibold mb-6 flex items-center">
          {{ group.category }}
        </h3>

        <div class="flex flex-wrap gap-2">
          <Chip v-for="skill in group.skills" :key="skill.name" :label="skill.name" />
        </div>
      </div>
    </div>
  </Section>
</template>
