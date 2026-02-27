//Cucumber configuration file
//Exporting the configuration object for Cucumber.js
module.exports = {
  // help to run default configuration when we run the command "npx cucumber-js" in terminal
  default: {
    //Prerequisite files to be loaded before executing the test scenarios
    require: ['Cucumber/Hooks/hook.js', 'Cucumber/StepDefination/register.js'],
    requireModule: [],
    format: ['progress-bar', 'html:cucumber-report.html'],
    //modern syntax for step definitions
    formatOptions: { snippetInterface: 'async-await' },
    //telling Cucumber where to find the feature files
    paths: ['Cucumber/Feature/']
  }
};
