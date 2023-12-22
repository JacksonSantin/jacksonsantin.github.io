<template>
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
            src="../../assets/images/projects/apple-lp.png"
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
            src="../../assets/images/projects/contact-lp.png"
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
            src="../../assets/images/projects/crypto-lp.png"
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
            src="../../assets/images/projects/busca-cep.png"
            class="w-48 lg:w-80 mb-5"
            alt="CEP"
          />
          <span class="dark:text-gray-200 font-extrabold">Busca CEP</span>
        </div>
        <div
          class="flex flex-col justify-between text-center rounded-lg border-4 border-green-400 dark:bg-neutral-900 bg-white p-10 lg:px-8 hover:scale-105 transition duration-700"
        >
          <img
            src="../../assets/images/projects/fipe.png"
            class="w-48 lg:w-80 mb-5"
            alt="Fipe"
          />
          <span class="dark:text-gray-200 font-extrabold">Fipe</span>
        </div>
        <div
          class="flex flex-col justify-between text-center rounded-lg border-4 border-green-400 dark:bg-neutral-900 bg-white p-10 lg:px-8 hover:scale-105 transition duration-700"
        >
          <img
            src="../../assets/images/projects/codepen.png"
            class="w-48 lg:w-80 mb-5"
            alt="Codepen"
          />
          <span class="dark:text-gray-200 font-extrabold">Codepen</span>
        </div>
        <div
          class="flex flex-col justify-between text-center rounded-lg border-4 border-green-400 dark:bg-neutral-900 bg-white p-10 lg:px-8 hover:scale-105 transition duration-700"
        >
          <img
            src="../../assets/images/projects/json_tree_view.png"
            class="w-48 lg:w-80 mb-5"
            alt="JSON Tree View"
          />
          <span class="dark:text-gray-200 font-extrabold">JSON Tree View</span>
        </div>
        <div
          class="flex flex-col justify-between text-center rounded-lg border-4 border-green-400 dark:bg-neutral-900 bg-white p-10 lg:px-8 hover:scale-105 transition duration-700"
        >
          <img
            src="../../assets/images/projects/qr_code_generator.png"
            class="w-48 lg:w-80 mb-5"
            alt="QR Code"
          />
          <span class="dark:text-gray-200 font-extrabold">QR Code</span>
        </div>
        <div
          class="flex flex-col justify-between text-center rounded-lg border-4 border-green-400 dark:bg-neutral-900 bg-white p-10 lg:px-8 hover:scale-105 transition duration-700"
        >
          <img
            src="../../assets/images/projects/orkut.png"
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
import AOS from "aos";
import "aos/dist/aos.css";

onMounted(() => {
  AOS.init();
});
</script>

<style>
</style>