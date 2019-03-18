const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp", { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log("Unable to connect to mongo db server");
    }
    console.log("Successful connect");

    const db = client.db('TodoApp');
    db.collection('Users').find().toArray().then((docs)=>{
       console.log(JSON.stringify((docs),undefined,2));
    });
   // client.close();
})