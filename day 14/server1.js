var http = require('http');

http.createServer(function(req, res) {
  res.writeHead(200,{'Content-Type': 'text/html'});
  res.write('I am Renuka');
  res.write(req.url);
  res.end();

}).listen(4000);