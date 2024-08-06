const mongoose=require('mongoose')
const Schema=mongoose.Schema
const passportLocalMongoose=require('passport-local-mongoose');
var Employee=new Schema({
    email:{
        type:String
    },
    password:{
        type:String
    }
})
Employee.plugin(passportLocalMongoose);
module.exports=mongoose.model('Employee',Employee)