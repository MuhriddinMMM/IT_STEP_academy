const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

const comments = [
  {
    id: 1,
    username: "john",
    comment: "hello asdasdasdmy name is john",
  },
  {
    id: 2,
    username: "mark",
    comment: "hello my name is asdasdasdjohn",
  },
  {
    id: 3,
    username: "david",
    comment: "hello madasdsady name is john",
  },
  {
    id: 4,
    username: "sara",
    comment: "hello my name isadsads john",
  },
  {
    id: 5,
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

app.post("/comments", (req, res) => {
  console.log(req.body);
  const { username, comment } = req.body;
  comments.push({ username, comment });
  res.redirect("/comments");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
