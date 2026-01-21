<script setup lang="ts">
import type { Profile } from '@/types'
import Section from '@/components/common/CommonSection.vue'
import Button from 'primevue/button'
import Image from 'primevue/image'
import Chip from 'primevue/chip'

defineProps<{
  profile: Profile
}>()
</script>

<template>
  <Section id="about" class-name="min-h-[80vh] flex flex-col justify-center">
    <div class="max-w-6xl mx-auto relative">
      <div class="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-12 items-start">
        <!-- Textos à esquerda -->
        <div class="order-2 md:order-1 mt-8 md:mt-24">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight">
            <span
              class="text-transparent bg-clip-text bg-linear-to-r from-primary-500 to-primary-700"
            >
              {{ profile.name }}
            </span>
          </h1>

          <Chip :label="profile.role" class="mb-6 text-lg px-4 py-2" />

          <p class="text-lg leading-relaxed mb-8">
            {{ profile.summary }}
          </p>

          <div class="flex flex-wrap gap-3">
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
                class="rounded-full"
              />
            </a>
          </div>
        </div>

        <!-- Foto à direita (maior e acima do texto) -->
        <div class="order-1 md:order-2 flex justify-center md:justify-end">
          <div class="relative">
            <div
              class="absolute inset-0 bg-linear-to-br from-primary-500 to-primary-700 rounded-3xl blur-3xl opacity-20 animate-pulse"
            ></div>
            <Image
              v-if="profile.avatarUrl"
              :src="profile.avatarUrl"
              :alt="profile.name"
              imageClass="w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] object-cover rounded-3xl shadow-2xl relative z-10"
            />
            <div
              v-else
              class="w-72 h-72 md:w-96 md:h-96 lg:w-md lg:h-112 flex items-center justify-center shadow-2xl relative z-10 rounded-3xl bg-surface-100 dark:bg-surface-800"
            >
              <span class="text-6xl font-bold text-surface-400">
                {{ profile.name.charAt(0) }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>
