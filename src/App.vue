<script setup lang="ts">
import { computed, nextTick, onMounted, ref, watch } from 'vue'
import ExperienceCard from './components/ExperienceCard.vue'
import ProjectCard from './components/ProjectCard.vue'
import ActivityShowcase from './components/ActivityShowcase.vue'
import {
  achievements,
  activities,
  experiences,
  navLinks,
  profile,
  projects,
  skills,
} from './data/portfolio'
import { Instagram, Github, Linkedin } from 'lucide-vue-next'

const isMenuOpen = ref(false)

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem('theme')

  if (savedTheme) {
    return savedTheme === 'dark'
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

const isDark = ref(getInitialTheme())

const closeMenu = () => {
  isMenuOpen.value = false
}

const scrollToSection = (
  href: string,
  options: {
    updateHash?: boolean
    behavior?: ScrollBehavior
  } = {}
) => {
  const { updateHash = true, behavior = 'smooth' } = options
  const target = document.querySelector(href) as HTMLElement | null
  const header = document.querySelector('header') as HTMLElement | null

  if (!target) return

  const headerHeight = header?.offsetHeight ?? 88
  const visualSpacing = window.innerWidth >= 1024 ? 10 : 8
  const top =
    target.getBoundingClientRect().top +
    window.scrollY -
    (headerHeight + visualSpacing)

  if (updateHash) {
    window.history.replaceState(null, '', href)
  }

  window.scrollTo({
    top: Math.max(0, top),
    behavior,
  })
}

const handleNavClick = (href: string) => {
  closeMenu()
  scrollToSection(href)
}

watch(
  isDark,
  (value) => {
    document.documentElement.classList.toggle('dark', value)
    localStorage.setItem('theme', value ? 'dark' : 'light')
  },
  { immediate: true }
)

const toggleTheme = () => {
  isDark.value = !isDark.value
}

onMounted(async () => {
  await nextTick()

  if (window.location.hash) {
    scrollToSection(window.location.hash, {
      updateHash: false,
      behavior: 'auto',
    })
  }
})

const experienceItemsPerPage = 3
const currentExperiencePage = ref(0)

const totalExperiencePages = computed(() => {
  return Math.ceil(experiences.length / experienceItemsPerPage)
})

const paginatedExperiences = computed(() => {
  const start = currentExperiencePage.value * experienceItemsPerPage
  const end = start + experienceItemsPerPage
  return experiences.slice(start, end)
})

const goToExperiencePage = (page: number) => {
  currentExperiencePage.value = page
}

const nextExperiencePage = () => {
  if (currentExperiencePage.value < totalExperiencePages.value - 1) {
    currentExperiencePage.value++
  }
}

const previousExperiencePage = () => {
  if (currentExperiencePage.value > 0) {
    currentExperiencePage.value--
  }
}

const projectItemsPerPage = 2
const currentProjectPage = ref(0)

const totalProjectPages = computed(() => {
  return Math.ceil(projects.length / projectItemsPerPage)
})

const paginatedProjects = computed(() => {
  const start = currentProjectPage.value * projectItemsPerPage
  const end = start + projectItemsPerPage
  return projects.slice(start, end)
})

const goToProjectPage = (page: number) => {
  currentProjectPage.value = page
}

const nextProjectPage = () => {
  if (currentProjectPage.value < totalProjectPages.value - 1) {
    currentProjectPage.value++
  }
}

const previousProjectPage = () => {
  if (currentProjectPage.value > 0) {
    currentProjectPage.value--
  }
}
</script>

<template>
  <div class="relative min-h-screen overflow-x-hidden bg-slate-50 text-slate-800 transition-colors duration-500 dark:bg-[#020617] dark:text-white">
    <div class="pointer-events-none absolute inset-0 -z-10">
      <div
        class="absolute inset-x-0 top-0 h-[580px] bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.18),transparent_55%),linear-gradient(180deg,#f8fbff_0%,#eef4ff_38%,transparent_100%)] dark:bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.14),transparent_32%),radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.14),transparent_24%),linear-gradient(180deg,#020617_0%,#081225_45%,transparent_100%)]"
      ></div>
      <div
        class="absolute inset-0 bg-[linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)] bg-[size:36px_36px] opacity-[0.04] dark:opacity-[0.06]"
      ></div>
    </div>

    <header class="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-slate-950">
      <nav class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          class="text-lg font-black tracking-wide text-slate-950 dark:text-white"
          @click.prevent="scrollToSection('#home')"
        >
          {{ profile.initials }}<span class="text-sky-600 dark:text-sky-400">.</span>
        </a>

        <button
          class="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white/70 text-slate-700 shadow-sm transition hover:bg-slate-100 dark:border-white/10 dark:bg-slate-900/80 dark:text-white dark:hover:bg-slate-800 md:hidden"
          type="button"
          @click="isMenuOpen = !isMenuOpen"
          aria-label="Toggle menu"
        >
          <span class="text-xl">☰</span>
        </button>

        <div class="hidden items-center gap-2 md:flex">
          <a
            v-for="item in navLinks"
            :key="item.href"
            :href="item.href"
            class="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
            @click.prevent="handleNavClick(item.href)"
          >
            {{ item.label }}
          </a>

          <button
            type="button"
            @click="toggleTheme"
            class="ml-2 inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-slate-100 dark:border-white/10 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
            :aria-label="isDark ? 'Aktifkan mode terang' : 'Aktifkan mode gelap'"
          >
            <span v-if="isDark">☀️</span>
            <span v-else>🌙</span>
          </button>
        </div>
      </nav>

      <div
        v-if="isMenuOpen"
        class="border-t border-slate-200 bg-white/90 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/90 md:hidden"
      >
        <div class="mx-auto flex max-w-7xl flex-col px-6 py-4">
          <a
            v-for="item in navLinks"
            :key="item.label"
            :href="item.href"
            class="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10"
            @click.prevent="handleNavClick(item.href)"
          >
            {{ item.label }}
          </a>

          <a
            :href="profile.cvLink"
            download="CV-Bintang-Wahyu.pdf"
            class="rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:-translate-y-0.5 hover:bg-sky-700"
          >
            {{ profile.cvLabel }}
          </a>

          <button
            type="button"
            @click="toggleTheme"
            class="mt-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-white/10 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
          >
            <span v-if="isDark">☀️ Mode Terang</span>
            <span v-else>🌙 Mode Gelap</span>
          </button>
        </div>
      </div>
    </header>

    <main class="pt-[84px] sm:pt-[88px]">
      <section
        id="home"
        class="scroll-mt-24 mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8 lg:pt-20"
      >
        <div class="grid gap-16 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
          <div class="space-y-8">
            <div class="space-y-5">
              <h1 class="max-w-3xl text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-4xl">
                Hi, I am {{ profile.name }}
              </h1>

              <p class="max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-400">
                {{ profile.summary }}
              </p>
            </div>

            <div class="flex flex-wrap gap-4">
              <a
                :href="profile.cvLink"
                download="CV-Bintang-Wahyu.pdf"
                class="rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:-translate-y-0.5 hover:bg-sky-700"
              >
                {{ profile.cvLabel }}
              </a>

              <a
                href="#projects"
                class="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                @click.prevent="scrollToSection('#projects')"
              >
                View Projects
              </a>

              <a
                href="#contact"
                class="rounded-full border border-slate-300 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-700 dark:border-white/10 dark:bg-slate-900/80 dark:text-white dark:hover:border-sky-400 dark:hover:text-sky-300"
                @click.prevent="scrollToSection('#contact')"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div class="hidden md:flex items-center justify-center">
            <div class="relative w-full max-w-[300px] sm:max-w-[340px] lg:max-w-[380px]">
              <div class="absolute -inset-4 rounded-[2.8rem] bg-gradient-to-br from-sky-200/60 via-indigo-200/40 to-transparent blur-2xl dark:from-sky-500/20 dark:via-indigo-500/10 dark:to-transparent"></div>

              <div class="hero-photo relative overflow-hidden rounded-[2.2rem] border border-white/60 bg-[#F4F7FB] p-4 shadow-[0_30px_80px_-25px_rgba(15,23,42,0.28)] backdrop-blur dark:border-white/10 dark:bg-slate-900/80 sm:p-5 lg:rounded-[2.7rem] lg:p-6">
                <img
                  src="/activities/Profil2.jpeg"
                  alt="Foto profil"
                  class="h-[320px] w-full rounded-[2rem] object-cover sm:h-[380px] lg:h-[440px] lg:rounded-[2.2rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="experience"
        class="scroll-mt-24 mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-10 lg:px-8"
      >
        <div class="flex items-end gap-6">
          <div class="space-y-3">
            <h2 class="text-3xl font-black tracking-tight text-slate-950 dark:text-white sm:text-4xl">
              Experience
            </h2>
          </div>
          <div class="hidden h-px flex-1 bg-gradient-to-r from-slate-300 to-transparent dark:from-white/10 lg:block"></div>
        </div>

        <div class="mt-10 grid gap-6 lg:grid-cols-3">
          <ExperienceCard
            v-for="item in paginatedExperiences"
            :key="`${item.role}-${item.organization}`"
            :period="item.period"
            :role="item.role"
            :organization="item.organization"
            :type="item.type"
            :description="item.description"
            :highlights="item.highlights"
          />
        </div>

        <div
          v-if="totalExperiencePages > 1"
          class="mt-10 flex items-center justify-center gap-3"
        >
          <button
            type="button"
            @click="previousExperiencePage"
            :disabled="currentExperiencePage === 0"
            class="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-white/10 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
          >
            ‹
          </button>

          <button
            v-for="page in totalExperiencePages"
            :key="page"
            type="button"
            @click="goToExperiencePage(page - 1)"
            class="flex h-12 w-12 items-center justify-center rounded-full text-base font-semibold transition"
            :class="
              currentExperiencePage === page - 1
                ? 'bg-slate-950 text-white shadow-md dark:bg-white dark:text-slate-900'
                : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 dark:border-white/10 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800'
            "
          >
            {{ page }}
          </button>

          <button
            type="button"
            @click="nextExperiencePage"
            :disabled="currentExperiencePage === totalExperiencePages - 1"
            class="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-white/10 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
          >
            ›
          </button>
        </div>
      </section>

      <section
        id="activities"
        class="scroll-mt-24 pb-16 pt-8 sm:pb-20 sm:pt-10"
      >
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ActivityShowcase :items="activities" />
        </div>
      </section>

      <section
        id="projects"
        class="scroll-mt-24 mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-10 lg:px-8"
      >
        <div class="flex items-end gap-6">
          <div class="space-y-3">
            <h2 class="text-3xl font-black tracking-tight text-slate-950 dark:text-white sm:text-4xl">
              Projects
            </h2>
          </div>
          <div class="hidden h-px flex-1 bg-gradient-to-r from-slate-300 to-transparent dark:from-white/10 lg:block"></div>
        </div>

        <div class="mt-10 space-y-8">
          <ProjectCard
            v-for="item in paginatedProjects"
            :key="item.title"
            :title="item.title"
            :category="item.category"
            :description="item.description"
            :stack="item.stack"
            :status="item.status"
            :image="item.image"
            :badge="item.badge"
          />
        </div>

        <div
          v-if="totalProjectPages > 1"
          class="mt-10 flex items-center justify-center gap-3"
        >
          <button
            type="button"
            @click="previousProjectPage"
            :disabled="currentProjectPage === 0"
            class="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-white/10 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
          >
            ‹
          </button>

          <button
            v-for="page in totalProjectPages"
            :key="page"
            type="button"
            @click="goToProjectPage(page - 1)"
            class="flex h-12 w-12 items-center justify-center rounded-full text-base font-semibold transition"
            :class="
              currentProjectPage === page - 1
                ? 'bg-slate-950 text-white shadow-md dark:bg-white dark:text-slate-900'
                : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 dark:border-white/10 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800'
            "
          >
            {{ page }}
          </button>

          <button
            type="button"
            @click="nextProjectPage"
            :disabled="currentProjectPage === totalProjectPages - 1"
            class="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-white/10 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
          >
            ›
          </button>
        </div>
      </section>

      <section
        id="achievements"
        class="scroll-mt-24 mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-10 lg:px-8"
      >
        <div class="flex items-end gap-6">
          <div class="space-y-3">
            <h2 class="text-3xl font-black tracking-tight text-slate-950 dark:text-white sm:text-4xl">
              Achievements
            </h2>
          </div>
          <div class="hidden h-px flex-1 bg-gradient-to-r from-slate-300 to-transparent dark:from-white/10 lg:block"></div>
        </div>

        <div class="mt-10 grid gap-6 lg:grid-cols-3">
          <article
            v-for="item in achievements"
            :key="item.title"
            class="rounded-[2rem] border border-slate-200 bg-[#F4F7FB] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-slate-900/80"
          >
            <div class="inline-flex rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700 dark:bg-amber-500/10 dark:text-amber-300">
              {{ item.year }}
            </div>

            <h3 class="mt-4 text-xl font-semibold text-slate-900 dark:text-white">
              {{ item.title }}
            </h3>
            <p class="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
              {{ item.description }}
            </p>
          </article>
        </div>
      </section>

      <section
        id="skills"
        class="scroll-mt-24 mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-10 lg:px-8"
      >
        <div class="rounded-[2.8rem] border border-slate-200 bg-[#F4F7FB] px-6 py-10 shadow-[0_20px_60px_-25px_rgba(15,23,42,0.16)] backdrop-blur dark:border-white/10 dark:bg-slate-900/75 sm:px-8">
          <div class="text-center">
            <h2 class="text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Skills & Tools
            </h2>
          </div>

          <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div
              v-for="item in skills"
              :key="item.name"
              class="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50/90 px-5 py-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-md dark:border-white/10 dark:bg-slate-800/70 dark:hover:border-sky-400/20"
            >
              <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm dark:bg-slate-900">
                <img :src="item.icon" :alt="item.name" class="h-6 w-6 object-contain" />
              </div>

              <div class="min-w-0">
                <p class="truncate text-sm font-semibold text-slate-900 dark:text-white">
                  {{ item.name }}
                </p>
                <p class="truncate text-xs text-slate-500 dark:text-slate-400">
                  {{ item.type }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        class="scroll-mt-24 mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-10 lg:px-8"
      >
        <div class="overflow-hidden rounded-[2.8rem] border border-slate-200 bg-[#F4F7FB] px-6 py-10 text-slate-900 shadow-[0_30px_80px_-30px_rgba(15,23,42,0.2)] backdrop-blur dark:border-white/10 dark:bg-slate-950/80 dark:text-white sm:px-10 lg:px-12">
          <div class="grid gap-10 lg:grid-cols-[1fr_0.92fr] lg:items-start">
            <div class="space-y-6 self-start">
              <div class="space-y-3">
                <h2 class="text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                  Contact
                </h2>
                <p class="max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
                  Please contact me via email or visit my professional profiles on Instagram, GitHub, and LinkedIn.
                </p>
              </div>

              <div class="flex flex-wrap gap-4">
                <a
                  :href="profile.instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:bg-slate-100 dark:border-white/20 dark:bg-slate-900/60 dark:text-white dark:hover:bg-white/10"
                >
                  <Instagram class="h-4 w-4" />
                  Instagram
                </a>

                <a
                  :href="profile.github"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:bg-slate-100 dark:border-white/20 dark:bg-slate-900/60 dark:text-white dark:hover:bg-white/10"
                >
                  <Github class="h-4 w-4" />
                  GitHub
                </a>

                <a
                  :href="profile.linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:bg-slate-100 dark:border-white/20 dark:bg-slate-900/60 dark:text-white dark:hover:bg-white/10"
                >
                  <Linkedin class="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </div>

            <div class="rounded-[2rem] border border-slate-200 bg-slate-50/90 p-6 dark:border-white/10 dark:bg-white/5">
              <div class="space-y-5">
                <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5">
                  <p class="text-sm text-slate-500 dark:text-slate-400">Email</p>
                  <p class="mt-2 text-lg font-semibold text-slate-900 dark:text-white">
                    {{ profile.email }}
                  </p>
                </div>

                <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5">
                  <p class="text-sm text-slate-500 dark:text-slate-400">Domicile</p>
                  <p class="mt-2 text-lg font-semibold text-slate-900 dark:text-white">
                    {{ profile.location }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
.hero-photo {
  animation: float-soft 5s ease-in-out infinite;
}

@keyframes float-soft {
  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-8px);
  }
}
</style>