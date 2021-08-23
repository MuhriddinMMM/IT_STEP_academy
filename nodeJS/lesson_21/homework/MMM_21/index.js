

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;

// const dbName = "test";
// const url = "mongodb://127.0.0.1:27017";
// const mongoClient = new MongoClient(url);

// mongoClient.connect((err, client) => {
//   if (err) throw err;
//   const db = client.db(dbName);
//   const users = db.collection("users");


  // users.insertOne(
  //   { name: "muhriddin", age: 24, isAdmin: true },
  //   (err, result) => {
  //     console.log(result);
  //   }
  // );
  // users.insertMany([
  //   { name: "Max", age: 24, isAdmin: true },
  //   { name: "Max", age: 24, isAdmin: false },
  //   { name: "Alex", age: 24, isAdmin: true },
  // ]);
  // const users1 = users.find({ name: "muhriddin" });
  // users1.forEach((user) => {
  //   console.log(user);
  // });
  // const users2 = users.find({ name: "Max" });
  // users2.forEach((user) => {
  //   console.log(user);
  // });
// });
