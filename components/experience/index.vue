<template>
  <section
    id="experiencia"
    class="text-center mx-auto flex flex-col max-w-7xl justify-center p-6 lg:px-8"
    data-aos="zoom-in"
  >
    <h1
      class="text-3xl font-bold tracking-tight text-green-500 sm:text-4xl mb-5"
    >
      Experiências Profissionais
    </h1>
    <div class="flex flex-wrap justify-center lg:justify-between gap-6">
      <div
        class="flex flex-col items-center justify-between text-center rounded-lg border-8 border-green-600 shadow-lg shadow-green-500/50 dark:bg-neutral-900 bg-gray-50 p-5 hover:scale-105 transition duration-700 h-80 w-80"
      >
        <span class="dark:text-gray-200 font-extrabold">Dev Front-end</span>
        <img :src="DeveloperJSON" alt="Developer" class="w-40 rounded-md" />
        <span class="dark:text-gray-200 font-extrabold">2022 - atual</span>
        <span class="dark:text-gray-200 font-extrabold"
          >CGI Software de Gestão</span
        >
      </div>
      <div
        class="flex flex-col items-center justify-between text-center rounded-lg border-8 border-green-600 shadow-lg shadow-green-500/50 dark:bg-neutral-900 bg-gray-50 p-5 hover:scale-105 transition duration-700 h-80 w-80"
      >
        <span class="dark:text-gray-200 font-extrabold">Dev Front-end</span>
        <img :src="DeveloperJSON" alt="Developer" class="w-40 rounded-md" />
        <span class="dark:text-gray-200 font-extrabold">2019 - 2022</span>
        <span class="dark:text-gray-200 font-extrabold"
          >VipWeb Soluções em Tecnologia</span
        >
      </div>
      <div
        class="flex flex-col items-center justify-between text-center rounded-lg border-8 border-green-600 shadow-lg shadow-green-500/50 dark:bg-neutral-900 bg-gray-50 p-5 hover:scale-105 transition duration-700 h-80 w-80"
      >
        <span class="dark:text-gray-200 font-extrabold">Suporte</span>
        <client-only>
          <Vue3Lottie
            :animation-data="SupportJSON"
            :height="200"
            :width="200"
          />
        </client-only>
        <span class="dark:text-gray-200 font-extrabold">2018 - 2019</span>
        <span class="dark:text-gray-200 font-extrabold"
          >VipWeb Soluções em Tecnologia</span
        >
      </div>
      <div
        class="flex flex-col items-center justify-between text-center rounded-lg border-8 border-green-600 shadow-lg shadow-green-500/50 dark:bg-neutral-900 bg-gray-50 p-5 hover:scale-105 transition duration-700 h-80 w-80"
      >
        <span class="dark:text-gray-200 font-extrabold">Vendedor</span>
        <client-only>
          <Vue3Lottie
            :animation-data="SalesmanJSON"
            :height="200"
            :width="200"
          />
        </client-only>
        <span class="dark:text-gray-200 font-extrabold">2017 - 2018</span>
        <span class="dark:text-gray-200 font-extrabold"
          >Ferragens União Colonial</span
        >
      </div>
    </div>
  </section>
</template>

<script setup>
import AOS from "aos";
import "aos/dist/aos.css";
import { Vue3Lottie } from "vue3-lottie";
import SalesmanJSON from "../../assets/images/lotties/salesman.json";
import SupportJSON from "../../assets/images/lotties/support.json";
import DeveloperJSON from "../../assets/images/lotties/developer.gif";

onMounted(() => {
  AOS.init();
});
</script>

<style scoped>
section {
  margin-top: 14rem;
}
</style>
