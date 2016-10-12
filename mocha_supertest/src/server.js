const express = require('express');

function makeServer() {
  const app = express();
  app.get('/', function(req, res) {
    res.status(200)
      .send('Hello world');
  });

  return app;
}

module.exports = makeServer;
