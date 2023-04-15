const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '4sb1f2',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
