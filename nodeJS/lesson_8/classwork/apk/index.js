// const http = require("http");
// const fs = require("fs");
// const path = require("path");

// const server = http.createServer((req, res) => {
// function reverse(arr) {
//   let reverseArr = [];

//   for (let i = arr.length - 1; i >= 0; i--) {
//     reverseArr.push(arr[i]);
//   }
//   return reverseArr;
// }

// console.log(reverse([1, 2, 3, 4]));
// let n;
// function generateRGBString(min, max) {
//   return (
//     (n =
//       "rgb (" +
//       (String(Math.round(Math.random() * (max - min) + min)) +
//         "," +
//         String(Math.round(Math.random() * (max - min) + min)) +
//         "," +
//         String(Math.round(Math.random() * (max - min) + min)))) + ")"
//   );
// }
// console.log(generateRGBString(0, 255));

// function generateRGBString() {
//   function generateNumsInRange(range) {
//     return Math.round(Math.random() * range);
//   }
//   return `rgb (${generateNumsInRange(255)}, ${generateNumsInRange(
//     255
//   )}, ${generateNumsInRange(255)})`;
// }
// const rgbString = generateRGBString();
// console.log(rgbString);

// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
// }

// });

// const PORT = process.env.PORT || 3000;
// server.listen(3000, () => {
//   console.log(`server has been started on ... ${PORT}`);
// });

// const fs = require("fs");

// function countWords(file) {
//   fs.readFile(file, "utf-8", (err, data) => {
//     if (err) throw err;
//     const words = data.split(/[\s\,\?\!\:\'\"\-']+/);
//     console.log(words.length);
//     console.log(words.map((word) => word.length));
//   });
// }
// countWords('text.txt')

const http = require("http");
const fs = require("fs");
const { log } = require("console");
const { brotliDecompressSync } = require("zlib");
const mainPage = fs.readFileSync("index.html", "utf8");
const signInPage = fs.readFileSync("signin.html", "utf8");
const requestHandler = (req, res) => {
  const { url, method } = req;
  if (url === "/") res.write(mainPage);
  if (url === "/signin" && method === "GET") res.write(signInPage);
  if (url === "/signin" && method === "POST") {
    let body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      console.log(Buffer.concat(body).toString());

      // fs.appendFile("password.txt", "utf8");
    });
  }

  res.end();
};

const server = http.createServer(requestHandler);
const PORT = 3000;
server.listen(PORT, "localhost", () => {
  console.log(`Server was started. Listening to port ${PORT}`);
});
