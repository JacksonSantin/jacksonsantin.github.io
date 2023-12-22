<template>
  <section
    id="skills"
    class="text-center mx-auto flex flex-col max-w-7xl items-center justify-center p-6 lg:px-8"
    data-aos="zoom-in"
  >
    <h1
      class="text-3xl font-bold tracking-tight text-green-500 sm:text-4xl mb-5"
    >
      Minhas Skills
    </h1>
    <div
      class="flex flex-wrap justify-center lg:justify-between gap-6 lg:gap-6"
    >
      <div
        class="html flex flex-col justify-between text-center rounded-lg dark:bg-neutral-900 bg-gray-50 p-10 lg:px-8 hover:scale-105 transition duration-700"
      >
        <img
          src="../../assets/images/skills/html-icon.png"
          class="w-48 mb-5"
          alt="HTML"
        />
        <span class="dark:text-gray-200 font-extrabold">HTML 5</span>
      </div>
      <div
        class="css flex flex-col justify-between text-center rounded-lg dark:bg-neutral-900 bg-gray-50 p-10 lg:px-8 hover:scale-105 transition duration-700"
      >
        <img
          src="../../assets/images/skills/css-icon.png"
          class="w-48 mb-5"
          alt="CSS"
        />
        <span class="dark:text-gray-200 font-extrabold">CSS 3</span>
      </div>
      <div
        class="js flex flex-col justify-between text-center rounded-lg dark:bg-neutral-900 bg-gray-50 p-10 lg:px-8 hover:scale-105 transition duration-700"
      >
        <img
          src="../../assets/images/skills/js-icon.png"
          class="w-48 mb-5"
          alt="JS"
        />
        <span class="dark:text-gray-200 font-extrabold">Javascript</span>
      </div>
      <div
        class="vue flex flex-col justify-between text-center rounded-lg dark:bg-neutral-900 bg-gray-50 p-10 lg:px-8 hover:scale-105 transition duration-700"
      >
        <img
          src="../../assets/images/skills/vuejs-icon.png"
          class="w-48 mb-5"
          alt="VUE"
        />
        <span class="dark:text-gray-200 font-extrabold">VueJS</span>
      </div>
      <div
        class="vuetify flex flex-col justify-between text-center rounded-lg dark:bg-neutral-900 bg-gray-50 p-10 lg:px-8 hover:scale-105 transition duration-700"
      >
        <img
          src="../../assets/images/skills/vuetify-icon.svg"
          class="w-48 mb-5"
          alt="VUETIFY"
        />
        <span class="dark:text-gray-200 font-extrabold">Vuetify</span>
      </div>
      <div
        class="tailwind flex flex-col justify-between text-center rounded-lg dark:bg-neutral-900 bg-gray-50 p-10 lg:px-8 hover:scale-105 transition duration-700"
      >
        <img
          src="../../assets/images/skills/tailwind-icon.png"
          class="w-48 mb-5"
          alt="TAILWIND"
        />
        <span class="dark:text-gray-200 font-extrabold">Tailwind</span>
      </div>
      <div
        class="php flex flex-col justify-between text-center rounded-lg dark:bg-neutral-900 bg-gray-50 p-10 lg:px-8 hover:scale-105 transition duration-700"
      >
        <img
          src="../../assets/images/skills/php-icon.png"
          class="w-48 mb-5"
          alt="PHP"
        />
        <span class="dark:text-gray-200 font-extrabold">PHP</span>
      </div>
      <div
        class="php flex flex-col justify-between text-center rounded-lg dark:bg-neutral-900 bg-gray-50 p-10 lg:px-8 hover:scale-105 transition duration-700"
      >
        <img
          src="../../assets/images/skills/git-icon.png"
          class="w-48 mb-5"
          alt="GIT"
        />
        <span class="dark:text-gray-200 font-extrabold">GIT</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import AOS from "aos";
import "aos/dist/aos.css";

onMounted(() => {
  AOS.init();
});
</script>