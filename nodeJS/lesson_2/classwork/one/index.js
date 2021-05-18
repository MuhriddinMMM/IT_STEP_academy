const express = require("express");
const app = express();

const { v4: uuid } = require("uuid");
app.use(
  express.urlencoded({
    extended: true,
  })
);
const comments = [
  {
    id: uuid(),
    username: "john1",
    comment: "hello my name is john1",
  },
  {
    id: uuid(),
    username: "john2",
    comment: "hello my name is john2",
  },
  {
    id: uuid(),
    username: "john3",
    comment: "hello my name is john3",
  },
  {
    id: uuid(),
    username: "john4",
    comment: "hello my name is john4",
  },
  {
    id: uuid(),
    username: "john5",
    comment: "hello my name is john5",
  },
  {
    id: uuid(),
    username: "john6",
    comment: "hello my name is john6",
  },
];
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/comments", (req, res) => {
  res.render("comments/index", { comments });
});

app.get("/comments/new", (req, res) => {
  res.render("comments/new");
});

app.get("/comments/:id", (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  console.log(id);
  const comment = comments.find((c) => c.id === id);
  console.log(comment);

  res.render("comments/show", { comment });
});
// app.get("/comments/id", (req, res) => {
//   res.render("home");
// });
// app.get("/comments/id/edit", (req, res) => {
//   res.render("home");
// });
app.post("/comments", (req, res) => {
  console.log(req.body);
  const { username, comment, id = uuid() } = req.body;
  comments.push({ username, comment, id });
  // res.send("ETA POST ZAPROS")
  res.redirect("/comments");
});
app.listen(3000, () => {
  console.log("server is running 3000 !!! ");
});
