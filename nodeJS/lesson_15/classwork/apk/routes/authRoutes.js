const path = require("path");
const fs = require("fs");
const { v4: uuid } = require("uuid");
const express = require("express");
const router = express.Router();

let data = null;
fs.readFile(path.join(__dirname, "..", "data", "users.json"), (err, prods) => {
  if (err) throw err;
  data = JSON.parse(prods);
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/login", (req, res) => {
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
});
router.get("/register", (req, res) => {
  res.render("register");
});

router.post("/register", (req, res) => {
  const { body } = req;
  if (body.password !== body["password-repeat"])
    throw new Error("Passwords do not match");
  for (let user of data) {
    if (user.username === body.username)
      throw new Error("Profile such username already exist");
  }
  delete body["password-repeat"];
  delete body["agree"];
  const { userId = uuid(), username, password, fullname } = body;
  data.push({ userId, username, password, fullname });

  fs.writeFileSync(
    path.join(__dirname, "..", "data", "users.json"),
    JSON.stringify(data),
    () => {
      console.log("user successfully registered");
    }
  );
  res.redirect("/auth/login");
  res.end();
});

module.exports = router;
