var express=require('express');
var bodyParser=require('body-parser');

var {mongoose}=require('./db/mongoose');
var {Todo}=require('./models/todo');
var {User}=require('./models/user');


var app=express();
app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
var todo=new Todo({
    text:req.body.text
});
todo.save().then((docs)=>{
    res.send(docs);
},(err)=>{
    res.status(400).send(err);
});
});
app.get('/todos',(req,res)=>{
    Todo.find().then((Todos)=>{
    res.send({Todos});
    },(e)=>{
     res.status(400).send(e);
    });
});
app.get('/todos/:id',(req,res)=>{
    
    var id=req.params.id;
    if(mongoose.Types.ObjectId.isValid(id)){
    Todo.findById({_id:id}).then((todos)=>{
        if(!todos)
       return res.status(404).send();
       res.send({todos});
    }).catch((err)=>{
        res.send("Error 400");
    });
    }
    else{
        res.status(404).send();
    }
});
app.listen(3000,()=>{
    console.log("started on port 3000");
});