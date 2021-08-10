const express = require("express");
const productController = require("../controllers/product");
const router = express.Router();

router.get("/addingproduct", productController.getAddingproduct);
router.post("/addingproductlist", productController.postAddingproduct);

module.exports=router

