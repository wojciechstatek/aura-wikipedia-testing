const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    useInlineDiffs: true,
    embeddedScreenshots: true,
    reportDir: 'cypress/results',
    reportFilename: '[name].html',
    overwrite: true,
    html: true,
    json: true,
  },
  e2e: {
    baseUrl: "http://en.wikipedia.org",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
