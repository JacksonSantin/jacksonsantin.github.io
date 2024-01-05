<template>
  <div
    class="h-screen mx-auto flex flex-col max-w-7xl lg:flex-row items-center justify-between p-6 lg:px-8"
  >
    <section id="sobre" class="lg:w-1/2 grid xl:grid-rows-3 p-6 lg:px-8">
      <h1
        class="text-3xl font-bold tracking-tight text-gray-700 dark:text-gray-300 sm:text-4xl"
      >
        <span class="text-green-600">{{ $t("hello") }}</span> <br />
        {{ $t("text01") }} Jackson Dhanyel <span class="text-green-600">Santin</span>
      </h1>
      <p class="mt-6 text-lg leading-8 text-gray-700 dark:text-gray-300">
        {{ $t("text02") }}, <br />
        {{ $t("text03") }}.
      </p>
      <div class="mt-10 flex items-center justify-start gap-x-6">
        <nuxt-link
          href="#contato"
          class="rounded-md bg-green-500 px-3.5 py-2.5 text-sm font-semibold tracking-[.10em] text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >{{ $t("text04") }}</nuxt-link
        >
      </div>
    </section>
    <section class="lg:w-1/3 p-6 lg:px-8">
      <VanillaTilt :settings="tiltSettings">
        <img
          src="../../assets/images/jackson.jpg"
          class="rounded-full border-8 border-green-600 shadow-lg shadow-green-500/50"
          alt="Jackson"
        />
      </VanillaTilt>
    </section>
  </div>
</template>

<script setup>
import VanillaTilt from "vanilla-tilt-vue";
</script>

<style>
</style>