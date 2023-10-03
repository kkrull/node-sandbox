import assert from "assert";
import { When, Then } from "@cucumber/cucumber";
import { Greeter } from "../../src/index";

When("the greeter says hello", function () {
  const subject = new Greeter();
  this.whatIHeard = subject.sayHello();
});

Then("I should have heard {string}", function (expected) {
  assert.equal(expected, this.whatIHeard);
});
