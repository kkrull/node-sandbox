const expect = require('expect');
const express = require('express');
const fs = require('fs');
const webDriver = require('selenium-webdriver');

describe('Example application', function() {
  beforeEach(function() {
    expect('server').toBe('RUNNING');
  });

  it('returns text', function(done) {
    this.timeout(15000);
    let browser = new webDriver.Builder()
      .usingServer()
      .withCapabilities({ 'browserName': 'phantomjs' })
      .build();

    console.log('OPENING PAGE');
    browser.get('http://www.google.com').then(function() {
      console.log('GETTING TITLE');
      return browser.getTitle();
    })
    .then(function(title) {
      console.log(`EVALUATING TITLE: ${title}`);
      expect(title).toEqual('Google');
    })
    .then(function() {
      console.log('TEST DONE');
      done();
    });
  });
});
