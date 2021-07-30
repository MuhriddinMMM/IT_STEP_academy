const path = require("path");

const card = {
  card: (req, res) => {
    res.render("card");
    // res.redirect('/')
  },
};
module.exports = card;
