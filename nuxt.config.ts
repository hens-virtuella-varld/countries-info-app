// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Countries Info App',
      meta: [
        {
          name: 'description',
          content:
            'A responsive app which shows countries info using Nuxt.js and Tailwind.',
        },
      ],
    },
  },
});
