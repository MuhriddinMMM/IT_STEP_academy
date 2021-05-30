const express = require("express");
const app = express();

const { v4: uuid } = require("uuid");

app.use(express.urlencoded({ extended: true }));

const comments = [
  {
    id: uuid(),
    username: "john",
    comment: "hello asdasdasdmy name is john",
  },
  {
    id: uuid(),
    username: "mark",
    comment: "hello my name is asdasdasdjohn",
  },
  {
    id: uuid(),
    username: "david",
    comment: "hello madasdsady name is john",
  },
  {
    id: uuid(),
    username: "sara",
    comment: "hello my name isadsads john",
  },
  {
    id: uuid(),
    username: "mike",
    comment: "hello my adasdsaname is john",
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
  const comment = comments.find((c) => c.id === id);
  console.log(comment);
  res.render("comments/show", { comment });
});

app.post("/comments", (req, res) => {
  console.log(req.body);
  const { username, comment } = req.body;
  comments.push({
    username,
    comment,
    id: uuid(),
  });
  res.redirect("/comments");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
