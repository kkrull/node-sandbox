import expect from 'expect';
import Greeter from '../src/es6_module';

describe('ES6 Module', function() {
  it('can call expect', function() {
    expect({}).toExist();
  });

  describe('Greeter', function() {
    it('can be instantiated', function() {
      expect(Greeter).toExist();
      new Greeter();
    });

    describe('#sayHello', function() {
      context('given no arguments', function() {
        it('returns "Hello World"', function() {
          const greeter = new Greeter();
          expect(greeter.sayHello()).toEqual('Hello World');
        });
      });

      context('given a name', function() {
        it('says hello to that person', function() {
          const greeter = new Greeter();
          expect(greeter.sayHello('George')).toEqual('Hello George');
        });
      });
    });
  });
});
