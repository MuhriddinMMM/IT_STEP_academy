const User = require("../models/User");

exports.postRegister = (req, res) => {
  const { body } = req;
  let user = new User(body.username, body.password, body.fullname);
  user.register(body);
  res.redirect("/auth/login");
  res.end();
};
exports.getRegister = (req, res) => {
  res.render("register");
};
exports.getLogin = (req, res) => {
  res.render("login");
};

exports.postLogin = (req, res) => {
  for (let user of data) {
    if (user.username === req.body.username) {
      console.log(req.body, data);
      if (user.password === req.body.password) {
        console.log(req.body, data);
        res.redirect("/card");
      }
    }
  }
  res.redirect("/auth/login");
};
