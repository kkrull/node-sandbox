const express = require('express');
const path = require('path');

const app = express();
const hostPath = path.join(__dirname, 'public');
app.use(express.static(hostPath));

const port = 8081;
const host = "127.0.0.1";
console.log(`Listening on ${host}:${port}`);
console.log(`Public directory: ${hostPath}`);
app.listen(port, host);
