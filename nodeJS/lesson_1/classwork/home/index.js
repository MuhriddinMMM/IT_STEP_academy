const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // console.log("вы зашли в корневою директорию");
  // res.send("Home dir");
  res.render("home.ejs");
});
app.get("/random", (req, res) => {
  const num = Math.floor(Math.random() * 20) + 1;
  res.render("random.ejs" ,{num});
});
app.get("/cats", (req, res) => {
  res.send("Адрес cats");
});
app.get("/dogs", (req, res) => {
  res.send("Адрес dogs");
});
app.post("/cats", (req, res) => {
  res.send(" post xzaprosАдрес dogs");
});

app.get("/dogs/:id", (req, res) => {
  console.log(req.params);
  res.send("route s dog id");
});
app.get("/r/:postTag", (req, res) => {
  console.log(req.params);
  const { postTag } = req.params;
  res.send(`<h1 style="color:red;">Zdes budet pasti  ${postTag}</h1>`);
});
app.get("/search", (req, res) => {
  const { q, color } = req.query;
  res.send(`<h2>ishem ${q} -${color}</h2>`);
});
app.get("*", (req, res) => {
  res.send("takogo adres not availably");
});
app.listen(3000, () => {
  console.log("server is running 3000");
});
