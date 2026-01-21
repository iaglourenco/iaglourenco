<script setup lang="ts">
defineProps<{
  id: string
  title?: string
  className?: string
}>()
</script>

<template>
  <section
    :id="id"
    class="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    :class="className"
  >
    <div v-if="title" class="mb-12">
      <h2 class="text-3xl font-bold tracking-tight sm:text-4xl text-center">
        {{ title }}
      </h2>
      <div class="w-24 h-1.5 rounded-full mx-auto mt-4"></div>
    </div>
    <slot />
  </section>
</template>
