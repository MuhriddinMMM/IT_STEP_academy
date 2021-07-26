const http = require("http");
const server = http.createServer((req, res) => {
  res.write(`
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Creating server</title>
</head>
<body>
    <h1>Server 3000 is working</h1>
    
</body>
</html>
        `);

  res.end();
});
server.listen(3000);