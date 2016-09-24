exports.foo = function() {
  //Indeed, mocha does pollute the global node namespace.
  //Otherwise, expect and beforeEach would not be in scope.
  expect(beforeEach).toExist();
};
