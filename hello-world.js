const dt = require('./myfirstmodule');
const http = require('http');
const url = require('url');


// Create an HTTP server simply returning "Hello World!" and date and time
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});

  // use req parameter get the url
  // http://localhost:8080/summer
  let q = url.parse(req.url, true);
  const txt = q.pathname.substring(1);
  if(txt !== '') {
    res.write('This is ' + txt + ' !');
  }

  // use req parameter get the name to pass to the url
  // http://localhost:8080/summer?name=John 
  q = url.parse(req.url, true).query;
  const name = q.name;
  if(name == null) {
    res.write('Hello World !');
  }else{
    res.write('Hello ' + name + ' !');
  }

  res.end("The date and time are currently: " + dt.myDateTime());
}).listen(8080);