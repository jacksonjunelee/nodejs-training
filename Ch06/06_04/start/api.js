const http = require('http');
const data = require('./data/inventory');

http.createServer((req, res) => {

  if (req.url === '/') {
    res.writeHead(200, {"Content-Type": "text/json"});
    res.end(JSON.stringify(data));
  } else if ( req.url === "/instock") {
    listInStock(res);
  } else if (req.url === '/onorder') {
    listOnBackOrder(res);
  } else {
    res.writeHead(400, {"Content-Type": "text/plain"});
    res.end("Not Available")
  }

}).listen(3000);

console.log("Server Listening on port 3000");

function listInStock(res) {
  const inStock = data.filter( (item) => {
    return item.avail === "In stock";
  });

  res.end(JSON.stringify(inStock));
}

function listOnBackOrder( res ) {
  const onOrder = data.filter( (item) => {
    return item.avail === "On back order";
  });

  res.end(JSON.stringify(onOrder));
}
