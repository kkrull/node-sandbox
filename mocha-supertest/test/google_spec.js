const express = require('express');
const request = require('supertest');

describe('Express app', function() {
  context('GET /', function() {
    it('responds 200 OK', function(done) {
      const app = express();
      app.get('/', function(req, res) {
        res.status(200)
          .send('Hello world');
      });

      request(app)
        .get('/')
        .expect(200, done);
    });
  });

  it('probably does something else cool, too.  Read more.');
});
