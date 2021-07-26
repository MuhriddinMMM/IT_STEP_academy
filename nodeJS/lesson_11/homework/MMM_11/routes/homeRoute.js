const path = require("path");

const home = {
  home: (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "..", "views", "index.html"));
  },
  postlearnmore: (req, res) => {
    res.redirect("/product");
  },
};
module.exports = home;
