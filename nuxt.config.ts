export default defineNuxtConfig({
  // extends: "content-wind",
  devtools: { enabled: true },
  modules: ["@nuxt/content", "@nuxthq/studio", "@nuxt/image", "@nuxt/ui"],
  routeRules: {
    "/": { prerender: true },
  },
});