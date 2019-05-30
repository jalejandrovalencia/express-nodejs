const http = require('http');

http.createServer((req, res) => {
    res.end('hello world');
}).listen(3000);

console.log('server on port 3000');