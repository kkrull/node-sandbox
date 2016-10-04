var seleniumWebdriver = require('selenium-webdriver');

module.exports = function () {
  this.Given(/^I am on the Cucumber.js GitHub repository$/, function() {
    return this.driver.get('https://github.com/cucumber/cucumber-js/tree/master');
  });

  this.When(/^I click on "([^"]*)"$/, function (text) {
    return this.driver.findElement({linkText: text}).then(function(element) {
      return element.click();
    });
  });

  this.Then(/^I should see "([^"]*)"$/, function (text) {
    var xpath = "//*[contains(text(),'" + text + "')]";
    var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
    return this.driver.wait(condition, 5000);
  });
};
