<template>
  <header class="bg-gray-50 dark:bg-neutral-900">
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
        <button
          type="button"
          class="-m-2.5 p-2.5 rounded-full dark:hover:bg-neutral-800 hover:bg-slate-100 dark:text-gray-300 text-gray-700"
        >
          <img src="../../assets/images/flags/brazil.png" width="20" alt="Brazil Flag" />
        </button>
        <button
          type="button"
          class="-m-2.5 p-2.5 rounded-full dark:hover:bg-neutral-800 hover:bg-slate-100 dark:text-gray-300 text-gray-700"
        >
          <img src="../../assets/images/flags/usa.png" width="20" alt="USA Flag" />
        </button>
        <button
          v-if="!isDark"
          type="button"
          class="-m-2.5 p-2.5 rounded-full dark:hover:bg-neutral-800 hover:bg-slate-100 dark:text-gray-300 text-gray-700"
          @click="toggleDark()"
        >
          <span class="sr-only">Dark Mode</span>
          <MoonIcon class="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          v-else
          type="button"
          class="-m-2.5 p-2.5 rounded-full dark:hover:bg-neutral-800 hover:bg-slate-100 dark:text-gray-300 text-gray-700"
          @click="toggleDark()"
        >
          <span class="sr-only">Light Mode</span>
          <SunIcon class="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
      <div class="lg:hidden mt-6 flow-root">
        <div class="-my-6 divide-y divide-gray-500/10">
          <button
            type="button"
            class="-m-2.5 p-2.5 mr-2 rounded-full dark:hover:bg-neutral-800 dark:text-gray-300 text-gray-700"
          >
            <img
              src="../../assets/images/flags/brazil.png"
              width="20"
              alt="Brazil Flag"
            />
          </button>
          <button
            type="button"
            class="-m-2.5 p-2.5 mr-2 rounded-full dark:hover:bg-neutral-800 dark:text-gray-300 text-gray-700"
          >
            <img src="../../assets/images/flags/usa.png" width="20" alt="USA Flag" />
          </button>
          <button
            v-if="!isDark"
            type="button"
            class="-m-2.5 p-2.5 mr-2 rounded-full dark:hover:bg-neutral-800 dark:text-gray-300 text-gray-700"
            @click="toggleDark()"
          >
            <span class="sr-only">Dark Mode</span>
            <MoonIcon class="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            v-else
            type="button"
            class="-m-2.5 p-2.5 mr-2 rounded-full dark:hover:bg-neutral-800 dark:text-gray-300 text-gray-700"
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
import { MoonIcon, SunIcon } from "@heroicons/vue/24/outline";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<style>
</style>