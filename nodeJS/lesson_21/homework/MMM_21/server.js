const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const dbName = "test";
const url = "mongodb://127.0.0.1:27017";
const mongoClient = new MongoClient(url);
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

let db = null;
let users = null;
mongoClient.connect((err, client) => {
  if (err) throw err;
  db = client.db(dbName);
  users = db.collection("users");
});

app.post("/add-user", (req, res) => {
  const { body } = req;
  users.insertOne({ ...body }, (err, result) => {
    result;
  });
  res.redirect("/");
});

app.get("/get-users", (req, res) => {
  const users1 = users.find();
  users1.forEach((user) => {
    console.log(user);
  });
  res.redirect("/");
});

app.get("/delete-users", (req, res) => {
  users.remove({});
  res.redirect("/");
});
app.use("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "index.html"));
});

app.listen(3000);
