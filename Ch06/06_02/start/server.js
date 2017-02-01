const http = require('http');

const server = http.createServer((req, res) => {

  // res.writeHead(200, {"Content-Type": "text/plain"});
  res.writeHead(200, {"Content-Type": "text/html"});

  res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Testing Server</title>
      </head>
      <body>
        <h1> MOOO CAT </h1>
        <p>${req.url}</p>
        <p>${req.method}</p>
      </body>
    </html>
    `);

});

server.listen(3000);

console.log("Server listening in port 3000")
