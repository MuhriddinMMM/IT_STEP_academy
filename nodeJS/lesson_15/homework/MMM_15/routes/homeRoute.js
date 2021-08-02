const path = require("path");
const fs = require("fs");
const express = require("express");

const router = express.Router();
const { v4: uuid } = require("uuid");
const { route } = require("./authRoutes");
let data = null;

fs.readFile(
  path.join(__dirname, "..", "data", "productlist.json"),
  (err, prods) => {
    if (err) throw err;
    data = JSON.parse(prods);
  }
);

router.get("/", (req, res) => {
  res.render("index", { productlist: data });
});
router.get("/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  const productlist = data.find((prod) => prod.id === id);
  res.render("product", { productlist });
});
module.exports = router;
