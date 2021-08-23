const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const url = "mongodb://127.0.0.1:27017";
const dbName = "test";
const mongoClient = new MongoClient(url);

const app = express();
app.set("views", "templates");
app.set("view engine", "pug");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));



let db = null;
let books = null
mongoClient.connect((err, book) => {
  if (err) throw err;
  db = book.db(dbName);
  books = db.collection("books");
});



app.get("/addbook", (req, res) => {
  res.render("addbook")
})
app.post("/addbook", (req, res) => {
  const { body } = req;
    console.log(body);
    books.insertOne({ ...body }, (err, result) => {
      console.log(result);
    });
  res.redirect("/")
})
// {[body.select]:`${body.search}`}
app.post("/search", (req, res)=> {
  const { body } = req;
  // console.log(body);
    const search= books.find({[body.select]:`${body.search}`},)
    search.forEach((result)=>{
      console.log(result);
      res.render("index")
    })

})
app.get("/", (req, res) => {
  // books.find().forEach((result)=>{
  //   console.log(result);
  // })
  res.render("index")
})

app.use("*", (req, res) => {
  res.status(404);
});
app.listen(3000);


//   books.findOne({ name: "Shams" }, (err, result) => {
  //     console.log(result);
  //   });

