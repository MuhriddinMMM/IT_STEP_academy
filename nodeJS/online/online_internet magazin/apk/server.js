const path = require("path");
const express = require("express");
const PORT = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const homeHandlers = require("./routes/homeRoute");


const app = express();
app.set("views", "templates");
app.set("view engine", "pug");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));


app.use(homeHandlers);

app.listen(PORT);