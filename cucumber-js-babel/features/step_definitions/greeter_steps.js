import Greeter from '../../src/greeter';

var expect = require('expect');

var stepWrapper = function() {
  this.Given(/^a greeter$/, function() {
    this.greeter = new Greeter();
  });

  this.When(/^I ask it for a general greeting$/, function() {
    this.greeting = this.greeter.sayHello();
  });

  this.Then(/^it should greet the entire world$/, function() {
    expect(this.greeting).toEqual('Hello World');
  });
};

module.exports = stepWrapper;
