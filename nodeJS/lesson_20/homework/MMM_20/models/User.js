const path = require("path");
const fs = require("fs");
const { v4: uuid } = require("uuid");
const p = path.join(__dirname, "..", "data", "users.json");

let data = null;
fs.readFile(path.join(__dirname, "..", "data", "users.json"), (err, prods) => {
  if (err) throw err;
  data = JSON.parse(prods);
});

module.exports = class User {
  constructor(username, password, fullname) {
    (this.username = username),
      (this.password = password),
      (this.fullname = fullname);
  }

  register() {
    if (this.password !== this["password-repeat"])
      throw new Error("Passwords do not match");
    for (let user of data) {
      if (user.username === this.username)
        throw new Error("Profile such username already exist");
    }
    delete this["password-repeat"];
    delete this["agree"];
    const { userId = uuid(), username, password, fullname } = this;
    data.push({ userId, username, password, fullname });

    fs.writeFileSync(
      path.join(__dirname, "..", "data", "users.json"),
      JSON.stringify(data),
      () => {
        console.log("user successfully registered");
      }
    );
  }
};