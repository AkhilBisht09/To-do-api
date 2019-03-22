var mongoose=require('mongoose');
var User=mongoose.model("User",{
    email:{
     type:String,
      required:true,
      minlength:1,
      trim:true
    }
});
module.exports={User};
// var newTodo=new Todo({text:"cook dinner"});
// newTodo.save().then(res=>{
// console.log("Saved todo",res);
// },err=>{
//     console.log("Unable tpo save todo")
// });
// var otherTodo=new Todo(
//     {text:"   Meditate before going to sleep   "});
//     otherTodo.save().then(res=>{
//         console.log("Saved todo",res);
//         },err=>{
//             console.log("Unable tpo save todo")
//         });


// var newUser=new User({email:"akhil@gmail.com"});
// newUser.save().then(res=>{
//     console.log("Saved todo",res);
//         },err=>{
//             console.log("Unable tpo save todo")
// });