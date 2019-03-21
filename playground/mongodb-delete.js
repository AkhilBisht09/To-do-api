const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp", { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log("Unable to connect to mongo db server");
    }
    console.log("Successful connect");

    const db = client.db('TodoApp');
    db.collection('Todos').findOneAndDelete({completed:false}).then((docs)=>{
       console.log(docs);
    });
   // client.close();
})