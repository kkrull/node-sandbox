
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

  context('testing HTTP response with supertest', function() {
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
      var webdriver = require('selenium-webdriver');
      //var phantomdriver = require('selenium-webdriver/phantomjs');
      var driver = new webdriver.Builder().forBrowser('phantomjs').build();
      done('pending'); //TODO KDK - how to know when the browser is running?
      //There's a nice example for later with [webdriverio](https://www.npmjs.com/package/phantomjs-prebuilt)
    });
  });
});

