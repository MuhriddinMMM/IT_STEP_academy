const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const authRouters = require("./routes/authRoutes");
const cardHandlers = require("./routes/cardRoute");
const page404Handlers = require("./routes/page404Route");
const aboutHandlers = require("./routes/aboutRoute");
const homeHandlers = require("./routes/homeRoute");
const addproductHandlers = require("./routes/addproductRoute");

const productHandlers = require("./routes/productRoute");
const productsHandlers = require("./routes/productsRoute");

const app = express();
app.set("views", "templates");
app.set("view engine", "pug");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/auth", authRouters);
app.use("/card", cardHandlers.card);
app.use("/page404", page404Handlers.page404);
app.use("/product", productHandlers.product);
app.use("/products", productsHandlers.products);
app.use("/addproduct", addproductHandlers.addproduct);
app.post("/addproductlist", addproductHandlers.postaddproduct);

app.use("/about", aboutHandlers.about);
app.post("/learnmore", homeHandlers.postlearnmore);
app.use(homeHandlers.home);
app.listen(3000);
