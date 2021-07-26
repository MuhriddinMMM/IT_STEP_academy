const path = require("path");

const about = {
  about: (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "..", "views", "about.html"));
  },
};
module.exports = about;