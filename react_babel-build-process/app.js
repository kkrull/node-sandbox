const express = require('express');

function makeServer() {
  const app = express();
  app.use(express.static(__dirname));
  return app;
}

module.exports = makeServer;
