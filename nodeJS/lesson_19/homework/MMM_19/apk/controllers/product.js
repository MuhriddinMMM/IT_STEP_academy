const Productadd = require("../models/Product");

exports.getAddingproduct = (req, res) => {
  res.render("addingproduct");
};

exports.postAddingproduct = (req, res) => {
  const { body } = req;
  console.log(body);
  // let product = new Productadd(
  //   body.imgUrl,
  //   body.title,
  //   body.price,
  //   body.description,
  //   body.quantity,
  //   body.discount
  // );
  // product.addProduct();
  res.redirect("/");
  // res.end();
};
