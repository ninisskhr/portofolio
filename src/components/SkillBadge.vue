<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <span
    class="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-700"
  >
    {{ label }}
  </span>
</template>
