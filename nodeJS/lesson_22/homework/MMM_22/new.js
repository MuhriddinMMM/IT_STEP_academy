const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const url = "mongodb://127.0.0.1:27017";
const dbName = "test";
const congoClient = new MongoClient(url);

let db = null;
let books = null;
congoClient.connect((err, client) => {
  if (err) throw err;
  db = client.db(dbName);
  books = db.collection("books");
  books.insertOne({ name: "Shams", age: 24, isAdmin: true }, (err, result) => {
    console.log(result);
  });

  books.insert(
    [
      {
        name: "Book 1",
        url: "https://somehost.org.png",
        price: 19.99,
        desc: "Lorem impus",
      },
      {
        name: "Book 2",
        url: "https://somehost.org.png",
        price: 19.99,
        desc: "Lorem impus",
      },
      {
        name: "Book 3",
        url: "https://somehost.org./imgpng",
        price: 19.99,
        desc: "Lorem impus",
      },
    ],
    (err, result) => {
      console.log(result);
    }
  );
  books.insertOne({title: "Book 2", url: "https://somehost.org.png"})
});
