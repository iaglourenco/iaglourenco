<script setup lang="ts">
import Divider from 'primevue/divider'

defineProps<{
  id: string
  title?: string
  subtitle?: string
  className?: string
}>()
</script>

<template>
  <section
    :id="id"
    class="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20"
    :class="className"
  >
    <div v-if="title" class="mb-12 md:mb-16">
      <!-- Cabeçalho da seção -->
      <div class="flex flex-col items-center gap-4">
        <!-- Título -->
        <h2
          class="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-center text-primary"
        >
          {{ title }}
        </h2>

        <!-- Subtítulo opcional -->
        <p
          v-if="subtitle"
          class="text-base md:text-lg text-surface-600 dark:text-surface-400 text-center max-w-2xl"
        >
          {{ subtitle }}
        </p>

        <!-- Divider decorativo -->
        <div class="w-full max-w-xs">
          <Divider type="solid" class="my-0" />
        </div>
      </div>
    </div>

    <!-- Conteúdo da seção -->
    <slot />
  </section>
</template>
