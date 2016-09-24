const foo = require('../src/foo').foo;

describe('#foo', function() {
  it('exists', function() {
    expect(foo).toExist();
    expect(foo).toBeA('function');
  });
});


