const path = require("path");

const product = {
  product: (req, res) => {
    res
      .status(200)
      .sendFile(path.join(__dirname, "..", "views", "product.html"));
  },
};
module.exports = product;
