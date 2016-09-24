const expect = require('expect');

describe('mocha', function() {
  describe('done callback', function() {
    it('ends the test when you call it as a thunk', function(done) {
      done();
    });
    xit('fails the test when you call it with an Error', function(done) {
      done(new Error('bang!'));
    });
  });

  it('can return a Promise that performs an asynchronous action', function() {
    return new Promise(function(resolve) {
      setTimeout(function() {
        resolve();
      }, 1000);
    });
  });

  it('can use lambdas instead of function declarations', () => {
    expect([].indexOf(42)).toEqual(-1);
  });
});
