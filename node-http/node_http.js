const http = require('http');
const process = require('process');
const url = require('url');

function main(args) {
  const { host, port } = parseArgs(args);
  const server = http.createServer((request, response) => {
    console.log();
    logRequest(request);
    handleRequest(request, response);
  });

  console.log(`Listening on ${host}:${port}`);
  server.listen(port);
}

function parseArgs(argv) {
  if(argv.length !== 4)
    throw new Error(`Usage: ${argv[0]} ${argv[1]} <host> <port>`);

  return {
    host: argv[2],
    port: Number(argv[3])
  };
}

function logRequest(request) {
  console.log(`> ${request.method} ${request.url}`);
  for(var i = 0; i < request.rawHeaders.length; i += 2) {
    console.log(`  ${request.rawHeaders[i]}: ${request.rawHeaders[i + 1]}`);
  }
}

function handleRequest(request, response) {
  const requestUrl = url.parse(request.url);
  switch(requestUrl.pathname) {
    case '/headers':
      let body = '';
      for(var i = 0; i < request.rawHeaders.length; i += 2) {
        body = body.concat(`${request.rawHeaders[i]}: ${request.rawHeaders[i + 1]}\n`);
      }

      response.writeHead(200, {
        'Content-Length': body.length,
        'Content-Type': 'text/plain'
      });

      response.write(body);
      response.end();
      return;

    case '/health':
      response.writeHead(200, {
        'Content-Length': 2,
        'Content-Type': 'text/plain'
      });

      response.write('ok');
      response.end();
      return;

    default:
      response.writeHead(200);
      response.end('Hello Http');
      return;
  }
}

main(process.argv);
