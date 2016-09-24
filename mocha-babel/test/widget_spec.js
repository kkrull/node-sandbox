import expect from 'expect';
const Widget = require('../src/widget');

describe('Widget', function() {
  describe('constructor', function() {
    it('can be called as a constructor function', function() {
      expect(Widget).toBeA('function');
      expect(new Widget()).toBeA(Widget);;
    });
  });

  describe('#foo', function() {
    beforeEach(function() {
      this.w = new Widget();
    });

    it('returns "bar"', function() {
      expect(this.w.foo()).toEqual('bar');
    });
  });
});

