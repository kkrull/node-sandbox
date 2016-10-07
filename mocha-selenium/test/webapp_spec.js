
const express = require('express');
const request = require('supertest');

describe('web application', function() {
  let app;
  beforeEach(function() {
    this.app = express();
    this.app.get('/', function(req, res) {
      res.status(200).send();
    });
  });

  it('responds to GET /', function(done) {
    request(this.app).get('/')
      .expect(200, done);
  });
});

