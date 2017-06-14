//Mocha helper.  Call with `mocha --require test/helper.js <test file> ...`
//Must be written in ES5.  Tests and production code can be in ES2015 by way of babel-register.
require('babel-register')();
require('jsdom-global/register');
