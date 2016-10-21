const makeServer = require('./app');

console.log('Listening on http://localhost:3000/helloworld.html');
makeServer().listen(3000);
