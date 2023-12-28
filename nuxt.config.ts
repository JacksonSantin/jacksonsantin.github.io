// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  devtools: { enabled: true },
  css: ['~/assets/css/main.css', '~/assets/css/global.css'],
  head: {
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap",
      },
    ],
  },
  modules: ['@nuxtjs/i18n', 'nuxt-icon'],
  i18n: {
    vueI18n: './i18n.config.ts'
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
}