<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import type { ActivityItem } from '../data/portfolio'

const props = defineProps<{
  items: ActivityItem[]
}>()

const activeIndex = ref(0)
const autoSlideTimer = ref<number | null>(null)
const showAllActivities = ref(false)
const isHovering = ref(false)

const fallbackItem: ActivityItem = {
  title: 'Activity',
  date: '-',
  type: 'General',
  role: '-',
  location: '-',
  shortDescription: 'Belum ada activity yang ditampilkan.',
  description: 'Tambahkan data activity di src/data/portfolio.ts',
  image: '/activities/komdigi.jpeg',
  highlights: [],
}

const safeItems = computed<ActivityItem[]>(() => {
  return props.items.length ? props.items : [fallbackItem]
})

const activeItem = computed<ActivityItem>(() => {
  return safeItems.value[activeIndex.value] ?? safeItems.value[0] ?? fallbackItem
})

const previousPreview = computed<ActivityItem>(() => {
  const items = safeItems.value
  const index = (activeIndex.value - 1 + items.length) % items.length
  return items[index] ?? fallbackItem
})

const nextPreview = computed<ActivityItem>(() => {
  const items = safeItems.value
  const index = (activeIndex.value + 1) % items.length
  return items[index] ?? fallbackItem
})

const goToActivity = (index: number) => {
  activeIndex.value = index
  restartAutoSlide()
}

const previousActivity = () => {
  const items = safeItems.value
  activeIndex.value = (activeIndex.value - 1 + items.length) % items.length
}

const nextActivity = () => {
  const items = safeItems.value
  activeIndex.value = (activeIndex.value + 1) % items.length
}

const handlePreviousClick = () => {
  previousActivity()
  restartAutoSlide()
}

const handleNextClick = () => {
  nextActivity()
  restartAutoSlide()
}

const selectActivity = (index: number) => {
  activeIndex.value = index
  showAllActivities.value = false
  restartAutoSlide()
}

const handleMouseEnter = () => {
  isHovering.value = true
  stopAutoSlide()
}

const handleMouseLeave = () => {
  isHovering.value = false
  startAutoSlide()
}

const startAutoSlide = () => {
  stopAutoSlide()
  if (safeItems.value.length <= 1 || showAllActivities.value || isHovering.value) return

  autoSlideTimer.value = window.setInterval(() => {
    if (!isHovering.value && !showAllActivities.value) {
      nextActivity()
    }
  }, 3500)
}

const stopAutoSlide = () => {
  if (autoSlideTimer.value !== null) {
    clearInterval(autoSlideTimer.value)
    autoSlideTimer.value = null
  }
}

const restartAutoSlide = () => {
  startAutoSlide()
}

const openSeeMore = () => {
  showAllActivities.value = true
  stopAutoSlide()
}

const closeSeeMore = () => {
  showAllActivities.value = false
  startAutoSlide()
}

onMounted(() => {
  startAutoSlide()
})

onBeforeUnmount(() => {
  stopAutoSlide()
})
</script>

<template>
  <section class="space-y-6">
    <div class="flex items-center justify-between gap-4">
      <h2 class="text-3xl font-black tracking-tight text-slate-950 dark:text-white sm:text-4xl">
        Activities
      </h2>

      <button
        type="button"
        class="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-50 dark:border-white/10 dark:bg-slate-900/70 dark:text-white dark:hover:bg-slate-800"
        @click="openSeeMore"
      >
        View all activities
      </button>
    </div>

    <div class="border-t border-white/10 pb-6"></div>

    <div class="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch lg:gap-8">
      <div
        class="space-y-4 sm:space-y-5"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
      >
        <div class="relative h-[300px] sm:h-[360px] lg:h-[420px]">
          <button
            type="button"
            aria-label="Previous activity"
            class="absolute inset-y-8 left-0 z-10 hidden w-[12%] overflow-hidden rounded-[1.4rem] border border-slate-200 bg-white/70 opacity-20 transition hover:opacity-35 dark:border-white/10 dark:bg-slate-900/60 dark:opacity-15 dark:hover:opacity-25 lg:block"
            @click="handlePreviousClick"
          >
            <img
              :src="previousPreview.image"
              :alt="previousPreview.title"
              class="h-full w-full object-cover"
            />
            <div class="absolute inset-0 bg-slate-950/25 dark:bg-slate-950/40" />
          </button>

          <button
            type="button"
            aria-label="Next activity"
            class="absolute inset-y-8 right-0 z-10 hidden w-[12%] overflow-hidden rounded-[1.4rem] border border-slate-200 bg-white/70 opacity-20 transition hover:opacity-35 dark:border-white/10 dark:bg-slate-900/60 dark:opacity-15 dark:hover:opacity-25 lg:block"
            @click="handleNextClick"
          >
            <img
              :src="nextPreview.image"
              :alt="nextPreview.title"
              class="h-full w-full object-cover"
            />
            <div class="absolute inset-0 bg-slate-950/25 dark:bg-slate-950/40" />
          </button>

          <Transition name="slide-fade" mode="out-in">
            <article
              :key="`main-${activeIndex}`"
              class="absolute inset-0 z-20 mx-auto overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white shadow-[0_18px_50px_-24px_rgba(15,23,42,0.18)] dark:border-white/10 dark:bg-slate-900/80 lg:w-[80%] lg:rounded-[2rem]"
            >
              <img
                :src="activeItem.image"
                :alt="activeItem.title"
                class="h-full w-full object-cover"
              />

              <div
                class="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent dark:from-slate-950/90 dark:via-slate-950/25"
              />

              <div class="absolute bottom-0 left-0 right-0 p-5 sm:p-6 lg:p-8">
                <h3 class="max-w-2xl text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                  {{ activeItem.title }}
                </h3>
                <p class="mt-2 text-sm text-white/80">
                  {{ activeItem.date }}
                </p>
              </div>
            </article>
          </Transition>
        </div>

        <div class="flex items-center justify-center gap-2">
          <button
            v-for="(_, index) in safeItems"
            :key="index"
            type="button"
            class="h-2.5 rounded-full transition-all duration-300"
            :class="index === activeIndex ? 'w-8 bg-sky-500 dark:bg-sky-400' : 'w-2.5 bg-slate-300 hover:bg-slate-400 dark:bg-white/20 dark:hover:bg-white/40'"
            @click="goToActivity(index)"
          />
        </div>
      </div>

      <Transition name="panel-fade" mode="out-in">
        <article
          :key="`detail-${activeIndex}`"
          class="relative h-[300px] overflow-hidden rounded-[2rem] border border-slate-200 bg-[#F4F7FB] p-5 shadow-[0_18px_50px_-24px_rgba(15,23,42,0.16)] dark:border-white/10 dark:bg-slate-900/80 sm:h-[360px] sm:p-6 lg:h-[420px] lg:rounded-[2.4rem] lg:p-8"
          @mouseenter="handleMouseEnter"
          @mouseleave="handleMouseLeave"
        >
          <div
            class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.10),transparent_40%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.08),transparent_38%)]"
          />

          <div class="relative flex h-full flex-col">
            <div class="flex flex-wrap items-start justify-between gap-3">
              <p class="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400 sm:text-sm">
                {{ activeItem.date }}
              </p>

              <span
                class="rounded-full bg-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-800 shadow-sm dark:bg-white/10 dark:text-white sm:px-4 sm:text-xs"
              >
                {{ activeItem.type }}
              </span>
            </div>

            <p class="mt-4 line-clamp-8 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:mt-5 sm:text-base sm:leading-8">
              {{ activeItem.description }}
            </p>

            <div class="mt-5 flex flex-wrap items-center gap-2 text-sm text-slate-500 dark:text-slate-400 sm:gap-3">
              <span class="text-slate-300 dark:text-white/20">•</span>
              <span>{{ activeItem.role }}</span>
            </div>

            <div class="mt-auto border-slate-200 pt-5 dark:border-white/10 sm:pt-6">
              <p class="text-sm text-slate-500 dark:text-slate-400">
                Post {{ activeIndex + 1 }} of {{ safeItems.length }}
              </p>
            </div>
          </div>
        </article>
      </Transition>
    </div>

    <div
      v-if="showAllActivities"
      class="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm"
      @click.self="closeSeeMore"
    >
      <div
        class="max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-[2rem] border border-slate-200 bg-white p-5 shadow-2xl dark:border-white/10 dark:bg-slate-900 sm:p-6 lg:p-8"
      >
        <div class="mb-6 flex items-center justify-between gap-4">
          <div>
            <h3 class="text-2xl font-black text-slate-950 dark:text-white">
              All activities
            </h3>
            <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Select the activity you want to view immediately.
            </p>
          </div>

          <button
            type="button"
            class="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-white/10 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
            @click="closeSeeMore"
          >
            Close
          </button>
        </div>

        <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          <button
            v-for="(item, index) in safeItems"
            :key="`${item.title}-${index}`"
            type="button"
            class="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-slate-800"
            @click="selectActivity(index)"
          >
            <div class="h-48 overflow-hidden">
              <img
                :src="item.image"
                :alt="item.title"
                class="h-full w-full object-cover"
              />
            </div>

            <div class="p-4">
              <div class="flex items-center justify-between gap-3">
                <p class="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                  {{ item.date }}
                </p>

                <span
                  class="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-700 dark:bg-white/10 dark:text-white"
                >
                  {{ item.type }}
                </span>
              </div>

              <h4 class="mt-3 text-lg font-bold leading-snug text-slate-950 dark:text-white">
                {{ item.title }}
              </h4>

              <p class="mt-2 line-clamp-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {{ item.shortDescription || item.description }}
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active,
.panel-fade-enter-active,
.panel-fade-leave-active {
  transition: opacity 0.45s ease, transform 0.45s ease;
}

.slide-fade-enter-from,
.panel-fade-enter-from {
  opacity: 0;
  transform: translateY(12px);
}

.slide-fade-leave-to,
.panel-fade-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
</style>