const mongoosh=require('mongoose');

mongoosh.connect("mongodb://127.0.0.1:27017/testapp");
const userSchema=mongoosh.Schema({
    image:String,
    email:String,
    name:String
    
}) 
module.exports = mongoosh.model('user',userSchema)

