// create a http server that return the content of the file index.html
const http = require('http');
const fs = require('fs');


http.createServer(function (req, res) {
    fs.readFile('index-react-advanced.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html', 'charset': 'utf-8'});
        res.write(data);
        return res.end();
    });
}).listen(8080);
