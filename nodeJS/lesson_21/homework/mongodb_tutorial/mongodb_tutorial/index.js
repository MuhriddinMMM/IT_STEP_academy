const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const url = 'mongodb://127.0.0.1:27017'
const dbName = 'test'
const mongoClient = new MongoClient(url)

mongoClient.connect((err, client) => {
    if(err) throw err
    const db = client.db(dbName)
    const users = db.collection('users')
})
