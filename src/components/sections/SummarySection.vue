<script setup lang="ts">
import type { Profile } from '@/types'
import Section from '@/components/common/CommonSection.vue'
import Button from 'primevue/button'

defineProps<{
  profile: Profile
}>()
</script>

<template>
  <Section id="about" class-name="min-h-[80vh] flex flex-col justify-center">
    <div class="text-center max-w-3xl mx-auto">
      <div class="mb-6 relative inline-block">
        <div
          class="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 mx-auto shadow-xl"
        >
          <img
            v-if="profile.avatarUrl"
            :src="profile.avatarUrl"
            :alt="profile.name"
            class="w-full h-full object-cover"
          />
          <div
            v-else
            class="w-full h-full flex items-center justify-center text-4xl font-bold text-surface-400"
          >
            {{ profile.name.charAt(0) }}
          </div>
        </div>
      </div>

      <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight">
        <span class="text-transparent bg-clip-text bg-linear-to-r from-primary-500 to-primary-700">
          {{ profile.name }}
        </span>
      </h1>

      <p class="text-xl md:text-2xl mb-8 font-light">
        {{ profile.role }}
      </p>

      <p class="text-lg leading-relaxed mb-10">
        {{ profile.summary }}
      </p>

      <div class="flex flex-wrap justify-center gap-4">
        <a
          v-for="link in profile.links"
          :key="link.url"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            :icon="link.icon"
            :label="link.label"
            severity="secondary"
            outlined
            class="rounded-full!"
          />
        </a>
      </div>
    </div>
  </Section>
</template>
