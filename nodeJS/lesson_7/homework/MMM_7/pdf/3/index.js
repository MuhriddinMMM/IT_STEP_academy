let fs = require("fs");

let date = new Date();
let str = "Запуск: " + date.toLocaleString() + "\n";
fs.appendFile("date.txt", str, function (err) {
  if (err) throw err;
});
