const mongoosh=require('mongoosh');

mongoosh.connect(`mongodb://127.0.0.1:27017/database`);

const userSchema=mongoosh.Schema({
    name:String,
    user:String,
    email:String,
    
})

module.exports = mongoosh.model('user',userSchema);