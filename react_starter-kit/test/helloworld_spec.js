const expect = require('expect');
const express = require('express');
const fs = require('fs');
const webDriver = require('selenium-webdriver');
const By = webDriver.By;

describe('helloworld', function() {
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

  afterEach(function(done) {
    var theBrowser = this.browser;
    var theServer = this.server;

    console.log('TAKING SNAPSHOT');
    this.browser.takeScreenshot()
      .then(function(data) {
        console.log('SAVING SNAPSHOT');
        fs.writeFileSync('screenshot.png', data, 'base64')
      })
      .then(function() {
        console.log('CLOSING BROWSER');
        return theBrowser.close()
      })
      .then(function() {
        console.log('CLOSING SERVER');
        return theServer.close();
      })
      .then(function() {
        console.log('ENDING TEST');
        done();
      });
  });

  it('serves static files', function(done) {
    this.browser = new webDriver.Builder()
      .usingServer()
      .withCapabilities({'browserName': 'phantomjs'})
      .build();

    console.log('OPENING PAGE');
    this.browser.get('http://localhost:3000');

    console.log('GETTING CONTENT');
    this.browser.findElement(By.css('div'))
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