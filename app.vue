<template>
  <header class="bg-white dark:bg-neutral-900">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span
            class="text-green-600 dark:text-green-400 font-extrabold drop-shadow-lg"
            >JDS</span
          >
        </a>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 dark:text-gray-300 text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:gap-x-5">
        <a
          href="#"
          class="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300"
          >Sobre</a
        >
        <a
          href="#"
          class="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300"
          >Skills</a
        >
        <a
          href="#"
          class="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300"
          >Formação</a
        >
        <a
          href="#"
          class="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300"
          >Experiência</a
        >
        <a
          href="#"
          class="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300"
          >Projetos</a
        >
        <a
          href="#"
          class="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300"
          >Contato</a
        >
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:gap-x-6 lg:justify-end">
        <button
          type="button"
          class="-m-2.5 p-2.5 rounded-full dark:hover:bg-neutral-800 hover:bg-slate-100 dark:text-gray-300 text-gray-700"
        >
          <img src="./assets/images/brazil.png" width="20" alt="Brazil Flag" />
        </button>
        <button
          type="button"
          class="-m-2.5 p-2.5 rounded-full dark:hover:bg-neutral-800 hover:bg-slate-100 dark:text-gray-300 text-gray-700"
        >
          <img src="./assets/images/usa.png" width="20" alt="USA Flag" />
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
    </nav>
    <Dialog
      as="div"
      class="lg:hidden"
      @close="mobileMenuOpen = false"
      :open="mobileMenuOpen"
    >
      <div class="fixed inset-0 z-10" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto dark:bg-neutral-900 bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span
              class="text-green-600 dark:text-green-400 font-extrabold drop-shadow-lg"
              >Menu</span
            >
          </a>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 dark:text-gray-300 text-gray-700"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 dark:text-gray-300 text-gray-900 dark:hover:bg-neutral-800 hover:bg-gray-50"
                >Sobre</a
              >
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 dark:text-gray-300 text-gray-900 dark:hover:bg-neutral-800 hover:bg-gray-50"
                >Skills</a
              >
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 dark:text-gray-300 text-gray-900 dark:hover:bg-neutral-800 hover:bg-gray-50"
                >Formação</a
              >
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 dark:text-gray-300 text-gray-900 dark:hover:bg-neutral-800 hover:bg-gray-50"
                >Experiência</a
              >
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 dark:text-gray-300 text-gray-900 dark:hover:bg-neutral-800 hover:bg-gray-50"
                >Projetos</a
              >
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 dark:text-gray-300 text-gray-900 dark:hover:bg-neutral-800 hover:bg-gray-50"
                >Contato</a
              >
            </div>
            <div class="py-6">
              <button
                type="button"
                class="-m-2.5 p-2.5 mr-2 rounded-full dark:hover:bg-neutral-800 dark:text-gray-300 text-gray-700"
              >
                <img
                  src="./assets/images/brazil.png"
                  width="20"
                  alt="Brazil Flag"
                />
              </button>
              <button
                type="button"
                class="-m-2.5 p-2.5 mr-2 rounded-full dark:hover:bg-neutral-800 dark:text-gray-300 text-gray-700"
              >
                <img src="./assets/images/usa.png" width="20" alt="USA Flag" />
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
        </div>
      </DialogPanel>
    </Dialog>
  </header>
  <div
    class="mx-auto flex flex-col max-w-7xl lg:flex-row items-center justify-between p-6 lg:px-8"
  >
    <section class="lg:w-1/2 grid xl:grid-rows-3 p-6 lg:px-8">
      <h1
        class="text-3xl font-bold tracking-tight text-gray-700 dark:text-gray-300 sm:text-4xl"
      >
        <span class="text-green-600">Olá pessoal!</span> <br />
        Eu sou Jackson Dhanyel <span class="text-green-600">Santin</span>
      </h1>
      <p class="mt-6 text-lg leading-8 text-gray-700 dark:text-gray-300">
        Formado em análise e desenvolvimento de sistema, <br />
        Atuo como desenvolvedor web front-end há mais de 6 anos.
      </p>
      <div class="mt-10 flex items-center justify-start gap-x-6">
        <a
          href="#"
          class="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold tracking-[.10em] text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >Contate-me</a
        >
      </div>
    </section>
    <section class="lg:w-1/3 p-6 lg:px-8">
      <img
        src="./assets/images/jackson.jpg"
        class="rounded-full border-8 border-green-600"
        alt="Jackson"
      />
    </section>
  </div>
  <div class="mx-auto flex items-center justify-center p-6 lg:px-8">

  </div>
</template>

<script setup>
import { ref } from "vue";
import { PopoverGroup } from "@headlessui/vue";
import {
  Bars3Icon,
  XMarkIcon,
  MoonIcon,
  SunIcon,
  ArrowLongDownIcon,
} from "@heroicons/vue/24/outline";
import { PhoneIcon } from "@heroicons/vue/20/solid";
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);

const mobileMenuOpen = ref(false);
</script>