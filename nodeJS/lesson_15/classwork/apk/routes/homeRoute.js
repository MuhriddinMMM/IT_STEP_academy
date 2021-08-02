const path = require("path");
const fs = require("fs");
const express =require("express")

const router =express.Router()
const { v4: uuid } = require("uuid");
const { route } = require("./authRoutes");
let data = null;



fs.readFile(path.join(__dirname, "..","data", "products.json"),
  (err, prods) => {
    if (err) throw err;
    data = JSON.parse(prods);
    
  })
  

router.get("/",(req, res) => {
    res.render("index", { products: data });
  }
)
router.post("/learnmore",(req, res) => {
    res.redirect("/product");
  })
module.exports = router;