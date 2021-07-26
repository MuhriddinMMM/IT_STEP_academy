const path = require("path");

const card = {
  card: (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "..", "views", "card.html"));
  },
};
module.exports = card;
