const http = require('http');
const os = require('os');

const version = process.env.VERSION || '1.0.0';

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(`IP: ${req.socket.localAddress}\nHostname: ${os.hostname()}\nVersion: ${version}\n`);
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
