const expect = require('expect');

describe('mocha', function() {
  describe('done callback', function() {
    it('ends the test when you call it as a thunk', function(done) {
      done();
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
