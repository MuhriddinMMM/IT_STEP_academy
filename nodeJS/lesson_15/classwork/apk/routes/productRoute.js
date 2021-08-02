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
  

const product = {
  product: (req, res) => {
    console.log(req.params);
    const { id } = req.params;
    console.log(id);
    const productlist = data.find((prod) => prod.id === id);
    res.render("products", { productlist });
  },
  // getid: (req, res) => {
  //   console.log(req.params);
  //   const { id } = req.params;
  //   console.log(id);
  //   const productlist = data.find((prod) => prod.id === id);
  //   res.redirect("product", { productlist });
  // }
};
module.exports = product;
