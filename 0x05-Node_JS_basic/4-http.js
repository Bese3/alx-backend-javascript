const http = require('http');

http.createServer((req, res) => {
  res.end('Hello Holberton School!');
}).listen(1245);
