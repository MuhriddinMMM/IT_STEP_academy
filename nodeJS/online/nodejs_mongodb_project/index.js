const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const exphbs = require("express-handlebars");
const todosRoutes = require("./routes/todos");

const PORT = process.env.PORT || 3000;
const app = express();
const hbs = exphbs.create({
  defaultLayout: "main",
  extname: "hbs",
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "views");

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));
app.use(todosRoutes);

async function start() {
  try {
    await mongoose.connect(
      "mongodb+srv://dbnodejsuser:dbnodejspassword@cluster0.arh6c.mongodb.net/myFirstDatabase",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    app.listen(PORT, () => {
      console.log("server has been started");
    });
  } catch (e) {
    console.log(e);
  }
}

start();
