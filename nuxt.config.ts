export default defineNuxtConfig({
  extends: "content-wind",
  modules: ["@nuxthq/studio", "@nuxt/image"],
  routeRules: {
    "/": { prerender: true },
  },
});