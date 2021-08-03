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
const addingproduct = {
  addingproduct: (req, res) => {
    res.render("addingproduct");
  },
  postaddingproduct: (req, res) => {
    const {
      id = uuid(),
      title,
      description,
      imgUrl,
      price,
      discount,
      quantity,
    } = req.body;
    let didFound = false;
    for (let products of data) {
      if (products.title === title) {
        products.quantity += Number(quantity);
        didFound = true;
      }
    }

    if (!didFound) {
      data.push({
        id,
        title,
        description,
        imgUrl,
        price,
        discount,
        quantity: Number(req.body.quantity),
      });
    }

    fs.writeFileSync(
      path.join(__dirname, "..", "data", "productlist.json"),
      JSON.stringify(data)
    );
    res.redirect("/products");
    res.end();
  },
};
module.exports = addingproduct;
