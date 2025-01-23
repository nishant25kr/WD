const express=require('express')
const app=express();
const userModel=require('./models/user');

app.use(express.json());
 
app.get('/',(req,res)=>{
    res.send("hello");
})

app.get('./create', async (req,res)=>{
    let createduser = await userModel.create({
        image: adfad,
        email:"nishant@gmail.com",
        name:"nisahnt"
    })
    res.send(createduser);
})

app.listen(3000);

