const expect = require('expect');
const express = require('express');
const fs = require('fs');
const webDriver = require('selenium-webdriver');
const By = webDriver.By;

describe('Example application', function() {
  function greeterApp() {
    const app = express();
    app.get('/', function(req, res) {
      res.status(200);
      res.format({
        html: function() {
          res.send('<div>Hello world</div>');
        }
      });
    });

    return app;
  }

  beforeEach(function() {
    this.timeout(15000);
    console.log('STARTING EXPRESS');
    this.server = greeterApp().listen(3000);
  });

  afterEach(function() {
    this.server.close();
  });

  it('greets the user', function(done) {
    let browser = new webDriver.Builder()
      .usingServer()
      .withCapabilities({ 'browserName': 'phantomjs' })
      .build();

    console.log('OPENING PAGE');
    browser.get('http://localhost:3000');

    console.log('GETTING CONTENT');
    browser.findElement(By.css('div'))
      .then(function(element) {
        console.log('GETTING TEXT');
        return element.getText();
      })
      .then(function(text) {
        console.log(`EVALUATING CONTENT: ${text}`);
        expect(text).toEqual('Hello world');
      })
      .then(function() {
        console.log('TEST DONE');
        done();
      });
  });
});
