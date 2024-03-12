const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://acolhe-disciplina.innovagovlab.org/entrar',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
