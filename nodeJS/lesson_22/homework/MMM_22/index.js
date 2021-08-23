const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const url = "mongodb://127.0.0.1:27017";
const dbName = "test";
const congoClient = new MongoClient(url);

congoClient.connect((err, client) => {
  if (err) throw err;
  const db = client.db(dbName);
  const users = db.collection("users");
  users.insertOne({ name: "Shams", age: 24, isAdmin: true }, (err, result) => {
    console.log(result);
  });
  //   users.findOne({ name: "Shams" }, (err, result) => {
  //     console.log(result);
  //   });

  users.insertMany(
    [
      { name: "Shamsiddinkhon", age: 24 },
      { name: "Muhriddin", age: 24 },
      { name: "User", age: 42 },
    ],
    (err, result) => {
      console.log(result);
    }
  );
  
  const users1 = users.find({ name: "Shams" });
  users1.forEach((user) => {
    console.log(user);
  });
});
