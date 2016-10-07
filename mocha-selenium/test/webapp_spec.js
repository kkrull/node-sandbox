
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

