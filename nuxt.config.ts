export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  typescript: {
    shim: false,
  },
  experimental: {
    typedPages: true,
  },
  modules: ["@nuxtjs/device", "@unocss/nuxt"],
});
