const expect = require('expect');
const express = require('express');
const fs = require('fs');
const webDriver = require('selenium-webdriver');
const By = webDriver.By;

describe('helloworld', function() {
  function greeterApp() {
    const app = express();
    app.use(express.static(__dirname + '/..'));
    return app;
  }

  beforeEach(function() {
    this.timeout(15000);
    this.server = greeterApp().listen(3000);
  });

  afterEach(function(done) {
    var theServer = this.server;

    this.browser.close().then(function() {
      return theServer.close();
    }).then(function() {
      done();
    });
  });

  it('serves static files', function(done) {
    this.browser = new webDriver.Builder()
      .usingServer()
      .withCapabilities({'browserName': 'phantomjs'})
      .build();

    this.browser.get('http://localhost:3000/helloworld.html');
    this.browser.findElement(By.css('div'))
      .then(function(element) {
        return element.getText();
      })
      .then(function(text) {
        expect(text).toEqual('Hello world!');
      })
      .then(function() {
        done();
      });
  });
});