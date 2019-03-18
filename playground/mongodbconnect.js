const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp", { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log("Unable to connect to mongo db server");
    }
    console.log("Successful connect");
    const db = client.db('TodoApp');
    /*db.collection('Todos').insertOne({
        text: "Something todo",
        completed: false
    }, (err, res) => {
        if (err) {
            return console.log("Unable to insert to do");
        }
        console.log(JSON.stringify(res.ops, undefined, 2));
    })*/
    // db.collection('Users').insertOne({
    //     name: "Akhil",
    //     age: 20,
    //     location: "Shimla"
    // }, (err, res) => {
    //     if (err) {
    //         return console.log("Unable to add user");
    //     }
    //     console.log(JSON.stringify(res.ops, undefined, 2));
    // })
    client.close();
})