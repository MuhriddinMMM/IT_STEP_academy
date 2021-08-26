const express = require("express");
const app = express();
const paths = require("path");
const fs = require("fs");
app.set("views", "views");
app.set("view engine", "pug");
app.use(express.static(paths.join(__dirname, "public")));

app.get("/video", function (req, res) {
  const path = "public/video/mux.mp4";
  const stat = fs.statSync(path);
  const fileSize = stat.size;
  const range = req.headers.range;
  let promise = new Promise(function (resolve, reject) {
    if (range) {
      const parts = range.replace(/bytes=/, "").split("-");
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
      const chunksize = end - start + 1;
      const file = fs.createReadStream(path, { start, end });
      const head = {
        "Content-Range": `bytes ${start}-${end}/${fileSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": chunksize,
        "Content-Type": "video/mp4",
      };
      res.writeHead(206, head);
      file.pipe(res);
      return resolve("success");
    } else {
      const head = {
        "Content-Length": fileSize,
        "Content-Type": "video/mp4",
      };
      res.writeHead(200, head);
      fs.createReadStream(path).pipe(res);
      return reject("failure");
    }
  });
  promise
    .then((results) => {
      console.log(results);
    })
    .catch((resultfail) => {
      console.log(resultfail);
    });
});

app.get("/", (req, res) => {
  res.render("index");
});
app.listen(3000);
