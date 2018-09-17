const http = require('http');
const process = require('process');

function main(args) {
  const { host, port } = parseArgs(args);
  const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Hello Http');
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

main(process.argv);
