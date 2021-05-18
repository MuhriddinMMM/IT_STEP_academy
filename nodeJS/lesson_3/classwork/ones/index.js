const express = require("express");
const app = express();
const { v4: uuid } = require("uuid");
app.use(
  express.urlencoded({
    extended: true,
  })
);
const contents = [
  {
    id: uuid(),
    title: "john1",
    content: "hello my name is john1",
  },
  {
    id: uuid(),
    title: "john2",
    content: "hello my name is john2",
  },
  {
    id: uuid(),
    title: "john3",
    content: "hello my name is john3",
  },
  {
    id: uuid(),
    title: "john4",
    content: "hello my name is john4",
  },
  {
    id: uuid(),
    title: "john5",
    content: "hello my name is john5",
  },
  {
    id: uuid(),
    title: "john6",
    content: "hello my name is john6",
  },
];
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/blog", (req, res) => {
  res.render("contents/index", { contents });
});
app.get("/blog/new", (req, res) => {
  res.render("contents/new");
});
app.get("/blog/:id", (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  console.log(id);
  const content = contents.find((c) => c.id === id);
  console.log(content);

  res.render("contents/post", { content });
});
app.post("/contents", (req, res) => {
  console.log(req.body);
  const { title, content, id = uuid() } = req.body;
  contents.push({ title, content, id });
  res.redirect("/blog");
});
app.listen(3000, () => {
  console.log("server is running 3000 !!! ");
});
