const path = require("path");
const fs = require("fs");

let data = null;

fs.readFile(
  path.join(__dirname, "..", "data", "productlist.json"),
  (err, prods) => {
    if (err) throw err;
    data = JSON.parse(prods);
  }
);


const products = {
  products: (req, res) => {
    res.render("products",{productlist:data})
  },
};
module.exports = products;
