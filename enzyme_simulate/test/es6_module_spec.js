import expect from 'expect';
import Greeter from '../src/es6_module';

describe('ES6 Module', () => {
  it('can call expect', () => {
    expect({}).toExist();
  });

  describe('Greeter', () => {
    it('can be instantiated', () => {
      expect(Greeter).toExist();
      new Greeter();
    });

    describe('#sayHello', () => {
      context('given no arguments', () => {
        it('returns "Hello World"', () => {
          const greeter = new Greeter();
          expect(greeter.sayHello()).toEqual('Hello World');
        });
      });

      context('given a name', () => {
        it('says hello to that person', () => {
          const greeter = new Greeter();
          expect(greeter.sayHello('George')).toEqual('Hello George');
        });
      });
    });
  });
});
