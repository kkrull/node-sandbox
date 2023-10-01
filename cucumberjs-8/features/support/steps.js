const assert = require('assert')
const { When, Then } = require('@cucumber/cucumber')
const { Greeter } = require('../../src/index')

When('the greeter says hello', function () {
  const subject = new Greeter();
  this.whatIHeard = subject.sayHello();
});

Then('I should have heard {string}', function (expected) {
  assert.equal(expected, this.whatIHeard)
});
