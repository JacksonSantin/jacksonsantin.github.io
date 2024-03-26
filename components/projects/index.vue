<template>
  <section
    id="projetos"
    class="text-center mx-auto flex flex-col max-w-7xl items-center justify-center p-6 lg:px-8"
    data-aos="zoom-in"
  >
    <h1
      class="text-3xl font-bold tracking-tight text-green-500 sm:text-4xl mb-5"
    >
      {{ $t("text06") }}
    </h1>
    <div
      class="flex flex-wrap justify-center lg:justify-between gap-6 lg:gap-5"
    >
      <nuxt-link href="https://iphone-clone.vercel.app/" target="_blank">
        <div
          class="flex flex-col justify-between text-center rounded-lg dark:bg-neutral-900 bg-gray-50 p-10 lg:px-8 hover:scale-105 transition duration-700 h-80"
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
      </nuxt-link>
      <nuxt-link href="https://lp-form-contact.vercel.app/" target="_blank">
        <div
          class="flex flex-col justify-between text-center rounded-lg dark:bg-neutral-900 bg-gray-50 p-10 lg:px-8 hover:scale-105 transition duration-700 h-80"
        >
          <img
            src="../../assets/images/projects/contact-lp.png"
            class="w-48 lg:w-80 mb-5"
            alt="Contato"
          />
          <span class="dark:text-gray-200 font-extrabold"
            >{{ $t("text07") }}</span
          >
        </div>
      </nuxt-link>
      <nuxt-link
        href="https://crypto-currency-page.vercel.app/"
        target="_blank"
      >
        <div
          class="flex flex-col justify-between text-center rounded-lg dark:bg-neutral-900 bg-gray-50 p-10 lg:px-8 hover:scale-105 transition duration-700 h-80"
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
      </nuxt-link>
      <nuxt-link
        href="https://busca-cep-api-git-main-jacksonsantin.vercel.app/"
        target="_blank"
      >
        <div
          class="flex flex-col justify-between text-center rounded-lg dark:bg-neutral-900 bg-gray-50 p-10 lg:px-8 hover:scale-105 transition duration-700 h-80"
        >
          <img
            src="../../assets/images/projects/busca-cep.png"
            class="w-48 lg:w-80 mb-5"
            alt="CEP"
          />
          <span class="dark:text-gray-200 font-extrabold">{{ $t("text08") }}</span>
        </div>
      </nuxt-link>
      <nuxt-link
        href="https://consuming-fipe-api-web.vercel.app/"
        target="_blank"
      >
        <div
          class="flex flex-col justify-between text-center rounded-lg dark:bg-neutral-900 bg-gray-50 p-10 lg:px-8 hover:scale-105 transition duration-700 h-80"
        >
          <img
            src="../../assets/images/projects/fipe.png"
            class="w-48 lg:w-80 mb-5"
            alt="Fipe"
          />
          <span class="dark:text-gray-200 font-extrabold">{{ $t("text09") }}</span>
        </div>
      </nuxt-link>
      <nuxt-link
        href="https://codepen-clone-project.vercel.app/"
        target="_blank"
      >
        <div
          class="flex flex-col justify-between text-center rounded-lg dark:bg-neutral-900 bg-gray-50 p-10 lg:px-8 hover:scale-105 transition duration-700 h-80"
        >
          <img
            src="../../assets/images/projects/codepen.png"
            class="w-48 lg:w-80 mb-5"
            alt="Codepen"
          />
          <span class="dark:text-gray-200 font-extrabold">Codepen</span>
        </div>
      </nuxt-link>
      <nuxt-link
        href="https://jacksonsantin-rinha-frontend.vercel.app/"
        target="_blank"
      >
        <div
          class="flex flex-col justify-between text-center rounded-lg dark:bg-neutral-900 bg-gray-50 p-10 lg:px-8 hover:scale-105 transition duration-700 h-80"
        >
          <img
            src="../../assets/images/projects/json_tree_view.png"
            class="w-48 lg:w-80 mb-5"
            alt="JSON Tree View"
          />
          <span class="dark:text-gray-200 font-extrabold">JSON Tree View</span>
        </div>
      </nuxt-link>
      <nuxt-link
        href="https://qr-code-generator-git-main-jacksonsantin.vercel.app/"
        target="_blank"
      >
        <div
          class="flex flex-col justify-between text-center rounded-lg dark:bg-neutral-900 bg-gray-50 p-10 lg:px-8 hover:scale-105 transition duration-700 h-80"
        >
          <img
            src="../../assets/images/projects/qr_code_generator.png"
            class="w-48 lg:w-80 mb-5"
            alt="QR Code"
          />
          <span class="dark:text-gray-200 font-extrabold"
            >QR Code Generator</span
          >
        </div>
      </nuxt-link>
      <nuxt-link href="https://brasil-api-application-web.vercel.app/" target="_blank">
        <div
          class="flex flex-col justify-between text-center rounded-lg dark:bg-neutral-900 bg-gray-50 p-10 lg:px-8 hover:scale-105 transition duration-700 h-80"
        >
          <img
            src="../../assets/images/projects/brasil-api.png"
            class="w-48 lg:w-80 mb-5"
            alt="Brasil API"
          />
          <span class="dark:text-gray-200 font-extrabold">Brasil API</span>
        </div>
      </nuxt-link>
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

<style scoped>
section {
  margin-top: 14rem;
}
</style>