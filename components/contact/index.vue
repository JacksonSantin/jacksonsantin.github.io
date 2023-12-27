<template>
  <div
    class="h-screen mx-auto flex flex-col max-w-7xl lg:flex-row items-center justify-between p-6 lg:px-8"
  >
    <section class="lg:w-1/3 p-6 lg:px-8">
      <client-only>
        <Vue3Lottie :animation-data="ContactJSON" />
      </client-only>
    </section>
    <section id="contato" class="lg:w-1/2 grid" data-aos="zoom-in">
      <h1
        class="text-3xl font-bold tracking-tight text-green-500 sm:text-4xl mb-5"
      >
        Contato
      </h1>
      <div class="grid grid-col-6">
        <form ref="form" @submit.prevent="sendEmail">
          <div class="space-y-12">
            <div class="my-5">
              <div
                class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
              >
                <div class="col-span-12">
                  <label
                    for="name"
                    class="block text-sm font-medium leading-6 dark:text-white text-gray-900"
                    >Nome</label
                  >
                  <div class="mt-2">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      class="block w-full rounded-md border-0 py-1.5 px-2.5 dark:text-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-0 focus:ring-green-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div class="col-span-12">
                  <label
                    for="email"
                    class="block text-sm font-medium leading-6 dark:text-white text-gray-900"
                    >E-mail</label
                  >
                  <div class="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      class="block w-full rounded-md border-0 py-1.5 px-2.5 dark:text-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-0 focus:ring-green-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div class="col-span-12">
                  <label
                    for="phone"
                    class="block text-sm font-medium leading-6 dark:text-white text-gray-900"
                    >Telefone</label
                  >
                  <div class="mt-2">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      class="block w-full rounded-md border-0 py-1.5 px-2.5 dark:text-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-0 focus:ring-green-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div class="col-span-12">
                  <label
                    for="company"
                    class="block text-sm font-medium leading-6 dark:text-white text-gray-900"
                    >Empresa</label
                  >
                  <div class="mt-2">
                    <input
                      type="text"
                      name="company"
                      id="company"
                      class="block w-full rounded-md border-0 py-1.5 px-2.5 dark:text-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-0 focus:ring-green-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div class="col-span-12">
                  <label
                    for="message"
                    class="block text-sm font-medium leading-6 dark:text-white text-gray-900"
                    >Mensagem</label
                  >
                  <div class="mt-2">
                    <textarea
                      id="message"
                      name="message"
                      rows="3"
                      class="block w-full rounded-md border-0 py-1.5 px-2.5 dark:text-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-0 focus:ring-green-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex items-center justify-start gap-x-6">
            <button
              type="submit"
              class="rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup>
import AOS from "aos";
import "aos/dist/aos.css";
import { Vue3Lottie } from "vue3-lottie";
import ContactJSON from "../../assets/images/lotties/contact.json";

onMounted(() => {
  AOS.init();
});
</script>

<script>
import emailjs from "@emailjs/browser";

export default {
  methods: {
    sendEmail() {
      const formElement = this.$refs.form;
      emailjs
        .sendForm(
          "gmailMessage",
          "template_rdu5oja",
          formElement,
          "user_0VFYQ4JjMn4RkCcdx9GRB"
        )
        .then(
          () => {
            // this.$swal("Obrigado :)", "Mensagem enviada com sucesso!", "success");
            console.log("Mensagem enviada com sucesso!");
          },
          () => {
            // this.$swal(
            //   "Oops :(",
            //   "Mensagem não enviada, tente novamente!",
            //   "error"
            // );
            console.log("Erro ao enviar mensagem!");
          }
        );
    },
  },
};
</script>

<style scoped>
section {
  margin-top: 14rem;
}
</style>
