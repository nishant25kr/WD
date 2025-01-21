const express=require('express')
const app=express();
const userModel=require('./usermodel')

app.use(express.json());
 
app.get('/',(req,res)=>{
    res.send("hello");
})

app.get('./create', async (req,res)=>{
    let createduser=await userModel.create({
        name:"nishant",
        username:"nishant123",
        email:"nishant@gmail.com"
    })
    res.send(createduser);
})

app.listen(3000);

