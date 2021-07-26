// 1.	Написать код, который будет записывать в файл ваше имя, фамилию и дату рождения


let http = require("http");
let url = require("url");
let fs = require("fs");
let date = new Date();

let server = http.createServer(function (req, res) {
  fs.open("obj.json", "w", (err) => {
    if (err) console.log(err);
    else console.log("File created");
    let count = 0;
    function writeJSON(name, lastName, age) {
      count++;

      fs.appendFile(
        "obj.json",
        `
        {\n
"name": "${name}", 
"lastName": "${lastName}",
"age": "${age}",
"date": "${date}",
"count": ${count}\n
}`,
        (err, date) => {
          if (err) throw err;
          console.log("The Obj added");
        }
      );
    }
    writeJSON("ibrohim", "rustamjonov", 28);
    writeJSON("shamsiddin", "shukurov", 28);
    writeJSON("murodov", "muhriddin", 28);
  });
});
server.listen(3000);
