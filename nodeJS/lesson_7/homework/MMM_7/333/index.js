let http = require("http");
let url = require("url");
let fs = require("fs");

let server = http.createServer(function (req, res) {
  let data = url.parse(req.url);
  console.log(data.pathname);
  if (data.pathname == "/nodejs") {
    fs.readFile("logo.png", function (err, data) {
      if (err) throw err;
      res.end(data);
    });
  } else if (data.pathname == "/") {
    fs.readFile("index.html", function (err, data) {
      if (err) throw err;
      res.end(data);
    });
  } else if (data.pathname == "/js") {
    fs.readFile("indexm.html", function (err, data) {
      if (err) throw err;
      res.end(data);
    });
  } else if (data.pathname == "/json") {
    fs.readFile("my.json", "utf8", function (err, data) {
      if (err) throw err;
      res.end(data);
    });
  } else {
    console.log(data.pathname.substring(1));
    fs.readFile(data.pathname.substring(1), function (err, data) {
      if (err) throw err;
      res.end(data);
    });
  }
});
server.listen(3000);
