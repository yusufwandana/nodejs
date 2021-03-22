const http = require('http');

http.createServer(function(req, res){
    res.writeHead(200, {
        "Content-Type" : "text/html"
        // Tipe kontennya base html
        // Jadi bisa kita tulis html element di dalamnya
    });
    res.end("<h1>Hello world</h1>");
}).listen(8000);

console.log('Server is running at http://localhost:8000');