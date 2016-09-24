import expect from 'expect';
import foo from '../src/es6_module';

describe('ES6 Module', function() {
  it('can call expect', function() {
    expect({}).toExist();
  });
});
