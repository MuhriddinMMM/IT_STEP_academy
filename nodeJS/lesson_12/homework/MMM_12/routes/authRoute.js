const path = require("path");
const fs = require("fs");
let data = null;

fs.readFile(path.join(__dirname, "..", "data", "users.json"), (err, prods) => {
  if (err) throw err;
  data = JSON.parse(prods);
});
const auth = {
  getAuth: (req, res) => {
    res.render("auth");
  },
  postAuth: (req, res) => {
    for (let user of data) {
      if (user.username === req.body.username) {
        if (user.password === req.body.password) {
          res.redirect("/card");
        }
      }
    }
    res.redirect("/auth");
    // res.redirect("/card");
    console.log(req.body, data);
  },
};
module.exports = auth;
