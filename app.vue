<template>
  <header class="bg-gray-50 dark:bg-neutral-900">
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
      <!-- <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 dark:text-gray-300 text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div> -->
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
      <div class="lg:hidden mt-6 flow-root">
        <div class="-my-6 divide-y divide-gray-500/10">
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
    </nav>
  </header>
  <div
    class="mx-auto flex flex-col max-w-7xl lg:flex-row items-center justify-between p-6 lg:px-8 my-10"
  >
    <section id="sobre" class="lg:w-1/2 grid xl:grid-rows-3 p-6 lg:px-8">
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
          href="#contato"
          class="rounded-md bg-green-500 px-3.5 py-2.5 text-sm font-semibold tracking-[.10em] text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >Contate-me</a
        >
      </div>
    </section>
    <section class="lg:w-1/3 p-6 lg:px-8">
      <VanillaTilt :settings="tiltSettings">
        <img
          src="./assets/images/jackson.jpg"
          class="rounded-full border-8 border-green-600 shadow-lg shadow-green-500/50"
          alt="Jackson"
        />
      </VanillaTilt>
    </section>
  </div>

  <div
    class="mx-auto flex flex-col max-w-7xl items-center justify-center p-6 lg:px-8 my-10"
  >
    <section id="skills" class="text-center" data-aos="zoom-in">
      <h1
        class="text-3xl font-bold tracking-tight text-green-500 sm:text-4xl mb-5"
      >
        Minhas Skills
      </h1>
      <div
        class="flex flex-wrap justify-center lg:justify-between gap-6 lg:gap-6"
      >
        <div
          class="html flex flex-col justify-between text-center rounded-lg border-4 border-green-400 dark:bg-neutral-900 bg-white p-10 lg:px-8 hover:scale-105 transition duration-700"
        >
          <img
            src="./assets/images/skills/html-icon.png"
            class="w-48 mb-5"
            alt="HTML"
          />
          <span class="dark:text-gray-200 font-extrabold">HTML 5</span>
        </div>
        <div
          class="css flex flex-col justify-between text-center rounded-lg border-4 border-green-400 dark:bg-neutral-900 bg-white p-10 lg:px-8 hover:scale-105 transition duration-700"
        >
          <img
            src="./assets/images/skills/css-icon.png"
            class="w-48 mb-5"
            alt="CSS"
          />
          <span class="dark:text-gray-200 font-extrabold">CSS 3</span>
        </div>
        <div
          class="js flex flex-col justify-between text-center rounded-lg border-4 border-green-400 dark:bg-neutral-900 bg-white p-10 lg:px-8 hover:scale-105 transition duration-700"
        >
          <img
            src="./assets/images/skills/js-icon.png"
            class="w-48 mb-5"
            alt="JS"
          />
          <span class="dark:text-gray-200 font-extrabold">Javascript</span>
        </div>
        <div
          class="vue flex flex-col justify-between text-center rounded-lg border-4 border-green-400 dark:bg-neutral-900 bg-white p-10 lg:px-8 hover:scale-105 transition duration-700"
        >
          <img
            src="./assets/images/skills/vuejs-icon.png"
            class="w-48 mb-5"
            alt="VUE"
          />
          <span class="dark:text-gray-200 font-extrabold">VueJS</span>
        </div>
        <div
          class="vuetify flex flex-col justify-between text-center rounded-lg border-4 border-green-400 dark:bg-neutral-900 bg-white p-10 lg:px-8 hover:scale-105 transition duration-700"
        >
          <img
            src="./assets/images/skills/vuetify-icon.svg"
            class="w-48 mb-5"
            alt="VUETIFY"
          />
          <span class="dark:text-gray-200 font-extrabold">Vuetify</span>
        </div>
        <div
          class="tailwind flex flex-col justify-between text-center rounded-lg border-4 border-green-400 dark:bg-neutral-900 bg-white p-10 lg:px-8 hover:scale-105 transition duration-700"
        >
          <img
            src="./assets/images/skills/tailwind-icon.png"
            class="w-48 mb-5"
            alt="TAILWIND"
          />
          <span class="dark:text-gray-200 font-extrabold">Tailwind</span>
        </div>
        <div
          class="php flex flex-col justify-between text-center rounded-lg border-4 border-green-400 dark:bg-neutral-900 bg-white p-10 lg:px-8 hover:scale-105 transition duration-700"
        >
          <img
            src="./assets/images/skills/php-icon.png"
            class="w-48 mb-5"
            alt="PHP"
          />
          <span class="dark:text-gray-200 font-extrabold">PHP</span>
        </div>
        <div
          class="php flex flex-col justify-between text-center rounded-lg border-4 border-green-400 dark:bg-neutral-900 bg-white p-10 lg:px-8 hover:scale-105 transition duration-700"
        >
          <img
            src="./assets/images/skills/git-icon.png"
            class="w-48 mb-5"
            alt="GIT"
          />
          <span class="dark:text-gray-200 font-extrabold">GIT</span>
        </div>
      </div>
    </section>
  </div>

  <div
    class="mx-auto flex flex-col max-w-7xl items-center justify-center p-6 lg:px-8"
  >
    <section id="projetos" class="text-center" data-aos="zoom-in">
      <h1
        class="text-3xl font-bold tracking-tight text-green-500 sm:text-4xl mb-5"
      >
        Meu Portfólio
      </h1>
      <div
        class="flex flex-wrap justify-center lg:justify-between gap-6 lg:gap-5"
      >
        <div
          class="flex flex-col justify-between text-center rounded-lg border-4 border-green-400 dark:bg-neutral-900 bg-white p-10 lg:px-8 hover:scale-105 transition duration-700"
        >
          <img
            src="./assets/images/projects/apple-lp.png"
            class="w-48 lg:w-80 mb-5"
            alt="Apple"
          />
          <span class="dark:text-gray-200 font-extrabold"
            >Landing Page Apple</span
          >
        </div>
        <div
          class="flex flex-col justify-between text-center rounded-lg border-4 border-green-400 dark:bg-neutral-900 bg-white p-10 lg:px-8 hover:scale-105 transition duration-700"
        >
          <img
            src="./assets/images/projects/contact-lp.png"
            class="w-48 lg:w-80 mb-5"
            alt="Contato"
          />
          <span class="dark:text-gray-200 font-extrabold"
            >Landing Page Contato</span
          >
        </div>
        <div
          class="flex flex-col justify-between text-center rounded-lg border-4 border-green-400 dark:bg-neutral-900 bg-white p-10 lg:px-8 hover:scale-105 transition duration-700"
        >
          <img
            src="./assets/images/projects/crypto-lp.png"
            class="w-48 lg:w-80 mb-5"
            alt="Crypto"
          />
          <span class="dark:text-gray-200 font-extrabold"
            >Landing Page Crypto</span
          >
        </div>
        <div
          class="flex flex-col justify-between text-center rounded-lg border-4 border-green-400 dark:bg-neutral-900 bg-white p-10 lg:px-8 hover:scale-105 transition duration-700"
        >
          <img
            src="./assets/images/projects/busca-cep.png"
            class="w-48 lg:w-80 mb-5"
            alt="CEP"
          />
          <span class="dark:text-gray-200 font-extrabold">Busca CEP</span>
        </div>
        <div
          class="flex flex-col justify-between text-center rounded-lg border-4 border-green-400 dark:bg-neutral-900 bg-white p-10 lg:px-8 hover:scale-105 transition duration-700"
        >
          <img
            src="./assets/images/projects/fipe.png"
            class="w-48 lg:w-80 mb-5"
            alt="Fipe"
          />
          <span class="dark:text-gray-200 font-extrabold">Fipe</span>
        </div>
        <div
          class="flex flex-col justify-between text-center rounded-lg border-4 border-green-400 dark:bg-neutral-900 bg-white p-10 lg:px-8 hover:scale-105 transition duration-700"
        >
          <img
            src="./assets/images/projects/codepen.png"
            class="w-48 lg:w-80 mb-5"
            alt="Codepen"
          />
          <span class="dark:text-gray-200 font-extrabold">Codepen</span>
        </div>
        <div
          class="flex flex-col justify-between text-center rounded-lg border-4 border-green-400 dark:bg-neutral-900 bg-white p-10 lg:px-8 hover:scale-105 transition duration-700"
        >
          <img
            src="./assets/images/projects/json_tree_view.png"
            class="w-48 lg:w-80 mb-5"
            alt="JSON Tree View"
          />
          <span class="dark:text-gray-200 font-extrabold">JSON Tree View</span>
        </div>
        <div
          class="flex flex-col justify-between text-center rounded-lg border-4 border-green-400 dark:bg-neutral-900 bg-white p-10 lg:px-8 hover:scale-105 transition duration-700"
        >
          <img
            src="./assets/images/projects/qr_code_generator.png"
            class="w-48 lg:w-80 mb-5"
            alt="QR Code"
          />
          <span class="dark:text-gray-200 font-extrabold">QR Code</span>
        </div>
        <div
          class="flex flex-col justify-between text-center rounded-lg border-4 border-green-400 dark:bg-neutral-900 bg-white p-10 lg:px-8 hover:scale-105 transition duration-700"
        >
          <img
            src="./assets/images/projects/orkut.png"
            class="w-48 lg:w-80 mb-5"
            alt="orkut"
          />
          <span class="dark:text-gray-200 font-extrabold">Orkut</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import VanillaTilt from "vanilla-tilt-vue";
import {
  MoonIcon,
  SunIcon,
  ArrowLongDownIcon,
} from "@heroicons/vue/24/outline";
import { PhoneIcon } from "@heroicons/vue/20/solid";
import { useDark, useToggle } from "@vueuse/core";
import AOS from "aos";
import "aos/dist/aos.css";

onMounted(() => {
  AOS.init();
});

const isDark = useDark();
const toggleDark = useToggle(isDark);

const tiltSettings = {
  max: 25,
  speed: 400,
  glare: true,
  "max-glare": 0.5,
};

const mobileMenuOpen = ref(false);
</script>