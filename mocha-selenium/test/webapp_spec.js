
const expect = require('expect');
const express = require('express');
const request = require('supertest');

describe('web application', function() {
  let app;
  beforeEach(function() {
    this.app = express();
    this.app.get('/', function(req, res) {
      res.status(200)
        .send('Hello World!');
    });
  });

  context.skip('testing HTTP response with supertest', function() {
    it('responds to GET /', function(done) {
      request(this.app).get('/')
        .expect(200, done);
    });
    it('responds with text in the message body', function(done) {
      request(this.app).get('/')
        .expect(function(res) {
          expect(res.text).toEqual('Hello World!');
        })
        .expect(200, done);
    });
  }); 

  context('testing rendering with selenium -> webdriver -> ghostdriver -> phantom', function() {
    it('loads phantomjs', function(done) {
      expect('test').toEqual('to make sense');
      this.timeout(5000);

      //There's a nice example for later with [webdriverio](https://www.npmjs.com/package/phantomjs-prebuilt)
      var webdriver = require('selenium-webdriver');
      var driver = new webdriver.Builder().forBrowser('phantomjs').build();
      var requestUrl = 'http://www.google.com'; //this.app.address;
      console.log(`making request: ${requestUrl}`);
      driver
        .get(requestUrl)
        .then(
          function(args) { console.log(`[then ok handler] args: ${JSON.stringify(args)}`); }, 
          function() { console.log('[then error handler]'); })
        .then(function() {
          console.log('[then] calling done');
          done();
        });
    });
  });
});

