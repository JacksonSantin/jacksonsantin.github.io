<template>
  <header class="bg-gray-50 dark:bg-neutral-900 lg:fixed top-0 left-0 right-0 z-10">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <nuxt-link href="#" class="-m-1.5 p-1.5">
          <span
            class="text-green-600 dark:text-green-400 font-extrabold drop-shadow-lg"
            >JDS</span
          >
        </nuxt-link>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:gap-x-6 lg:justify-end">
        <select
          v-model="locale"
          class="h-full rounded-md border-0 py-1.5 pl-4 pr-9 ring-1 ring-inset dark:bg-neutral-900 dark:text-gray-300 dark:ring-neutral-800 dark:focus:ring-neutral-800 ring-gray-300 outline-0 focus:ring-gray-300 text-gray-400 bg-gray-50 shadow-sm sm:max-w-xs sm:text-sm sm:leading-6"
        >
          <option value="pt">Português</option>
          <option value="en">Inglês</option>
        </select>
        <NuxtLink
          class="-m-1.5 p-2.5 cursor-pointer rounded-full dark:hover:bg-neutral-800 hover:bg-slate-100 dark:text-gray-300 text-gray-700"
          @click.prevent="downloadFile"
        >
          <span class="sr-only">Curriculo</span>
          <IdentificationIcon class="h-5 w-5" aria-hidden="true" />
        </NuxtLink>
        <button
          v-if="!isDark"
          type="button"
          class="-m-1.5 p-2.5 rounded-full dark:hover:bg-neutral-800 hover:bg-slate-100 dark:text-gray-300 text-gray-700"
          @click="toggleDark()"
        >
          <span class="sr-only">Dark Mode</span>
          <MoonIcon class="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          v-else
          type="button"
          class="-m-1.5 p-2.5 rounded-full dark:hover:bg-neutral-800 hover:bg-slate-100 dark:text-gray-300 text-gray-700"
          @click="toggleDark()"
        >
          <span class="sr-only">Light Mode</span>
          <SunIcon class="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
      <div class="lg:hidden mt-6 flow-root">
        <div class="-my-6 flex divide-y divide-gray-500/10">
          <select
            v-model="locale"
            class="h-full rounded-md border-0 mr-5 py-1.5 pl-4 pr-9 ring-1 ring-inset dark:bg-neutral-900 dark:text-gray-300 dark:ring-neutral-800 dark:focus:ring-neutral-800 ring-gray-300 outline-0 focus:ring-gray-300 text-gray-400 bg-gray-50 shadow-sm sm:max-w-xs sm:text-sm sm:leading-6"
          >
            <option value="pt">PT</option>
            <option value="en">US</option>
          </select>
          <NuxtLink
            class="-m-1.5 p-2.5 mr-5 cursor-pointer rounded-full dark:hover:bg-neutral-800 dark:text-gray-300 text-gray-700"
            @click.prevent="downloadFile"
          >
            <span class="sr-only">Curriculo</span>
            <IdentificationIcon class="h-5 w-5" aria-hidden="true" />
          </NuxtLink>
          <button
            v-if="!isDark"
            type="button"
            class="-m-1.5 p-2.5 mr-5 rounded-full dark:hover:bg-neutral-800 dark:text-gray-300 text-gray-700"
            @click="toggleDark()"
          >
            <span class="sr-only">Dark Mode</span>
            <MoonIcon class="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            v-else
            type="button"
            class="-m-1.5 p-2.5 mr-5 rounded-full dark:hover:bg-neutral-800 dark:text-gray-300 text-gray-700"
            @click="toggleDark()"
          >
            <span class="sr-only">Light Mode</span>
            <SunIcon class="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { useDark, useToggle } from "@vueuse/core";
import { IdentificationIcon } from "@heroicons/vue/24/solid";
import { MoonIcon, SunIcon } from "@heroicons/vue/24/outline";
const { locale } = useI18n();

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<script>
export default {
  methods: {
    downloadFile() {
      const fileUrl =
        "https://drive.google.com/uc?export=download&id=1qfEPgedOfonHsdSiHGqnTbGfOxKuOUIp";
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = "curriculo.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
  },
};
</script>

<style>
</style>