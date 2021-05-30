const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

const friends = [
  {
    number: "+998... it is secret",
    friendname: "Shamsiddin",
    aboutfriend: "He will be a head of beeline company",
  },
  {
    number: "+998... it is secret",
    friendname: "Avazbek",
    aboutfriend: "He will learn programming language",
  },
  {
    number: "+998... it is secret",
    friendname: "Ibrohim",
    aboutfriend: "He will be an Air Traffic Controller",
  },
  {
    number: "+998... it is secret",
    friendname: "Mamur",
    aboutfriend: "He is a businessman",
  },
  {
    number: "+998... it is secret",
    friendname: "Abdulaziz",
    aboutfriend: "He works at Huawei company",
  },
];

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/comments", (req, res) => {
  res.render("friends/list", { friends });
});
app.get("/tasks", (req, res) => {
  res.render("friends/onepage", { friends });
});
app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
