const User = require("../models/User");

exports.getLogin = (req, res) => {
  res.render("login");
};

const path = require("path");
const fs = require("fs");
const p = path.join(__dirname, "..", "data", "users.json");
let data = null;

fs.readFile(path.join(__dirname, "..", "data", "users.json"), (err, prods) => {
  if (err) throw err;
  data = JSON.parse(prods);
});


exports.postLogin = (req, res) => {
  const { body } = req;
  for (let user of data) {
    if ("admin@gmail.com" == body.username && "admin" == body.password) {
      res.render("addingproduct");
    } else if (
      user.username === body.username &&
      user.password === body.password
    ) {
      res.redirect("/card");
    }
  }
  res.redirect("/auth/login");
};


exports.getRegister = (req, res) => {
  res.render("register");
};

exports.postRegister = (req, res) => {
  const { body } = req;
  new User(body.username, body.password, body.fullName).register();
  res.redirect("/auth/login");
  res.end();
};
