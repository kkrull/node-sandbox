import { expect } from 'chai';

import HelloWorld from './helloWorld';

describe('HelloWorld', () => {
  it('basic expects', () => {
    expect(true).to.equal(true);
    expect(true).not.to.equal(false);

    expect([1, 2, 3]).to.contain(2);
  });

  it('returns default message when no name is passed', () => {
    const subject = new HelloWorld();
    expect(subject.message()).to.equal('Hello world');
  });

  it('returns message with name when name is passed', () => {
    const subject = new HelloWorld('foo');
    expect(subject.message()).to.equal('Hello foo');
  });
});
