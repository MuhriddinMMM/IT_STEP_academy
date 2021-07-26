

let fs = require("fs");

fs.readFile("text.txt", "utf8", function (err, data) {
  if (err) throw err;
  console.log(data.split(/\d/).length - 1);
  console.log(data);
});
