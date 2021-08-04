const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const authRouters = require("./routes/authRoutes");
const cardHandlers = require("./routes/cardRoute");
const aboutHandlers = require("./routes/aboutRoute");
const homeHandlers = require("./routes/homeRoute");
const addingproductHandlers = require("./routes/addingproductRoute");
const productsHandlers = require("./routes/productsRoute");
const dbURL =
  "mongodb+srv://dbnodejsuser:dbnodejspassword@cluster0.arh6c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose
  .connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.set("views", "templates");
app.set("view engine", "pug");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/auth", authRouters);
app.use("/card", cardHandlers.card);

app.get("/products", productsHandlers.products);
app.get("/products/:id", productsHandlers.getid);

app.use("/addingproduct", addingproductHandlers.addingproduct);
app.post("/addingproductlist", addingproductHandlers.postaddingproduct);

app.use("/about", aboutHandlers.about);

app.use(homeHandlers);

app.use("*", (req, res) => {
  res.status(404).render("page404");
});
app.listen(PORT);
