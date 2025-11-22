import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./app/assets/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  nitro: {
    prerender: {
      autoSubfolderIndex: false,
      routes: ['/']
    },
    preset: 'static',
    firebase: {
      gen: 2 // Use Firebase Functions Generation 2
    }
  },
  ssr: true,

  runtimeConfig: {
    public: {
      siteUrl: 'https://senghong-portfolio.web.app',
      // Alternative domain:
      // - https://senghong.pages.dev
    }
  },
})
