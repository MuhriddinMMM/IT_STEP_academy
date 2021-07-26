// 2.	Написать код, который считывает JSON файл такого вида:
// {
//   "count": 0
// }

// Вывести count в консоль, увеличить на один и перезаписать JSON файл.

const { count } = require("console");
let fs = require("fs");

fs.readFile("my.json", "utf8", function (err, data) {
  if (err) throw err;
  let obj = JSON.parse(data);
  obj.data = new Date().toLocaleString();
  console.log(obj);
  obj.count = obj.count + 1;
  console.log(obj);

  fs.writeFile("my.json", JSON.stringify(obj), function (err) {
    if (err) throw err;
  });
});
