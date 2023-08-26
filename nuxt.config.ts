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
  sourcemap: false,
  modules: ["@nuxtjs/device", "@unocss/nuxt"],
});
