const assert = require('assert')
const { When, Then } = require('@cucumber/cucumber')
const { Greeter } = require('../../src/index')

When('the greeter says hello', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('I should have heard {string}', function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});
