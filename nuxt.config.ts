import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  publicRuntimeConfig: {
    BASE_URL: process.env.BASE_URL,
  },
  ssr:false,
  publicPath: 'nuxt/',
  app: {
    head: {
      title: 'Thinkin Service',
      titleTemplate: '%s - Thinkin Service',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Thinkin Dragon',
        },
      ],
      link: [
        // <link rel="stylesheet" href="https://myawesome-lib.css"> integrity:"sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p", crossorigin:"anonymous"
        { rel: 'stylesheet', href: 'https://pro.fontawesome.com/releases/v5.10.0/css/all.css' }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },  
  buildModules: [
    // pinia plugin - https://pinia.esm.dev
    "@pinia/nuxt",
  ],
  css: ['~/assets/css/tailwind.css'],
})
