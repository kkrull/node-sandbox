"use strict";

const express = require('express');
const fs = require('fs');
const webdriver = require('selenium-webdriver');

function makeApp() {
  const app = express();
  app.get('/', function(req, res) {
    res.status(200)
      .send('Hello world');
  });

  return app;
}

function writeScreenShot(data, name) {
  name = name || 'ss.png';
  fs.writeFileSync(name, data, 'base64');
}

let app = makeApp();
let server = app.listen(3000);
let browser = new webdriver.Builder()
  .usingServer()
  .withCapabilities({'browserName': 'phantomjs' })
  .build();

browser.get('http://localhost:3000');
browser.takeScreenshot().then(function(data) {
  writeScreenShot(data, 'out1.png');
  browser.quit();
  server.close();
});
