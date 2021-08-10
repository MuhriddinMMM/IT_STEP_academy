
const Productadd = require("../models/Product");
exports.getAddingproduct = (req, res) => {
  res.render("addingproduct");
};
exports.postAddingproduct = (req, res) => {
  let product = new Productadd(req.body);
  product.addProduct();
  res.redirect("/");
  res.end();
};
