const path = require("path");
console.log("Nazvaniya fayla", path.basename(__filename));
console.log("imya dirktoriya", path.dirname(__filename));
console.log("rashireniya fayla", path.extname(__filename));
console.log("Parse", path.parse(__filename).name);
console.log(path.join(__dirname, "server", "index.html"));
