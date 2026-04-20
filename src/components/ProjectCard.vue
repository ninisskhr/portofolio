<script setup lang="ts">
defineProps<{
  title: string
  category: string
  description: string
  stack: string[]
  status: string
  image?: string
  badge?: string
}>()
</script>

<template>
  <article
    class="group overflow-hidden rounded-[2rem] border border-slate-200 bg-[#F4F7FB] shadow-[0_18px_50px_-24px_rgba(15,23,42,0.18)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_-28px_rgba(15,23,42,0.24)] dark:border-white/10 dark:bg-slate-900/80"
  >
    <div class="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
      <div class="relative p-4 sm:p-5 lg:p-6">
        <div
          class="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white/80 dark:border-white/10 dark:bg-slate-800/70 sm:rounded-[1.8rem]"
        >
          <div class="aspect-[4/2.5] w-full">
            <img
              v-if="image"
              :src="image"
              :alt="title"
              class="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            />

            <div
              v-else
              class="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-200 via-slate-100 to-slate-300 text-center dark:from-slate-800 dark:via-slate-900 dark:to-slate-800"
            >
              <div>
                <p class="mt-3 text-lg font-bold text-slate-900 dark:text-white sm:text-xl">
                  {{ title }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col justify-center p-5 sm:p-6 lg:p-10">
        <div class="flex flex-wrap items-center gap-2 sm:gap-3">
          <span
            class="rounded-full bg-white/80 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:bg-white/10 dark:text-slate-200 sm:px-4 sm:py-2 sm:text-sm"
          >
            {{ category }}
          </span>

          <span
            class="rounded-full bg-emerald-100 px-3 py-1.5 text-xs font-semibold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300 sm:px-4 sm:py-2 sm:text-sm"
          >
            {{ status }}
          </span>
        </div>

        <h3 class="mt-5 text-2xl font-black leading-tight tracking-tight text-slate-950 dark:text-white sm:text-3xl lg:text-[2.1rem]">
          {{ title }}
        </h3>

        <p class="mt-4 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300 sm:mt-5 sm:text-base sm:leading-8">
          {{ description }}
        </p>

        <div class="mt-5 flex flex-wrap gap-2 sm:mt-6 sm:gap-3">
          <span
            v-for="item in stack"
            :key="item"
            class="rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 sm:px-4 sm:py-2 sm:text-sm"
          >
            {{ item }}
          </span>
        </div>
      </div>
    </div>
  </article>
</template>