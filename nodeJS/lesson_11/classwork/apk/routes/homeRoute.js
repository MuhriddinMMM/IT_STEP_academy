const path = require("path");

const home = {
  home: (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "..", "views", "index.html"));
  },
};
module.exports = home;
