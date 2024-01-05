<template>
  <section
    id="formacao"
    class="text-center mx-auto flex flex-col max-w-7xl justify-center p-6 lg:px-8"
    data-aos="zoom-in"
  >
    <h1
      class="text-3xl font-bold tracking-tight text-green-500 sm:text-4xl mb-5"
    >
      {{ $t("text10") }}
    </h1>
    <div
      class="flex flex-wrap justify-center lg:justify-between gap-6"
    >
      <div
        class="flex flex-col items-center justify-between text-center rounded-lg border-8 border-green-600 shadow-lg shadow-green-500/50 dark:bg-neutral-900 bg-gray-50 p-5 hover:scale-105 transition duration-700 h-85 w-80"
      >
        <img
          src="../../assets/images/graduation/logo-upf.png"
          class="mx-auto rounded-full w-40 mb-5"
          alt="UPF"
        />
        <span class="dark:text-gray-200 font-extrabold"
          >2020</span>
        <span class="dark:text-gray-200 font-extrabold"
          >{{ $t("text11") }} <br>{{ $t("text12") }}</span>
      </div>
      <div
        class="flex flex-col items-center justify-between text-center rounded-lg border-8 border-green-600 shadow-lg dark:bg-neutral-900 bg-gray-50 p-5 hover:scale-105 transition duration-700 h-85 w-80"
      >
        <img
          src="../../assets/images/graduation/logo-udemy.webp"
          class="mx-auto w-40 mb-5"
          alt="UPF"
        />
        <span class="dark:text-gray-200 font-extrabold"
          >2022</span>
        <span class="dark:text-gray-200 font-extrabold"
          >{{ $t("text13") }} <br> (incl. Vue Router & Vuex)</span>
      </div>
      <div
        class="flex flex-col items-center justify-between text-center rounded-lg border-8 border-green-600 shadow-lg dark:bg-neutral-900 bg-gray-50 p-5 hover:scale-105 transition duration-700 h-85 w-80"
      >
        <img
          src="../../assets/images/graduation/logo-rocketseat.jpg"
          class="mx-auto rounded-full w-40 mb-5"
          alt="UPF"
        />
        <span class="dark:text-gray-200 font-extrabold"
          >2020</span>
        <span class="dark:text-gray-200 font-extrabold"
          >{{ $t("text14") }} <br> {{ $t("text15") }} </span>
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

<style scoped>
section {
  margin-top: 14rem;
}
</style>