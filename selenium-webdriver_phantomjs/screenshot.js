"use strict";

const express = require('express');
const fs = require('fs');
const webDriver = require('selenium-webdriver');

function makeApp() {
  const app = express();
  app.get('/', function(req, res) {
    res.status(200)
      .send('Hello world');
  });

  return app;
}

let server = makeApp().listen(3000);
let browser = new webDriver.Builder()
  .usingServer()
  .withCapabilities({'browserName': 'phantomjs' })
  .build();

console.log('1 - OPENING PAGE');
browser.get('http://localhost:3000').then(function() {
  console.log('2 - TAKING SCREEN SHOT');
  browser.takeScreenshot();
})
.then(function(data) {
  console.log('3 - SAVING SCREEN SHOT');
  fs.writeFileSync('out1.png', data, 'base64');
})
.then(function() {
  console.log('4 - SHUTTING DOWN BROWSER');
  browser.quit();
})
.then(function() {
  console.log('5 - SHUTTING DOWN SERVER');
  server.close();
});
