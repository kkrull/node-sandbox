const Widget = require('../src/widget');

describe('Widget', function() {
  it('exists', function() {
    expect(Widget).toExist();
  });
  it.skip('can be called as a constructor function', function() {
    new Widget();
  });
});

