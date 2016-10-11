"use strict";

var fs = require('fs');
var webdriver = require('selenium-webdriver');
var browser = new webdriver.Builder().usingServer().withCapabilities({'browserName': 'phantomjs' }).build();

browser.manage().window().setSize(1280, 720);
browser.manage().window().getSize().then(
  function(size) {
    console.log("Browser size: " + JSON.stringify(size));
  });
browser.get('http://en.wikipedia.org/wiki/Wiki');

function writeScreenshot(data, name) {
  name = name || 'ss.png';
  fs.writeFileSync(name, data, 'base64');
};

browser.takeScreenshot().then(function(data) {
  writeScreenshot(data, 'out1.png');
});

browser.findElements(webdriver.By.css('[href^="/wiki/"]')).then(function(links){
  console.log('Found', links.length, 'Wiki links.' )
  browser.quit();
});

