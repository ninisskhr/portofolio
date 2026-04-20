<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  description: string
}>()
</script>

<template>
  <div class="max-w-2xl space-y-3">
    <p class="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">{{ eyebrow }}</p>
    <h2 class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{{ title }}</h2>
    <p class="text-base leading-7 text-slate-600 sm:text-lg">{{ description }}</p>
  </div>
</template>
