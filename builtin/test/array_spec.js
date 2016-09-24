var expect = require('expect');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      var actual = [1,2,3].indexOf(4);
      expect(actual).toBe(-1);
    });
    it('should return the index when the value is present', function() {
      var actual = [1,2,3].indexOf(2);
      expect(actual).toBe(1);
    });
  });
});

