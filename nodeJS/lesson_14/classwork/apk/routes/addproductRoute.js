const path = require("path");
const fs = require("fs");
const { v4: uuid } = require("uuid");
let data = null;

fs.readFile(
  path.join(__dirname, "..", "data", "products.json"),
  (err, prods) => {
    if (err) throw err;
    data = JSON.parse(prods);
  }
);
const addproduct = {
  addproduct: (req, res) => {
    const { id } = req.params;
    const productlist = data.find((c) => c.id === id);
    res.render("addproduct", { productlist });
  },
  postaddproduct: (req, res) => {
    const { id = uuid(), title, description, imgUrl, price } = req.body;
    data.push({ id, title, description, imgUrl, price });
    fs.writeFileSync(
      path.join(__dirname, "..", "data", "products.json"),
      JSON.stringify(data)
    );
    res.redirect("/");
  },
};
module.exports = addproduct;
