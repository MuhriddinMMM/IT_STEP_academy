const path = require("path");

const products = {
  products: (req, res) => {
    res
      .status(200)
      .sendFile(path.join(__dirname, "..", "views", "products.html"));
  },
};
module.exports = products;
