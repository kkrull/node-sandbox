const makeServer = require('../src/server');

const expect = require('expect');
const request = require('supertest');

describe('Express app', function() {
  context('GET /', function() {
    it('responds 200 OK', function(done) {
      const app = makeServer();
      request(app)
        .get('/')
        .expect(200, done);
    });
  });
});
