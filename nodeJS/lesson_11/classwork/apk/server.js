const path = require("path");

const express = require("express");
const authHandlers = require("./routes/authRoute");
const cardHandlers = require("./routes/cardRoute");
const aboutHandlers = require("./routes/aboutRoute");
const homeHandlers = require("./routes/homeRoute");
const productHandlers = require("./routes/productRoute");
const app = express();
app.use(express.static(path.join(__dirname, "public")));

app.get("/auth", authHandlers.getAuth);

app.post("/auth", authHandlers.postAuth);
app.use("/card", cardHandlers.card);

app.use("/product", productHandlers.product);
app.use("/about", aboutHandlers.about);
app.use(homeHandlers.home);
app.listen(3000);
