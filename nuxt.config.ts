export default defineNuxtConfig({
  extends: "content-wind",
  modules: ["@nuxthq/studio", "@nuxt/image", "@nuxt/ui"],
  routeRules: {
    "/": { prerender: true },
  },
});