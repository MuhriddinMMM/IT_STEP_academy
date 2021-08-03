
const Productadd = require("../models/Product");
exports.getAddingproduct = (req, res) => {
  res.render("addingproduct");
};
exports.postAddingproduct = (req, res) => {
  let product = new Productadd(req.body);
  product.addProduct(req.body);
  res.redirect("/products");
  res.end();
};
