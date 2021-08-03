const path = require("path");
const fs = require("fs");
const { v4: uuid } = require("uuid");

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
    res.render("products", { productlist: data });
  },
  getid: (req, res) => {
    const { id } = req.params;
    console.log(id);
    const productlist = data.find((prod) => prod.id === id);
    res.render("product", { productlist });
  },
};
module.exports = products;
