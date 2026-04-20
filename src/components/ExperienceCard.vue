<script setup lang="ts">
defineProps<{
  period: string
  role: string
  organization: string
  type: string
  description: string
  highlights: string[]
}>()
</script>

<template>
  <article
    class="rounded-[1.8rem] border border-slate-200 bg-[#F4F7FB] p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-slate-900/80 sm:rounded-[2rem] sm:p-6"
  >
    <div class="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
      <span
        class="inline-flex w-fit rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700 dark:bg-sky-500/10 dark:text-sky-300"
      >
        {{ type }}
      </span>

      <span class="text-sm font-medium text-slate-500 dark:text-slate-400">
        {{ period }}
      </span>
    </div>

    <h3 class="mt-4 text-lg font-bold leading-snug text-slate-900 dark:text-white sm:mt-5 sm:text-xl">
      {{ role }}
    </h3>

    <p class="mt-2 text-sm font-medium text-slate-600 dark:text-slate-300">
      {{ organization }}
    </p>

    <p class="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-400 sm:leading-7">
      {{ description }}
    </p>

    <div class="mt-5 flex flex-wrap gap-2">
      <span
        v-for="item in highlights"
        :key="item"
        class="rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-[11px] font-medium text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 sm:text-xs"
      >
        {{ item }}
      </span>
    </div>
  </article>
</template>