import assert from 'assert';
import { When, Then } from '@cucumber/cucumber';
import { Greeter } from '@/src/greeter';

let whatIHeard: string;

When('the greeter says hello', () => {
  const subject = new Greeter();
  whatIHeard = subject.sayHello();
});

Then('I should have heard "Hello"', () => {
  assert.equal('Hello', whatIHeard);
});
