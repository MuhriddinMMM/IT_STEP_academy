const path = require("path");

const page404 = {
  page404: (req, res) => {
    res.render("page404");
  },
};
module.exports = page404;
