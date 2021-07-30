const path = require("path");
const fs = require("fs");
const express = require("express");
const router = express.Router();

let data = null;
fs.readFile(path.join(__dirname, "..", "data", "users.json"), (err, prods) => {
  if (err) throw err;
  data = JSON.parse(prods);
});

router.get("/login", (req, res) => {
  res.render("auth");
});

router.post("/login", (req, res) => {
  for (let user of data) {
    if (user.username === req.body.username) {
      if (user.password === req.body.password) {
        res.redirect("/card");
      }
    }
  }
  res.redirect("/auth/login");
  // console.log(req.body, data);
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
  data.push(body);
  console.log(req.body);
  fs.writeFileSync(
    path.join(__dirname, "..", "data", "users.json"),
    JSON.stringify(data),
    () => {
      console.log("user successfully registered");
    }
  );
  res.end();
});

module.exports = router;
