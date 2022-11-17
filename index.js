const fs = require("fs");
const http = require("http");

const server = http.createServer(function (req, res) {
  if (req.url == "/") {
    fs.readFile("home.html", function (error, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (req.url == "/about") {
    fs.readFile("about.html", function (error, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (req.url == "/contact") {
    fs.readFile("contact.html", function (error, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (req.url == "/terms") {
    fs.readFile("terms.html", function (error, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  }
});
server.listen(5010);
console.log("Server is running successfully");
