const path = require("path");

const auth = {
  getAuth: (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "..", "views", "auth.html"));
  },
  postAuth: (req, res) => {
    res.redirect("/card");
  },
};
module.exports = auth;
