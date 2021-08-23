const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const url = "mongodb://127.0.0.1:27017";
const dbName = "test";
const mongoClient = new MongoClient(url);

let db = null;
let books = null;

mongoClient.connect((err, client) => {
  if (err) throw err;
  db = client.db(dbName);
  books = db.collection("books");

  books.insertOne(
    {
      title: "Book 2",
      url: "https://somehost.org/img1.png",
      price: 29.99,
      desc: "Lorem ipsum",
    },
    (err, result) => {
      if (err) throw err;
      console.log(result);
    }
  );
  books.insertMany(
    [
      {
        title: "Book 3",
        url: "https://somehost.org/img1.png",
        price: 29.99,
        desc: "Lorem ipsum",
      },
      {
        title: "Book 4",
        url: "https://somehost.org/img1.png",
        price: 29.99,
        desc: "Lorem ipsum",
      },
    ],
    (err, result) => {
      if (err) throw err;
      console.log(result);
    }
  );
  
  books.find({title: {$exists: true}}).forEach(book => {
      console.log(book)
  })
});



