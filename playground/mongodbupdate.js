const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp", { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log("Unable to connect to mongo db server");
    }
    console.log("Successful connect");

    const db = client.db('TodoApp');
    db.collection('Todos').findOneAndUpdate({_id:new ObjectID("5c933b795519eaf2a2dcc6c9")},{$set:{completed:true}},
    {
        returnOriginal:false
    }).then((docs)=>{
       console.log(docs);
    });
   // client.close();
})